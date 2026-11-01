import { defineConfig, configDefaults } from "vitest/config";
import path from "path";

// Minimal config: just enough to resolve the project's "@/*" path alias
// (used by src/app/api/quote/route.ts) inside tests, and to keep this unit
// test runner from also trying (and failing) to collect the Playwright
// e2e specs under e2e/, which use a different test API.
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    exclude: [...configDefaults.exclude, "e2e/**"],
  },
});
