import type { NextConfig } from "next";

// A package-lock.json exists in C:\Users\Saeed, so without this Next treats the
// whole home folder as the project root and dev/prod disagree on module paths.
const projectRoot = process.cwd();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: { root: projectRoot },
  outputFileTracingRoot: projectRoot,
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
