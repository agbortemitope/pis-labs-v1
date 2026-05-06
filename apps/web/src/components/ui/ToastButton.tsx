'use client';

import React from 'react';
import { useToast } from '@/components/providers/ToastProvider';

interface ToastButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  toastMessage?: string;
  children: React.ReactNode;
}

export const ToastButton = ({ href, toastMessage = "Research compiling. Coming soon.", children, className, onClick, ...props }: ToastButtonProps) => {
  const { showToast } = useToast();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (!href || href === '#' || href === '') {
      e.preventDefault();
      showToast(toastMessage);
    }
    if (onClick) {
      onClick(e as any);
    }
  };

  if (href && href !== '#' && href !== '') {
    return (
      <a href={href} className={className} onClick={handleClick as any}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={handleClick} className={className} {...props}>
      {children}
    </button>
  );
};
