"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import toast from "react-hot-toast";

export default function AdminTugasPage() {
  const { data: session, status: sessionStatus } = useSession();
  const [tugasList, setTugasList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (sessionStatus === "unauthenticated") {
      redirect("/login");
    }
  }, [sessionStatus]);

  useEffect(() => {
    fetchTugas();
  }, [filter]);

  const fetchTugas = async () => {
    try {
      const url = filter !== "all" ? `/api/admin/tugas?status=${filter}` : "/api/admin/tugas";
      const res = await fetch(url);
      const data = await res.json();
      setTugasList(data.tugas || []);
    } catch (error) {
      console.error("Error fetching tugas:", error);
      toast.error("Gagal memuat daftar tugas");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Yakin ingin menghapus tugas ini?")) return;
    
    try {
      const res = await fetch(`/api/admin/tugas/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Gagal menghapus");

      toast.success("Tugas berhasil dihapus");
      fetchTugas();
    } catch (error) {
      toast.error("Gagal menghapus tugas");
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded">Menunggu Diterima</span>;
      case "in_progress":
        return <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">Sedang Dikerjakan</span>;
      case "review":
        return <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded">Menunggu Review</span>;
      case "approved":
        return <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">Selesai (Disetujui)</span>;
      case "rejected":
        return <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded">Ditolak / Revisi</span>;
      default:
        return <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded">{status}</span>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar role="admin" />
      
      <main className="lg:ml-64 min-h-screen transition-all duration-300">
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-20">
          <div className="px-6 py-4 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-pertamina-dark">
                Kelola Tugas
              </h1>
              <p className="text-gray-600 text-sm mt-1">
                Berikan tugas ke user dan pantau progressnya
              </p>
            </div>
            <Link
              href="/admin/tugas/create"
              className="bg-pertamina-blue hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              + Buat Tugas Baru
            </Link>
          </div>
        </header>

        <div className="p-6">
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {[
              { id: "all", label: "Semua" },
              { id: "pending", label: "Menunggu" },
              { id: "in_progress", label: "Dikerjakan" },
              { id: "review", label: "Perlu Review" },
              { id: "approved", label: "Selesai" },
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
              <div className="text-center py-12">
                <p className="text-gray-500">Belum ada tugas.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Tugas</th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Ditugaskan Kepada</th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Tgl Dibuat</th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {tugasList.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <p className="font-medium text-gray-900 line-clamp-1">{item.judul}</p>
                          <p className="text-xs text-gray-500 line-clamp-1 mt-1">{item.deskripsi}</p>
                        </td>
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-medium text-sm text-gray-900">{item.user?.nama}</p>
                            <p className="text-xs text-gray-500">{item.user?.jabatan} • {item.user?.lokasiSite}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {new Date(item.createdAt).toLocaleDateString("id-ID")}
                        </td>
                        <td className="px-6 py-4">
                          {getStatusBadge(item.status)}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            <Link
                              href={`/admin/tugas/${item.id}`}
                              className="px-3 py-1 bg-gray-100 text-gray-600 border border-gray-200 text-xs font-medium rounded hover:bg-gray-200"
                            >
                              Lihat Detail
                            </Link>
                            <button
                              onClick={() => handleDelete(item.id)}
                              className="px-3 py-1 bg-red-50 text-red-600 border border-red-100 text-xs font-medium rounded hover:bg-red-100"
                            >
                              Hapus
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
