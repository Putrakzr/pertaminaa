import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "File tidak ditemukan" },
        { status: 400 }
      );
    }

    // Validasi ukuran file (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: "Ukuran file maksimal 5MB" },
        { status: 400 }
      );
    }

    // Validasi tipe file
    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp", "application/pdf"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Tipe file tidak diizinkan" },
        { status: 400 }
      );
    }

    // Generate unique filename
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const ext = path.extname(file.name);
    const filename = `${uniqueSuffix}${ext}`;
    
    // Save ke public/uploads
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    
    // Create directory if not exists
    await mkdir(uploadDir, { recursive: true });
    
    const filePath = path.join(uploadDir, filename);
    await writeFile(filePath, buffer);

    // Return URL
    const fileUrl = `/uploads/${filename}`;

    return NextResponse.json({
      message: "File berhasil diupload",
      url: fileUrl,
      filename,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat upload" },
      { status: 500 }
    );
  }
}
