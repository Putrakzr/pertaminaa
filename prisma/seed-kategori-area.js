const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Seed Kategori
  const kategoriData = [
    { namaKategori: 'Keamanan', kode: 'K001', keterangan: 'Laporan terkait keamanan' },
    { namaKategori: 'Kesehatan', kode: 'K002', keterangan: 'Laporan terkait kesehatan' },
    { namaKategori: 'Lingkungan', kode: 'K003', keterangan: 'Laporan terkait lingkungan' },
    { namaKategori: 'Operasional', kode: 'K004', keterangan: 'Laporan terkait operasional' },
    { namaKategori: 'Pencegahan', kode: 'K005', keterangan: 'Laporan pencegahan bahaya' },
  ];

  for (const kat of kategoriData) {
    await prisma.kategori.create({
      data: kat,
    });
    console.log(`Created kategori: ${kat.namaKategori}`);
  }

  // Seed Area
  const areaData = [
    { namaArea: 'Area Produksi Utama', field: 'PROD', keterangan: 'Area produksi utama refinery' },
    { namaArea: 'Area Storage Tank', field: 'STORAGE', keterangan: 'Area penyimpanan bahan bakar' },
    { namaArea: 'Area Utilitas', field: 'UTIL', keterangan: 'Area utilitas dan utilities' },
    { namaArea: 'Area Administrasi', field: 'ADMIN', keterangan: 'Area perkantoran' },
    { namaArea: 'Area Pemeliharaan', field: 'MAINT', keterangan: 'Area pemeliharaan dan workshop' },
  ];

  for (const area of areaData) {
    await prisma.area.create({
      data: area,
    });
    console.log(`Created area: ${area.namaArea}`);
  }

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
