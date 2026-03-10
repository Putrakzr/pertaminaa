import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nama, email, password } = body;

    // Validasi input
    if (!nama || !email || !password) {
      return NextResponse.json(
        { error: "Semua field harus diisi" },
        { status: 400 }
      );
    }

    // Cek email sudah terdaftar
    const existingAdmin = await prisma.admin.findUnique({
      where: { email },
    });

    if (existingAdmin) {
      return NextResponse.json(
        { error: "Email admin sudah terdaftar" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create admin
    const admin = await prisma.admin.create({
      data: {
        nama,
        email,
        password: hashedPassword,
        role: "admin",
      },
    });

    return NextResponse.json(
      {
        message: "Registrasi admin berhasil",
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
    console.error("Register admin error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}
