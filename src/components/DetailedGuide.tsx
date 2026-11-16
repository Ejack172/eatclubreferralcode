'use client';

import React from 'react';
import { BookOpen, AlertCircle, CheckCircle, Lightbulb, Smartphone, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteData';

export const DetailedGuide = () => {
  return (
    <section id="about" className="py-12 sm:py-16 bg-gradient-to-b from-transparent via-orange-50/20 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Complete 2027 Referral Playbook</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            About EatClub Referral Code & How New User Offers Work
          </h2>
          <p className="text-base text-neutral-600 mt-2">
            A comprehensive, transparent guide for food lovers across India looking to maximize discounts on EatClub.
          </p>
        </div>

        {/* 3-Column Detailed Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

          {/* Card 1: What is EatClub & Why Does It Offer 50% Off? */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-orange-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-sm mb-4">
                01
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                What is EatClub and Who Operates It?
              </h3>
              <div className="text-sm text-neutral-600 space-y-3 leading-relaxed">
                <p>
                  EatClub (formerly part of BOX8) is India’s foremost technology-first cloud kitchen conglomerate. Instead of acting as an aggregator taking hefty 30–40% commissions from small restaurants, EatClub builds and manages state-of-the-art cloud kitchens directly.
                </p>
                <p>
                  Because there are no middlemen, EatClub passes structural cost efficiencies straight to the consumer through persistent menu-level price drops and generous introductory referral programs like <strong className="font-mono text-orange-600 font-bold">{SITE_CONFIG.referralCode}</strong>.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-100 text-xs font-semibold text-neutral-500">
              Direct-to-Consumer Culinary Model
            </div>
          </div>

          {/* Card 2: How the 25% + 25% Stack Works */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-orange-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-sm mb-4">
                02
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                How Does "Flat 25% + Extra 25%" Stack?
              </h3>
              <div className="text-sm text-neutral-600 space-y-3 leading-relaxed">
                <p>
                  Unlike misleading marketing claims seen elsewhere, EatClub’s two-tier savings have a clear, mathematical structure:
                </p>
                <ul className="space-y-2 pl-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span><strong>Tier 1:</strong> Flat 25% price reduction automatically reflected across all food items in the app menu.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span><strong>Tier 2:</strong> Additional 25% referral discount calculated on your cart subtotal upon applying code <strong className="font-mono text-orange-600">{SITE_CONFIG.referralCode}</strong>.</span>
                  </li>
                </ul>
                <p>
                  The result is up to 50% cumulative savings compared to typical dine-in and food delivery prices.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-100 text-xs font-semibold text-neutral-500">
              Transparent Tiered Math
            </div>
          </div>

          {/* Card 3: Pro Tips for Maximum Value */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-orange-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-sm mb-4">
                03
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Pro-Tips to Maximize Your Savings
              </h3>
              <div className="text-sm text-neutral-600 space-y-3 leading-relaxed">
                <p>
                  To get the absolute best value out of your first and future EatClub orders:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Multi-brand combo:</strong> Order main course (Biryani) and dessert (GLOBO) in one cart to avoid multiple checkout minimums.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Pay via UPI:</strong> Often triggers instant cashback through Google Pay, PhonePe, or Cred.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>EatClub Membership:</strong> After your first order, consider subscribing to EatClub membership for persistent 30% savings.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-100 text-xs font-semibold text-neutral-500">
              Verified 2027 Strategy
            </div>
          </div>

        </div>

        {/* Troubleshooting / Eligibility Guidance Box */}
        <div className="bg-amber-50/70 border border-amber-200/90 rounded-3xl p-6 sm:p-8">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-neutral-900">
                Troubleshooting & Eligibility Checklist for Code: {SITE_CONFIG.referralCode}
              </h4>
              <p className="text-sm text-neutral-700 mt-1 leading-relaxed">
                If the code does not apply on your checkout screen, please verify:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-xs sm:text-sm text-neutral-700">
                <div className="flex items-center gap-2 bg-white/80 p-3 rounded-xl border border-amber-200/60">
                  <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                  <span>The mobile number registered has never placed a prior order on EatClub.</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 p-3 rounded-xl border border-amber-200/60">
                  <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                  <span>No leading or trailing spaces are copied with the referral code.</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 p-3 rounded-xl border border-amber-200/60">
                  <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                  <span>Your delivery location falls inside an active EatClub cloud-kitchen radius.</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 p-3 rounded-xl border border-amber-200/60">
                  <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                  <span>Minimum cart threshold (typically ₹149 to ₹199) has been met.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
