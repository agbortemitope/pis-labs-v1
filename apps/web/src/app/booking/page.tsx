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
    <div className="min-h-screen flex flex-col font-sans bg-[#F9F9F9] selection:bg-[#6600ff]/10">
      <Navbar />
      
      <main className="flex-grow flex flex-col items-center pt-32 pb-32 px-6 w-full">
        <div className="w-full max-w-4xl mx-auto text-center mb-16">
          <p className="text-[#6600ff] font-bold text-[10px] tracking-[0.2em] uppercase font-heading mb-6">
            BOOK A CALL
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] font-heading tracking-tight leading-tight mb-8">
            Schedule a <span className="text-[#6600ff]">consultation.</span>
          </h1>
          <p className="text-[#4D4D4D] text-lg font-medium max-w-2xl mx-auto">
            Book a 30-minute discovery call to discuss how we can engineer an Applied AI infrastructure or digital ecosystem for your specific needs.
          </p>
        </div>
        
        {/* Calendly Embed Wrapper */}
        <div className="w-full max-w-5xl bg-white rounded-[2rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.03)] border border-black/5 min-h-[700px] relative">
          {mounted ? (
            <InlineWidget 
              url="https://calendly.com/pis-labs/30min" 
              styles={{ height: '700px', width: '100%' }}
              pageSettings={{
                backgroundColor: 'ffffff',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: '6600ff',
                textColor: '111827'
              }}
            />
          ) : (
            <div className="w-full h-full min-h-[700px] flex flex-col items-center justify-center p-12 bg-white animate-pulse">
              <div className="w-24 h-24 bg-black/5 rounded-full mb-6"></div>
              <div className="w-48 h-6 bg-black/5 rounded-md mb-3"></div>
              <div className="w-32 h-4 bg-black/5 rounded-md"></div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
