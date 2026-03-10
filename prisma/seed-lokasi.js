const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const data = [
  // Ogan Komering - Sumur
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'ASD-04', keterangan: 'Water Injection' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'ASD-18', keterangan: 'Water Injection' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'ASD-19', keterangan: 'Water Injection' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'ASDJ-14', keterangan: 'Water Injection' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'ASDJ-19', keterangan: 'Water Injection' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'ASDJ-48', keterangan: 'Water Injection' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'ASDJ-56', keterangan: 'Water Injection' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'ASDJ-59', keterangan: 'Water Injection' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'ASDJ-63', keterangan: 'Water Injection' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'ASDJ-66', keterangan: 'Water Injection' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'ASDJ-68', keterangan: 'Water Injection' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'ASDJ-103', keterangan: 'Water Injection' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'GRH-04', keterangan: 'Water Injection' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'GRH-06', keterangan: 'Water Injection' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'GRH-24', keterangan: 'Water Injection' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'ASDJ-22', keterangan: 'Production well' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'ASDJ-23', keterangan: 'Production well' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'ASDJ-24', keterangan: 'Production well' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'ASDJ-25', keterangan: 'Production well' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'ASDJ-26', keterangan: 'Production well' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'ASDJ-29', keterangan: 'Production well' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'ASDJ-42', keterangan: 'Production well' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'ASDJ-45', keterangan: 'Production well' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'ASDJ-46', keterangan: 'Production well' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'ASDJ-62', keterangan: 'Production well' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'ASDJ-70', keterangan: 'Production well' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'ASDJ-75', keterangan: 'Production well' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'ASDJ-107', keterangan: 'Production well' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'ASDJ-108', keterangan: 'Production well' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'ASDJ-113', keterangan: 'Production well' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'ASDJ-114', keterangan: 'Production well' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'ASDJ-116', keterangan: 'Production well' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'ASDJ-73', keterangan: 'Production well' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'ASDJ-85', keterangan: 'Production well' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'ASDJ-43', keterangan: 'Production well' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'ASDJ-61', keterangan: 'Production well' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'ASDJ-67', keterangan: 'Production well' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'ASDJ-104', keterangan: 'Production well' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'GRH-01', keterangan: 'Production well' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'GRH-02', keterangan: 'Production well' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'GRH-09', keterangan: 'Production well' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'GRH-13', keterangan: 'Production well' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'GRH-18', keterangan: 'Production well' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'GRH-27', keterangan: 'Production well' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'GRH-29', keterangan: 'Production well' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'GRH-30', keterangan: 'Production well' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'GRH-32', keterangan: 'Production well' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'MDL-1', keterangan: 'GAS' },
  { field: 'Ogan Komering', kategori: 'Sumur', nama: 'MDL-3', keterangan: 'GAS' },

  // Ogan Komering - Area
  { field: 'Ogan Komering', kategori: 'Area', nama: 'Block Station', keterangan: '' },
  { field: 'Ogan Komering', kategori: 'Area', nama: 'Base Camp', keterangan: '' },
  { field: 'Ogan Komering', kategori: 'Area', nama: 'Junk Yard', keterangan: '' },
  { field: 'Ogan Komering', kategori: 'Area', nama: 'Technical Services Shoop', keterangan: '' },
  { field: 'Ogan Komering', kategori: 'Area', nama: 'Lokasi Air Serdang', keterangan: '' },
  { field: 'Ogan Komering', kategori: 'Area', nama: 'Lokasi Guruh', keterangan: '' },
  { field: 'Ogan Komering', kategori: 'Area', nama: 'Lokasi Mandala', keterangan: '' },
  { field: 'Ogan Komering', kategori: 'Area', nama: 'Hi Line -1', keterangan: '' },
  { field: 'Ogan Komering', kategori: 'Area', nama: 'Hi Line -2', keterangan: '' },
  { field: 'Ogan Komering', kategori: 'Area', nama: 'Hi Line -3', keterangan: '' },
  { field: 'Ogan Komering', kategori: 'Area', nama: 'Gudang Handak', keterangan: '' },
  { field: 'Ogan Komering', kategori: 'Area', nama: 'Metur Warehouse', keterangan: '' },
  { field: 'Ogan Komering', kategori: 'Area', nama: 'Power Generator Unit', keterangan: '' },
  { field: 'Ogan Komering', kategori: 'Area', nama: 'Production Lab', keterangan: '' },
  { field: 'Ogan Komering', kategori: 'Area', nama: 'Fire Pump Area', keterangan: '' },
  { field: 'Ogan Komering', kategori: 'Area', nama: 'Gudang Limbah B3', keterangan: '' },
  { field: 'Ogan Komering', kategori: 'Area', nama: 'Portal KA', keterangan: '' },
  { field: 'Ogan Komering', kategori: 'Area', nama: 'Satelite-A GRH', keterangan: '' },
  { field: 'Ogan Komering', kategori: 'Area', nama: 'Satelite-B GRH', keterangan: '' },
  { field: 'Ogan Komering', kategori: 'Area', nama: 'Satelite-H', keterangan: '' },
  { field: 'Ogan Komering', kategori: 'Area', nama: 'Satelite-F', keterangan: '' },
  { field: 'Ogan Komering', kategori: 'Area', nama: 'Satelite-G', keterangan: '' },
  { field: 'Ogan Komering', kategori: 'Area', nama: 'Satelite-B', keterangan: '' },
  { field: 'Ogan Komering', kategori: 'Area', nama: 'Satelite-D', keterangan: '' },
  { field: 'Ogan Komering', kategori: 'Area', nama: 'Satelite-C', keterangan: '' },
  { field: 'Ogan Komering', kategori: 'Area', nama: 'Satelite-E', keterangan: '' },
  { field: 'Ogan Komering', kategori: 'Area', nama: 'Satelite-I', keterangan: '' },
  { field: 'Ogan Komering', kategori: 'Area', nama: 'Satelite-J', keterangan: '' },
  { field: 'Ogan Komering', kategori: 'Area', nama: 'Satelite-K', keterangan: '' },
  { field: 'Ogan Komering', kategori: 'Area', nama: 'Satelite-L', keterangan: '' },
  { field: 'Ogan Komering', kategori: 'Area', nama: 'Manifold Gas MDL-2', keterangan: '' },
  { field: 'Ogan Komering', kategori: 'Area', nama: 'Lokasi lainnya (Cutomise)', keterangan: '' },

  // Raja Tempirai - Area
  { field: 'Raja Tempirai', kategori: 'Area', nama: 'Air Itam Production Facilities', keterangan: '' },
  { field: 'Raja Tempirai', kategori: 'Area', nama: 'Wiater Injection Plant', keterangan: '' },
  { field: 'Raja Tempirai', kategori: 'Area', nama: 'Tanjung Kurung', keterangan: '' },
  { field: 'Raja Tempirai', kategori: 'Area', nama: 'Ware House', keterangan: '' },
  { field: 'Raja Tempirai', kategori: 'Area', nama: 'Sumur AH-E1', keterangan: '' },
  { field: 'Raja Tempirai', kategori: 'Area', nama: 'Lokasi lainnya (Cutomise)', keterangan: '' },
];

async function main() {
  console.log('Seeding Master Lokasi...');
  
  // Clear existing if needed, or don't to avoid removing existing ones
  // await prisma.masterLokasi.deleteMany();

  for (const item of data) {
    await prisma.masterLokasi.create({
      data: item
    });
  }
  
  console.log('Done!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
