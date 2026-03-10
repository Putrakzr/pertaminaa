"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import toast from "react-hot-toast";
import Image from "next/image";

interface User {
  id: number;
  nama: string;
  email: string;
  jabatan: string;
  lokasiSite: string;
  foto: string | null;
  createdAt: string;
  totalLaporan: number;
  totalInjeksi: number;
}

export default function SuperAdminUsersPage() {
  const { data: session, status } = useSession();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);
  const [saving, setSaving] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    password: "",
    jabatan: "",
    lokasiSite: ""
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
      fetchUsers();
    }
  }, [status, session]);

  const fetchUsers = async () => {
    try {
      const res = await fetch("/api/super-admin/users");
      if (!res.ok) throw new Error("Gagal memuat data");
      const data = await res.json();
      setUsers(data.users || []);
    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error("Gagal memuat data user");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (user?: User) => {
    if (user) {
      setEditingUser(user);
      setFormData({
        nama: user.nama,
        email: user.email,
        password: "",
        jabatan: user.jabatan,
        lokasiSite: user.lokasiSite
      });
    } else {
      setEditingUser(null);
      setFormData({ nama: "", email: "", password: "", jabatan: "", lokasiSite: "" });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingUser(null);
    setFormData({ nama: "", email: "", password: "", jabatan: "", lokasiSite: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const url = editingUser 
        ? `/api/super-admin/users/${editingUser.id}`
        : "/api/super-admin/users";
      
      const method = editingUser ? "PUT" : "POST";
      
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Gagal menyimpan data");
      }

      toast.success(editingUser ? "User berhasil diupdate" : "User berhasil dibuat");
      handleCloseModal();
      fetchUsers();
    } catch (error: any) {
      toast.error(error.message || "Gagal menyimpan data");
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteClick = (user: User) => {
    setUserToDelete(user);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    if (!userToDelete) return;

    try {
      const res = await fetch(`/api/super-admin/users/${userToDelete.id}`, {
        method: "DELETE"
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Gagal menghapus user");
      }

      toast.success("User berhasil dihapus");
      setShowDeleteModal(false);
      setUserToDelete(null);
      fetchUsers();
    } catch (error: any) {
      toast.error(error.message || "Gagal menghapus user");
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.jabatan.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.lokasiSite.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar role="super_admin" />
      
      <main className="lg:ml-64 min-h-screen">
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-pertamina-dark">
                Kelola User
              </h1>
              <p className="text-gray-600">CRUD lengkap user sistem</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-4">
              <span className="text-sm text-gray-500">
                Total: <span className="font-semibold text-pertamina-dark">{users.length}</span> user
              </span>
              <button
                onClick={() => handleOpenModal()}
                className="px-4 py-2 bg-pertamina-blue text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Tambah User
              </button>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-6 lg:px-8 py-8">
          {/* Search Bar */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Cari user..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
              />
            </div>
          </div>

          {/* Users Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {loading ? (
              <div className="flex justify-center py-12">
                <div className="spinner"></div>
              </div>
            ) : filteredUsers.length === 0 ? (
              <div className="text-center py-12">
                <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <p className="text-gray-500">
                  {searchQuery ? "Tidak ada user yang cocok" : "Belum ada user terdaftar"}
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">User</th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Jabatan</th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Lokasi Site</th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Laporan</th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Injeksi</th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Bergabung</th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {filteredUsers.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                              {user.foto ? (
                                <Image src={user.foto} alt={user.nama} width={40} height={40} className="w-full h-full object-cover" />
                              ) : (
                                <span className="text-lg font-medium text-gray-600">{user.nama.charAt(0).toUpperCase()}</span>
                              )}
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{user.nama}</p>
                              <p className="text-sm text-gray-500">{user.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">{user.jabatan}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{user.lokasiSite}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{user.totalLaporan}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{user.totalInjeksi}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {new Date(user.createdAt).toLocaleDateString("id-ID")}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleOpenModal(user)}
                              className="text-blue-600 hover:text-blue-800 text-sm"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteClick(user)}
                              className="text-red-600 hover:text-red-800 text-sm"
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
