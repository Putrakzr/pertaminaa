import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

// GET - Ambil notifications
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const unreadOnly = searchParams.get("unreadOnly") === "true";

    const where: any = {};

    // Filter berdasarkan role
    if (["admin", "super_admin"].includes((session.user as any).role)) {
      where.adminId = parseInt((session.user as any).id);
    } else {
      where.userId = parseInt((session.user as any).id);
    }

    if (unreadOnly) {
      where.isRead = false;
    }

    const notifications = await prisma.notification.findMany({
      where,
      orderBy: {
        createdAt: "desc",
      },
      take: 50,
    });

    // Hitung unread count
    const unreadCount = await prisma.notification.count({
      where: {
        ...where,
        isRead: false,
      },
    });

    return NextResponse.json({ notifications, unreadCount });
  } catch (error) {
    console.error("Get notifications error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}

// PUT - Tandai notification sudah dibaca
export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { notificationId, markAllRead } = body;

    if (markAllRead) {
      // Tandai semua notification sebagai read
      if (["admin", "super_admin"].includes((session.user as any).role)) {
        await prisma.notification.updateMany({
          where: {
            adminId: parseInt((session.user as any).id),
            isRead: false,
          },
          data: {
            isRead: true,
          },
        });
      } else {
        await prisma.notification.updateMany({
          where: {
            userId: parseInt((session.user as any).id),
            isRead: false,
          },
          data: {
            isRead: true,
          },
        });
      }
    } else if (notificationId) {
      // Tandai satu notification sebagai read
      await prisma.notification.update({
        where: { id: notificationId },
        data: { isRead: true },
      });
    }

    return NextResponse.json({ message: "Notification berhasil diupdate" });
  } catch (error) {
    console.error("Update notification error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}
