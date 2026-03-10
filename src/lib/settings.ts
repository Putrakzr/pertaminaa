"use client";

import { useState, useEffect } from "react";

interface Settings {
  [key: string]: {
    value: string;
    category: string;
  };
}

export function useSettings() {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const res = await fetch("/api/settings");
      const data = await res.json();
      setSettings(data.settings);
    } catch (error) {
      console.error("Error fetching settings:", error);
    } finally {
      setLoading(false);
    }
  };

  const isEnabled = (key: string): boolean => {
    if (!settings) return true; // Default to enabled if settings not loaded
    const setting = settings[key];
    return setting ? setting.value === "true" : true;
  };

  const isDisabled = (key: string): boolean => {
    return !isEnabled(key);
  };

  return { settings, loading, isEnabled, isDisabled };
}

// Server-side function to check settings (for use in server components)
export async function getSettings(): Promise<Settings> {
  try {
    const { default: prisma } = await import("@/lib/prisma");
    const settings = await prisma.systemSettings.findMany({
      where: { isVisible: true },
      select: {
        key: true,
        value: true,
        category: true
      }
    });

    const settingsObj: Settings = {};
    settings.forEach((s) => {
      settingsObj[s.key] = { value: s.value, category: s.category };
    });

    return settingsObj;
  } catch (error) {
    console.error("Error fetching settings:", error);
    return {
      maintenance_mode: { value: "false", category: "general" },
      registration_enabled: { value: "true", category: "general" }
    };
  }
}
