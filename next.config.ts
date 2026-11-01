import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Disabled: this is a static-first marketing site and doesn't need the
  // experimental Cache Components / partial prefetch dynamic-IO tracking,
  // which otherwise flags ordinary build-time values as "unstable".
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
