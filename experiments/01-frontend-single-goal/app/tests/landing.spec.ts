import { expect, test } from "@playwright/test";
import { mkdirSync } from "node:fs";
import path from "node:path";

const screenshotDir = path.resolve(__dirname, "../../screenshots");
const themeModes = ["light", "dark"] as const;
const publicRouteMap = [
  "/",
  "/products",
  "/products/payments",
  "/products/billing",
  "/products/agentic-commerce",
  "/products/connect",
  "/products/issuing",
  "/products/treasury",
  "/products/radar",
  "/solutions",
  "/solutions/enterprises",
  "/solutions/startups",
  "/solutions/marketplaces",
  "/solutions/saas",
  "/solutions/retail",
  "/solutions/ai-companies",
  "/developers",
  "/developers/documentation",
  "/developers/api-reference",
  "/developers/sdks",
  "/developers/components",
  "/developers/no-code",
  "/developers/status",
  "/developers/changelog",
  "/developers/support",
  "/resources",
  "/resources/annual-letter",
  "/resources/product-update",
  "/resources/platform-guide",
  "/resources/hearth-retail",
  "/resources/atlas-market",
  "/resources/pulse-ai",
  "/resources/latest-report",
  "/pricing",
  "/company",
  "/company/customers",
  "/company/partners",
  "/company/newsroom",
  "/company/careers",
  "/company/contact",
  "/company/privacy",
  "/login",
  "/signup",
] as const;
const protectedRouteMap = ["/dashboard", "/dashboard/payments", "/dashboard/risk", "/dashboard/billing"] as const;
const productCardRoutes = [
  "/products/payments",
  "/products/billing",
  "/products/agentic-commerce",
  "/products/issuing",
  "/products/treasury",
  "/products/connect",
] as const;

test.beforeAll(() => {
  mkdirSync(screenshotDir, { recursive: true });
});

for (const themeMode of themeModes) {
  test(`captures a responsive local visual audit in ${themeMode} mode`, async ({ page }, testInfo) => {
    await page.addInitScript((mode) => {
      window.localStorage.removeItem("zoro-auth-session");
      window.localStorage.setItem("zoro-theme", mode);
    }, themeMode);

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

    const isDark = await page.evaluate(() => document.documentElement.classList.contains("dark"));
    expect(isDark).toBe(themeMode === "dark");

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
      path: path.join(screenshotDir, `local-${themeMode}-${testInfo.project.name}.png`),
      fullPage: true,
    });

    const toggle = page.locator('button[aria-label="Toggle color theme"]:visible').first();

    await expect(toggle).toBeVisible();
    await toggle.click();

    const toggledIsDark = await page.evaluate(() => document.documentElement.classList.contains("dark"));
    expect(toggledIsDark).toBe(themeMode === "light");
  });
}

test("supports keyboard navigation and keyboard theme toggling", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "Keyboard navigation is covered on desktop; mobile coverage focuses on responsive rendering.");

  await page.addInitScript(() => {
    window.localStorage.removeItem("zoro-auth-session");
    window.localStorage.setItem("zoro-theme", "light");
  });

  await page.goto("/");

  const skipLink = page.getByRole("link", { name: "Skip to content" });
  await page.keyboard.press("Tab");
  await expect(skipLink).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#main-content$/);

  const productsLink = page
    .getByRole("navigation", { name: /Primary navigation/i })
    .getByRole("link", { name: "Products" });
  await productsLink.focus();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/products$/);

  const toggle = page.locator('button[aria-label="Toggle color theme"]:visible').first();
  await toggle.focus();
  await page.keyboard.press("Enter");
  await expect
    .poll(() => page.evaluate(() => document.documentElement.classList.contains("dark")))
    .toBe(true);
});

