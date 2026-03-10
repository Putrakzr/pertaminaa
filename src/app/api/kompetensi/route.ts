import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { createActivityLog } from "@/lib/activityLog";

// GET - Get all kompetensi personil
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") || "";
    const statusKompetensi = searchParams.get("statusKompetensi") || "";

    const where: any = {};
    
    if (search) {
      where.OR = [
        { nama: { contains: search } },
        { nip: { contains: search } },
        { jenisKompetensi: { contains: search } },
        { namaSertifikasi: { contains: search } },
      ];
    }
    
    if (statusKompetensi) {
      where.statusKompetensi = statusKompetensi;
    }

    const kompetensi = await prisma.kompetensiPersonil.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ kompetensi });
  } catch (error) {
    console.error("Error fetching kompetensi:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// POST - Create new kompetensi personil
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { 
      nama, nip, jabatan, unitKerja, jenisKompetensi, namaSertifikasi, 
      nomorSertifikasi, lembagaPenerbit, tanggalTerbit, masaBerlakuSertifikasi, 
      statusKompetensi, catatan 
    } = body;

    if (!nama || !jenisKompetensi) {
      return NextResponse.json({ error: "Nama dan Jenis Kompetensi wajib diisi" }, { status: 400 });
    }

    const kompetensi = await prisma.kompetensiPersonil.create({
      data: {
        nama,
        nip,
        jabatan,
        unitKerja,
        jenisKompetensi,
        namaSertifikasi,
        nomorSertifikasi,
        lembagaPenerbit,
        tanggalTerbit: tanggalTerbit ? new Date(tanggalTerbit) : null,
        masaBerlakuSertifikasi: masaBerlakuSertifikasi ? new Date(masaBerlakuSertifikasi) : null,
        catatan: catatan,
      },
    });

    // Log activity
    const adminId = (session.user as any)?.id;
    await createActivityLog({
      adminId,
      action: "create",
      entityType: "kompetensi",
      entityId: kompetensi.id,
      description: `Membuat kompetensi baru: ${nama} - ${jenisKompetensi}`,
    });

    return NextResponse.json({ kompetensi }, { status: 201 });
  } catch (error) {
    console.error("Error creating kompetensi:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// PUT - Update kompetensi personil
export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { 
      id, nama, nip, jabatan, unitKerja, jenisKompetensi, namaSertifikasi, 
      nomorSertifikasi, lembagaPenerbit, tanggalTerbit, masaBerlakuSertifikasi, 
      statusKompetensi, catatan 
    } = body;

    if (!id) {
      return NextResponse.json({ error: "ID kompetensi wajib diisi" }, { status: 400 });
    }

    if (!nama || !jenisKompetensi) {
      return NextResponse.json({ error: "Nama dan Jenis Kompetensi wajib diisi" }, { status: 400 });
    }

    const kompetensi = await prisma.kompetensiPersonil.update({
      where: { id: parseInt(id) },
      data: {
        nama,
        nip,
        jabatan,
        unitKerja,
        jenisKompetensi,
        namaSertifikasi,
        nomorSertifikasi,
        lembagaPenerbit,
        tanggalTerbit: tanggalTerbit ? new Date(tanggalTerbit) : null,
        masaBerlakuSertifikasi: masaBerlakuSertifikasi ? new Date(masaBerlakuSertifikasi) : null,
        statusKompetensi: statusKompetensi || "aktif",
        catatan: catatan,
      },
    });

    // Log activity
    const adminId = (session.user as any)?.id;
    await createActivityLog({
      adminId,
      action: "update",
      entityType: "kompetensi",
      entityId: kompetensi.id,
      description: `Mengupdate kompetensi: ${nama} - ${jenisKompetensi}`,
    });

    return NextResponse.json({ kompetensi });
  } catch (error: any) {
    console.error("Error updating kompetensi:", error);
    return NextResponse.json({ 
      error: error.message || "Internal server error",
      details: process.env.NODE_ENV === "development" ? error.message : undefined
    }, { status: 500 });
  }
}

// DELETE - Delete kompetensi personil
export async function DELETE(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID kompetensi wajib diisi" }, { status: 400 });
    }

    // Get kompetensi for logging before delete
    const kompetensi = await prisma.kompetensiPersonil.findUnique({
      where: { id: parseInt(id) },
    });

    await prisma.kompetensiPersonil.delete({
      where: { id: parseInt(id) },
    });

    // Log activity
    const adminId = (session.user as any)?.id;
    await createActivityLog({
      adminId,
      action: "delete",
      entityType: "kompetensi",
      entityId: parseInt(id),
      description: `Menghapus kompetensi: ${kompetensi?.nama || 'Unknown'}`,
    });

    return NextResponse.json({ message: "Kompetensi berhasil dihapus" });
  } catch (error: any) {
    console.error("Error deleting kompetensi:", error);
    return NextResponse.json({ 
      error: error.message || "Internal server error",
      details: process.env.NODE_ENV === "development" ? error.message : undefined
    }, { status: 500 });
  }
}

