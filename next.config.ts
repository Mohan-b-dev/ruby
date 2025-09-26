import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Example existing config
  images: {
    domains: ["images.unsplash.com"],
  },
  /* other config options here */
};

export default nextConfig;
