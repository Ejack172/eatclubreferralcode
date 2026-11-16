'use client';

import React from 'react';
import { Info, HeartHandshake } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteData';

export const AffiliateDisclosure = () => {
  return (
    <section className="py-8 bg-neutral-100/70 border-t border-neutral-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 rounded-2xl p-5 border border-neutral-200/80 flex items-start gap-3.5">
          <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
            <Info className="w-4 h-4" />
          </div>
          <div className="text-xs text-neutral-600 leading-relaxed space-y-1.5">
            <h4 className="font-bold text-neutral-800 text-xs sm:text-sm">
              Affiliate & Referral Transparency Disclosure (ASCI & FTC Compliant)
            </h4>
            <p>
              This website (<span className="text-neutral-800 font-semibold">{SITE_CONFIG.domain.replace('https://', '')}</span>) participates in the EatClub User Referral Program. When you apply the referral code <strong className="font-mono text-orange-600">{SITE_CONFIG.referralCode}</strong> or install the EatClub application via links on this site, you receive eligible introductory discounts (such as Flat 25% + Extra 25% OFF on your first food order), while we may receive referral meal credits or platform incentives at absolutely zero extra cost to you.
            </p>
            <p>
              We do not claim direct corporate ownership, partnership, or employment by EatClub Brands Pvt. Ltd. All product names, logos, and brands are property of their respective owners. We independently verify all published promotional codes to ensure our readers receive accurate, current, and honest discount information throughout {SITE_CONFIG.year}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
