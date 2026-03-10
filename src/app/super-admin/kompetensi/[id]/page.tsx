"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import toast from "react-hot-toast";
import Link from "next/link";

export default function KompetensiDetailPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const params = useParams();
  const [kompetensi, setKompetensi] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    nama: "",
    nip: "",
    jabatan: "",
    unitKerja: "",
    jenisKompetensi: "",
    namaSertifikasi: "",
    nomorSertifikasi: "",
    lembagaPenerbit: "",
    tanggalTerbit: "",
    masaBerlakuSertifikasi: "",
    statusKompetensi: "aktif",
    catatan: "",
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (status === "authenticated" && params.id) {
      fetchKompetensi();
    }
  }, [status, params.id]);

  const fetchKompetensi = async () => {
    try {
      const res = await fetch(`/api/kompetensi?id=${params.id}`);
      const data = await res.json();
      
      if (data.error) {
        toast.error(data.error);
        router.push("/super-admin/kompetensi");
        return;
      }
      
      // API returns { kompetensi: [...] }, get first item
      const kompetensidata = data.kompetensi?.[0];
      if (!kompetensidata) {
        router.push("/super-admin/kompetensi");
        return;
      }
      
      setKompetensi(kompetensidata);
      setFormData({
        nama: kompetensidata.nama || "",
        nip: kompetensidata.nip || "",
        jabatan: kompetensidata.jabatan || "",
        unitKerja: kompetensidata.unitKerja || "",
        jenisKompetensi: kompetensidata.jenisKompetensi || "",
        namaSertifikasi: kompetensidata.namaSertifikasi || "",
        nomorSertifikasi: kompetensidata.nomorSertifikasi || "",
        lembagaPenerbit: kompetensidata.lembagaPenerbit || "",
        tanggalTerbit: kompetensidata.tanggalTerbit ? new Date(kompetensidata.tanggalTerbit).toISOString().split('T')[0] : "",
        masaBerlakuSertifikasi: kompetensidata.masaBerlakuSertifikasi ? new Date(kompetensidata.masaBerlakuSertifikasi).toISOString().split('T')[0] : "",
        statusKompetensi: kompetensidata.statusKompetensi || "aktif",
        catatan: kompetensidata.catatan || "",
      });
    } catch (error) {
      console.error("Error fetching kompetensi:", error);
      toast.error("Gagal memuat detail kompetensi");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const res = await fetch("/api/kompetensi", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, id: params.id }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Gagal mengupdate kompetensi");
      }

      toast.success("Kompetensi berhasil diupdate");
      setIsEditing(false);
      fetchKompetensi();
    } catch (error: any) {
      toast.error(error.message || "Gagal mengupdate kompetensi");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "aktif": return "bg-green-100 text-green-800";
      case "expired": return "bg-red-100 text-red-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "aktif": return "Aktif";
      case "expired": return "Expired";
      case "pending": return "Pending";
      default: return status;
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!kompetensi) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar role="super_admin" />
      
      <main className="lg:ml-64 min-h-screen">
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link 
              href="/super-admin/kompetensi"
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-pertamina-dark">Detail Kompetensi Personil</h1>
              <p className="text-gray-600">ID: #{kompetensi.id}</p>
            </div>
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-pertamina-blue text-white rounded-lg hover:bg-blue-600 transition-colors font-medium flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Edit
            </button>
          </div>
        </div>

        <div className="px-4 sm:px-6 lg:px-8 py-8">
          {isEditing ? (
            /* Edit Form */
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-6">
              <h2 className="text-lg font-semibold text-pertamina-dark">Edit Kompetensi Personil</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nama *
                  </label>
                  <input
                    type="text"
                    value={formData.nama}
                    onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    NIP
                  </label>
                  <input
                    type="text"
                    value={formData.nip}
                    onChange={(e) => setFormData({ ...formData, nip: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Jabatan
                  </label>
                  <input
                    type="text"
                    value={formData.jabatan}
                    onChange={(e) => setFormData({ ...formData, jabatan: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Unit Kerja
                  </label>
                  <input
                    type="text"
                    value={formData.unitKerja}
                    onChange={(e) => setFormData({ ...formData, unitKerja: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Jenis Kompetensi *
                  </label>
                  <input
                    type="text"
                    value={formData.jenisKompetensi}
                    onChange={(e) => setFormData({ ...formData, jenisKompetensi: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Sertifikasi
                  </label>
                  <input
                    type="text"
                    value={formData.namaSertifikasi}
                    onChange={(e) => setFormData({ ...formData, namaSertifikasi: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nomor Sertifikasi
                  </label>
                  <input
                    type="text"
                    value={formData.nomorSertifikasi}
                    onChange={(e) => setFormData({ ...formData, nomorSertifikasi: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Lembaga Penerbit
                  </label>
                  <input
                    type="text"
                    value={formData.lembagaPenerbit}
                    onChange={(e) => setFormData({ ...formData, lembagaPenerbit: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tanggal Terbit
                  </label>
                  <input
                    type="date"
                    value={formData.tanggalTerbit}
                    onChange={(e) => setFormData({ ...formData, tanggalTerbit: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Masa Berlaku Sertifikasi
                  </label>
                  <input
                    type="date"
                    value={formData.masaBerlakuSertifikasi}
                    onChange={(e) => setFormData({ ...formData, masaBerlakuSertifikasi: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status Kompetensi
                </label>
                <select
                  value={formData.statusKompetensi}
                  onChange={(e) => setFormData({ ...formData, statusKompetensi: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                >
                  <option value="aktif">Aktif</option>
                  <option value="expired">Expired</option>
                  <option value="pending">Pending</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Catatan
                </label>
                <textarea
                  value={formData.catatan}
                  onChange={(e) => setFormData({ ...formData, catatan: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  rows={3}
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="px-6 py-2 bg-pertamina-blue text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
                >
                  Simpan Perubahan
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    fetchKompetensi();
                  }}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Batal
                </button>
              </div>
            </form>
          ) : (
            /* View Mode */
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Informasi Personil */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-pertamina-dark mb-4">Informasi Personil</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Nama</p>
                        <p className="font-medium">{kompetensi.nama}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">NIP</p>
                        <p className="font-medium">{kompetensi.nip || "-"}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Jabatan</p>
                        <p className="font-medium">{kompetensi.jabatan || "-"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Unit Kerja</p>
                        <p className="font-medium">{kompetensi.unitKerja || "-"}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Informasi Kompetensi */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-pertamina-dark mb-4">Informasi Kompetensi & Sertifikasi</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Jenis Kompetensi</p>
                        <p className="font-medium">{kompetensi.jenisKompetensi}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Nama Sertifikasi</p>
                        <p className="font-medium">{kompetensi.namaSertifikasi || "-"}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Nomor Sertifikasi</p>
                        <p className="font-medium">{kompetensi.nomorSertifikasi || "-"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Lembaga Penerbit</p>
                        <p className="font-medium">{kompetensi.lembagaPenerbit || "-"}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Tanggal Terbit</p>
                        <p className="font-medium">
                          {kompetensi.tanggalTerbit 
                            ? new Date(kompetensi.tanggalTerbit).toLocaleDateString("id-ID")
                            : "-"}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Masa Berlaku Sertifikasi</p>
                        <p className="font-medium">
                          {kompetensi.masaBerlakuSertifikasi 
                            ? new Date(kompetensi.masaBerlakuSertifikasi).toLocaleDateString("id-ID")
                            : "-"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Catatan */}
                {kompetensi.catatan && (
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h2 className="text-lg font-semibold text-pertamina-dark mb-4">Catatan</h2>
                    <p className="font-medium">{kompetensi.catatan}</p>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Status Info */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-pertamina-dark mb-4">Status</h2>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Status Kompetensi</p>
                      <span className={`inline-block px-3 py-1 rounded text-sm font-medium ${getStatusColor(kompetensi.statusKompetensi)}`}>
                        {getStatusLabel(kompetensi.statusKompetensi)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Metadata */}
                <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                  <h2 className="text-sm font-semibold text-gray-500 mb-3">Metadata</h2>
                  <div className="space-y-2 text-xs text-gray-500">
                    <p>Dibuat: {new Date(kompetensi.createdAt).toLocaleString("id-ID")}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

