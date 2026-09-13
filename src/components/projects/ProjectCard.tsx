"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { Project } from "@/types/portfolio";
import { Badge } from "@/components/ui/Badge";
import {
  ArrowRight,
  ExternalLink,
  Github,
  CheckCircle,
  Network,
  Lock,
} from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty("--card-x", `${(e.clientX - rect.left).toFixed(1)}px`);
    cardRef.current.style.setProperty("--card-y", `${(e.clientY - rect.top).toFixed(1)}px`);
  };

  // Color themes based on project ID
  const getProjectAccent = () => {
    switch (project.id) {
      case "homemind-ai":
        return {
          glow: "rgba(139, 92, 246, 0.15)",
          borderHover: "hover:border-violet-500/50",
          tagVariant: "cyan" as const,
        };
      case "ai-finance-controller":
        return {
          glow: "rgba(16, 185, 129, 0.15)",
          borderHover: "hover:border-emerald-500/50",
          tagVariant: "cyan" as const,
        };
      case "traffiq":
        return {
          glow: "rgba(34, 211, 238, 0.15)",
          borderHover: "hover:border-cyan-500/50",
          tagVariant: "cyan" as const,
        };
      case "buildease":
        return {
          glow: "rgba(245, 158, 11, 0.15)",
          borderHover: "hover:border-amber-500/50",
          tagVariant: "accent" as const,
        };
      default:
        return {
          glow: "rgba(79, 124, 255, 0.15)",
          borderHover: "hover:border-[#4f7cff]/50",
          tagVariant: "default" as const,
        };
    }
  };

  const accent = getProjectAccent();

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-2xl border border-slate-200/90 dark:border-white/8 bg-white/80 dark:bg-[#121826]/90 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-sm group focus-within:ring-2 focus-within:ring-[#4f7cff] hover:-translate-y-1 hover:shadow-xl ${accent.borderHover} overflow-hidden`}
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* Dynamic Cursor Spotlight Aura (Desktop only, 0 React re-renders) */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300 opacity-100 dark:block hidden"
          style={{
            background: `radial-gradient(400px circle at var(--card-x, 0px) var(--card-y, 0px), ${accent.glow}, transparent 70%)`,
          }}
          aria-hidden="true"
        />
      )}

      <div className="relative z-10">
        {/* Category & Status Eyebrow */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <Badge variant={accent.tagVariant} size="sm">
            {project.category}
          </Badge>
          <span className="text-[11px] font-mono-tech text-slate-500 dark:text-slate-400">
            Standalone Engineering Project
          </span>
        </div>

        {/* Title and Subtitle */}
        <h3
          id={`project-title-${project.id}`}
          className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-2"
        >
          <Link
            href={`/projects/${project.slug}`}
            className="hover:text-blue-600 dark:hover:text-[#4f7cff] transition-colors focus:outline-none"
          >
            {project.title}
          </Link>
        </h3>
        <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-4">
          {project.subtitle}
        </p>

        {/* High-level Description */}
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Key Engineering Points */}
        <div className="space-y-2 mb-6">
          <div className="text-xs font-mono-tech uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
            Engineering Highlights:
          </div>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            {project.keyPoints.slice(0, 4).map((pt, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Conceptual Architecture Preview Box */}
        <div className="rounded-xl border border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-[#0c1017]/80 p-4 mb-6">
          <div className="flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-slate-200 dark:border-white/6">
            <span className="flex items-center gap-1.5 text-[11px] font-mono-tech font-semibold text-slate-600 dark:text-[#a8b0c0] uppercase">
              <Network className="w-3.5 h-3.5 text-cyan-400" />
              Conceptual Pipeline Architecture
            </span>
            <span className="text-[10px] font-mono-tech text-slate-500 dark:text-[#6b778d]">
              Flow Diagram
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono-tech">
            {project.conceptualArchitecture.map((step, idx) => (
              <React.Fragment key={step}>
                <span className="px-2 py-1 rounded bg-white dark:bg-[#121826] border border-slate-200 dark:border-white/8 text-slate-700 dark:text-slate-300 shadow-2xs text-[11px]">
                  {step}
                </span>
                {idx < project.conceptualArchitecture.length - 1 && (
                  <span className="text-[#4f7cff] font-bold" aria-hidden="true">
                    →
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* If dual flow (BuildEase) */}
          {(() => {
            const socketFlow = project.dualFlowArchitecture?.socketFlow;
            if (!socketFlow) return null;
            return (
              <div className="mt-3 pt-2.5 border-t border-dashed border-slate-200 dark:border-white/8">
                <div className="text-[10px] font-mono-tech text-slate-500 dark:text-slate-400 mb-1">
                  Real-Time Channel Flow:
                </div>
                <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono-tech">
                  {socketFlow.map((step, idx) => (
                    <React.Fragment key={step}>
                      <span className="px-2 py-0.5 rounded bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/60 text-cyan-800 dark:text-cyan-300 text-[10px]">
                        {step}
                      </span>
                      {idx < socketFlow.length - 1 && (
                        <span className="text-cyan-400 font-bold text-xs" aria-hidden="true">
                          ↔
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="mono" size="sm">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Action Footer: Case Study, Repo, Demo */}
      <div className="relative z-10 pt-4 border-t border-slate-200 dark:border-white/8 flex flex-wrap items-center justify-between gap-3">
        {/* Case study link */}
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-[#4f7cff] hover:text-blue-700 dark:hover:text-[#67e8f9] transition-colors group/link"
        >
          <span>Read Full Case Study</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </Link>

        {/* External placeholders */}
        <div className="flex items-center gap-2 text-xs font-mono-tech">
          {/* Repository Button / Placeholder */}
          {project.isRepoAvailable && project.repositoryUrl ? (
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-white/10 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-[#4f7cff] hover:border-[#4f7cff]/40 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source</span>
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-dashed border-slate-300 dark:border-white/10 bg-slate-100/50 dark:bg-[#0c1017]/60 text-slate-400 dark:text-slate-500 cursor-not-allowed select-none text-[11px]"
              title="Repository will be linked upon public release"
            >
              <Lock className="w-3 h-3" />
              <span>Repo Pending</span>
            </span>
          )}

          {/* Live Demo Button / Placeholder */}
          {project.isDemoAvailable && project.liveDemoUrl ? (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-blue-500/50 bg-blue-50 dark:bg-[#4f7cff]/10 text-blue-700 dark:text-[#67e8f9] hover:bg-blue-100 dark:hover:bg-[#4f7cff]/20 transition-colors shadow-xs"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>
          ) : project.id !== "homemind-ai" ? (
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-dashed border-slate-300 dark:border-white/10 bg-slate-100/50 dark:bg-[#0c1017]/60 text-slate-400 dark:text-slate-500 cursor-not-allowed select-none text-[11px]"
              title="Public deployment endpoint pending host provisioning"
            >
              <span>Demo Pending</span>
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
