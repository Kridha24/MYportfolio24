import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ResumePage from "@/app/resume/page";
import { SITE_CONFIG } from "@/data/links";

describe("Resume Page", () => {
  it("renders resume download button with correct filename and path", () => {
    render(<ResumePage />);

    const downloadLinks = screen.getAllByRole("link", { name: /download/i });
    expect(downloadLinks.length).toBeGreaterThan(0);

    const primaryDownload = downloadLinks[0];
    expect(primaryDownload).toHaveAttribute("href", SITE_CONFIG.resumePath);
    expect(primaryDownload).toHaveAttribute("download", SITE_CONFIG.resumeFileName);
  });

  it("renders the embedded PDF object element", () => {
    const { container } = render(<ResumePage />);
    const pdfObject = container.querySelector("object");
    expect(pdfObject).toBeInTheDocument();
    expect(pdfObject?.getAttribute("data")).toContain(SITE_CONFIG.resumePath);
  });

  it("renders accessible resume text representation with cricket leadership", () => {
    render(<ResumePage />);
    expect(screen.getByText(/Professional Summary/i)).toBeInTheDocument();
    expect(screen.getByText(/Extracurricular Activities & Leadership/i)).toBeInTheDocument();
    expect(screen.getByText(/Kaimur District Cricket Association/i)).toBeInTheDocument();
  });
});
