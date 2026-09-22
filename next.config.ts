import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Static HTML export so Cloudflare Pages can serve `out/` with no Worker adapter.
  output: "export",
  trailingSlash: false,
};

export default nextConfig;
