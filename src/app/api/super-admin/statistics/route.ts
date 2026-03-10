import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

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

    // Get user statistics
    const totalUsers = await prisma.user.count();
    
    // Get admin statistics
    const totalAdmins = await prisma.admin.count();
    const superAdmins = await prisma.admin.count({
      where: { role: "super_admin" }
    });
    const regularAdmins = await prisma.admin.count({
      where: { role: "admin" }
    });

    // Get laporan statistics removed
    const totalLaporan = 0;

    // Get data injeksi statistics
    const totalInjeksi = await prisma.dataInjeksi.count();
    const injeksiPending = await prisma.dataInjeksi.count({
      where: { status: "pending" }
    });
    const injeksiApproved = await prisma.dataInjeksi.count({
      where: { status: "approved" }
    });

    // Get laporan by risk level removed
    const laporanByRisiko: any[] = [];

    // Get recent laporan removed
    const recentLaporan: any[] = [];

    // Get recent users
    const recentUsers = await prisma.user.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        nama: true,
        email: true,
        jabatan: true,
        createdAt: true
      }
    });

    // Monthly data removed
    const monthlyData: { [key: string]: number } = {};

    return NextResponse.json({
      users: {
        total: totalUsers
      },
      admins: {
        total: totalAdmins,
        superAdmin: superAdmins,
        regular: regularAdmins
      },
      laporan: {
        total: totalLaporan,
        pending: 0,
        approved: 0,
        rejected: 0,
        byRisiko: laporanByRisiko
      },
      injeksi: {
        total: totalInjeksi,
        pending: injeksiPending,
        approved: injeksiApproved
      },
      recentLaporan,
      recentUsers,
      monthlyLaporan: monthlyData
    });
  } catch (error) {
    console.error("Error fetching statistics:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
