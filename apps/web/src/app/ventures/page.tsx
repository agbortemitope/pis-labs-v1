import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Ventures } from '@/components/sections/Ventures';

export const metadata = {
  title: "Ventures | PIS Labs",
  description: "Explore the current and past ventures built by PIS Labs, from Applied AI systems to financial infrastructure.",
};

export default function VenturesPage() {
  return (
    <div className="min-h-screen text-zinc-900 dark:text-zinc-100 font-sans selection:bg-black/10 dark:selection:bg-white/20 selection:text-black dark:selection:text-white overflow-x-hidden transition-colors duration-300">
      <Navbar />
      <main className="pt-32 pb-24 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6 mb-12">
           <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Ventures</h1>
           <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl leading-relaxed">
             A portfolio of production-grade systems, AI-powered tools, and digital infrastructure engineered for high-impact utility.
           </p>
        </div>
        
        {/* Re-using the Ventures section component */}
        <div className="-mt-24">
           <Ventures />
        </div>
      </main>
      <Footer />
    </div>
  );
}
