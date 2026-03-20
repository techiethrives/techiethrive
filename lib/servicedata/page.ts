// ============================================================
// SINGLE SOURCE OF TRUTH — TECHIE THRIVES SERVICES
// Edit services HERE only — both pages update automatically
// ============================================================

import { Award, Rocket, Crown, Palette, Globe, Video, TrendingUp, Edit } from 'lucide-react'

// ─── HELPER: Calculate midpoint price for booking page ───────
export function getMidpointPrice(min: number, max: number): number {
  return Math.round((min + max) / 2)
}

export function formatPriceRange(min: number, max: number): string {
  return `₹${min.toLocaleString()} – ₹${max.toLocaleString()}`
}

export function formatSinglePrice(price: number, suffix?: string): string {
  return `₹${price.toLocaleString()}${suffix ? suffix : ''}`
}

// ─── TYPES ───────────────────────────────────────────────────
export type ServicePrice =
  | { type: 'fixed'; amount: number; suffix?: string }       // e.g. ₹999 or ₹999/month
  | { type: 'range'; min: number; max: number }              // e.g. ₹999 – ₹2,499
  | { type: 'starting'; amount: number }                     // e.g. Starting ₹29,999

export interface Service {
  id: string
  name: string
  price: ServicePrice
  note?: string
  features: string[]
  popular?: boolean
}

export interface ServiceCategory {
  id: string
  icon: React.ElementType
  title: string
  description: string
  color: string
  services: Service[]
}

export interface PackageService {
  id: string
  name: string
  price: ServicePrice
  description: string
  features: string[]
  icon: React.ElementType
  color: string
}

// ─── PACKAGE SERVICES ────────────────────────────────────────
export const packageServices: PackageService[] = [
  {
    id: 'silver',
    name: 'Silver',
    price: { type: 'fixed', amount: 8999, suffix: '/month' },
    description: 'Instagram management package for consistent brand presence',
    features: ['8 Reels', '10 Posts', 'Caption writing', 'Hashtags'],
    icon: Award,
    color: `linear-gradient(to bottom right, var(--secondary), var(--primary-dark))`
  },
  {
    id: 'gold',
    name: 'Gold',
    price: { type: 'fixed', amount: 12999, suffix: '/month' },
    description: 'Growth-focused Instagram package with boosted reach',
    features: ['15 Reels', '15 Posts', '3 Boost campaigns'],
    icon: Rocket,
    color: `linear-gradient(to bottom right, var(--primary-dark), var(--secondary-light))`
  },
  {
    id: 'premium',
    name: 'Premium',
    price: { type: 'fixed', amount: 17999, suffix: '/month' },
    description: 'Complete Instagram management with engagement and analytics',
    features: ['Daily content', 'Story management', 'Engagement', 'Basic analytics'],
    icon: Crown,
    color: `linear-gradient(to bottom right, var(--secondary-light), var(--secondary-lightest))`
  }
]

