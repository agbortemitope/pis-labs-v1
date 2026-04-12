import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import dynamic from 'next/dynamic';

const TheModel = dynamic(() => import('@/components/TheModel').then((mod) => mod.TheModel));
const Ventures = dynamic(() => import('@/components/Ventures').then((mod) => mod.Ventures));
const FounderPhilosophy = dynamic(() => import('@/components/FounderPhilosophy').then((mod) => mod.FounderPhilosophy));
const CTA = dynamic(() => import('@/components/CTA').then((mod) => mod.CTA));
const Footer = dynamic(() => import('@/components/Footer').then((mod) => mod.Footer));

export default function Page() {
  return (
    <div className="min-h-screen text-zinc-900 dark:text-zinc-100 font-sans selection:bg-black/10 dark:selection:bg-white/20 selection:text-black dark:selection:text-white overflow-x-hidden transition-colors duration-300">
      <Navbar />
      <main className="flex flex-col items-center justify-start w-full transition-colors duration-300">
        <Hero />
        <TheModel />
        <Ventures />
        <FounderPhilosophy />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
