import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { PROJECTS_DATA } from "@/data/projects";

describe("ProjectCard Component", () => {
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
