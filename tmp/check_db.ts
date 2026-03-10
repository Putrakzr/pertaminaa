import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const admins = await prisma.admin.findMany({ take: 5 });
  const users = await prisma.user.findMany({ take: 5 });
  console.log('Admins:', admins.map(a => ({ id: a.id, email: a.email, role: a.role })));
  console.log('Users:', users.map(u => ({ id: u.id, email: u.email })));
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
