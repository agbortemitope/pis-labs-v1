import React from 'react';
import { InternalNavbar } from '@/components/InternalNavbar';
import { Footer } from '@/components/Footer';
import { WorkshopForm } from '@/components/forms/WorkshopForm';
import { ArrowRight } from 'lucide-react';

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F9F9F9] selection:bg-[#6600ff]/10">
      <InternalNavbar />
      
      <main className="flex-grow flex flex-col items-center pt-24 pb-32 w-full">
        <div className="w-full max-w-5xl mx-auto px-6 mb-24">
          <div className="text-center space-y-4 mb-20">
            <p className="text-[#6600ff] font-bold text-[10px] tracking-[0.2em] uppercase font-heading">
              BUILD SPRINT
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] font-heading tracking-tight leading-tight">
              1-day intensive <br className="hidden sm:block" /><span className="text-[#6600ff]">build sprints.</span>
            </h1>
            <p className="text-[#4D4D4D] text-base md:text-lg font-medium max-w-2xl mx-auto">
              Stop building tutorials. Build production software. For ambitious engineers, researchers, and product designers.
            </p>
          </div>

          <div className="flex flex-col border-t border-b border-black/10 w-full py-12 px-10 bg-white">
            <div className="flex flex-wrap items-center gap-6 mb-6">
              <span className="flex items-center gap-3 text-sm font-bold text-[#111827] font-heading"><span className="w-6 h-6 rounded-full bg-[#6600ff]/10 text-[#6600ff] flex items-center justify-center text-[10px]">01</span> APPLY</span>
              <ArrowRight className="w-4 h-4 text-black/10" />
              <span className="flex items-center gap-3 text-sm font-bold text-[#111827] font-heading"><span className="w-6 h-6 rounded-full bg-[#6600ff]/10 text-[#6600ff] flex items-center justify-center text-[10px]">02</span> PRE-TASK</span>
              <ArrowRight className="w-4 h-4 text-black/10" />
              <span className="flex items-center gap-3 text-sm font-bold text-[#111827] font-heading"><span className="w-6 h-6 rounded-full bg-[#6600ff]/10 text-[#6600ff] flex items-center justify-center text-[10px]">03</span> SPRINT</span>
              <ArrowRight className="w-4 h-4 text-black/10" />
              <span className="flex items-center gap-3 text-sm font-bold text-[#111827] font-heading"><span className="w-6 h-6 rounded-full bg-[#6600ff]/10 text-[#6600ff] flex items-center justify-center text-[10px]">04</span> BUILD SYSTEMS</span>
            </div>
            <div className="text-[#6600ff] text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              ★ TOP 10% OF PARTICIPANTS MOVE INTO LIVE VENTURE BUILDS.
            </div>
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#4D4D4D] font-bold text-[10px] tracking-[0.2em] uppercase">
              APPLY FOR THE NEXT SPRINT
            </p>
          </div>
          <WorkshopForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}
