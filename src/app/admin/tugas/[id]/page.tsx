"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import toast from "react-hot-toast";

export default function AdminTugasDetailPage({ params }: { params: { id: string } }) {
  const { data: session, status: sessionStatus } = useSession();
  const router = useRouter();
  
  const [tugas, setTugas] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (sessionStatus === "unauthenticated") {
      router.push("/login");
    }
  }, [sessionStatus, router]);

  useEffect(() => {
    fetchTugasDetail();
  }, [params.id]);

  const fetchTugasDetail = async () => {
    try {
      const res = await fetch(`/api/admin/tugas/${params.id}`);
      if (!res.ok) throw new Error("Gagal memuat tugas");
      const data = await res.json();
      setTugas(data.tugas);
    } catch (error) {
      console.error("Error fetching tugas:", error);
      toast.error("Tugas tidak ditemukan");
      router.push("/admin/tugas");
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (action: "approved" | "rejected") => {
    setProcessing(true);
    try {
      const res = await fetch(`/api/admin/tugas/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: action }),
      });

      if (!res.ok) throw new Error("Gagal memproses tugas");

      toast.success(`Tugas berhasil ${action === "approved" ? "disetujui" : "ditolak"}`);
      fetchTugasDetail();
    } catch (error) {
      toast.error("Gagal memproses verifikasi");
    } finally {
      setProcessing(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!tugas) return null;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending": return <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">Menunggu Diterima</span>;
      case "in_progress": return <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Sedang Dikerjakan</span>;
      case "review": return <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Menunggu Review Admin</span>;
      case "approved": return <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Selesai (Disetujui)</span>;
      case "rejected": return <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">Revisi Diperlukan</span>;
      default: return <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">{status}</span>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar role="admin" />
      
      <main className="lg:ml-64 min-h-screen transition-all duration-300 pb-12">
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-20">
          <div className="px-6 py-4 flex items-center gap-4">
            <Link href="/admin/tugas" className="text-gray-500 hover:text-gray-700 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-pertamina-dark">Detail Tugas</h1>
              <p className="text-gray-600 text-sm mt-1">Review dan verifikasi hasil pekerjaan</p>
            </div>
            <div className="ml-auto">
              {getStatusBadge(tugas.status)}
            </div>
          </div>
        </header>

        <div className="p-6 max-w-5xl mx-auto space-y-6">
          {/* Card: Informasi Utama */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Informasi Tugas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Judul Tugas</p>
                <p className="font-semibold text-gray-900">{tugas.judul}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Dibuat Pada</p>
                <p className="font-medium text-gray-900">{new Date(tugas.createdAt).toLocaleDateString("id-ID", { day:"numeric", month:"long", year:"numeric" })}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-gray-500 mb-1">Deskripsi / Instruksi</p>
                <div className="p-4 bg-gray-50 rounded-lg whitespace-pre-wrap text-sm text-gray-700 border">
                  {tugas.deskripsi}
                </div>
              </div>
              {tugas.fileLampiran && (
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-500 mb-1">Lampiran dari Admin</p>
                  <a href={tugas.fileLampiran} target="_blank" rel="noopener noreferrer" className="text-pertamina-blue hover:underline break-all text-sm font-medium">
                    {tugas.fileLampiran}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Card: Info User */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-pertamina-blue/10 rounded-full flex items-center justify-center text-pertamina-blue">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">Ditugaskan Kepada</p>
              <p className="font-bold text-gray-900">{tugas.user?.nama}</p>
              <p className="text-xs text-gray-500">{tugas.user?.jabatan} • {tugas.user?.lokasiSite}</p>
            </div>
          </div>

          {/* Card: Progress & Hasil */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Laporan & Bukti Pengerjaan</h2>
            
            <div className="space-y-6">
              {/* Tahap Pengerjaan */}
              <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  Tahap Pengerjaan (In Progress)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Dokumen Pengerjaan</p>
                    <p className="text-sm font-medium text-gray-900">{tugas.dokumenPengerjaan || "-"}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Data Tambahan</p>
                    <p className="text-sm font-medium text-gray-900">{tugas.dataPengerjaan || "-"}</p>
                  </div>
                  {tugas.fotoPengerjaan && (
                    <div className="md:col-span-2 mt-2">
                      <p className="text-xs text-gray-500 mb-2">Foto / Screenshot</p>
                      <img src={tugas.fotoPengerjaan} alt="Foto Pengerjaan" className="max-w-xs rounded-lg border shadow-sm" />
                    </div>
                  )}
                </div>
              </div>

              {/* Dokumentasi Selesai */}
              <div className="bg-green-50/50 p-4 rounded-lg border border-green-100">
                <h3 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  Dokumentasi Final (Selesai)
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Laporan Selesai</p>
                    <div className="p-3 bg-white rounded border border-gray-200 text-sm whitespace-pre-wrap text-gray-800">
                      {tugas.laporanSelesai || <span className="text-gray-400 italic">Belum ada laporan akhir</span>}
                    </div>
                  </div>
                  {tugas.fotoSelesai && (
                    <div>
                      <p className="text-xs text-gray-500 mb-2">Foto Hasil Akhir</p>
                      <img src={tugas.fotoSelesai} alt="Foto Selesai" className="max-w-md rounded-lg border shadow-sm" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Aksi Verifikasi: only show if status is 'review' */}
            {tugas.status === "review" && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-semibold font-gray-900 mb-4 text-center">Menunggu Verifikasi Admin</h3>
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={() => handleVerify("rejected")}
                    disabled={processing}
                    className="px-6 py-2 bg-white border-2 border-red-500 text-red-600 rounded-lg font-bold hover:bg-red-50 transition-colors disabled:opacity-50 flex items-center gap-2"
                  >
                    Tolak / Minta Revisi
                  </button>
                  <button
                    onClick={() => handleVerify("approved")}
                    disabled={processing}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 shadow-sm transition-colors disabled:opacity-50 flex items-center gap-2"
                  >
                    Setujui & Selesaikan Tugas
                  </button>
                </div>
              </div>
            )}
            
            {tugas.status === "approved" && (
              <div className="mt-8 pt-6 border-t border-gray-200 flex justify-center">
                <div className="px-6 py-3 bg-green-50 border border-green-200 text-green-800 rounded-lg flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-semibold">Tugas ini telah disetujui dan selesai.</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
