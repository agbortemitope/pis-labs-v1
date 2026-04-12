'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { ThemeToggle } from '@/components/ThemeToggle';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Model', href: '#model' },
    { name: 'Ventures', href: '#ventures' },
    { name: 'Philosophy', href: '#research' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 dark:bg-black/80 backdrop-blur-2xl border-b border-black/5 dark:border-white/5 py-4' 
        : 'bg-transparent py-6'
    }`}>
      {/* Scroll Progress Indicator */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-black dark:bg-white origin-left z-[60]"
        style={{ scaleX }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-black dark:bg-zinc-100 text-white dark:text-black flex items-center justify-center font-bold text-xl rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300">
            P
          </div>
          <span className="text-zinc-900 dark:text-zinc-100 font-bold tracking-tight text-xl">PIS Labs</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-8 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Vertical Separator */}
          <div className="h-4 w-px bg-black/10 dark:bg-white/10 mx-2"></div>

          <div className="flex items-center gap-4">
            <a 
              href="/booking"
              className="bg-black dark:bg-zinc-100 text-white dark:text-black px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-zinc-800 dark:hover:bg-white transition-all active:scale-[0.98] shadow-xl dark:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            >
              Book Now
            </a>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Toggle & Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button 
            className="p-2 text-zinc-900 dark:text-zinc-100 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden border-t border-black/5 dark:border-white/5 bg-white dark:bg-zinc-950 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6">
              <div className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="pt-6 border-t border-black/5 dark:border-white/5 flex flex-col gap-4">
                <a 
                  href="/booking"
                  className="w-full py-4 rounded-2xl bg-black dark:bg-zinc-100 text-white dark:text-black font-bold text-center shadow-lg"
                >
                  Book Consultation
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
