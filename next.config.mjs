/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/flow",
        destination: "http://localhost:5173/flow/",
      },
      {
        source: "/flow/:path*",
        destination: "http://localhost:5173/flow/:path*",
      },
    ];
  },
};

export default nextConfig;
