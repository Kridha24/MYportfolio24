import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from "@/data/education";
import { PROFILE_DATA } from "@/data/profile";
import { GraduationCap, ShieldCheck, Trophy, MapPin, Calendar } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-20 border-t border-slate-200 dark:border-slate-800/80" aria-label="Education and Certifications">
      <Container>
        <SectionHeading
          eyebrow="05 // Education & Credentials"
          title="Academic foundation & cybersecurity certifications."
          description="Formal computer science coursework and intensive security bootcamp credentials."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Education Card */}
          {EDUCATION_DATA.map((edu) => (
            <div
              key={edu.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 p-6 sm:p-8 flex flex-col justify-between shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/60">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono-tech text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2.5 py-1 rounded border border-blue-200 dark:border-blue-800/60 font-semibold">
                    {edu.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                  {edu.institution}
                </h3>
                <p className="text-base font-medium text-slate-700 dark:text-slate-300 mb-4">
                  {edu.degree}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono-tech text-slate-500 dark:text-slate-400 mb-6">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-blue-500" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                    {edu.location}
                  </span>
                </div>

                {edu.coursework && (
                  <div className="space-y-2">
                    <span className="text-xs font-mono-tech uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                      Core Academic Syllabi:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course) => (
                        <Badge key={course} variant="mono" size="sm">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Certification Card */}
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 p-6 sm:p-8 flex flex-col justify-between shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/60">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono-tech text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 px-2.5 py-1 rounded border border-cyan-200 dark:border-cyan-800/60 font-semibold">
                    {cert.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                  {cert.title}
                </h3>
                <p className="text-base font-medium text-slate-700 dark:text-slate-300 mb-4">
                  {cert.program}
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {cert.description}
                </p>

                <div className="space-y-2">
                  <span className="text-xs font-mono-tech uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                    Focus Areas Covered:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.topics.map((topic) => (
                      <Badge key={topic} variant="cyan" size="sm">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Callout */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/30 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                {PROFILE_DATA.cricketLeadership.universityRole}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Kaimur District Cricket Association representative across U14, U16, and U19 divisions.
              </p>
            </div>
          </div>
          <Badge variant="warning" size="sm">
            Athletic Leadership
          </Badge>
        </div>
      </Container>
    </section>
  );
}
