import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { ThemeProvider } from "@/components/theme-provider";

describe("ThemeToggle Component", () => {
  it("renders accessible theme toggle button", async () => {
    render(
      <ThemeProvider attribute="class" defaultTheme="dark">
        <ThemeToggle />
      </ThemeProvider>
    );

    const toggleButton = screen.getByRole("button", { name: /theme/i });
    expect(toggleButton).toBeInTheDocument();

    // Click toggle button
    act(() => {
      fireEvent.click(toggleButton);
    });

    expect(toggleButton).toBeInTheDocument();
  });
});
