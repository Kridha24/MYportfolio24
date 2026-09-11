import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { PROJECTS_DATA } from "@/data/projects";
import { ArrowLeft, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects & Architecture Case Studies",
  description:
    "Explore engineering case studies and technical architectures for TRAFFIQ (AI traffic management) and BuildEase (full-stack construction platform).",
};

export default function ProjectsPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        {/* Back link */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono-tech text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Overview</span>
          </Link>
        </div>

        <SectionHeading
          eyebrow="Portfolio // Technical Index"
          title="Engineering Projects & Deep Case Studies"
          description="Detailed breakdowns of system architecture, computer vision models, asynchronous backends, and multi-user full-stack platforms."
        />

        {/* Project cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Note on engineering integrity */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30 p-6 flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
            <h4 className="font-semibold text-slate-900 dark:text-slate-200">
              Integrity & Design Specification
            </h4>
            <p className="leading-relaxed">
              Architectures and telemetry flows displayed above reflect implemented system
              specifications and prototype designs. No unverified benchmarks or simulated traffic
              metrics are claimed.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