test("crawls public route map and verifies homepage link destinations", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "The full route crawl runs on desktop; mobile coverage samples the responsive detail layouts.");
  test.setTimeout(120_000);

  await page.addInitScript(() => {
    window.localStorage.removeItem("zoro-auth-session");
    window.localStorage.setItem("zoro-theme", "light");
  });

  await page.goto("/");

  const deadAnchors = await page.locator("a[href]").evaluateAll((anchors) =>
    anchors
      .map((anchor) => ({
        href: anchor.getAttribute("href") || "",
        label: anchor.textContent?.trim().replace(/\s+/g, " ") || "",
      }))
      .filter(({ href }) => href === "" || href === "#" || href.startsWith("javascript:")),
  );
  expect(deadAnchors).toEqual([]);

  const productLinks = await page.getByTestId("product-card-link").evaluateAll((anchors) =>
    anchors.map((anchor) => new URL((anchor as HTMLAnchorElement).href).pathname),
  );
  expect(productLinks).toEqual(productCardRoutes);
  expect(new Set(productLinks).size).toBe(productLinks.length);

  const footerLinks = await page.locator("footer a[href]").evaluateAll((anchors) =>
    anchors.map((anchor) => ({
      label: anchor.textContent?.trim().replace(/\s+/g, " ") || "",
      href: new URL((anchor as HTMLAnchorElement).href).pathname,
    })),
  );
  const footerHrefs = footerLinks.map(({ href }) => href);
  expect(new Set(footerHrefs).size).toBe(footerHrefs.length);
  expect(footerHrefs).toEqual(
    expect.arrayContaining([
      "/products/payments",
      "/products/billing",
      "/products/connect",
      "/products/issuing",
      "/products/treasury",
      "/products/radar",
      "/solutions/enterprises",
      "/solutions/startups",
      "/solutions/marketplaces",
      "/solutions/saas",
      "/solutions/retail",
      "/solutions/ai-companies",
      "/developers/documentation",
      "/developers/api-reference",
      "/developers/sdks",
      "/developers/status",
      "/developers/changelog",
      "/developers/support",
      "/company/customers",
      "/company/partners",
      "/company/newsroom",
      "/company/careers",
      "/company/contact",
      "/company/privacy",
    ]),
  );

  for (const route of publicRouteMap) {
    const response = await page.goto(route);
    expect(response?.status(), route).toBeLessThan(400);
    await expect(page.locator("#main-content")).toBeVisible();
    await expect(page.getByText(/This Zoro page does not exist/i)).toHaveCount(0);
    expect((await page.title()).length, route).toBeGreaterThan(5);

    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
    );
    expect(hasHorizontalOverflow, route).toBe(false);
  }
});

test("renders representative detail routes on mobile without layout overflow", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "Representative detail-route responsive coverage runs on mobile.");

  for (const route of [
    "/products/payments",
    "/solutions/marketplaces",
    "/developers/documentation",
    "/resources/platform-guide",
    "/company/contact",
  ]) {
    await page.goto(route);
    await expect(page.locator("#main-content")).toBeVisible();
    await expect(page.getByRole("heading").first()).toBeVisible();

    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
    );
    expect(hasHorizontalOverflow, route).toBe(false);
  }
});

