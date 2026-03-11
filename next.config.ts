import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/kolosi",
  assetPrefix: "/kolosi/",
};

export default nextConfig;
