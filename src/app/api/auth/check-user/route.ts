import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    // Check if admin (including super_admin)
    const admin = await prisma.admin.findUnique({
      where: { email },
    });

    if (admin) {
      // Return both isAdmin and role
      return NextResponse.json({ 
        isAdmin: true,
        role: admin.role // Returns "admin" or "super_admin"
      });
    }

    // Check if user
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user) {
      return NextResponse.json({ 
        isAdmin: false,
        role: "user"
      });
    }

    return NextResponse.json({ error: "User not found" }, { status: 404 });
  } catch (error) {
    console.error("Check user error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
