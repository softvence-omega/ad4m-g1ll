import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static HTML export
  output: "export",
  // Optional: if deploying to a subfolder, uncomment and set this
  // basePath: "/your-subfolder",
  // assetPrefix: "/your-subfolder/",
};

export default nextConfig;
