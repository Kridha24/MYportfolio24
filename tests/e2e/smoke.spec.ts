import { test, expect } from "@playwright/test";

test.describe("Portfolio E2E Smoke Tests", () => {
  test("Homepage renders hero and core landmarks", async ({ page }) => {
    await page.goto("/");

    // Verify Title
    await expect(page).toHaveTitle(/Mihir Shekhar Gupta/i);

    // Verify Main Headline (h1 is Name, h2 is Role)
    await expect(
      page.getByRole("heading", { name: /Mihir Shekhar Gupta/i, level: 1 })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /Aspiring Software Engineer & AI\/ML Enthusiast/i, level: 2 })
    ).toBeVisible();

    // Verify Availability Badge
    await expect(
      page.getByText(/Available for SDE, Full-Stack & AI\/ML Opportunities/i).first()
    ).toBeVisible();

    // Verify Featured Projects (HomeMind AI first, AI Finance Controller, TRAFFIQ, BuildEase)
    await expect(page.getByText("HomeMind AI").first()).toBeVisible();
    await expect(page.getByText("AI Finance Controller").first()).toBeVisible();
    await expect(page.getByText("TRAFFIQ").first()).toBeVisible();
    await expect(page.getByText("BuildEase").first()).toBeVisible();
  });

  test("All Projects page renders all four projects", async ({ page }) => {
    await page.goto("/projects");
    await expect(page).toHaveTitle(/Projects & Architecture Case Studies/i);
    await expect(page.getByText("HomeMind AI").first()).toBeVisible();
    await expect(page.getByText("AI Finance Controller").first()).toBeVisible();
    await expect(page.getByText("TRAFFIQ").first()).toBeVisible();
    await expect(page.getByText("BuildEase").first()).toBeVisible();
  });

  test("AI Finance Controller Case Study route renders successfully", async ({ page }) => {
    await page.goto("/projects/ai-finance-controller");
    await expect(page).toHaveTitle(/AI Finance Controller Case Study/i);
    await expect(
      page.getByRole("heading", { name: /AI Finance Controller/i, level: 1 })
    ).toBeVisible();
    await expect(page.getByText(/Razorpay Hackathon · Track 04/i).first()).toBeVisible();
    await expect(page.getByText(/27 \/ 27 Automated Tests Passing/i).first()).toBeVisible();
    await expect(page.getByText(/Synthetic Reconciliation Illustration/i).first()).toBeVisible();
    await expect(page.getByText(/Two-Pass Financial Reconciliation Pipeline/i).first()).toBeVisible();

    const repoLink = page.getByRole("link", { name: /view source repository/i });
    await expect(repoLink).toBeVisible();
    await expect(repoLink).toHaveAttribute("href", "https://github.com/Kridha24/razorpay-ai-finance-controller");
    await expect(repoLink).toHaveAttribute("target", "_blank");
  });

  test("HomeMind AI Case Study route renders successfully", async ({ page }) => {
    await page.goto("/projects/homemind-ai");
    await expect(page).toHaveTitle(/HomeMind AI Case Study/i);
    await expect(
      page.getByRole("heading", { name: /HomeMind AI/i, level: 1 })
    ).toBeVisible();
    await expect(page.getByText("Flagship Project").first()).toBeVisible();
    await expect(page.getByText("Product Interface Preview").first()).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /Multi-Service Full-Stack Blueprint/i })
    ).toBeVisible();

    const repoLink = page.getByRole("link", { name: /view github repository/i });
    await expect(repoLink).toBeVisible();
    await expect(repoLink).toHaveAttribute("href", "https://github.com/Kridha24/HomeMind-AI");
    await expect(repoLink).toHaveAttribute("target", "_blank");
  });

  test("TRAFFIQ Case Study route renders successfully", async ({ page }) => {
    await page.goto("/projects/traffiq");
    await expect(page).toHaveTitle(/TRAFFIQ Case Study/i);
    await expect(
      page.getByRole("heading", { name: /Conceptual Pipeline Architecture/i })
    ).toBeVisible();
    await expect(page.getByText("YOLOv8 & OpenCV").first()).toBeVisible();
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

  test("What I'm Learning Now section renders with RAG, LangChain, and architecture graph", async ({ page }) => {
    await page.goto("/#learning");
    await expect(page.getByRole("heading", { name: "What I’m Learning Now" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "RAG & LangChain" })).toBeVisible();
    await expect(page.getByText("RAG Workflow Illustration").first()).toBeVisible();
    await expect(page.getByRole("heading", { name: "How the Complete System Works Together" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Where I Apply These Concepts" })).toBeVisible();
  });
});
