'use client';

import React from 'react';
import Link from 'next/link';
import { Smartphone, Download, ExternalLink, Heart, ShieldCheck, Mail, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteData';

export const Footer = () => {
  const cities = [
    'Mumbai',
    'Bengaluru',
    'Delhi NCR',
    'Pune',
    'Hyderabad',
    'Chennai',
    'Kolkata',
    'Ahmedabad',
    'Gurugram',
    'Noida',
    'Chandigarh',
    'Jaipur',
  ];

  return (
    <footer className="bg-neutral-950 text-neutral-300 pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Footer: Brand, App Download, Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">

          {/* Col 1 & 2: Brand Information */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-black text-white px-2.5 py-1.5 rounded-lg border border-neutral-800">
                <div className="flex flex-col items-center justify-center leading-none">
                  <span className="text-[10px] font-black tracking-widest text-orange-400 uppercase">EAT</span>
                  <span className="text-xs font-black tracking-wider text-white uppercase">CLUB</span>
                </div>
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight block">
                  EatClub Referral Code
                </span>
                <span className="text-xs text-neutral-400">
                  Exclusive Savings Guide {SITE_CONFIG.year}
                </span>
              </div>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              Your trusted community resource for verified EatClub coupons, invite codes, and new user offers. Enjoy Flat 25% OFF + Extra 25% OFF with verified code <strong className="font-mono text-orange-400 font-bold">{SITE_CONFIG.referralCode}</strong>.
            </p>

            <div className="pt-2">
              <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-2">
                Download Official EatClub App:
              </span>
              <div className="flex items-center gap-2.5 flex-wrap">
                <a
                  href={SITE_CONFIG.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold px-3.5 py-2.5 rounded-xl border border-neutral-800 transition-colors"
                >
                  <Smartphone className="w-4 h-4 text-emerald-400" />
                  <span>Google Play</span>
                </a>
                <a
                  href={SITE_CONFIG.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold px-3.5 py-2.5 rounded-xl border border-neutral-800 transition-colors"
                >
                  <Download className="w-4 h-4 text-blue-400" />
                  <span>App Store</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a href="#home" className="hover:text-orange-400 transition-colors">
                  Home (Top Offer)
                </a>
              </li>
              <li>
                <a href="#how-to-use" className="hover:text-orange-400 transition-colors">
                  How to Use Code
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-orange-400 transition-colors">
                  Savings Calculator
                </a>
              </li>
              <li>
                <a href="#brands" className="hover:text-orange-400 transition-colors">
                  Cloud Kitchen Brands
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-orange-400 transition-colors">
                  EatClub vs Others
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-orange-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-orange-400 transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Top Brands on EatClub */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Top Cloud Kitchens
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a href="#brands" className="hover:text-orange-400 transition-colors">
                  MOJO Pizza (2X Toppings)
                </a>
              </li>
              <li>
                <a href="#brands" className="hover:text-orange-400 transition-colors">
                  BOX8 (Desi Meals & Combos)
                </a>
              </li>
              <li>
                <a href="#brands" className="hover:text-orange-400 transition-colors">
                  Itminaan Biryani (Matka Dum)
                </a>
              </li>
              <li>
                <a href="#brands" className="hover:text-orange-400 transition-colors">
                  Mealful Wraps (Jumbo Rolls)
                </a>
              </li>
              <li>
                <a href="#brands" className="hover:text-orange-400 transition-colors">
                  LeanCrust Pizza (Zero-Maida)
                </a>
              </li>
              <li>
                <a href="#brands" className="hover:text-orange-400 transition-colors">
                  ZAZA Mughal Biryani
                </a>
              </li>
              <li>
                <a href="#brands" className="hover:text-orange-400 transition-colors">
                  GLOBO Artisanal Ice Cream
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Verified Guarantee */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Trust & Verification
            </h4>
            <div className="bg-neutral-900 rounded-2xl p-4 border border-neutral-800 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Tested for {SITE_CONFIG.year}</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Code <strong className="font-mono text-orange-400">{SITE_CONFIG.referralCode}</strong> is regularly tested by our community team for active first-order redemption.
              </p>
              <div className="text-[11px] text-neutral-500 pt-2 border-t border-neutral-800">
                Contact: <span className="text-neutral-400">support@eatclubreferralcode.co.in</span>
              </div>
            </div>
          </div>

        </div>

        {/* Cities Availability Bar */}
        <div className="py-6 border-b border-neutral-800">
          <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-neutral-400">
            <MapPin className="w-3.5 h-3.5 text-orange-500" />
            <span>Operational Cities across India ({SITE_CONFIG.year}):</span>
          </div>
          <div className="flex flex-wrap gap-2 text-xs text-neutral-400">
            {cities.map((city, idx) => (
              <span key={city} className="flex items-center gap-2">
                <span className="hover:text-neutral-200 transition-colors">{city}</span>
                {idx < cities.length - 1 && <span className="text-neutral-700">•</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Legal / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © {SITE_CONFIG.year} EatClub Referral Code Guide. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#terms" className="hover:text-neutral-400 transition-colors">
              Terms of Use
            </a>
            <a href="#terms" className="hover:text-neutral-400 transition-colors">
              Privacy Notice
            </a>
            <a href="#about" className="hover:text-neutral-400 transition-colors">
              Referral Policy
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
