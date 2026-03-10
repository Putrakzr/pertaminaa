"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import toast from "react-hot-toast";

interface Admin {
  id: number;
  nama: string;
  email: string;
  role: string;
  createdAt: string;
}

export default function SuperAdminAdminsPage() {
  const { data: session, status } = useSession();
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingAdmin, setEditingAdmin] = useState<Admin | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [adminToDelete, setAdminToDelete] = useState<Admin | null>(null);
  const [saving, setSaving] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    password: "",
    role: "admin"
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
      fetchAdmins();
    }
  }, [status, session]);

  const fetchAdmins = async () => {
    try {
      const res = await fetch("/api/super-admin/admins");
      if (!res.ok) throw new Error("Gagal memuat data");
      const data = await res.json();
      setAdmins(data.admins || []);
    } catch (error) {
      console.error("Error fetching admins:", error);
      toast.error("Gagal memuat data admin");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (admin?: Admin) => {
    if (admin) {
      setEditingAdmin(admin);
      setFormData({
        nama: admin.nama,
        email: admin.email,
        password: "",
        role: admin.role
      });
    } else {
      setEditingAdmin(null);
      setFormData({ nama: "", email: "", password: "", role: "admin" });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingAdmin(null);
    setFormData({ nama: "", email: "", password: "", role: "admin" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const url = editingAdmin 
        ? `/api/super-admin/admins/${editingAdmin.id}`
        : "/api/super-admin/admins";
      
      const method = editingAdmin ? "PUT" : "POST";
      
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Gagal menyimpan data");
      }

      toast.success(editingAdmin ? "Admin berhasil diupdate" : "Admin berhasil dibuat");
      handleCloseModal();
      fetchAdmins();
    } catch (error: any) {
      toast.error(error.message || "Gagal menyimpan data");
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteClick = (admin: Admin) => {
    setAdminToDelete(admin);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    if (!adminToDelete) return;

    try {
      const res = await fetch(`/api/super-admin/admins/${adminToDelete.id}`, {
        method: "DELETE"
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Gagal menghapus admin");
      }

      toast.success("Admin berhasil dihapus");
      setShowDeleteModal(false);
      setAdminToDelete(null);
      fetchAdmins();
    } catch (error: any) {
      toast.error(error.message || "Gagal menghapus admin");
    }
  };

  const filteredAdmins = admins.filter(
    (admin) =>
      admin.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      admin.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      admin.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar role="super_admin" />

      <main className="lg:ml-64 min-h-screen transition-all duration-300">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-pertamina-dark">
              Kelola Admin
            </h1>
            <p className="text-gray-600">CRUD lengkap admin sistem</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <span className="text-sm text-gray-500">
              Total: <span className="font-semibold text-pertamina-dark">{admins.length}</span> admin
            </span>
            <button
              onClick={() => handleOpenModal()}
              className="px-4 py-2 bg-pertamina-blue text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Tambah Admin
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="card mb-6">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Cari admin..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
            />
          </div>
        </div>

        {/* Admins Table */}
        <div className="card overflow-hidden">
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="spinner"></div>
            </div>
          ) : filteredAdmins.length === 0 ? (
            <div className="text-center py-12">
              <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <p className="text-gray-500">
                {searchQuery ? "Tidak ada admin yang cocok" : "Belum ada admin"}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Nama</th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Email</th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Role</th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Dibuat</th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {filteredAdmins.map((admin) => (
                    <tr key={admin.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                            <span className="text-lg font-medium text-purple-600">{admin.nama.charAt(0).toUpperCase()}</span>
                          </div>
                          <span className="font-medium text-gray-900">{admin.nama}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">{admin.email}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 text-xs font-medium rounded ${
                          admin.role === "super_admin" 
                            ? "bg-red-100 text-red-700" 
                            : "bg-blue-100 text-blue-700"
                        }`}>
                          {admin.role === "super_admin" ? "Super Admin" : "Admin"}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {new Date(admin.createdAt).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleOpenModal(admin)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Edit admin"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          {admin.role !== "super_admin" && (
                            <button
                              onClick={() => handleDeleteClick(admin)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              title="Hapus admin"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {editingAdmin ? "Edit Admin" : "Tambah Admin"}
              </h3>
              <button onClick={handleCloseModal} className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama</label>
                <input
                  type="text"
                  required
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password {editingAdmin && <span className="text-gray-400">(kosongkan jika tidak diubah)</span>}
                </label>
                <input
                  type="password"
                  required={!editingAdmin}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  disabled={editingAdmin?.role === "super_admin"}
                >
                  <option value="admin">Admin</option>
                  <option value="super_admin">Super Admin</option>
                </select>
              </div>
              <div className="flex gap-3 justify-end pt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-4 py-2 text-white bg-pertamina-blue rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
                >
                  {saving ? "Menyimpan..." : editingAdmin ? "Update" : "Simpan"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && adminToDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Konfirmasi Hapus</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Apakah Anda yakin ingin menghapus admin <span className="font-semibold text-gray-900">{adminToDelete.nama}</span>?
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => { setShowDeleteModal(false); setAdminToDelete(null); }}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
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
