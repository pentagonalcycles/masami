import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
        pathname: "/media/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/blank",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
