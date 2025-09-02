import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */


};
// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};


export default nextConfig;
