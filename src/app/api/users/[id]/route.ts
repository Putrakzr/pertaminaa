import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const role = (session.user as any).role;

    if (role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const userId = parseInt(params.id);

    if (isNaN(userId)) {
      return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!existingUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Delete related data first (notifications)
    await prisma.notification.deleteMany({
      where: { userId },
     });

     // Delete user's data
     await prisma.dataInjeksi.deleteMany({
       where:{userId}
     });

   // Delete the user
   await prisma.user.delete({
     where:{id :userId}
   });

 return NextResponse.json({ message:"User deleted successfully"});
} catch(error){
console.error("Error deleting user:",error);
return NextResponse.json({ error:"Internal server error"},{status :500});
}
}
