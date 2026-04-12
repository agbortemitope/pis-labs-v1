'use client';

import React, { useEffect, useState } from 'react';
import { InlineWidget } from 'react-calendly';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function BookingPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-zinc-900 dark:text-zinc-100 font-sans selection:bg-black/10 dark:selection:bg-white/20 selection:text-black dark:selection:text-white flex flex-col transition-colors duration-300">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-start w-full pt-32 pb-24 px-6 md:px-12 bg-zinc-50/50 dark:bg-black/20">
        <div className="max-w-4xl w-full text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Schedule a Consultation</h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
            Book a 30-minute discovery call to discuss how we can engineer an Applied AI infrastructure or digital ecosystem for your specific needs.
          </p>
        </div>
        
        {/* Calendly Embed Wrapper */}
        <div className="w-full max-w-5xl bg-white dark:bg-[#09090b] rounded-[2.5rem] overflow-hidden shadow-2xl border border-black/5 dark:border-white/5 min-h-[700px] relative transition-colors duration-300">
          {mounted ? (
            <InlineWidget 
              url="https://calendly.com/pis-labs/30min" 
              styles={{ height: '700px', width: '100%' }}
              pageSettings={{
                backgroundColor: '09090b', // dark mode default
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: 'ffffff',
                textColor: 'e4e4e7'
              }}
            />
          ) : (
            <div className="w-full h-full min-h-[700px] flex flex-col items-center justify-start p-12 bg-white dark:bg-[#09090b] animate-pulse">
              <div className="w-24 h-24 bg-zinc-200 dark:bg-zinc-800 rounded-full mb-6"></div>
              <div className="w-48 h-6 bg-zinc-200 dark:bg-zinc-800 rounded-md mb-3"></div>
              <div className="w-32 h-4 bg-zinc-200 dark:bg-zinc-800 rounded-md mb-10"></div>
              <div className="w-full max-w-3xl border border-zinc-200 dark:border-zinc-800 rounded-2xl flex p-6 gap-6">
                 <div className="w-1/3 flex flex-col gap-4">
                    <div className="w-full h-8 bg-zinc-200 dark:bg-zinc-800 rounded-md"></div>
                    <div className="w-3/4 h-4 bg-zinc-200 dark:bg-zinc-800 rounded-md"></div>
                    <div className="w-1/2 h-4 bg-zinc-200 dark:bg-zinc-800 rounded-md"></div>
                 </div>
                 <div className="w-2/3 h-96 bg-zinc-200 dark:bg-zinc-800 rounded-xl"></div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
