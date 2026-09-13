import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { LearningSection } from "@/components/sections/LearningSection";
import { RagPipelineVisual } from "@/components/learning/RagPipelineVisual";
import { ArchitectureGraph } from "@/components/learning/ArchitectureGraph";
import { LearningTracksGrid } from "@/components/learning/LearningTracksGrid";
import { LEARNING_SECTION_HEADER, LEARNING_TRACKS } from "@/data/learning";

describe("What I'm Learning Now Section", () => {
  it("renders the exact section introduction copy", () => {
    render(<LearningSection />);
    expect(
      screen.getByText(/I’m strengthening my foundations in System Design, Backend Engineering, Data Structures & Algorithms, and AI Engineering/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Retrieval-Augmented Generation and LangChain to understand how intelligent applications can retrieve trusted context/i)
    ).toBeInTheDocument();
  });

  it("renders all four learning tracks with their exact honest statuses", () => {
    render(<LearningTracksGrid />);
    
    // Track 1: System Design
    expect(screen.getByRole("heading", { name: "System Design" })).toBeInTheDocument();
    expect(screen.getByText("Currently Learning")).toBeInTheDocument();

    // Track 2: Backend Engineering
    expect(screen.getByRole("heading", { name: "Backend Engineering" })).toBeInTheDocument();
    expect(screen.getByText("Learning & Applying")).toBeInTheDocument();

    // Track 3: Data Structures & Algorithms
    expect(screen.getByRole("heading", { name: "Data Structures & Algorithms" })).toBeInTheDocument();
    expect(screen.getByText("Practising Consistently")).toBeInTheDocument();

    // Track 4: RAG & LangChain
    expect(screen.getByRole("heading", { name: "RAG & LangChain" })).toBeInTheDocument();
    expect(screen.getByText("Currently Learning & Building")).toBeInTheDocument();
  });

  it("enforces correct terminology: LangChain is present and LongChain is absent", () => {
    const { container } = render(<LearningSection />);
    const content = container.textContent || "";
    expect(content).toContain("LangChain");
    expect(content).not.toContain("LongChain");
  });

  it("expands RAG as Retrieval-Augmented Generation on first mention", () => {
    const { container } = render(<LearningSection />);
    const content = container.textContent || "";
    expect(content).toContain("Retrieval-Augmented Generation");
  });

  it("renders the RAG Workflow Illustration with stage inspection", () => {
    render(<RagPipelineVisual />);
    expect(screen.getByText("RAG Workflow Illustration")).toBeInTheDocument();
    expect(screen.getAllByText("Knowledge Sources").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Ingestion & Cleaning").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Chunking + Metadata").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Embedding Model").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Vector Store").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("User Question").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Query Embedding").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Retriever + Reranker").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Relevant Context").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Prompt + LLM").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Grounded Answer + Sources").length).toBeGreaterThanOrEqual(1);
  });

  it("supports toggling between Simple Architecture and Detailed Architecture views", () => {
    render(<ArchitectureGraph />);
    
    // Default is Simple View
    const simpleBtn = screen.getByRole("button", { name: /Switch to Simple Architecture View/i });
    const detailedBtn = screen.getByRole("button", { name: /Switch to Detailed Architecture View/i });
    
    expect(simpleBtn).toHaveAttribute("aria-pressed", "true");
    expect(detailedBtn).toHaveAttribute("aria-pressed", "false");
    expect(screen.getByText("Frontend Layer")).toBeInTheDocument();
    expect(screen.getByText("Backend Layer")).toBeInTheDocument();

    // Click to switch to Detailed View
    fireEvent.click(detailedBtn);
    expect(detailedBtn).toHaveAttribute("aria-pressed", "true");
    expect(screen.getAllByText("Experience Layer").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Data & Intelligence Layer").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Infrastructure Layer").length).toBeGreaterThanOrEqual(1);
  });

  it("renders the 5 system alignment explanations", () => {
    render(<LearningSection />);
    expect(screen.getByText("Frontend → Backend")).toBeInTheDocument();
    expect(screen.getByText("Backend → Data")).toBeInTheDocument();
    expect(screen.getByText("Backend → AI/RAG")).toBeInTheDocument();
    expect(screen.getByText("RAG → Knowledge Sources")).toBeInTheDocument();
    expect(screen.getByText("Application → Infrastructure")).toBeInTheDocument();
  });

  it("links to all four project case studies in Where I Apply These Concepts", () => {
    render(<LearningSection />);
    expect(screen.getByRole("heading", { name: "HomeMind AI" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "AI Finance Controller" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "TRAFFIQ" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "BuildEase" })).toBeInTheDocument();

    const links = screen.getAllByRole("link");
    const hrefs = links.map((l) => l.getAttribute("href"));
    expect(hrefs).toContain("/projects/homemind-ai");
    expect(hrefs).toContain("/projects/ai-finance-controller");
    expect(hrefs).toContain("/projects/traffiq");
    expect(hrefs).toContain("/projects/buildease");
  });

  it("switches tabs in RAG & LangChain track and displays LangChain components & LangGraph", () => {
    render(<LearningTracksGrid />);
    const langchainTabBtn = screen.getByRole("button", { name: "LangChain Integration" });
    fireEvent.click(langchainTabBtn);

    expect(screen.getByText(/LangChain provides components for connecting language models/i)).toBeInTheDocument();
    expect(screen.getByText("Model Integration")).toBeInTheDocument();
    expect(screen.getByText("Prompt Management")).toBeInTheDocument();
    expect(screen.getByText("Retrieval Chains")).toBeInTheDocument();
    expect(screen.getByText("Tools & Controlled Agents")).toBeInTheDocument();
    expect(screen.getByText("Structured Output")).toBeInTheDocument();
    expect(screen.getByText("Memory & State")).toBeInTheDocument();
    expect(screen.getByText(/Exploring LangGraph for stateful, controllable, multi-step AI workflows/i)).toBeInTheDocument();
  });
});
