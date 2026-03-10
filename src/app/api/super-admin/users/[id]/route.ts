import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

// GET - Get single user by ID
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const role = (session.user as any).role;

    if (role !== "super_admin") {
      return NextResponse.json({ error: "Forbidden - Super Admin only" }, { status: 403 });
    }

    const userId = parseInt(params.id);

    if (isNaN(userId)) {
      return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
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
      }
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ 
      user: {
        ...user,
        totalInjeksi: user._count?.dataInjeksi || 0
      }
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// PUT - Update user
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const role = (session.user as any).role;

    if (role !== "super_admin") {
      return NextResponse.json({ error: "Forbidden - Super Admin only" }, { status: 403 });
    }

    const userId = parseInt(params.id);

    if (isNaN(userId)) {
      return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
    }

    const body = await request.json();
    const { nama, email, password, jabatan, lokasiSite } = body;

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { id: userId }
    });

    if (!existingUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Check email uniqueness if changed
    if (email && email !== existingUser.email) {
      const emailExists = await prisma.user.findUnique({
        where: { email }
      });
      if (emailExists) {
        return NextResponse.json({ error: "Email already exists" }, { status: 400 });
      }
    }

    const updateData: any = {};
    if (nama) updateData.nama = nama;
    if (email) updateData.email = email;
    if (jabatan) updateData.jabatan = jabatan;
    if (lokasiSite) updateData.lokasiSite = lokasiSite;
    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    const user = await prisma.user.update({
      where: { id: userId },
      data: updateData
    });

    return NextResponse.json({ 
      user: {
        id: user.id,
        nama: user.nama,
        email: user.email,
        jabatan: user.jabatan,
        lokasiSite: user.lokasiSite
      }
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// DELETE - Delete user
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const role = (session.user as any).role;

    if (role !== "super_admin") {
      return NextResponse.json({ error: "Forbidden - Super Admin only" }, { status: 403 });
    }

    const userId = parseInt(params.id);

    if (isNaN(userId)) {
      return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { id: userId }
    });

    if (!existingUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Delete user (cascades to laporan and dataInjeksi)
    await prisma.user.delete({
      where: { id: userId }
    });

    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

