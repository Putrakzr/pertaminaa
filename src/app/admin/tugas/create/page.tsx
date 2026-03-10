"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import toast from "react-hot-toast";

export default function CreateTugasPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetchingUsers, setFetchingUsers] = useState(true);

  const [formData, setFormData] = useState({
    judul: "",
    deskripsi: "",
    kategori: "",
    userId: "",
    fileLampiran: "",
    lokasiField: "",
    lokasiArea: "",
    lokasiSumur: "",
    tanggalMulai: "",
    dueDate: "",
  });

  const [areas, setAreas] = useState<any[]>([]);
  const [wells, setWells] = useState<any[]>([]);
  const [fetchingLocations, setFetchingLocations] = useState(false);

  const [categories, setCategories] = useState<any[]>([]);
  const [fetchingCategories, setFetchingCategories] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        setUsers(data.users || []);
      } catch (error) {
        console.error("Error fetching users:", error);
        toast.error("Gagal memuat data user");
      } finally {
        setFetchingUsers(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/kategori");
        const data = await res.json();
        setCategories(data.categories || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
        toast.error("Gagal memuat data kategori");
      } finally {
        setFetchingCategories(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchAreas = async () => {
      if (!formData.lokasiField) {
        setAreas([]);
        setWells([]);
        return;
      }
      
      setFetchingLocations(true);
      try {
        // Fetch Areas
        const areaRes = await fetch(`/api/locations?field=${formData.lokasiField}&kategori=Area`);
        const areaData = await areaRes.json();
        setAreas(areaData.locations || []);

        // Fetch Wells only if Ogan Komering
        if (formData.lokasiField === "Ogan Komering") {
          const wellRes = await fetch(`/api/locations?field=${formData.lokasiField}&kategori=Sumur`);
          const wellData = await wellRes.json();
          setWells(wellData.locations || []);
        } else {
          setWells([]);
        }
      } catch (error) {
        console.error("Error fetching locations:", error);
        toast.error("Gagal memuat data lokasi");
      } finally {
        setFetchingLocations(false);
      }
    };

    fetchAreas();
  }, [formData.lokasiField]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (formData.tanggalMulai && formData.dueDate) {
        if (new Date(formData.dueDate) < new Date(formData.tanggalMulai)) {
          throw new Error("Tanggal Berakhir tidak boleh sebelum Tanggal Mulai");
        }
      }

      const res = await fetch("/api/admin/tugas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Gagal membuat tugas");
      }

      toast.success("Tugas berhasil dibuat dan ditugaskan!");
      router.push("/admin/tugas");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar role="admin" />
      
      <main className="lg:ml-64 min-h-screen transition-all duration-300">
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-20">
          <div className="px-6 py-4 flex items-center gap-4">
            <Link href="/admin/tugas" className="text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-pertamina-dark">
                Buat Tugas Baru
              </h1>
              <p className="text-gray-600 text-sm mt-1">
                Berikan tugas spesifik kepada user
              </p>
            </div>
          </div>
        </header>

        <div className="p-6 max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Judul Tugas <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="judul"
                required
                value={formData.judul}
                onChange={handleChange}
                placeholder="Masukkan judul tugas"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-pertamina-blue outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Kategori Tugas <span className="text-red-500">*</span>
              </label>
              <select
                name="kategori"
                required
                value={formData.kategori}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-pertamina-blue outline-none transition-all bg-white"
                disabled={fetchingCategories}
              >
                <option value="">-- Pilih Kategori --</option>
                {categories.map((cat: any) => (
                  <option key={cat.id} value={cat.nama}>
                    {cat.nama}
                  </option>
                ))}
              </select>
              {fetchingCategories && <p className="text-xs text-gray-500 mt-1">Memuat daftar kategori...</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Deskripsi/Instruksi Tugas <span className="text-red-500">*</span>
              </label>
              <textarea
                name="deskripsi"
                required
                rows={5}
                value={formData.deskripsi}
                onChange={handleChange}
                placeholder="Jelaskan detail tugas yang harus dikerjakan"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-pertamina-blue outline-none transition-all resize-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pilih Field <span className="text-red-500">*</span>
                </label>
                <select
                  name="lokasiField"
                  required
                  value={formData.lokasiField}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-pertamina-blue outline-none transition-all bg-white"
                >
                  <option value="">-- Pilih Field --</option>
                  <option value="Raja Tempirai">Raja Tempirai</option>
                  <option value="Ogan Komering">Ogan Komering</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pilih Area <span className="text-red-500">*</span>
                </label>
                <select
                  name="lokasiArea"
                  required
                  value={formData.lokasiArea}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-pertamina-blue outline-none transition-all bg-white"
                  disabled={!formData.lokasiField || fetchingLocations}
                >
                  <option value="">-- Pilih Area --</option>
                  {areas.map((area: any) => (
                    <option key={area.id} value={area.nama}>
                      {area.nama}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {formData.lokasiField === "Ogan Komering" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pilih Nama Sumur (Khusus OK)
                </label>
                <select
                  name="lokasiSumur"
                  value={formData.lokasiSumur}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-pertamina-blue outline-none transition-all bg-white"
                  disabled={fetchingLocations}
                >
                  <option value="">-- Pilih Sumur --</option>
                  {wells.map((well: any) => (
                    <option key={well.id} value={well.nama}>
                      {well.nama} {well.keterangan ? `(${well.keterangan})` : ""}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tanggal Mulai (Start Date) <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="tanggalMulai"
                  required
                  value={formData.tanggalMulai}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-pertamina-blue outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tanggal Berakhir (Due Date) <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="dueDate"
                  required
                  value={formData.dueDate}
                  onChange={handleChange}
                  min={formData.tanggalMulai} // Batasi minimal tanggal yang bisa dipilih
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-pertamina-blue outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tugaskan Kepada (User) <span className="text-red-500">*</span>
              </label>
              <select
                name="userId"
                required
                value={formData.userId}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-pertamina-blue outline-none transition-all bg-white"
                disabled={fetchingUsers}
              >
                <option value="">-- Pilih User --</option>
                {users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.nama} - {user.jabatan} ({user.lokasiSite})
                  </option>
                ))}
              </select>
              {fetchingUsers && <p className="text-xs text-gray-500 mt-1">Memuat daftar user...</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Link/File Lampiran (Opsional)
              </label>
              <input
                type="text"
                name="fileLampiran"
                value={formData.fileLampiran}
                onChange={handleChange}
                placeholder="Contoh: Link Google Drive berisi referensi dokumen"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-pertamina-blue outline-none transition-all"
              />
            </div>

            <div className="pt-4 flex justify-end gap-3 border-t">
              <Link
                href="/admin/tugas"
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Batal
              </Link>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-pertamina-blue text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Menyimpan...
                  </>
                ) : (
                  "Tugaskan Sekarang"
                )}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
