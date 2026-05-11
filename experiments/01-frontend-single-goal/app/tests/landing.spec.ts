import { expect, test } from "@playwright/test";
import { mkdirSync } from "node:fs";
import path from "node:path";

const screenshotDir = path.resolve(__dirname, "../../screenshots");

test.beforeAll(() => {
  mkdirSync(screenshotDir, { recursive: true });
});

test("captures a responsive local visual audit", async ({ page }, testInfo) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: /Revenue infrastructure for ambitious businesses/i,
    }),
  ).toBeVisible();
  await expect(page.getByText(/Flexible solutions/i)).toBeVisible();
  await expect(page.getByText(/Global commerce/i)).toBeVisible();
  await expect(page.getByText(/Developer platform/i)).toBeVisible();
  await expect(page.getByText(/Ready to get started/i)).toBeVisible();

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
  );
  expect(hasHorizontalOverflow).toBe(false);

  const heroBox = await page
    .getByRole("heading", {
      name: /Revenue infrastructure for ambitious businesses/i,
    })
    .boundingBox();
  expect(heroBox?.width ?? 0).toBeGreaterThan(250);

  await page.screenshot({
    path: path.join(screenshotDir, `local-${testInfo.project.name}.png`),
    fullPage: true,
  });
});

test("captures the Stripe reference when a reference URL is provided", async ({ page }, testInfo) => {
  test.skip(!process.env.REFERENCE_URL, "Set REFERENCE_URL to capture the live reference page.");

  await page.goto(process.env.REFERENCE_URL!, {
    waitUntil: "domcontentloaded",
    timeout: 60_000,
  });
  await expect(page.getByTestId("homepage-hero-title")).toBeVisible({
    timeout: 20_000,
  });

  await page.screenshot({
    path: path.join(screenshotDir, `reference-${testInfo.project.name}.png`),
    fullPage: true,
  });
});
