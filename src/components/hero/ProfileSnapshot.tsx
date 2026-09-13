import React from "react";
import { Container } from "@/components/ui/Container";
import { GraduationCap, Briefcase, Cpu, Trophy } from "lucide-react";

interface CredentialSignal {
  icon: React.ReactNode;
  label: string;
  subtext: string;
}

const CREDENTIAL_SIGNALS: CredentialSignal[] = [
  {
    icon: <GraduationCap className="w-4 h-4 text-[#2563eb] dark:text-[#5b8cff]" />,
    label: "B.Tech CSE",
    subtext: "IKGPTU (2023–Present)",
  },
  {
    icon: <Briefcase className="w-4 h-4 text-cyan-600 dark:text-[#67e8f9]" />,
    label: "2 Internships",
    subtext: "Agastyaan & 3Skills",
  },
  {
    icon: <Cpu className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
    label: "AI + Full-Stack Focus",
    subtext: "Vision & Web Systems",
  },
  {
    icon: <Trophy className="w-4 h-4 text-amber-500 dark:text-amber-400" />,
    label: "Cricket Vice-Captain",
    subtext: "University & District Lead",
  },
];

export function ProfileSnapshot() {
  return (
    <div className="py-6 border-y border-slate-200/80 dark:border-white/8 bg-white/40 dark:bg-[#0f1420]/40 backdrop-blur-xs">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200/60 dark:divide-white/6">
          {CREDENTIAL_SIGNALS.map((item, idx) => (
            <div
              key={item.label}
              className={`flex items-center gap-3 ${idx > 0 ? "pt-3 md:pt-0 md:pl-6" : ""}`}
            >
              <div className="p-2 rounded-lg bg-slate-100 dark:bg-[#121826] border border-slate-200/60 dark:border-white/6 shrink-0">
                {item.icon}
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold tracking-tight text-slate-900 dark:text-[#f5f7fa] truncate">
                  {item.label}
                </div>
                <div className="text-[11px] font-mono-tech text-slate-500 dark:text-[#a8b0c0] truncate">
                  {item.subtext}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
