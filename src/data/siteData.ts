export interface BrandInfo {
  id: string;
  name: string;
  tagline: string;
  category: string;
  specialty: string;
  highlight: string;
  color: string;
  bgGradient: string;
  badge: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Referral' | 'Discounts' | 'Ordering' | 'Brands';
}

export const SITE_CONFIG = {
  domain: 'https://eatclubreferralcode.co.in',
  siteName: 'EatClub Referral Code',
  referralCode: 'MIRAJ850UXP',
  year: '2027',
  discountHeadline: 'Flat 25% OFF + Extra 25% OFF',
  totalMaxDiscount: 'Up to 50% OFF',
  lastVerifiedDate: 'November 16, 2027',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.eatclub.android',
  appStoreUrl: 'https://apps.apple.com/in/app/eatclub-order-food-online/id1455047814',
  webAppUrl: 'https://eatclub.in/',
};

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: 'Download EatClub App',
    description: 'Install the official EatClub app from Google Play Store or Apple App Store.',
    shortDesc: 'Install the official EatClub app from Play Store or App Store.',
    iconName: 'download',
  },
  {
    step: 2,
    title: 'Sign Up / Create Account',
    description: 'Register using your mobile phone number and verify with the 6-digit OTP received via SMS.',
    shortDesc: 'Register using your mobile number and verify OTP.',
    iconName: 'user-plus',
  },
  {
    step: 3,
    title: 'Apply Referral Code',
    description: 'Enter referral code MIRAJ850UXP in the promo/invite code box during signup or at checkout.',
    shortDesc: 'Enter MIRAJ850UXP during signup or in the offers section.',
    iconName: 'ticket',
  },
  {
    step: 4,
    title: 'Enjoy the Discount',
    description: 'Receive Flat 25% store discount plus an Extra 25% referral bonus applied instantly to your cart!',
    shortDesc: 'Get Flat 25% OFF + Extra 25% OFF on your order!',
    iconName: 'utensils',
  },
];

export const TRUST_STATS = [
  {
    title: 'Up to 50% OFF',
    subtitle: '(25% + 25% Extra)',
    icon: 'percent',
  },
  {
    title: 'Exclusive Referral Offer',
    subtitle: 'For New Users',
    icon: 'gift',
  },
  {
    title: 'Easy & Quick Setup',
    subtitle: 'Apply Code in Seconds',
    icon: 'zap',
  },
  {
    title: 'Safe & Verified',
    subtitle: '100% Working Code',
    icon: 'shield-check',
  },
];

export const BRANDS_LIST: BrandInfo[] = [
  {
    id: 'mojo-pizza',
    name: 'MOJO Pizza',
    tagline: '2X Toppings Guaranteed',
    category: 'Pizza',
    specialty: 'Hand-rolled artisan crusts with double mozzarella and rich gourmet toppings on every slice.',
    highlight: 'Over 10M+ Pizzas Delivered',
    color: '#FF4D2D',
    bgGradient: 'from-orange-500/10 to-red-500/10',
    badge: 'India’s #1 Pizza Brand on EatClub',
  },
  {
    id: 'box8',
    name: 'BOX8',
    tagline: 'Desi Meals, Curries & Biryani',
    category: 'Indian Meals',
    specialty: 'Authentic Indian curries, paratha combos, Dal Makhani, Paneer Tikka, and wholesome fusion meal boxes.',
    highlight: 'Fast 28-Min Hot Delivery',
    color: '#D92228',
    bgGradient: 'from-red-500/10 to-amber-500/10',
    badge: 'Iconic Homestyle Taste',
  },
  {
    id: 'itminaan-biryani',
    name: 'Itminaan Biryani',
    tagline: 'Slow Dum-Cooked Matka Biryani',
    category: 'Biryani',
    specialty: 'Layers of long-grain aged Basmati rice and tender marinated meats, slow dum-cooked in sealed earthen clay pots.',
    highlight: 'Clay Pot Dum Process',
    color: '#9C27B0',
    bgGradient: 'from-purple-500/10 to-pink-500/10',
    badge: 'Authentic Royal Recipe',
  },
  {
    id: 'mealful-wraps',
    name: 'Mealful Wraps',
    tagline: 'Loaded Mega Rolls & Wraps',
    category: 'Wraps & Rolls',
    specialty: 'Super-sized, juicy wraps bursting with spiced chicken, cottage cheese, fresh vegetables, and artisan dressings.',
    highlight: 'Heavy & Filling Portions',
    color: '#00897B',
    bgGradient: 'from-teal-500/10 to-emerald-500/10',
    badge: 'Grab & Go Favorite',
  },
  {
    id: 'leancrust-pizza',
    name: 'LeanCrust Pizza',
    tagline: 'Zero-Maida & Multi-Grain Crusts',
    category: 'Healthy Pizza',
    specialty: 'Guilt-free artisanal thin crusts crafted from whole wheat and super grains, topped with fresh farm ingredients.',
    highlight: '100% Maida-Free Base',
    color: '#43A047',
    bgGradient: 'from-green-500/10 to-lime-500/10',
    badge: 'Guilt-Free Indulgence',
  },
  {
    id: 'zaza-biryani',
    name: 'ZAZA Mughal Biryani',
    tagline: 'Rich Awadhi & Nizami Flavors',
    category: 'Biryani',
    specialty: 'Exquisite saffron-infused biryanis celebrating the royal courts of Lucknow and Hyderabad with delicate aromatics.',
    highlight: 'Saffron & Shahi Spices',
    color: '#B78103',
    bgGradient: 'from-yellow-600/10 to-amber-500/10',
    badge: 'Royal Mughal Legacy',
  },
  {
    id: 'globo-icecream',
    name: 'GLOBO Ice Cream',
    tagline: 'Artisanal Small-Batch Desserts',
    category: 'Desserts',
    specialty: 'Rich, velvety ice creams made from 100% pure milk and cream with decadent waffle cones and hot sundaes.',
    highlight: 'No Synthetic Preservatives',
    color: '#E91E63',
    bgGradient: 'from-pink-500/10 to-rose-500/10',
    badge: 'Perfect Sweet Ending',
  },
  {
    id: 'bhatti-chicken',
    name: 'Bhatti Chicken',
    tagline: 'Smoky Charcoal Tandoori Treats',
    category: 'Appetizers',
    specialty: 'Traditional charcoal-grilled chicken kebabs, fiery wings, and melt-in-mouth tikkas marinated for 12 hours.',
    highlight: 'Authentic Bhatti Grilling',
    color: '#E65100',
    bgGradient: 'from-orange-600/10 to-amber-600/10',
    badge: 'Smoky Perfection',
  },
];

