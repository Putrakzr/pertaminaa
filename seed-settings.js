const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const defaultSettings = [
  // Admin features
  { key: "admin_laporan_approval", value: "true", description: "Enable laporan approval for admin", category: "admin" },
  { key: "admin_user_management", value: "true", description: "Enable user management for admin", category: "admin" },
  { key: "admin_export", value: "true", description: "Enable export feature for admin", category: "admin" },
  { key: "admin_statistics", value: "true", description: "Enable statistics dashboard for admin", category: "admin" },
  { key: "admin_injeksi_management", value: "true", description: "Enable injeksi management for admin", category: "admin" },
  
  // User features
  { key: "user_laporan_create", value: "true", description: "Enable laporan creation for user", category: "user" },
  { key: "user_injeksi_input", value: "true", description: "Enable injeksi input for user", category: "user" },
  { key: "user_profile_edit", value: "true", description: "Enable profile editing for user", category: "user" },
  { key: "user_notification", value: "true", description: "Enable notifications for user", category: "user" },
  { key: "user_history", value: "true", description: "Enable history view for user", category: "user" },
  
  // General
  { key: "maintenance_mode", value: "false", description: "Enable maintenance mode", category: "general" },
  { key: "registration_enabled", value: "true", description: "Enable user registration", category: "general" },
];

async function main() {
  console.log("Seeding system settings...");

  for (const setting of defaultSettings) {
    await prisma.systemSettings.upsert({
      where: { key: setting.key },
      update: {},
      create: setting,
    });
  }

  console.log("System settings seeded successfully!");
  
  // Display all settings
  const settings = await prisma.systemSettings.findMany({
    orderBy: [{ category: "asc" }, { key: "asc" }]
  });
  
  console.log("\nCurrent settings:");
  settings.forEach(s => {
    console.log(`  ${s.key}: ${s.value} (${s.category})`);
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
