'use client';

import React from 'react';
import { CheckCircle2, Copy } from 'lucide-react';

interface ToastProps {
  show: boolean;
  message?: string;
  code?: string;
}

export const Toast: React.FC<ToastProps> = ({
  show,
  message = 'Referral code copied to clipboard!',
  code = 'MIRAJ850UXP',
}) => {
  if (!show) return null;

  return (
    <div className="fixed bottom-20 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 animate-bounce">
      <div className="flex items-center gap-3 bg-neutral-900 text-white px-5 py-3.5 rounded-full shadow-2xl border border-neutral-700/60 backdrop-blur-md">
        <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
        </div>
        <div className="text-sm font-medium pr-1">
          <span className="font-bold text-orange-400 tracking-wider font-mono mr-1.5">{code}</span>
          <span className="text-neutral-200">{message}</span>
        </div>
      </div>
    </div>
  );
};
