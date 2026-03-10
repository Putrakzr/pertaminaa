import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
});

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/laporan/:path*",
    "/injeksi/:path*",
    "/admin/:path*",
    "/api/laporan/:path*",
    "/api/injeksi/:path*",
    "/api/notifications/:path*",
    "/api/statistics/:path*",
  ],
};
