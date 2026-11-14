import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { mkdir } from "node:fs/promises";

for (const width of [390, 768, 1440]) {
  test(`Homepage and project flows at ${width}px`, async ({
    page,
    request,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.setViewportSize({ width, height: width === 390 ? 844 : 1000 });
    const response = await page.goto("/");
    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(/Rohith Pranav Bala/);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "From first ideato real product.",
    );
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator(".hairline-stage svg")).toHaveCount(2);
    await expect(page.locator(".hairline-figure button")).toHaveCount(0);

    // All old public fragment URLs still resolve.
    for (const id of [
      "projects",
      "experience",
      "about",
      "skills",
      "achievements",
      "publications",
      "education",
      "contact",
    ]) {
      await expect(page.locator(`#${id}`)).toHaveCount(1);
    }
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > innerWidth,
    );
    expect(overflow, "No horizontal overflow").toBe(false);
    for (const image of await page.locator("img").all()) {
      if (!(await image.isVisible())) continue;
      await image.scrollIntoViewIfNeeded();
      await expect(image).toHaveJSProperty("complete", true);
      expect(
        await image.evaluate((el) => (el as HTMLImageElement).naturalWidth),
      ).toBeGreaterThan(0);
    }
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(
      results.violations.map((v) => ({
        id: v.id,
        description: v.description,
        nodes: v.nodes.map((n) => n.target),
      })),
    ).toEqual([]);

    await page.evaluate(() => window.scrollTo(0, 0));
    await page.keyboard.press("Tab");
    await expect(
      page.getByRole("link", { name: "Skip to content" }),
    ).toBeFocused();
    const outline = await page
      .getByRole("link", { name: "Skip to content" })
      .evaluate((el) => getComputedStyle(el).outlineStyle);
    expect(outline).not.toBe("none");
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/#main-content$/);
    await page.getByRole("link", { name: "View selected work" }).click();
    await expect(page).toHaveURL(/#projects$/);
    await page
      .getByRole("navigation", { name: "Main navigation" })
      .getByRole("link", { name: "Experience" })
      .click();
    await expect(page).toHaveURL(/#experience$/);
    await expect(page.locator("#experience-proqube")).toContainText("1,000+");

    const resume = await request.get("/Full_Resume.pdf");
    expect(resume.status()).toBe(200);
    expect(resume.headers()["content-type"]).toMatch(/application\/pdf/);
    expect((await resume.body()).subarray(0, 4).toString()).toBe("%PDF");
    await expect(page.locator("a.contact-email")).toHaveAttribute(
      "href",
      "mailto:rohithpranav567@gmail.com",
    );
    await expect(
      page.locator(".contact-links a", { hasText: "LinkedIn" }),
    ).toHaveAttribute("href", "https://www.linkedin.com/in/rohithpranavbala/");
    await expect(
      page.locator('a[href="https://youtube.com/shorts/C6-bpz3jAZQ"]'),
    ).toBeVisible();
    await expect(
      page.locator('a[href="https://youtube.com/shorts/4aXZQ3df3P4"]'),
    ).toBeVisible();

    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    await mkdir("test-results/screenshots", { recursive: true });
    await page.screenshot({
      path: `test-results/screenshots/new-home-${width}.png`,
      fullPage: true,
    });
    await page.screenshot({ path: `test-results/screenshots/new-home-${width}-viewport.png` });

    for (const slug of ["silent", "sourcerer", "promptora", "aidnet"]) {
      const projectResponse = await page.goto(`/projects/${slug}`);
      expect(projectResponse?.status()).toBe(200);
      await expect(page.locator("h1")).toHaveCount(1);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth > innerWidth,
        ),
      ).toBe(false);
      const projectAxe = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect(
        projectAxe.violations.map((v) => ({
          id: v.id,
          nodes: v.nodes.map((n) => n.target),
        })),
      ).toEqual([]);
      if (slug === "silent") {
        const authorize = page.getByRole("button", { name: "04 Authorize" });
        await authorize.focus();
        await page.keyboard.press("Enter");
        await expect(authorize).toHaveAttribute("aria-pressed", "true");
        await expect(page.locator("#recovery-detail")).toContainText(
          "Only after guardian quorum and challenge expiry",
        );
        await expect(page.locator("#recovery-detail")).toContainText(
          "RECOVERY_AUTHORIZED",
        );
        await page.evaluate(() => {
          (document.activeElement as HTMLElement)?.blur();
          window.scrollTo(0, 0);
        });
        await page.screenshot({
          path: `test-results/screenshots/new-silent-${width}.png`,
          fullPage: true,
        });
      }
    }
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    expect(
      await page.evaluate(
        () => getComputedStyle(document.documentElement).scrollBehavior,
      ),
    ).toBe("auto");
    await expect(page.locator(".timeline-entry").first()).toHaveAttribute(
      "data-read",
      "true",
    );
    expect(errors).toEqual([]);
  });
}

