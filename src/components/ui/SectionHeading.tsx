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
        <span className="h-px w-6 bg-blue-500" aria-hidden="true" />
        <span className="text-xs sm:text-sm font-mono-tech tracking-wider uppercase text-blue-600 dark:text-blue-400 font-semibold">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
