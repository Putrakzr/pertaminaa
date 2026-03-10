const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function main() {
  const users = await prisma.user.findMany();
  console.log('Users Count:', users.length);
  const tasks = await prisma.tugas.findMany();
  console.log('Tugas Count:', tasks.length);
}
main().catch(console.error).finally(() => prisma.$disconnect());
