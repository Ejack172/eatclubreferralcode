'use client';

import React from 'react';
import { Download, UserPlus, Ticket, Utensils, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS, SITE_CONFIG } from '@/data/siteData';

export const HowToUse = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'download':
        return <Download className="w-6 h-6 text-orange-600" />;
      case 'user-plus':
        return <UserPlus className="w-6 h-6 text-orange-600" />;
      case 'ticket':
        return <Ticket className="w-6 h-6 text-orange-600" />;
      case 'utensils':
        return <Utensils className="w-6 h-6 text-orange-600" />;
      default:
        return <Ticket className="w-6 h-6 text-orange-600" />;
    }
  };

  return (
    <section id="how-to-use" className="py-12 sm:py-16 bg-gradient-to-b from-transparent via-orange-50/30 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            How to Use the{' '}
            <span className="text-orange-600">EatClub Referral Code</span>?
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-2.5 font-normal">
            Get your extra discount in just a few simple steps.
          </p>
        </div>

        {/* 4 Illustrated Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const isLast = idx === HOW_IT_WORKS_STEPS.length - 1;
            return (
              <div key={step.step} className="relative group flex flex-col">
                <div className="h-full bg-white rounded-3xl p-6 border border-orange-100 shadow-[0_4px_20px_-4px_rgba(234,88,12,0.06)] hover:shadow-lg hover:border-orange-300 transition-all duration-300 flex flex-col justify-between">

                  {/* Top Header: Step Number Badge & Step Icon */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      {/* Step Number in orange circle */}
                      <span className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-600 to-orange-500 text-white font-extrabold text-sm flex items-center justify-center shadow-xs">
                        {step.step}
                      </span>

                      {/* Icon container in soft orange background */}
                      <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                        {getStepIcon(step.iconName)}
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-lg font-bold text-neutral-900 mb-2 leading-snug">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {step.step === 3 ? (
                        <>
                          Enter{' '}
                          <span className="font-bold font-mono text-orange-600 bg-orange-50 px-1 py-0.5 rounded border border-orange-200">
                            {SITE_CONFIG.referralCode}
                          </span>{' '}
                          during signup or in the offers section.
                        </>
                      ) : (
                        step.shortDesc
                      )}
                    </p>
                  </div>

                  {/* Bottom Helpful Micro-Tip */}
                  <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center gap-1.5 text-xs text-neutral-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>
                      {step.step === 1 && 'Available on Android & iOS'}
                      {step.step === 2 && 'Instant 6-digit OTP verification'}
                      {step.step === 3 && 'Copy code above with 1 tap'}
                      {step.step === 4 && 'Applied instantly to checkout'}
                    </span>
                  </div>

                </div>

                {/* Arrow connector between steps on desktop */}
                {!isLast && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-orange-100 text-orange-600 items-center justify-center shadow-xs pointer-events-none">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA banner below steps */}
        <div className="mt-10 bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border border-orange-200/80 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex flex-col text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
              Instant Savings Guaranteed
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-neutral-900 mt-0.5">
              Ready to claim your Flat 25% + Extra 25% Discount?
            </h4>
            <p className="text-sm text-neutral-600 mt-1">
              Apply code <strong className="font-mono text-orange-600">{SITE_CONFIG.referralCode}</strong> on your first order.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={SITE_CONFIG.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <span>Download EatClub App</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
