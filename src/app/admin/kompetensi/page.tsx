"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import toast from "react-hot-toast";

interface Kompetensi {
  id: number;
  nama: string;
  nip?: string;
  jabatan?: string;
  unitKerja?: string;
  jenisKompetensi: string;
  namaSertifikasi?: string;
  nomorSertifikasi?: string;
  lembagaPenerbit?: string;
  tanggalTerbit?: string;
  masaBerlakuSertifikasi?: string;
  statusKompetensi: string;
  catatan?: string;
  createdAt: string;
}

export default function KompetensiPage() {
  const { data: session, status } = useSession();
  const [kompetensi, setKompetensi] = useState<Kompetensi[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);
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
      redirect("/login");
    }
    
    if (status === "authenticated" && session) {
      const role = (session.user as any).role;
      if (role !== "admin" && role !== "super_admin") {
        redirect("/dashboard");
      }
      fetchKompetensi();
    }
  }, [status, session]);

  const fetchKompetensi = async () => {
    try {
      const res = await fetch("/api/kompetensi");
      if (!res.ok) throw new Error("Gagal memuat data");
      const data = await res.json();
      setKompetensi(data.kompetensi || []);
    } catch (error) {
      console.error("Error fetching kompetensi:", error);
      toast.error("Gagal memuat data kompetensi");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
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
    setIsEditing(false);
    setEditingId(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = "/api/kompetensi";
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
        throw new Error(error.error || `Gagal ${isEditing ? 'mengupdate' : 'membuat'} kompetensi`);
      }

      toast.success(`Kompetensi berhasil ${isEditing ? 'diupdate' : 'ditambahkan'}`);
      setShowModal(false);
      resetForm();
      fetchKompetensi();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleEdit = (item: Kompetensi) => {
    setFormData({
      nama: item.nama,
      nip: item.nip || "",
      jabatan: item.jabatan || "",
      unitKerja: item.unitKerja || "",
      jenisKompetensi: item.jenisKompetensi,
      namaSertifikasi: item.namaSertifikasi || "",
      nomorSertifikasi: item.nomorSertifikasi || "",
      lembagaPenerbit: item.lembagaPenerbit || "",
      tanggalTerbit: item.tanggalTerbit ? new Date(item.tanggalTerbit).toISOString().split('T')[0] : "",
      masaBerlakuSertifikasi: item.masaBerlakuSertifikasi ? new Date(item.masaBerlakuSertifikasi).toISOString().split('T')[0] : "",
      statusKompetensi: item.statusKompetensi || "aktif",
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
      const res = await fetch(`/api/kompetensi?id=${deletingId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Gagal menghapus kompetensi");
      }

      toast.success("Kompetensi berhasil dihapus");
      setShowDeleteConfirm(false);
      setDeletingId(null);
      fetchKompetensi();
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
      <Sidebar role="admin" />
      
      <main className="lg:ml-64 min-h-screen transition-all duration-300">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-20">
          <div className="px-6 py-4 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-pertamina-dark">
                Rekapitulasi Kompetensi Personil
              </h1>
              <p className="text-gray-600 text-sm mt-1">
                Kelola data kompetensi dan sertifikasi personil
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
              Tambah Kompetensi
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
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nama</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">NIP</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Jabatan</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Unit Kerja</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Jenis Kompetensi</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nama Sertifikasi</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">No. Sertifikat</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Lembaga</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Masa Berlaku</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Aksi</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {kompetensi.length > 0 ? (
                    kompetensi.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-pertamina-dark">
                          {item.nama}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.nip || "-"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.jabatan || "-"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.unitKerja || "-"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.jenisKompetensi}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.namaSertifikasi || "-"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.nomorSertifikasi || "-"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.lembagaPenerbit || "-"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.masaBerlakuSertifikasi ? new Date(item.masaBerlakuSertifikasi).toLocaleDateString("id-ID") : "-"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs font-medium rounded ${
                            item.statusKompetensi === "aktif" ? "bg-green-100 text-green-700" :
                            item.statusKompetensi === "expired" ? "bg-red-100 text-red-700" :
                            "bg-yellow-100 text-yellow-700"
                          }`}>
                            {item.statusKompetensi}
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <p>Belum ada data kompetensi</p>
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
                {isEditing ? 'Edit Kompetensi Personil' : 'Tambah Kompetensi Personil'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama *</label>
                    <input
                      type="text"
                      required
                      value={formData.nama}
                      onChange={(e) => setFormData({...formData, nama: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">NIP</label>
                    <input
                      type="text"
                      value={formData.nip}
                      onChange={(e) => setFormData({...formData, nip: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Jabatan</label>
                    <input
                      type="text"
                      value={formData.jabatan}
                      onChange={(e) => setFormData({...formData, jabatan: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Unit Kerja</label>
                    <input
                      type="text"
                      value={formData.unitKerja}
                      onChange={(e) => setFormData({...formData, unitKerja: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Kompetensi *</label>
                    <input
                      type="text"
                      required
                      value={formData.jenisKompetensi}
                      onChange={(e) => setFormData({...formData, jenisKompetensi: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama Sertifikasi</label>
                    <input
                      type="text"
                      value={formData.namaSertifikasi}
                      onChange={(e) => setFormData({...formData, namaSertifikasi: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nomor Sertifikasi</label>
                    <input
                      type="text"
                      value={formData.nomorSertifikasi}
                      onChange={(e) => setFormData({...formData, nomorSertifikasi: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Lembaga Penerbit</label>
                    <input
                      type="text"
                      value={formData.lembagaPenerbit}
                      onChange={(e) => setFormData({...formData, lembagaPenerbit: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Terbit</label>
                    <input
                      type="date"
                      value={formData.tanggalTerbit}
                      onChange={(e) => setFormData({...formData, tanggalTerbit: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Masa Berlaku Sertifikasi</label>
                    <input
                      type="date"
                      value={formData.masaBerlakuSertifikasi}
                      onChange={(e) => setFormData({...formData, masaBerlakuSertifikasi: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status Kompetensi</label>
                    <select
                      value={formData.statusKompetensi}
                      onChange={(e) => setFormData({...formData, statusKompetensi: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue"
                    >
                      <option value="aktif">Aktif</option>
                      <option value="expired">Expired</option>
                      <option value="pending">Pending</option>
                    </select>
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
                    {isEditing ? 'Update' : 'Simpan'}
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
              Apakah Anda yakin ingin menghapus kompetensi ini? Tindakan ini tidak dapat dibatalkan.
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

