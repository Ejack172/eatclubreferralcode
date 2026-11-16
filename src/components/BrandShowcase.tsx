'use client';

import React, { useState } from 'react';
import { Pizza, UtensilsCrossed, Flame, IceCream, Sandwich, Sparkles, Star, ChevronRight } from 'lucide-react';
import { BRANDS_LIST, SITE_CONFIG } from '@/data/siteData';

export const BrandShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Pizza', 'Biryani', 'Indian Meals', 'Wraps & Rolls', 'Desserts'];

  const filteredBrands =
    selectedCategory === 'All'
      ? BRANDS_LIST
      : BRANDS_LIST.filter((b) => {
          if (selectedCategory === 'Pizza') return b.category.includes('Pizza');
          if (selectedCategory === 'Biryani') return b.category.includes('Biryani');
          if (selectedCategory === 'Indian Meals') return b.category.includes('Indian') || b.category.includes('Appetizers');
          if (selectedCategory === 'Wraps & Rolls') return b.category.includes('Wraps');
          if (selectedCategory === 'Desserts') return b.category.includes('Desserts');
          return true;
        });

  return (
    <section id="brands" className="py-12 sm:py-16 bg-gradient-to-b from-transparent via-orange-50/20 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold mb-3">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>EatClub Cloud Kitchen Network</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Order Across 8 Iconic Food Brands with{' '}
            <span className="text-orange-600">One Single Cart</span>
          </h2>
          <p className="text-base text-neutral-600 mt-2">
            Use referral code <strong className="font-mono text-orange-600">{SITE_CONFIG.referralCode}</strong> to save on any of EatClub’s premier culinary brands. Mix & match in a single order!
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-orange-600 text-white shadow-md'
                  : 'bg-white text-neutral-700 border border-neutral-200 hover:border-orange-300 hover:bg-orange-50/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBrands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white rounded-3xl p-6 border border-orange-100 shadow-[0_4px_20px_-4px_rgba(234,88,12,0.06)] hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Brand Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-extrabold tracking-wider uppercase bg-orange-50 text-orange-700 px-2.5 py-1 rounded-full border border-orange-200/60">
                    {brand.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>4.8</span>
                  </div>
                </div>

                {/* Brand Name & Tagline */}
                <h3 className="text-xl font-black text-neutral-900 group-hover:text-orange-600 transition-colors">
                  {brand.name}
                </h3>
                <span className="text-xs font-semibold text-neutral-500 block mt-0.5">
                  {brand.tagline}
                </span>

                {/* Specialty Description */}
                <p className="text-xs text-neutral-600 mt-3 leading-relaxed">
                  {brand.specialty}
                </p>
              </div>

              {/* Bottom Feature & Offer */}
              <div className="mt-5 pt-4 border-t border-neutral-100">
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-neutral-500 font-medium">Highlight:</span>
                  <span className="font-bold text-neutral-800">{brand.highlight}</span>
                </div>

                <div className="bg-orange-50/80 rounded-xl p-2.5 flex items-center justify-between border border-orange-100">
                  <span className="text-[11px] font-bold text-orange-700">
                    Flat 25% + Extra 25%
                  </span>
                  <span className="text-[10px] font-bold font-mono text-neutral-600 bg-white px-1.5 py-0.5 rounded border border-orange-200">
                    {SITE_CONFIG.referralCode}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Multi-brand Single Cart Callout */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-orange-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-neutral-900">
                Craving Pizza & Biryani at the Same Time?
              </h4>
              <p className="text-sm text-neutral-600 mt-1 max-w-2xl">
                On EatClub, you don’t need two separate orders. Add MOJO Pizza, Itminaan Biryani, and GLOBO Ice Cream into one cart. Pay one checkout, receive one consolidated hot delivery.
              </p>
            </div>
          </div>

          <a
            href={SITE_CONFIG.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all shadow-md"
          >
            <span>Explore App Menu</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
