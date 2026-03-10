import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

// Default settings for the system
const defaultSettings = [
  // Admin features
  { key: "admin_laporan_approval", value: "true", description: "Enable laporan approval for admin", category: "admin" },
  { key: "admin_user_management", value: "true", description: "Enable user management for admin", category: "admin" },
  { key: "admin_export", value: "true", description: "Enable export feature for admin", category: "admin" },
  { key: "admin_statistics", value: "true", description: "Enable statistics dashboard for admin", category: "admin" },
  { key: "admin_injeksi_management", value: "true", description: "Enable injeksi management for admin", category: "admin" },
  
  // User features
  { key: "user_laporan_create", value: "true", description: "Enable laporan creation for user", category: "user" },
  { key: "user_injeksi_input", value: "true", description: "Enable injeksi input for user", category: "user" },
  { key: "user_profile_edit", value: "true", description: "Enable profile editing for user", category: "user" },
  { key: "user_notification", value: "true", description: "Enable notifications for user", category: "user" },
  { key: "user_history", value: "true", description: "Enable history view for user", category: "user" },
  
  // General
  { key: "maintenance_mode", value: "false", description: "Enable maintenance mode", category: "general" },
  { key: "registration_enabled", value: "true", description: "Enable user registration", category: "general" },
];

// GET - Get all settings
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

    const settings = await prisma.systemSettings.findMany({
      orderBy: [{ category: "asc" }, { key: "asc" }]
    });

    // If no settings exist, create defaults
    if (settings.length === 0) {
      for (const setting of defaultSettings) {
        await prisma.systemSettings.create({
          data: setting
        });
      }
      
      const newSettings = await prisma.systemSettings.findMany({
        orderBy: [{ category: "asc" }, { key: "asc" }]
      });
      
      return NextResponse.json({ settings: newSettings });
    }

    return NextResponse.json({ settings });
  } catch (error) {
    console.error("Error fetching settings:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// PUT - Update settings
export async function PUT(request: Request) {
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
    const { settings } = body;

    if (!Array.isArray(settings)) {
      return NextResponse.json({ error: "Settings must be an array" }, { status: 400 });
    }

    // Update each setting
    for (const item of settings) {
      await prisma.systemSettings.upsert({
        where: { key: item.key },
        update: { 
          value: item.value,
          isVisible: item.isVisible !== undefined ? item.isVisible : true
        },
        create: {
          key: item.key,
          value: item.value,
          description: item.description || "",
          category: item.category || "general",
          isVisible: item.isVisible !== undefined ? item.isVisible : true
        }
      });
    }

    const updatedSettings = await prisma.systemSettings.findMany({
      orderBy: [{ category: "asc" }, { key: "asc" }]
    });

    return NextResponse.json({ 
      message: "Settings updated successfully",
      settings: updatedSettings 
    });
  } catch (error) {
    console.error("Error updating settings:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
