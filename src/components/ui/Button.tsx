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
        "bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow active:scale-[0.99] border border-blue-500/20",
      secondary:
        "bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-700/80",
      outline:
        "border border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 bg-transparent text-slate-900 dark:text-slate-100 hover:bg-blue-50/50 dark:hover:bg-blue-950/20",
      ghost:
        "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/60",
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
