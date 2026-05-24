"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button className="flex items-center justify-center p-2 mr-5  rounded-full hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
       {theme === "dark" ? <Sun/>: <Moon/>} 
    </button>
  );
}