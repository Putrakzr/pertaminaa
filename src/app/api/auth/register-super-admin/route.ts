import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nama, email, password } = body;

    if (!nama || !email || !password) {
      return NextResponse.json(
        { error: "Nama, email, dan password wajib diisi" },
        { status: 400 }
      );
    }

    // Check if email already exists in admins
    const existingAdmin = await prisma.admin.findUnique({
      where: { email },
    });

    if (existingAdmin) {
      return NextResponse.json(
        { error: "Email sudah terdaftar" },
        { status: 400 }
      );
    }

    // Check if email already exists in users
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email sudah terdaftar sebagai user" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create super admin
    const admin = await prisma.admin.create({
      data: {
        nama,
        email,
        password: hashedPassword,
        role: "super_admin",
      },
    });

    return NextResponse.json(
      {
        message: "Super Admin berhasil dibuat",
        admin: {
          id: admin.id,
          nama: admin.nama,
          email: admin.email,
          role: admin.role,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating super admin:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}
