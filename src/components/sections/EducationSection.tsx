import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from "@/data/education";
import { PROFILE_DATA } from "@/data/profile";
import { GraduationCap, Trophy, MapPin, CheckCircle2, ShieldCheck } from "lucide-react";

export function EducationSection() {
  const edu = EDUCATION_DATA[0];
  const cert = CERTIFICATIONS_DATA[0];
  const { cricketLeadership } = PROFILE_DATA;

  return (
    <section
      id="education"
      className="py-20 border-t border-slate-200/80 dark:border-white/8"
      aria-label="Education and Leadership"
    >
      <Container>
        <SectionHeading
          eyebrow="EDUCATION & LEADERSHIP // 07"
          title="Education & Beyond Engineering"
          description="A balanced foundation: rigorous academic computer science coursework paired with high-pressure athletic leadership and team discipline."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ============================================================ */}
          {/* CARD 1: EDUCATION */}
          {/* ============================================================ */}
          <div className="rounded-3xl border border-slate-200/90 dark:border-white/8 bg-white/60 dark:bg-[#121826] p-6 sm:p-8 flex flex-col justify-between hover:border-[#2563eb]/40 dark:hover:border-[#5b8cff]/30 transition-all duration-200 shadow-2xs">
            <div className="space-y-6">
              <div className="flex items-center justify-between gap-2">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-[#5b8cff]/10 text-[#2563eb] dark:text-[#5b8cff] border border-blue-200/60 dark:border-[#5b8cff]/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono-tech text-[#2563eb] dark:text-[#5b8cff] bg-blue-50 dark:bg-[#5b8cff]/10 px-2.5 py-1 rounded-full border border-blue-200/60 dark:border-[#5b8cff]/20 font-semibold">
                  2023 – Present
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-[#f5f7fa] tracking-tight mb-1">
                  {edu.institution}
                </h3>
                <p className="text-base font-semibold text-[#2563eb] dark:text-[#5b8cff] mb-2">
                  {edu.degree}
                </p>
                <div className="flex items-center gap-2 text-xs font-mono-tech text-slate-500 dark:text-[#a8b0c0]">
                  <MapPin className="w-3.5 h-3.5 text-cyan-600 dark:text-[#67e8f9]" />
                  <span>{edu.location}</span>
                  <span className="text-slate-300 dark:text-white/20">•</span>
                  <span>Mohali Campus</span>
                </div>
              </div>

              {/* Core Coursework */}
              {edu.coursework && (
                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/6">
                  <span className="text-xs font-mono-tech uppercase tracking-wider text-slate-500 dark:text-[#a8b0c0] font-semibold">
                    Core Computer Science Syllabi:
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

              {/* Cybersecurity Forensics Credential */}
              {cert && (
                <div className="p-3.5 rounded-xl border border-cyan-200/60 dark:border-cyan-900/30 bg-cyan-50/40 dark:bg-[#0f1420]/80 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-mono-tech font-bold text-cyan-800 dark:text-[#67e8f9]">
                    <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-[#67e8f9]" />
                    <span>{cert.title}</span>
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-[#a8b0c0]">
                    {cert.program} • {cert.period}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ============================================================ */}
          {/* CARD 2: BEYOND ENGINEERING (ATHLETIC LEADERSHIP) */}
          {/* ============================================================ */}
          <div className="rounded-3xl border border-slate-200/90 dark:border-white/8 bg-white/60 dark:bg-[#121826] p-6 sm:p-8 flex flex-col justify-between hover:border-amber-500/40 dark:hover:border-amber-500/30 transition-all duration-200 shadow-2xs">
            <div className="space-y-6">
              <div className="flex items-center justify-between gap-2">
                <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border border-amber-200/60 dark:border-amber-800/30">
                  <Trophy className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono-tech text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 px-2.5 py-1 rounded-full border border-amber-200/60 dark:border-amber-800/30 font-semibold">
                  Competitive Sports
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-[#f5f7fa] tracking-tight mb-1">
                  {cricketLeadership.universityRole}
                </h3>
                <p className="text-base font-semibold text-amber-600 dark:text-amber-400 mb-2">
                  Kaimur District Representative (U14, U16, U19)
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
                  {cricketLeadership.narrative}
                </p>
              </div>

              {/* Leadership Attributes Bullets */}
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/6">
                <span className="text-xs font-mono-tech uppercase tracking-wider text-slate-500 dark:text-[#a8b0c0] font-semibold">
                  Key Leadership Principles:
                </span>
                <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-[#a8b0c0]">
                  {cricketLeadership.qualities.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
