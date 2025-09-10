import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
    turbopack: {
      // Força o Turbopack a usar este projeto como root e silencia o warning
      root: __dirname,
    },
  },
};

export default nextConfig;
