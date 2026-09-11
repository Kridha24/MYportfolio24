import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Navbar } from "@/components/navigation/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

function renderWithTheme(ui: React.ReactElement) {
  return render(
    <ThemeProvider attribute="class" defaultTheme="dark">
      {ui}
    </ThemeProvider>
  );
}

describe("Navbar Component", () => {
  it("renders the monogram logo and personal branding", () => {
    renderWithTheme(<Navbar />);
    expect(screen.getByText("MSG")).toBeInTheDocument();
    expect(screen.getByText("Mihir Shekhar Gupta")).toBeInTheDocument();
  });

  it("renders all primary desktop navigation links", () => {
    renderWithTheme(<Navbar />);
    expect(screen.getAllByText("Home").length).toBeGreaterThan(0);
    expect(screen.getAllByText("About").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Experience").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Projects").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Skills").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Contact").length).toBeGreaterThan(0);
  });

  it("renders the resume action button", () => {
    renderWithTheme(<Navbar />);
    expect(screen.getByRole("link", { name: /resume/i })).toBeInTheDocument();
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
