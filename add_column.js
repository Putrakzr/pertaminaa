const { PrismaClient } = require('./prisma/generated');

const prisma = new PrismaClient();

async function addColumn() {
  try {
    await prisma.$connect();
    console.log('Database connected');
    
    // Execute raw SQL to add column
    await prisma.$executeRaw`ALTER TABLE kompetensi_personil ADD COLUMN nomorTelepon VARCHAR(50) NULL`;
    console.log('Column added successfully');
    
    await prisma.$disconnect();
  } finally {
    await connection.end();
  }
}

addColumn();
