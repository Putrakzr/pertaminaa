import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const field = searchParams.get("field");
    const kategori = searchParams.get("kategori");

    if (!field) {
      return NextResponse.json(
        { error: "Parameter field harus diisi" },
        { status: 400 }
      );
    }

    const where: any = { field };
    if (kategori) {
      where.kategori = kategori;
    }

    const locations = await prisma.masterLokasi.findMany({
      where,
      orderBy: { nama: "asc" },
    });

    return NextResponse.json({ locations });
  } catch (error) {
    console.error("Get locations error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}
