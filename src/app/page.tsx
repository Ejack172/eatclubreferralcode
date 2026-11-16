import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TrustStatsBar } from '@/components/TrustStatsBar';
import { HowToUse } from '@/components/HowToUse';
import { OfferCalculator } from '@/components/OfferCalculator';
import { BrandShowcase } from '@/components/BrandShowcase';
import { WhyEatClub } from '@/components/WhyEatClub';
import { DetailedGuide } from '@/components/DetailedGuide';
import { FAQSection } from '@/components/FAQSection';
import { TermsAndConditions } from '@/components/TermsAndConditions';
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure';
import { Footer } from '@/components/Footer';
import { FloatingMobileBar } from '@/components/FloatingMobileBar';
import { StructuredData } from '@/components/StructuredData';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDFB]">
      {/* Schema.org Structured Data for SEO / AEO */}
      <StructuredData />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section matching reference screenshot */}
        <Hero />

        {/* 2. Trust Stats Bar */}
        <TrustStatsBar />

        {/* 3. How to Use Referral Code (4 steps) */}
        <HowToUse />

        {/* 4. Interactive Savings Estimator */}
        <OfferCalculator />

        {/* 5. Cloud Kitchen Brands Showcase */}
        <BrandShowcase />

        {/* 6. Why Use EatClub & Aggregator Comparison */}
        <WhyEatClub />

        {/* 7. Comprehensive 2027 Referral Guide */}
        <DetailedGuide />

        {/* 8. Frequently Asked Questions (14+ answer-first questions) */}
        <FAQSection />

        {/* 9. Terms and Conditions */}
        <TermsAndConditions />

        {/* 10. Affiliate & Referral Transparency Disclosure */}
        <AffiliateDisclosure />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <FloatingMobileBar />
    </div>
  );
}
