"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import toast from "react-hot-toast";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";

interface FilterState {
  // Material filters
  materialKondisi: string;
  // Kompetensi filters
  kompetensiStatus: string;
  // Sertifikasi filters
  sertifikasiKondisi: string;
}

export default function ExportPage() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
  const [exporting, setExporting] = useState(false);
  
  // Selection states
  const [selectedFormat, setSelectedFormat] = useState<"pdf" | "excel">("pdf");
  const [selectedTypes, setSelectedTypes] = useState({
    material: true,
    kompetensi: true,
    sertifikasi: true,
  });
  
  // Data states
  const [materials, setMaterials] = useState<any[]>([]);
  const [kompetensi, setKompetensi] = useState<any[]>([]);
  const [sertifikasi, setSertifikasi] = useState<any[]>([]);
  
  // Filter states
  const [filter, setFilter] = useState<FilterState>({
    materialKondisi: "",
    kompetensiStatus: "",
    sertifikasiKondisi: "",
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/login");
    }
    
    if (status === "authenticated" && session) {
      const role = (session.user as any).role;
      if (role !== "admin" && role !== "super_admin") {
        redirect("/dashboard");
      }
      fetchAllData();
    }
  }, [status, session]);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      // Fetch materials
      const materialRes = await fetch("/api/material");
      const materialData = await materialRes.json();
      setMaterials(materialData.materials || []);
      
      // Fetch kompetensi
      const kompetensiRes = await fetch("/api/kompetensi");
      const kompetensiData = await kompetensiRes.json();
      setKompetensi(kompetensiData.kompetensi || []);
      
      // Fetch sertifikasi
      const sertifikasiRes = await fetch("/api/sertifikasi-peralatan");
      const sertifikasiData = await sertifikasiRes.json();
      setSertifikasi(sertifikasiData.sertifikasi || []);
      
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Gagal memuat data");
    } finally {
      setLoading(false);
    }
  };

  const handleTypeToggle = (type: keyof typeof selectedTypes) => {
    setSelectedTypes({
      ...selectedTypes,
      [type]: !selectedTypes[type]
    });
  };

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilter({
      ...filter,
      [key]: value
    });
  };

  const applyFilters = () => {
    fetchAllData();
  };

  const resetFilters = () => {
    setFilter({
      materialKondisi: "",
      kompetensiStatus: "",
      sertifikasiKondisi: "",
    });
    fetchAllData();
  };

  // ============== PDF EXPORT FUNCTIONS ==============
  
  // Pertamina brand colors
  const PERTAMINA_RED: [number, number, number] = [220, 53, 69];
  const PERTAMINA_BLUE: [number, number, number] = [0, 123, 255];
  const PERTAMINA_DARK: [number, number, number] = [33, 37, 41];
  const PERTAMINA_GRAY: [number, number, number] = [108, 117, 125];
  
  const addHeader = (doc: jsPDF, title: string, subtitle?: string) => {
    // Red header bar
    doc.setFillColor(...PERTAMINA_RED);
    doc.rect(0, 0, 210, 25, 'F');
    
    // Company name
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("PT. PERTAMINA HULU ENERGI", 14, 12);
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("Rekapitulasi Export Data", 14, 20);
    
    // Reset text color
    doc.setTextColor(...PERTAMINA_DARK);
    
    // Title section
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(title, 14, 40);
    
    if (subtitle) {
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(...PERTAMINA_GRAY);
      doc.text(subtitle, 14, 47);
      doc.setTextColor(...PERTAMINA_DARK);
    }
    
    // Footer
    doc.setFontSize(8);
    doc.setTextColor(...PERTAMINA_GRAY);
    doc.text(`Dicetak pada: ${new Date().toLocaleDateString("id-ID", { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })}`, 14, 285);
    
    doc.text("PT. Pertamina Hulu Energi - Halaman", 170, 285);
  };
  
  const addPageNumber = (doc: jsPDF, pageNum: number) => {
    doc.setPage(pageNum);
    doc.setFontSize(9);
    doc.setTextColor(...PERTAMINA_GRAY);
    doc.text(`${pageNum}`, 105, 292, { align: "center" });
  };
  


  const exportMaterialToPDF = (doc: jsPDF) => {
    let filteredMaterial = materials;
    if (filter.materialKondisi) {
      filteredMaterial = materials.filter((item: any) => item.kondisi === filter.materialKondisi);
    }

    if (filteredMaterial.length === 0) return;

    doc.addPage();
    addHeader(doc, "REKAPITULASI MATERIAL", `Total Data: ${filteredMaterial.length} material`);
    
    // Summary by condition
    const baik = filteredMaterial.filter((m: any) => m.kondisi === "baik").length;
    const rusak = filteredMaterial.filter((m: any) => m.kondisi === "rusak").length;
    const perluPerawatan = filteredMaterial.filter((m: any) => m.kondisi === "perlu_perawatan").length;
    
    let yPos = 55;
    doc.setFontSize(9);
    
    doc.setFillColor(40, 167, 69);
    doc.roundedRect(14, yPos, 55, 15, 2, 2, 'F');
    doc.setTextColor(255, 255, 255);
    doc.text(`Baik: ${baik}`, 17, yPos + 10);
    
    doc.setFillColor(220, 53, 69);
    doc.roundedRect(77, yPos, 55, 15, 2, 2, 'F');
    doc.setTextColor(255, 255, 255);
    doc.text(`Rusak: ${rusak}`, 80, yPos + 10);
    
    doc.setFillColor(255, 193, 7);
    doc.roundedRect(140, yPos, 55, 15, 2, 2, 'F');
    doc.setTextColor(0, 0, 0);
    doc.text(`Perawatan: ${perluPerawatan}`, 143, yPos + 10);
    
    yPos = 30;
    
    const tableData = filteredMaterial.map((item: any) => [
      item.namaMaterial,
      item.kodeMaterial || "-",
      item.spesifikasi ? (item.spesifikasi.length > 30 ? item.spesifikasi.substring(0, 30) + "..." : item.spesifikasi) : "-",
      item.tahunPembelian?.toString() || "-",
      item.vendor || "-",
      `${item.jumlah || "-"} ${item.unit || ""}`,
      item.kondisi ? item.kondisi.replace("_", " ").charAt(0).toUpperCase() + item.kondisi.replace("_", " ").slice(1) : "-",
    ]);

    (doc as any).autoTable({
      head: [["Nama Material", "Kode", "Spesifikasi", "Tahun", "Vendor", "Jumlah", "Kondisi"]],
      body: tableData,
      startY: yPos + 20,
      styles: { 
        fontSize: 8,
        cellPadding: 3,
        lineColor: [200, 200, 200],
        lineWidth: 0.1,
      },
      headStyles: { 
        fillColor: PERTAMINA_BLUE,
        textColor: [255, 255, 255],
        fontStyle: "bold",
        fontSize: 9,
      },
      alternateRowStyles: {
        fillColor: [245, 247, 250],
      },
      columnStyles: {
        2: { cellWidth: 40 },
      },
      didParseCell: function(data: any) {
        if (data.section === 'body' && data.column.index === 6) {
          if (data.cell.raw === 'Baik') {
            data.cell.styles.fillColor = [40, 167, 69];
            data.cell.styles.textColor = [255, 255, 255];
          } else if (data.cell.raw === 'Rusak') {
            data.cell.styles.fillColor = [220, 53, 69];
            data.cell.styles.textColor = [255, 255, 255];
          } else if (data.cell.raw === 'Perawatan') {
            data.cell.styles.fillColor = [255, 193, 7];
            data.cell.styles.textColor = [0, 0, 0];
          }
        }
      },
    });
  };

  const exportKompetensiToPDF = (doc: jsPDF) => {
    let filteredKompetensi = kompetensi;
    if (filter.kompetensiStatus) {
      filteredKompetensi = kompetensi.filter((item: any) => item.statusKompetensi === filter.kompetensiStatus);
    }

    if (filteredKompetensi.length === 0) return;

    doc.addPage();
    addHeader(doc, "REKAPITULASI KOMPETENSI PERSONIL", `Total Data: ${filteredKompetensi.length} kompetensi`);
    
    // Summary by status
    const aktif = filteredKompetensi.filter((k: any) => k.statusKompetensi === "aktif").length;
    const expired = filteredKompetensi.filter((k: any) => k.statusKompetensi === "expired").length;
    const pending = filteredKompetensi.filter((k: any) => k.statusKompetensi === "pending").length;
    
    let yPos = 55;
    doc.setFontSize(9);
    
    doc.setFillColor(40, 167, 69);
    doc.roundedRect(14, yPos, 55, 15, 2, 2, 'F');
    doc.setTextColor(255, 255, 255);
    doc.text(`Aktif: ${aktif}`, 17, yPos + 10);
    
    doc.setFillColor(220, 53, 69);
    doc.roundedRect(77, yPos, 55, 15, 2, 2, 'F');
    doc.setTextColor(255, 255, 255);
    doc.text(`Expired: ${expired}`, 80, yPos + 10);
    
    doc.setFillColor(255, 193, 7);
    doc.roundedRect(140, yPos, 55, 15, 2, 2, 'F');
    doc.setTextColor(0, 0, 0);
    doc.text(`Pending: ${pending}`, 143, yPos + 10);
    
    yPos = 30;
    
    const tableData = filteredKompetensi.map((item: any) => [
      item.nama,
      item.nip || "-",
      item.jabatan || "-",
      item.jenisKompetensi,
      item.namaSertifikasi || "-",
      item.masaBerlakuSertifikasi ? new Date(item.masaBerlakuSertifikasi).toLocaleDateString("id-ID") : "-",
      item.statusKompetensi?.charAt(0).toUpperCase() + item.statusKompetensi?.slice(1) || "-",
    ]);

    (doc as any).autoTable({
      head: [["Nama", "NIP", "Jabatan", "Jenis Kompetensi", "Sertifikasi", "Masa Berlaku", "Status"]],
      body: tableData,
      startY: yPos + 20,
      styles: { 
        fontSize: 8,
        cellPadding: 3,
        lineColor: [200, 200, 200],
        lineWidth: 0.1,
      },
      headStyles: { 
        fillColor: PERTAMINA_BLUE,
        textColor: [255, 255, 255],
        fontStyle: "bold",
        fontSize: 9,
      },
      alternateRowStyles: {
        fillColor: [245, 247, 250],
      },
      columnStyles: {
        3: { cellWidth: 25 },
      },
      didParseCell: function(data: any) {
        if (data.section === 'body' && data.column.index === 6) {
          if (data.cell.raw === 'Aktif') {
            data.cell.styles.fillColor = [40, 167, 69];
            data.cell.styles.textColor = [255, 255, 255];
          } else if (data.cell.raw === 'Expired') {
            data.cell.styles.fillColor = [220, 53, 69];
            data.cell.styles.textColor = [255, 255, 255];
          } else if (data.cell.raw === 'Pending') {
            data.cell.styles.fillColor = [255, 193, 7];
            data.cell.styles.textColor = [0, 0, 0];
          }
        }
      },
    });
  };

  const exportSertifikasiToPDF = (doc: jsPDF) => {
    let filteredSertifikasi = sertifikasi;
    if (filter.sertifikasiKondisi) {
      filteredSertifikasi = sertifikasi.filter((item: any) => item.kondisi === filter.sertifikasiKondisi);
    }

    if (filteredSertifikasi.length === 0) return;

    doc.addPage();
    addHeader(doc, "REKAPITULASI SERTIFIKASI PERALATAN", `Total Data: ${filteredSertifikasi.length} sertifikasi`);
    
    // Summary by condition
    const baik = filteredSertifikasi.filter((s: any) => s.kondisi === "baik").length;
    const rusak = filteredSertifikasi.filter((s: any) => s.kondisi === "rusak").length;
    const maintenance = filteredSertifikasi.filter((s: any) => s.kondisi === "maintenance").length;
    
    let yPos = 55;
    doc.setFontSize(9);
    
    doc.setFillColor(40, 167, 69);
    doc.roundedRect(14, yPos, 55, 15, 2, 2, 'F');
    doc.setTextColor(255, 255, 255);
    doc.text(`Baik: ${baik}`, 17, yPos + 10);
    
    doc.setFillColor(220, 53, 69);
    doc.roundedRect(77, yPos, 55, 15, 2, 2, 'F');
    doc.setTextColor(255, 255, 255);
    doc.text(`Rusak: ${rusak}`, 80, yPos + 10);
    
    doc.setFillColor(255, 193, 7);
    doc.roundedRect(140, yPos, 55, 15, 2, 2, 'F');
    doc.setTextColor(0, 0, 0);
    doc.text(`Maintenance: ${maintenance}`, 143, yPos + 10);
    
    yPos = 30;
    
    const tableData = filteredSertifikasi.map((item: any) => [
      item.namaPeralatan,
      item.jenisPeralatan || "-",
      item.namaOperator || "-",
      item.nomorSertifikasiOperator || "-",
      item.masaBerlakuSertifikasiOperator ? new Date(item.masaBerlakuSertifikasiOperator).toLocaleDateString("id-ID") : "-",
      item.kondisi ? item.kondisi.charAt(0).toUpperCase() + item.kondisi.slice(1) : "-",
    ]);

    (doc as any).autoTable({
      head: [["Peralatan", "Jenis", "Operator", "No Sertifikat", "Masa Berlaku", "Kondisi"]],
      body: tableData,
      startY: yPos + 20,
      styles: { 
        fontSize: 8,
        cellPadding: 3,
        lineColor: [200, 200, 200],
        lineWidth: 0.1,
      },
      headStyles: { 
        fillColor: PERTAMINA_BLUE,
        textColor: [255, 255, 255],
        fontStyle: "bold",
        fontSize: 9,
      },
      alternateRowStyles: {
        fillColor: [245, 247, 250],
      },
      columnStyles: {
        3: { cellWidth: 25 },
      },
      didParseCell: function(data: any) {
        if (data.section === 'body' && data.column.index === 5) {
          if (data.cell.raw === 'Baik') {
            data.cell.styles.fillColor = [40, 167, 69];
            data.cell.styles.textColor = [255, 255, 255];
          } else if (data.cell.raw === 'Rusak') {
            data.cell.styles.fillColor = [220, 53, 69];
            data.cell.styles.textColor = [255, 255, 255];
          } else if (data.cell.raw === 'Maintenance') {
            data.cell.styles.fillColor = [255, 193, 7];
            data.cell.styles.textColor = [0, 0, 0];
          }
        }
      },
    });
  };

  const handleExportPDF = () => {
    setExporting(true);
    try {
      const doc = new jsPDF();
      
      // Export selected data types
      let pageCount = 1;

      if (selectedTypes.material) {
        exportMaterialToPDF(doc);
        pageCount++;
      }
      if (selectedTypes.kompetensi) {
        exportKompetensiToPDF(doc);
        pageCount++;
      }
      if (selectedTypes.sertifikasi) {
        exportSertifikasiToPDF(doc);
      }
      
      doc.save(`pertamina-export-${new Date().toISOString().split("T")[0]}.pdf`);
      toast.success("Export PDF berhasil!");
    } catch (error) {
      console.error("Error exporting PDF:", error);
      toast.error("Gagal export PDF");
    } finally {
      setExporting(false);
    }
  };

  // ============== EXCEL EXPORT FUNCTIONS ==============
  
  const exportToExcel = () => {
    setExporting(true);
    try {
      const wb = XLSX.utils.book_new();
      
      // Define column widths for each sheet
      const exportColWidths = [
        { wch: 12 }, { wch: 20 }, { wch: 15 }, { wch: 25 }, 
        { wch: 15 }, { wch: 40 }, { wch: 40 }, { wch: 12 }, { wch: 15 }, { wch: 15 }
      ];
      const materialColWidths = [
        { wch: 25 }, { wch: 15 }, { wch: 35 }, { wch: 10 }, 
        { wch: 20 }, { wch: 10 }, { wch: 10 }, { wch: 20 }, 
        { wch: 20 }, { wch: 18 }, { wch: 12 }, { wch: 25 }
      ];
      const kompetensiColWidths = [
        { wch: 20 }, { wch: 15 }, { wch: 20 }, { wch: 20 }, 
        { wch: 25 }, { wch: 20 }, { wch: 15 }, { wch: 20 }, 
        { wch: 15 }, { wch: 15 }, { wch: 12 }, { wch: 25 }
      ];
      const sertifikasiColWidths = [
        { wch: 20 }, { wch: 15 }, { wch: 20 }, { wch: 15 }, 
        { wch: 20 }, { wch: 12 }, { wch: 12 }, { wch: 20 }, 
        { wch: 20 }, { wch: 25 }, { wch: 20 }, { wch: 20 }, 
        { wch: 18 }, { wch: 12 }, { wch: 25 }
      ];
      
      // Helper function to add header row with styling
      const addHeaderRow = (ws: any, headerRow: any[], startRow: number) => {
        headerRow.forEach((header, colIndex) => {
          const cellRef = XLSX.utils.encode_cell({ r: startRow, c: colIndex });
          ws[cellRef] = { t: "s", v: header };
          ws[cellRef].s = {
            font: { bold: true, color: { rgb: "FFFFFF" } },
            fill: { fgColor: { rgb: "007BFF" } },
            alignment: { horizontal: "center" }
          };
        });
      };
      

      
      // Material sheet
      if (selectedTypes.material) {
        let filteredMaterial = materials;
        if (filter.materialKondisi) {
          filteredMaterial = materials.filter((item: any) => item.kondisi === filter.materialKondisi);
        }
        
        if (filteredMaterial.length > 0) {
          const headers = ["Nama Material", "Kode", "Spesifikasi", "Tahun", "Vendor", "Jumlah", "Unit", "Lokasi", "Type", "Masa Berlaku", "Kondisi", "Catatan"];
          const worksheetData = filteredMaterial.map((item: any) => ({
            "Nama Material": item.namaMaterial,
            "Kode": item.kodeMaterial || "-",
            "Spesifikasi": item.spesifikasi || "-",
            "Tahun": item.tahunPembelian?.toString() || "-",
            "Vendor": item.vendor || "-",
            "Jumlah": item.jumlah?.toString() || "-",
            "Unit": item.unit || "-",
            "Lokasi": item.lokasiPenyimpanan || "-",
            "Type": item.typePeralatan || "-",
            "Masa Berlaku": item.masaBerlakuType ? new Date(item.masaBerlakuType).toLocaleDateString("id-ID") : "-",
            "Kondisi": item.kondisi ? item.kondisi.replace("_", " ").charAt(0).toUpperCase() + item.kondisi.replace("_", " ").slice(1) : "-",
            "Catatan": item.catatan || "-",
          }));
          const ws = XLSX.utils.json_to_sheet(worksheetData);
          ws["!cols"] = materialColWidths;
          addHeaderRow(ws, headers, 0);
          XLSX.utils.book_append_sheet(wb, ws, "Material");
        }
      }
      
      // Kompetensi sheet
      if (selectedTypes.kompetensi) {
        let filteredKompetensi = kompetensi;
        if (filter.kompetensiStatus) {
          filteredKompetensi = kompetensi.filter((item: any) => item.statusKompetensi === filter.kompetensiStatus);
        }
        
        if (filteredKompetensi.length > 0) {
          const headers = ["Nama", "NIP", "Jabatan", "Unit Kerja", "Jenis Kompetensi", "Sertifikasi", "No Sertifikat", "Lembaga", "Terbit", "Masa Berlaku", "Status", "Catatan"];
          const worksheetData = filteredKompetensi.map((item: any) => ({
            "Nama": item.nama,
            "NIP": item.nip || "-",
            "Jabatan": item.jabatan || "-",
            "Unit Kerja": item.unitKerja || "-",
            "Jenis Kompetensi": item.jenisKompetensi,
            "Sertifikasi": item.namaSertifikasi || "-",
            "No Sertifikat": item.nomorSertifikasi || "-",
            "Lembaga": item.lembagaPenerbit || "-",
            "Terbit": item.tanggalTerbit ? new Date(item.tanggalTerbit).toLocaleDateString("id-ID") : "-",
            "Masa Berlaku": item.masaBerlakuSertifikasi ? new Date(item.masaBerlakuSertifikasi).toLocaleDateString("id-ID") : "-",
            "Status": item.statusKompetensi?.charAt(0).toUpperCase() + item.statusKompetensi?.slice(1) || "-",
            "Catatan": item.catatan || "-",
          }));
          const ws = XLSX.utils.json_to_sheet(worksheetData);
          ws["!cols"] = kompetensiColWidths;
          addHeaderRow(ws, headers, 0);
          XLSX.utils.book_append_sheet(wb, ws, "Kompetensi");
        }
      }
      
      // Sertifikasi sheet
      if (selectedTypes.sertifikasi) {
        let filteredSertifikasi = sertifikasi;
        if (filter.sertifikasiKondisi) {
          filteredSertifikasi = sertifikasi.filter((item: any) => item.kondisi === filter.sertifikasiKondisi);
        }
        
        if (filteredSertifikasi.length > 0) {
          const headers = ["Peralatan", "Kode", "Jenis", "Merk", "Type", "No Seri", "Tahun", "Lokasi", "Operator", "No Sertifikat Op", "Jenis Sertifikat", "Masa Berlaku Op", "No Sertifikat", "Kondisi", "Catatan"];
          const worksheetData = filteredSertifikasi.map((item: any) => ({
            "Peralatan": item.namaPeralatan,
            "Kode": item.kodePeralatan || "-",
            "Jenis": item.jenisPeralatan || "-",
            "Merk": item.merk || "-",
            "Type": item.type || "-",
            "No Seri": item.nomorSeri || "-",
            "Tahun": item.tahunProduksi?.toString() || "-",
            "Lokasi": item.lokasiPemasangan || "-",
            "Operator": item.namaOperator || "-",
            "No Sertifikat Op": item.nomorSertifikasiOperator || "-",
            "Jenis Sertifikat": item.jenisSertifikasiOperator || "-",
            "Masa Berlaku Op": item.masaBerlakuSertifikasiOperator ? new Date(item.masaBerlakuSertifikasiOperator).toLocaleDateString("id-ID") : "-",
            "No Sertifikat": item.nomorSertifikatPeralatan || "-",
            "Kondisi": item.kondisi?.charAt(0).toUpperCase() + item.kondisi?.slice(1) || "-",
            "Catatan": item.catatan || "-",
          }));
          const ws = XLSX.utils.json_to_sheet(worksheetData);
          ws["!cols"] = sertifikasiColWidths;
          addHeaderRow(ws, headers, 0);
          XLSX.utils.book_append_sheet(wb, ws, "Sertifikasi");
        }
      }
      
      XLSX.writeFile(wb, `pertamina-export-${new Date().toISOString().split("T")[0]}.xlsx`);
      toast.success("Export Excel berhasil!");
    } catch (error) {
      console.error("Error exporting Excel:", error);
      toast.error("Gagal export Excel");
    } finally {
      setExporting(false);
    }
  };

  const handleExport = () => {
    if (selectedFormat === "pdf") {
      handleExportPDF();
    } else {
      exportToExcel();
    }
  };

  const getSelectedCount = () => {
    let count = 0;
    if (selectedTypes.material) count += materials.length;
    if (selectedTypes.kompetensi) count += kompetensi.length;
    if (selectedTypes.sertifikasi) count += sertifikasi.length;
    return count;
  };

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
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-20">
          <div className="px-6 py-4">
            <h1 className="text-2xl font-bold text-pertamina-dark">
              Export Data
            </h1>
            <p className="text-gray-600 text-sm mt-1">
              Export data ke PDF atau Excel
            </p>
          </div>
        </header>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Selection */}
            <div className="lg:col-span-1 space-y-6">
              {/* Format Selection */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-lg font-semibold text-pertamina-dark mb-4">Format Export</h2>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setSelectedFormat("pdf")}
                    className={`p-4 rounded-lg border-2 flex flex-col items-center gap-2 transition-all ${
                      selectedFormat === "pdf" 
                        ? "border-pertamina-blue bg-blue-50 text-pertamina-blue" 
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">PDF</span>
                  </button>
                  <button
                    onClick={() => setSelectedFormat("excel")}
                    className={`p-4 rounded-lg border-2 flex flex-col items-center gap-2 transition-all ${
                      selectedFormat === "excel" 
                        ? "border-pertamina-blue bg-blue-50 text-pertamina-blue" 
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="font-medium">Excel</span>
                  </button>
                </div>
              </div>

              {/* Data Type Selection */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-lg font-semibold text-pertamina-dark mb-4">Pilih Data</h2>
                <div className="space-y-3">

                  
                  <label className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50">
                    <input
                      type="checkbox"
                      checked={selectedTypes.material}
                      onChange={() => handleTypeToggle("material")}
                      className="w-5 h-5 text-pertamina-blue rounded focus:ring-pertamina-blue"
                    />
                    <div className="flex-1">
                      <span className="font-medium text-gray-900">Material</span>
                      <p className="text-sm text-gray-500">{materials.length} data</p>
                    </div>
                  </label>
                  
                  <label className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50">
                    <input
                      type="checkbox"
                      checked={selectedTypes.kompetensi}
                      onChange={() => handleTypeToggle("kompetensi")}
                      className="w-5 h-5 text-pertamina-blue rounded focus:ring-pertamina-blue"
                    />
                    <div className="flex-1">
                      <span className="font-medium text-gray-900">Kompetensi</span>
                      <p className="text-sm text-gray-500">{kompetensi.length} data</p>
                    </div>
                  </label>
                  
                  <label className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50">
                    <input
                      type="checkbox"
                      checked={selectedTypes.sertifikasi}
                      onChange={() => handleTypeToggle("sertifikasi")}
                      className="w-5 h-5 text-pertamina-blue rounded focus:ring-pertamina-blue"
                    />
                    <div className="flex-1">
                      <span className="font-medium text-gray-900">Sertifikasi</span>
                      <p className="text-sm text-gray-500">{sertifikasi.length} data</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Export Button */}
              <button
                onClick={handleExport}
                disabled={exporting || getSelectedCount() === 0}
                className="w-full btn-primary py-4 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {exporting ? (
                  <>
                    <div className="spinner-small"></div>
                    <span>Mengexport...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span>Export {selectedFormat.toUpperCase()}</span>
                  </>
                )}
              </button>
              <p className="text-sm text-gray-500 text-center">
                Total: {getSelectedCount()} data akan diexport
              </p>
            </div>

            {/* Right Column - Filters */}
            <div className="lg:col-span-2 space-y-6">
              {/* Laporan Filters */}


              {/* Material Filters */}
              {selectedTypes.material && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-lg font-semibold text-pertamina-dark mb-4">Filter Material</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Kondisi</label>
                      <select
                        value={filter.materialKondisi}
                        onChange={(e) => handleFilterChange("materialKondisi", e.target.value)}
                        className="input-field"
                      >
                        <option value="">Semua Kondisi</option>
                        <option value="baik">Baik</option>
                        <option value="rusak">Rusak</option>
                        <option value="perlu_perawatan">Perlu Perawatan</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Kompetensi Filters */}
              {selectedTypes.kompetensi && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-lg font-semibold text-pertamina-dark mb-4">Filter Kompetensi</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                      <select
                        value={filter.kompetensiStatus}
                        onChange={(e) => handleFilterChange("kompetensiStatus", e.target.value)}
                        className="input-field"
                      >
                        <option value="">Semua Status</option>
                        <option value="aktif">Aktif</option>
                        <option value="expired">Expired</option>
                        <option value="pending">Pending</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Sertifikasi Filters */}
              {selectedTypes.sertifikasi && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-lg font-semibold text-pertamina-dark mb-4">Filter Sertifikasi</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Kondisi</label>
                      <select
                        value={filter.sertifikasiKondisi}
                        onChange={(e) => handleFilterChange("sertifikasiKondisi", e.target.value)}
                        className="input-field"
                      >
                        <option value="">Semua Kondisi</option>
                        <option value="baik">Baik</option>
                        <option value="rusak">Rusak</option>
                        <option value="maintenance">Maintenance</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Filter Actions */}
              <div className="flex gap-3">
                <button onClick={applyFilters} className="btn-primary">
                  Terapkan Filter
                </button>
                <button onClick={resetFilters} className="btn-outline">
                  Reset
                </button>
              </div>

              {/* Data Preview */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-lg font-semibold text-pertamina-dark mb-4">Preview Data</h2>
                


                {materials.length > 0 && selectedTypes.material && (
                  <div className="mb-4">
                    <h3 className="font-medium text-gray-700 mb-2">Material ({materials.length})</h3>
                    <div className="overflow-x-auto border rounded-lg">
                      <table className="min-w-full text-sm">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-3 py-2 text-left">Nama</th>
                            <th className="px-3 py-2 text-left">Kode</th>
                            <th className="px-3 py-2 text-left">Kondisi</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {materials.slice(0, 3).map((item: any) => (
                            <tr key={item.id}>
                              <td className="px-3 py-2">{item.namaMaterial}</td>
                              <td className="px-3 py-2">{item.kodeMaterial || "-"}</td>
                              <td className="px-3 py-2">{item.kondisi || "-"}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {kompetensi.length > 0 && selectedTypes.kompetensi && (
                  <div className="mb-4">
                    <h3 className="font-medium text-gray-700 mb-2">Kompetensi ({kompetensi.length})</h3>
                    <div className="overflow-x-auto border rounded-lg">
                      <table className="min-w-full text-sm">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-3 py-2 text-left">Nama</th>
                            <th className="px-3 py-2 text-left">Jenis</th>
                            <th className="px-3 py-2 text-left">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {kompetensi.slice(0, 3).map((item: any) => (
                            <tr key={item.id}>
                              <td className="px-3 py-2">{item.nama}</td>
                              <td className="px-3 py-2">{item.jenisKompetensi}</td>
                              <td className="px-3 py-2">{item.statusKompetensi}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {sertifikasi.length > 0 && selectedTypes.sertifikasi && (
                  <div className="mb-4">
                    <h3 className="font-medium text-gray-700 mb-2">Sertifikasi ({sertifikasi.length})</h3>
                    <div className="overflow-x-auto border rounded-lg">
                      <table className="min-w-full text-sm">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-3 py-2 text-left">Peralatan</th>
                            <th className="px-3 py-2 text-left">Operator</th>
                            <th className="px-3 py-2 text-left">Kondisi</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {sertifikasi.slice(0, 3).map((item: any) => (
                            <tr key={item.id}>
                              <td className="px-3 py-2">{item.namaPeralatan}</td>
                              <td className="px-3 py-2">{item.namaOperator || "-"}</td>
                              <td className="px-3 py-2">{item.kondisi || "-"}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {getSelectedCount() === 0 && (
                  <p className="text-gray-500 text-center py-4">Pilih setidaknya satu data untuk diexport</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

