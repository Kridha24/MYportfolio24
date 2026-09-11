import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ContactForm } from "@/components/contact/ContactForm";

describe("ContactForm Component", () => {
  it("renders all expected input fields and labels", () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument();
  });

  it("validates empty submission and renders validation errors", async () => {
    render(<ContactForm />);

    const submitBtn = screen.getByRole("button", { name: /send message/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(
        screen.getByText(/name must be at least 2 characters/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/please enter a valid email address/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/subject must be at least 3 characters/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/message must be at least 10 characters/i)
      ).toBeInTheDocument();
    });
  });

  it("contains a mailto fallback link", () => {
    render(<ContactForm />);
    const mailtoLink = screen.getByRole("link", { name: /send via mailto/i });
    expect(mailtoLink).toHaveAttribute("href", "mailto:mihirshekhar887@gmail.com");
  });
});