// ─── SERVICE CATEGORIES ──────────────────────────────────────
// To ADD a service: add a new object to the services array inside the right category
// To REMOVE a service: delete its object
// To EDIT price: change the price object — booking page updates automatically
export const serviceCategories: ServiceCategory[] = [
  {
    id: 'design',
    icon: Palette,
    title: 'Design & Branding',
    description: 'Creative design solutions for all your branding and marketing needs',
    color: `linear-gradient(to bottom right, var(--secondary), var(--secondary-dark))`,
    services: [
      {
        id: 'poster',
        name: 'Poster Layouts',
        price: { type: 'fixed', amount: 999 },
        note: 'Printing charges extra (AtoQ)',
        features: ['Custom design', 'Print ready', 'Multiple formats']
      },
      {
        id: 'thumbnail',
        name: 'Thumbnails',
        price: { type: 'fixed', amount: 499 },
        features: ['YouTube ready', 'Eye-catching design', 'Fast delivery']
      },
      {
        id: 'pamphlet',
        name: 'Pamphlets / Flyer Design',
        price: { type: 'fixed', amount: 1299 },
        note: 'Printing charges extra (AtoQ)',
        features: ['Professional design', 'Brand aligned', 'Print & digital']
      },
      {
        id: 'menu',
        name: 'Menu Designs',
        price: { type: 'range', min: 799, max: 1499 },
        features: ['Restaurant menus', 'Multiple pages', 'Print ready']
      },
      {
        id: 'logo',
        name: 'Logo Design',
        price: { type: 'range', min: 999, max: 2499 },
        features: ['Original concepts', 'Multiple revisions', 'All formats']
      },
      {
        id: 'visiting-card',
        name: 'Visiting Card Design',
        price: { type: 'range', min: 899, max: 1499 },
        features: ['Premium designs', 'Both sides', 'Print specs included']
      },
      {
        id: 'presentation',
        name: 'Presentation Design',
        price: { type: 'fixed', amount: 4999 },
        features: ['Professional slides', 'Custom graphics', 'Brand consistency']
      },
      {
        id: 'carousel',
        name: 'Carousel Video (8 photos)',
        price: { type: 'fixed', amount: 1999 },
        features: ['Smooth transitions', 'Music sync', 'Social media ready']
      }
    ]
  },
  {
    id: 'web-app',
    icon: Globe,
    title: 'Web & App Development',
    description: 'Modern websites and mobile applications for businesses',
    color: `linear-gradient(to bottom right, var(--primary-dark), var(--secondary))`,
    services: [
      {
        id: 'portfolio-web',
        name: 'Portfolio Website',
        price: { type: 'range', min: 2499, max: 4999 },
        features: ['Responsive design', 'Contact form']
      },
      {
        id: 'business-web',
        name: 'Business Website',
        price: { type: 'range', min: 8999, max: 10999 },
        note: 'Domain price not included',
        popular: true,
        features: ['Custom design', '4-6 pages']
      },
      {
        id: 'ecommerce',
        name: 'E-Commerce Website',
        price: { type: 'range', min: 14999, max: 19999 },
        note: 'Domain price not included',
        features: ['Product management', 'Payment gateway', 'Admin dashboard']
      },
      {
        id: 'custom-web',
        name: 'Custom Website',
        price: { type: 'starting', amount: 29999 },
        note: 'Domain price not included',
        features: ['6 month support', '3D animation', 'SEO optimized', 'CMS integration']
      },
      {
        id: 'basic-app',
        name: 'Basic App',
        price: { type: 'range', min: 15999, max: 34999 },
        features: ['iOS & Android', 'Limited features', 'Required backend']
      },
      {
        id: 'advanced-app',
        name: 'Advanced App',
        price: { type: 'range', min: 39999, max: 49999 },
        features: ['iOS & Android', 'Custom features', 'Solid backend']
      }
    ]
  },
  {
    id: 'video-production',
    icon: Video,
    title: 'Video & Reel Production',
    description: 'Professional video production services for brands and creators',
    color: `linear-gradient(to bottom right, var(--primary-dark), var(--secondary-dark))`,
    services: [
      {
        id: 'reel-package',
        name: '10 Reel Package',
        price: { type: 'range', min: 9999, max: 12999 },
        popular: true,
        features: ['10 complete reels', 'Professional shooting', 'Trending edits']
      },
      {
        id: 'promo-video',
        name: 'Promotion Video (5-12 minutes)',
        price: { type: 'range', min: 3999, max: 9999 },
        features: ['Professional shooting', 'Color grading', 'Music & transitions']
      },
      {
        id: 'promo-reel',
        name: 'Promotion Reel (20-45 seconds)',
        price: { type: 'fixed', amount: 1499 },
        features: ['Trending formats', 'Fast-paced editing', 'Social media ready']
      },
      {
        id: 'cinematic-reel',
        name: 'Cinematic Reels',
        price: { type: 'fixed', amount: 1999 },
        features: ['Cinematic shots', 'Professional color', 'Story-driven']
      },
      {
        id: 'pre-wedding',
        name: 'Pre-Wedding Shoots',
        price: { type: 'range', min: 14999, max: 39999 },
        features: ['Full day coverage', 'Multiple locations', '50+ edited photos']
      },
      {
        id: 'youtube-package',
        name: 'YouTube Package',
        price: { type: 'fixed', amount: 14999 },
        features: ['3 long videos', '10 shorts', 'Thumbnails included']
      }
    ]
  },
  {
    id: 'social-ads',
    icon: TrendingUp,
    title: 'Social Media & Ads Management',
    description: 'Grow your brand with targeted advertising and social media strategies',
    color: `linear-gradient(to bottom right, var(--secondary-dark), var(--secondary-darkest))`,
    services: [
      {
        id: 'meta-ads',
        name: 'Meta Ads Management',
        price: { type: 'fixed', amount: 2499, suffix: '/week' },
        note: '+ Ad spend',
        features: ['Facebook & Instagram', 'Campaign setup', 'Performance tracking']
      },
      {
        id: 'google-ads',
        name: 'Google Ads Management',
        price: { type: 'fixed', amount: 4999 },
        note: 'Ad spend extra',
        features: ['Search campaigns', 'Display ads', 'ROI optimization']
      },
      {
        id: 'insta-1month',
        name: '1-Month Instagram Management',
        price: { type: 'fixed', amount: 17999 },
        note: '31 Days contract',
        features: [
          'Daily content posting (Posts, Reels, Stories)',
          'Content creation & planning',
          'Daily shoot coordination',
          'Trend research & analysis',
          'Client coordination & approvals',
          'Caption & hashtag strategy',
          'Peak time posting',
          'Basic monthly report'
        ]
      },
      {
        id: 'insta-3month',
        name: '3-Month Instagram Management',
        price: { type: 'fixed', amount: 39999 },
        note: '90 Days contract • Save ₹14,000',
        popular: true,
        features: [
          'Everything in 1-Month plan',
          'Advanced content strategy',
          'Priority support',
          'Detailed weekly reports',
          'Competitor analysis',
          'Growth optimization',
          'Story highlights management',
          'Profile optimization'
        ]
      }
    ]
  },
  {
    id: 'editing',
    icon: Edit,
    title: 'Editing Services',
    description: 'Professional editing for videos you have already recorded',
    color: `linear-gradient(to bottom right, var(--secondary-light), var(--secondary-lightest))`,
    services: [
      {
        id: 'short-edit',
        name: 'Short Video Editing (30s-1min)',
        price: { type: 'fixed', amount: 999 },
        features: ['Quick turnaround', 'Professional cuts', 'Music & effects']
      },
      {
        id: 'long-edit',
        name: 'Long Video Editing (10-20 min)',
        price: { type: 'range', min: 1499, max: 2499 },
        features: ['Detailed editing', 'Color correction', 'Audio enhancement']
      }
    ]
  }
]

