'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2 } from 'lucide-react';

interface ToastContextType {
  showToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<{ id: number; message: string } | null>(null);

  const showToast = useCallback((message: string) => {
    const id = Date.now();
    setToast({ id, message });
    setTimeout(() => {
      setToast((current) => (current?.id === id ? null : current));
    }, 4000); // 4 seconds for better readability
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 40, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 20, scale: 0.95, filter: 'blur(10px)' }}
            transition={{ 
              type: 'spring',
              stiffness: 400,
              damping: 30,
              mass: 0.8
            }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/10 dark:bg-black/20 backdrop-blur-2xl border border-white/20 dark:border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-zinc-900 dark:text-zinc-100 font-medium text-sm transition-colors duration-300 ring-1 ring-black/5 dark:ring-white/10"
          >
            <div className="flex h-2 w-2 rounded-full bg-zinc-400 dark:bg-zinc-500 animate-pulse" />
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
