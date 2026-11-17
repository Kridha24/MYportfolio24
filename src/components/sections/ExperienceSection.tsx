import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { EXPERIENCE_DATA } from "@/data/experience";
import { Calendar, CheckCircle2, MapPin, Briefcase } from "lucide-react";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 border-t border-slate-200/80 dark:border-white/8 relative"
      aria-label="Work Experience and Internships"
    >
      <Container>
        <SectionHeading
          eyebrow="EXPERIENCE // 02"
          title="Practical Engineering Experience"
          description="Verified hands-on industry internships spanning full-stack web architectures and machine learning engineering workflows."
        />

        {/* Timeline wrapper */}
        <div className="relative pl-0 md:pl-6">
          {/* Vertical gradient timeline track (Desktop) */}
          <div
            className="hidden md:block absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#4f7cff] via-[#8b5cf6] to-cyan-400 opacity-30"
            aria-hidden="true"
          />

          <div className="space-y-8 md:space-y-12">
            {EXPERIENCE_DATA.map((exp) => (
              <div
                key={exp.id}
                className="relative rounded-2xl border border-slate-200/90 dark:border-white/8 bg-white/70 dark:bg-[#121826]/90 p-6 sm:p-8 hover:border-[#4f7cff]/40 dark:hover:border-[#4f7cff]/30 transition-all duration-300 shadow-sm hover:shadow-xl group hover:-translate-y-0.5"
              >
                {/* Glowing Node on Timeline (Desktop) */}
                <div
                  className="hidden md:flex absolute -left-[31px] top-8 w-4 h-4 rounded-full bg-[#070a12] border-2 border-[#4f7cff] items-center justify-center shadow-[0_0_12px_rgba(79,124,255,0.8)]"
                  aria-hidden="true"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4f7cff]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
                  {/* Left Column: Dates, Company, Work Mode (4 cols on Desktop) */}
                  <div className="md:col-span-4 space-y-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="p-1.5 rounded-lg bg-blue-500/10 text-[#4f7cff] border border-blue-500/20">
                          <Briefcase className="w-3.5 h-3.5" />
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-[#f5f7fa] tracking-tight">
                          {exp.company}
                        </h3>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono-tech px-2.5 py-0.5 rounded-full bg-[#4f7cff]/10 text-[#4f7cff] dark:text-[#67e8f9] border border-[#4f7cff]/25 font-semibold">
                          {exp.type}
                        </span>
                        {exp.location && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono-tech text-slate-500 dark:text-[#a8b0c0]">
                            <MapPin className="w-3 h-3 text-slate-400" />
                            {exp.location}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-slate-600 dark:text-[#a8b0c0] bg-slate-100 dark:bg-[#0c1017] px-3 py-1.5 rounded-lg border border-slate-200/80 dark:border-white/6">
                      <Calendar className="w-3.5 h-3.5 text-[#4f7cff]" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Right Column: Role Title, 3 Contributions, Stack (8 cols on Desktop) */}
                  <div className="md:col-span-8 space-y-4">
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-[#f5f7fa] flex items-center gap-2">
                      <span>{exp.role}</span>
                    </h4>

                    {/* 3 Concise Contribution Points */}
                    <div className="space-y-2.5">
                      {exp.responsibilities.map((resp, respIdx) => (
                        <div
                          key={respIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-[#a8b0c0] leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies Used */}
                    <div className="pt-3 border-t border-slate-100 dark:border-white/6 flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] font-mono-tech text-slate-400 dark:text-[#6b778d] mr-1">
                        Stack:
                      </span>
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="mono"
                          size="sm"
                          className="hover:border-[#4f7cff]/40 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
