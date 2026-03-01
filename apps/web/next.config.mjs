import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@atiq/sdk", "@atiq/shared"],
  // Explicitly set the monorepo root for workspace resolution
  outputFileTracingRoot: path.join(__dirname, "../../"),
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8787",
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@atiq/shared": path.resolve(__dirname, "../../packages/shared/src/index.ts"),
      "@atiq/sdk": path.resolve(__dirname, "../../packages/sdk/src/index.ts"),
    };
    return config;
  },
};

export default nextConfig;
