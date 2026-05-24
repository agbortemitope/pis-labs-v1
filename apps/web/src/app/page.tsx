import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ArrowRight, Search, Monitor, Rocket } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white selection:bg-[#6600ff]/10">
      <Navbar />
      <main className="flex-grow flex flex-col items-center pt-32 pb-24 px-6 max-w-7xl mx-auto w-full">
        
        {/* Hero Section */}
        <div className="text-center space-y-4 mb-24 max-w-3xl mx-auto">
          <p className="text-[#4D4D4D] font-bold text-[10px] tracking-[0.2em] uppercase font-heading">
            What are you trying to do right now?
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] font-heading tracking-tight leading-tight">
            Select your path into <br />
            the PIS Labs ecosystem.
          </h1>
          <p className="text-[#4D4D4D] text-base md:text-lg font-medium">
            Three pipelines. One decision. No wrong answer.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-32 max-w-6xl mx-auto">
          <Link href="/consulting" className="group flex flex-col items-center text-center p-12 bg-white rounded-2xl border border-black/5 hover:border-[#6600ff]/30 transition-all hover:shadow-[0_20px_40px_rgba(102,0,255,0.06)]">
            <div className="w-16 h-16 flex items-center justify-center mb-8 text-[#6600ff]">
              <Search className="w-8 h-8 stroke-[1.5]" />
            </div>
            <h3 className="text-[#111827] font-bold text-xl mb-2 font-heading tracking-tight">Fix My Operations</h3>
            <p className="text-[#4D4D4D] text-sm mb-8 font-medium">Consulting and Systems</p>
            <span className="text-[#6600ff] font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
              Request audit <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link href="/workshops" className="group flex flex-col items-center text-center p-12 bg-white rounded-2xl border border-black/5 hover:border-[#6600ff]/30 transition-all hover:shadow-[0_20px_40px_rgba(102,0,255,0.06)]">
            <div className="w-16 h-16 flex items-center justify-center mb-8 text-[#6600ff]">
              <Monitor className="w-8 h-8 stroke-[1.5]" />
            </div>
            <h3 className="text-[#111827] font-bold text-xl mb-2 font-heading tracking-tight">Build With PIS Labs</h3>
            <p className="text-[#4D4D4D] text-sm mb-8 font-medium">Workshops and Talent</p>
            <span className="text-[#6600ff] font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
              Apply now <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link href="/studio" className="group flex flex-col items-center text-center p-12 bg-white rounded-2xl border border-black/5 hover:border-[#6600ff]/30 transition-all hover:shadow-[0_20px_40px_rgba(102,0,255,0.06)]">
            <div className="w-16 h-16 flex items-center justify-center mb-8 text-[#6600ff]">
              <Rocket className="w-8 h-8 stroke-[1.5]" />
            </div>
            <h3 className="text-[#111827] font-bold text-xl mb-2 font-heading tracking-tight">Pitch a Venture</h3>
            <p className="text-[#4D4D4D] text-sm mb-8 font-medium">Studio Partnerships</p>
            <span className="text-[#6600ff] font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
              Submit idea <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>

        {/* Divider Section */}
        <div className="w-full h-px bg-black/5 mb-32"></div>

        {/* What We Do Section */}
        <div className="w-full mb-48 text-center max-w-4xl mx-auto">
          <p className="text-[#4D4D4D] font-bold text-[10px] tracking-[0.2em] uppercase font-heading mb-8">
            WHAT WE DO
          </p>
          <h2 className="text-[#111827] text-2xl md:text-3xl lg:text-4xl font-bold font-heading tracking-tight leading-tight mb-16">
            We design operational systems, build elite technical teams, and develop venture-backed products.
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-4xl mx-auto px-6">
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
              <span className="text-[#6600ff] font-bold text-sm font-heading">01</span>
              <h4 className="text-[#111827] font-bold text-xl font-heading tracking-tight">Diagnose</h4>
              <p className="text-[#4D4D4D] text-sm font-medium">Audit and blueprint</p>
            </div>
            
            <ArrowRight className="hidden md:block w-6 h-6 text-black/10" />

            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
              <span className="text-[#6600ff] font-bold text-sm font-heading">02</span>
              <h4 className="text-[#111827] font-bold text-xl font-heading tracking-tight">Build</h4>
              <p className="text-[#4D4D4D] text-sm font-medium">Implement and ship</p>
            </div>

            <ArrowRight className="hidden md:block w-6 h-6 text-black/10" />

            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
              <span className="text-[#6600ff] font-bold text-sm font-heading">03</span>
              <h4 className="text-[#111827] font-bold text-xl font-heading tracking-tight">Scale</h4>
              <p className="text-[#4D4D4D] text-sm font-medium">Hand off and grow</p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="w-full text-center max-w-3xl mx-auto pb-32">
          <p className="text-[#4D4D4D] font-bold text-[10px] tracking-[0.2em] uppercase font-heading mb-8">
            OUR MISSION
          </p>
          <h2 className="text-[#111827] text-3xl md:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-tight mb-12">
            We turn complex operations into competitive advantages.
          </h2>
          <p className="text-[#4D4D4D] text-base md:text-lg leading-relaxed mb-12 font-medium">
            At PIS Labs, we believe that the next generation of industry leaders will be defined by their ability to integrate AI into their core operations. We're here to bridge the gap between traditional business logic and the technical frontier.
          </p>
          <Link 
            href="/booking"
            className="inline-flex items-center justify-center bg-[#6600ff] text-white px-10 py-4 rounded-xl font-bold text-sm hover:bg-[#3D0099] transition-all shadow-[0_10px_30px_rgba(102,0,255,0.2)]"
          >
            Work with us
          </Link>
        </div>

      </main>
      <Footer />
    </div>
  );
}
