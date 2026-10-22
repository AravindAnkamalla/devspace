import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      "/": ["./data/portfolio.json"],
    },
  },
};

export default nextConfig;
