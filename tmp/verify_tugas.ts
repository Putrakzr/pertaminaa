import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const tugas = await prisma.tugas.findMany({
    orderBy: { createdAt: 'desc' },
    take: 5,
    include: {
      user: { select: { nama: true } },
      admin: { select: { nama: true } }
    }
  });
  console.log('Recent Tugas:', JSON.stringify(tugas, null, 2));
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
