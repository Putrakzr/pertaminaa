import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { createActivityLog } from "@/lib/activityLog";

// GET - Get all sertifikasi peralatan
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") || "";
    const kondisi = searchParams.get("kondisi") || "";

    const where: any = {};
    
    if (search) {
      where.OR = [
        { namaPeralatan: { contains: search } },
        { kodePeralatan: { contains: search } },
        { jenisPeralatan: { contains: search } },
        { namaOperator: { contains: search } },
      ];
    }
    
    if (kondisi) {
      where.kondisi = kondisi;
    }

    const sertifikasi = await prisma.sertifikasiPeralatan.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ sertifikasi });
  } catch (error) {
    console.error("Error fetching sertifikasi peralatan:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// POST - Create new sertifikasi peralatan
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { 
      namaPeralatan, kodePeralatan, jenisPeralatan, merk, type, nomorSeri,
      tahunProduksi, lokasiPemasangan, namaOperator, nomorSertifikasiOperator,
      jenisSertifikasiOperator, masaBerlakuSertifikasiOperator, nomorSertifikatPeralatan,
      lembagaPenerbitSertifikat, masaBerlakuSertifikatPeralatan, tanggalTerbitSertifikat,
      kondisi, hasilInspeksiTerakhir, catatan 
    } = body;

    if (!namaPeralatan) {
      return NextResponse.json({ error: "Nama peralatan wajib diisi" }, { status: 400 });
    }

    const sertifikasi = await prisma.sertifikasiPeralatan.create({
      data: {
        namaPeralatan,
        kodePeralatan,
        jenisPeralatan,
        merk,
        type,
        nomorSeri,
        tahunProduksi: tahunProduksi ? parseInt(tahunProduksi) : null,
        lokasiPemasangan,
        namaOperator,
        nomorSertifikasiOperator,
        jenisSertifikasiOperator,
        masaBerlakuSertifikasiOperator: masaBerlakuSertifikasiOperator ? new Date(masaBerlakuSertifikasiOperator) : null,
        nomorSertifikatPeralatan,
        lembagaPenerbitSertifikat,
        masaBerlakuSertifikatPeralatan: masaBerlakuSertifikatPeralatan ? new Date(masaBerlakuSertifikatPeralatan) : null,
        tanggalTerbitSertifikat: tanggalTerbitSertifikat ? new Date(tanggalTerbitSertifikat) : null,
        kondisi,
        hasilInspeksiTerakhir: hasilInspeksiTerakhir ? new Date(hasilInspeksiTerakhir) : null,
        catatatan: catatan,
      },
    });

    // Log activity
    const adminId = (session.user as any)?.id;
    await createActivityLog({
      adminId,
      action: "create",
      entityType: "sertifikasi",
      entityId: sertifikasi.id,
      description: `Membuat sertifikasi peralatan baru: ${namaPeralatan}`,
    });

    return NextResponse.json({ sertifikasi }, { status: 201 });
  } catch (error) {
    console.error("Error creating sertifikasi peralatan:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// PUT - Update sertifikasi peralatan
export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { 
      id, namaPeralatan, kodePeralatan, jenisPeralatan, merk, type, nomorSeri,
      tahunProduksi, lokasiPemasangan, namaOperator, nomorSertifikasiOperator,
      jenisSertifikasiOperator, masaBerlakuSertifikasiOperator, nomorSertifikatPeralatan,
      lembagaPenerbitSertifikat, masaBerlakuSertifikatPeralatan, tanggalTerbitSertifikat,
      kondisi, hasilInspeksiTerakhir, catatan 
    } = body;

    if (!id) {
      return NextResponse.json({ error: "ID sertifikasi wajib diisi" }, { status: 400 });
    }

    if (!namaPeralatan) {
      return NextResponse.json({ error: "Nama peralatan wajib diisi" }, { status: 400 });
    }

    const sertifikasi = await prisma.sertifikasiPeralatan.update({
      where: { id: parseInt(id) },
      data: {
        namaPeralatan,
        kodePeralatan,
        jenisPeralatan,
        merk,
        type,
        nomorSeri,
        tahunProduksi: tahunProduksi ? parseInt(tahunProduksi) : null,
        lokasiPemasangan,
        namaOperator,
        nomorSertifikasiOperator,
        jenisSertifikasiOperator,
        masaBerlakuSertifikasiOperator: masaBerlakuSertifikasiOperator ? new Date(masaBerlakuSertifikasiOperator) : null,
        nomorSertifikatPeralatan,
        lembagaPenerbitSertifikat,
        masaBerlakuSertifikatPeralatan: masaBerlakuSertifikatPeralatan ? new Date(masaBerlakuSertifikatPeralatan) : null,
        tanggalTerbitSertifikat: tanggalTerbitSertifikat ? new Date(tanggalTerbitSertifikat) : null,
        kondisi,
        hasilInspeksiTerakhir: hasilInspeksiTerakhir ? new Date(hasilInspeksiTerakhir) : null,
        catatatan: catatan,
      },
    });

    // Log activity
    const adminId = (session.user as any)?.id;
    await createActivityLog({
      adminId,
      action: "update",
      entityType: "sertifikasi",
      entityId: sertifikasi.id,
      description: `Mengupdate sertifikasi peralatan: ${namaPeralatan}`,
    });

    return NextResponse.json({ sertifikasi });
  } catch (error: any) {
    console.error("Error updating sertifikasi peralatan:", error);
    return NextResponse.json({ 
      error: error.message || "Internal server error",
      details: process.env.NODE_ENV === "development" ? error.message : undefined
    }, { status: 500 });
  }
}

// DELETE - Delete sertifikasi peralatan
export async function DELETE(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID sertifikasi wajib diisi" }, { status: 400 });
    }

    // Get sertifikasi for logging before delete
    const sertifikasi = await prisma.sertifikasiPeralatan.findUnique({
      where: { id: parseInt(id) },
    });

    await prisma.sertifikasiPeralatan.delete({
      where: { id: parseInt(id) },
    });

    // Log activity
    const adminId = (session.user as any)?.id;
    await createActivityLog({
      adminId,
      action: "delete",
      entityType: "sertifikasi",
      entityId: parseInt(id),
      description: `Menghapus sertifikasi peralatan: ${sertifikasi?.namaPeralatan || 'Unknown'}`,
    });

    return NextResponse.json({ message: "Sertifikasi peralatan berhasil dihapus" });
  } catch (error: any) {
    console.error("Error deleting sertifikasi peralatan:", error);
    return NextResponse.json({ 
      error: error.message || "Internal server error",
      details: process.env.NODE_ENV === "development" ? error.message : undefined
    }, { status: 500 });
  }
}