// ─── BOOKING PAGE HELPERS ────────────────────────────────────
// Returns the price to DISPLAY on the booking page
export function getBookingDisplayPrice(price: ServicePrice): number {
  switch (price.type) {
    case 'fixed':
      return price.amount
    case 'range':
      return getMidpointPrice(price.min, price.max)
    case 'starting':
      return price.amount
  }
}

// Returns the range note shown below subtotal on booking page (only for range prices)
export function getBookingPriceNote(price: ServicePrice): string | null {
  if (price.type === 'range') {
    return `This rate is only initial and includes the estimated range (₹${price.min.toLocaleString()} – ₹${price.max.toLocaleString()})`
  }
  return null
}

// Returns display string for SERVICE PAGE
export function getServicePagePriceDisplay(price: ServicePrice): string {
  switch (price.type) {
    case 'fixed':
      return `₹${price.amount.toLocaleString()}${price.suffix ? price.suffix : '/-'}`
    case 'range':
      return `₹${price.min.toLocaleString()} – ₹${price.max.toLocaleString()}/-`
    case 'starting':
      return `Starting ₹${price.amount.toLocaleString()}`
  }
}

// Flat list of all services for the booking page dropdown/list
export function getAllServicesFlat() {
  return serviceCategories.flatMap(cat =>
    cat.services.map(service => ({
      ...service,
      category: cat.title,
      bookingPrice: getBookingDisplayPrice(service.price),
      bookingPriceNote: getBookingPriceNote(service.price)
    }))
  )
}