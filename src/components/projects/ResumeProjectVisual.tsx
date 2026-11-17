import React from "react";
import {
  Database,
  SlidersHorizontal,
  Cpu,
  CheckCircle2,
  Network,
  Search,
  Bot,
  ShieldCheck,
  Radar,
  GitCompare,
  Filter,
  Target,
  ArrowRight,
  Layers,
} from "lucide-react";

interface PipelineStep {
  label: string;
  detail: string;
  icon: React.ReactNode;
}

interface ResumeProjectVisualProps {
  projectId: string;
}

export function ResumeProjectVisual({ projectId }: ResumeProjectVisualProps) {
  const configs: Record<
    string,
    {
      header: string;
      status: string;
      accentText: string;
      accentBorder: string;
      accentBg: string;
      steps: PipelineStep[];
      footerNote: string;
    }
  > = {
    "airbnb-price-prediction": {
      header: "REGRESSION_WORKFLOW // INFERENCE_PARITY",
      status: "Reference Study Pipeline",
      accentText: "text-amber-600 dark:text-amber-400",
      accentBorder: "border-amber-500/25",
      accentBg: "bg-amber-500/10",
      steps: [
        {
          label: "01. Exploratory Data Analysis",
          detail: "Examined distributions, missing values & outlier skew across listing attributes.",
          icon: <Database className="w-4 h-4 text-amber-500" />,
        },
        {
          label: "02. Feature Preprocessing",
          detail: "Categorical encoding & numerical scaling aligned between train and inference.",
          icon: <SlidersHorizontal className="w-4 h-4 text-cyan-500" />,
        },
        {
          label: "03. Model Comparison",
          detail: "Reviewed scikit-learn, XGBoost & CatBoost regression baselines.",
          icon: <Cpu className="w-4 h-4 text-violet-500" />,
        },
        {
          label: "04. Packaging Concepts",
          detail: "Studied Flask endpoints, Docker containerization & DVC tracking concepts.",
          icon: <Layers className="w-4 h-4 text-emerald-500" />,
        },
      ],
      footerNote: "Focus: Avoiding training-serving skew during regression inference.",
    },
    "researchgraph-ai-project": {
      header: "GRAPH_RAG // CITATION_GROUNDED_QA",
      status: "9th / 20 Teams · 52/52 Tests",
      accentText: "text-cyan-600 dark:text-cyan-400",
      accentBorder: "border-cyan-500/25",
      accentBg: "bg-cyan-500/10",
      steps: [
        {
          label: "01. Knowledge Graph Ingestion",
          detail: "Extracted paper evidence into structured Neo4j nodes & Cypher relationships.",
          icon: <Network className="w-4 h-4 text-cyan-500" />,
        },
        {
          label: "02. 6 Retrieval Workflows",
          detail: "Paper search, method comparison & multi-hop graph traversal queries.",
          icon: <Search className="w-4 h-4 text-blue-500" />,
        },
        {
          label: "03. Hybrid LLM Synthesis",
          detail: "Integrated Ollama local LLM + Gemini API grounded on retrieved subgraphs.",
          icon: <Bot className="w-4 h-4 text-violet-500" />,
        },
        {
          label: "04. Citation & Test Verification",
          detail: "Paper/page citations verified with 52/52 passing pytest evaluation cases.",
          icon: <ShieldCheck className="w-4 h-4 text-emerald-500" />,
        },
      ],
      footerNote: "IIIT Delhi Graph + AI Mini Hackathon · Grounded Multi-Hop Graph RAG.",
    },
    "amazon-entity-resolution-project": {
      header: "ENTITY_RESOLUTION // PRECISION_RANKING",
      status: "Rank 700 / 5,000+ Teams",
      accentText: "text-[#4f7cff] dark:text-[#7ba3ff]",
      accentBorder: "border-[#4f7cff]/25",
      accentBg: "bg-[#4f7cff]/10",
      steps: [
        {
          label: "01. FAISS Candidate Retrieval",
          detail: "Fast dense vector blocking over noisy business names & partial fields.",
          icon: <Radar className="w-4 h-4 text-[#4f7cff]" />,
        },
        {
          label: "02. RapidFuzz Similarity Features",
          detail: "Token-sort, partial-ratio & edit-distance signals handling typos/abbreviations.",
          icon: <GitCompare className="w-4 h-4 text-cyan-500" />,
        },
        {
          label: "03. Hard-Negative Mining",
          detail: "Group-aware validation splits preventing leakage across record clusters.",
          icon: <Filter className="w-4 h-4 text-violet-500" />,
        },
        {
          label: "04. LightGBM & Threshold Tuning",
          detail: "Precision-focused decision thresholding for high-confidence entity matching.",
          icon: <Target className="w-4 h-4 text-emerald-500" />,
        },
      ],
      footerNote: "Amazon ML Challenge 2026 · Precision-Focused Record Matching.",
    },
  };

  const cfg = configs[projectId] ?? configs["researchgraph-ai-project"];

  return (
    <div className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-slate-50/90 dark:bg-[#0b101b]/95 p-5 sm:p-6 shadow-inner space-y-4">
      {/* Terminal-style header */}
      <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-200/80 dark:border-white/8 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#4f7cff]" />
          <span className="text-[11px] font-mono-tech font-semibold tracking-wider text-slate-700 dark:text-slate-300">
            {cfg.header}
          </span>
        </div>
        <span
          className={`text-[10px] font-mono-tech font-semibold px-2.5 py-0.5 rounded-full border ${cfg.accentBg} ${cfg.accentText} ${cfg.accentBorder}`}
        >
          {cfg.status}
        </span>
      </div>

      {/* 4-Stage Pipeline Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {cfg.steps.map((step, index) => (
          <div
            key={step.label}
            className="rounded-xl border border-slate-200/80 dark:border-white/8 bg-white/90 dark:bg-[#121826]/90 p-3.5 space-y-1.5 transition-transform duration-150 ease-out hover:-translate-y-0.5 will-change-transform"
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/8">
                  {step.icon}
                </span>
                <span className="text-xs font-semibold text-slate-900 dark:text-[#f5f7fa]">
                  {step.label}
                </span>
              </div>
              {index < cfg.steps.length - 1 && (
                <ArrowRight className="w-3 h-3 text-slate-400 hidden sm:block shrink-0" aria-hidden="true" />
              )}
            </div>
            <p className="text-[11px] text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
              {step.detail}
            </p>
          </div>
        ))}
      </div>

      {/* Footer Verification Strip */}
      <div className="flex items-center gap-2 pt-2 border-t border-slate-200/80 dark:border-white/8 text-[11px] font-mono-tech text-slate-500 dark:text-[#a8b0c0]">
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" aria-hidden="true" />
        <span>{cfg.footerNote}</span>
      </div>
    </div>
  );
}

