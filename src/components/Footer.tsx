'use client';

import { useThemeStore } from '@/store/themeStore';
import { ArrowUp, Code, Briefcase, Globe } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const { theme } = useThemeStore();

  if (!theme) return null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-background mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="text-2xl font-bold tracking-tighter mb-2">
              <span className="text-primary">{'<'}</span>
              Dev
              <span className="text-primary">{'>'}</span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left max-w-sm">
              Building world-class digital experiences. Full-stack developer & UI/UX enthusiast.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="p-2 rounded-full hover:bg-muted text-foreground transition-colors">
              <Code className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-muted text-foreground transition-colors">
              <Briefcase className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-muted text-foreground transition-colors">
              <Globe className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
              title="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} [MY NAME]. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
