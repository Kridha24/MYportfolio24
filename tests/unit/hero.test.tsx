import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { HeroSection } from "@/components/sections/HeroSection";

describe("HeroSection Component", () => {
  it("renders Mihir Shekhar Gupta as the primary h1 heading", () => {
    render(<HeroSection />);

    const h1Heading = screen.getByRole("heading", {
      name: /Mihir Shekhar Gupta/i,
      level: 1,
    });
    expect(h1Heading).toBeInTheDocument();

    // Verify there is only one h1 on the page
    const allH1s = screen.getAllByRole("heading", { level: 1 });
    expect(allH1s).toHaveLength(1);
  });

  it("renders the understated personal introduction eyebrow", () => {
    render(<HeroSection />);
    expect(screen.getByText("Hi, I’m")).toBeInTheDocument();
  });

  it("renders the professional title as an h2 immediately below the name", () => {
    render(<HeroSection />);

    const h2Title = screen.getByRole("heading", {
      name: /Aspiring Software Engineer & AI\/ML Enthusiast/i,
      level: 2,
    });
    expect(h2Title).toBeInTheDocument();
  });

  it("renders the exact short value proposition description", () => {
    render(<HeroSection />);

    expect(
      screen.getByText(
        /I build reliable full-stack applications, backend systems, and AI-powered solutions that address practical problems through thoughtful architecture, secure implementation, and maintainable code\./i
      )
    ).toBeInTheDocument();
  });

  it("renders the availability status badge with non-fabricated wording", () => {
    render(<HeroSection />);

    expect(
      screen.getByText("Available for SDE, Full-Stack & AI/ML Opportunities")
    ).toBeInTheDocument();

    // Ensure prohibited claims are absent
    expect(screen.queryByText(/Live/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/System Online/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Operational/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Available 24\/7/i)).not.toBeInTheDocument();
  });

  it("renders the primary View My Work and secondary Download Resume CTA buttons", () => {
    render(<HeroSection />);

    const viewWorkBtn = screen.getByRole("link", { name: /View My Work/i });
    expect(viewWorkBtn).toBeInTheDocument();
    expect(viewWorkBtn).toHaveAttribute("href", "#projects");

    const resumeBtn = screen.getByRole("link", { name: /Download Resume/i });
    expect(resumeBtn).toBeInTheDocument();
    expect(resumeBtn).toHaveAttribute("href", "/resume/Mihir_Shekhar_Gupta_Resume.pdf");
    expect(resumeBtn).toHaveAttribute("download", "Mihir_Shekhar_Gupta_Resume.pdf");
  });

  it("renders clean social profile links without mechanical headers or malformed text", () => {
    render(<HeroSection />);

    // Verify mechanical header is removed
    expect(screen.queryByText(/Verified Profiles & Channels/i)).not.toBeInTheDocument();

    // Verify LinkedIn
    const linkedinLink = screen.getByRole("link", { name: /LinkedIn profile of Mihir Shekhar Gupta/i });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/in/mihir-shekhar-gupta-83309a2b1/");
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");

    // Verify GitHub
    const githubLink = screen.getByRole("link", { name: /GitHub profile of Mihir Shekhar Gupta/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://github.com/Kridha24");
    expect(githubLink).toHaveAttribute("target", "_blank");

    // Verify LeetCode
    const leetcodeLink = screen.getByRole("link", { name: /LeetCode profile of Mihir Shekhar Gupta/i });
    expect(leetcodeLink).toBeInTheDocument();
    expect(leetcodeLink).toHaveAttribute("href", "https://leetcode.com/u/kridha_ms_24/");

    // Verify Email
    const emailLink = screen.getByRole("link", { name: /Send direct email to Mihir Shekhar Gupta/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", "mailto:mihirshekhar887@gmail.com");
    expect(emailLink).not.toHaveAttribute("target"); // Same browsing context

    // Ensure no malformed svg prefixes
    expect(screen.queryByText(/svgLinkedIn/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/svgGitHub/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/svgEmail/i)).not.toBeInTheDocument();
  });

  it("renders the supporting credibility strip with 4 qualitative items", () => {
    render(<HeroSection />);

    expect(screen.getByText("B.Tech CSE")).toBeInTheDocument();
    expect(screen.getByText("2 Internships")).toBeInTheDocument();
    expect(screen.getByText("AI + Full-Stack Projects")).toBeInTheDocument();
    expect(screen.getByText("University Cricket Vice-Captain")).toBeInTheDocument();
  });

  it("renders the engineering visual with monogram, location and technology chips", () => {
    render(<HeroSection />);

    expect(screen.getAllByText("MSG").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Mohali, Punjab, India").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Python").length).toBeGreaterThan(0);
    expect(screen.getAllByText("React").length).toBeGreaterThan(0);
    expect(screen.getAllByText("FastAPI").length).toBeGreaterThan(0);
    expect(screen.getAllByText("AI/ML").length).toBeGreaterThan(0);
    expect(screen.getAllByText("TypeScript").length).toBeGreaterThan(0);
  });
});
