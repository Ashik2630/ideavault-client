"use client";
import { ThemeProvider, useTheme } from "next-themes";
import { useEffect } from "react";

const ThemeSyncer = ({ children }) => {
  const { theme, resolvedTheme } = useTheme();
  
  useEffect(() => {
    const currentTheme = theme === 'system' ? resolvedTheme : theme;
    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);
    }
  }, [theme, resolvedTheme]);

  return <>{children}</>;
};

const NextThemeProvider = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <ThemeSyncer>{children}</ThemeSyncer>
    </ThemeProvider>
  );
};

export default NextThemeProvider;
