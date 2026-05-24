"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/Providers/NextThemeProvider";


export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button className="flex items-center justify-center p-2 mr-5 rounded-full bg-white/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
       {theme === "dark" ? <Sun/>: <Moon/>} 
    </button>
  );
}