import { test, expect } from "@playwright/test";

for (const theme of ["light", "dark"] as const) {
  test(`Figure details remain visible in ${theme} mode`, async ({ page }) => {
    await page.emulateMedia({ colorScheme: theme, reducedMotion: "reduce" });
    await page.goto("/");
    await expect(page.locator(".hairline-stage svg")).toHaveCount(2);
    await page.evaluate(() => document.fonts.ready);
    for (const width of [390, 768, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      for (const name of ["assembly", "fieldnotes"]) {
        const figure = page.locator(`figure:has([data-figure="${name}"])`);

        // Measure rendered SVG colors, including the faintest inactive details.
        const contrast = await figure.locator(".hairline-stage > svg").evaluate((svg) => {
          const luminance = (color: string) => {
            const rgb = color.match(/[\d.]+/g)!.slice(0, 3).map(Number).map(v => {
              const c = v / 255;
              return c <= .04045 ? c / 12.92 : ((c + .055) / 1.055) ** 2.4;
            });
            return rgb[0] * .2126 + rgb[1] * .7152 + rgb[2] * .0722;
          };
          const paper = luminance(getComputedStyle(svg.querySelector(".sil")!).fill);
          return [...svg.querySelectorAll("path")].map(path => {
            const ink = luminance(getComputedStyle(path).stroke);
            return (Math.max(paper, ink) + .05) / (Math.min(paper, ink) + .05);
          });
        });
        expect(Math.min(...contrast), `${name} strokes at ${width}px`).toBeGreaterThanOrEqual(3);
        await figure.screenshot({ path: `test-results/screenshots/figure-${name}-${theme}-${width}.png` });
        const stage = figure.locator(".hairline-stage");
        await stage.hover({ position: name === "assembly" ? { x: 160, y: 150 } : { x: 155, y: 160 } });

        if (width === 1440)
          await figure.screenshot({ path: `test-results/screenshots/figure-${name}-${theme}-open.png` });
      }
    }
  });
}