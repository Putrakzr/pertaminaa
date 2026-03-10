"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import toast from "react-hot-toast";

interface Material {
  id: number;
  namaMaterial: string;
  kodeMaterial?: string;
  spesifikasi?: string;
  tahunPembelian?: number;
  vendor?: string;
  jumlah?: number;
  unit?: string;
  lokasiPenyimpanan?: string;
  dokumentasi?: string;
  typePeralatan?: string;
  masaBerlakuType?: string;
  kondisi?: string;
  catatan?: string;
  createdAt: string;
}

export default function MaterialPage() {
  const { data: session, status } = useSession();
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    namaMaterial: "",
    kodeMaterial: "",
    spesifikasi: "",
    tahunPembelian: "",
    vendor: "",
    jumlah: "",
    unit: "",
    lokasiPenyimpanan: "",
    dokumentasi: "",
    typePeralatan: "",
    masaBerlakuType: "",
    kondisi: "baik",
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
      fetchMaterials();
    }
  }, [status, session]);

  const fetchMaterials = async () => {
    try {
      const res = await fetch("/api/material");
      if (!res.ok) throw new Error("Gagal memuat data");
      const data = await res.json();
      setMaterials(data.materials || []);
    } catch (error) {
      console.error("Error fetching materials:", error);
      toast.error("Gagal memuat data material");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      namaMaterial: "",
      kodeMaterial: "",
      spesifikasi: "",
      tahunPembelian: "",
      vendor: "",
      jumlah: "",
      unit: "",
      lokasiPenyimpanan: "",
      dokumentasi: "",
      typePeralatan: "",
      masaBerlakuType: "",
      kondisi: "baik",
      catatan: "",
    });
    setIsEditing(false);
    setEditingId(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = "/api/material";
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
        throw new Error(error.error || `Gagal ${isEditing ? 'mengupdate' : 'membuat'} material`);
      }

      toast.success(`Material berhasil ${isEditing ? 'diupdate' : 'ditambahkan'}`);
      setShowModal(false);
      resetForm();
      fetchMaterials();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleEdit = (material: Material) => {
    setFormData({
      namaMaterial: material.namaMaterial,
      kodeMaterial: material.kodeMaterial || "",
      spesifikasi: material.spesifikasi || "",
      tahunPembelian: material.tahunPembelian?.toString() || "",
      vendor: material.vendor || "",
      jumlah: material.jumlah?.toString() || "",
      unit: material.unit || "",
      lokasiPenyimpanan: material.lokasiPenyimpanan || "",
      dokumentasi: material.dokumentasi || "",
      typePeralatan: material.typePeralatan || "",
      masaBerlakuType: material.masaBerlakuType ? new Date(material.masaBerlakuType).toISOString().split('T')[0] : "",
      kondisi: material.kondisi || "baik",
      catatan: material.catatan || "",
    });
    setEditingId(material.id);
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
      const res = await fetch(`/api/material?id=${deletingId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Gagal menghapus material");
      }

      toast.success("Material berhasil dihapus");
      setShowDeleteConfirm(false);
      setDeletingId(null);
      fetchMaterials();
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
                Rekapitulasi Material
              </h1>
              <p className="text-gray-600 text-sm mt-1">
                Kelola data material dan peralatan
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
              Tambah Material
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
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nama Material</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Kode</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Spesifikasi</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tahun Pembelian</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Vendor</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Jumlah</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Kondisi</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Masa Berlaku Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Aksi</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {materials.length > 0 ? (
                    materials.map((material) => (
                      <tr key={material.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-pertamina-dark">
                          {material.namaMaterial}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {material.kodeMaterial || "-"}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                          {material.spesifikasi || "-"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {material.tahunPembelian || "-"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {material.vendor || "-"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {material.jumlah} {material.unit || ""}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs font-medium rounded ${
                            material.kondisi === "baik" ? "bg-green-100 text-green-700" :
                            material.kondisi === "rusak" ? "bg-red-100 text-red-700" :
                            "bg-yellow-100 text-yellow-700"
                          }`}>
                            {material.kondisi || "baik"}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {material.typePeralatan || "-"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {material.masaBerlakuType ? new Date(material.masaBerlakuType).toLocaleDateString("id-ID") : "-"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex gap-2">
                            {material.dokumentasi && (
                              <a
                                href={material.dokumentasi}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 hover:text-green-800 p-1"
                                title="Download Dokumentasi"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                              </a>
                            )}
                            <button
                              onClick={() => window.print()}
                              className="text-gray-600 hover:text-gray-800 p-1"
                              title="Print"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                              </svg>
                            </button>
                            <button
                              onClick={() => handleEdit(material)}
                              className="text-blue-600 hover:text-blue-800 p-1"
                              title="Edit"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </button>
                            <button
                              onClick={() => handleDeleteClick(material.id)}
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
                      <td colSpan={10} className="px-6 py-8 text-center text-gray-500">
                        <svg className="w-12 h-12 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        <p>Belum ada data material</p>
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
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-xl font-bold text-pertamina-dark mb-4">
                {isEditing ? 'Edit Material' : 'Tambah Material Baru'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama Material *</label>
                    <input
                      type="text"
                      required
                      value={formData.namaMaterial}
                      onChange={(e) => setFormData({...formData, namaMaterial: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Kode Material</label>
                    <input
                      type="text"
                      value={formData.kodeMaterial}
                      onChange={(e) => setFormData({...formData, kodeMaterial: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Spesifikasi</label>
                    <textarea
                      rows={2}
                      value={formData.spesifikasi}
                      onChange={(e) => setFormData({...formData, spesifikasi: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tahun Pembelian</label>
                    <input
                      type="number"
                      value={formData.tahunPembelian}
                      onChange={(e) => setFormData({...formData, tahunPembelian: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Vendor</label>
                    <input
                      type="text"
                      value={formData.vendor}
                      onChange={(e) => setFormData({...formData, vendor: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Jumlah</label>
                    <input
                      type="number"
                      value={formData.jumlah}
                      onChange={(e) => setFormData({...formData, jumlah: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Unit</label>
                    <input
                      type="text"
                      placeholder="pcs, unit, kg, dll"
                      value={formData.unit}
                      onChange={(e) => setFormData({...formData, unit: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Lokasi Penyimpanan</label>
                    <input
                      type="text"
                      value={formData.lokasiPenyimpanan}
                      onChange={(e) => setFormData({...formData, lokasiPenyimpanan: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Type Peralatan</label>
                    <input
                      type="text"
                      value={formData.typePeralatan}
                      onChange={(e) => setFormData({...formData, typePeralatan: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Masa Berlaku Type</label>
                    <input
                      type="date"
                      value={formData.masaBerlakuType}
                      onChange={(e) => setFormData({...formData, masaBerlakuType: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Kondisi</label>
                    <select
                      value={formData.kondisi}
                      onChange={(e) => setFormData({...formData, kondisi: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    >
                      <option value="baik">Baik</option>
                      <option value="rusak">Rusak</option>
                      <option value="perlu_perawatan">Perlu Perawatan</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Dokumentasi</label>
                    <input
                      type="text"
                      placeholder="Link dokumentasi"
                      value={formData.dokumentasi}
                      onChange={(e) => setFormData({...formData, dokumentasi: e.target.value})}
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
              Apakah Anda yakin ingin menghapus material ini? Tindakan ini tidak dapat dibatalkan.
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

