import { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeCtx {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeCtx>({ isDark: true, toggleTheme: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Hardcoded to true to disable light mode completely
  const isDark = true;
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
}
