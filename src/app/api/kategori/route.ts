import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const categories = await prisma.masterKategori.findMany({
      orderBy: { id: "asc" },
    });

    return NextResponse.json({ categories });
  } catch (error) {
    console.error("Get categories error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server saat mengambil kategori" },
      { status: 500 }
    );
  }
}
