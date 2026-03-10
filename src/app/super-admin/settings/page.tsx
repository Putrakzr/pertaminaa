"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";

interface Setting {
  id?: number;
  key: string;
  value: string;
  description: string;
  category: string;
  isVisible: boolean;
}

export default function SettingsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [settings, setSettings] = useState<Setting[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (status === "authenticated") {
      const role = (session?.user as any)?.role;
      if (role !== "super_admin") {
        router.push("/dashboard");
      } else {
        fetchSettings();
      }
    }
  }, [status, session, router]);

  const fetchSettings = async () => {
    try {
      const res = await fetch("/api/super-admin/settings");
      const data = await res.json();
      if (res.ok) {
        setSettings(data.settings);
      }
    } catch (error) {
      console.error("Error fetching settings:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = (key: string) => {
    setSettings(settings.map((s) => {
      if (s.key === key) {
        return { ...s, value: s.value === "true" ? "false" : "true" };
      }
      return s;
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage({ type: "", text: "" });

    try {
      const res = await fetch("/api/super-admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ settings }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: "Settings saved successfully!" });
        setSettings(data.settings);
      } else {
        setMessage({ type: "error", text: data.error || "Failed to save settings" });
      }
    } catch (error) {
      console.error("Error saving settings:", error);
      setMessage({ type: "error", text: "An error occurred while saving" });
    } finally {
      setSaving(false);
    }
  };

  const adminSettings = settings.filter((s) => s.category === "admin");
  const userSettings = settings.filter((s) => s.category === "user");
  const generalSettings = settings.filter((s) => s.category === "general");

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-xl font-semibold text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar role="super_admin" />
      
      <main className="lg:ml-64 min-h-screen">
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">System Settings</h1>
            <p className="text-gray-600 mt-2">
              Control visibility of features for Admin and User panels
            </p>
          </div>
        </div>

        <div className="px-4 sm:px-6 lg:px-8 py-8">

        {message.text && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              message.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {message.text}
          </div>
        )}

        {/* General Settings */}
        <div className="mb-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">General Settings</h2>
          <div className="space-y-4">
            {generalSettings.map((setting) => (
              <div key={setting.key} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-0">
                <div>
                  <p className="font-medium text-gray-700">
                    {setting.key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                  </p>
                  <p className="text-sm text-gray-500">{setting.description}</p>
                </div>
                <button
                  onClick={() => handleToggle(setting.key)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    setting.value === "true" ? "bg-blue-600" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      setting.value === "true" ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Admin Settings */}
        <div className="mb-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Admin Panel Features</h2>
          <div className="space-y-4">
            {adminSettings.map((setting) => (
              <div key={setting.key} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-0">
                <div>
                  <p className="font-medium text-gray-700">
                    {setting.key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                  </p>
                  <p className="text-sm text-gray-500">{setting.description}</p>
                </div>
                <button
                  onClick={() => handleToggle(setting.key)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    setting.value === "true" ? "bg-blue-600" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      setting.value === "true" ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* User Settings */}
        <div className="mb-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">User Panel Features</h2>
          <div className="space-y-4">
            {userSettings.map((setting) => (
              <div key={setting.key} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-0">
                <div>
                  <p className="font-medium text-gray-700">
                    {setting.key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                  </p>
                  <p className="text-sm text-gray-500">{setting.description}</p>
                </div>
                <button
                  onClick={() => handleToggle(setting.key)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    setting.value === "true" ? "bg-blue-600" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      setting.value === "true" ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            disabled={saving}
            className={`px-6 py-3 rounded-lg text-white font-medium transition-colors ${
              saving
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {saving ? "Saving..." : "Save Settings"}
          </button>
        </div>
        </div>
      </main>
    </div>
  );
}
