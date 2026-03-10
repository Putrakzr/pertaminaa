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
  PointElement,
  LineElement,
} from "chart.js";
import { Bar, Doughnut, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  BarElement,
  LineElement
);

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [taskFilter, setTaskFilter] = useState("all");

  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/login");
    }
    
    if (status === "authenticated" && session) {
      const role = (session.user as any).role;
      if (role === "super_admin") {
        redirect("/super-admin/dashboard");
      }
      if (role !== "admin") {
        redirect("/dashboard");
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
      <Sidebar role="admin" />
      
      <main className="lg:ml-64 min-h-screen transition-all duration-300">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-20">
          <div className="px-6 py-4 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-pertamina-dark">
                Dashboard Admin
              </h1>
              <p className="text-gray-600 text-sm mt-1">
                Pantau dan kelola semua aktivitas inspeksi
              </p>
            </div>
            <NotificationBell />
          </div>
        </header>

        {/* Content */}
        <div className="p-6">
          {/* Quick Actions - 4 Main Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* 1. Tugas & Workflow */}
            <Link
              href="/admin/tugas"
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-pertamina-primary to-red-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-pertamina-dark">Daftar Tugas</h3>
                  <p className="text-sm text-gray-500">Kelola workflow</p>
                </div>
              </div>
            </Link>

            {/* 2. Rekapitulasi Material */}
            <Link
              href="/admin/material"
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-pertamina-dark">Material</h3>
                  <p className="text-sm text-gray-500">Kelola material</p>
                </div>
              </div>
            </Link>

            {/* 3. Rekapitulasi Kompetensi Personil */}
            <Link
              href="/admin/kompetensi"
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-pertamina-dark">Kompetensi</h3>
                  <p className="text-sm text-gray-500">Kelola kompetensi</p>
                </div>
              </div>
            </Link>

            {/* 4. Rekapitulasi Sertifikasi Peralatan */}
            <Link
              href="/admin/sertifikasi-peralatan"
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-pertamina-dark">Sertifikasi</h3>
                  <p className="text-sm text-gray-500">Kelola sertifikasi</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-pertamina-primary to-red-700 rounded-xl shadow-lg p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm font-medium">Total Tugas</p>
                  <p className="text-4xl font-bold mt-2">{stats?.tugas?.total || 0}</p>
                </div>
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl shadow-lg p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm font-medium">Pending</p>
                  <p className="text-4xl font-bold mt-2">{stats?.tugas?.pending || 0}</p>
                </div>
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm font-medium">Pengerjaan</p>
                  <p className="text-4xl font-bold mt-2">{stats?.tugas?.inProgress || 0}</p>
                </div>
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm font-medium">Review</p>
                  <p className="text-4xl font-bold mt-2">{stats?.tugas?.review || 0}</p>
                </div>
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Status Distribution - Doughnut Chart */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-pertamina-dark mb-4">Status Tugas Aktif</h2>
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
                  <p>Belum ada data tugas</p>
                </div>
              )}
            </div>

            {/* Risk Distribution removed */}
          </div>

          {/* Recent Tasks & Leaderboard */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Tasks List */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col h-full">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <h2 className="text-lg font-semibold text-pertamina-dark">Tugas Terbaru</h2>
                
                {/* Filter Pills */}
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: "all", label: "Semua" },
                    { id: "pending", label: "Menunggu" },
                    { id: "in_progress", label: "Proses" },
                    { id: "review", label: "Review" },
                  ].map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setTaskFilter(filter.id)}
                      className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                        taskFilter === filter.id 
                          ? "bg-pertamina-primary text-white" 
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>

              {stats?.tugas?.recent && stats.tugas.recent.length > 0 ? (
                <div className="divide-y flex-1 overflow-y-auto pr-2" style={{ maxHeight: "300px" }}>
                  {stats.tugas.recent
                    .filter((item: any) => taskFilter === "all" || item.status === taskFilter)
                    .map((item: any) => (
                    <div key={item.id} className="py-3 flex items-center justify-between">
                      <div>
                        <p className="font-medium text-pertamina-dark text-sm line-clamp-1">{item.judul}</p>
                        <p className="text-xs text-gray-500">Untuk: {item.user?.nama} • {new Date(item.createdAt).toLocaleDateString("id-ID")}</p>
                      </div>
                      <span className={`ml-2 whitespace-nowrap px-2 py-1 text-xs font-medium rounded ${
                        item.status === "approved" ? "bg-green-100 text-green-700" :
                        item.status === "rejected" ? "bg-red-100 text-red-700" :
                        item.status === "review" ? "bg-orange-100 text-orange-700" :
                        item.status === "in_progress" ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {item.status === "approved" ? "Selesai" : 
                         item.status === "rejected" ? "Ditolak" :
                         item.status === "review" ? "Review" :
                         item.status === "in_progress" ? "Proses" : "Menunggu"}
                      </span>
                    </div>
                  ))}
                  
                  {stats.tugas.recent.filter((item: any) => taskFilter === "all" || item.status === taskFilter).length === 0 && (
                     <div className="text-center py-6 text-sm text-gray-500">
                       Tidak ada tugas dengan status tersebut.
                     </div>
                  )}
                  
                  <div className="pt-3 text-center mt-auto border-t">
                    <Link href="/admin/tugas" className="text-pertamina-primary text-sm hover:underline font-medium">
                      Lihat semua tugas →
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500 flex-1 flex flex-col items-center justify-center">
                  <svg className="w-12 h-12 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <p>Belum ada tugas dibuat</p>
                </div>
              )}
            </div>

            {/* Top Performers (Leaderboard) */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col h-full">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h2 className="text-lg font-semibold text-pertamina-dark">Top Performers</h2>
              </div>
              
              {stats?.tugas?.topPerformers && stats.tugas.topPerformers.length > 0 ? (
                <div className="space-y-4">
                  {stats.tugas.topPerformers.map((performer: any, index: number) => (
                    <div key={performer.user.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-sm ${
                        index === 0 ? 'bg-yellow-100 text-yellow-700' :
                        index === 1 ? 'bg-gray-200 text-gray-700' :
                        index === 2 ? 'bg-orange-100 text-orange-700' : 'bg-blue-50 text-blue-700'
                      }`}>
                        #{index + 1}
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pertamina-primary to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                        {performer.user.nama.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-pertamina-dark truncate text-sm">{performer.user.nama}</p>
                        <p className="text-xs text-gray-500 truncate">{performer.user.jabatan}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-pertamina-primary">{performer.completedCount}</p>
                        <p className="text-[10px] text-gray-500 uppercase tracking-wider">Selesai</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500 flex-1 flex flex-col items-center justify-center">
                  <svg className="w-12 h-12 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <p>Belum ada data kinerja</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
