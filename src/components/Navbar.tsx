'use client';

import { useThemeStore } from '@/store/themeStore';
import { motion } from 'framer-motion';
import { Palette, Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function Navbar() {
  const { theme, resetTheme } = useThemeStore();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // If no theme is selected yet, don't show the main navbar
  if (!theme) return null;

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md border-b border-border bg-background/80"
    >
      <Link href="/" className="text-2xl font-bold tracking-tighter">
        <span className="text-primary">{'<'}</span>
        Dev
        <span className="text-primary">{'>'}</span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <Link 
            key={link.name} 
            href={link.href}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => {
            resetTheme();
            router.push('/');
          }}
          className="p-2 rounded-full hover:bg-muted transition-colors"
          title="Change Theme"
        >
          <Palette className="w-5 h-5 text-foreground" />
        </button>

        <button 
          className="md:hidden p-2 rounded-md hover:bg-muted"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="w-5 h-5 text-foreground" />
        </button>
      </div>
    </motion.nav>
  );
}
