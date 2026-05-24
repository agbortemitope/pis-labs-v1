import React from 'react';
import { InternalNavbar } from '@/components/InternalNavbar';
import { Footer } from '@/components/Footer';
import { StudioForm } from '@/components/forms/StudioForm';

export default function StudioPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F9F9F9] selection:bg-[#6600ff]/10">
      <InternalNavbar />
      
      <main className="flex-grow flex flex-col items-center pt-24 pb-32 w-full">
        <div className="w-full max-w-5xl mx-auto px-6 mb-24">
          <div className="text-center space-y-4 mb-20">
            <p className="text-[#6600ff] font-bold text-[10px] tracking-[0.2em] uppercase font-heading">
              EQUITY PARTNERSHIP
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] font-heading tracking-tight leading-tight">
              We partner with domain experts <br className="hidden sm:block" /><span className="text-[#6600ff]">to build & scale.</span>
            </h1>
            <p className="text-[#4D4D4D] text-base md:text-lg font-medium max-w-2xl mx-auto">
              You bring the domain expertise and distribution. We build the scalable system and product.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-b border-black/10 w-full mb-12 bg-white">
            <div className="p-12 md:border-r border-black/10">
              <span className="text-[#4D4D4D] font-bold text-[10px] tracking-[0.2em] uppercase mb-4 block">WHAT WE ACCEPT</span>
              <p className="text-[#111827] text-lg font-medium font-heading tracking-tight leading-relaxed">
                Validated problems, deep industry expertise, early market traction.
              </p>
            </div>
            <div className="p-12">
              <span className="text-[#4D4D4D] font-bold text-[10px] tracking-[0.2em] uppercase mb-4 block">WHAT WE PROVIDE</span>
              <p className="text-[#111827] text-lg font-medium font-heading tracking-tight leading-relaxed">
                Technical execution, scalable architecture, product development.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#4D4D4D] font-bold text-[10px] tracking-[0.2em] uppercase">
              SUBMIT YOUR IDEA
            </p>
          </div>
          <StudioForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}
