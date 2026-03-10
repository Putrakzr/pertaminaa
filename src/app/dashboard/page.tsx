"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import toast from "react-hot-toast";
import NotificationBell from "@/components/NotificationBell";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function UserDashboard() {
  const { data: session, status } = useSession();
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/login");
    }
    
    if (status === "authenticated" && session) {
      const role = (session.user as any).role;
      if (role === "admin" || role === "super_admin") {
        redirect("/admin/dashboard");
      }
      fetchStatistics();
    }
  }, [status, session]);

  const fetchStatistics = async () => {
    try {
      const res = await fetch("/api/statistics");
      if (!res.ok) throw new Error("Gagal memuat statistik");
      const data = await res.json();
      setStats(data);
    } catch (error) {
      console.error("Error fetching statistics:", error);
      toast.error("Gagal memuat statistik");
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!session) return null;

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar role="user" />
      
      <main className="lg:ml-64 min-h-screen transition-all duration-300">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-20">
          <div className="px-6 py-4 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-pertamina-dark">
                Selamat Datang, {session.user?.name}!
              </h1>
              <p className="text-gray-600 text-sm mt-1">
                {(session.user as any)?.jabatan} - {(session.user as any)?.lokasiSite}
              </p>
            </div>
            <NotificationBell />
          </div>
        </header>

        {/* Content */}
        <div className="p-6">
          {/* Quick Actions & Performance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Quick Action */}
            <Link
              href="/user/tugas"
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-pertamina-primary to-red-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-pertamina-dark">Tugas Saya</h3>
                  <p className="text-sm text-gray-500">Lihat tugas masuk</p>
                </div>
              </div>
            </Link>

            {/* Performance Progress Bar */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex justify-between items-end mb-2">
                <div>
                  <h3 className="font-semibold text-pertamina-dark">Kinerja Bulan Ini</h3>
                  <p className="text-sm text-gray-500">Rasio penyelesaian tugas</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-pertamina-primary">
                    {stats?.tugas?.completionRate || 0}%
                  </span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
                <div
                  className="bg-gradient-to-r from-pertamina-primary to-red-600 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${stats?.tugas?.completionRate || 0}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-pertamina-primary to-red-700 rounded-xl shadow-lg p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm font-medium">Tugas Saya</p>
                  <p className="text-4xl font-bold mt-2">{stats?.tugas?.total || 0}</p>
                </div>
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm font-medium">Dalam Proses</p>
                  <p className="text-4xl font-bold mt-2">{stats?.tugas?.inProgress || 0}</p>
                </div>
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl shadow-lg p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm font-medium">Menunggu</p>
                  <p className="text-4xl font-bold mt-2">{stats?.tugas?.pending || 0}</p>
                </div>
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Status Distribution - Doughnut Chart */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-pertamina-dark mb-4">Status Tugas Saya</h2>
              {stats?.tugas?.total > 0 ? (
                <div className="h-64 flex justify-center">
                  <Doughnut
                    data={{
                      labels: ["Pending", "Pengerjaan", "Review", "Selesai"],
                      datasets: [
                        {
                          data: [
                            stats?.tugas?.pending || 0,
                            stats?.tugas?.inProgress || 0,
                            stats?.tugas?.review || 0,
                            stats?.tugas?.approved || 0,
                          ],
                          backgroundColor: [
                            "#F59E0B",
                            "#3B82F6",
                            "#F97316",
                            "#10B981",
                          ],
                          borderWidth: 0,
                        },
                      ],
                    }}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: "bottom",
                        },
                      },
                    }}
                  />
                </div>
              ) : (
                <div className="h-64 flex items-center justify-center text-gray-500">
                  <p>Belum ada tugas</p>
                </div>
              )}
            </div>

            {/* Risk Distribution removed */}
          </div>

          {/* Recent Tasks */}
          <div>
            <h2 className="text-lg font-semibold text-pertamina-dark mb-4">Tugas Terbaru</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              {stats?.tugas?.recent && stats.tugas.recent.length > 0 ? (
                <div className="divide-y">
                  {stats.tugas.recent.map((item: any) => {
                    const isUrgent = item.status === "pending" || item.status === "in_progress";
                    const isOverdue = false; // Placeholder if dueDate exists
                    
                    return (
                      <div key={item.id} className={`py-4 flex items-center justify-between ${isUrgent ? 'bg-red-50/30 -mx-6 px-6' : ''}`}>
                        <div className="flex items-center gap-4">
                          <div className={`w-2 h-2 rounded-full ${
                            item.status === "approved" ? "bg-green-500" :
                            item.status === "rejected" ? "bg-red-500" :
                            item.status === "review" ? "bg-orange-500" :
                            item.status === "in_progress" ? "bg-blue-500" : "bg-yellow-500"
                          }`}></div>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-medium text-pertamina-dark">{item.judul}</p>
                              {isUrgent && (
                                <span className="px-1.5 py-0.5 text-[10px] uppercase tracking-wider font-bold bg-red-100 text-red-600 rounded">
                                  Prioritas
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-500 mt-0.5">Oleh: {item.admin?.nama} • {new Date(item.createdAt).toLocaleDateString("id-ID")}</p>
                          </div>
                        </div>
                        <span className={`px-2 py-1 text-xs font-medium rounded ${
                          item.status === "approved" ? "bg-green-100 text-green-700" :
                          item.status === "rejected" ? "bg-red-100 text-red-700" :
                          item.status === "review" ? "bg-orange-100 text-orange-700" :
                          item.status === "in_progress" ? "bg-blue-100 text-blue-700" : "bg-yellow-101 text-yellow-701"
                        }`}>
                          {item.status === "approved" ? "Selesai" : 
                           item.status === "rejected" ? "Ditolak" :
                           item.status === "review" ? "Review" :
                           item.status === "in_progress" ? "Proses" : "Menunggu"}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <p>Belum ada tugas untuk Anda</p>
                  <Link
                    href="/user/tugas"
                    className="text-pertamina-primary hover:underline mt-2 inline-block font-medium"
                  >
                    Lihat daftar tugas →
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
