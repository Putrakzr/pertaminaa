import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userRole = (session.user as any).role;
    const userId = parseInt((session.user as any).id);

    // Base where clause untuk filter berdasarkan role
    const injeksiWhere: any = {};

    // Filter berdasarkan role - user hanya lihat data sendiri
    if (userRole === "user") {
      injeksiWhere.userId = userId;
    }

    // Stats for reports removed
    const totalLaporan = 0;

    // Stats untuk data injeksi
    const totalInjeksi = await prisma.dataInjeksi.count({ where: injeksiWhere });
    const injeksiPending = await prisma.dataInjeksi.count({
      where: { ...injeksiWhere, status: "pending" },
    });
    const injeksiProcessed = await prisma.dataInjeksi.count({
      where: { ...injeksiWhere, status: { not: "pending" } },
    });

    // Stats untuk user
    const totalUsers = await prisma.user.count();

    // Stats for temuan removed
    const temuanOpen = 0;
    const temuanInProgress = 0;
    const temuanResolved = 0;
    const temuanClosed = 0;
    const temuanOverdue = 0;

    // Laporan by risk removed
    const laporanByRisiko: any[] = [];

    // Laporan by category removed
    const laporanByKategori: any[] = [];

    // Laporan by location removed
    const laporanByLokasi: any[] = [];

    // Recent reports removed
    const recentReports: any[] = [];

    // Laporan 7 days removed
    const laporan7Hari: any[] = [];

    // Data injeksi 7 hari terakhir
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const injeksi7Hari = await prisma.dataInjeksi.groupBy({
      by: ["tanggal"],
      where: {
        ...injeksiWhere,
        createdAt: {
          gte: sevenDaysAgo,
        },
      },
      _count: {
        tanggal: true,
      },
      _avg: {
        nilaiRaw: true,
        hasilPerhitungan: true,
      },
    });

    // Stats untuk tugas (Workflow baru)
    const tugasWhere: any = {};
    if (userRole === "user") {
      tugasWhere.userId = userId;
    }

    const totalTugas = await (prisma as any).tugas.count({ where: tugasWhere });
    const tugasPending = await (prisma as any).tugas.count({
      where: { ...tugasWhere, status: "pending" },
    });
    const tugasInProgress = await (prisma as any).tugas.count({
      where: { ...tugasWhere, status: "in_progress" },
    });
    const tugasReview = await (prisma as any).tugas.count({
      where: { ...tugasWhere, status: "review" },
    });
    const tugasApproved = await (prisma as any).tugas.count({
      where: { ...tugasWhere, status: "approved" },
    });
    const tugasRejected = await (prisma as any).tugas.count({
      where: { ...tugasWhere, status: "rejected" },
    });

    console.log(`[API Stats] UserRole: ${userRole}, UserId: ${userId}, TotalTugas: ${totalTugas}`);

    // Recent tugas (5 terbaru)
    const recentTugas = await (prisma as any).tugas.findMany({
      where: tugasWhere,
      include: {
        user: { select: { nama: true } },
        admin: { select: { nama: true } },
      },
      orderBy: { createdAt: "desc" },
      take: 5,
    });

    // Monthly Completion Rate (User)
    let completionRate = 0;
    const firstDayOfMonth = new Date();
    firstDayOfMonth.setDate(1);
    firstDayOfMonth.setHours(0, 0, 0, 0);

    if (userRole === "user") {
      const thisMonthTasks = await (prisma as any).tugas.count({
        where: {
          userId: userId,
          createdAt: {
            gte: firstDayOfMonth,
          },
        },
      });

      const thisMonthApproved = await (prisma as any).tugas.count({
        where: {
          userId: userId,
          status: "approved",
          createdAt: {
            gte: firstDayOfMonth,
          },
        },
      });

      completionRate = thisMonthTasks > 0 ? Math.round((thisMonthApproved / thisMonthTasks) * 100) : 0;
    }

    // Top Performers (Admin)
    let topPerformers: any[] = [];
    if (userRole === "admin" || userRole === "super_admin") {
      const performers = await (prisma as any).tugas.groupBy({
        by: ["userId"],
        where: {
          status: "approved",
        },
        _count: {
          id: true,
        },
        orderBy: {
          _count: {
            id: "desc",
          },
        },
        take: 3,
      });

      // Fetch user details for top performers
      for (const p of performers) {
        if (p.userId) {
          const user = await prisma.user.findUnique({
            where: { id: p.userId },
            select: { id: true, nama: true, jabatan: true, foto: true },
          });
          if (user) {
            topPerformers.push({
              user,
              completedCount: p._count.id,
            });
          }
        }
      }
    }

    return NextResponse.json({
      laporan: {
        total: totalLaporan,
        pending: 0,
        approved: 0,
        rejected: 0,
        byRisiko: laporanByRisiko,
        byKategori: laporanByKategori,
        byLokasi: laporanByLokasi,
        last7Days: laporan7Hari,
        recent: recentReports,
      },
      tugas: {
        total: totalTugas,
        pending: tugasPending,
        inProgress: tugasInProgress,
        review: tugasReview,
        approved: tugasApproved,
        rejected: tugasRejected,
        recent: recentTugas,
        completionRate: completionRate,
        topPerformers: topPerformers,
      },
      injeksi: {
        total: totalInjeksi,
        pending: injeksiPending,
        processed: injeksiProcessed,
        last7Days: injeksi7Hari,
      },
      users: {
        total: totalUsers,
      },
      temuan: {
        open: temuanOpen,
        inProgress: temuanInProgress,
        resolved: temuanResolved,
        closed: temuanClosed,
        overdue: temuanOverdue,
      },
    });

  } catch (error) {
    console.error("Get statistics error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}
