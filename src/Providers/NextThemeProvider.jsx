// app/providers.tsx
"use client";

import { ThemeProvider } from "next-themes";
import { LoadingProvider } from "@/components/LoadingProvider";

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <LoadingProvider>{children}</LoadingProvider>
    </ThemeProvider>
  );
}
