'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Download, Menu, X, Sparkles, Tag, ChevronRight } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteData';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'How to Use', href: '#how-to-use' },
    { name: 'Offers', href: '#offers' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Brands', href: '#brands' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-orange-100/70 py-3'
          : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo brand */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg"
          >
            {/* EatClub stylized badge matching reference screenshot */}
            <div className="flex items-center justify-center bg-black text-white px-2.5 py-1.5 rounded-lg shadow-sm border border-neutral-800 transition-transform group-hover:scale-105">
              <div className="flex flex-col items-center justify-center leading-none">
                <span className="text-[10px] font-black tracking-widest text-orange-400 uppercase">EAT</span>
                <span className="text-xs font-black tracking-wider text-white uppercase">CLUB</span>
              </div>
              <div className="ml-1 text-orange-400 font-extrabold text-xs">✦</div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight leading-none">
                  EatClub Referral Code
                </span>
                <span className="hidden sm:inline-flex text-[10px] font-bold uppercase tracking-wider bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded-full">
                  2027
                </span>
              </div>
              <span className="text-[11px] text-neutral-500 font-medium tracking-tight mt-0.5">
                Offers • Referral • Discounts
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-sm font-semibold text-neutral-700 hover:text-orange-600 rounded-lg hover:bg-orange-50/80 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Top Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={SITE_CONFIG.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold text-sm px-4 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-4 h-4" />
              <span>Download EatClub App</span>
            </a>
          </div>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 border-b border-orange-100 shadow-xl transition-all duration-300">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-semibold text-neutral-800 hover:bg-orange-50 hover:text-orange-600 transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </a>
            ))}
            <div className="pt-3 border-t border-neutral-100">
              <a
                href={SITE_CONFIG.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold py-3 px-4 rounded-xl shadow-md"
              >
                <Download className="w-5 h-5" />
                <span>Download EatClub App (Free)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
