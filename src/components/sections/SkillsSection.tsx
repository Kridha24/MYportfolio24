import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { SKILL_CATEGORIES } from "@/data/skills";
import {
  Code,
  Layout,
  Server,
  Cpu,
  Database,
  Terminal,
  Binary,
} from "lucide-react";

export function SkillsSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Languages: <Code className="w-4 h-4 text-blue-500" />,
    Frontend: <Layout className="w-4 h-4 text-cyan-500" />,
    Backend: <Server className="w-4 h-4 text-emerald-500" />,
    "AI, ML & Computer Vision": <Cpu className="w-4 h-4 text-indigo-500" />,
    "Databases & Real-Time": <Database className="w-4 h-4 text-amber-500" />,
    "Tools & Platforms": <Terminal className="w-4 h-4 text-rose-500" />,
    "Computer Science": <Binary className="w-4 h-4 text-purple-500" />,
  };

  return (
    <section id="skills" className="py-20 border-t border-slate-200 dark:border-slate-800/80" aria-label="Technical Skills and Proficiencies">
      <Container>
        <SectionHeading
          eyebrow="04 // Technical Matrix"
          title="Proficiencies structured by engineering domain."
          description="Disciplined toolsets and computer science foundations without arbitrary percentage bars or decorative fluff."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.domain}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 p-5 flex flex-col justify-between hover:border-blue-500/40 transition-colors shadow-2xs"
            >
              <div>
                <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-100 dark:border-slate-800/80">
                  <div className="p-1.5 rounded-md bg-slate-100 dark:bg-slate-800">
                    {iconMap[cat.domain] || <Code className="w-4 h-4 text-blue-500" />}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                    {cat.domain}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {cat.skills.map((skill) => (
                  <Badge key={skill} variant="default" size="sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
