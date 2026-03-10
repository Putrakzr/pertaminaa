import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import prisma from "./prisma";

export const authOptions: NextAuthOptions = {
  providers: [
    // Single Credentials Provider for both User and Admin
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email dan password harus diisi");
        }

        // First check if it's an admin (including super_admin)
        const admin = await prisma.admin.findUnique({
          where: { email: credentials.email },
        });

        if (admin) {
          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            admin.password
          );

          if (!isPasswordValid) {
            throw new Error("Password salah");
          }

          // Return the actual role (admin or super_admin)
          return {
            id: admin.id.toString(),
            name: admin.nama,
            email: admin.email,
            role: admin.role, // This will be "admin" or "super_admin"
          };
        }

        // Then check if it's a regular user
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          throw new Error("User tidak ditemukan");
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isPasswordValid) {
          throw new Error("Password salah");
        }

        return {
          id: user.id.toString(),
          name: user.nama,
          email: user.email,
          role: "user",
          jabatan: user.jabatan,
          lokasiSite: user.lokasiSite,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role;
        token.jabatan = (user as any).jabatan;
        token.lokasiSite = (user as any).lokasiSite;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
        (session.user as any).role = token.role;
        (session.user as any).jabatan = token.jabatan;
        (session.user as any).lokasiSite = token.lokasiSite;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 jam
  },
  secret: process.env.NEXTAUTH_SECRET,
};
