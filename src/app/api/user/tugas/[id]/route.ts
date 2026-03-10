import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

type Params = { params: { id: string } };

// GET - User ambil detail tugas
export async function GET(request: NextRequest, { params }: Params) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const userId = parseInt((session.user as any).id);

    const tugas = await prisma.tugas.findUnique({
      where: { id: parseInt(params.id) },
      include: { admin: { select: { id: true, nama: true } } },
    });

    if (!tugas || tugas.userId !== userId) {
      return NextResponse.json({ error: "Tugas tidak ditemukan atau bukan milik Anda" }, { status: 404 });
    }

    return NextResponse.json({ tugas });
  } catch (error) {
    console.error("Get user tugas detail error:", error);
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 });
  }
}

// PUT - User update progress atau selesaikan tugas
export async function PUT(request: NextRequest, { params }: Params) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const role = (session.user as any).role;
    if (role !== "user") return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    const userId = parseInt((session.user as any).id);
    const body = await request.json();

    const existingTugas = await prisma.tugas.findUnique({ where: { id: parseInt(params.id) } });
    if (!existingTugas || existingTugas.userId !== userId) {
      return NextResponse.json({ error: "Tugas tidak ditemukan" }, { status: 404 });
    }

    if (existingTugas.status === "approved") {
      return NextResponse.json({ error: "Tugas sudah selesai diverifikasi" }, { status: 400 });
    }

    if (existingTugas.status === "review" && body.status && body.status !== "review") {
      return NextResponse.json({ error: "Tugas sedang di-review admin" }, { status: 400 });
    }

    // Ekstrak fields yang valid berdasarkan skema Prisma saat ini
    const dataToUpdate: any = {};
    if (body.status) dataToUpdate.status = body.status;
    if (body.fileHasil) dataToUpdate.fileHasil = body.fileHasil;

    const updatedTugas = await prisma.tugas.update({
      where: { id: parseInt(params.id) },
      data: dataToUpdate,
    });

    if (body.status && body.status !== existingTugas.status) {
      let notifAdminMsg =
        body.status === "in_progress"
          ? `Tugas "${updatedTugas.judul}" telah diterima dan mulai dikerjakan oleh ${(session.user as any).name}`
          : body.status === "review"
          ? `Tugas "${updatedTugas.judul}" telah diselesaikan oleh ${(session.user as any).name}. Menunggu verifikasi.`
          : `Update tugas "${updatedTugas.judul}" oleh ${(session.user as any).name}`;

      try {
        await prisma.notification.create({
          data: {
            adminId: updatedTugas.adminId,
            type: "tugas_update",
            title: "Update Tugas",
            message: notifAdminMsg,
            data: JSON.stringify({ tugasId: updatedTugas.id }),
          },
        });
      } catch (e) { console.error("Notif error:", e); }
    }

    return NextResponse.json({ message: "Tugas berhasil diupdate", tugas: updatedTugas });
  } catch (error) {
    console.error("Update user tugas error:", error);
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 });
  }
}
