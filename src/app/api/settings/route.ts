import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET - Get public settings (accessible by anyone)
export async function GET() {
  try {
    const settings = await prisma.systemSettings.findMany({
      where: { isVisible: true },
      select: {
        key: true,
        value: true,
        category: true
      }
    });

    // Convert to key-value object
    const settingsObj: Record<string, { value: string; category: string }> = {};
    settings.forEach((s) => {
      settingsObj[s.key] = { value: s.value, category: s.category };
    });

    return NextResponse.json({ settings: settingsObj });
  } catch (error) {
    console.error("Error fetching settings:", error);
    // Return default settings if error
    return NextResponse.json({
      settings: {
        maintenance_mode: { value: "false", category: "general" },
        registration_enabled: { value: "true", category: "general" }
      }
    });
  }
}
