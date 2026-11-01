import { test, expect } from "@playwright/test";

test.describe("smoke", () => {
  test("home page loads with an h1", async ({ page }) => {
    const response = await page.goto("/");
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toBeVisible();
  });

  test("service detail page loads and shows its title", async ({ page }) => {
    const response = await page.goto("/services/thermal-inspection");
    expect(response?.status()).toBe(200);
    await expect(
      page.getByRole("heading", { level: 1, name: "Thermal Inspection" })
    ).toBeVisible();
  });

  test("city page loads and shows the city name", async ({ page }) => {
    const response = await page.goto("/service-area/bozeman");
    expect(response?.status()).toBe(200);
    await expect(
      page.getByRole("heading", { level: 1, name: "Drone Services in Bozeman, Montana" })
    ).toBeVisible();
  });

  test("government-enterprise page loads", async ({ page }) => {
    const response = await page.goto("/government-enterprise");
    expect(response?.status()).toBe(200);
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "On-call UAS surge capacity, built for public-agency and enterprise procurement.",
      })
    ).toBeVisible();
  });

  test("quote page loads and empty submit surfaces inline validation errors", async ({
    page,
  }) => {
    const response = await page.goto("/quote");
    expect(response?.status()).toBe(200);

    // No validation errors should be visible before any interaction.
    await expect(page.getByText("Please enter your name.")).toHaveCount(0);

    await page.getByRole("button", { name: "Request a Quote" }).click();

    // Client-side validation should block the submit and surface inline
    // errors for each required field, without hitting /api/quote.
    await expect(page.getByText("Please select a service type.")).toBeVisible();
    await expect(page.getByText("Please enter a location.")).toBeVisible();
    await expect(page.getByText("Please select a timeline.")).toBeVisible();
    await expect(
      page.getByText("Please choose private or government/agency.")
    ).toBeVisible();
    await expect(page.getByText("Please enter your name.")).toBeVisible();
    await expect(page.getByText("Please enter your email.")).toBeVisible();
    await expect(
      page.getByText("Please add a few details about the project.")
    ).toBeVisible();

    // Still on the quote page — no success state, no navigation occurred.
    await expect(page).toHaveURL(/\/quote$/);
  });
});
