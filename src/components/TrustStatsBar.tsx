'use client';

import React from 'react';
import { Percent, Gift, Zap, ShieldCheck } from 'lucide-react';
import { TRUST_STATS } from '@/data/siteData';

export const TrustStatsBar = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'percent':
        return <Percent className="w-5 h-5 text-orange-600" />;
      case 'gift':
        return <Gift className="w-5 h-5 text-orange-600" />;
      case 'zap':
        return <Zap className="w-5 h-5 text-orange-600" />;
      case 'shield-check':
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      default:
        return <Percent className="w-5 h-5 text-orange-600" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 mb-12 sm:mb-16">
      <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-[0_10px_35px_-5px_rgba(234,88,12,0.08),0_4px_12px_-2px_rgba(0,0,0,0.04)] border border-orange-100/90">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-neutral-100">
          {TRUST_STATS.map((stat, idx) => {
            const isGreen = stat.icon === 'shield-check';
            return (
              <div
                key={stat.title}
                className={`flex items-center gap-3.5 pt-3 sm:pt-0 ${
                  idx > 0 ? 'sm:pl-6' : ''
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-xs ${
                    isGreen
                      ? 'bg-emerald-50 border border-emerald-200/80'
                      : 'bg-orange-50 border border-orange-200/80'
                  }`}
                >
                  {getIcon(stat.icon)}
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-extrabold text-neutral-900 tracking-tight leading-snug">
                    {stat.title}
                  </span>
                  <span className="text-xs font-semibold text-neutral-500 mt-0.5">
                    {stat.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
