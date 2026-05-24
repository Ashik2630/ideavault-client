// app/providers.tsx
"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { LoadingProvider } from "@/components/LoadingProvider";

const ThemeContext = createContext(null);

export function Providers({ children }) {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = typeof window !== "undefined" ? localStorage.getItem("theme") : null;

    if (storedTheme === "dark" || storedTheme === "light") {
      setTheme(storedTheme);
    } else if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <LoadingProvider>{children}</LoadingProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
