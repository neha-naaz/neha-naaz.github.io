import type { NextConfig } from "next";

// The site lives at https://neha-naaz.github.io/<repo-name>/, so in production
// every URL needs that prefix. Locally (npm run dev) we keep it empty.
// If you rename the repo, change this one line.
const REPO_NAME = "portfolio";
const basePath = process.env.NODE_ENV === "production" ? `/${REPO_NAME}` : "";

const nextConfig: NextConfig = {
  // Build plain HTML/CSS/JS into the `out` folder so GitHub Pages can serve it.
  output: "export",
  basePath,
  images: { unoptimized: true },
  // Lets plain <a href> links (like the résumé PDF) know about the prefix.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
