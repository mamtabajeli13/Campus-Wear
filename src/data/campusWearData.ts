export interface ProductItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  specs: string;
  customOptions: string[];
  defaultMessage: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Custom T-shirts' | 'Hoodies' | 'College clubs' | 'Fest merchandise' | 'Product mockups' | 'Student groups';
  subtitle: string;
  image: string;
  specDetail: string;
}

export const WHATSAPP_PHONE = '919876543210';
export const INSTAGRAM_HANDLE = '@campuswear.in';
export const INSTAGRAM_URL = 'https://instagram.com';

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi CampusWear! I want to create customized college merchandise. I'd like to request a free digital mockup.";

export const IMAGES = {
  hero: '/src/assets/images/hero_campus_mockups_duo_1791308826078.jpg',
  tshirt: '/src/assets/images/product_college_tshirt_1791308839127.jpg',
  hoodie: '/src/assets/images/product_college_hoodie_1791308852283.jpg',
  mug: '/src/assets/images/product_college_mug_1791308864988.jpg',
  eventKit: '/src/assets/images/product_college_fest_pack_1791308876744.jpg',
};

export const PRODUCTS: ProductItem[] = [
  {
    id: 'custom-tshirts',
    title: 'Custom T-Shirts',
    category: 'Heavyweight Cotton · 180–240 GSM',
    description:
      'Comfortable college T-shirts customized with your club, team or event design.',
    image: IMAGES.tshirt,
    specs: 'Classic & Oversized Drops · Screen, DTF & High-Density Puff Print',
    customOptions: ['Front chest crest', 'Back oversized graphics', 'Sleeve team roster'],
    defaultMessage:
      "Hi CampusWear! I'd like to request a FREE digital mockup for Custom T-Shirts for our college club.",
  },
  {
    id: 'custom-hoodies',
    title: 'Custom Hoodies',
    category: 'Brushed Fleece · 350–400 GSM',
    description:
      'Premium-looking customized hoodies for societies, clubs and student groups.',
    image: IMAGES.hoodie,
    specs: 'Drop-Shoulder Silhouette · 3D Embroidery & Raised Puff Print',
    customOptions: ['Embroidered society emblem', 'Custom ribbed cuffs', 'Individual member names'],
    defaultMessage:
      "Hi CampusWear! I'd like to request a FREE digital mockup for Custom Hoodies for our college society.",
  },
  {
    id: 'custom-mugs',
    title: 'Custom Mugs',
    category: 'Studio Ceramics · Matte & Gloss Finish',
    description:
      'Personalized mugs for college events, clubs and gifting.',
    image: IMAGES.mug,
    specs: '325 ml Capacity · 360-Degree Wrap Sublimation Print',
    customOptions: ['Fest guest speaker gifting', 'Club core member induction', 'Batch souvenirs'],
    defaultMessage:
      "Hi CampusWear! I'd like to request a FREE digital mockup for Custom Mugs for our campus event.",
  },
  {
    id: 'event-merchandise',
    title: 'Event Merchandise',
    category: 'Fest Combos · Complete Identity Kits',
    description:
      'Customized merchandise for fests, competitions, college events and student activities.',
    image: IMAGES.eventKit,
    specs: 'Coordinated Packs · Crew Tees, Woven Lanyards, Tote Bags & Enamel Pins',
    customOptions: ['Organizing committee kits', 'Hackathon participant packs', 'Sponsor branding'],
    defaultMessage:
      "Hi CampusWear! I'd like to request a FREE digital mockup for Event & Fest Merchandise.",
  },
];

