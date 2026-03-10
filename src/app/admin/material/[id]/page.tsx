"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import toast from "react-hot-toast";
import Link from "next/link";

export default function MaterialDetailPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const params = useParams();
  const [material, setMaterial] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
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
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (status === "authenticated" && params.id) {
      fetchMaterial();
    }
  }, [status, params.id]);

  const fetchMaterial = async () => {
    try {
      const res = await fetch(`/api/material?id=${params.id}`);
      const data = await res.json();
      
      if (data.error) {
        toast.error(data.error);
        router.push("/admin/material");
        return;
      }
      
      // API returns { materials: [...] }, get first item
      const materialData = data.materials?.[0];
      if (!materialData) {
        router.push("/admin/material");
        return;
      }
      
      setMaterial(materialData);
      setFormData({
        namaMaterial: materialData.namaMaterial || "",
        kodeMaterial: materialData.kodeMaterial || "",
        spesifikasi: materialData.spesifikasi || "",
        tahunPembelian: materialData.tahunPembelian?.toString() || "",
        vendor: materialData.vendor || "",
        jumlah: materialData.jumlah?.toString() || "",
        unit: materialData.unit || "",
        lokasiPenyimpanan: materialData.lokasiPenyimpanan || "",
        dokumentasi: materialData.dokumentasi || "",
        typePeralatan: materialData.typePeralatan || "",
        masaBerlakuType: materialData.masaBerlakuType ? new Date(materialData.masaBerlakuType).toISOString().split('T')[0] : "",
        kondisi: materialData.kondisi || "baik",
        catatan: materialData.catatan || "",
      });
    } catch (error) {
      console.error("Error fetching material:", error);
      toast.error("Gagal memuat detail material");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const res = await fetch("/api/material", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, id: params.id }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Gagal mengupdate material");
      }

      toast.success("Material berhasil diupdate");
      setIsEditing(false);
      fetchMaterial();
    } catch (error: any) {
      toast.error(error.message || "Gagal mengupdate material");
    }
  };

  const getKondisiColor = (kondisi: string) => {
    switch (kondisi) {
      case "baik": return "bg-green-100 text-green-800";
      case "rusak": return "bg-red-100 text-red-800";
      case "perlu_perawatan": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getKondisiLabel = (kondisi: string) => {
    switch (kondisi) {
      case "baik": return "Baik";
      case "rusak": return "Rusak";
      case "perlu_perawatan": return "Perlu Perawatan";
      default: return kondisi;
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!material) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar role="admin" />
      
      <main className="lg:ml-64 min-h-screen">
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link 
              href="/admin/material"
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-pertamina-dark">Detail Material</h1>
              <p className="text-gray-600">ID: #{material.id}</p>
            </div>
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-pertamina-blue text-white rounded-lg hover:bg-blue-600 transition-colors font-medium flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Edit
            </button>
          </div>
        </div>

        <div className="px-4 sm:px-6 lg:px-8 py-8">
          {isEditing ? (
            /* Edit Form */
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-6">
              <h2 className="text-lg font-semibold text-pertamina-dark">Edit Material</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Material *
                  </label>
                  <input
                    type="text"
                    value={formData.namaMaterial}
                    onChange={(e) => setFormData({ ...formData, namaMaterial: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Kode Material
                  </label>
                  <input
                    type="text"
                    value={formData.kodeMaterial}
                    onChange={(e) => setFormData({ ...formData, kodeMaterial: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Spesifikasi
                </label>
                <textarea
                  value={formData.spesifikasi}
                  onChange={(e) => setFormData({ ...formData, spesifikasi: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tahun Pembelian
                  </label>
                  <input
                    type="number"
                    value={formData.tahunPembelian}
                    onChange={(e) => setFormData({ ...formData, tahunPembelian: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Vendor
                  </label>
                  <input
                    type="text"
                    value={formData.vendor}
                    onChange={(e) => setFormData({ ...formData, vendor: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Jumlah
                  </label>
                  <input
                    type="number"
                    value={formData.jumlah}
                    onChange={(e) => setFormData({ ...formData, jumlah: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Unit
                  </label>
                  <input
                    type="text"
                    placeholder="pcs, unit, kg, dll"
                    value={formData.unit}
                    onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Lokasi Penyimpanan
                  </label>
                  <input
                    type="text"
                    value={formData.lokasiPenyimpanan}
                    onChange={(e) => setFormData({ ...formData, lokasiPenyimpanan: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Type Peralatan
                  </label>
                  <input
                    type="text"
                    value={formData.typePeralatan}
                    onChange={(e) => setFormData({ ...formData, typePeralatan: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Masa Berlaku Type
                  </label>
                  <input
                    type="date"
                    value={formData.masaBerlakuType}
                    onChange={(e) => setFormData({ ...formData, masaBerlakuType: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Kondisi
                  </label>
                  <select
                    value={formData.kondisi}
                    onChange={(e) => setFormData({ ...formData, kondisi: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  >
                    <option value="baik">Baik</option>
                    <option value="rusak">Rusak</option>
                    <option value="perlu_perawatan">Perlu Perawatan</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Dokumentasi
                </label>
                <input
                  type="text"
                  placeholder="Link dokumentasi"
                  value={formData.dokumentasi}
                  onChange={(e) => setFormData({ ...formData, dokumentasi: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Catatan
                </label>
                <textarea
                  value={formData.catatan}
                  onChange={(e) => setFormData({ ...formData, catatan: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pertamina-blue focus:border-transparent"
                  rows={3}
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="px-6 py-2 bg-pertamina-blue text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
                >
                  Simpan Perubahan
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    fetchMaterial();
                  }}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Batal
                </button>
              </div>
            </form>
          ) : (
            /* View Mode */
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Informasi Material */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-pertamina-dark mb-4">Informasi Material</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Nama Material</p>
                        <p className="font-medium">{material.namaMaterial}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Kode Material</p>
                        <p className="font-medium">{material.kodeMaterial || "-"}</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Spesifikasi</p>
                      <p className="font-medium">{material.spesifikasi || "-"}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Tahun Pembelian</p>
                        <p className="font-medium">{material.tahunPembelian || "-"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Vendor</p>
                        <p className="font-medium">{material.vendor || "-"}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Jumlah</p>
                        <p className="font-medium">{material.jumlah} {material.unit || ""}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Kondisi</p>
                        <span className={`inline-block px-3 py-1 rounded text-sm font-medium ${getKondisiColor(material.kondisi)}`}>
                          {getKondisiLabel(material.kondisi)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Type & Masa Berlaku */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-pertamina-dark mb-4">Type & Masa Berlaku</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Type Peralatan</p>
                        <p className="font-medium">{material.typePeralatan || "-"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Masa Berlaku Type</p>
                        <p className="font-medium">
                          {material.masaBerlakuType 
                            ? new Date(material.masaBerlakuType).toLocaleDateString("id-ID")
                            : "-"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lokasi & Dokumentasi */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-pertamina-dark mb-4">Lokasi & Dokumentasi</h2>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Lokasi Penyimpanan</p>
                      <p className="font-medium">{material.lokasiPenyimpanan || "-"}</p>
                    </div>
                    {material.dokumentasi && (
                      <div>
                        <p className="text-sm text-gray-500">Dokumentasi</p>
                        <a 
                          href={material.dokumentasi} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-pertamina-blue hover:underline"
                        >
                          {material.dokumentasi}
                        </a>
                      </div>
                    )}
                    {material.catatan && (
                      <div>
                        <p className="text-sm text-gray-500">Catatan</p>
                        <p className="font-medium">{material.catatan}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Status Info */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-pertamina-dark mb-4">Status</h2>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Kondisi</p>
                      <span className={`inline-block px-3 py-1 rounded text-sm font-medium ${getKondisiColor(material.kondisi)}`}>
                        {getKondisiLabel(material.kondisi)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Metadata */}
                <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                  <h2 className="text-sm font-semibold text-gray-500 mb-3">Metadata</h2>
                  <div className="space-y-2 text-xs text-gray-500">
                    <p>Dibuat: {new Date(material.createdAt).toLocaleString("id-ID")}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

