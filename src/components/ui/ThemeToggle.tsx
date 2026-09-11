"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors cursor-pointer border border-transparent hover:border-slate-300 dark:hover:border-slate-700"
      aria-label={
        mounted
          ? `Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`
          : "Toggle color theme"
      }
      title={
        mounted
          ? `Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`
          : "Toggle color theme"
      }
    >
      <span className="sr-only">Toggle theme</span>
      {mounted ? (
        resolvedTheme === "dark" ? (
          <Sun className="w-4 h-4 text-amber-400" aria-hidden="true" />
        ) : (
          <Moon className="w-4 h-4 text-slate-700" aria-hidden="true" />
        )
      ) : (
        <div className="w-4 h-4" aria-hidden="true" />
      )}
    </button>
  );
}
