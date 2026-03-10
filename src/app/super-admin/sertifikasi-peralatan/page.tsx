"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import toast from "react-hot-toast";

interface Sertifikasi {
  id: number;
  namaPeralatan: string;
  kodePeralatan?: string;
  jenisPeralatan?: string;
  merk?: string;
  type?: string;
  nomorSeri?: string;
  tahunProduksi?: number;
  lokasiPemasangan?: string;
  namaOperator?: string;
  nomorSertifikasiOperator?: string;
  jenisSertifikasiOperator?: string;
  masaBerlakuSertifikasiOperator?: string;
  nomorSertifikatPeralatan?: string;
  lembagaPenerbitSertifikat?: string;
  masaBerlakuSertifikatPeralatan?: string;
  tanggalTerbitSertifikat?: string;
  kondisi?: string;
  hasilInspeksiTerakhir?: string;
  catatan?: string;
  createdAt: string;
}

export default function SertifikasiPeralatanPage() {
  const { data: session, status } = useSession();
  const [sertifikasi, setSertifikasi] = useState<Sertifikasi[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);
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
      redirect("/login");
    }
    
    if (status === "authenticated" && session) {
      const role = (session.user as any).role;
      if (role !== "super_admin") {
        redirect("/dashboard");
      }
      fetchSertifikasi();
    }
  }, [status, session]);

  const fetchSertifikasi = async () => {
    try {
      const res = await fetch("/api/sertifikasi-peralatan");
      if (!res.ok) throw new Error("Gagal memuat data");
      const data = await res.json();
      setSertifikasi(data.sertifikasi || []);
    } catch (error) {
      console.error("Error fetching sertifikasi:", error);
      toast.error("Gagal memuat data sertifikasi");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
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
    setIsEditing(false);
    setEditingId(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = "/api/sertifikasi-peralatan";
      const method = isEditing ? "PUT" : "POST";
      const body = isEditing 
        ? JSON.stringify({ ...formData, id: editingId })
        : JSON.stringify(formData);

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body,
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || `Gagal ${isEditing ? 'mengupdate' : 'membuat'} sertifikasi`);
      }

      toast.success(`Sertifikasi peralatan berhasil ${isEditing ? 'diupdate' : 'ditambahkan'}`);
      setShowModal(false);
      resetForm();
      fetchSertifikasi();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleEdit = (item: Sertifikasi) => {
    setFormData({
      namaPeralatan: item.namaPeralatan,
      kodePeralatan: item.kodePeralatan || "",
      jenisPeralatan: item.jenisPeralatan || "",
      merk: item.merk || "",
      type: item.type || "",
      nomorSeri: item.nomorSeri || "",
      tahunProduksi: item.tahunProduksi?.toString() || "",
      lokasiPemasangan: item.lokasiPemasangan || "",
      namaOperator: item.namaOperator || "",
      nomorSertifikasiOperator: item.nomorSertifikasiOperator || "",
      jenisSertifikasiOperator: item.jenisSertifikasiOperator || "",
      masaBerlakuSertifikasiOperator: item.masaBerlakuSertifikasiOperator ? new Date(item.masaBerlakuSertifikasiOperator).toISOString().split('T')[0] : "",
      nomorSertifikatPeralatan: item.nomorSertifikatPeralatan || "",
      lembagaPenerbitSertifikat: item.lembagaPenerbitSertifikat || "",
      masaBerlakuSertifikatPeralatan: item.masaBerlakuSertifikatPeralatan ? new Date(item.masaBerlakuSertifikatPeralatan).toISOString().split('T')[0] : "",
      tanggalTerbitSertifikat: item.tanggalTerbitSertifikat ? new Date(item.tanggalTerbitSertifikat).toISOString().split('T')[0] : "",
      kondisi: item.kondisi || "baik",
      hasilInspeksiTerakhir: item.hasilInspeksiTerakhir ? new Date(item.hasilInspeksiTerakhir).toISOString().split('T')[0] : "",
      catatan: item.catatan || "",
    });
    setEditingId(item.id);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleDeleteClick = (id: number) => {
    setDeletingId(id);
    setShowDeleteConfirm(true);
  };

  const handleDeleteConfirm = async () => {
    if (!deletingId) return;
    
    try {
      const res = await fetch(`/api/sertifikasi-peralatan?id=${deletingId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Gagal menghapus sertifikasi");
      }

      toast.success("Sertifikasi peralatan berhasil dihapus");
      setShowDeleteConfirm(false);
      setDeletingId(null);
      fetchSertifikasi();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar role="super_admin" />
      
      <main className="lg:ml-64 min-h-screen transition-all duration-300">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-20">
          <div className="px-6 py-4 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-pertamina-dark">
                Rekapitulasi Sertifikasi Peralatan
              </h1>
              <p className="text-gray-600 text-sm mt-1">
                Kelola data sertifikasi peralatan dan operator
              </p>
            </div>
            <button
              onClick={() => {
                resetForm();
                setShowModal(true);
              }}
              className="bg-pertamina-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Tambah Sertifikasi
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="p-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nama Peralatan</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Jenis</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Merk/Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tahun Produksi</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Operator</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sertifikat Operator</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Masa Berlaku Op.</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sertifikat Peralatan</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Masa Berlaku</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Kondisi</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Aksi</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sertifikasi.length > 0 ? (
                    sertifikasi.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-pertamina-dark">
                          {item.namaPeralatan}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.jenisPeralatan || "-"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.merk} {item.type ? `(${item.type})` : ""}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.tahunProduksi || "-"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.namaOperator || "-"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.nomorSertifikasiOperator || "-"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.masaBerlakuSertifikasiOperator ? new Date(item.masaBerlakuSertifikasiOperator).toLocaleDateString("id-ID") : "-"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.nomorSertifikatPeralatan || "-"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.masaBerlakuSertifikatPeralatan ? new Date(item.masaBerlakuSertifikatPeralatan).toLocaleDateString("id-ID") : "-"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs font-medium rounded ${
                            item.kondisi === "baik" ? "bg-green-100 text-green-700" :
                            item.kondisi === "rusak" ? "bg-red-100 text-red-700" :
                            "bg-yellow-100 text-yellow-700"
                          }`}>
                            {item.kondisi || "baik"}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleEdit(item)}
                              className="text-blue-600 hover:text-blue-800 p-1"
                              title="Edit"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </button>
                            <button
                              onClick={() => handleDeleteClick(item.id)}
                              className="text-red-600 hover:text-red-800 p-1"
                              title="Hapus"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={11} className="px-6 py-8 text-center text-gray-500">
                        <svg className="w-12 h-12 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        <p>Belum ada data sertifikasi peralatan</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Modal Form */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-xl font-bold text-pertamina-dark mb-4">
                {isEditing ? 'Edit Sertifikasi Peralatan' : 'Tambah Sertifikasi Peralatan'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Data Peralatan */}
                  <div className="md:col-span-2">
                    <h3 className="font-semibold text-gray-700 mb-2 border-b pb-1">Data Peralatan</h3>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama Peralatan *</label>
                    <input
                      type="text"
                      required
                      value={formData.namaPeralatan}
                      onChange={(e) => setFormData({...formData, namaPeralatan: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Kode Peralatan</label>
                    <input
                      type="text"
                      value={formData.kodePeralatan}
                      onChange={(e) => setFormData({...formData, kodePeralatan: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Peralatan</label>
                    <input
                      type="text"
                      value={formData.jenisPeralatan}
                      onChange={(e) => setFormData({...formData, jenisPeralatan: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Merk</label>
                    <input
                      type="text"
                      value={formData.merk}
                      onChange={(e) => setFormData({...formData, merk: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                    <input
                      type="text"
                      value={formData.type}
                      onChange={(e) => setFormData({...formData, type: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nomor Seri</label>
                    <input
                      type="text"
                      value={formData.nomorSeri}
                      onChange={(e) => setFormData({...formData, nomorSeri: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tahun Produksi</label>
                    <input
                      type="number"
                      value={formData.tahunProduksi}
                      onChange={(e) => setFormData({...formData, tahunProduksi: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Lokasi Pemasangan</label>
                    <input
                      type="text"
                      value={formData.lokasiPemasangan}
                      onChange={(e) => setFormData({...formData, lokasiPemasangan: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>

                  {/* Sertifikasi Operator */}
                  <div className="md:col-span-2">
                    <h3 className="font-semibold text-gray-700 mb-2 border-b pb-1 mt-4">Sertifikasi Operator</h3>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama Operator</label>
                    <input
                      type="text"
                      value={formData.namaOperator}
                      onChange={(e) => setFormData({...formData, namaOperator: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nomor Sertifikasi Operator</label>
                    <input
                      type="text"
                      value={formData.nomorSertifikasiOperator}
                      onChange={(e) => setFormData({...formData, nomorSertifikasiOperator: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Sertifikasi Operator</label>
                    <input
                      type="text"
                      value={formData.jenisSertifikasiOperator}
                      onChange={(e) => setFormData({...formData, jenisSertifikasiOperator: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Masa Berlaku Sertifikasi Operator</label>
                    <input
                      type="date"
                      value={formData.masaBerlakuSertifikasiOperator}
                      onChange={(e) => setFormData({...formData, masaBerlakuSertifikasiOperator: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>

                  {/* Sertifikasi Peralatan */}
                  <div className="md:col-span-2">
                    <h3 className="font-semibold text-gray-700 mb-2 border-b pb-1 mt-4">Sertifikasi Peralatan</h3>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nomor Sertifikat Peralatan</label>
                    <input
                      type="text"
                      value={formData.nomorSertifikatPeralatan}
                      onChange={(e) => setFormData({...formData, nomorSertifikatPeralatan: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Lembaga Penerbit Sertifikat</label>
                    <input
                      type="text"
                      value={formData.lembagaPenerbitSertifikat}
                      onChange={(e) => setFormData({...formData, lembagaPenerbitSertifikat: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Terbit Sertifikat</label>
                    <input
                      type="date"
                      value={formData.tanggalTerbitSertifikat}
                      onChange={(e) => setFormData({...formData, tanggalTerbitSertifikat: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Masa Berlaku Sertifikat Peralatan</label>
                    <input
                      type="date"
                      value={formData.masaBerlakuSertifikatPeralatan}
                      onChange={(e) => setFormData({...formData, masaBerlakuSertifikatPeralatan: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>

                  {/* Kondisi & Lainnya */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Kondisi</label>
                    <select
                      value={formData.kondisi}
                      onChange={(e) => setFormData({...formData, kondisi: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    >
                      <option value="baik">Baik</option>
                      <option value="rusak">Rusak</option>
                      <option value="maintenance">Maintenance</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Hasil Inspeksi Terakhir</label>
                    <input
                      type="date"
                      value={formData.hasilInspeksiTerakhir}
                      onChange={(e) => setFormData({...formData, hasilInspeksiTerakhir: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Catatan</label>
                    <textarea
                      rows={2}
                      value={formData.catatan}
                      onChange={(e) => setFormData({...formData, catatan: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      resetForm();
                    }}
                    className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-pertamina-blue text-white rounded-lg hover:bg-blue-700"
                  >
                    {isEditing ? ' Update' : 'Simpan'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h2 className="text-xl font-bold text-pertamina-dark mb-4">Konfirmasi Hapus</h2>
            <p className="text-gray-600 mb-6">
              Apakah Anda yakin ingin menghapus sertifikasi peralatan ini? Tindakan ini tidak dapat dibatalkan.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowDeleteConfirm(false);
                  setDeletingId(null);
                }}
                className="px-4 py-2 border rounded-lg hover:bg-gray-50"
              >
                Batal
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

