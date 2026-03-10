"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    password: "",
    confirmPassword: "",
    jabatan: "",
    lokasiSite: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      toast.error("Password tidak cocok");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nama: formData.nama,
          email: formData.email,
          password: formData.password,
          jabatan: formData.jabatan,
          lokasiSite: formData.lokasiSite,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Registrasi gagal");
      }

      toast.success("Registrasi berhasil! Silakan login.");
      router.push("/login");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-pertamina-red rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-pertamina-dark font-bold text-lg">Pertamina</span>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-pertamina-dark mb-2">
            Daftar Akun
          </h2>
          <p className="text-gray-500 mb-8">
            Buat akun baru untuk memulai
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label">Nama Lengkap</label>
              <input
                type="text"
                className="input-field"
                placeholder="Masukkan nama lengkap"
                value={formData.nama}
                onChange={(e) =>
                  setFormData({ ...formData, nama: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label className="label">Email</label>
              <input
                type="email"
                className="input-field"
                placeholder="email@pertamina.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label className="label">Jabatan</label>
              <select
                className="input-field"
                value={formData.jabatan}
                onChange={(e) =>
                  setFormData({ ...formData, jabatan: e.target.value })
                }
                required
              >
                <option value="">Pilih jabatan</option>
                <option value="Inspector">Inspector</option>
                <option value="Supervisor">Supervisor</option>
                <option value="Teknisi">Teknisi</option>
                <option value="Operator">Operator</option>
                <option value="Kadiv">Kadiv</option>
                <option value="Manajer">Manajer</option>
              </select>
            </div>

            <div>
              <label className="label">Lokasi Site</label>
              <select
                className="input-field"
                value={formData.lokasiSite}
                onChange={(e) =>
                  setFormData({ ...formData, lokasiSite: e.target.value })
                }
                required
              >
                <option value="">Pilih lokasi site</option>
                <option value="Ogan Komering">Ogan Komering</option>
                <option value="Raja Tempirai">Raja Tempirai</option>
                <option value="Site Utama">Site Utama</option>
                <option value="Site A">Site A</option>
                <option value="Site B">Site B</option>
              </select>
            </div>

            <div>
              <label className="label">Password</label>
              <input
                type="password"
                className="input-field"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
                minLength={6}
              />
            </div>

            <div>
              <label className="label">Konfirmasi Password</label>
              <input
                type="password"
                className="input-field"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                required
                minLength={6}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-3 flex items-center justify-center gap-2 mt-6"
            >
              {loading ? (
                <>
                  <div className="spinner"></div>
                  <span>Mendaftarkan...</span>
                </>
              ) : (
                "Daftar"
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-gray-500">
            Sudah punya akun?{" "}
            <Link
              href="/login"
              className="text-pertamina-blue font-medium hover:underline"
            >
              Login di sini
            </Link>
          </p>

          <div className="mt-8 pt-6 border-t">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 text-gray-500 hover:text-pertamina-dark transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-pertamina-red to-red-800 p-12 flex-col justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <span className="text-pertamina-red font-bold text-2xl">P</span>
            </div>
            <div>
              <h1 className="text-white text-xl font-bold">Pertamina</h1>
              <p className="text-red-200 text-sm">Hulu Energi</p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-white text-4xl font-bold mb-4">
            Bergabung dengan<br />Tim Inspeksi
          </h2>
          <p className="text-red-100 text-lg">
            Dapatkan akses untuk melaporkan inspeksi lapangan,<br />
            audit operasional, dan data injeksi secara real-time
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Monitoring Inspeksi Real-Time</span>
          </div>
          <div className="flex items-center gap-3 text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Audit Operasional Terintegrasi</span>
          </div>
          <div className="flex items-center gap-3 text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Pengelolaan Data Injeksi Otomatis</span>
          </div>
        </div>

        <p className="text-red-200 text-sm">
          © 2026 PT. Pertamina Hulu Energi OK & Raja Tempirai
        </p>
      </div>
    </div>
  );
}
