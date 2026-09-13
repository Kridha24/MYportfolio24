import { test } from "@playwright/test";
import path from "node:path";
import fs from "node:fs";

test("Capture Cloud & DevOps section showcase on desktop and mobile", async ({ page }) => {
  const outputDir = path.resolve(
    "/Users/kridha/.gemini/antigravity-ide/brain/3caff3d8-0202-4182-a716-063e40ce8ff1"
  );
  fs.mkdirSync(outputDir, { recursive: true });

  // 1. Desktop Viewport (1440x900)
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("http://localhost:3000/#cloud-devops", { waitUntil: "networkidle" });
  await page.waitForTimeout(700);

  const devopsSection = page.locator("#cloud-devops");
  await devopsSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);

  // Capture top (Header + Legend + Pipeline)
  await page.screenshot({ path: path.join(outputDir, "showcase_devops_pipeline.png") });

  // Scroll to Containers & AWS Learning Center
  const containersHeading = page.getByRole("heading", { name: /Containers & Orchestration/i });
  await containersHeading.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(outputDir, "showcase_devops_containers_aws.png") });

  // Scroll to Tools Matrix & Reliability Grid
  const toolsHeading = page.getByRole("heading", { name: /Development & API Tools Matrix/i });
  await toolsHeading.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(outputDir, "showcase_devops_tools_reliability.png") });

  // Scroll to Cloud Roadmap
  const roadmapHeading = page.getByRole("heading", { name: /Cloud Engineering Roadmap/i });
  await roadmapHeading.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(outputDir, "showcase_devops_roadmap.png") });

  // 2. Mobile Viewport (375x812)
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("http://localhost:3000/#cloud-devops", { waitUntil: "networkidle" });
  await page.waitForTimeout(700);
  await devopsSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);

  await page.screenshot({ path: path.join(outputDir, "showcase_devops_mobile_pipeline.png") });

  await containersHeading.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(outputDir, "showcase_devops_mobile_containers.png") });
});
