import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function formatDateTime(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(amount);
}

// Formula perhitungan injeksi (bisa disesuaikan)
export function hitungInjeksi(nilaiRaw: number): number {
  // Contoh formula: nilai raw dikalikan dengan faktor konversi
  // Sesuaikan dengan formula yang digunakan di perusahaan
  return nilaiRaw * 1.15; // Faktor contoh
}

export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    pending: "bg-yellow-100 text-yellow-800",
    approved: "bg-green-100 text-green-800",
    rejected: "bg-red-100 text-red-800",
    proses: "bg-blue-100 text-blue-800",
    selesai: "bg-gray-100 text-gray-800",
  };
  return colors[status] || "bg-gray-100 text-gray-800";
}

export function getRisikoColor(risiko: string): string {
  const colors: Record<string, string> = {
    rendah: "bg-green-100 text-green-800",
    sedang: "bg-yellow-100 text-yellow-800",
    tinggi: "bg-orange-100 text-orange-800",
    kritis: "bg-red-100 text-red-800",
  };
  return colors[risiko.toLowerCase()] || "bg-gray-100 text-gray-800";
}
