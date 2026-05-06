'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ToastButton } from '@/components/ui/ToastButton';

export const Hero = () => {
  return (
    <section className="w-full min-h-[90vh] flex flex-col justify-center items-center text-center px-6 pt-32 pb-20 relative overflow-hidden transition-colors duration-300">
      {/* Subtle background glow/accent for a minimal, premium feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-black/5 dark:bg-white/5 rounded-full blur-[100px] -z-10 pointer-events-none transition-colors duration-300"></div>

      <div className="max-w-5xl mx-auto space-y-8">
        {/* Technical Status Badge */}
        <div className="flex items-center justify-center">
          <div className="inline-flex items-center rounded-full border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] px-4 py-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-300 backdrop-blur-xl shadow-lg dark:shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-colors duration-300">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse"></span>
            Applied AI Venture Studio
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
          Research. Build. <span className="text-zinc-400 dark:text-zinc-500">Distribute.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed transition-colors duration-300">
          We build scalable digital systems by combining technical authority, production-grade AI development, and community-driven distribution.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a href="#ventures" className="flex items-center justify-center gap-2 bg-black dark:bg-zinc-100 text-white dark:text-black px-8 py-4 rounded-full font-semibold hover:bg-zinc-800 dark:hover:bg-white active:scale-[0.98] transition-all duration-200 shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
            Explore Our Ventures
            <ArrowRight className="w-4 h-4" />
          </a>
          <a 
            href="https://whatsapp.com/channel/0029VbCOWfn2ER6phFDY0k0J"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-8 py-4 rounded-full font-semibold text-zinc-600 dark:text-zinc-300 bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 backdrop-blur-xl hover:bg-black/[0.05] dark:hover:bg-white/[0.05] active:scale-[0.98] transition-all duration-200 min-w-[200px]"
          >
            Join PIS Labs Channel
          </a>
        </div>
      </div>
    </section>
  );
};
