import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

// GET - Get single admin by ID
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

    const adminId = parseInt(params.id);

    if (isNaN(adminId)) {
      return NextResponse.json({ error: "Invalid admin ID" }, { status: 400 });
    }

    const admin = await prisma.admin.findUnique({
      where: { id: adminId },
      select: {
        id: true,
        nama: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true
      }
    });

    if (!admin) {
      return NextResponse.json({ error: "Admin not found" }, { status: 404 });
    }

    return NextResponse.json({ admin });
  } catch (error) {
    console.error("Error fetching admin:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// PUT - Update admin
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const currentUserRole = (session.user as any).role;

    if (currentUserRole !== "super_admin") {
      return NextResponse.json({ error: "Forbidden - Super Admin only" }, { status: 403 });
    }

    const adminId = parseInt(params.id);

    if (isNaN(adminId)) {
      return NextResponse.json({ error: "Invalid admin ID" }, { status: 400 });
    }

    const body = await request.json();
    const { nama, email, password, role: adminRole } = body;

    // Check if admin exists
    const existingAdmin = await prisma.admin.findUnique({
      where: { id: adminId }
    });

    if (!existingAdmin) {
      return NextResponse.json({ error: "Admin not found" }, { status: 404 });
    }

    // Prevent demoting super_admin
    if (existingAdmin.role === "super_admin" && adminRole === "admin") {
      return NextResponse.json({ error: "Cannot demote super_admin" }, { status: 400 });
    }

    // Check email uniqueness if changed
    if (email && email !== existingAdmin.email) {
      const emailExists = await prisma.admin.findUnique({
        where: { email }
      });
      if (emailExists) {
        return NextResponse.json({ error: "Email already exists" }, { status: 400 });
      }
    }

    const updateData: any = {};
    if (nama) updateData.nama = nama;
    if (email) updateData.email = email;
    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }
    if (adminRole && ["admin", "super_admin"].includes(adminRole)) {
      updateData.role = adminRole;
    }

    const admin = await prisma.admin.update({
      where: { id: adminId },
      data: updateData
    });

    return NextResponse.json({ 
      admin: {
        id: admin.id,
        nama: admin.nama,
        email: admin.email,
        role: admin.role
      }
    });
  } catch (error) {
    console.error("Error updating admin:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// DELETE - Delete admin
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const currentUserRole = (session.user as any).role;

    if (currentUserRole !== "super_admin") {
      return NextResponse.json({ error: "Forbidden - Super Admin only" }, { status: 403 });
    }

    const adminId = parseInt(params.id);

    if (isNaN(adminId)) {
      return NextResponse.json({ error: "Invalid admin ID" }, { status: 400 });
    }

    // Check if admin exists
    const existingAdmin = await prisma.admin.findUnique({
      where: { id: adminId }
    });

    if (!existingAdmin) {
      return NextResponse.json({ error: "Admin not found" }, { status: 404 });
    }

    // Prevent deleting super_admin
    if (existingAdmin.role === "super_admin") {
      return NextResponse.json({ error: "Cannot delete super_admin" }, { status: 400 });
    }

    await prisma.admin.delete({
      where: { id: adminId }
    });

    return NextResponse.json({ message: "Admin deleted successfully" });
  } catch (error) {
    console.error("Error deleting admin:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

