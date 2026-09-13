import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { SKILL_CATEGORIES } from "@/data/skills";
import {
  Code,
  Layout,
  Server,
  Eye,
  Database,
  Terminal,
  Binary,
} from "lucide-react";

export function SkillsSection() {
  const getCategoryTheme = (domain: string) => {
    switch (domain) {
      case "Languages":
        return {
          icon: <Code className="w-4 h-4 text-[#4f7cff]" />,
          iconBg: "bg-blue-500/10 border-blue-500/25",
          hoverBorder: "hover:border-[#4f7cff]/50 hover:shadow-[0_0_25px_rgba(79,124,255,0.15)]",
        };
      case "Frontend":
        return {
          icon: <Layout className="w-4 h-4 text-cyan-400" />,
          iconBg: "bg-cyan-500/10 border-cyan-500/25",
          hoverBorder: "hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]",
        };
      case "Backend":
        return {
          icon: <Server className="w-4 h-4 text-violet-400" />,
          iconBg: "bg-violet-500/10 border-violet-500/25",
          hoverBorder: "hover:border-violet-500/50 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)]",
        };
      case "AI/ML & Computer Vision":
        return {
          icon: <Eye className="w-4 h-4 text-emerald-400" />,
          iconBg: "bg-emerald-500/10 border-emerald-500/25",
          hoverBorder: "hover:border-emerald-500/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]",
        };
      case "Databases & Real-Time":
        return {
          icon: <Database className="w-4 h-4 text-amber-400" />,
          iconBg: "bg-amber-500/10 border-amber-500/25",
          hoverBorder: "hover:border-amber-500/50 hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]",
        };
      case "Tools":
        return {
          icon: <Terminal className="w-4 h-4 text-pink-400" />,
          iconBg: "bg-pink-500/10 border-pink-500/25",
          hoverBorder: "hover:border-pink-500/50 hover:shadow-[0_0_25px_rgba(236,72,153,0.15)]",
        };
      case "Computer Science Fundamentals":
      default:
        return {
          icon: <Binary className="w-4 h-4 text-[#8b5cf6]" />,
          iconBg: "bg-purple-500/10 border-purple-500/25",
          hoverBorder: "hover:border-[#8b5cf6]/50 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)]",
        };
    }
  };

  return (
    <section
      id="skills"
      className="py-20 border-t border-slate-200/80 dark:border-white/8 relative"
      aria-label="Technical Skills and Proficiencies"
    >
      <Container>
        <SectionHeading
          eyebrow="SKILLS // 04"
          title="Technical Competencies Matrix"
          description="Structured by core engineering disciplines. Clear, scan-friendly toolsets without arbitrary percentage bars or decorative fluff."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((cat) => {
            const theme = getCategoryTheme(cat.domain);

            return (
              <div
                key={cat.domain}
                className={`rounded-2xl border border-slate-200/90 dark:border-white/8 bg-white/70 dark:bg-[#121826]/90 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-sm group hover:-translate-y-1 ${theme.hoverBorder}`}
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2.5 pb-2.5 border-b border-slate-100 dark:border-white/6">
                    <div className={`p-2 rounded-xl border ${theme.iconBg}`}>
                      {theme.icon}
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-[#f5f7fa] tracking-tight">
                      {cat.domain}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-[#a8b0c0] mb-4 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cat.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="default"
                      size="sm"
                      className="group-hover:border-[#4f7cff]/30 dark:group-hover:border-[#4f7cff]/25 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
