import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/pages/unsubscribe",
        destination: "https://kglowing.ai/pages/unsubscribe",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
