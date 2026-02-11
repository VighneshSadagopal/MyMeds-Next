import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["my-site.ddev.site"], // Allow images from this domain
    remotePatterns: [
      {
        protocol: "https",
        hostname: "my-site.ddev.site",
        pathname: "/sites/default/files/**",
      },
    ],
  },
 };

export default nextConfig;
