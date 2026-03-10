import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

// GET - Ambil semua tugas untuk admin
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const role = (session.user as any).role;
    if (role !== "admin" && role !== "super_admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");

    const where: any = {};
    if (status) where.status = status;

    const tugas = await prisma.tugas.findMany({
      where,
      include: {
        user: {
          select: { id: true, nama: true, jabatan: true, lokasiSite: true },
        },
        admin: {
          select: { id: true, nama: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ tugas });
  } catch (error) {
    console.error("Get tugas error:", error);
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 });
  }
}

// POST - Admin buat tugas baru untuk user
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const role = (session.user as any).role;
    if (role !== "admin" && role !== "super_admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const body = await request.json();
    const { 
      judul, 
      deskripsi, 
      fileLampiran, 
      userId, 
      lokasiField, 
      lokasiArea, 
      lokasiSumur,
      tanggalMulai,
      dueDate,
      kategori     
    } = body;

    if (!judul || !deskripsi || !userId) {
      return NextResponse.json(
        { error: "Judul, deskripsi, dan user penerima harus diisi" },
        { status: 400 }
      );
    }

    const adminId = parseInt((session.user as any).id);
    const userIdInt = parseInt(userId);

    const tugas = await prisma.tugas.create({
      data: {
        judul,
        deskripsi,
        fileLampiran: fileLampiran || null,
        userId: userIdInt,
        adminId,
        lokasiField: lokasiField || null,
        lokasiArea: lokasiArea || null,
        lokasiSumur: lokasiSumur || null,
        tanggalMulai: tanggalMulai ? new Date(tanggalMulai) : null,
        dueDate: dueDate ? new Date(dueDate) : null,
        status: "pending",
        kategori: kategori || null,
      },
    });

    // Buat notifikasi untuk user
    try {
      await prisma.notification.create({
        data: {
          userId: userIdInt,
          type: "tugas_baru",
          title: "Tugas Baru Masuk",
          message: `Anda mendapat tugas baru: ${judul}`,
          data: JSON.stringify({ tugasId: tugas.id }),
        },
      });
    } catch (notifErr) {
      console.error("Notifikasi error (non-fatal):", notifErr);
    }

    return NextResponse.json({ message: "Tugas berhasil dibuat", tugas }, { status: 201 });
  } catch (error) {
    console.error("Create tugas error:", error);
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 });
  }
}
