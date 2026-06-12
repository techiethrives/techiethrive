// ============================================================
// SINGLE SOURCE OF TRUTH — TECHIE THRIVES SERVICES
// Edit services HERE only — both pages update automatically
// ============================================================

import { Award, Rocket, Crown, Palette, Globe, Video, TrendingUp, Edit, Wrench, Bug, Settings } from 'lucide-react'

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
  | { type: 'starting-range'; min: number; max: number }    // e.g. Starting ₹19,999 – ₹34,999

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
    features: ['8 Reels', '5 Posts', 'Caption writing', 'Hashtags'],
    icon: Award,
    color: `linear-gradient(to bottom right, var(--secondary), var(--primary-dark))`
  },
  {
    id: 'gold',
    name: 'Gold',
    price: { type: 'fixed', amount: 12999, suffix: '/month' },
    description: 'Growth-focused Instagram package with boosted reach',
    features: ['10 Reels', '8 Posts', '2 Boost campaigns'],
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
        price: { type: 'fixed', amount: 899 },
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
        note: 'Printing charges extra (AtoQ)',
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
        features: ['Responsive design', '1-3 Pages', 'Contact form', 'Basic UI Design']
      },
      {
        id: 'static-web',
        name: 'Static Website (Visiting)',
        price: { type: 'range', min: 3999, max: 7999 },
        note: 'Domain & Hosting price not included',
        features: ['Basic Design', 'Mobile Responsive', '3-5 pages', 'Fast loading']
      },
      {
        id: 'dynamic-web',
        name: 'Dynamic Website',
        price: { type: 'range', min: 7999, max: 14999 },
        note: 'Domain & Hosting price not included',
        features: ['5-10 Pages', 'Contact & Inquiry form', 'Mail Integration / Admin Panel']
      },
      {
        id: 'business-web',
        name: 'Business Website',
        price: { type: 'range', min: 8999, max: 18999 },
        note: 'Domain & Hosting price not included',
        popular: true,
        features: ['Custom design', '5-8 pages', 'SEO Friendly Structure', 'Contact Forms + Google Map']
      },
      {
        id: 'ecommerce',
        name: 'E-Commerce Website',
        price: { type: 'starting-range', min: 19999, max: 34999 },
        note: 'Domain & Hosting price not included',
        features: ['Product Management (add/edit/delete)', 'Payment Gateway Integration', 'Cart & Checkout automation', 'Admin Dashboard']
      },
      {
        id: 'custom-web',
        name: 'Custom Website',
        price: { type: 'starting', amount: 29999 },
        note: 'Domain & Hosting price not included',
        features: ['Fully Custom Design & Features', '6 Months Support', 'SEO Optimized', 'CMS Integration', 'Basic & Advanced Animations']
      },
      {
        id: 'basic-app',
        name: 'Basic App',
        price: { type: 'range', min: 15999, max: 34999 },
        note: 'Application Stores price not included',
        features: ['Android & (iOS optional)', 'Basic UI/UX', 'Limited Features', 'Basic Backend']
      },
      {
        id: 'advanced-app',
        name: 'Advanced App',
        price: { type: 'range', min: 39999, max: 49999 },
        note: 'Application Stores price not included',
        features: ['Android & iOS', 'Custom Features', 'Strong Frontend/Backend System', 'Admin Panel']
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
        price: { type: 'range', min: 1299, max: 2499 },
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
        price: { type: 'fixed', amount: 17999 },
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
        price: { type: 'fixed', amount: 799 },
        features: ['Quick turnaround', 'Professional cuts', 'Music & effects']
      },
      {
        id: 'long-edit',
        name: 'Long Video Editing (10-20 min)',
        price: { type: 'range', min: 1499, max: 2499 },
        features: ['Detailed editing', 'Color correction', 'Audio enhancement']
      }
    ]
  },
  
  
  {
    id: 'maintenance',
    icon: Settings,
    title: 'Maintenance & Support',
    description: 'Keep your website or app running smoothly with ongoing support plans',
    color: `linear-gradient(to bottom right, var(--primary-dark), var(--secondary-dark))`,
    services: [
      {
        id: 'basic-maintenance',
        name: 'Basic Maintenance',
        price: { type: 'range', min: 999, max: 1999 },
        note: 'Usually applicable after 5 months',
        features: ['Monitoring', 'Basic Updates', 'Monthly Backup', 'Security Check']
      },
      {
        id: 'standard-maintenance',
        name: 'Standard Maintenance',
        price: { type: 'range', min: 2499, max: 4999 },
        note: 'Usually applicable after 5 months',
        features: ['Weekly Backup', 'Speed Optimization', 'Updates', 'Minor Bug Fixes']
      },
      {
        id: 'premium-maintenance',
        name: 'Premium Maintenance',
        price: { type: 'range', min: 5999, max: 9999 },
        note: 'Usually applicable after 5 months',
        features: ['Priority Support', 'Advanced Security', 'Performance Optimization', 'Reports']
      }
    ]
  },
  {
    id: 'edits',
    icon: Wrench,
    title: 'Website / App Edit Charges',
    description: 'Make changes to your existing website or app at affordable rates',
    color: `linear-gradient(to bottom right, var(--secondary), var(--secondary-lightest))`,
    services: [
      {
        id: 'small-changes',
        name: 'Small Changes',
        price: { type: 'range', min: 199, max: 499 },
        features: ['Text Change', 'Image Update', 'Color Change']
      },
      {
        id: 'medium-changes',
        name: 'Medium Changes',
        price: { type: 'range', min: 500, max: 1999 },
        features: ['Section Add', 'Form Update', 'UI Changes']
      },
      {
        id: 'major-changes',
        name: 'Major Changes',
        price: { type: 'range', min: 2000, max: 10000 },
        features: ['New Page', 'Feature Add', 'Redesign']
      }
    ]
  },
  {
    id: 'bug-fixing',
    icon: Bug,
    title: 'Bug Fixing Charges',
    description: 'Fast and reliable bug fixes to keep your digital products error-free',
    color: `linear-gradient(to bottom right, var(--secondary-dark), var(--secondary-darkest))`,
    services: [
      {
        id: 'warranty-fix',
        name: 'Warranty Period',
        price: { type: 'fixed', amount: 0 },
        note: '7–15 Days after delivery',
        features: ['Fix for Development Errors Only']
      },
      {
        id: 'minor-bug',
        name: 'Minor Bug Fix',
        price: { type: 'range', min: 499, max: 1499 },
        features: ['UI Issues', 'Button Fix']
      },
      {
        id: 'medium-bug',
        name: 'Medium Bug Fix',
        price: { type: 'range', min: 1500, max: 4999 },
        features: ['Form/API Issues']
      },
      {
        id: 'major-bug',
        name: 'Major Bug Fix',
        price: { type: 'range', min: 5000, max: 15000 },
        features: ['Crash Fix', 'Payment Issues', 'Backend Errors']
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
    case 'starting-range':
      return price.min
  }
}

// Returns the range note shown below subtotal on booking page (only for range prices)
export function getBookingPriceNote(price: ServicePrice): string | null {
  if (price.type === 'range') {
    return `This rate is only initial and includes the estimated range (₹${price.min.toLocaleString()} – ₹${price.max.toLocaleString()})`
  }
  if (price.type === 'starting-range') {
    return `Starting price — final cost within range (₹${price.min.toLocaleString()} – ₹${price.max.toLocaleString()})`
  }
  return null
}

// Returns display string for SERVICE PAGE
export function getServicePagePriceDisplay(price: ServicePrice): string {
  switch (price.type) {
    case 'fixed':
      if (price.amount === 0) return 'Free'
      return `₹${price.amount.toLocaleString()}${price.suffix ? price.suffix : '/-'}`
    case 'range':
      return `₹${price.min.toLocaleString()} – ₹${price.max.toLocaleString()}/-`
    case 'starting':
      return `Starting ₹${price.amount.toLocaleString()}`
    case 'starting-range':
      return `Starting ₹${price.min.toLocaleString()} – ₹${price.max.toLocaleString()}/-`
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