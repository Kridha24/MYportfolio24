import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { CERTIFICATIONS_DATA } from "@/data/education";
import { ACHIEVEMENTS_DATA } from "@/data/achievements";
import { Award, Trophy, CheckCircle2, Sparkles, Code2, Terminal, Network, ShieldCheck } from "lucide-react";

export function CertificationsAchievementsSection() {
  const getCertIcon = (id: string) => {
    switch (id) {
      case "hackerrank-ps":
        return <Code2 className="w-4 h-4 text-emerald-500" aria-hidden="true" />;
      case "cisco-python":
        return <Terminal className="w-4 h-4 text-[#38bdf8]" aria-hidden="true" />;
      case "neo4j-graphacademy":
        return <Network className="w-4 h-4 text-violet-500" aria-hidden="true" />;
      case "mobile-malware-forensics":
      default:
        return <ShieldCheck className="w-4 h-4 text-amber-500" aria-hidden="true" />;
    }
  };

  return (
    <section
      id="certifications"
      className="py-20 border-t border-slate-200/80 dark:border-white/8"
      aria-label="Certifications and Achievements"
    >
      <Container>
        <SectionHeading
          eyebrow="CERTIFICATIONS & ACHIEVEMENTS // 06"
          title="Certifications, Hackathons & Leadership"
          description="Verified technical certifications, competitive machine-learning and hackathon builds, and leadership milestones from my resume."
        />

        <div className="space-y-14">
          {/* 1. Hackathons & Achievements */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-500">
                <Trophy className="w-4 h-4" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-[#f5f7fa]">
                Hackathons &amp; Achievements
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {ACHIEVEMENTS_DATA.map((item) => (
                <div
                  key={item.id}
                  className="rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white/70 dark:bg-[#121826]/90 p-6 sm:p-7 flex flex-col justify-between gap-5 shadow-2xs hover:border-[#4f7cff]/40 transition-all duration-150 ease-out hover:-translate-y-0.5 will-change-transform"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono-tech uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/25">
                        <Sparkles className="w-3 h-3" aria-hidden="true" />
                        {item.badge}
                      </span>
                      <span className="text-[11px] font-mono-tech text-slate-500 dark:text-[#a8b0c0]">
                        {item.category}
                      </span>
                    </div>

                    <div>
                      <div className="text-xs font-mono-tech text-[#2563eb] dark:text-[#5b8cff] font-semibold">
                        {item.event}
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-[#f5f7fa] mt-0.5">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-[#a8b0c0] mt-2 leading-relaxed">
                        {item.summary}
                      </p>
                    </div>

                    <ul className="space-y-2">
                      {item.highlights.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-slate-600 dark:text-[#cbd5e1] leading-relaxed"
                        >
                          <CheckCircle2
                            className="w-3.5 h-3.5 text-[#2563eb] dark:text-[#5b8cff] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/70 dark:border-white/8">
                    {item.technologies.map((tech) => (
                      <Badge key={tech} variant="default" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Verified Certifications */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/25 text-[#2563eb] dark:text-[#5b8cff]">
                <Award className="w-4 h-4" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-[#f5f7fa]">
                Certifications
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div
                  key={cert.id}
                  className="rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white/70 dark:bg-[#121826]/90 p-6 sm:p-7 flex flex-col justify-between gap-4 shadow-2xs hover:border-[#4f7cff]/40 transition-all duration-150 ease-out hover:-translate-y-0.5 will-change-transform"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="inline-flex items-center gap-2 text-xs font-mono-tech font-semibold text-[#2563eb] dark:text-[#5b8cff]">
                        <span className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/8">
                          {getCertIcon(cert.id)}
                        </span>
                        {cert.program}
                      </span>
                      <Badge variant="cyan" size="sm">
                        {cert.period}
                      </Badge>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 dark:text-[#f5f7fa]">
                      {cert.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/70 dark:border-white/8">
                    {cert.topics.map((topic) => (
                      <Badge key={topic} variant="default" size="sm">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

