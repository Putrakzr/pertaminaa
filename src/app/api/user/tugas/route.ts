import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const role = (session.user as any).role;
    if (role !== "user") return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    const userId = parseInt((session.user as any).id);
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");

    const where: any = { userId };
    if (status) where.status = status;

    const tugas = await prisma.tugas.findMany({
      where,
      include: { admin: { select: { id: true, nama: true } } },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ tugas });
  } catch (error) {
    console.error("Get user tugas error:", error);
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 });
  }
}
