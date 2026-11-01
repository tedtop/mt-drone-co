import { defineConfig } from "vitest/config";
import path from "path";

// Minimal config: just enough to resolve the project's "@/*" path alias
// (used by src/app/api/quote/route.ts) inside tests.
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
