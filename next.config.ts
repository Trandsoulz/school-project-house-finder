import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["apiv1.hostel.ng"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
