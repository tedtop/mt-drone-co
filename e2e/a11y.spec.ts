import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

// One representative page per template type (home, service detail, city
// detail, long-form static page, form page) — not every route, since the
// templates repeat. Scans against WCAG 2 A/AA rule sets.
const pages = [
  { name: "home", path: "/" },
  { name: "service detail", path: "/services/thermal-inspection" },
  { name: "city detail", path: "/service-area/bozeman" },
  { name: "long-form static (government/enterprise)", path: "/government-enterprise" },
  { name: "long-form static (safety/compliance)", path: "/safety-compliance" },
  { name: "form page (quote)", path: "/quote" },
];

test.describe("accessibility (axe, WCAG2A/AA)", () => {
  for (const { name, path } of pages) {
    test(`${name} (${path}) has no automated a11y violations`, async ({ page }) => {
      await page.goto(path);
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa"])
        .analyze();

      expect(
        results.violations,
        JSON.stringify(results.violations, null, 2)
      ).toEqual([]);
    });
  }
});
