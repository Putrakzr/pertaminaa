import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

// GET - Get all admins
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

    const admins = await prisma.admin.findMany({
      select: {
        id: true,
        nama: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: {
            notifications: true
          }
        }
      },
      orderBy: { createdAt: "desc" }
    });

    return NextResponse.json({ admins });
  } catch (error) {
    console.error("Error fetching admins:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// POST - Create new admin
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
    const { nama, email, password, role: adminRole } = body;

    if (!nama || !email || !password) {
      return NextResponse.json({ error: "Nama, email, and password are required" }, { status: 400 });
    }

    // Validate role
    if (adminRole && !["admin", "super_admin"].includes(adminRole)) {
      return NextResponse.json({ error: "Invalid role" }, { status: 400 });
    }

    // Check if email already exists in admins
    const existingAdmin = await prisma.admin.findUnique({
      where: { email }
    });

    if (existingAdmin) {
      return NextResponse.json({ error: "Email already exists" }, { status: 400 });
    }

    // Check if email is used by user
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return NextResponse.json({ error: "Email already exists as user" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await prisma.admin.create({
      data: {
        nama,
        email,
        password: hashedPassword,
        role: adminRole || "admin"
      }
    });

    return NextResponse.json({ 
      admin: {
        id: admin.id,
        nama: admin.nama,
        email: admin.email,
        role: admin.role
      }
    }, { status: 201 });
  } catch (error) {
    console.error("Error creating admin:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

