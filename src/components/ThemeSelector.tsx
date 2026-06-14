'use client';

import { useThemeStore, Theme } from '@/store/themeStore';
import { motion } from 'framer-motion';

const themes: { id: Theme; name: string; description: string; colors: string[] }[] = [
  {
    id: 'minimal',
    name: 'Minimalist Elegance',
    description: 'Clean, elegant, and professional design with soft shadows.',
    colors: ['#ffffff', '#000000', '#f3f4f6'],
  },
  {
    id: 'cyberpunk',
    name: 'Futuristic Neon',
    description: 'Neon UI, dark futuristic design with glowing effects.',
    colors: ['#1e1b4b', '#f472b6', '#22d3ee'],
  },
  {
    id: 'gamer',
    name: 'Tactical HUD',
    description: 'Tactical UI inspired by modern FPS games with metallic design.',
    colors: ['#111111', '#ea580c', '#333333'],
  },
  {
    id: 'creative3d',
    name: 'Immersive Spatial',
    description: 'Immersive Three.js experience with animated environments.',
    colors: ['#0f172a', '#a855f7', '#1e293b'],
  },
];

export function ThemeSelector() {
  const { setTheme } = useThemeStore();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white p-4 overflow-y-auto py-12">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">
            Choose Your Experience
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">
            Select a theme to explore the portfolio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {themes.map((theme, index) => (
            <motion.button
              key={theme.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setTheme(theme.id)}
              className="group relative flex flex-col items-start p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-left overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex gap-2 mb-6">
                {theme.colors.map((color, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full shadow-lg"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>

              <h2 className="text-2xl font-bold mb-2">{theme.name}</h2>
              <p className="text-gray-400">{theme.description}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
