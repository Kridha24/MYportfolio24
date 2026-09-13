import { chromium } from "@playwright/test";
import path from "node:path";
import fs from "node:fs";

async function main() {
  const outputDir = path.resolve(
    "/Users/kridha/.gemini/antigravity-ide/brain/3caff3d8-0202-4182-a716-063e40ce8ff1/screenshots"
  );
  fs.mkdirSync(outputDir, { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    colorScheme: "dark",
  });
  const page = await context.newPage();

  // 1. Homepage Hero & Telemetry
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.screenshot({ path: path.join(outputDir, "01_hero_dashboard.png") });

  // 2. Homepage Full View
  await page.screenshot({
    path: path.join(outputDir, "02_homepage_full.png"),
    fullPage: true,
  });

  // 3. Light Theme
  const themeBtn = page.getByRole("button", { name: /theme/i });
  await themeBtn.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(outputDir, "03_hero_light_mode.png") });
  // toggle back
  await themeBtn.click();
  await page.waitForTimeout(500);

  // 4. TRAFFIQ Case Study
  await page.goto("http://localhost:3000/projects/traffiq", {
    waitUntil: "networkidle",
  });
  await page.screenshot({
    path: path.join(outputDir, "04_traffiq_case_study.png"),
    fullPage: true,
  });

  // 5. BuildEase Case Study
  await page.goto("http://localhost:3000/projects/buildease", {
    waitUntil: "networkidle",
  });
  await page.screenshot({
    path: path.join(outputDir, "05_buildease_case_study.png"),
    fullPage: true,
  });

  // 6. Resume Preview Page
  await page.goto("http://localhost:3000/resume", { waitUntil: "networkidle" });
  await page.screenshot({
    path: path.join(outputDir, "06_resume_preview.png"),
    fullPage: true,
  });

  // 7. Mobile Viewport (375px)
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.screenshot({
    path: path.join(outputDir, "07_mobile_view.png"),
    fullPage: true,
  });

  await browser.close();
  console.log("Screenshots captured successfully in:", outputDir);
}

main().catch((err) => {
  console.error("Screenshot error:", err);
  process.exit(1);
});
