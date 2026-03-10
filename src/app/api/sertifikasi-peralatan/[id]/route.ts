import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

// GET - Get sertifikasi peralatan by ID
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const id = parseInt(params.id);

    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const sertifikasi = await prisma.sertifikasiPeralatan.findUnique({
      where: { id },
    });

    if (!sertifikasi) {
      return NextResponse.json(
        { error: "Sertifikasi peralatan tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json({ sertifikasi });
  } catch (error) {
    console.error("Error fetching sertifikasi peralatan:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

