'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm border-b border-black/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between font-sans">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-[#111827] font-bold text-xl tracking-tighter font-heading uppercase">PIS Labs</span>
          <span className="hidden sm:block w-px h-4 bg-black/10"></span>
          <span className="hidden sm:block text-[10px] font-bold text-[#4D4D4D] tracking-[0.15em] uppercase font-heading">Venture Studio</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          <Link href="/consulting" className="text-[#4D4D4D] hover:text-[#6600ff] font-bold text-[10px] tracking-[0.2em] uppercase transition-all font-heading">Consulting</Link>
          <Link href="/workshops" className="text-[#4D4D4D] hover:text-[#6600ff] font-bold text-[10px] tracking-[0.2em] uppercase transition-all font-heading">Workshops</Link>
          <Link href="/studio" className="text-[#4D4D4D] hover:text-[#6600ff] font-bold text-[10px] tracking-[0.2em] uppercase transition-all font-heading">Studio</Link>
        </div>

        <div className="flex items-center gap-6">
          <Link 
            href="/booking"
            className="bg-[#6600ff] text-white px-8 py-2.5 rounded-xl font-bold text-[10px] tracking-[0.1em] uppercase hover:bg-[#3D0099] transition-all shadow-[0_10px_20px_rgba(102,0,255,0.15)]"
          >
            Work with us
          </Link>
        </div>
      </div>
    </nav>
  );
};
