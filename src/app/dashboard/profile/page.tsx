import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Sidebar from "@/components/Sidebar";

async function getUserProfile() {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.email) {
    return null;
  }

  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/user/me`, {
      cache: 'no-store',
    });
    
    if (!res.ok) {
      return null;
    }
    
    const data = await res.json();
    return data.user;
  } catch (error) {
    console.error("Error fetching profile:", error);
    return null;
  }
}

export default async function UserProfile() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const role = (session.user as any).role;
  
  if (role === "admin") {
    redirect("/admin/dashboard");
  }

  const userData = await getUserProfile();

  const user = userData || {
    nama: session.user?.name || 'User',
    email: session.user?.email || '',
    jabatan: (session.user as any)?.jabatan || '-',
    lokasiSite: (session.user as any)?.lokasiSite || '-',
    foto: null,
    createdAt: new Date().toISOString(),
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar role="user" />
      
      <main className="lg:ml-64 min-h-screen">
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-pertamina-dark">Profil Saya</h1>
          <p className="text-gray-600">Informasi profil pengguna</p>
        </div>

        <div className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Photo Card */}
          <div className="card md:col-span-1">
            <div className="text-center">
              <div className="relative inline-block">
                {user.foto ? (
                  <img
                    src={user.foto}
                    alt={user.nama}
                    className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pertamina-blue to-blue-700 flex items-center justify-center mx-auto border-4 border-white shadow-lg">
                    <span className="text-4xl font-bold text-white">
                      {user.nama.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
              </div>
              <h2 className="mt-4 text-xl font-semibold text-pertamina-dark">
                {user.nama}
              </h2>
              <p className="text-gray-500">{user.jabatan}</p>
            </div>
          </div>

          {/* Profile Details Card */}
          <div className="card md:col-span-2">
            <h3 className="text-lg font-semibold text-pertamina-dark mb-4">
              Informasi Profil
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center py-3 border-b border-gray-100">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-pertamina-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Nama Lengkap</p>
                  <p className="font-medium text-pertamina-dark">{user.nama}</p>
                </div>
              </div>

              <div className="flex items-center py-3 border-b border-gray-100">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-pertamina-dark">{user.email}</p>
                </div>
              </div>

              <div className="flex items-center py-3 border-b border-gray-100">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Jabatan</p>
                  <p className="font-medium text-pertamina-dark">{user.jabatan}</p>
                </div>
              </div>

              <div className="flex items-center py-3 border-b border-gray-100">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Lokasi Site</p>
                  <p className="font-medium text-pertamina-dark">{user.lokasiSite}</p>
                </div>
              </div>

              <div className="flex items-center py-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Anggota Sejak</p>
                  <p className="font-medium text-pertamina-dark">
                    {userData?.createdAt ? formatDate(userData.createdAt) : '-'}
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </main>
    </div>
  );
}
