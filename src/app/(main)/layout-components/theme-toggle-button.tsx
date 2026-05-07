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
      className="inline-flex items-center gap-2 rounded-xl border-3 border-gray-500 p-2 text-lg font-semibold text-neutral-200 hover:bg-gray-500"
    >
      {theme === "dark" ? (
        <>
          <Moon className="size-5" /> Dark
        </>
      ) : (
        <>
          <Sun className="size-5" /> Light
        </>
      )}
    </button>
  );
}
