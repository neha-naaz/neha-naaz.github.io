import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build plain HTML/CSS/JS into the `out` folder so GitHub Pages can serve it.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
