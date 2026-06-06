import React from 'react';
import { Linkedin, Github, Facebook, Instagram } from 'lucide-react';

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="w-full bg-zinc-50 dark:bg-black/20 border-t border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-black dark:bg-zinc-100 text-white dark:text-black flex items-center justify-center font-bold text-lg rounded-lg shadow-md transition-colors duration-300">
                P
              </div>
              <span className="text-zinc-900 dark:text-zinc-100 font-bold tracking-tight text-xl">PIS Labs</span>
            </div>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed text-sm">
              An Applied AI Venture Studio dedicated to researching, building, and distributing scalable digital systems and production-grade software.
            </p>
          </div>

          {/* Sitemap Section */}
          <div className="space-y-6">
            <h4 className="text-zinc-900 dark:text-zinc-100 font-semibold text-sm uppercase tracking-wider">Explore</h4>
            <div className="grid gap-2 text-sm text-zinc-500 dark:text-zinc-400">
              <a href="/" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Home</a>
              <a href="/research" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Research</a>
              <a href="/ventures" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Ventures</a>
              <a href="/booking" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Booking</a>
              <a href="/build" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Build</a>
              <a href="/distribute" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Distribute</a>
              <a href="/sitemap.xml" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Sitemap</a>
            </div>
          </div>

          {/* Social Section */}
          <div className="space-y-6">
            <h4 className="text-zinc-900 dark:text-zinc-100 font-semibold text-sm uppercase tracking-wider">Connect</h4>
            <div className="flex flex-wrap gap-4">
              <a href="https://x.com/pislabs" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="p-2 rounded-lg bg-black/5 dark:bg-white/5 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-black/10 dark:hover:bg-white/10 transition-all"><XIcon className="w-4 h-4" /></a>
              <a href="https://www.linkedin.com/company/pislabs/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg bg-black/5 dark:bg-white/5 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-black/10 dark:hover:bg-white/10 transition-all"><Linkedin className="w-4 h-4" /></a>
              <a href="https://github.com/pis-labs" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-lg bg-black/5 dark:bg-white/5 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-black/10 dark:hover:bg-white/10 transition-all"><Github className="w-4 h-4" /></a>
              <a href="https://www.facebook.com/pislabs" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 rounded-lg bg-black/5 dark:bg-white/5 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-black/10 dark:hover:bg-white/10 transition-all"><Facebook className="w-4 h-4" /></a>
              <a href="https://www.instagram.com/pis_labs/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded-lg bg-black/5 dark:bg-white/5 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-black/10 dark:hover:bg-white/10 transition-all"><Instagram className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h4 className="text-zinc-900 dark:text-zinc-100 font-semibold text-sm uppercase tracking-wider">Inquiries</h4>
            <a href="mailto:contact@pis-labs.com" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors text-sm block">contact@pis-labs.com</a>
            <a href="/booking" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors text-sm block underline decoration-zinc-300 dark:decoration-zinc-800 underline-offset-4">Schedule a call</a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-zinc-400 dark:text-zinc-500 text-xs font-medium">
            &copy; {new Date().getFullYear()} PIS Labs. Engineered for scale.
          </p>
          <div className="flex items-center gap-8 text-xs font-medium text-zinc-400 dark:text-zinc-500">
            <a href="/terms" className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors">Terms of Service</a>
            <a href="/privacy" className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
