import React, { Suspense } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TheModel } from '@/components/TheModel';
import { Ventures } from '@/components/Ventures';
import { FounderPhilosophy } from '@/components/FounderPhilosophy';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <div className="min-h-screen text-zinc-900 dark:text-zinc-100 font-sans selection:bg-black/10 dark:selection:bg-white/20 selection:text-black dark:selection:text-white overflow-x-hidden transition-colors duration-300">
      <Navbar />
      <main className="flex flex-col items-center justify-start w-full transition-colors duration-300">
        <Hero />
        <TheModel />
        <Suspense fallback={<div className="w-full py-24 px-6 flex justify-center"><div className="w-8 h-8 border-4 border-zinc-200 dark:border-zinc-800 border-t-zinc-600 dark:border-t-zinc-400 rounded-full animate-spin"></div></div>}>
          <Ventures />
        </Suspense>
        <FounderPhilosophy />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
