'use client';

import { useEffect, useState } from 'react';
import { useThemeStore } from '@/store/themeStore';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    // Remove all existing theme classes
    root.classList.remove('theme-minimal', 'theme-cyberpunk', 'theme-gamer', 'theme-creative3d');

    // Add the current theme class if it exists
    if (theme) {
      root.classList.add(`theme-${theme}`);
    }
  }, [theme, mounted]);

  // To prevent hydration mismatch, we might render nothing or just children
  // without the theme applied until mounted. However, since the class is on HTML,
  // returning children is fine.
  return <>{children}</>;
}
