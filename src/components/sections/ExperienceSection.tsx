import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { EXPERIENCE_DATA } from "@/data/experience";
import { Briefcase, Calendar, CheckCircle, Terminal } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 border-t border-slate-200 dark:border-slate-800/80" aria-label="Work Experience and Internships">
      <Container>
        <SectionHeading
          eyebrow="02 // Experience"
          title="Practical engineering internships."
          description="Verified hands-on industry experience spanning full-stack application development and machine learning workflows."
        />

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-6 space-y-12 pl-6 md:pl-10">
          {EXPERIENCE_DATA.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline marker icon */}
              <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-[#0b0f19] border-2 border-blue-600 dark:border-blue-500 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                <Briefcase className="w-3 h-3" />
              </div>

              {/* Card content */}
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 p-6 md:p-8 hover:border-blue-500/40 transition-colors shadow-2xs">
                {/* Role header & period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                      <span>{exp.role}</span>
                      <span className="text-slate-400 font-normal">|</span>
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">
                        {exp.company}
                      </span>
                    </h3>
                    <div className="text-xs font-mono-tech text-slate-500 dark:text-slate-400 mt-1">
                      {exp.type}
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-md self-start sm:self-auto border border-slate-200 dark:border-slate-700/60">
                    <Calendar className="w-3.5 h-3.5 text-blue-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Responsibilities list */}
                <div className="space-y-2.5 mb-6 text-sm text-slate-700 dark:text-slate-300">
                  <div className="text-xs font-mono-tech uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-2">
                    Key Contributions & Responsibilities:
                  </div>
                  {exp.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies used */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono-tech text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Stack:</span>
                  </span>
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="mono" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
