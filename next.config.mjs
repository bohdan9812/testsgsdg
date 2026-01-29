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
        destination: "https://test-project-phi-neon.vercel.app",
      },
      {
        source: "/flow/:path*",
        destination: "https://test-project-phi-neon.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;
