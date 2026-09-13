import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { AboutSection } from "@/components/sections/AboutSection";

describe("AboutSection Component", () => {
  it("renders the primary heading and supporting statement", () => {
    render(<AboutSection />);

    expect(
      screen.getByRole("heading", {
        name: /I turn ideas into intelligent, practical software\./i,
        level: 2,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/I enjoy working where software engineering, backend systems, and artificial intelligence come together/i)
    ).toBeInTheDocument();
  });

  it("renders all four profile highlights without numeric counters", () => {
    render(<AboutSection />);

    expect(screen.getByText("B.Tech CSE")).toBeInTheDocument();
    expect(screen.getByText("I.K. Gujral Punjab Technical University")).toBeInTheDocument();

    expect(screen.getByText("Practical Experience")).toBeInTheDocument();
    expect(screen.getByText("Full-Stack and AI/ML internships")).toBeInTheDocument();

    expect(screen.getByText("Engineering Focus")).toBeInTheDocument();
    expect(screen.getByText("Backend, full-stack, AI and computer vision")).toBeInTheDocument();

    expect(screen.getByText("Leadership")).toBeInTheDocument();
    expect(screen.getByText("University Cricket Vice-Captain")).toBeInTheDocument();
  });

  it("renders the 4-step engineering philosophy flow", () => {
    render(<AboutSection />);

    expect(
      screen.getByRole("heading", {
        name: /How I Approach Engineering/i,
        level: 3,
      })
    ).toBeInTheDocument();

    expect(screen.getByText("Understand the Problem")).toBeInTheDocument();
    expect(screen.getByText("Design the System")).toBeInTheDocument();
    expect(screen.getByText("Build Responsibly")).toBeInTheDocument();
    expect(screen.getByText("Verify the Result")).toBeInTheDocument();
  });

  it("renders the four competency domains", () => {
    render(<AboutSection />);

    expect(
      screen.getByRole("heading", {
        name: /What I Build/i,
        level: 3,
      })
    ).toBeInTheDocument();

    expect(screen.getByRole("heading", { name: "Software Engineering", level: 4 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Full-Stack Products", level: 4 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "AI & Computer Vision", level: 4 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Backend & Security", level: 4 })).toBeInTheDocument();
  });

  it("renders currently focused on items and project journey links", () => {
    render(<AboutSection />);

    expect(screen.getByText("Currently Focused On")).toBeInTheDocument();
    expect(screen.getByText("Strengthening Data Structures and Algorithms")).toBeInTheDocument();

    expect(screen.getByRole("heading", { name: /Project Journey/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "HomeMind AI", level: 4 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "AI Finance Controller", level: 4 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "TRAFFIQ", level: 4 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "BuildEase", level: 4 })).toBeInTheDocument();
  });

  it("renders leadership beyond code and call-to-action buttons", () => {
    render(<AboutSection />);

    expect(
      screen.getByRole("heading", {
        name: /Leadership Beyond Code/i,
        level: 3,
      })
    ).toBeInTheDocument();

    expect(screen.getByText(/Cricket has taught me lessons that directly influence how I approach engineering/i)).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /Explore My Projects/i })).toHaveAttribute("href", "#projects");
    expect(screen.getByRole("link", { name: /View Resume/i })).toHaveAttribute("href", "/resume");
  });
});
