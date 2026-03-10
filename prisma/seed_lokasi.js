const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const oganKomeringAreas = [
  "Block Station", "Base Camp", "Junk Yard", "Technical Services Shop", 
  "Lokasi Air Serdang", "Lokasi Guruh", "Lokasi Mandala", "Hi Line -1", 
  "Hi Line -2", "Hi Line -3", "Gudang Handak", "Metur Warehouse", 
  "Power Generator Unit", "Gas Compressor", "Production Lab", 
  "Fire Pump Area", "Gudang Limbah B3", "Portal KA", "Satelite-A GRH", 
  "Satelite-B GRH", "Satelite-H", "Satelite-F", "Satelite-G", 
  "Satelite-B", "Satelite-D", "Satelite-C", "Satelite-E", 
  "Satelite-I", "Satelite-J", "Satelite-K", "Satelite-L", 
  "Manifold Gas MDL-2", "Lokasi lainnya (Cutomise)"
];

const oganKomeringWells = [
  { name: "ASD-04", desc: "Water Injection" },
  { name: "ASD-18", desc: "Water Injection" },
  { name: "ASD-19", desc: "Water Injection" },
  { name: "ASDJ-14", desc: "Water Injection" },
  { name: "ASDJ-19", desc: "Water Injection" },
  { name: "ASDJ-48", desc: "Water Injection" },
  { name: "ASDJ-56", desc: "Water Injection" },
  { name: "ASDJ-59", desc: "Water Injection" },
  { name: "ASDJ-63", desc: "Water Injection" },
  { name: "ASDJ-66", desc: "Water Injection" },
  { name: "ASDJ-68", desc: "Water Injection" },
  { name: "ASDJ-103", desc: "Water Injection" },
  { name: "GRH-04", desc: "Water Injection" },
  { name: "GRH-06", desc: "Water Injection" },
  { name: "GRH-24", desc: "Water Injection" },
  { name: "ASDJ-22", desc: "Production well" },
  { name: "ASDJ-23", desc: "Production well" },
  { name: "ASDJ-24", desc: "Production well" },
  { name: "ASDJ-25", desc: "Production well" },
  { name: "ASDJ-26", desc: "Production well" },
  { name: "ASDJ-29", desc: "Production well" },
  { name: "ASDJ-42", desc: "Production well" },
  { name: "ASDJ-45", desc: "Production well" },
  { name: "ASDJ-46", desc: "Production well" },
  { name: "ASDJ-62", desc: "Production well" },
  { name: "ASDJ-70", desc: "Production well" },
  { name: "ASDJ-75", desc: "Production well" },
  { name: "ASDJ-107", desc: "Production well" },
  { name: "ASDJ-108", desc: "Production well" },
  { name: "ASDJ-113", desc: "Production well" },
  { name: "ASDJ-114", desc: "Production well" },
  { name: "ASDJ-116", desc: "Production well" },
  { name: "ASDJ-73", desc: "Production well" },
  { name: "ASDJ-85", desc: "Production well" },
  { name: "ASDJ-43", desc: "Production well" },
  { name: "ASDJ-61", desc: "Production well" },
  { name: "ASDJ-67", desc: "Production well" },
  { name: "ASDJ-104", desc: "Production well" },
  { name: "GRH-01", desc: "Production well" },
  { name: "GRH-02", desc: "Production well" },
  { name: "GRH-09", desc: "Production well" },
  { name: "GRH-13", desc: "Production well" },
  { name: "GRH-18", desc: "Production well" },
  { name: "GRH-27", desc: "Production well" },
  { name: "GRH-29", desc: "Production well" },
  { name: "GRH-30", desc: "Production well" },
  { name: "GRH-32", desc: "Production well" },
  { name: "MDL-1", desc: "GAS" },
  { name: "MDL-3", desc: "GAS" }
];

const rajaTempiraiAreas = [
  "Air Itam Production Facilities", "Water Injection Plant", 
  "Tanjung Kurung", "Ware House", "Sumur AH-E1", "Lokasi lainnya (Cutomise)"
];

async function main() {
  console.log("Seeding locations...");
  
  try {
    // Clear existing locations
    await prisma.masterLokasi.deleteMany();

    // Seed Ogan Komering Areas
    for (const area of oganKomeringAreas) {
      await prisma.masterLokasi.create({
        data: {
          field: "Ogan Komering",
          kategori: "Area",
          nama: area
        }
      });
    }

    // Seed Ogan Komering Wells
    for (const well of oganKomeringWells) {
      await prisma.masterLokasi.create({
        data: {
          field: "Ogan Komering",
          kategori: "Sumur",
          nama: well.name,
          keterangan: well.desc
        }
      });
    }

    // Seed Raja Tempirai Areas
    for (const area of rajaTempiraiAreas) {
      await prisma.masterLokasi.create({
        data: {
          field: "Raja Tempirai",
          kategori: "Area",
          nama: area
        }
      });
    }

    console.log("Seeding complete!");
  } catch (err) {
    console.error("Error during seeding:", err);
    throw err;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
