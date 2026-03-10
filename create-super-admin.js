const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createSuperAdmin() {
  try {
    // Check if super admin already exists
    const existingAdmin = await prisma.admin.findFirst({
      where: { role: 'super_admin' }
    });

    if (existingAdmin) {
      console.log('Super Admin already exists!');
      console.log(existingAdmin);
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash('superadmin123', 10);

    // Create super admin
    const admin = await prisma.admin.create({
      data: {
        nama: 'Super Admin',
        email: 'super@pertamina.com',
        password: hashedPassword,
        role: 'super_admin'
      }
    });

    console.log('Super Admin created successfully!');
    console.log(admin);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createSuperAdmin();
