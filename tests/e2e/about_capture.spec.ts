import { test } from "@playwright/test";
import path from "node:path";
import fs from "node:fs";

test("Capture About section showcase on desktop and mobile", async ({ page }) => {
  const outputDir = path.resolve(
    "/Users/kridha/.gemini/antigravity-ide/brain/3caff3d8-0202-4182-a716-063e40ce8ff1"
  );
  fs.mkdirSync(outputDir, { recursive: true });

  // 1. Desktop Viewport (1440x900)
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("http://localhost:3000/#about", { waitUntil: "networkidle" });
  await page.waitForTimeout(600);

  const aboutSection = page.locator("#about");
  await aboutSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);

  // Capture top of about section (header + highlights)
  await page.screenshot({ path: path.join(outputDir, "showcase_about_desktop.png") });

  // Scroll to Engineering Philosophy & Competencies
  const philosophyHeading = page.getByRole("heading", { name: /How I Approach Engineering/i });
  await philosophyHeading.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(outputDir, "showcase_about_philosophy.png") });

  // Scroll to Leadership Beyond Code & Project Journey & CTA
  const leadershipHeading = page.getByRole("heading", { name: /Leadership Beyond Code/i });
  await leadershipHeading.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(outputDir, "showcase_about_leadership.png") });

  // 2. Mobile Viewport (375x812)
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("http://localhost:3000/#about", { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await aboutSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);

  await page.screenshot({ path: path.join(outputDir, "showcase_about_mobile.png") });

  // Mobile scroll to philosophy
  await philosophyHeading.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(outputDir, "showcase_about_mobile_philosophy.png") });
});
