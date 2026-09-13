import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SkillsSection } from "@/components/sections/SkillsSection";

describe("SkillsSection Component", () => {
  it("renders the technical competencies matrix heading", () => {
    render(<SkillsSection />);

    expect(
      screen.getByRole("heading", {
        name: /Technical Competencies Matrix/i,
        level: 2,
      })
    ).toBeInTheDocument();
  });

  it("renders all skill domains including Tools", () => {
    render(<SkillsSection />);

    expect(screen.getByRole("heading", { name: "Tools", level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Languages", level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Frontend", level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Backend", level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "AI/ML & Computer Vision", level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Databases & Real-Time", level: 3 })).toBeInTheDocument();
  });

  it("renders Docker, Kubernetes, and AWS badges in the Tools domain", () => {
    render(<SkillsSection />);

    expect(screen.getByText("Docker")).toBeInTheDocument();
    expect(screen.getByText("Kubernetes")).toBeInTheDocument();
    expect(screen.getByText("AWS")).toBeInTheDocument();
    expect(screen.getByText("Git")).toBeInTheDocument();
    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByText("Linux")).toBeInTheDocument();
  });
});
