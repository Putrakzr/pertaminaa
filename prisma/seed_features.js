const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log("Seeding features data...");

  // 1. Seed Materials
  const materials = [
    {
      namaMaterial: "Pressure Gauge 0-100 Psi",
      kodeMaterial: "MAT-PG-001",
      spesifikasi: "Stainless Steel, 4 inch dial",
      tahunPembelian: 2023,
      vendor: "Wika",
      jumlah: 5,
      unit: "Pcs",
      lokasiPenyimpanan: "Gudang Metur",
      kondisi: "baik"
    },
    {
      namaMaterial: "Gate Valve 2 Inch",
      kodeMaterial: "MAT-GV-012",
      spesifikasi: "Class 150, ANSI",
      tahunPembelian: 2022,
      vendor: "Kitz",
      jumlah: 2,
      unit: "Pcs",
      lokasiPenyimpanan: "Gudang Metur",
      kondisi: "perlu_perawatan"
    }
  ];

  for (const m of materials) {
    await prisma.material.create({ data: m });
  }
  console.log("✅ Materials seeded");

  // 2. Seed Kompetensi Personil
  const kompetensi = [
    {
      nama: "Budi Santoso",
      nip: "12345678",
      jabatan: "Senior Technician",
      unitKerja: "Production",
      jenisKompetensi: "Welding Certification",
      namaSertifikasi: "Welder Class 1",
      statusKompetensi: "aktif"
    },
    {
      nama: "Siti Aminah",
      nip: "87654321",
      jabatan: "HSE Officer",
      unitKerja: "HSE",
      jenisKompetensi: "K3 Umum",
      namaSertifikasi: "Ahli K3 Umum BNSP",
      statusKompetensi: "aktif"
    }
  ];

  for (const k of kompetensi) {
    await prisma.kompetensiPersonil.create({ data: k });
  }
  console.log("✅ Kompetensi seeded");

  // 3. Seed Sertifikasi Peralatan
  const sertifikasi = [
    {
      namaPeralatan: "Crane 50 Ton",
      kodePeralatan: "CRN-01",
      jenisPeralatan: "Lifting Equipment",
      merk: "Tadano",
      nomorSeri: "SN-9988-AA",
      kondisi: "baik",
      namaOperator: "Ahmad",
      nomorSertifikasiOperator: "OP-123",
      masaBerlakuSertifikatPeralatan: new Date("2025-12-31")
    }
  ];

  for (const s of sertifikasi) {
    await prisma.sertifikasiPeralatan.create({ data: s });
  }
  console.log("✅ Sertifikasi seeded");

  // 4. Seed Tugas
  // Get admin and user IDs
  const admin = await prisma.admin.findFirst();
  const user = await prisma.user.findFirst();

  if (admin && user) {
    await prisma.tugas.create({
      data: {
        judul: "Inspeksi Mingguan Block Station",
        deskripsi: "Lakukan pengecekan rutin pada seluruh katup dan tekanan di Block Station.",
        userId: user.id,
        adminId: admin.id,
        lokasiField: "Ogan Komering",
        lokasiArea: "Block Station",
        status: "pending"
      }
    });
    console.log("✅ Tugas seeded");
  }

  console.log("All features seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
