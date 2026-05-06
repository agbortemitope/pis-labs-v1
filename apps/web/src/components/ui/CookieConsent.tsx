'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, X } from 'lucide-react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const CONSENT_KEY = 'pis-labs-cookie-consent';

type ConsentStatus = 'accepted' | 'declined' | null;

export const CookieConsent = () => {
  const [consent, setConsent] = useState<ConsentStatus>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === 'accepted' || stored === 'declined') {
      setConsent(stored);
    } else {
      // Small delay so the banner doesn't flash on initial load
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (consent === 'accepted') {
      // Enable Google Analytics by pushing consent update
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('consent', 'update', {
          analytics_storage: 'granted',
        });
      }
    }
  }, [consent]);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setConsent('accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setConsent('declined');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[90] rounded-2xl bg-white/10 dark:bg-black/40 backdrop-blur-2xl border border-black/10 dark:border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.3)] ring-1 ring-black/5 dark:ring-white/5 p-6 transition-colors duration-300"
        >
          <button
            onClick={handleDecline}
            className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            aria-label="Dismiss cookie banner"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 shrink-0">
              <Shield className="w-5 h-5 text-zinc-600 dark:text-zinc-300" />
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Privacy & Analytics
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We use minimal, privacy-first analytics to understand how visitors navigate our site. No personal data is sold or shared. 
                Read our{' '}
                <a href="/privacy" className="underline underline-offset-2 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                  Privacy Policy
                </a>.
              </p>
              <div className="flex items-center gap-3 pt-1">
                <button
                  onClick={handleAccept}
                  className="bg-black dark:bg-zinc-100 text-white dark:text-black px-5 py-2 rounded-full text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-white transition-all active:scale-[0.98] shadow-md"
                >
                  Accept
                </button>
                <button
                  onClick={handleDecline}
                  className="text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors px-4 py-2"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
