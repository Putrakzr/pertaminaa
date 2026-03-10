import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    // 1. Ambil semua tugas yang belum selesai dan memiliki dueDate
    const activeTasks = await prisma.tugas.findMany({
      where: {
        status: {
          notIn: ["approved", "rejected"], // Hanya tugas yang masih aktif
        },
        dueDate: {
          not: null, // Harus ada tanggal jatuh tempo
        },
      },
      select: {
        id: true,
        judul: true,
        dueDate: true,
        adminId: true,
        userId: true,
      },
    });

    let notificationsSent = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset waktu ke awal hari untuk perbandingan

    for (const task of activeTasks) {
      if (!task.dueDate) continue;

      const dueDate = new Date(task.dueDate);
      dueDate.setHours(0, 0, 0, 0);

      // Hitung selisih waktu dalam milidetik, lalu ubah ke hari
      const diffTime = dueDate.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Pembulatan ke atas

      // Cek apakah hari ini tepat H-30, H-14, H-7, atau H-3
      const reminderDays = [30, 14, 7, 3];
      
      if (reminderDays.includes(diffDays)) {
        // Cita-citanya mengirim notifikasi ke Admin pembuat tugas
        const notificationTitle = `Pengingat Tugas: H-${diffDays}`;
        const notificationMessage = `Tugas "${task.judul}" akan jatuh tempo dalam ${diffDays} hari.`;

        // 2. Cek apakah notifikasi pengingat H-X untuk tugas ini sudah pernah dikirim hari ini
        // (opsional, untuk mencegah spam jika API cron terpanggil >1 kali sehari)
        // Karena kita menggunakan identifier unik dalam logic aplikasi, kita bisa berasumsi
        // Cron hanya jalan sekali sehari. Tapi untuk aman:
        const existingNotif = await prisma.notification.findFirst({
          where: {
            userId: task.adminId, // Notifikasi dikirim ke Admin
            type: "reminder_tugas",
            title: notificationTitle,
            message: notificationMessage,
            createdAt: {
              gte: today, // Dibuat hari ini
            }
          }
        });

        if (!existingNotif) {
          await prisma.notification.create({
            data: {
              userId: task.adminId, // Kirim ke Admin pembuat
              type: "reminder_tugas",
              title: notificationTitle,
              message: notificationMessage,
              data: JSON.stringify({ tugasId: task.id, diffDays }),
            },
          });
          notificationsSent++;
        }
      }
    }

    return NextResponse.json({
      success: true,
      message: `Cron job berhasil dijalankan. ${notificationsSent} notifikasi pengingat dikirim.`,
      tasksChecked: activeTasks.length,
    });
  } catch (error) {
    console.error("Error executing cron reminder:", error);
    return NextResponse.json(
      { success: false, error: "Gagal menjalankan pengingat tugas" },
      { status: 500 }
    );
  }
}
