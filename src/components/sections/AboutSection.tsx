import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { PROFILE_DATA } from "@/data/profile";
import {
  Layers,
  Eye,
  Server,
  Cpu,
  Trophy,
  CheckCircle2,
  Users2,
} from "lucide-react";

export function AboutSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Layers: <Layers className="w-5 h-5 text-blue-500" />,
    Eye: <Eye className="w-5 h-5 text-cyan-500" />,
    Server: <Server className="w-5 h-5 text-emerald-500" />,
    Cpu: <Cpu className="w-5 h-5 text-indigo-500" />,
  };

  return (
    <section id="about" className="py-20 border-t border-slate-200 dark:border-slate-800/80" aria-label="About Mihir Shekhar Gupta">
      <Container>
        <SectionHeading
          eyebrow="01 // Engineering Profile"
          title="Pragmatic engineering grounded in core computer science."
          description="A Computer Science undergraduate with hands-on experience developing Python full-stack systems, computer vision pipelines, structured data layers, and real-time applications."
        />

        {/* Narrative bio cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-7 space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed text-base">
            <p>
              I am pursuing my Bachelor of Technology in Computer Science & Engineering at{" "}
              <strong className="text-slate-900 dark:text-slate-100 font-semibold">
                I.K. Gujral Punjab Technical University
              </strong>{" "}
              (2023–Present). Rather than focusing purely on abstract theory, I apply computer
              science fundamentals directly into production-capable prototypes.
            </p>
            <p>
              My work spans from building asynchronous microservices in FastAPI and Node.js with
              relational schema designs in PostgreSQL to processing high-rate CCTV RTSP video feeds
              using OpenCV and YOLOv8. I care deeply about writing clean, typed code, handling edge
              cases, minimizing latency, and keeping architectures simple and maintainable.
            </p>
            <p>
              Whether it’s architecting role-based security access control for construction
              procurement platforms or tuning computer-vision polygon masks to eliminate false
              vehicle detections, my goal is always to deliver dependable, measurable software.
            </p>
          </div>

          <div className="lg:col-span-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 p-6 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-xs font-mono-tech uppercase font-semibold text-slate-700 dark:text-slate-200">
                Core Engineering Tenets
              </span>
            </div>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Strict Type Safety:</strong> TypeScript and Pydantic schemas over loose
                  any-types.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Edge & Real-Time Performance:</strong> Preventing frame-lag and buffer
                  bloat in live streams.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Defensive Persistence:</strong> Normalized PostgreSQL and indexed MongoDB
                  schemas with strict sanitization.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Disciplined Execution:</strong> Transparent documentation, reproducible
                  setups, and no decorative bloat.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 4 Focus Areas */}
        <div className="mb-16">
          <div className="text-xs font-mono-tech uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-6">
            Primary Focus Areas
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROFILE_DATA.focusAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-xl border border-slate-200 dark:border-slate-800/90 bg-white/70 dark:bg-slate-900/40 p-6 flex flex-col justify-between hover:border-blue-500/50 transition-colors shadow-2xs group"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    {iconMap[area.iconName]}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2">
                    {area.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {area.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800/60">
                  {area.skills.map((skill) => (
                    <Badge key={skill} variant="default" size="sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cricket Leadership Spotlight */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-linear-to-r from-slate-50 to-white dark:from-slate-900/70 dark:to-slate-900/30 p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-500" />
                <span className="text-xs font-mono-tech uppercase font-semibold text-amber-600 dark:text-amber-400">
                  Leadership & Athletic Discipline
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                {PROFILE_DATA.cricketLeadership.universityRole}
              </h3>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {PROFILE_DATA.cricketLeadership.narrative}
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs font-mono-tech text-slate-500 dark:text-slate-400">
                  District Divisions Represented:
                </span>
                {PROFILE_DATA.cricketLeadership.districtDivisions.map((div) => (
                  <Badge key={div} variant="warning" size="sm">
                    {div}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 rounded-xl border border-amber-200/60 dark:border-amber-900/40 bg-amber-50/50 dark:bg-amber-950/20 p-5 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-amber-800 dark:text-amber-300 font-semibold uppercase">
                <Users2 className="w-4 h-4" />
                <span>Leadership Attributes</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {PROFILE_DATA.cricketLeadership.qualities.map((quality) => (
                  <li key={quality} className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold shrink-0">•</span>
                    <span>{quality}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
