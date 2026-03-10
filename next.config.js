/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['localhost', 'pusher.com', 'aksepta.com', 'www.aksepta.com'],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'aksepta.com', 'www.aksepta.com'],
    },
  },
};

module.exports = nextConfig;
