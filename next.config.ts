import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Original-Creator",
            value: "sAndreas19"
          },
          {
            key: "Reference",
            value: "Dea Afrizal"
          }
        ]
      }
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.kitsu.app"
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com"
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com"
      }
    ]
  }
};

export default nextConfig;
