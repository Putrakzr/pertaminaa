import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "PT. Pertamina Hulu Energi - Sistem Inspeksi",
  description: "Monitoring inspeksi lapangan, audit operasional, dan pengolahan data injeksi",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        <Providers>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#1A1A2E',
                color: '#fff',
              },
              success: {
                iconTheme: {
                  primary: '#10B981',
                  secondary: '#fff',
                },
              },
              error: {
                iconTheme: {
                  primary: '#EF4444',
                  secondary: '#fff',
                },
              },
            }}
          />
          {children}
        </Providers>
      </body>
    </html>
  );
}
