import React from "react";
import Link from "next/link";
import { clsx } from "clsx";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  download?: string | boolean;
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      className,
      href,
      external,
      download,
      disabled,
      isLoading,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none group";

    const variantStyles = {
      primary:
        "bg-gradient-to-r from-[#3b66ff] via-[#4f7cff] to-[#8b5cf6] text-white hover:shadow-[0_0_22px_rgba(79,124,255,0.38)] hover:brightness-105 active:scale-[0.98] border border-white/15 font-semibold transition-all duration-200",
      secondary:
        "bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20 active:scale-[0.98]",
      outline:
        "bg-transparent text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-white/15 hover:border-[#4f7cff] dark:hover:border-[#4f7cff] hover:bg-[#4f7cff]/5 dark:hover:bg-[#4f7cff]/10 hover:shadow-[0_0_16px_rgba(79,124,255,0.22)] active:scale-[0.98]",
      ghost:
        "text-slate-700 dark:text-[#a8b3c7] hover:text-[#4f7cff] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 active:scale-[0.98]",
    };

    const sizeStyles = {
      sm: "text-xs px-3 py-1.5 gap-1.5 min-h-[32px]",
      md: "text-sm px-4 py-2 gap-2 min-h-[40px]",
      lg: "text-base px-5 py-2.5 gap-2.5 min-h-[46px]",
    };

    const combinedClassName = clsx(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href && !disabled) {
      if (download || external) {
        return (
          <a
            href={href}
            download={download}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className={combinedClassName}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClassName}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={combinedClassName}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
