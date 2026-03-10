import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

// GET - Get kompetensi by ID
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

    const kompetensi = await prisma.kompetensiPersonil.findUnique({
      where: { id },
    });

    if (!kompetensi) {
      return NextResponse.json(
        { error: "Kompetensi tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json({ kompetensi });
  } catch (error) {
    console.error("Error fetching kompetensi:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

