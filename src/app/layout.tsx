import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#FF6600",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "EatClub Referral Code 2027: MIRAJ850UXP – Flat 25% + Extra 25% OFF",
  description:
    "Claim the latest EatClub referral code MIRAJ850UXP for 2027. Get Flat 25% OFF + Extra 25% OFF on your first food order across MOJO Pizza, BOX8, and more top brands.",
  keywords: [
    "EatClub Referral Code",
    "EatClub Referral Code 2027",
    "EatClub Coupon Code",
    "EatClub Promo Code",
    "EatClub Invite Code",
    "EatClub Discount Code",
    "EatClub New User Offer",
    "EatClub Referral Offer",
    "EatClub 25% Off",
    "MIRAJ850UXP",
  ],
  authors: [{ name: "EatClub Referral Guide" }],
  creator: "EatClub Referral Guide",
  publisher: "EatClub Referral Guide",
  metadataBase: new URL("https://eatclubreferralcode.co.in"),
  alternates: {
    canonical: "https://eatclubreferralcode.co.in/",
  },
  verification: {
    google: "aL8htfno9gs-PSaUFB1Uq6my8gGJbqf2NL0ZqE-8x1w",
  },
  openGraph: {
    title: "EatClub Referral Code 2027: MIRAJ850UXP – Flat 25% + Extra 25% OFF",
    description:
      "Use verified EatClub invite code MIRAJ850UXP to claim up to 50% discount (25% Flat + 25% Extra) on your first meal order.",
    url: "https://eatclubreferralcode.co.in/",
    siteName: "EatClub Referral Code",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EatClub Referral Code 2027: MIRAJ850UXP – Flat 25% + Extra 25% OFF",
    description:
      "Apply EatClub referral code MIRAJ850UXP for exclusive discounts on your first food order in 2027.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="google-site-verification"
          content="aL8htfno9gs-PSaUFB1Uq6my8gGJbqf2NL0ZqE-8x1w"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#FFFDFB] text-neutral-900 antialiased selection:bg-orange-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
