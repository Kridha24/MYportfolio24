import { test, expect } from "@playwright/test";

test.describe("Portfolio E2E Smoke Tests", () => {
  test("Homepage renders hero and core landmarks", async ({ page }) => {
    await page.goto("/");

    // Verify Title
    await expect(page).toHaveTitle(/Mihir Shekhar Gupta/i);

    // Verify Main Headline
    await expect(
      page.getByRole("heading", { name: /I build intelligent systems/i, level: 1 })
    ).toBeVisible();

    // Verify Availability Badge
    await expect(
      page.getByText(/Open to SDE \/ Full-Stack \/ AI internships/i)
    ).toBeVisible();

    // Verify Featured Projects
    await expect(page.getByText("TRAFFIQ")).toBeVisible();
    await expect(page.getByText("BuildEase")).toBeVisible();
  });

  test("All Projects page renders both projects", async ({ page }) => {
    await page.goto("/projects");
    await expect(page).toHaveTitle(/Projects & Architecture Case Studies/i);
    await expect(page.getByText("TRAFFIQ")).toBeVisible();
    await expect(page.getByText("BuildEase")).toBeVisible();
  });

  test("TRAFFIQ Case Study route renders successfully", async ({ page }) => {
    await page.goto("/projects/traffiq");
    await expect(page).toHaveTitle(/TRAFFIQ Case Study/i);
    await expect(
      page.getByRole("heading", { name: /Conceptual Pipeline Architecture/i })
    ).toBeVisible();
    await expect(page.getByText("YOLOv8 & OpenCV")).toBeVisible();
  });

  test("BuildEase Case Study route renders successfully", async ({ page }) => {
    await page.goto("/projects/buildease");
    await expect(page).toHaveTitle(/BuildEase Case Study/i);
    await expect(
      page.getByRole("heading", { name: /Dual-Tier System Architecture/i })
    ).toBeVisible();
    await expect(page.getByText("Socket.IO Server").first()).toBeVisible();
  });

  test("Resume preview page loads with download button", async ({ page }) => {
    await page.goto("/resume");
    await expect(page).toHaveTitle(/Resume/i);
    const downloadLink = page.getByRole("link", { name: /download pdf/i });
    await expect(downloadLink).toBeVisible();
    await expect(downloadLink).toHaveAttribute("download", "Mihir_Shekhar_Gupta_Resume.pdf");
  });
});