export const CAMPUS_SEGMENTS = [
  {
    title: 'Student Clubs',
    subtitle: 'Tech, coding, robotics, consulting, design & cultural chapters',
  },
  {
    title: 'College Fests',
    subtitle: 'Annual cultural, technical, sports fests & organizing committees',
  },
  {
    title: 'Societies',
    subtitle: 'Dramatics, music, dance, debating, literary & fine arts teams',
  },
  {
    title: 'Events & Teams',
    subtitle: 'Hackathons, MUNs, sports contingents & hostel wings',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    title: 'Share Your Idea',
    description: 'Send your logo, design or concept through WhatsApp.',
    detail: 'Rough sketches, Canva exports, or vector club logos are all welcome.',
  },
  {
    number: '02',
    title: 'Get a Free Mockup',
    description:
      'We create a digital mockup so you can see how your merchandise will look before ordering.',
    detail: 'Review front, back, and sleeve placements with your student committee.',
  },
  {
    number: '03',
    title: 'Confirm Your Order',
    description:
      'After approving the design, confirm the order and choose a suitable delivery option.',
    detail: 'Finalize size rosters, quantities, and delivery tailored to your campus timeline.',
  },
];

export const WHY_CAMPUSWEAR_BENEFITS = [
  {
    index: '01',
    title: 'Transparent Design',
    description: 'See a digital design mockup before the order moves forward.',
    context: 'Zero surprises. Your entire team reviews 3D visuals before production.',
  },
  {
    index: '02',
    title: 'Fast Communication',
    description:
      'Quick communication through WhatsApp for designs, questions and order confirmation.',
    context: 'Direct student-friendly chats with real design support—no email friction.',
  },
  {
    index: '03',
    title: 'Campus-Friendly',
    description:
      'Products are designed specifically for college clubs, societies, fests and student groups.',
    context: 'Modern Gen-Z drop-shoulder cuts and heavyweight streetwear-grade fabrics.',
  },
  {
    index: '04',
    title: 'Flexible Customization',
    description:
      'Customize merchandise according to your college, club, event or team identity.',
    context: 'Chest crests, oversized backprints, sleeve numbers, and individual member personalization.',
  },
  {
    index: '05',
    title: 'Easier Event Planning',
    description:
      'Offer delivery options that can fit college event and fest schedules.',
    context: 'Aligned around orientation weeks, fest inaugurations, and batch farewells.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Oversized Club Fest Heavyweight Tee',
    category: 'Custom T-shirts',
    subtitle: 'Lookbook Mockup · 240 GSM Combed Cotton',
    image: IMAGES.tshirt,
    specDetail: 'Deep Navy Blue · High-Density Front Screen Print',
  },
  {
    id: 'gal-2',
    title: 'Heavyweight Society Pullover Hoodie',
    category: 'Hoodies',
    subtitle: 'Lookbook Mockup · 380 GSM Brushed Cotton Fleece',
    image: IMAGES.hoodie,
    specDetail: 'Dark Charcoal · Raised Puff Print & Embroidered Crest',
  },
  {
    id: 'gal-3',
    title: 'Annual Cultural Fest Core Crew Kit',
    category: 'Fest merchandise',
    subtitle: 'Curated Lookbook Flat Lay · Coordinated Merch Kit',
    image: IMAGES.eventKit,
    specDetail: 'Crew Tee · Woven Satin Lanyard · Canvas Tote Bag',
  },
  {
    id: 'gal-4',
    title: 'Campus Society Ceramic Coffee Mugs',
    category: 'Product mockups',
    subtitle: 'Studio Mockup · Minimalist Midnight Navy & Cream',
    image: IMAGES.mug,
    specDetail: '325 ml Matte Finish · 360-Degree Wrap Crest',
  },
  {
    id: 'gal-5',
    title: 'Hoodie & Drop-Shoulder Tee Duo Showcase',
    category: 'College clubs',
    subtitle: 'Studio Lookbook · Multi-Garment Varsity Capsule',
    image: IMAGES.hero,
    specDetail: 'Custom Club Crest & Streetwear Silhouette Lineup',
  },
  {
    id: 'gal-6',
    title: 'Student Group Batch & Team Edition',
    category: 'Student groups',
    subtitle: 'Batch Showcase · Individual Roster Personalization',
    image: IMAGES.tshirt,
    specDetail: 'Custom Sleeve Monogram & Back Role Typography',
  },
];
