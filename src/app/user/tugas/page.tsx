"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import toast from "react-hot-toast";

export default function UserTugasPage() {
  const { data: session, status: sessionStatus } = useSession();
  const router = useRouter();
  const [tugasList, setTugasList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (sessionStatus === "unauthenticated") {
      router.push("/login");
    }
  }, [sessionStatus, router]);

  useEffect(() => {
    fetchTugas();
  }, [filter]);

  const fetchTugas = async () => {
    try {
      const url = filter !== "all" ? `/api/user/tugas?status=${filter}` : "/api/user/tugas";
      const res = await fetch(url);
      const data = await res.json();
      setTugasList(data.tugas || []);
    } catch (error) {
      console.error("Error fetching tugas:", error);
      toast.error("Gagal memuat tugas");
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded animate-pulse">Tugas Baru</span>;
      case "in_progress":
        return <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">Sedang Dikerjakan</span>;
      case "review":
        return <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded">Menunggu Verifikasi</span>;
      case "approved":
        return <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">Selesai Disetujui</span>;
      case "rejected":
        return <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded">Butuh Revisi</span>;
      default:
        return <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded">{status}</span>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      <Sidebar role="user" />
      
      <main className="flex-1 lg:ml-64 transition-all duration-300">
        <header className="bg-white shadow-sm sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <h1 className="text-2xl font-bold text-gray-900">
              Tugas Saya
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Daftar tugas pekerjaan yang perlu diselesaikan
            </p>
          </div>
        </header>

        <div className="p-6 max-w-7xl mx-auto space-y-6">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {[
              { id: "all", label: "Semua Tugas" },
              { id: "pending", label: "Tugas Baru" },
              { id: "in_progress", label: "Sedang Dikerjakan" },
              { id: "review", label: "Menunggu Verifikasi" },
              { id: "approved", label: "Disetujui" },
              { id: "rejected", label: "Revisi" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors border ${
                  filter === f.id
                    ? "bg-pertamina-blue text-white border-pertamina-blue"
                    : "bg-white text-gray-600 hover:bg-gray-50 border-gray-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {loading ? (
              <div className="flex justify-center py-12">
                <div className="spinner"></div>
              </div>
            ) : tugasList.length === 0 ? (
              <div className="text-center py-12 px-4">
                <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                <p className="text-gray-500 font-medium">Belum ada tugas.</p>
                <p className="text-sm text-gray-400 mt-1">Anda tidak memiliki daftar pekerjaan saat ini.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {tugasList.map((item) => (
                  <div key={item.id} className="border border-gray-100 rounded-xl p-5 hover:border-pertamina-blue hover:shadow-md transition-all flex flex-col h-full relative overflow-hidden">
                    {item.status === "pending" && (
                      <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                    )}
                    {item.status === "rejected" && (
                      <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
                    )}
                    
                    <div className="flex justify-between items-start mb-3">
                      {getStatusBadge(item.status)}
                      <span className="text-xs text-gray-400 font-medium">
                        {new Date(item.createdAt).toLocaleDateString("id-ID", { day: 'numeric', month: 'short' })}
                      </span>
                    </div>
                    
                    <h3 className="font-bold text-gray-900 text-lg line-clamp-2 mb-2">{item.judul}</h3>
                    <p className="text-sm text-gray-500 line-clamp-3 mb-4 flex-1">
                      {item.deskripsi}
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div className="text-xs text-gray-500 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Oleh: {item.admin?.nama.split(" ")[0]}
                      </div>
                      <Link
                        href={`/user/tugas/${item.id}`}
                        className="text-sm font-semibold text-pertamina-blue hover:text-blue-700 flex items-center gap-1 group"
                      >
                        Buka Tugas
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