export const KEY_BENEFITS = [
  {
    title: 'Zero Hidden Restaurant Markups',
    description: 'Unlike 3rd party aggregators that add 30-40% price inflation onto restaurant menus, EatClub operates its own high-standard cloud kitchens directly with honest pricing.',
    icon: 'tag',
  },
  {
    title: 'Multi-Brand Single Cart Ordering',
    description: 'Craving a MOJO Pizza, an Itminaan Biryani, and GLOBO Ice Cream together? Order from multiple brands in one single delivery with zero extra delivery fees.',
    icon: 'layers',
  },
  {
    title: 'No Rain or Surge Pricing Ever',
    description: 'EatClub never imposes sudden weather surges, festival surge multipliers, or distance gouging. Transparent flat pricing year-round in 2027.',
    icon: 'shield-alert',
  },
  {
    title: 'Extra 25% Off with MIRAJ850UXP',
    description: 'New customers using invite code MIRAJ850UXP unlock exclusive dual-layer discounts: Flat 25% brand price reduction + Extra 25% off coupon savings.',
    icon: 'sparkles',
  },
  {
    title: 'Fast 25-30 Min Direct Delivery',
    description: 'Food is prepared in dedicated tech-enabled kitchens and dispatched immediately with tamper-proof thermal packaging to ensure piping hot delivery.',
    icon: 'clock',
  },
  {
    title: 'EatClub Unlimited Membership Perks',
    description: 'Active users can join the EatClub membership to enjoy flat 30% savings on every subsequent meal, free delivery, and priority order dispatch.',
    icon: 'award',
  },
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Referral',
    question: 'What is the latest EatClub referral code for 2027?',
    answer: 'The verified EatClub referral code for 2027 is MIRAJ850UXP. Entering this invite code during signup or in the offers section gives you an instant Extra 25% OFF on top of the store’s Flat 25% introductory discount on your first food order.',
  },
  {
    id: 'faq-2',
    category: 'Discounts',
    question: 'How does the "Flat 25% OFF + Extra 25% OFF" offer work?',
    answer: 'The offer works as a stackable two-tier savings structure. First, all items on EatClub feature an automatic Flat 25% base discount from menu prices. When you enter referral code MIRAJ850UXP at checkout, an additional 25% discount is calculated and subtracted from your cart subtotal, yielding up to 50% in total cumulative savings.',
  },
  {
    id: 'faq-3',
    category: 'Referral',
    question: 'Where do I enter the EatClub referral code MIRAJ850UXP?',
    answer: 'You can enter the referral code in two places: (1) During the initial signup screen when asked "Have a Referral Code?", or (2) On the Cart / Checkout page in the EatClub app by clicking "Apply Coupon / Referral Code" before selecting your payment method.',
  },
  {
    id: 'faq-4',
    category: 'Referral',
    question: 'Can existing EatClub users use this referral code?',
    answer: 'EatClub referral codes are primarily intended for new users registering their phone number and placing their first order on the platform. However, existing users who have never redeemed a referral invite before can occasionally apply it if their profile is eligible under EatClub promotional rules.',
  },
  {
    id: 'faq-5',
    category: 'Brands',
    question: 'Which food brands can I order from using EatClub?',
    answer: 'EatClub hosts premier cloud kitchen brands including MOJO Pizza (famous for 2X toppings), BOX8 (homestyle Indian curries & meal boxes), Itminaan Biryani (authentic slow dum-cooked matka biryani), Mealful Wraps, LeanCrust Pizza (zero-maida healthy crusts), ZAZA Mughal Biryani, Bhatti Chicken, and GLOBO Ice Cream.',
  },
  {
    id: 'faq-6',
    category: 'Ordering',
    question: 'Can I combine multiple food brands in one single order?',
    answer: 'Yes! One of the standout features of EatClub is multi-brand ordering. You can add a pizza from MOJO Pizza, a dum biryani from Itminaan, and a dessert from GLOBO into one single cart, paying one single delivery checkout with no split fees.',
  },
  {
    id: 'faq-7',
    category: 'Discounts',
    question: 'Is there a minimum order value to use code MIRAJ850UXP?',
    answer: 'Most referral discount coupons on EatClub have a very reasonable minimum order threshold, typically ranging between ₹149 and ₹199 depending on your city and kitchen location. Check the coupon terms displayed inside the app cart for exact local thresholds.',
  },
  {
    id: 'faq-8',
    category: 'Ordering',
    question: 'In which Indian cities is EatClub available in 2027?',
    answer: 'EatClub currently operates across major metropolitan and Tier-1 cities in India, including Mumbai, Bengaluru, Delhi NCR (Gurugram, Noida, Delhi, Faridabad, Ghaziabad), Pune, Hyderabad, Chennai, Kolkata, and Ahmedabad, with continuous expansion across new hubs.',
  },
  {
    id: 'faq-9',
    category: 'Ordering',
    question: 'Why does EatClub not charge surge pricing or high commissions?',
    answer: 'EatClub operates on a direct-to-consumer cloud kitchen model. Unlike food aggregators that connect you to third-party dining restaurants and tack on 30-40% platform fees plus bad-weather surge charges, EatClub manages its own kitchens and logistics end-to-end, passing the cost savings directly to customers.',
  },
  {
    id: 'faq-10',
    category: 'Referral',
    question: 'What should I do if the referral code does not apply?',
    answer: 'If MIRAJ850UXP does not apply, check the following: (1) Ensure your phone number is new to EatClub and verified via OTP, (2) Verify there are no typographical spaces before or after the code, (3) Confirm your order meets the minimum cart amount, and (4) Ensure your delivery address falls within an active EatClub kitchen delivery radius.',
  },
  {
    id: 'faq-11',
    category: 'Discounts',
    question: 'What is EatClub Membership, and can I get it after using the referral code?',
    answer: 'Yes! Once you make your first order using referral code MIRAJ850UXP, you can subscribe to EatClub Membership (often available for as low as ₹9 to ₹99 during promotions). Membership gives you flat 30% savings on every future meal, zero delivery charges, and no surge pricing forever.',
  },
  {
    id: 'faq-12',
    category: 'Discounts',
    question: 'What payment modes are accepted when claiming the referral offer?',
    answer: 'EatClub accepts all popular Indian digital payment modes, including UPI (Google Pay, PhonePe, Paytm, BHIM), Credit and Debit Cards (Visa, MasterCard, RuPay), Net Banking, and popular wallets. The referral discount is deducted prior to payment processing.',
  },
  {
    id: 'faq-13',
    category: 'Referral',
    question: 'How long is the referral code MIRAJ850UXP valid?',
    answer: 'The referral code MIRAJ850UXP is actively maintained and valid for redemptions throughout 2027. We verify referral promotional status regularly to ensure 100% working validity for new customers.',
  },
  {
    id: 'faq-14',
    category: 'Referral',
    question: 'Can I refer my own friends after creating my EatClub account?',
    answer: 'Yes! Once you set up your EatClub account, head over to the "Refer & Earn" section in the app side menu. You will receive your own unique referral link and code to invite friends and earn EatClub credits when they place their first order.',
  },
];

export const TERMS_AND_CONDITIONS = [
  'Referral code MIRAJ850UXP is valid for first-time orders placed by newly registered users on the official EatClub mobile application or website.',
  'The introductory "Flat 25% + Extra 25% OFF" offer is calculated on the menu subtotal before government taxes and packaging charges.',
  'Maximum discount caps may apply per order as designated in the EatClub app interface at the time of redemption.',
  'Only one referral code can be redeemed per mobile phone number, user account, and device identifier.',
  'The offer cannot be combined with certain non-stackable promotional coupons or flash deal vouchers unless explicitly allowed by the platform.',
  'EatClub reserves the sole right to alter, modify, or terminate the referral incentive program or user eligibility criteria at its discretion without prior notice.',
  'Deliveries are subject to geographic operational zones and kitchen availability in serviced PIN codes.',
  'All food orders, delivery commitments, food quality standards, and customer support are handled directly by EatClub Brands Pvt. Ltd.',
];
