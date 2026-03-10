"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import toast from "react-hot-toast";

export default function UserTugasDetailPage({ params }: { params: { id: string } }) {
  const { data: session, status: sessionStatus } = useSession();
  const router = useRouter();
  
  const [tugas, setTugas] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Forms
  const [progressData, setProgressData] = useState({
    fileHasil: "",
    dataPengerjaan: "",
  });

  const [selesaiData, setSelesaiData] = useState({
    fileHasil: "",
    laporanSelesai: "",
  });

  const [activeTab, setActiveTab] = useState<"progress" | "selesai">("progress");

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
      const res = await fetch(`/api/user/tugas/${params.id}`);
      if (!res.ok) throw new Error("Gagal memuat tugas");
      const data = await res.json();
      setTugas(data.tugas);
      
      // Init state
      setProgressData({
        fileHasil: data.tugas.fileHasil || "",
        dataPengerjaan: data.tugas.dataPengerjaan || "",
      });
      setSelesaiData({
        fileHasil: data.tugas.fileHasil || "",
        laporanSelesai: data.tugas.laporanSelesai || "",
      });
    } catch (error) {
      console.error("Error fetching tugas:", error);
      toast.error("Tugas tidak ditemukan");
      router.push("/user/tugas");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = async (newStatus: string, additionalData = {}) => {
    setSaving(true);
    try {
      const res = await fetch(`/api/user/tugas/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus, ...additionalData }),
      });

      if (!res.ok) throw new Error("Gagal memproses");

      toast.success(newStatus === "review" ? "Tugas berhasil disubmit" : "Status berhasil diupdate");
      fetchTugasDetail();
    } catch (error) {
      toast.error("Gagal mengupdate tugas");
    } finally {
      setSaving(false);
    }
  };

  const handleSaveProgress = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch(`/api/user/tugas/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...progressData }),
      });

      if (!res.ok) throw new Error("Gagal menyimpan progress");

      toast.success("Progress pengerjaan berhasil disimpan");
      fetchTugasDetail();
    } catch (error) {
      toast.error("Gagal menyimpan progress");
    } finally {
      setSaving(false);
    }
  };

  const handleSubmitSelesai = async (e: React.FormEvent) => {
    e.preventDefault();
    handleUpdateStatus("review", { ...selesaiData });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!tugas) return null;

  const isEditable = tugas.status === "in_progress" || tugas.status === "rejected";

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      <Sidebar role="user" />
      
      <main className="flex-1 lg:ml-64 transition-all duration-300 pb-12">
        <header className="bg-white shadow-sm sticky top-0 z-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
            <Link href="/user/tugas" className="text-gray-500 hover:text-pertamina-blue transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Link>
            <div>
              <h1 className="text-xl font-bold text-gray-900 line-clamp-1">{tugas.judul}</h1>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs text-gray-500 mt-1">
                <p>
                  Ditugaskan oleh <span className="font-medium text-gray-700">{tugas.admin?.nama}</span>
                </p>
                <span className="hidden sm:block text-gray-300">•</span>
                <p>
                  Tanggal: <span className="font-medium text-gray-700">{new Date(tugas.createdAt).toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </p>
              </div>
            </div>
            <div className="ml-auto">
              {tugas.status === "pending" && <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold animate-pulse">Menunggu Diterima</span>}
              {tugas.status === "in_progress" && <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">Sedang Dikerjakan</span>}
              {tugas.status === "review" && <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-semibold">Menunggu Verifikasi</span>}
              {tugas.status === "approved" && <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold flex items-center gap-1"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path></svg> Disetujui</span>}
              {tugas.status === "rejected" && <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold">Butuh Revisi</span>}
            </div>
          </div>
        </header>

        <div className="p-4 sm:p-6 max-w-5xl mx-auto space-y-6">
          {/* Instruksi Tugas */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center gap-2 text-gray-800">
              <svg className="w-5 h-5 text-pertamina-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="font-semibold">Instruksi & Detail Tugas</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-700 whitespace-pre-wrap text-sm leading-relaxed">{tugas.deskripsi}</p>
              
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Field Lokasi</p>
                  <p className="text-sm font-semibold text-gray-900 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-pertamina-blue"></span>
                    {tugas.lokasiField || "Tidak ditentukan"}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Nama Area</p>
                  <p className="text-sm font-semibold text-gray-900 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-pertamina-green"></span>
                    {tugas.lokasiArea || "Tidak ditentukan"}
                  </p>
                </div>
                {tugas.lokasiSumur && (
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Nama Sumur</p>
                    <p className="text-sm font-semibold text-pertamina-red flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-pertamina-red"></span>
                      {tugas.lokasiSumur}
                    </p>
                  </div>
                )}
              </div>

              {tugas.fileLampiran && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500 mb-2">Lampiran Pekerjaan (Admin):</p>
                  <a 
                    href={tugas.fileLampiran.startsWith('http') ? tugas.fileLampiran : `https://${tugas.fileLampiran}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-sm text-pertamina-blue bg-blue-50 px-3 py-2 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    Buka Lampiran Referensi
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Aksi Terima Tugas */}
          {tugas.status === "pending" && (
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 text-center shadow-sm">
              <svg className="w-12 h-12 mx-auto text-blue-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Tugas Baru Menunggu</h3>
              <p className="text-blue-700 text-sm mb-6 max-w-md mx-auto">Anda telah ditugaskan pekerjaan ini. Klik tombol di bawah untuk menyetujui dan memulai pengerjaan.</p>
              <button
                onClick={() => handleUpdateStatus("in_progress")}
                disabled={saving}
                className="px-8 py-3 bg-pertamina-blue text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition flex items-center gap-2 mx-auto disabled:opacity-50"
              >
                {saving ? "Memproses..." : "Terima & Mulai Kerjakan"}
              </button>
            </div>
          )}

          {/* Area Pengerjaan (Hanya muncul jika sudah diterima) */}
          {tugas.status !== "pending" && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="flex border-b border-gray-200 bg-gray-50/50">
                <button
                  onClick={() => setActiveTab("progress")}
                  className={`flex-1 py-4 px-6 text-sm font-semibold transition-colors flex items-center justify-center gap-2 ${
                    activeTab === "progress" ? "bg-white text-pertamina-blue border-b-2 border-pertamina-blue" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  1. Laporan Progress (Berkala)
                </button>
                <button
                  onClick={() => setActiveTab("selesai")}
                  className={`flex-1 py-4 px-6 text-sm font-semibold transition-colors flex items-center justify-center gap-2 leading-tight ${
                    activeTab === "selesai" ? "bg-white text-green-600 border-b-2 border-green-500" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  2. Penyelesaian Dokumen Akhir
                </button>
              </div>

              <div className="p-6">
                {tugas.status === "rejected" && (
                  <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm rounded-r-lg">
                    <p className="font-bold mb-1">Tugas Dikembalikan (Revisi)</p>
                    <p>Admin meminta revisi pada hasil tugas Anda. Silakan periksa kembali laporan dan foto yang Anda kirimkan.</p>
                  </div>
                )}
                {tugas.status === "review" && (
                  <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 text-yellow-800 text-sm rounded-lg flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-bold">Menunggu Verifikasi Admin</p>
                      <p className="mt-1">Pekerjaan telah disubmit dan sedang menunggu pengecekan oleh Admin. Form tidak dapat diubah sementara waktu.</p>
                    </div>
                  </div>
                )}
                {tugas.status === "approved" && (
                  <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 text-green-800 text-sm rounded-lg flex items-center gap-3">
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-bold text-base">Tugas Selesai Terverifikasi</p>
                      <p>Pekerjaan Anda telah divalidasi dan disetujui oleh Admin. Terima kasih.</p>
                    </div>
                  </div>
                )}

                {/* Tab Progress */}
                {activeTab === "progress" && (
                  <form onSubmit={handleSaveProgress} className="space-y-5 animate-fadeIn">
                    <p className="text-sm text-gray-500 mb-4">Anda dapat mengisi progress pekerjaan secara bertahap dan menyimpannya. Admin juga dapat memantau data progress ini.</p>
                                    <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Upload Bukti Pekerjaan / Link Laporan</label>
                      <input 
                        type="text" 
                        value={progressData.fileHasil}
                        onChange={(e) => setProgressData({...progressData, fileHasil: e.target.value})}
                        disabled={!isEditable}
                        placeholder="Link GDrive PDF, Excel, atau Foto Bukti Lapangan"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-pertamina-blue outline-none transition-all disabled:bg-gray-100 disabled:text-gray-500" 
                      />
                    </div>
                  </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Data Progress / Catatan Lapangan
                      </label>
                      <textarea
                        disabled={!isEditable}
                        rows={4}
                        value={progressData.dataPengerjaan}
                        onChange={(e) => setProgressData({...progressData, dataPengerjaan: e.target.value})}
                        placeholder="Tuliskan catatan kemajuan pekerjaan, temuan awal, dsb."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-pertamina-blue outline-none transition-all resize-none disabled:bg-gray-100 disabled:text-gray-500"
                      />
                    </div>

                    {isEditable && (
                      <div className="pt-4 flex justify-end">
                        <button
                          type="submit"
                          disabled={saving}
                          className="px-6 py-2 bg-white border border-pertamina-blue text-pertamina-blue rounded-lg font-medium hover:bg-blue-50 transition-colors disabled:opacity-50"
                        >
                          {saving ? "Menyimpan..." : "Simpan Progress Sementara"}
                        </button>
                      </div>
                    )}
                  </form>
                )}

                {/* Tab Selesai */}
                {activeTab === "selesai" && (
                  <form onSubmit={handleSubmitSelesai} className="space-y-5 animate-fadeIn">
                    <p className="text-sm text-gray-500 mb-4 bg-green-50 p-3 rounded border border-green-100">
                      Jika pekerjaan sudah selesai sepenuhnya, lengkapi form final di bawah ini lalu klik tombol submit untuk meminta verifikasi Admin.
                    </p>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Laporan Selesai <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        disabled={!isEditable}
                        rows={6}
                        value={selesaiData.laporanSelesai}
                        onChange={(e) => setSelesaiData({...selesaiData, laporanSelesai: e.target.value})}
                        placeholder="Jelaskan hasil akhir dari tugas yang diberikan"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-pertamina-blue outline-none transition-all resize-none disabled:bg-gray-100 disabled:text-gray-500"
                      />
                    </div>

                                        <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Link Laporan Final (Wajib)</label>
                      <input 
                        type="text" 
                        required
                        value={selesaiData.fileHasil}
                        onChange={(e) => setSelesaiData({...selesaiData, fileHasil: e.target.value})}
                        disabled={!isEditable}
                        placeholder="Link GDrive laporan akhir tugas yang komprehensif"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-pertamina-blue outline-none transition-all disabled:bg-gray-100 disabled:text-gray-500" 
                      />
                    </div>
                  </div>

                    {isEditable && (
                      <div className="pt-6 border-t border-gray-100 flex justify-end">
                        <button
                          type="submit"
                          disabled={saving}
                          className="px-8 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 shadow flex items-center gap-2 transition-colors disabled:opacity-50"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {saving ? "Memproses..." : "Submit Tugas Final Selesai"}
                        </button>
                      </div>
                    )}
                  </form>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
