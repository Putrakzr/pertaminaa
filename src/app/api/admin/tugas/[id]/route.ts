import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

type Params = { params: { id: string } };

// GET - Ambil detail tugas
export async function GET(request: NextRequest, { params }: Params) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const role = (session.user as any).role;
    if (role !== "admin" && role !== "super_admin") return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    const tugas = await prisma.tugas.findUnique({
      where: { id: parseInt(params.id) },
      include: {
        user: { select: { id: true, nama: true, email: true, jabatan: true, lokasiSite: true } },
        admin: { select: { id: true, nama: true } },
      },
    });

    if (!tugas) return NextResponse.json({ error: "Tugas tidak ditemukan" }, { status: 404 });
    return NextResponse.json({ tugas });
  } catch (error) {
    console.error("Get tugas detail error:", error);
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 });
  }
}

// PUT - Update/verifikasi tugas
export async function PUT(request: NextRequest, { params }: Params) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const role = (session.user as any).role;
    if (role !== "admin" && role !== "super_admin") return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    const body = await request.json();
    const { status } = body;

    const existingTugas = await prisma.tugas.findUnique({ where: { id: parseInt(params.id) } });
    if (!existingTugas) return NextResponse.json({ error: "Tugas tidak ditemukan" }, { status: 404 });

    const updatedTugas = await prisma.tugas.update({
      where: { id: parseInt(params.id) },
      data: { ...body },
    });

    if (status && status !== existingTugas.status) {
      let msg = status === "approved"
        ? `Tugas "${updatedTugas.judul}" telah disetujui.`
        : status === "rejected"
        ? `Tugas "${updatedTugas.judul}" ditolak. Silakan periksa kembali.`
        : `Status tugas "${updatedTugas.judul}" diperbarui menjadi: ${status}`;

      try {
        await prisma.notification.create({
          data: {
            userId: updatedTugas.userId,
            type: "status_update",
            title: "Update Status Tugas",
            message: msg,
            data: JSON.stringify({ tugasId: updatedTugas.id }),
          },
        });
      } catch (e) { console.error("Notif error:", e); }
    }

    return NextResponse.json({ message: "Tugas berhasil diupdate", tugas: updatedTugas });
  } catch (error) {
    console.error("Update tugas error:", error);
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 });
  }
}

// DELETE - Hapus tugas
export async function DELETE(request: NextRequest, { params }: Params) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const role = (session.user as any).role;
    if (role !== "admin" && role !== "super_admin") return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    const check = await prisma.tugas.findUnique({ where: { id: parseInt(params.id) } });
    if (!check) return NextResponse.json({ error: "Tugas tidak ditemukan" }, { status: 404 });

    await prisma.tugas.delete({ where: { id: parseInt(params.id) } });
    return NextResponse.json({ message: "Tugas berhasil dihapus" });
  } catch (error) {
    console.error("Delete tugas error:", error);
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 });
  }
}
