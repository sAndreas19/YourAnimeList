import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "media.kitsu.app"
      }
    ]
  }
};

export default nextConfig;