test("navigates marketing routes and completes the auth flow", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "Full auth flow is covered on desktop; responsive rendering is covered separately.");

  await page.addInitScript(() => {
    window.localStorage.removeItem("zoro-auth-session");
    window.localStorage.setItem("zoro-theme", "light");
  });

  await page.goto("/");

  const routeChecks = [
    {
      label: "Products",
      path: "/products",
      heading: /One connected suite for every way you collect/i,
    },
    {
      label: "Solutions",
      path: "/solutions",
      heading: /Flexible infrastructure for enterprises/i,
    },
    {
      label: "Developers",
      path: "/developers",
      heading: /APIs, components, and observability/i,
    },
    {
      label: "Resources",
      path: "/resources",
      heading: /Guides, reports, and operating playbooks/i,
    },
    {
      label: "Pricing",
      path: "/pricing",
      heading: /Transparent packages that scale/i,
    },
  ];

  for (const route of routeChecks) {
    await page
      .getByRole("navigation", { name: /Primary navigation/i })
      .getByRole("link", { name: route.label })
      .click();
    await expect(page).toHaveURL(new RegExp(`${route.path}$`));
    await expect(page.getByRole("heading", { name: route.heading })).toBeVisible();
    await page.screenshot({
      path: path.join(screenshotDir, `route-${route.label.toLowerCase()}-desktop.png`),
      fullPage: true,
    });
  }

  for (const route of protectedRouteMap) {
    await page.goto(route);
    await expect(page).toHaveURL(new RegExp(`/login\\?next=${encodeURIComponent(route)}`));
  }
  await page.goto("/dashboard");
  await expect(page).toHaveURL(/\/login\?next=%2Fdashboard/);
  await expect(page.getByRole("heading", { name: /Sign in to your Zoro workspace/i })).toBeVisible();

  await page.getByRole("button", { name: "Sign in" }).click();
  await expect(page.getByText("Enter a valid work email.")).toBeVisible();
  await expect(page.getByText("Use at least 8 characters.")).toBeVisible();

  await page.getByLabel("Work email").fill("error@example.com");
  await page.getByLabel("Password").fill("password123");
  await page.getByRole("button", { name: "Sign in" }).click();
  await expect(page.getByText(/could not complete the simulated auth request/i)).toBeVisible();

  await page.getByLabel("Work email").fill("pilot@example.com");
  await page.getByLabel("Password").fill("password123");
  await page.getByRole("button", { name: "Sign in" }).click();
  await expect(page).toHaveURL(/\/dashboard$/);
  await expect(page.getByRole("heading", { name: /Welcome back, Pilot/i })).toBeVisible();
  await expect(page.getByText("Signed in as pilot@example.com")).toBeVisible();
  await expect(page.getByText(/Dashboard session authenticated/i)).toBeVisible();
  await page.screenshot({
    path: path.join(screenshotDir, "dashboard-authenticated-desktop.png"),
    fullPage: true,
  });

  await page.getByRole("link", { name: "View details" }).first().click();
  await expect(page).toHaveURL(/\/dashboard\/payments$/);
  await expect(page.getByRole("heading", { name: /Authenticated payment activity/i })).toBeVisible();
  await page.getByRole("link", { name: /Risk/i }).click();
  await expect(page.getByRole("heading", { name: /Authenticated risk reviews/i })).toBeVisible();

  await page.getByRole("button", { name: "Log out" }).first().click();
  await expect(page).toHaveURL(/\/login(?:\?next=.*)?$/);
  await expect(page.getByRole("heading", { name: /Sign in to your Zoro workspace/i })).toBeVisible();

  await page.goto("/signup");
  await page.getByRole("button", { name: "Create account" }).click();
  await expect(page.getByText("Enter your full name.")).toBeVisible();
  await expect(page.getByText("Enter a company name.")).toBeVisible();

  await page.getByLabel("Full name").fill("Mira Chen");
  await page.getByLabel("Company").fill("Northstar Labs");
  await page.getByLabel("Work email").fill("mira@northstar.example");
  await page.getByLabel("Password", { exact: true }).fill("password123");
  await page.getByLabel("Confirm password").fill("password124");
  await page.getByRole("button", { name: "Create account" }).click();
  await expect(page.getByText("Passwords must match.")).toBeVisible();

  await page.getByLabel("Confirm password").fill("password123");
  await page.getByRole("button", { name: "Create account" }).click();
  await expect(page).toHaveURL(/\/dashboard$/);
  await expect(page.getByRole("heading", { name: /Welcome back, Mira Chen/i })).toBeVisible();
  await expect(page.getByText(/Northstar Labs/i)).toBeVisible();
});

test("shows a meaningful 404 route", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "404 handling is route-level and only needs one browser project.");

  const response = await page.goto("/missing-route");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: /This Zoro page does not exist/i })).toBeVisible();
  await expect(page.getByRole("link", { name: "Go home" })).toHaveAttribute("href", "/");
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
