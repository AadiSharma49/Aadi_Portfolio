"use client";

import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        toggleTheme({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
      }}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      className="interactive rounded-md border border-border p-2 text-ink-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-border-hover hover:text-ink"
    >
      {isLight ? <FiMoon className="h-4 w-4" /> : <FiSun className="h-4 w-4" />}
    </button>
  );
}
