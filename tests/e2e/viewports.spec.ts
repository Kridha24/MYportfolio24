import { test, expect } from "@playwright/test";

const VIEWPORTS = [
  { width: 320, height: 800, label: "320px (Small Mobile)" },
  { width: 375, height: 812, label: "375px (Standard Mobile)" },
  { width: 430, height: 932, label: "430px (Modern Mobile)" },
  { width: 768, height: 1024, label: "768px (Tablet Portrait)" },
  { width: 1024, height: 768, label: "1024px (Tablet Landscape/Small Desktop)" },
  { width: 1440, height: 900, label: "1440px (Desktop HiDPI)" },
];

const ROUTES = [
  "/",
  "/projects",
  "/projects/homemind-ai",
  "/projects/ai-finance-controller",
  "/projects/traffiq",
  "/projects/buildease",
  "/resume",
];

for (const vp of VIEWPORTS) {
  test.describe(`Viewport ${vp.label}`, () => {
    test.use({ viewport: { width: vp.width, height: vp.height } });

    for (const route of ROUTES) {
      test(`verifies zero horizontal overflow and link integrity on ${route}`, async ({
        page,
      }) => {
        const consoleErrors: string[] = [];
        page.on("console", (msg) => {
          if (msg.type() === "error") consoleErrors.push(msg.text());
        });
        page.on("pageerror", (err) => {
          consoleErrors.push(err.message);
        });

        await page.goto(route, { waitUntil: "networkidle" });

        // Check horizontal overflow: scrollWidth must equal clientWidth within 1px tolerance
        const hasHorizontalScroll = await page.evaluate(() => {
          const documentWidth = document.documentElement.clientWidth;
          const bodyScrollWidth = document.body.scrollWidth;
          const docScrollWidth = document.documentElement.scrollWidth;
          return (
            bodyScrollWidth > documentWidth + 1 ||
            docScrollWidth > documentWidth + 1
          );
        });

        expect(
          hasHorizontalScroll,
          `Route ${route} has horizontal overflow at ${vp.width}px width`
        ).toBeFalsy();

        // Ensure no empty or hash links
        const invalidLinks = await page.evaluate(() => {
          const anchors = Array.from(document.querySelectorAll("a"));
          return anchors
            .map((a) => a.getAttribute("href"))
            .filter((href) => href === "#" || href === "");
        });
        expect(invalidLinks).toHaveLength(0);

        // Ensure console errors are empty (excluding standard Vercel analytics 404s when running locally)
        const relevantErrors = consoleErrors.filter(
          (err) =>
            !err.includes("vercel") &&
            !err.includes("favicon") &&
            !err.includes("Failed to load resource") &&
            !err.includes("ERR_CONNECTION_REFUSED")
        );
        expect(relevantErrors).toHaveLength(0);
      });
    }
  });
}
