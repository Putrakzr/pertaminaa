const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // Create Admin User
  const hashedPassword = await bcrypt.hash('admin123', 10);
  
  const admin = await prisma.admin.upsert({
    where: { email: 'admin@pertamina.com' },
    update: {},
    create: {
      nama: 'Administrator Utama',
      email: 'admin@pertamina.com',
      password: hashedPassword,
      role: 'admin',
    },
  });
  console.log('✅ Admin created:', admin.email);

  // Create Sample User
  const userPassword = await bcrypt.hash('user123', 10);
  
  const user = await prisma.user.upsert({
    where: { email: 'user@pertamina.com' },
    update: {},
    create: {
      nama: 'John Doe',
      email: 'user@pertamina.com',
      password: userPassword,
      jabatan: 'Inspector',
      lokasiSite: 'Ogan Komering',
    },
  });
  console.log('✅ User created:', user.email);

  console.log('🌸 Seed completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
