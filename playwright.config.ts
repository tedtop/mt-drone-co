import { defineConfig, devices } from "@playwright/test";

const PORT = 4310;
const baseURL = `http://127.0.0.1:${PORT}`;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: "list",
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  // This repo's devDependency is pinned to the same Playwright version
  // (1.61.0) as the browser already cached on this machine, so the default
  // executable resolution finds it without re-downloading. If that version
  // pin ever drifts from what's installed, launch Chromium explicitly via
  // `use: { launchOptions: { executablePath: '/opt/pw-browsers/chromium' } }`.
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        launchOptions: {
          args: ["--no-sandbox", "--disable-setuid-sandbox"],
        },
      },
    },
  ],
  webServer: {
    command: `npm run build && npm run start -- -p ${PORT}`,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
});
