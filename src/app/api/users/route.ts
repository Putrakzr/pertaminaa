import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const role = (session.user as any).role;

    if (role !== "admin" && role !== "super_admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // Get all users with statistics
    const users = await prisma.user.findMany({
      select: {
        id: true,
        nama: true,
        email: true,
        jabatan: true,
        lokasiSite: true,
        foto: true,
        createdAt: true,
        _count: {
          select: {
            dataInjeksi:true 
          }
       }
      },
      orderBy:{createdAt:"desc"}
     });

   // Transform data 
   const transformedUsers=users.map((user : any) => ({
       ...user ,
       totalInjeksi : user._count?.dataInjeksi || 0
     }));

 return NextResponse.json({users: transformedUsers});
} catch(error){
console.error("Error fetching users:",error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
}
}
