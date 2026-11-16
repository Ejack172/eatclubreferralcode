import React from 'react';
import { FAQ_LIST, SITE_CONFIG } from '@/data/siteData';

export const StructuredData = () => {
  // 1. Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'EatClub Referral Code',
    url: SITE_CONFIG.domain,
    logo: `${SITE_CONFIG.domain}/favicon.ico`,
    description:
      'Official community guide and coupon aggregator for verified EatClub referral code and food offers across India in 2027.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'support@eatclubreferralcode.co.in',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
  };

  // 2. WebSite Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'EatClub Referral Code 2027',
    url: SITE_CONFIG.domain,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_CONFIG.domain}/#faqs?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  // 3. BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_CONFIG.domain}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'How to Use',
        item: `${SITE_CONFIG.domain}/#how-to-use`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Offers & Calculator',
        item: `${SITE_CONFIG.domain}/#calculator`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'FAQs',
        item: `${SITE_CONFIG.domain}/#faqs`,
      },
    ],
  };

  // 4. FAQPage Schema for all visible FAQs
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_LIST.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};
