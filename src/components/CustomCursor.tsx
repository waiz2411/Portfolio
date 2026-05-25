'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useThemeStore } from '@/store/themeStore';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const { theme } = useThemeStore();

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const isThemeSelector = !theme;

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.5,
      backgroundColor: isThemeSelector ? '#ffffff' : 'var(--primary)',
      mixBlendMode: 'difference' as any,
    },
  };

  return (
    <motion.div
      className={`fixed top-0 left-0 w-8 h-8 rounded-full border-2 pointer-events-none z-[100] transition-colors duration-300 ${isThemeSelector ? 'border-white' : 'border-primary'}`}
      variants={variants}
      animate={isHovering ? 'hover' : 'default'}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
      style={{
        boxShadow: theme === 'cyberpunk' ? '0 0 10px var(--primary)' : 'none',
      }}
    />
  );
}
