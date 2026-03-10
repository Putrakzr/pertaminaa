"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import toast from "react-hot-toast";
import Link from "next/link";

export default function SertifikasiDetailPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const params = useParams();
  const [sertifikasi, setSertifikasi] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    namaPeralatan: "",
    kodePeralatan: "",
    jenisPeralatan: "",
    merk: "",
    type: "",
    nomorSeri: "",
    tahunProduksi: "",
    lokasiPemasangan: "",
    namaOperator: "",
    nomorSertifikasiOperator: "",
    jenisSertifikasiOperator: "",
    masaBerlakuSertifikasiOperator: "",
    nomorSertifikatPeralatan: "",
    lembagaPenerbitSertifikat: "",
    masaBerlakuSertifikatPeralatan: "",
    tanggalTerbitSertifikat: "",
    kondisi: "baik",
    hasilInspeksiTerakhir: "",
    catatan: "",
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (status === "authenticated" && params.id) {
      fetchSertifikasi();
    }
  }, [status, params.id]);

  const fetchSertifikasi = async () => {
    try {
      const res = await fetch(`/api/sertifikasi-peralatan?id=${params.id}`);
      const data = await res.json();
      
      if (data.error) {
        toast.error(data.error);
        router.push("/super-admin/sertifikasi-peralatan");
        return;
      }
      
      // API returns { sertifikasi: [...] }, get first item
      const sertifikasiData = data.sertifikasi?.[0];
      if (!sertifikasiData) {
        router.push("/super-admin/sertifikasi-peralatan");
        return;
      }
      
      setSertifikasi(sertifikasiData);
      setFormData({
        namaPeralatan: sertifikasiData.namaPeralatan || "",
        kodePeralatan: sertifikasiData.kodePeralatan || "",
        jenisPeralatan: sertifikasiData.jenisPeralatan || "",
        merk: sertifikasiData.merk || "",
        type: sertifikasiData.type || "",
        nomorSeri: sertifikasiData.nomorSeri || "",
        tahunProduksi: sertifikasiData.tahunProduksi?.toString() || "",
        lokasiPemasangan: sertifikasiData.lokasiPemasangan || "",
        namaOperator: sertifikasiData.namaOperator || "",
        nomorSertifikasiOperator: sertifikasiData.nomorSertifikasiOperator || "",
        jenisSertifikasiOperator: sertifikasiData.jenisSertifikasiOperator || "",
        masaBerlakuSertifikasiOperator: sertifikasiData.masaBerlakuSertifikasiOperator ? new Date(sertifikasiData.masaBerlakuSertifikasiOperator).toISOString().split('T')[0] : "",
        nomorSertifikatPeralatan: sertifikasiData.nomorSertifikatPeralatan || "",
        lembagaPenerbitSertifikat: sertifikasiData.lembagaPenerbitSertifikat || "",
        masaBerlakuSertifikatPeralatan: sertifikasiData.masaBerlakuSertifikatPeralatan ? new Date(sertifikasiData.masaBerlakuSertifikatPeralatan).toISOString().split('T')[0] : "",
        tanggalTerbitSertifikat: sertifikasiData.tanggalTerbitSertifikat ? new Date(sertifikasiData.tanggalTerbitSertifikat).toISOString().split('T')[0] : "",
        kondisi: sertifikasiData.kondisi || "baik",
        hasilInspeksiTerakhir: sertifikasiData.hasilInspeksiTerakhir ? new Date(sertifikasiData.hasilInspeksiTerakhir).toISOString().split('T')[0] : "",
        catatan: sertifikasiData.catatan || "",
      });
    } catch (error) {
      console.error("Error fetching sertifikasi:", error);
      toast.error("Gagal memuat detail sertifikasi");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const res = await fetch("/api/sertifikasi-peralatan", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, id: params.id }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Gagal mengupdate sertifikasi");
      }

      toast.success("Sertifikasi berhasil diupdate");
      setIsEditing(false);
      fetchSertifikasi();
    } catch (error: any) {
      toast.error(error.message || "Gagal mengupdate sertifikasi");
    }
  };

  const getKondisiColor = (kondisi: string) => {
    switch (kondisi) {
      case "baik": return "bg-green-100 text-green-800";
      case "rusak": return "bg-red-100 text-red-800";
      case "maintenance": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getKondisiLabel = (kondisi: string) => {
    switch (kondisi) {
      case "baik": return "Baik";
      case "rusak": return "Rusak";
      case "maintenance": return "Maintenance";
      default: return kondisi;
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!sertifikasi) {
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
              href="/super-admin/sertifikasi-peralatan"
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-pertamina-dark">Detail Sertifikasi Peralatan</h1>
              <p className="text-gray-600">ID: #{sertifikasi.id}</p>
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
              <h2 className="text-lg font-semibold text-pertamina-dark">Edit Sertifikasi Peralatan</h2>
              
              {/* Data Peralatan */}
              <div>
                <h3 className="font-semibold text-gray-700 mb-2 border-b pb-1">Data Peralatan</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Peralatan *
                  </label>
                  <input
                    type="text"
                    value={formData.namaPeralatan}
                    onChange={(e) => setFormData({ ...formData, namaPeralatan: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Kode Peralatan
                  </label>
                  <input
                    type="text"
                    value={formData.kodePeralatan}
                    onChange={(e) => setFormData({ ...formData, kodePeralatan: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Jenis Peralatan
                  </label>
                  <input
                    type="text"
                    value={formData.jenisPeralatan}
                    onChange={(e) => setFormData({ ...formData, jenisPeralatan: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Merk
                  </label>
                  <input
                    type="text"
                    value={formData.merk}
                    onChange={(e) => setFormData({ ...formData, merk: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Type
                  </label>
                  <input
                    type="text"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nomor Seri
                  </label>
                  <input
                    type="text"
                    value={formData.nomorSeri}
                    onChange={(e) => setFormData({ ...formData, nomorSeri: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tahun Produksi
                  </label>
                  <input
                    type="number"
                    value={formData.tahunProduksi}
                    onChange={(e) => setFormData({ ...formData, tahunProduksi: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Lokasi Pemasangan
                  </label>
                  <input
                    type="text"
                    value={formData.lokasiPemasangan}
                    onChange={(e) => setFormData({ ...formData, lokasiPemasangan: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  />
                </div>
              </div>

              {/* Sertifikasi Operator */}
              <div>
                <h3 className="font-semibold text-gray-700 mb-2 border-b pb-1 mt-4">Sertifikasi Operator</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Operator
                  </label>
                  <input
                    type="text"
                    value={formData.namaOperator}
                    onChange={(e) => setFormData({ ...formData, namaOperator: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nomor Sertifikasi Operator
                  </label>
                  <input
                    type="text"
                    value={formData.nomorSertifikasiOperator}
                    onChange={(e) => setFormData({ ...formData, nomorSertifikasiOperator: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Jenis Sertifikasi Operator
                  </label>
                  <input
                    type="text"
                    value={formData.jenisSertifikasiOperator}
                    onChange={(e) => setFormData({ ...formData, jenisSertifikasiOperator: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Masa Berlaku Sertifikasi Operator
                  </label>
                  <input
                    type="date"
                    value={formData.masaBerlakuSertifikasiOperator}
                    onChange={(e) => setFormData({ ...formData, masaBerlakuSertifikasiOperator: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  />
                </div>
              </div>

              {/* Sertifikasi Peralatan */}
              <div>
                <h3 className="font-semibold text-gray-700 mb-2 border-b pb-1 mt-4">Sertifikasi Peralatan</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nomor Sertifikat Peralatan
                  </label>
                  <input
                    type="text"
                    value={formData.nomorSertifikatPeralatan}
                    onChange={(e) => setFormData({ ...formData, nomorSertifikatPeralatan: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Lembaga Penerbit Sertifikat
                  </label>
                  <input
                    type="text"
                    value={formData.lembagaPenerbitSertifikat}
                    onChange={(e) => setFormData({ ...formData, lembagaPenerbitSertifikat: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tanggal Terbit Sertifikat
                  </label>
                  <input
                    type="date"
                    value={formData.tanggalTerbitSertifikat}
                    onChange={(e) => setFormData({ ...formData, tanggalTerbitSertifikat: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Masa Berlaku Sertifikat Peralatan
                  </label>
                  <input
                    type="date"
                    value={formData.masaBerlakuSertifikatPeralatan}
                    onChange={(e) => setFormData({ ...formData, masaBerlakuSertifikatPeralatan: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  />
                </div>
              </div>

              {/* Kondisi */}
              <div>
                <h3 className="font-semibold text-gray-700 mb-2 border-b pb-1 mt-4">Kondisi & Lainnya</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Kondisi
                  </label>
                  <select
                    value={formData.kondisi}
                    onChange={(e) => setFormData({ ...formData, kondisi: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  >
                    <option value="baik">Baik</option>
                    <option value="rusak">Rusak</option>
                    <option value="maintenance">Maintenance</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Hasil Inspeksi Terakhir
                  </label>
                  <input
                    type="date"
                    value={formData.hasilInspeksiTerakhir}
                    onChange={(e) => setFormData({ ...formData, hasilInspeksiTerakhir: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  />
                </div>
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
                    fetchSertifikasi();
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
                {/* Informasi Peralatan */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-pertamina-dark mb-4">Informasi Peralatan</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Nama Peralatan</p>
                        <p className="font-medium">{sertifikasi.namaPeralatan}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Kode Peralatan</p>
                        <p className="font-medium">{sertifikasi.kodePeralatan || "-"}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Jenis Peralatan</p>
                        <p className="font-medium">{sertifikasi.jenisPeralatan || "-"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Merk</p>
                        <p className="font-medium">{sertifikasi.merk || "-"}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Type</p>
                        <p className="font-medium">{sertifikasi.type || "-"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Nomor Seri</p>
                        <p className="font-medium">{sertifikasi.nomorSeri || "-"}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Tahun Produksi</p>
                        <p className="font-medium">{sertifikasi.tahunProduksi || "-"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Lokasi Pemasangan</p>
                        <p className="font-medium">{sertifikasi.lokasiPemasangan || "-"}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sertifikasi Operator */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-pertamina-dark mb-4">Sertifikasi Operator</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Nama Operator</p>
                        <p className="font-medium">{sertifikasi.namaOperator || "-"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Nomor Sertifikasi Operator</p>
                        <p className="font-medium">{sertifikasi.nomorSertifikasiOperator || "-"}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Jenis Sertifikasi Operator</p>
                        <p className="font-medium">{sertifikasi.jenisSertifikasiOperator || "-"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Masa Berlaku Sertifikasi Operator</p>
                        <p className="font-medium">
                          {sertifikasi.masaBerlakuSertifikasiOperator 
                            ? new Date(sertifikasi.masaBerlakuSertifikasiOperator).toLocaleDateString("id-ID")
                            : "-"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sertifikasi Peralatan */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-pertamina-dark mb-4">Sertifikasi Peralatan</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Nomor Sertifikat Peralatan</p>
                        <p className="font-medium">{sertifikasi.nomorSertifikatPeralatan || "-"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Lembaga Penerbit Sertifikat</p>
                        <p className="font-medium">{sertifikasi.lembagaPenerbitSertifikat || "-"}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Tanggal Terbit Sertifikat</p>
                        <p className="font-medium">
                          {sertifikasi.tanggalTerbitSertifikat 
                            ? new Date(sertifikasi.tanggalTerbitSertifikat).toLocaleDateString("id-ID")
                            : "-"}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Masa Berlaku Sertifikat</p>
                        <p className="font-medium">
                          {sertifikasi.masaBerlakuSertifikatPeralatan 
                            ? new Date(sertifikasi.masaBerlakuSertifikatPeralatan).toLocaleDateString("id-ID")
                            : "-"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Catatan */}
                {sertifikasi.catatan && (
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h2 className="text-lg font-semibold text-pertamina-dark mb-4">Catatan</h2>
                    <p className="font-medium">{sertifikasi.catatan}</p>
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
                      <p className="text-sm text-gray-500">Kondisi</p>
                      <span className={`inline-block px-3 py-1 rounded text-sm font-medium ${getKondisiColor(sertifikasi.kondisi)}`}>
                        {getKondisiLabel(sertifikasi.kondisi)}
                      </span>
                    </div>
                    {sertifikasi.hasilInspeksiTerakhir && (
                      <div>
                        <p className="text-sm text-gray-500">Hasil Inspeksi Terakhir</p>
                        <p className="font-medium">
                          {new Date(sertifikasi.hasilInspeksiTerakhir).toLocaleDateString("id-ID")}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Metadata */}
                <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                  <h2 className="text-sm font-semibold text-gray-500 mb-3">Metadata</h2>
                  <div className="space-y-2 text-xs text-gray-500">
                    <p>Dibuat: {new Date(sertifikasi.createdAt).toLocaleString("id-ID")}</p>
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

