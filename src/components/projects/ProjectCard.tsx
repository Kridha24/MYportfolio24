import React from "react";
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
  return (
    <article
      className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-6 sm:p-8 flex flex-col justify-between hover:border-blue-500/60 transition-all duration-200 shadow-2xs group focus-within:ring-2 focus-within:ring-blue-500"
      aria-labelledby={`project-title-${project.id}`}
    >
      <div>
        {/* Category & Status Eyebrow */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <Badge
            variant={project.category === "AI & Computer Vision" ? "cyan" : "accent"}
            size="sm"
          >
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
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none"
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
                <CheckCircle className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Conceptual Architecture Preview Box */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 p-4 mb-6">
          <div className="flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-slate-200 dark:border-slate-800/80">
            <span className="flex items-center gap-1.5 text-[11px] font-mono-tech font-semibold text-slate-600 dark:text-slate-300 uppercase">
              <Network className="w-3.5 h-3.5 text-cyan-500" />
              Conceptual Pipeline Architecture
            </span>
            <span className="text-[10px] font-mono-tech text-slate-500 dark:text-slate-400">
              Flow Diagram
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono-tech">
            {project.conceptualArchitecture.map((step, idx) => (
              <React.Fragment key={step}>
                <span className="px-2 py-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-2xs text-[11px]">
                  {step}
                </span>
                {idx < project.conceptualArchitecture.length - 1 && (
                  <span className="text-blue-500 font-bold" aria-hidden="true">
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
              <div className="mt-3 pt-2.5 border-t border-dashed border-slate-200 dark:border-slate-800">
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
                        <span className="text-cyan-500 font-bold text-xs" aria-hidden="true">
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
      <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
        {/* Case study link */}
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link"
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source</span>
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-dashed border-slate-300 dark:border-slate-700/60 bg-slate-100/50 dark:bg-slate-900/30 text-slate-400 dark:text-slate-500 cursor-not-allowed select-none text-[11px]"
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-blue-500/50 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 hover:bg-blue-100 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-dashed border-slate-300 dark:border-slate-700/60 bg-slate-100/50 dark:bg-slate-900/30 text-slate-400 dark:text-slate-500 cursor-not-allowed select-none text-[11px]"
              title="Public deployment endpoint pending host provisioning"
            >
              <span>Demo Pending</span>
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
