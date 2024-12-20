import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // (optional) Set your desired output configuration
  distDir:"build",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
