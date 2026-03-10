const fs = require('fs');
const path = require('path');

async function prepareHostinger() {
  console.log('Menyiapkan file untuk Hostinger Deployment...');

  const standaloneDir = path.join(__dirname, '.next', 'standalone');
  const publicDir = path.join(__dirname, 'public');
  const staticDir = path.join(__dirname, '.next', 'static');

  const targetPublic = path.join(standaloneDir, 'public');
  const targetStatic = path.join(standaloneDir, '.next', 'static');

  try {
    // Check if standalone exists
    if (!fs.existsSync(standaloneDir)) {
      console.error('Error: Folder .next/standalone tidak ditemukan. Jalankan "npm run build" terlebih dahulu.');
      process.exit(1);
    }

    // Copy public folder
    if (fs.existsSync(publicDir)) {
      console.log('- Mengcopy folder public...');
      fs.cpSync(publicDir, targetPublic, { recursive: true });
    }

    // Copy .next/static folder
    if (fs.existsSync(staticDir)) {
      console.log('- Mengcopy folder .next/static...');
      fs.cpSync(staticDir, targetStatic, { recursive: true });
    }

    console.log('\nBerhasil! 🎉');
    console.log('Silakan kompres/zip seluruh isi folder ".next/standalone" dan upload ke Hostinger Anda.');
    console.log('Lihat file HOSTINGER_DEPLOYMENT.md untuk detail selanjutnya.');
  } catch (err) {
    console.error('Terjadi kesalahan:', err);
  }
}

prepareHostinger();
