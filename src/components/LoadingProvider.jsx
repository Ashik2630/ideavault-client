"use client";

import React, { createContext, useContext, useState } from "react";
const LoadingContext = createContext(null);
export const metadata = {
  title: "IdeaVault || Loading",
}

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin" />
        </div>
      )}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const ctx = useContext(LoadingContext);
  if (!ctx) throw new Error("useLoading must be used within LoadingProvider");
  return ctx;
};

export default LoadingProvider;
