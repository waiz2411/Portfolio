import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Theme = 'cyberpunk' | 'minimal' | 'gamer' | 'creative3d' | null;

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resetTheme: () => void;
  hasSelectedTheme: boolean;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: null,
      hasSelectedTheme: false,
      setTheme: (theme) => set({ theme, hasSelectedTheme: true }),
      resetTheme: () => {
        set({ theme: null, hasSelectedTheme: false });
        localStorage.removeItem('portfolio-theme-storage');
      },
    }),
    {
      name: 'portfolio-theme-storage',
    }
  )
);