test("Metadata, local navigation, and error page", async ({
  page,
  request,
}) => {
  await page.goto("/");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://rohithpranavbala.vercel.app",
  );
  await expect(page.locator('meta[property="og:image"]')).toHaveCount(1);
  const links = await page
    .locator("a")
    .evaluateAll((elements) => [
      ...new Set(
        elements
          .map((el) => el.getAttribute("href")!)
          .filter((href) => href.startsWith("/") && !href.includes("#")),
      ),
    ]);
  for (const link of links)
    expect((await request.get(link)).status(), link).toBe(200);
  expect((await request.get("/robots.txt")).status()).toBe(200);
  expect((await request.get("/sitemap.xml")).status()).toBe(200);
  const og = await request.get("/opengraph-image.png");
  expect(og.status()).toBe(200);
  expect(og.headers()["content-type"]).toMatch(/image\/png/);
  const missing = await page.goto("/not-a-real-project");
  expect(missing?.status()).toBe(404);
  await expect(
    page.getByRole("link", { name: /Back to selected work/ }),
  ).toBeVisible();
});

test("Hairline autoplay respects reduced motion and client navigation", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".hairline-stage svg")).toHaveCount(2);
  await expect(page.locator(".hairline-figure button")).toHaveCount(0);
  for (const name of ["assembly", "fieldnotes"]) {
    const stage = page.locator('[data-figure="' + name + '"]');
    await stage.scrollIntoViewIfNeeded();
    await page.mouse.move(0, 0);
    const read = stage.locator("..").locator("output");
    await expect.poll(() => read.textContent(), { timeout: 15000 }).not.toBe("rest");
    await stage.focus();
  }
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload();
  await expect(page.locator(".hairline-stage svg")).toHaveCount(2);
  await page.waitForTimeout(3500);
  await expect(page.locator(".figure-readout")).toHaveText(["rest", "rest"]);
  await page.goto("/projects/silent");
  await page.getByRole("link", { name: "Back to selected work" }).click();
  await expect(page.locator(".hairline-stage svg")).toHaveCount(2);
  await expect(page.locator('script[src="/figures/portfolio-figures.js"]')).toHaveCount(1);
});

test("Availability, DevRel, deprecated project, and persistent accessible dark theme", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: /Open to work/ })).toBeVisible();
  await expect(page.locator(".availability-badge")).toContainText(
    "Developer Relations",
  );
  await page.getByRole("button", { name: "Toggle dark mode" }).focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  for (const width of [390, 768, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      ),
    ).toBe(false);
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(
      result.violations.map((v) => ({
        id: v.id,
        nodes: v.nodes.map((n) => n.target),
      })),
    ).toEqual([]);
    await page.screenshot({
      path: `test-results/screenshots/dark-home-${width}.png`,
      fullPage: true,
    });
  }
  for (const slug of ["sourcerer", "silent", "promptora", "aidnet"]) {
    await page.goto(`/projects/${slug}`);
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
    if (slug === "sourcerer")
      await expect(page.locator(".project-status")).toContainText(
        "deprecated by ProQube.AI",
      );
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(
      result.violations.map((v) => ({
        id: v.id,
        nodes: v.nodes.map((n) => n.target),
      })),
    ).toEqual([]);
  }
  await page.getByRole("button", { name: "Toggle dark mode" }).click();
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
});
