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
  totalInjeksi: number;
}

export default function AdminUsersPage() {
  const { data: session, status } = useSession();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);

  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/login");
    }
    
    if (status === "authenticated" && session) {
      const role = (session.user as any).role;
      if (role !== "admin") {
        redirect("/dashboard");
      }
      fetchUsers();
    }
  }, [status, session]);

  const fetchUsers = async () => {
    try {
      const res = await fetch("/api/users");
      const data = await res.json();
      setUsers(data.users || []);
    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error("Gagal memuat data user");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClick = (user: User) => {
    setUserToDelete(user);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    if (!userToDelete) return;

    setDeletingId(userToDelete.id);
    setShowDeleteModal(false);

    try {
      const res = await fetch(`/api/users/${userToDelete.id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Gagal menghapus user");
      }

      toast.success("User berhasil dihapus");
      fetchUsers();
    } catch (error: any) {
      toast.error(error.message || "Gagal menghapus user");
    } finally {
      setDeletingId(null);
      setUserToDelete(null);
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.jabatan.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.lokasiSite.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-20">
          <div className="px-6 py-4">
            <h1 className="text-2xl font-bold text-pertamina-dark">Kelola User</h1>
            <p className="text-gray-600 text-sm mt-1">Manajemen user dan aktivitas</p>
          </div>
        </header>

        <div className="p-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Cari user berdasarkan nama, email, jabatan, atau lokasi..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {loading ? (
              <div className="flex justify-center py-12">
                <div className="spinner"></div>
              </div>
            ) : filteredUsers.length === 0 ? (
              <div className="text-center py-12">
                <svg
                  className="w-16 h-16 mx-auto text-gray-300 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <p className="text-gray-500">
                  {searchQuery ? "Tidak ada user yang cocok dengan pencarian" : "Belum ada user terdaftar"}
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">
                        User
                      </th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">
                        Jabatan
                      </th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">
                        Lokasi Site
                      </th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">
                        Injeksi
                      </th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">
                        Bergabung
                      </th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">
                        aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {filteredUsers.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                              {user.foto ? (
                                <Image
                                  src={user.foto}
                                  alt={user.nama}
                                  width={40}
                                  height={40}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <span className="text-lg font-medium text-gray-600">
                                  {user.nama.charAt(0).toUpperCase()}
                                </span>
                              )}
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{user.nama}</p>
                              <p className="text-sm text-gray-500">{user.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {user.jabatan}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {user.lokasiSite}
                        </td>

                        <td className="px-6 py-4">
                          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded">
                            {user.totalInjeksi}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {new Date(user.createdAt).toLocaleDateString("id-ID", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => handleDeleteClick(user)}
                            disabled={deletingId === user.id}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                            title="Hapus user"
                          >
                            {deletingId === user.id ? (
                              <div className="w-5 h-5 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            )}
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

      {showDeleteModal && userToDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Konfirmasi Hapus
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Apakah Anda yakin ingin menghapus user{" "}
              <span className="font-semibold text-gray-900">{userToDelete.nama}</span>?
              <br />
              <span className="text-sm text-red-500">
                Semua data injeksi milik user ini juga akan dihapus.
              </span>
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setUserToDelete(null);
                }}
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
