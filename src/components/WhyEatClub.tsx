'use client';

import React from 'react';
import { Check, X, Shield, Clock, Award, Sparkles, ChefHat, HeartHandshake } from 'lucide-react';
import { KEY_BENEFITS, SITE_CONFIG } from '@/data/siteData';

export const WhyEatClub = () => {
  const comparisonData = [
    {
      feature: 'Restaurant Menu Pricing',
      eatClub: 'Direct kitchen pricing with zero middleman inflation',
      aggregators: '30% - 40% markup added by restaurant owners to offset commissions',
      isAdvantage: true,
    },
    {
      feature: 'Rain / Peak Surge Surcharges',
      eatClub: 'Zero Surge Ever. Transparent flat pricing year-round',
      aggregators: 'Surge pricing of ₹30 – ₹100 during rain, night, or peak hours',
      isAdvantage: true,
    },
    {
      feature: 'New User Referral Discount',
      eatClub: 'Flat 25% base + Extra 25% with code MIRAJ850UXP',
      aggregators: 'Often capped at ₹40–₹50 with complex coupon restrictions',
      isAdvantage: true,
    },
    {
      feature: 'Multi-Brand Cart Mixing',
      eatClub: 'Mix Pizza, Biryani, Indian Meals & Desserts in ONE single cart',
      aggregators: 'Separate orders required per brand, multiplying delivery & platform fees',
      isAdvantage: true,
    },
    {
      feature: 'Kitchen Hygiene & Standards',
      eatClub: 'Company-owned tech kitchens adhering to strict FSSAI & ISO standards',
      aggregators: 'Third-party independent vendors with varying hygiene levels',
      isAdvantage: true,
    },
    {
      feature: 'Delivery Packaging Fees',
      eatClub: 'Eco-friendly tamper-proof thermal packaging at cost',
      aggregators: 'Disproportionately high packaging fees per item',
      isAdvantage: true,
    },
  ];

  return (
    <section id="benefits" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold mb-3">
            <ChefHat className="w-3.5 h-3.5" />
            <span>Honest Food Technology</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Why Use the{' '}
            <span className="text-orange-600">EatClub Referral Code</span>?
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-2 font-normal">
            Understand how EatClub’s direct cloud-kitchen model gives you superior food at nearly half the price.
          </p>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {KEY_BENEFITS.map((b) => (
            <div
              key={b.title}
              className="bg-white rounded-3xl p-6 border border-orange-100 shadow-[0_4px_20px_-4px_rgba(234,88,12,0.06)] hover:shadow-lg hover:border-orange-200 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2 leading-snug">
                  {b.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {b.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-emerald-600">
                <Check className="w-4 h-4" />
                <span>Verified in 2027</span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section: EatClub vs Conventional Aggregators */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-orange-100 shadow-md">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
              EatClub vs Conventional Food Aggregators
            </h3>
            <p className="text-sm text-neutral-600 mt-1">
              Here is why smart Indian food lovers switch to EatClub in 2027.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="py-3 px-4 text-xs font-extrabold text-neutral-400 uppercase tracking-wider w-1/3">
                    Feature / Policy
                  </th>
                  <th className="py-3 px-4 text-xs font-extrabold text-orange-600 uppercase tracking-wider bg-orange-50/60 rounded-t-xl w-1/3">
                    EatClub (Direct Kitchens)
                  </th>
                  <th className="py-3 px-4 text-xs font-extrabold text-neutral-500 uppercase tracking-wider w-1/3">
                    3rd Party Aggregators
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 text-sm">
                {comparisonData.map((row) => (
                  <tr key={row.feature} className="hover:bg-neutral-50/60 transition-colors">
                    <td className="py-4 px-4 font-bold text-neutral-900">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 bg-orange-50/40 text-neutral-800 font-medium">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{row.eatClub}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-neutral-500">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.aggregators}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center bg-orange-50/60 border border-orange-200/70 rounded-2xl p-4">
            <p className="text-xs sm:text-sm text-neutral-700">
              <strong>The Math is Simple:</strong> By eliminating 30% platform commissions and combining EatClub’s Flat 25% offer with code <strong className="font-mono text-orange-600">{SITE_CONFIG.referralCode}</strong>, you pay up to 50% less for delicious, restaurant-grade meals.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
