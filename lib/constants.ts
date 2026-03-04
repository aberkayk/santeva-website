import {
  Flame,
  Wind,
  BatteryCharging,
  Hand,
  Star,
  Truck,
  ShieldCheck,
  RotateCcw,
  type LucideIcon,
} from "lucide-react";

export const SITE = {
  name: "Santeva",
  tagline: "Professional Hand Therapy at Home",
  description:
    "Cordless hand massager with heat and compression therapy. Designed for arthritis, carpal tunnel, and everyday hand fatigue relief. Fits both hands, rechargeable via USB-C.",
  amazonStoreUrl: "#amazon-link",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const PRODUCT_FEATURES: Feature[] = [
  {
    icon: Flame,
    title: "Rapid Heat Therapy",
    description:
      "Reaches therapeutic temperatures (104\u00B0F\u2013113\u00B0F) in just 8\u201310 seconds with 4 heat settings. Soothes arthritis, relaxes stiff joints, and warms cold fingers instantly.",
  },
  {
    icon: Wind,
    title: "Airbag Compression",
    description:
      "Advanced TPU airbags deliver sequential compression across fingers, palm, and wrist. Mimics professional massage techniques for carpal tunnel and repetitive strain relief.",
  },
  {
    icon: BatteryCharging,
    title: "Cordless & USB-C",
    description:
      "2000mAh rechargeable battery provides 1.5\u20132 hours of continuous therapy. USB-C fast charging, use it at home, at your desk, or while traveling.",
  },
  {
    icon: Hand,
    title: "Universal Fit",
    description:
      "Open-ended design with adjustable strap fits any hand size \u2014 left or right. Premium ABS and soft PU leather for comfort, durability, and easy cleaning.",
  },
];

export interface Step {
  number: string;
  title: string;
  description: string;
}

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    number: "01",
    title: "Slip It On",
    description:
      "Slide the massager onto either hand like a glove and secure it with the adjustable strap for a snug, comfortable fit.",
  },
  {
    number: "02",
    title: "Customize",
    description:
      "Choose from 3 massage modes, 5 intensity levels, and 4 heat settings to create your perfect therapy session.",
  },
  {
    number: "03",
    title: "Relax & Recover",
    description:
      "Enjoy 15 minutes of deep tissue relief. The auto shut-off feature ensures safe, worry-free relaxation every time.",
  },
];

export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text: "I have carpal tunnel from years of typing. This massager with the heat therapy has been a game-changer for my morning stiffness. The compression feels like a real massage therapist!",
    date: "February 2026",
  },
  {
    id: 2,
    name: "James K.",
    rating: 5,
    text: "Bought it for my mom who has arthritis. She uses it every evening and says the heat warms up her joints in seconds. Beautiful packaging too \u2014 perfect gift.",
    date: "January 2026",
  },
  {
    id: 3,
    name: "Emily A.",
    rating: 4,
    text: "Love that it fits both hands and the USB-C charging is super convenient. Battery lasts through my whole evening routine. My office colleagues all want one now.",
    date: "December 2025",
  },
  {
    id: 4,
    name: "Michael T.",
    rating: 5,
    text: "As a gamer, my hands cramp up after long sessions. The different compression modes and heat levels are perfect for recovery. Cordless design means I can use it anywhere.",
    date: "January 2026",
  },
  {
    id: 5,
    name: "Lisa R.",
    rating: 5,
    text: "The airbag compression on each finger is amazing \u2014 nothing like the basic vibration massagers out there. Great build quality with the PU leather interior. Highly recommend!",
    date: "February 2026",
  },
];

export const TRUST_STATS = [
  { icon: Star, label: "Amazon Rating", value: "4.8/5" },
  { icon: Truck, label: "Fast Shipping", value: "1-3 Days" },
  { icon: ShieldCheck, label: "Warranty", value: "2 Years" },
  { icon: RotateCcw, label: "Easy Returns", value: "30 Days" },
] as const;

export const FOOTER_LINKS = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const;
