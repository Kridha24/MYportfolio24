import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { PROJECTS_DATA } from "@/data/projects";
import { ArrowRight, Layers } from "lucide-react";

export function ProjectsSection() {
  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured);

  return (
    <section id="projects" className="py-20 border-t border-slate-200 dark:border-slate-800/80" aria-label="Featured Technical Projects">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <SectionHeading
            eyebrow="03 // Featured Projects"
            title="Intelligent systems & full-stack platforms."
            description="Production-oriented engineering projects demonstrating real-time computer vision inference, asynchronous microservices, and secure multi-tier web architectures."
            className="mb-0"
          />

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 self-start md:self-end pb-2 group"
          >
            <Layers className="w-4 h-4" />
            <span>Explore All Projects & Architecture</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
