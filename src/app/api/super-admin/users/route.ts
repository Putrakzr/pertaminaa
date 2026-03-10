import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

// GET - Get all users
export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const role = (session.user as any).role;

    if (role !== "super_admin") {
      return NextResponse.json({ error: "Forbidden - Super Admin only" }, { status: 403 });
    }

    const users = await prisma.user.findMany({
      select: {
        id: true,
        nama: true,
        email: true,
        jabatan: true,
        lokasiSite: true,
        foto: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: {
            dataInjeksi: true
          }
        }
      },
      orderBy: { createdAt: "desc" }
    });

    const transformedUsers = users.map((user: any) => ({
      ...user,
      totalInjeksi: user._count?.dataInjeksi || 0
    }));

    return NextResponse.json({ users: transformedUsers });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// POST - Create new user
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const role = (session.user as any).role;

    if (role !== "super_admin") {
      return NextResponse.json({ error: "Forbidden - Super Admin only" }, { status: 403 });
    }

    const body = await request.json();
    const { nama, email, password, jabatan, lokasiSite } = body;

    if (!nama || !email || !password || !jabatan || !lokasiSite) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Check if email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return NextResponse.json({ error: "Email already exists" }, { status: 400 });
    }

    // Check if email is used by admin
    const existingAdmin = await prisma.admin.findUnique({
      where: { email }
    });

    if (existingAdmin) {
      return NextResponse.json({ error: "Email already exists as admin" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        nama,
        email,
        password: hashedPassword,
        jabatan,
        lokasiSite
      }
    });

    return NextResponse.json({ 
      user: {
        id: user.id,
        nama: user.nama,
        email: user.email,
        jabatan: user.jabatan,
        lokasiSite: user.lokasiSite
      }
    }, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

