import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { CloudDevOpsSection } from "@/components/sections/CloudDevOpsSection";

describe("CloudDevOpsSection Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the primary section heading and descriptive copy", () => {
    render(<CloudDevOpsSection />);

    expect(
      screen.getByRole("heading", {
        name: /Cloud, DevOps & Engineering Toolkit/i,
        level: 2,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/INFRASTRUCTURE & RELIABILITY \/\/ 05/i)
    ).toBeInTheDocument();
  });

  it("renders the 4-tier transparent proficiency framework legend", () => {
    render(<CloudDevOpsSection />);

    expect(
      screen.getByText(/Interview-Defensible Proficiency Framework \(No Arbitrary % Bars\)/i)
    ).toBeInTheDocument();

    expect(screen.getAllByText("Core").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Hands-On").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Foundational").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Currently Learning").length).toBeGreaterThan(0);
  });

  it("renders the central animated deployment pipeline with interactive controls", () => {
    render(<CloudDevOpsSection />);

    expect(
      screen.getByRole("heading", {
        name: /Continuous Delivery & Deployment Topology/i,
        level: 3,
      })
    ).toBeInTheDocument();

    // Verify play/pause toggle button
    const pauseButton = screen.getByRole("button", { name: /pause pipeline animation/i });
    expect(pauseButton).toBeInTheDocument();

    fireEvent.click(pauseButton);
    expect(
      screen.getByRole("button", { name: /play pipeline animation/i })
    ).toBeInTheDocument();

    // Verify pipeline steps exist
    expect(screen.getAllByText("Source Code").length).toBeGreaterThan(0);
    expect(screen.getAllByText("CI Validation").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Docker Image").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Container Deployment").length).toBeGreaterThan(0);

    // Clicking a step node switches active phase
    const buildStepBtn = screen.getByRole("button", { name: /03 CI Validation/i });
    fireEvent.click(buildStepBtn);
    expect(screen.getByText(/ACTIVE PHASE \/\/ STEP 03/i)).toBeInTheDocument();
  });

  it("renders Containers & Orchestration with interview-defensible status tags", () => {
    render(<CloudDevOpsSection />);

    expect(
      screen.getByRole("heading", {
        name: /Containers & Orchestration/i,
        level: 3,
      })
    ).toBeInTheDocument();

    // Docker and Docker Compose
    expect(screen.getAllByRole("heading", { name: "Docker", level: 4 }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("heading", { name: "Docker Compose", level: 4 }).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/HomeMind AI • AI Finance Controller/i).length).toBeGreaterThan(0);

    // Kubernetes as Currently Learning
    expect(screen.getByRole("heading", { name: "Kubernetes", level: 4 })).toBeInTheDocument();
    expect(screen.getByText("Concepts Being Learned:")).toBeInTheDocument();
  });

  it("renders AWS Learning Center and supports category tab switching", () => {
    render(<CloudDevOpsSection />);

    expect(
      screen.getByRole("heading", {
        name: "Amazon Web Services (AWS)",
        level: 3,
      })
    ).toBeInTheDocument();

    // Default tab is Compute (EC2, Lambda, ECS, EKS)
    expect(screen.getByText("EC2")).toBeInTheDocument();

    // Click Storage tab
    const storageTab = screen.getByRole("button", { name: "Storage" });
    fireEvent.click(storageTab);
    expect(screen.getByText("S3")).toBeInTheDocument();
    expect(screen.getByText("EBS")).toBeInTheDocument();
  });

  it("filters tools matrix by search query and category", () => {
    render(<CloudDevOpsSection />);

    expect(
      screen.getByRole("heading", {
        name: /Development & API Tools Matrix/i,
        level: 3,
      })
    ).toBeInTheDocument();

    const searchInput = screen.getByLabelText(/search developer tools/i);
    expect(searchInput).toBeInTheDocument();

    // Search for a specific tool
    fireEvent.change(searchInput, { target: { value: "Postman" } });
    expect(screen.getByText("Postman")).toBeInTheDocument();
    expect(screen.queryByText("Prisma ORM")).not.toBeInTheDocument();

    // Reset search
    fireEvent.change(searchInput, { target: { value: "" } });

    // Filter by category
    const dbToolsBtn = screen.getByRole("button", { name: "Database Tools" });
    fireEvent.click(dbToolsBtn);
    expect(screen.getByText("Prisma ORM")).toBeInTheDocument();
  });

  it("renders the 4-card reliability grid (Testing, CI/CD, Security, Observability)", () => {
    render(<CloudDevOpsSection />);

    expect(
      screen.getByRole("heading", {
        name: /Testing, Security & Observability/i,
        level: 3,
      })
    ).toBeInTheDocument();

    expect(screen.getByRole("heading", { name: "Testing & Code Quality", level: 4 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Continuous Integration & Delivery \(CI\/CD\)/i, level: 4 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Security-Conscious Engineering", level: 4 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Observability & Reliability", level: 4 })).toBeInTheDocument();
  });

  it("renders the Cloud Engineering Roadmap with milestone statuses", () => {
    render(<CloudDevOpsSection />);

    expect(
      screen.getByRole("heading", {
        name: "Cloud Engineering Roadmap",
        level: 3,
      })
    ).toBeInTheDocument();

    expect(screen.getByText(/Containerize a full-stack application with Docker/i)).toBeInTheDocument();
    expect(screen.getByText("Completed")).toBeInTheDocument();
    expect(screen.getByText(/Deploy a Docker application on AWS/i)).toBeInTheDocument();
    expect(screen.getByText("Next Milestone")).toBeInTheDocument();
  });
});
