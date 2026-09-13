import React from "react";
import { clsx } from "clsx";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "default" | "accent" | "cyan" | "success" | "warning" | "mono";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  size = "md",
  className,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default:
      "bg-slate-100 dark:bg-[#0f1420] text-slate-800 dark:text-[#a8b0c0] border border-slate-200 dark:border-white/10",
    accent:
      "bg-blue-50 dark:bg-[#5b8cff]/10 text-blue-700 dark:text-[#5b8cff] border border-blue-200 dark:border-[#5b8cff]/25",
    cyan:
      "bg-cyan-50 dark:bg-[#67e8f9]/10 text-cyan-800 dark:text-[#67e8f9] border border-cyan-200 dark:border-[#67e8f9]/25",
    success:
      "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60",
    warning:
      "bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60",
    mono:
      "bg-slate-100 dark:bg-[#0f1420] text-slate-700 dark:text-[#a8b0c0] border border-slate-300 dark:border-white/10 font-mono-tech",
  };

  const sizeStyles = {
    sm: "text-xs px-2 py-0.5 rounded",
    md: "text-xs sm:text-sm px-2.5 py-1 rounded-md",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 font-medium tracking-tight transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
