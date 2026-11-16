'use client';

import React, { useState } from 'react';
import { Copy, Check, Smartphone, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SITE_CONFIG } from '@/data/siteData';
import { HeroMockup } from './HeroMockup';
import { Toast } from './Toast';

export const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SITE_CONFIG.referralCode);
      setCopied(true);
      setShowToast(true);

      // Trigger celebratory confetti burst
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#FF6600', '#FFA500', '#10B981', '#F59E0B'],
        });
      } catch (e) {
        // graceful fallback if canvas not available
      }

      setTimeout(() => {
        setCopied(false);
      }, 3000);

      setTimeout(() => {
        setShowToast(false);
      }, 3500);
    } catch (err) {
      // Fallback if clipboard API blocked
      const textArea = document.createElement('textarea');
      textArea.value = SITE_CONFIG.referralCode;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setShowToast(true);
      setTimeout(() => setCopied(false), 3000);
      setTimeout(() => setShowToast(false), 3500);
    }
  };

  return (
    <section id="home" className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 overflow-hidden">
      {/* Background soft ambient gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-100/60 via-amber-50/40 to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

          {/* Left Column: Heading, Referral Code Box, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Pill Badge matching screenshot */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200/80 text-orange-800 text-xs sm:text-sm font-bold shadow-xs mb-4">
              <span>🎁</span>
              <span>New User Offer • {SITE_CONFIG.year}</span>
            </div>

            {/* Main H1 Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-neutral-900 tracking-tight leading-[1.15] mb-4">
              EatClub Referral Code {SITE_CONFIG.year} –{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                Flat 25% OFF + Extra 25% OFF
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-6 max-w-2xl font-normal">
              Use the latest EatClub referral code{' '}
              <strong className="font-bold text-orange-600 font-mono tracking-wide">
                {SITE_CONFIG.referralCode}
              </strong>{' '}
              to get exclusive discounts on your first food order. Enjoy up to 50% OFF (top of 25% + 25%) on delicious meals from EatClub.
            </p>

            {/* Referral Code Box + Handwritten Arrow */}
            <div className="w-full max-w-md mb-6">
              <div className="relative flex flex-col sm:flex-row items-center gap-3">

                {/* The Code Box */}
                <div className="w-full bg-[#FFF5EC] border-2 border-orange-200/90 rounded-2xl p-3 sm:px-5 sm:py-3.5 shadow-sm flex items-center justify-between group hover:border-orange-400 transition-colors">
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold text-orange-600/90 tracking-wider uppercase leading-none">
                      Referral Code
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-wider font-mono mt-1">
                      {SITE_CONFIG.referralCode}
                    </span>
                  </div>

                  {/* Copy Button */}
                  <button
                    type="button"
                    onClick={handleCopy}
                    className={`relative flex items-center justify-center p-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                      copied
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-md hover:shadow-lg active:scale-95'
                    }`}
                    aria-label="Copy EatClub referral code"
                  >
                    {copied ? (
                      <div className="flex items-center gap-1.5 px-1">
                        <Check className="w-5 h-5 text-white" />
                        <span className="text-xs">Copied!</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 px-1">
                        <Copy className="w-5 h-5 text-white" />
                        <span className="text-xs hidden sm:inline">Copy</span>
                      </div>
                    )}
                  </button>
                </div>

                {/* Hand-drawn style note with arrow */}
                <div className="hidden sm:flex items-center gap-1.5 text-neutral-500 text-xs font-semibold shrink-0 pl-1">
                  <span className="text-orange-500 text-lg leading-none">⤹</span>
                  <span className="leading-tight">
                    Tap to Copy<br />& Use in EatClub App
                  </span>
                </div>
              </div>
            </div>

            {/* CTAs and Trust Pill */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              {/* Primary App Download CTA */}
              <a
                href={SITE_CONFIG.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold text-base px-6 py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Smartphone className="w-5 h-5" />
                <span>Get EatClub App & Claim Offer</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </a>

              {/* Verified Pill matching screenshot */}
              <div className="inline-flex items-center gap-2 bg-emerald-50/90 border border-emerald-200 px-3.5 py-2.5 rounded-2xl">
                <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-emerald-800 leading-tight">
                    Verified & Working
                  </span>
                  <span className="text-[10px] text-emerald-700/80 font-medium">
                    Last Updated: {SITE_CONFIG.lastVerifiedDate}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Micro-guarantee */}
            <p className="text-xs text-neutral-500 mt-3 flex items-center gap-1.5">
              <span className="text-emerald-600 font-bold">✓</span>
              <span>100% Free to use. Direct discount applied at checkout. No hidden charges.</span>
            </p>

          </div>

          {/* Right Column: High Fidelity Realistic Food & Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroMockup />
          </div>

        </div>
      </div>

      {/* Copy Toast feedback */}
      <Toast show={showToast} code={SITE_CONFIG.referralCode} />
    </section>
  );
};
