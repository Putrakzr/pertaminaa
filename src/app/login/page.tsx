"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // First, determine if this email belongs to admin, super_admin or user
      // We'll check by making a request to check the user type
      const checkRes = await fetch(`/api/auth/check-user?email=${encodeURIComponent(formData.email)}`);
      const userData = await checkRes.json();
      
      // Determine redirect URL based on role
      let callbackUrl = "/dashboard"; // Default for user
      
      if (userData?.isAdmin) {
        if (userData?.role === "super_admin") {
          callbackUrl = "/super-admin/dashboard";
        } else {
          callbackUrl = "/admin/dashboard";
        }
      }

      // Now sign in with the appropriate callback URL
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: true,
        callbackUrl: callbackUrl,
      });

      console.log("SignIn result:", result);

      if (result?.error) {
        toast.error(result.error);
        setLoading(false);
        return;
      }

    } catch (error: any) {
      console.error("Login error:", error);
      toast.error(error?.message || "Terjadi kesalahan saat login");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-pertamina-primary to-red-800 p-12 flex-col justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <span className="text-pertamina-red font-bold text-2xl">P</span>
            </div>
            <div>
              <h1 className="text-white text-xl font-bold">Pertamina</h1>
              <p className="text-blue-200 text-sm">Hulu Energi</p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-white text-4xl font-bold mb-4">
            Sistem Inspeksi<br />Lapangan
          </h2>
          <p className="text-blue-100 text-lg">
            PT. Pertamina Hulu Energi<br />Ogan Komering & Raja Tempirai
          </p>
        </div>

        <p className="text-blue-200 text-sm">
          © 2026 PT. Pertamina Hulu Energi OK & Raja Tempirai
        </p>
      </div>

      {/* Right Side - Login Form */}
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
            Selamat Datang
          </h2>
          <p className="text-gray-500 mb-8">
            Silakan login untuk melanjutkan
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
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
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-3 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="spinner"></div>
                  <span>Masuk...</span>
                </>
              ) : (
                "Masuk"
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-gray-500">
            Belum punya akun?{" "}
            <Link
              href="/register"
              className="text-pertamina-blue font-medium hover:underline"
            >
              Daftar di sini
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
    </div>
  );
}
