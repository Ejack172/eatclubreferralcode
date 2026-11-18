import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'EatClub Referral Code 2027',
    short_name: 'EatClub Code',
    description: 'Claim EatClub referral code MIRAJ850UXP for Flat 25% + Extra 25% OFF on your first food order.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFDFB',
    theme_color: '#FF6600',
    icons: [
      {
        src: '/icon.png',
        sizes: '400x400',
        type: 'image/png',
      },
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
