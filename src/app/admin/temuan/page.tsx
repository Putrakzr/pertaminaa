"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import toast from "react-hot-toast";

export default function AdminTemuanPage() {
  const { data: session, status } = useSession();
  const [temuan, setTemuan] = useState<any[]>([]);
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [selectedTemuan, setSelectedTemuan] = useState<any>(null);
  const [statusForm, setStatusForm] = useState({
    statusTemuan: "",
    catatanPenyelesaian: "",
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/login");
    }
    
    if (status === "authenticated" && session) {
      const role = (session.user as any).role;
      if (role !== "admin") {
        redirect("/dashboard");
      }
      fetchTemuan();
    }
  }, [status, session, filter]);

  const fetchTemuan = async () => {
    try {
      setLoading(true);
      let url = "/api/temuan?limit=100";
      if (filter !== "all") {
        url += `&status=${filter}`;
      }
      
      const res = await fetch(url);
      const data = await res.json();
      setTemuan(data.temuan || []);
      setStats(data.stats);
    } catch (error) {
      console.error("Error fetching temuan:", error);
      toast.error("Gagal memuat data temuan");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (item: any) => {
    setSelectedTemuan(item);
    setStatusForm({
      statusTemuan: item.statusTemuan || "open",
      catatanPenyelesaian: item.catatanPenyelesaian || "",
    });
    setShowModal(true);
  };

  const handleUpdateStatus = async () => {
    if (!selectedTemuan) return;

    try {
      const res = await fetch(`/api/laporan/${selectedTemuan.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          statusTemuan: statusForm.statusTemuan,
          catatanPenyelesaian: statusForm.catatanPenyelesaian,
        }),
      });

      if (!res.ok) throw new Error("Gagal update status");

      toast.success("Status temuan berhasil diupdate!");
      setShowModal(false);
      fetchTemuan();
    } catch (error) {
      toast.error("Gagal update status temuan");
    }
  };

  const getStatusBadge = (statusTemuan: string) => {
    const statusMap: any = {
      open: { bg: "bg-red-100", text: "text-red-700", label: "Open" },
      in_progress: { bg: "bg-yellow-100", text: "text-yellow-700", label: "Sedang Dikerjakan" },
      resolved: { bg: "bg-blue-100", text: "text-blue-700", label: "Selesai" },
      closed: { bg: "bg-green-100", text: "text-green-700", label: "Ditutup" },
    };
    const s = statusMap[statusTemuan] || statusMap.open;
    return <span className={`px-2 py-1 text-xs font-medium rounded ${s.bg} ${s.text}`}>{s.label}</span>;
  };

  const isOverdue = (dueDate: string, statusTemuan: string) => {
    if (!dueDate || statusTemuan === "resolved" || statusTemuan === "closed") return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const due = new Date(dueDate);
    return due < today;
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar role="admin" />
      
      <main className="lg:ml-64 min-h-screen transition-all duration-300">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-20">
          <div className="px-6 py-4">
            <h1 className="text-2xl font-bold text-pertamina-dark">
              Kelola Temuan
            </h1>
            <p className="text-gray-600 text-sm mt-1">
              Pantau dan tindak lanjuti temuan berdasarkan tenggat waktu
            </p>
          </div>
        </header>

        {/* Content */}
        <div className="p-6">

          {/* Stats Cards */}
          {stats && (
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg p-6 text-white">
                <p className="text-sm font-medium">Open</p>
                <p className="text-3xl font-bold">{stats.open || 0}</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl shadow-lg p-6 text-white">
                <p className="text-sm font-medium">In Progress</p>
                <p className="text-3xl font-bold">{stats.inProgress || 0}</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
                <p className="text-sm font-medium">Resolved</p>
                <p className="text-3xl font-bold">{stats.resolved || 0}</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white">
                <p className="text-sm font-medium">Closed</p>
                <p className="text-3xl font-bold">{stats.closed || 0}</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
                <p className="text-sm font-medium">Total</p>
                <p className="text-3xl font-bold">{stats.total || 0}</p>
              </div>
            </div>
          )}

          {/* Filters */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {[
              { value: "all", label: "Semua" },
              { value: "open", label: "Open" },
              { value: "in_progress", label: "Sedang Dikerjakan" },
              { value: "resolved", label: "Selesai" },
              { value: "closed", label: "Ditutup" },
            ].map((item) => (
              <button
                key={item.value}
                onClick={() => setFilter(item.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  filter === item.value
                    ? "bg-pertamina-blue text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100 border"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Temuan List */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="spinner"></div>
            </div>
          ) : temuan.length === 0 ? (
            <div className="text-center py-12">
              <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-gray-500">Tidak ada temuan</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Temuan</th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Fungsi</th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Penanggung Jawab</th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Due Date</th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {temuan.map((item) => (
                    <tr key={item.id} className={`hover:bg-gray-50 ${isOverdue(item.dueDate, item.statusTemuan) ? "bg-red-50" : ""}`}>
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium text-pertamina-dark">{item.kategori}</p>
                          <p className="text-sm text-gray-500">{item.lokasi}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {item.fungsi || "-"}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {item.user?.nama || "-"}
                      </td>
                      <td className="px-6 py-4">
                        {item.dueDate ? (
                          <span className={`text-sm ${isOverdue(item.dueDate, item.statusTemuan) ? "text-red-600 font-medium" : "text-gray-900"}`}>
                            {new Date(item.dueDate).toLocaleDateString("id-ID")}
                            {isOverdue(item.dueDate, item.statusTemuan) && (
                              <span className="ml-2 px-2 py-0.5 text-xs bg-red-100 text-red-700 rounded">Overdue</span>
                            )}
                          </span>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {getStatusBadge(item.statusTemuan)}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleOpenModal(item)}
                          className="text-pertamina-blue hover:underline text-sm"
                        >
                          Update Status
                        </button>
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

      {/* Update Status Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h2 className="text-xl font-bold text-pertamina-dark mb-4">Update Status Temuan</h2>
            
            {selectedTemuan && (
              <div className="mb-4 p-3 bg-gray-50 rounded">
                <p className="font-medium">{selectedTemuan.kategori}</p>
                <p className="text-sm text-gray-500">{selectedTemuan.lokasi}</p>
              </div>
            )}

            <div className="mb-4">
              <label className="label">Status Temuan</label>
              <select
                className="input-field"
                value={statusForm.statusTemuan}
                onChange={(e) => setStatusForm({ ...statusForm, statusTemuan: e.target.value })}
              >
                <option value="open">Open</option>
                <option value="in_progress">Sedang Dikerjakan</option>
                <option value="resolved">Selesai</option>
                <option value="closed">Ditutup</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="label">Catatan Penyelesaian</label>
              <textarea
                className="input-field min-h-[100px]"
                placeholder="Masukkan catatan penyelesaian..."
                value={statusForm.catatanPenyelesaian}
                onChange={(e) => setStatusForm({ ...statusForm, catatanPenyelesaian: e.target.value })}
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 btn-outline py-2"
              >
                Batal
              </button>
              <button
                onClick={handleUpdateStatus}
                className="flex-1 btn-primary py-2"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
