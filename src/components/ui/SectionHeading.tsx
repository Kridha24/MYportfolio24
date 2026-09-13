import React from "react";
import { clsx } from "clsx";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "space-y-3 mb-12",
        align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl",
        className
      )}
    >
      <div className="inline-flex items-center gap-2">
        <span className="h-px w-6 bg-[#2563eb] dark:bg-[#5b8cff]" aria-hidden="true" />
        <span className="text-xs font-mono-tech tracking-wider uppercase text-[#2563eb] dark:text-[#5b8cff] font-semibold">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-[#f5f7fa]">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-slate-600 dark:text-[#a8b0c0] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
