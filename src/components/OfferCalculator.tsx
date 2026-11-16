'use client';

import React, { useState } from 'react';
import { Calculator, Check, Sparkles, TrendingDown, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteData';

export const OfferCalculator = () => {
  const [orderAmount, setOrderAmount] = useState<number>(450);

  // EatClub Discount Calculations:
  // 1. Flat 25% Base Platform Discount
  const baseDiscount = Math.round(orderAmount * 0.25);
  const subtotalAfterBase = orderAmount - baseDiscount;

  // 2. Extra 25% Referral Code MIRAJ850UXP Discount (capped realistically at ₹125 max per typical app terms)
  const referralDiscount = Math.min(Math.round(subtotalAfterBase * 0.25), 125);

  // 3. Saved surge and delivery fee compared to typical aggregators (₹50)
  const aggregatorSavedFee = 50;

  // Final Payable
  const finalPayable = Math.max(subtotalAfterBase - referralDiscount, 50);
  const totalSavings = baseDiscount + referralDiscount + aggregatorSavedFee;

  const presets = [
    { label: 'Solo Meal', amount: 300 },
    { label: 'Pair Combo', amount: 550 },
    { label: 'Family Feast', amount: 950 },
    { label: 'Party Box', amount: 1400 },
  ];

  return (
    <section id="calculator" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Savings Estimator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            See How Much You Save with{' '}
            <span className="text-orange-600">{SITE_CONFIG.referralCode}</span>
          </h2>
          <p className="text-base text-neutral-600 mt-2">
            Calculate your actual bill after combining EatClub’s Flat 25% store offer with our Extra 25% referral discount.
          </p>
        </div>

        {/* Calculator Widget Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-[0_15px_40px_-10px_rgba(234,88,12,0.1)] border border-orange-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Column: Sliders and Presets */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="order-amount-slider" className="text-sm font-bold text-neutral-700">
                    Select Your Food Order Amount:
                  </label>
                  <span className="text-2xl font-black text-orange-600 font-mono">
                    ₹{orderAmount}
                  </span>
                </div>

                {/* Range Slider */}
                <input
                  id="order-amount-slider"
                  type="range"
                  min="200"
                  max="1600"
                  step="50"
                  value={orderAmount}
                  onChange={(e) => setOrderAmount(Number(e.target.value))}
                  className="w-full h-3 bg-neutral-100 rounded-lg appearance-none cursor-pointer accent-orange-600 focus:outline-none"
                />

                <div className="flex justify-between text-xs text-neutral-400 mt-1 font-mono">
                  <span>₹200 (Min)</span>
                  <span>₹900</span>
                  <span>₹1600+</span>
                </div>
              </div>

              {/* Quick Presets */}
              <div>
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider block mb-2">
                  Quick Select Meal Type:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {presets.map((p) => (
                    <button
                      key={p.label}
                      type="button"
                      onClick={() => setOrderAmount(p.amount)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                        orderAmount === p.amount
                          ? 'bg-orange-600 text-white shadow-sm'
                          : 'bg-neutral-100 text-neutral-700 hover:bg-orange-50 hover:text-orange-600'
                      }`}
                    >
                      {p.label} (₹{p.amount})
                    </button>
                  ))}
                </div>
              </div>

              {/* Transparent Breakdown Table */}
              <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-200/80 space-y-2.5 text-sm">
                <div className="flex justify-between text-neutral-600">
                  <span>Standard Menu Total:</span>
                  <span className="font-semibold text-neutral-800">₹{orderAmount}</span>
                </div>
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span className="flex items-center gap-1">
                    <span>Flat 25% EatClub Store Discount:</span>
                  </span>
                  <span>- ₹{baseDiscount}</span>
                </div>
                <div className="flex justify-between text-orange-700 font-semibold">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                    <span>Extra 25% Referral ({SITE_CONFIG.referralCode}):</span>
                  </span>
                  <span>- ₹{referralDiscount}</span>
                </div>
                <div className="flex justify-between text-neutral-500 text-xs pt-1 border-t border-neutral-200">
                  <span>No Surge / Aggregator Markups Saved:</span>
                  <span className="text-emerald-600 font-semibold">+ Saved ₹{aggregatorSavedFee}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Savings Summary Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-neutral-900 to-neutral-950 text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-neutral-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                  <span className="text-xs uppercase font-bold text-neutral-400 tracking-wider">
                    Calculated Summary
                  </span>
                  <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Max Value
                  </span>
                </div>

                <div className="my-5">
                  <span className="text-xs text-neutral-400 block font-medium">Final Estimated Payable:</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-4xl sm:text-5xl font-black text-white font-mono">
                      ₹{finalPayable}
                    </span>
                    <span className="text-sm text-neutral-400 line-through">
                      ₹{orderAmount}
                    </span>
                  </div>
                </div>

                {/* Total savings pill */}
                <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 rounded-2xl p-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <TrendingDown className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-300 block">Total Net Value Saved:</span>
                    <span className="text-base font-extrabold text-emerald-400">
                      ₹{totalSavings} ({Math.round((totalSavings / (orderAmount + aggregatorSavedFee)) * 100)}% Savings)
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800">
                <a
                  href={SITE_CONFIG.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all text-sm"
                >
                  <span>Apply Code in App Now</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-[10px] text-neutral-400 text-center block mt-2">
                  Code {SITE_CONFIG.referralCode} applied at checkout
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
