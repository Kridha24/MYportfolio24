import { test } from "@playwright/test";
import path from "node:path";
import fs from "node:fs";

test("Capture full visual portfolio showcase", async ({ page }) => {
  const outputDir = path.resolve(
    "/Users/kridha/.gemini/antigravity-ide/brain/3caff3d8-0202-4182-a716-063e40ce8ff1"
  );
  fs.mkdirSync(outputDir, { recursive: true });

  // 1. Homepage Desktop Viewport
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.screenshot({ path: path.join(outputDir, "showcase_hero_desktop.png") });
  await page.screenshot({ path: path.join(outputDir, "showcase_hero_dark.png") });

  // 2. Light Theme Toggle
  const themeBtn = page.getByRole("button", { name: /theme/i });
  await themeBtn.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(outputDir, "showcase_hero_light.png") });
  await themeBtn.click();
  await page.waitForTimeout(500);

  // 3. Featured Projects View
  await page.evaluate(() => {
    document.getElementById("projects")?.scrollIntoView();
  });
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(outputDir, "showcase_featured_projects.png") });

  // 4. Individual Project Visuals on Homepage
  // HomeMind AI Card
  const homemindEl = page.locator("text=HomeMind AI").first();
  if (await homemindEl.isVisible()) {
    await homemindEl.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(outputDir, "showcase_homemind_project.png") });
  }

  // AI Finance Controller Card
  const financeEl = page.locator("text=AI Finance Controller").first();
  if (await financeEl.isVisible()) {
    await financeEl.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(outputDir, "showcase_finance_controller_project.png") });
  }

  // TRAFFIQ Card
  const traffiqEl = page.locator("text=TRAFFIQ").first();
  if (await traffiqEl.isVisible()) {
    await traffiqEl.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(outputDir, "showcase_traffiq_project.png") });
  }

  // BuildEase Card
  const buildeaseEl = page.locator("text=BuildEase").first();
  if (await buildeaseEl.isVisible()) {
    await buildeaseEl.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(outputDir, "showcase_buildease_project.png") });
  }

  // 5. About & Competency Matrix
  await page.evaluate(() => {
    document.getElementById("about")?.scrollIntoView();
  });
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(outputDir, "showcase_about_cards.png") });

  // 6. Skills Section
  await page.evaluate(() => {
    document.getElementById("skills")?.scrollIntoView();
  });
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(outputDir, "showcase_skills_matrix.png") });

  // 7. AI Finance Controller Case Study & Interactive Pipeline
  await page.goto("http://localhost:3000/projects/ai-finance-controller", { waitUntil: "networkidle" });
  await page.screenshot({ path: path.join(outputDir, "showcase_finance_controller_case_study.png") });
  
  // Pipeline Visual Capture
  const pipelineEl = page.locator("text=Synthetic Reconciliation Illustration").first();
  if (await pipelineEl.isVisible()) {
    await pipelineEl.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(outputDir, "showcase_pipeline_visual.png") });
  }

  // 8. HomeMind AI Case Study
  await page.goto("http://localhost:3000/projects/homemind-ai", { waitUntil: "networkidle" });
  await page.screenshot({ path: path.join(outputDir, "showcase_homemind_case_study.png") });

  // 9. TRAFFIQ Case Study
  await page.goto("http://localhost:3000/projects/traffiq", { waitUntil: "networkidle" });
  await page.screenshot({ path: path.join(outputDir, "showcase_traffiq_case_study.png") });

  // 10. BuildEase Case Study
  await page.goto("http://localhost:3000/projects/buildease", { waitUntil: "networkidle" });
  await page.screenshot({ path: path.join(outputDir, "showcase_buildease_case_study.png") });

  // 11. Resume Preview
  await page.goto("http://localhost:3000/resume", { waitUntil: "networkidle" });
  await page.screenshot({ path: path.join(outputDir, "showcase_resume_preview.png") });

  // 12. Mobile Viewport (375px)
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.screenshot({ path: path.join(outputDir, "showcase_hero_mobile.png") });
  await page.screenshot({ path: path.join(outputDir, "showcase_mobile_hero.png") });

  // 13. Mobile Projects
  await page.evaluate(() => {
    document.getElementById("projects")?.scrollIntoView();
  });
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(outputDir, "showcase_homemind_card_mobile.png") });
  await page.screenshot({ path: path.join(outputDir, "showcase_finance_controller_mobile.png") });
});
