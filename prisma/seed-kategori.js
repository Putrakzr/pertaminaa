const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const data = [
  { nama: 'Audit Internal (customise dituliskan judulnya)' },
  { nama: 'Audit Eksternal (customise dituliskan judulnya)' },
  { nama: 'Audit Sistem Manajemen Pengamanan' },
  { nama: 'Audit Contractor Safety Manajemen System (CSMS)' },
  { nama: 'Audit/Surveillance ISO Terintegrasi' },
  { nama: 'Inspeksi Umum' },
  { nama: 'Inspeksi SIKA/JSA' },
  { nama: 'Inspeksi Lainnya (customise dituliskan judulnya)' },
  { nama: 'Hazard Observation Card/PEKA' },
  { nama: 'Management Walktrough' },
  { nama: 'Safety Environment Critical Element (SECE)' },
  { nama: 'Process Hazard Analysis (PHA)' },
  { nama: 'On Duty Management' },
];

async function main() {
  console.log('Seeding Master Kategori...');
  
  for (const item of data) {
    await prisma.masterKategori.create({
      data: item
    });
  }
  
  console.log('Done Seeding Kategori!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
