import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    const role = (session.user as any).role;
    if (role === "admin") {
      redirect("/admin/dashboard");
    } else {
      redirect("/dashboard");
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left Side - Branding */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-pertamina-primary to-red-800 p-8 md:p-16 flex flex-col justify-center">
          <div className="max-w-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-pertamina-red font-bold text-2xl">P</span>
              </div>
              <div>
                <h1 className="text-white text-xl font-bold">Pertamina</h1>
                <p className="text-blue-200 text-sm">Hulu Energi</p>
              </div>
            </div>
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
              Sistem Inspeksi Lapangan
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              PT. Pertamina Hulu Energi Ogan Komering & Raja Tempirai
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/login"
                className="bg-white text-pertamina-blue px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-pertamina-blue transition-colors"
              >
                Daftar
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side - Features */}
        <div className="w-full md:w-1/2 bg-white p-8 md:p-16 flex flex-col justify-center">
          <div className="max-w-lg">
            <h3 className="text-pertamina-dark text-2xl font-bold mb-8">
              Fitur Utama
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-pertamina-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-pertamina-dark">Monitoring Inspeksi</h4>
                  <p className="text-gray-600 text-sm">Pantau dan catat hasil inspeksi lapangan secara real-time</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-pertamina-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-pertamina-dark">Audit Operasional</h4>
                  <p className="text-gray-600 text-sm">Lakukan audit operasional dengan dokumentasi lengkap</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-pertamina-dark">Data Injeksi Real-Time</h4>
                  <p className="text-gray-600 text-sm">Pengolahan dan perhitungan data injeksi secara otomatis</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-pertamina-dark">Notifikasi Otomatis</h4>
                  <p className="text-gray-600 text-sm">Terima notifikasi real-time untuk setiap aktivitas penting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-pertamina-dark text-white py-6 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 PT. Pertamina Hulu Energi Ogan Komering & Raja Tempirai
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="#" className="hover:text-white transition-colors">Bantuan</Link>
            <Link href="#" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
            <Link href="#" className="hover:text-white transition-colors">Kontak</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
