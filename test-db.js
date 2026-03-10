const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function testConnection() {
  try {
    await prisma.$connect();
    console.log('✅ Database connected successfully!');
    
    // Test query
    const userCount = await prisma.user.count();
    const adminCount = await prisma.admin.count();
    const materialCount = await prisma.material.count();
    const kompetensiCount = await prisma.kompetensiPersonil.count();
    const sertifikasiCount = await prisma.sertifikasiPeralatan.count();
    const tugasCount = await prisma.tugas.count();
    const masterLokasiCount = await prisma.masterLokasi.count();

    console.log(`Users: ${userCount}`);
    console.log(`Admins: ${adminCount}`);
    console.log(`Materials: ${materialCount}`);
    console.log(`Kompetensi: ${kompetensiCount}`);
    console.log(`Sertifikasi: ${sertifikasiCount}`);
    console.log(`Tugas: ${tugasCount}`);
    console.log(`Master Lokasi: ${masterLokasiCount}`);
    
    await prisma.$disconnect();
    console.log('✅ Disconnected from database');
  } catch (error) {
    console.error('❌ Database connection failed:', error);
  }
}

testConnection();

