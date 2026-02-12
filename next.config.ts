import path from 'node:path';
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [100, 75],
  },
  turbopack: {
    root: __dirname,
    resolveAlias: {
      tailwindcss: path.join(__dirname, 'node_modules/tailwindcss'),
    },
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      tailwindcss: path.join(__dirname, 'node_modules/tailwindcss'),
    };

    return config;
  },
};

export default nextConfig;
