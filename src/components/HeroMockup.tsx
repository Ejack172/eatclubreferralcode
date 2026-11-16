'use client';

import React from 'react';
import { Sparkles, Check, Star } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteData';

export const HeroMockup = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none flex items-center justify-center select-none">
      {/* Background radial ambient glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-orange-400/20 via-amber-300/20 to-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Accent Sparkles */}
      <div className="absolute -top-6 right-10 text-orange-400 animate-pulse hidden sm:block">
        <Sparkles className="w-8 h-8" />
      </div>
      <div className="absolute bottom-16 -left-4 text-amber-500 animate-bounce hidden sm:block">
        <span className="text-2xl font-black">✦</span>
      </div>

      {/* Container holding Phone Mockup + Surrounding Food & Branded Bag */}
      <div className="relative flex items-center justify-center w-full py-4 sm:py-6">

        {/* 1. Behind/Side: EatClub Branded Delivery Bag */}
        <div className="absolute -right-2 sm:right-2 top-8 sm:top-12 z-10 w-28 sm:w-36 md:w-40 transition-transform duration-500 hover:rotate-2 hover:scale-105">
          <div className="relative bg-neutral-900 text-white rounded-t-xl rounded-b-lg p-3.5 sm:p-4 shadow-2xl border-t-2 border-neutral-700">
            {/* Bag Handles */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-14 sm:w-16 h-7 border-3 border-amber-800/80 rounded-t-full bg-transparent" />
            <div className="flex flex-col items-center justify-center pt-2 pb-3">
              <span className="text-[10px] font-black tracking-widest text-orange-400 uppercase leading-none">
                EAT
              </span>
              <span className="text-base sm:text-lg font-black tracking-wider text-white uppercase leading-tight">
                CLUB
              </span>
              <span className="text-[8px] text-neutral-400 tracking-wider uppercase mt-1">
                Direct Kitchens
              </span>
            </div>
            {/* Bag bottom fold lines */}
            <div className="h-1 w-full bg-neutral-800 rounded-full" />
          </div>
        </div>

        {/* 2. Side Food: Gourmet Burger */}
        <div className="absolute -right-4 sm:right-0 bottom-32 sm:bottom-36 z-20 w-24 sm:w-28 md:w-32 transition-transform duration-300 hover:scale-110">
          <div className="bg-white/90 backdrop-blur-md p-1.5 rounded-2xl shadow-xl border border-orange-100">
            <svg viewBox="0 0 100 80" className="w-full h-auto drop-shadow-md">
              {/* Sesame Bun Top */}
              <path d="M 10 40 Q 50 5 90 40 Z" fill="#E6953B" />
              <ellipse cx="30" cy="25" rx="1.5" ry="0.8" fill="#FFF5EB" />
              <ellipse cx="50" cy="20" rx="1.5" ry="0.8" fill="#FFF5EB" />
              <ellipse cx="70" cy="26" rx="1.5" ry="0.8" fill="#FFF5EB" />
              <ellipse cx="40" cy="32" rx="1.5" ry="0.8" fill="#FFF5EB" />
              <ellipse cx="60" cy="31" rx="1.5" ry="0.8" fill="#FFF5EB" />
              {/* Lettuce */}
              <path d="M 8 40 Q 15 44 22 40 Q 30 46 38 40 Q 46 45 54 40 Q 62 46 70 40 Q 78 45 86 40 Q 92 44 94 40" stroke="#48BB78" strokeWidth="4" fill="none" strokeLinecap="round" />
              {/* Tomato Slice */}
              <rect x="14" y="44" width="72" height="6" rx="3" fill="#E53E3E" />
              {/* Cheese Layer */}
              <polygon points="12,50 88,50 78,57 60,52 45,58 30,52 18,57" fill="#ECC94B" />
              {/* Patty */}
              <rect x="12" y="52" width="76" height="12" rx="5" fill="#6B3410" />
              {/* Bun Bottom */}
              <path d="M 14 65 Q 50 67 86 65 Q 86 74 50 75 Q 14 74 14 65 Z" fill="#D6862F" />
            </svg>
            <div className="text-center mt-0.5">
              <span className="text-[9px] font-bold text-neutral-800 bg-amber-50 px-1.5 py-0.5 rounded-full border border-amber-200">
                BOX8 Burgers
              </span>
            </div>
          </div>
        </div>

        {/* 3. Side Food: Cheesy Pizza Slice */}
        <div className="absolute -right-2 sm:right-6 bottom-4 sm:bottom-8 z-30 w-28 sm:w-32 md:w-36 transition-transform duration-300 hover:scale-110 hover:-rotate-3">
          <div className="bg-white/95 backdrop-blur-md p-1.5 rounded-2xl shadow-2xl border border-orange-100">
            <svg viewBox="0 0 100 80" className="w-full h-auto drop-shadow-md">
              {/* Crust */}
              <path d="M 10 15 Q 55 5 95 20 Q 90 28 85 24 Q 50 14 15 22 Z" fill="#C27830" />
              {/* Cheesy Triangle */}
              <polygon points="15,22 88,23 52,75" fill="#F6AD55" />
              {/* Melted Cheese Swirls */}
              <path d="M 22 25 Q 40 35 60 27 Q 75 32 82 25" fill="#FBD38D" opacity="0.8" />
              {/* Pepperoni / Toppings */}
              <circle cx="48" cy="35" r="7" fill="#C53030" />
              <circle cx="48" cy="35" r="5" fill="#9B2C2C" />
              <circle cx="34" cy="45" r="6" fill="#C53030" />
              <circle cx="34" cy="45" r="4.5" fill="#9B2C2C" />
              <circle cx="62" cy="46" r="6.5" fill="#C53030" />
              <circle cx="62" cy="46" r="4.5" fill="#9B2C2C" />
              <circle cx="50" cy="58" r="5" fill="#C53030" />
              {/* Fresh Basil Leaves */}
              <ellipse cx="42" cy="27" rx="4" ry="2" fill="#38A169" transform="rotate(-20 42 27)" />
              <ellipse cx="58" cy="38" rx="4" ry="2" fill="#38A169" transform="rotate(25 58 38)" />
            </svg>
            <div className="text-center mt-0.5">
              <span className="text-[9px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">
                MOJO 2X Pizza
              </span>
            </div>
          </div>
        </div>

        {/* 4. Centerpiece: The Realistic Smartphone Mockup */}
        <div className="relative z-20 w-[270px] sm:w-[290px] md:w-[310px] bg-neutral-900 rounded-[44px] p-3 shadow-[0_25px_60px_-15px_rgba(234,88,12,0.35),0_12px_24px_-8px_rgba(0,0,0,0.4)] border-4 border-neutral-800">
          {/* Phone Speaker & Dynamic Island */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
            <div className="w-24 h-5 bg-black rounded-full flex items-center justify-between px-3">
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-800 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-950/80" />
              </div>
              <div className="w-2 h-2 rounded-full bg-neutral-900" />
            </div>
          </div>

          {/* Screen Display */}
          <div className="relative bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-white rounded-[36px] overflow-hidden pt-8 pb-5 px-3.5 border border-neutral-800/80 flex flex-col justify-between min-h-[460px] sm:min-h-[500px]">

            {/* Top Bar inside app */}
            <div className="flex items-center justify-between text-[11px] text-neutral-400 font-medium px-2 mb-2">
              <span>9:41</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px]">5G</span>
                <div className="w-4 h-2.5 border border-neutral-400 rounded-sm p-0.5 flex items-center">
                  <div className="w-full h-full bg-emerald-400 rounded-2xs" />
                </div>
              </div>
            </div>

            {/* App Header Badge */}
            <div className="flex flex-col items-center text-center mt-1">
              <div className="inline-flex items-center gap-1 bg-neutral-800/90 border border-neutral-700/80 px-2.5 py-1 rounded-lg shadow-inner">
                <span className="text-[9px] font-black text-orange-400 uppercase tracking-widest">EAT</span>
                <span className="text-[11px] font-black text-white uppercase tracking-wider">CLUB</span>
                <span className="text-orange-400 text-[10px] ml-0.5">✦</span>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-neutral-100 mt-2 tracking-tight">
                Delicious Meals at Great Prices
              </h3>
            </div>

            {/* Promo Badges (Flat 25% OFF + Extra 25% OFF) matching screenshot */}
            <div className="flex items-center justify-center gap-1.5 my-2.5">
              <div className="bg-white text-neutral-900 px-2.5 py-1.5 rounded-xl text-center shadow-sm border border-neutral-200">
                <span className="block text-[8px] font-medium text-neutral-500 uppercase tracking-wider">Flat</span>
                <span className="text-[11px] sm:text-xs font-black text-orange-600 leading-none">25% OFF</span>
              </div>

              <div className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                +
              </div>

              <div className="bg-white text-neutral-900 px-2.5 py-1.5 rounded-xl text-center shadow-sm border border-neutral-200">
                <span className="block text-[8px] font-medium text-neutral-500 uppercase tracking-wider">Extra</span>
                <span className="text-[11px] sm:text-xs font-black text-orange-600 leading-none">25% OFF</span>
              </div>
            </div>

            {/* Referral Code Box inside phone */}
            <div className="bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-orange-500/20 border border-orange-500/40 rounded-xl p-2 text-center my-1.5">
              <span className="text-[9px] font-semibold text-neutral-300 uppercase tracking-wider block">
                Use Referral Code
              </span>
              <span className="text-sm sm:text-base font-black text-orange-400 tracking-wider font-mono">
                {SITE_CONFIG.referralCode}
              </span>
            </div>

            {/* Appetizing Biryani Food Showcase inside phone screen */}
            <div className="relative my-2 rounded-2xl overflow-hidden bg-gradient-to-b from-neutral-800 to-neutral-900 p-2 border border-neutral-700/60 shadow-inner group">
              <svg viewBox="0 0 160 110" className="w-full h-auto drop-shadow-lg">
                {/* Earthen Clay Matka Bowl */}
                <ellipse cx="80" cy="95" rx="60" ry="12" fill="#1C120C" opacity="0.6" />
                <path d="M 22 55 Q 18 85 80 88 Q 142 85 138 55 Z" fill="#8D4925" />
                <ellipse cx="80" cy="55" rx="58" ry="16" fill="#A0522D" />
                <ellipse cx="80" cy="54" rx="54" ry="14" fill="#6E3314" />

                {/* Fragrant Basmati Rice Bed (Golden & White grains) */}
                <ellipse cx="80" cy="52" rx="50" ry="13" fill="#ECC94B" />
                {/* Saffron & Spiced Rice Highlights */}
                <path d="M 38 52 Q 60 46 82 52 Q 104 46 122 52 Q 100 58 80 57 Q 56 58 38 52 Z" fill="#DD6B20" opacity="0.8" />
                <ellipse cx="78" cy="50" rx="35" ry="9" fill="#FFF5F5" opacity="0.75" />

                {/* Roasted Chicken Leg Piece */}
                <path d="M 60 48 Q 72 32 94 36 Q 112 40 102 52 Q 88 56 68 52 Z" fill="#9C4221" />
                <ellipse cx="78" cy="42" rx="14" ry="7" fill="#7B341E" />
                {/* Bone Tip */}
                <ellipse cx="106" cy="38" rx="4" ry="3" fill="#F7FAFC" />
                <circle cx="109" cy="37" r="2.5" fill="#EDF2F7" />

                {/* Fried Onions (Birista) */}
                <path d="M 50 49 Q 55 46 62 50" stroke="#4A1D0E" strokeWidth="2" strokeLinecap="round" />
                <path d="M 85 46 Q 92 44 98 48" stroke="#4A1D0E" strokeWidth="2" strokeLinecap="round" />
                <path d="M 72 55 Q 78 52 86 54" stroke="#4A1D0E" strokeWidth="2" strokeLinecap="round" />

                {/* Fresh Mint & Coriander leaves */}
                <ellipse cx="64" cy="44" rx="4" ry="2" fill="#48BB78" transform="rotate(-30 64 44)" />
                <ellipse cx="88" cy="54" rx="3.5" ry="2" fill="#38A169" transform="rotate(40 88 54)" />
                <ellipse cx="74" cy="38" rx="3" ry="1.5" fill="#48BB78" transform="rotate(15 74 38)" />
              </svg>

              <div className="flex items-center justify-between mt-1 px-1">
                <div>
                  <span className="text-[10px] font-bold text-white block leading-tight">Itminaan Matka Dum Biryani</span>
                  <span className="text-[8px] text-amber-300 font-medium">Slow-cooked in clay pots</span>
                </div>
                <div className="flex items-center gap-0.5 bg-neutral-950/80 px-1.5 py-0.5 rounded text-[9px] text-amber-400 font-bold border border-neutral-700">
                  <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                  <span>4.8</span>
                </div>
              </div>
            </div>

            {/* Bottom In-App CTA button */}
            <div className="mt-1">
              <div className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold text-[11px] py-2 rounded-xl text-center shadow-lg flex items-center justify-center gap-1">
                <span>Order with 25% + 25% OFF</span>
                <span>→</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
