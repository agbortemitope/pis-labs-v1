import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const InternalNavbar = () => {
  return (
    <nav className="w-full bg-transparent py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-[#111827] hover:text-[#6600ff] font-bold text-xs uppercase tracking-widest transition-all font-sans"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to hub</span>
        </Link>

        <Link 
          href="/booking"
          className="bg-[#6600ff] text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#3D0099] transition-all shadow-[0_10px_25px_rgba(102,0,255,0.2)]"
        >
          Book strategy call
        </Link>
      </div>
    </nav>
  );
};
