-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `jabatan` VARCHAR(100) NOT NULL,
    `lokasiSite` VARCHAR(255) NOT NULL,
    `foto` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `admins` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `role` VARCHAR(50) NOT NULL DEFAULT 'admin',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `admins_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `data_injeksi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `tanggal` DATE NOT NULL,
    `nilaiRaw` FLOAT NOT NULL,
    `hasilPerhitungan` FLOAT NULL,
    `formulaUsed` VARCHAR(100) NULL,
    `status` VARCHAR(20) NOT NULL DEFAULT 'pending',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notifications` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NULL,
    `adminId` INTEGER NULL,
    `type` VARCHAR(50) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `message` TEXT NOT NULL,
    `isRead` BOOLEAN NOT NULL DEFAULT false,
    `data` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `materials` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `namaMaterial` VARCHAR(255) NOT NULL,
    `kodeMaterial` VARCHAR(100) NULL,
    `spesifikasi` TEXT NULL,
    `tahunPembelian` YEAR NULL,
    `vendor` VARCHAR(255) NULL,
    `jumlah` INTEGER NULL,
    `unit` VARCHAR(50) NULL,
    `lokasiPenyimpanan` VARCHAR(255) NULL,
    `dokumentasi` TEXT NULL,
    `typePeralatan` VARCHAR(255) NULL,
    `masaBerlakuType` DATE NULL,
    `kondisi` VARCHAR(100) NULL,
    `catatan` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `kompetensi_personil` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(255) NOT NULL,
    `nip` VARCHAR(100) NULL,
    `jabatan` VARCHAR(255) NULL,
    `unitKerja` VARCHAR(255) NULL,
    `jenisKompetensi` VARCHAR(255) NOT NULL,
    `namaSertifikasi` VARCHAR(255) NULL,
    `nomorSertifikasi` VARCHAR(100) NULL,
    `lembagaPenerbit` VARCHAR(255) NULL,
    `tanggalTerbit` DATE NULL,
    `masaBerlakuSertifikasi` DATE NULL,
    `statusKompetensi` VARCHAR(50) NOT NULL DEFAULT 'aktif',
    `catatan` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sertifikasi_peralatan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `namaPeralatan` VARCHAR(255) NOT NULL,
    `kodePeralatan` VARCHAR(100) NULL,
    `jenisPeralatan` VARCHAR(255) NULL,
    `merk` VARCHAR(255) NULL,
    `type` VARCHAR(255) NULL,
    `nomorSeri` VARCHAR(100) NULL,
    `tahunProduksi` YEAR NULL,
    `lokasiPemasangan` VARCHAR(255) NULL,
    `namaOperator` VARCHAR(255) NULL,
    `nomorSertifikasiOperator` VARCHAR(100) NULL,
    `jenisSertifikasiOperator` VARCHAR(255) NULL,
    `masaBerlakuSertifikasiOperator` DATE NULL,
    `nomorSertifikatPeralatan` VARCHAR(100) NULL,
    `lembagaPenerbitSertifikat` VARCHAR(255) NULL,
    `masaBerlakuSertifikatPeralatan` DATE NULL,
    `tanggalTerbitSertifikat` DATE NULL,
    `kondisi` VARCHAR(100) NULL,
    `hasilInspeksiTerakhir` DATE NULL,
    `catatatan` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `system_settings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `key` VARCHAR(100) NOT NULL,
    `value` TEXT NOT NULL,
    `category` VARCHAR(50) NOT NULL DEFAULT 'general',
    `description` TEXT NULL,
    `isVisible` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `system_settings_key_key`(`key`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `activity_logs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NULL,
    `adminId` INTEGER NULL,
    `action` VARCHAR(100) NOT NULL,
    `entityType` VARCHAR(100) NOT NULL,
    `entityId` INTEGER NULL,
    `description` TEXT NULL,
    `ipAddress` VARCHAR(50) NULL,
    `userAgent` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `master_lokasi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `field` VARCHAR(100) NOT NULL,
    `kategori` VARCHAR(100) NOT NULL,
    `nama` VARCHAR(255) NOT NULL,
    `keterangan` VARCHAR(255) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tugas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(255) NOT NULL,
    `deskripsi` TEXT NOT NULL,
    `fileLampiran` TEXT NULL,
    `lokasiField` VARCHAR(100) NULL,
    `lokasiArea` VARCHAR(255) NULL,
    `lokasiSumur` VARCHAR(255) NULL,
    `userId` INTEGER NOT NULL,
    `adminId` INTEGER NOT NULL,
    `dokumenPengerjaan` TEXT NULL,
    `dataPengerjaan` TEXT NULL,
    `fotoPengerjaan` TEXT NULL,
    `laporanSelesai` TEXT NULL,
    `fotoSelesai` TEXT NULL,
    `status` VARCHAR(20) NOT NULL DEFAULT 'pending',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `data_injeksi` ADD CONSTRAINT `data_injeksi_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notifications` ADD CONSTRAINT `notifications_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notifications` ADD CONSTRAINT `notifications_adminId_fkey` FOREIGN KEY (`adminId`) REFERENCES `admins`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `activity_logs` ADD CONSTRAINT `activity_logs_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `activity_logs` ADD CONSTRAINT `activity_logs_adminId_fkey` FOREIGN KEY (`adminId`) REFERENCES `admins`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tugas` ADD CONSTRAINT `tugas_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tugas` ADD CONSTRAINT `tugas_adminId_fkey` FOREIGN KEY (`adminId`) REFERENCES `admins`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
