'use client';

import { useThemeStore } from "@/store/themeStore";
import { ThemeSelector } from "@/components/ThemeSelector";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { useEffect, useState } from "react";

export default function Home() {
  const { hasSelectedTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!hasSelectedTheme) {
    return <ThemeSelector />;
  }

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
