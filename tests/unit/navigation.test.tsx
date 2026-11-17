import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { ThemeProvider } from "@/components/theme-provider";

function renderWithTheme(ui: React.ReactElement) {
  return render(
    <ThemeProvider attribute="class" defaultTheme="dark">
      {ui}
    </ThemeProvider>
  );
}

describe("Navbar Component", () => {
  it("renders the profile avatar and personal branding", () => {
    renderWithTheme(<Navbar />);
    expect(screen.getAllByAltText("Mihir Shekhar Gupta").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Mihir Shekhar Gupta").length).toBeGreaterThan(0);
  });

  it("renders all primary desktop navigation links without DevOps", () => {
    renderWithTheme(<Navbar />);
    expect(screen.getAllByText("Home").length).toBeGreaterThan(0);
    expect(screen.getAllByText("About").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Experience").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Projects").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Skills").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Learning").length).toBeGreaterThan(0);
    expect(screen.queryByText("DevOps")).not.toBeInTheDocument();
    expect(screen.getAllByText("Contact").length).toBeGreaterThan(0);
  });

  it("renders the resume action button", () => {
    renderWithTheme(<Navbar />);
    expect(screen.getAllByRole("link", { name: /resume/i }).length).toBeGreaterThan(0);
  });

  it("toggles mobile menu when hamburger button is clicked", () => {
    renderWithTheme(<Navbar />);
    const menuButton = screen.getByRole("button", { name: /open menu/i });
    expect(menuButton).toBeInTheDocument();

    fireEvent.click(menuButton);
    expect(screen.getByRole("button", { name: /close menu/i })).toBeInTheDocument();
    expect(screen.getByText("All Projects & Case Studies")).toBeInTheDocument();
  });
});

describe("Footer Component", () => {
  it("renders active social link to GitHub profile", () => {
    renderWithTheme(<Footer />);
    const githubLink = screen.getByRole("link", { name: /github profile/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://github.com/Kridha24");
  });
});
