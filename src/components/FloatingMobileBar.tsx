'use client';

import React, { useState } from 'react';
import { Copy, Check, ArrowRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SITE_CONFIG } from '@/data/siteData';
import { Toast } from './Toast';

export const FloatingMobileBar = () => {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SITE_CONFIG.referralCode);
      setCopied(true);
      setShowToast(true);

      try {
        confetti({
          particleCount: 40,
          spread: 50,
          origin: { y: 0.8 },
          colors: ['#FF6600', '#FFA500', '#10B981'],
        });
      } catch (e) {}

      setTimeout(() => setCopied(false), 2500);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      setCopied(true);
      setShowToast(true);
      setTimeout(() => setCopied(false), 2500);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <>
      <div className="md:hidden fixed bottom-3 left-3 right-3 z-40">
        <div className="bg-neutral-900/95 backdrop-blur-md text-white rounded-2xl p-2.5 shadow-2xl border border-neutral-700/80 flex items-center justify-between gap-2">

          {/* Left: Code info and Copy */}
          <div className="flex items-center gap-2 pl-1.5">
            <div className="flex flex-col">
              <span className="text-[9px] font-semibold text-neutral-400 uppercase tracking-wider leading-none">
                Code (25%+25% Off)
              </span>
              <span className="text-sm font-black text-orange-400 font-mono tracking-wider">
                {SITE_CONFIG.referralCode}
              </span>
            </div>

            <button
              type="button"
              onClick={handleCopy}
              className={`p-2 rounded-xl text-xs font-bold transition-all ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-neutral-800 text-neutral-200 hover:bg-neutral-700 active:scale-95'
              }`}
              aria-label="Copy code"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Right: Quick App Download Link */}
          <a
            href={SITE_CONFIG.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold text-xs py-2.5 px-3.5 rounded-xl shadow-md shrink-0"
          >
            <span>Claim Offer</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

        </div>
      </div>

      <Toast show={showToast} code={SITE_CONFIG.referralCode} />
    </>
  );
};
