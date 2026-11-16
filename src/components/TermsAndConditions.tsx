'use client';

import React from 'react';
import { FileText, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { TERMS_AND_CONDITIONS, SITE_CONFIG } from '@/data/siteData';

export const TermsAndConditions = () => {
  return (
    <section id="terms" className="py-12 sm:py-16 bg-neutral-50/70 border-t border-neutral-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
              Terms & Conditions – EatClub Referral Code {SITE_CONFIG.year}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
              Official offer conditions, eligibility parameters, and coupon guidelines.
            </p>
          </div>
        </div>

        {/* Terms Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-xs space-y-4">
          <div className="text-xs text-neutral-500 pb-3 border-b border-neutral-100 flex items-center justify-between flex-wrap gap-2">
            <span>Applicable Code: <strong className="font-mono text-orange-600 font-bold">{SITE_CONFIG.referralCode}</strong></span>
            <span>Validity Period: <strong className="text-neutral-800">January 1, {SITE_CONFIG.year} – December 31, {SITE_CONFIG.year}</strong></span>
          </div>

          <ul className="space-y-3">
            {TERMS_AND_CONDITIONS.map((term, index) => (
              <li key={index} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{term}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-4 border-t border-neutral-100 flex items-start gap-2.5 text-xs text-neutral-500">
            <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <p>
              <strong>Disclaimer:</strong> This website is an independent informational guide and referral aggregator. EatClub, MOJO Pizza, BOX8, and Itminaan Biryani are registered trademarks of their respective brand owners. Offers may vary slightly based on kitchen operational status, regional taxes, and seasonal schedules.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
