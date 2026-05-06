'use client'; 

import React, { useState } from 'react';
import { Mail, CheckCircle2, Loader2, MessageCircle } from 'lucide-react';

export const CTA = () => {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, bot_field: honeypot }),
      });

      if (!response.ok) throw new Error('Submission failed');
      
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="w-full py-24 px-6 border-t border-black/5 dark:border-white/5 flex justify-center items-center transition-colors duration-300">
      <div className="max-w-3xl w-full flex flex-col items-center text-center p-8 sm:p-12 rounded-[2.5rem] border border-black/5 dark:border-white/10 bg-zinc-50/80 dark:bg-[#1C1C1E]/80 backdrop-blur-3xl shadow-xl dark:shadow-[0_0_60px_rgba(255,255,255,0.03)] relative overflow-hidden transition-colors duration-300">
        
        {/* Inner glow accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-black/5 dark:bg-white/5 blur-[100px] pointer-events-none transition-colors duration-300"></div>
        
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6 z-10 transition-colors duration-300">
          Join the Ecosystem
        </h2>
        
        <p className="text-zinc-600 dark:text-zinc-300 text-lg mb-10 max-w-lg mx-auto z-10 leading-relaxed transition-colors duration-300">
          Get early access to our production-grade MVPs, read our applied AI research, and help shape the tools we build.
        </p>
        
        <div className="w-full max-w-xl z-10">
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center p-8 bg-green-500/10 border border-green-500/20 rounded-3xl text-green-600 dark:text-green-400 backdrop-blur-md transition-colors duration-300">
              <CheckCircle2 className="w-10 h-10 mb-4" />
              <p className="font-medium text-lg text-center">Subscription Confirmed.</p>
              <p className="text-sm text-green-600/70 dark:text-green-500/70 text-center mt-2 transition-colors duration-300">Welcome to the PIS Labs newsletter.</p>
            </div>
          ) : (
            <form className="flex flex-col sm:flex-row w-full gap-3" onSubmit={handleSubmit}>
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <Mail className="h-6 w-6 text-zinc-400 dark:text-zinc-400 transition-colors duration-300" />
                </div>
                {/* Honeypot field - visually hidden to trap bots */}
                <input
                  type="text"
                  name="bot_field"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="absolute w-0 h-0 opacity-0 pointer-events-none"
                  aria-hidden="true"
                />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address" 
                  className="w-full pl-14 pr-6 py-5 bg-white/50 dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-full text-zinc-900 dark:text-zinc-100 text-lg placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/20 focus:border-black/20 dark:focus:border-white/20 transition-all backdrop-blur-md shadow-inner"
                  required
                  disabled={status === 'loading'}
                />
              </div>
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="bg-black dark:bg-zinc-100 text-white dark:text-black px-10 py-5 rounded-full font-semibold hover:bg-zinc-800 dark:hover:bg-white transition-all duration-200 whitespace-nowrap disabled:opacity-70 flex items-center justify-center min-w-[180px] text-lg active:scale-[0.98] shadow-md dark:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                {status === 'loading' ? <Loader2 className="w-6 h-6 animate-spin" /> : 'Get Early Access'}
              </button>
            </form>
          )}
          
          {status === 'error' && (
            <p className="mt-4 text-sm text-red-500 dark:text-red-400 text-center font-medium transition-colors duration-300">Connection failed. Please try again.</p>
          )}
        </div>

        {/* WhatsApp Channel Integration */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 pt-8 border-t border-black/5 dark:border-white/5 w-full max-w-md z-10 transition-colors duration-300">
          <p className="text-sm text-zinc-500 dark:text-zinc-400 transition-colors duration-300">Prefer real-time updates?</p>
          <a 
            href="https://whatsapp.com/channel/0029VbCOWfn2ER6phFDY0k0J" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-all bg-green-500/10 hover:bg-green-500/20 px-5 py-2.5 rounded-full border border-green-500/20 active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Join WhatsApp Channel
          </a>
        </div>
      </div>
    </section>
  );
};
