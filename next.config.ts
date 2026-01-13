/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tambahkan bagian ini
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Batas penambahan
};

export default nextConfig;
