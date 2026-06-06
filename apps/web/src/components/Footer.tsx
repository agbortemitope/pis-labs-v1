import React from 'react';
import { Linkedin, Github, Facebook, Instagram } from 'lucide-react';

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

export const Footer = () => {
  return (
    <footer className="w-full bg-transparent border-t border-black/5 mt-auto transition-colors duration-300 font-sans selection:bg-[#6600ff]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-1 space-y-4">
            <h3 className="text-[#111827] font-bold text-xl font-heading tracking-tight">PIS Labs</h3>
            <p className="text-[#4D4D4D] text-sm leading-relaxed max-w-[240px]">
              Building the future of operational efficiency through Applied AI.
            </p>
          </div>

          {/* Services Section */}
          <div className="space-y-6">
            <h4 className="text-[#111827] font-bold text-xs uppercase tracking-widest font-heading">SERVICES</h4>
            <div className="flex flex-col gap-3">
              <a href="/consulting" className="text-[#4D4D4D] hover:text-[#6600ff] transition-colors text-sm font-medium">Operations Audit</a>
              <a href="/workshops" className="text-[#4D4D4D] hover:text-[#6600ff] transition-colors text-sm font-medium">Technical Talent</a>
              <a href="/studio" className="text-[#4D4D4D] hover:text-[#6600ff] transition-colors text-sm font-medium">Venture Building</a>
            </div>
          </div>

          {/* Company Section */}
          <div className="space-y-6">
            <h4 className="text-[#111827] font-bold text-xs uppercase tracking-widest font-heading">COMPANY</h4>
            <div className="flex flex-col gap-3">
              <a href="/#model" className="text-[#4D4D4D] hover:text-[#6600ff] transition-colors text-sm font-medium">About Us</a>
              <a href="#" className="text-[#4D4D4D] hover:text-[#6600ff] transition-colors text-sm font-medium">Careers</a>
              <a href="mailto:contact@pis-labs.com" className="text-[#4D4D4D] hover:text-[#6600ff] transition-colors text-sm font-medium">Contact</a>
            </div>
          </div>

          {/* Social Section */}
          <div className="space-y-6">
            <h4 className="text-[#111827] font-bold text-xs uppercase tracking-widest font-heading">SOCIAL</h4>
            <div className="flex gap-5">
              <a href="https://www.linkedin.com/company/pislabs/" target="_blank" rel="noopener noreferrer" className="text-[#4D4D4D] hover:text-[#111827] transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="https://x.com/pislabs" target="_blank" rel="noopener noreferrer" className="text-[#4D4D4D] hover:text-[#111827] transition-colors"><XIcon className="w-5 h-5" /></a>
              <a href="https://www.instagram.com/pis_labs/" target="_blank" rel="noopener noreferrer" className="text-[#4D4D4D] hover:text-[#111827] transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="https://www.facebook.com/pislabs" target="_blank" rel="noopener noreferrer" className="text-[#4D4D4D] hover:text-[#111827] transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="https://t.me/pislabs" target="_blank" rel="noopener noreferrer" className="text-[#4D4D4D] hover:text-[#111827] transition-colors"><TelegramIcon className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[#4D4D4D] text-[10px] font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} PIS LABS VENTURE STUDIO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-[#4D4D4D]">
            <a href="/privacy" className="hover:text-[#6600ff] transition-colors">PRIVACY POLICY</a>
            <a href="/terms" className="hover:text-[#6600ff] transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
