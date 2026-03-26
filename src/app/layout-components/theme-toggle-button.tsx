"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="inline-flex items-center gap-2 rounded-xl border-3 border-orange-200 p-2 text-lg font-medium text-rose-900 transition-all hover:bg-orange-200 dark:border-slate-600 dark:text-neutral-300 dark:hover:bg-slate-600"
    >
      {theme === "dark" ? (
        <>
          <Sun className="size-5" /> Light
        </>
      ) : (
        <>
          <Moon className="size-5" /> Dark
        </>
      )}
    </button>
  );
}
