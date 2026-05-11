"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const STORAGE_KEY = "zoro-theme";

type ResolvedTheme = "light" | "dark";

function applyTheme(theme: ResolvedTheme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<ResolvedTheme>("light");

  useEffect(() => {
    const activeTheme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";

    setTheme(activeTheme);
  }, []);

  function toggleTheme() {
    const currentTheme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    applyTheme(nextTheme);
    localStorage.setItem(STORAGE_KEY, nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-title shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-surface-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2 focus-visible:ring-offset-page"
      aria-label="Toggle color theme"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <Sun aria-hidden="true" className="h-4 w-4 scale-100 rotate-0 transition dark:scale-0 dark:-rotate-90" />
      <Moon aria-hidden="true" className="absolute h-4 w-4 scale-0 rotate-90 transition dark:scale-100 dark:rotate-0" />
    </button>
  );
}
