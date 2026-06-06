import React from 'react';
import { InternalNavbar } from '@/components/InternalNavbar';
import { Footer } from '@/components/Footer';
import { ConsultingForm } from '@/components/forms/ConsultingForm';

export default function ConsultingPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F9F9F9] selection:bg-[#6600ff]/10">
      <InternalNavbar />
      
      <main className="flex-grow flex flex-col items-center pt-24 pb-32 w-full">
        <div className="w-full max-w-5xl mx-auto px-6 mb-24">
          <div className="text-center space-y-4 mb-20">
            <p className="text-[#6600ff] font-bold text-[10px] tracking-[0.2em] uppercase font-heading">
              OPERATIONAL SYSTEMS
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] font-heading tracking-tight leading-tight">
              Your operations are breaking <br className="hidden sm:block" /><span className="text-[#6600ff]">as you scale.</span>
            </h1>
            <p className="text-[#4D4D4D] text-base md:text-lg font-medium max-w-2xl mx-auto">
              We design and implement systems that remove bottlenecks and restore control. For SMEs and scaling founders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-black/10 w-full mb-12 relative bg-white">
            <div className="p-10 md:border-r border-black/10">
              <span className="text-[#4D4D4D] font-bold text-[10px] tracking-[0.2em] uppercase mb-4 block">01</span>
              <h3 className="text-[#111827] font-bold text-xl mb-4 font-heading tracking-tight">Audit & Blueprint</h3>
              <p className="text-[#4D4D4D] text-sm font-medium leading-relaxed">
                Map every broken system. Produce a prioritised build plan.
              </p>
            </div>
            <div className="p-10 md:border-r border-black/10">
              <span className="text-[#4D4D4D] font-bold text-[10px] tracking-[0.2em] uppercase mb-4 block">02</span>
              <h3 className="text-[#111827] font-bold text-xl mb-4 font-heading tracking-tight">Implementation</h3>
              <p className="text-[#4D4D4D] text-sm font-medium leading-relaxed">
                Embed as your systems architect. 4-12 week sprints.
              </p>
            </div>
            <div className="p-10">
              <span className="text-[#4D4D4D] font-bold text-[10px] tracking-[0.2em] uppercase mb-4 block">03</span>
              <h3 className="text-[#111827] font-bold text-xl mb-4 font-heading tracking-tight">Handoff</h3>
              <p className="text-[#4D4D4D] text-sm font-medium leading-relaxed">
                Full documentation, training, clean handoff. No dependency.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#4D4D4D] font-bold text-[10px] tracking-[0.2em] uppercase">
              REQUEST YOUR SYSTEMS AUDIT
            </p>
          </div>
          <ConsultingForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}
