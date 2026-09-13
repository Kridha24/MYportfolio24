import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { PROJECTS_DATA } from "@/data/projects";

describe("ProjectCard Component", () => {
  it("renders HomeMind AI as the first flagship project with repository link", () => {
    const homemind = PROJECTS_DATA.find((p) => p.id === "homemind-ai")!;
    expect(PROJECTS_DATA[0].id).toBe("homemind-ai");
    render(<ProjectCard project={homemind} />);

    expect(screen.getByText("HomeMind AI")).toBeInTheDocument();
    expect(screen.getByText(/Intelligent Household Management Platform/i)).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("FastAPI")).toBeInTheDocument();
    expect(screen.getByText("Prisma")).toBeInTheDocument();

    // Link to case study
    const caseStudyLink = screen.getByRole("link", { name: /read full case study/i });
    expect(caseStudyLink).toHaveAttribute("href", "/projects/homemind-ai");

    // Link to repository
    const repoLink = screen.getByRole("link", { name: /source/i });
    expect(repoLink).toHaveAttribute("href", "https://github.com/Kridha24/HomeMind-AI");
    expect(repoLink).toHaveAttribute("target", "_blank");
    expect(repoLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders AI Finance Controller as the second project with repository link", () => {
    const financeController = PROJECTS_DATA.find((p) => p.id === "ai-finance-controller")!;
    expect(PROJECTS_DATA[1].id).toBe("ai-finance-controller");
    render(<ProjectCard project={financeController} />);

    expect(screen.getByText("AI Finance Controller")).toBeInTheDocument();
    expect(screen.getByText(/Multi-Source Financial Reconciliation/i)).toBeInTheDocument();
    expect(screen.getByText("Python")).toBeInTheDocument();
    expect(screen.getByText("FastAPI")).toBeInTheDocument();
    expect(screen.getByText("Pandas")).toBeInTheDocument();
    expect(screen.getByText("SQLite")).toBeInTheDocument();

    // Link to case study
    const caseStudyLink = screen.getByRole("link", { name: /read full case study/i });
    expect(caseStudyLink).toHaveAttribute("href", "/projects/ai-finance-controller");

    // Link to repository
    const repoLink = screen.getByRole("link", { name: /source/i });
    expect(repoLink).toHaveAttribute("href", "https://github.com/Kridha24/razorpay-ai-finance-controller");
    expect(repoLink).toHaveAttribute("target", "_blank");
    expect(repoLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders TRAFFIQ with conceptual pipeline architecture", () => {
    const traffiq = PROJECTS_DATA.find((p) => p.id === "traffiq")!;
    render(<ProjectCard project={traffiq} />);

    expect(screen.getByText("TRAFFIQ")).toBeInTheDocument();
    expect(screen.getByText(/AI-Powered Smart Traffic Management/i)).toBeInTheDocument();
    expect(screen.getByText("YOLOv8")).toBeInTheDocument();
    expect(screen.getByText("FastAPI")).toBeInTheDocument();
    expect(screen.getByText("Conceptual Pipeline Architecture")).toBeInTheDocument();

    // Link to case study
    const caseStudyLink = screen.getByRole("link", { name: /read full case study/i });
    expect(caseStudyLink).toHaveAttribute("href", "/projects/traffiq");
  });

  it("renders BuildEase with dual flow architecture", () => {
    const buildease = PROJECTS_DATA.find((p) => p.id === "buildease")!;
    render(<ProjectCard project={buildease} />);

    expect(screen.getByText("BuildEase")).toBeInTheDocument();
    expect(screen.getByText(/Full-Stack Construction Management Platform/i)).toBeInTheDocument();
    expect(screen.getByText("Socket.IO")).toBeInTheDocument();
    expect(screen.getByText("Real-Time Channel Flow:")).toBeInTheDocument();

    const caseStudyLink = screen.getByRole("link", { name: /read full case study/i });
    expect(caseStudyLink).toHaveAttribute("href", "/projects/buildease");
  });

  it("does not render hash links (#) for pending demo and repo", () => {
    const traffiq = PROJECTS_DATA.find((p) => p.id === "traffiq")!;
    const { container } = render(<ProjectCard project={traffiq} />);

    const hashAnchors = container.querySelectorAll('a[href="#"]');
    expect(hashAnchors.length).toBe(0);

    expect(screen.getByText("Repo Pending")).toBeInTheDocument();
    expect(screen.getByText("Demo Pending")).toBeInTheDocument();
  });
});
