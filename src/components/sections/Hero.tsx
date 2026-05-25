'use client';

import { useThemeStore } from '@/store/themeStore';
import portfolioData from '@/data/portfolio.json';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Hero() {
  const { theme } = useThemeStore();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % portfolioData.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Theme Specific Backgrounds */}
      {theme === 'cyberpunk' && (
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-20 blur-[100px]"></div>
        </div>
      )}
      
      {theme === 'minimal' && (
        <div className="absolute inset-0 z-0 bg-background"></div>
      )}

      {theme === 'gamer' && (
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      )}

      {theme === 'creative3d' && (
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/5 to-background">
           {/* We can add a simple Three.js canvas here later */}
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-2 rounded-full border border-border bg-background/50 backdrop-blur-sm text-sm font-medium text-muted-foreground">
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6"
        >
          Hi, I'm <span className="text-primary">{portfolioData.personal.name}</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-12 md:h-16 overflow-hidden mb-8"
        >
          <motion.div
            key={roleIndex}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="text-2xl md:text-4xl lg:text-5xl font-medium text-muted-foreground"
          >
            {portfolioData.roles[roleIndex]}
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-10"
        >
          {portfolioData.personal.bio}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity">
            Hire Me <ArrowRight className="w-5 h-5" />
          </button>
          <a href="/Waiz_Tahseen_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 border border-border bg-background/50 hover:bg-muted rounded-full font-semibold transition-colors">
            Download Resume <Download className="w-5 h-5" />
          </a>
        </motion.div>
        
      </div>
    </section>
  );
}
