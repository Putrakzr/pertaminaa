import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { createActivityLog } from "@/lib/activityLog";

// GET - Get all materials
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
        { namaMaterial: { contains: search } },
        { kodeMaterial: { contains: search } },
        { spesifikasi: { contains: search } },
      ];
    }

    if (kondisi) {
      where.kondisi = kondisi;
    }

    const materials = await prisma.material.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ materials });
  } catch (error) {
    console.error("Error fetching materials:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// POST - Create new material
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const {
      namaMaterial, kodeMaterial, spesifikasi, tahunPembelian, vendor,
      jumlah, unit, lokasiPenyimpanan, dokumentasi, typePeralatan,
      masaBerlakuType, kondisi, catatan
    } = body;

    if (!namaMaterial) {
      return NextResponse.json({ error: "Nama material wajib diisi" }, { status: 400 });
    }

    const material = await prisma.material.create({
      data: {
        namaMaterial,
        kodeMaterial,
        spesifikasi,
        tahunPembelian: tahunPembelian ? parseInt(tahunPembelian) : null,
        vendor,
        jumlah: jumlah ? parseInt(jumlah) : null,
        unit,
        lokasiPenyimpanan,
        dokumentasi,
        typePeralatan,
        masaBerlakuType: masaBerlakuType ? new Date(masaBerlakuType) : null,
        kondisi,
        catatan,
      },
    });

    // Log activity
    const adminId = (session.user as any)?.id;
    await createActivityLog({
      adminId,
      action: "create",
      entityType: "material",
      entityId: material.id,
      description: `Membuat material baru: ${namaMaterial}`,
    });

    return NextResponse.json({ material }, { status: 201 });
  } catch (error: any) {
    console.error("Error creating material:", error);
    console.error("Error details:", error.message, error.meta);
    return NextResponse.json({
      error: error.message || "Internal server error",
      details: process.env.NODE_ENV === "development" ? error.message : undefined
    }, { status: 500 });
  }
}

// PUT - Update material
export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const {
      id, namaMaterial, kodeMaterial, spesifikasi, tahunPembelian, vendor,
      jumlah, unit, lokasiPenyimpanan, dokumentasi, typePeralatan,
      masaBerlakuType, kondisi, catatan
    } = body;

    if (!id) {
      return NextResponse.json({ error: "ID material wajib diisi" }, { status: 400 });
    }

    if (!namaMaterial) {
      return NextResponse.json({ error: "Nama material wajib diisi" }, { status: 400 });
    }

    // Get old material for logging
    const oldMaterial = await prisma.material.findUnique({
      where: { id: parseInt(id) },
    });

    const material = await prisma.material.update({
      where: { id: parseInt(id) },
      data: {
        namaMaterial,
        kodeMaterial,
        spesifikasi,
        tahunPembelian: tahunPembelian ? parseInt(tahunPembelian) : null,
        vendor,
        jumlah: jumlah ? parseInt(jumlah) : null,
        unit,
        lokasiPenyimpanan,
        dokumentasi,
        typePeralatan,
        masaBerlakuType: masaBerlakuType ? new Date(masaBerlakuType) : null,
        kondisi,
        catatan,
      },
    });

    // Log activity
    const adminId = (session.user as any)?.id;
    await createActivityLog({
      adminId,
      action: "update",
      entityType: "material",
      entityId: material.id,
      description: `Mengupdate material: ${namaMaterial}`,
    });

    return NextResponse.json({ material });
  } catch (error: any) {
    console.error("Error updating material:", error);
    return NextResponse.json({
      error: error.message || "Internal server error",
      details: process.env.NODE_ENV === "development" ? error.message : undefined
    }, { status: 500 });
  }
}

// DELETE - Delete material
export async function DELETE(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID material wajib diisi" }, { status: 400 });
    }

    // Get material for logging before delete
    const material = await prisma.material.findUnique({
      where: { id: parseInt(id) },
    });

    await prisma.material.delete({
      where: { id: parseInt(id) },
    });

    // Log activity
    const adminId = (session.user as any)?.id;
    await createActivityLog({
      adminId,
      action: "delete",
      entityType: "material",
      entityId: parseInt(id),
      description: `Menghapus material: ${material?.namaMaterial || 'Unknown'}`,
    });

    return NextResponse.json({ message: "Material berhasil dihapus" });
  } catch (error: any) {
    console.error("Error deleting material:", error);
    return NextResponse.json({
      error: error.message || "Internal server error",
      details: process.env.NODE_ENV === "development" ? error.message : undefined
    }, { status: 500 });
  }
}

