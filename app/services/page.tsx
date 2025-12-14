'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Video,
  Film,
  Edit,
  Palette,
  Globe,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Star,
  Instagram
} from 'lucide-react'

// Popular services to highlight
const popularServices = [
  {
    id: 'insta-3month',
    name: '3-Month Instagram Management',
    price: '₹39,999',
    description: 'Complete Instagram management with daily posting, content creation, and growth strategy',
    features: ['Daily posting', 'Content creation', 'Story management', 'Growth analytics'],
    icon: Instagram,
    color: `linear-gradient(to bottom right, var(--secondary), var(--primary-dark))`
  },
  {
    id: '10-reel-package',
    name: '10 Reel Package',
    price: '₹9,999',
    description: 'Professional shoot + edit for 10 trending reels - best value package',
    features: ['10 complete reels', 'Professional shooting', 'Trending edits', 'Social media ready'],
    icon: Video,
    color: `linear-gradient(to bottom right, var(--primary-dark), var(--secondary-light))`
  },
  {
    id: 'multipage-web',
    name: 'Multi-Page Website',
    price: '₹3,999-₹7,999',
    description: 'Custom responsive website with SEO optimization and modern design',
    features: ['Responsive design', 'SEO optimized', 'CMS integration', 'Contact forms'],
    icon: Globe,
    color: `linear-gradient(to bottom right, var(--secondary-light), var(--secondary-lightest))`
  }
]

const serviceCategories = [
  {
    id: 'video-production',
    icon: Video,
    title: 'Video & Reel Production',
    description: 'Professional video production services from short reels to full-length promotional content',
    color: `linear-gradient(to bottom right, var(--primary-dark), var(--secondary-dark))`,
    services: [
      { id: 'promo-video', name: 'Promotion Video (5-12 minutes)', price: '₹1,499', features: ['Professional shooting', 'Color grading', 'Music & transitions'] },
      { id: 'promo-reel', name: 'Promotion Reel (20-45 seconds)', price: '₹999', features: ['Trending formats', 'Fast-paced editing', 'Social media ready'] },
      { id: 'cinematic-reel', name: 'Cinematic Reels', price: '₹999', features: ['Cinematic shots', 'Professional color', 'Story-driven'] },
      { id: 'pre-wedding', name: 'Pre-Wedding Shoots', price: '₹14,999', features: ['Full day coverage', 'Multiple locations', '50+ edited photos'] },
      { id: '10-reel-package', name: '10 Reel Package (Shoot + Edit)', price: '₹9,999', popular: true, features: ['10 complete reels', 'Shooting included', 'Best value package'] },
      { id: 'youtube-package', name: 'YouTube Package', price: '₹11,999', features: ['3 long videos', '10 shorts', 'Thumbnails included'] }
    ]
  },
  {
    id: 'editing',
    icon: Edit,
    title: 'Editing Services',
    description: 'Professional video editing services for content you\'ve already shot',
    color: `linear-gradient(to bottom right, var(--secondary-light), var(--secondary-lightest))`,
    services: [
      { id: 'short-edit', name: 'Short Video Editing (30s-1min)', price: '₹899', features: ['Quick turnaround', 'Professional cuts', 'Music & effects'] },
      { id: 'long-edit', name: 'Long Video Editing (10-20 min)', price: '₹1,499', features: ['Detailed editing', 'Color correction', 'Audio enhancement'] }
    ]
  },
  {
    id: 'design',
    icon: Palette,
    title: 'Design & Branding',
    description: 'Creative design solutions for all your branding and marketing needs',
    color: `linear-gradient(to bottom right, var(--secondary), var(--secondary-dark))`,
    services: [
      { id: 'poster', name: 'Poster Layouts', price: '₹699', features: ['Custom design', 'Print ready', 'Multiple formats'] },
      { id: 'thumbnail', name: 'Thumbnails', price: '₹699', features: ['YouTube ready', 'Eye-catching design', 'Fast delivery'] },
      { id: 'pamphlet', name: 'Pamphlets / Poster Design', price: '₹899', features: ['Professional design', 'Brand aligned', 'Print & digital'] },
      { id: 'menu', name: 'Menu Designs', price: '₹799', features: ['Restaurant menus', 'Multiple pages', 'Print ready'] },
      { id: 'logo', name: 'Logo Design', price: '₹499', features: ['Original concepts', 'Multiple revisions', 'All formats'] },
      { id: 'visiting-card', name: 'Visiting Card Design', price: '₹899-₹1,499', features: ['Premium designs', 'Both sides', 'Print specs included'] },
      { id: 'presentation', name: 'Presentation Design', price: '₹4,999', features: ['Professional slides', 'Custom graphics', 'Brand consistency'] },
      { id: 'carousel', name: 'Carousel Video (8 photos)', price: '₹1,999', features: ['Smooth transitions', 'Music sync', 'Social media ready'] }
    ]
  },
  {
    id: 'web-app',
    icon: Globe,
    title: 'Web & App Development',
    description: 'Custom websites and mobile applications built with modern technologies',
    color: `linear-gradient(to bottom right, var(--primary-dark), var(--secondary))`,
    services: [
      { id: 'portfolio-web', name: 'Portfolio Website', price: '₹2499', features: ['Responsive design', '3-5 pages', 'Contact form'] },
      { id: 'multipage-web', name: 'Multi-Page Website', price: '₹5,999-₹10,999', features: ['Custom design', 'SEO optimized', 'CMS integration'] },
      { id: 'ecommerce', name: 'E-Commerce Website', price: '₹14,999', note: 'Domain price not included', features: ['Product management', 'Payment gateway', 'Admin dashboard'] },
      { id: 'app-dev', name: 'App Development', price: '₹15,999-₹19,999', features: ['iOS & Android', 'Custom features', 'Backend included'] }
    ]
  },
  {
    id: 'social-ads',
    icon: TrendingUp,
    title: 'Social Media & Ads Management',
    description: 'Complete social media management and advertising services to grow your brand',
    color: `linear-gradient(to bottom right, var(--secondary-dark), var(--secondary-darkest))`,
    services: [
      { id: 'meta-ads', name: 'Meta Ads Management', price: '₹4,999/week', note: '+ Ad spend', features: ['Facebook & Instagram', 'Campaign setup', 'Performance tracking'] },
      { id: 'google-ads', name: 'Google Ads Management', price: '₹1,999', note: 'Ad spend extra', features: ['Search campaigns', 'Display ads', 'ROI optimization'] },
      { id: 'insta-3month', name: '3-Month Instagram Management', price: '₹39,999', popular: true, features: ['Daily posting', 'Content creation', 'Growth strategy', 'Reports'] },
      { id: 'insta-1month', name: '1-Month Instagram Management', price: '₹17,999', features: ['Daily content', 'Story management', 'Engagement', 'Basic analytics'] }
    ]
  }
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen text-white" style={{ background: 'var(--primary-black)' }}>
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom right, rgba(0, 43, 39, 0.2), var(--primary-black), rgba(185, 128, 37, 0.1))'
        }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border backdrop-blur-sm" style={{
              background: 'linear-gradient(to right, rgba(0, 43, 39, 0.1), rgba(185, 128, 37, 0.1))',
              borderColor: 'rgba(0, 43, 39, 0.2)'
            }}>
              <Sparkles className="w-4 h-4" style={{ color: 'var(--secondary-light)' }} />
              <span className="text-sm text-gray-300">Complete Digital Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent" style={{
              backgroundImage: 'linear-gradient(to right, var(--primary-dark), var(--secondary), var(--secondary-lightest))'
            }}>
              Our Services & Pricing
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transparent pricing for all our professional services — from video production to web development and social media management
            </p>
          </motion.div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="py-20 px-6" style={{
        background: 'linear-gradient(to bottom, var(--primary-black), #111111)'
      }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full border" style={{
              background: 'linear-gradient(to right, rgba(185, 128, 37, 0.2), rgba(0, 43, 39, 0.2))',
              borderColor: 'rgba(185, 128, 37, 0.3)'
            }}>
              <Star className="w-4 h-4" style={{ color: 'var(--secondary)' }} />
              <span className="text-sm font-semibold" style={{ color: 'var(--secondary)' }}>Most Popular</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent" style={{
              backgroundImage: 'linear-gradient(to right, var(--secondary), var(--primary-dark))'
            }}>
              Popular Services
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our most requested services chosen by hundreds of satisfied clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {popularServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group relative"
                >
                  {/* Popular Star */}
                  <div className="absolute -top-3 -right-3 z-10">
                    <div className="p-2 rounded-full shadow-lg" style={{
                      background: 'linear-gradient(to right, var(--secondary), var(--primary-dark))'
                    }}>
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>

                  {/* Card Glow */}
                  <div className="absolute -inset-0.5 rounded-2xl blur opacity-40 group-hover:opacity-70 transition duration-500" style={{
                    background: service.color
                  }} />
                  
                  {/* Card Content */}
                  <div className="relative p-8 backdrop-blur-sm rounded-2xl border transition-all duration-300 h-full flex flex-col" style={{
                    background: 'rgba(17, 17, 17, 0.9)',
                    borderColor: 'var(--secondary)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                  >
                    <div className="inline-flex p-4 rounded-xl mb-4 w-fit" style={{
                      background: service.color
                    }}>
                      <Icon className="w-8 h-8" />
                    </div>

                    <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                    <div className="text-3xl font-bold bg-clip-text text-transparent mb-3" style={{
                      backgroundImage: 'linear-gradient(to right, var(--secondary), var(--primary-dark))'
                    }}>
                      {service.price}
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>

                    <ul className="space-y-2 mb-6 flex-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--secondary)' }} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href={`/services-book?service=${service.id}`}>
                      <button className="w-full px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2" style={{
                        background: 'linear-gradient(to right, var(--secondary), var(--primary-dark))',
                        boxShadow: '0 10px 25px -5px rgba(185, 128, 37, 0.3)'
                      }}>
                        Book Now
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* All Services Categories */}
      {serviceCategories.map((category, categoryIndex) => {
        const Icon = category.icon
        return (
          <section 
            key={category.id} 
            id={category.id}
            className="py-20 px-6"
            style={{
              background: categoryIndex % 2 === 0 ? 'var(--primary-black)' : 'linear-gradient(to bottom, var(--primary-black), #111111)'
            }}
          >
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl" style={{
                    background: category.color
                  }}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent" style={{
                      backgroundImage: 'linear-gradient(to right, var(--primary-dark), var(--secondary))'
                    }}>
                      {category.title}
                    </h2>
                    <p className="text-gray-400 mt-1">{category.description}</p>
                  </div>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative"
                  >
                    {service.popular && (
                      <div className="absolute -top-3 -right-3 z-10">
                        <div className="px-3 py-1 rounded-full text-xs font-bold shadow-lg" style={{
                          background: 'linear-gradient(to right, var(--secondary), var(--primary-dark))'
                        }}>
                          Popular
                        </div>
                      </div>
                    )}

                    <div className="absolute -inset-0.5 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500" style={{
                      background: category.color
                    }} />
                    
                    <div className="relative p-6 backdrop-blur-sm rounded-xl border transition-all duration-300 h-full flex flex-col" style={{
                      background: 'rgba(17, 17, 17, 0.9)',
                      borderColor: '#2a2a2a'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2a2a2a'}
                    >
                      <h3 className="text-lg font-bold mb-2 text-white">{service.name}</h3>
                      
                      <div className="mb-4">
                        <div className="text-2xl font-bold bg-clip-text text-transparent" style={{
                          backgroundImage: 'linear-gradient(to right, var(--primary-dark), var(--secondary))'
                        }}>
                          {service.price}
                        </div>
                        {service.note && (
                          <p className="text-xs text-gray-500 mt-1">{service.note}</p>
                        )}
                      </div>

                      <ul className="space-y-2 mb-4 flex-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--secondary-light)' }} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Link href={`/services-book?service=${service.id}`}>
                        <button className="w-full px-4 py-2 border rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group-hover:scale-105" style={{
                          background: 'linear-gradient(to right, rgba(0, 43, 39, 0.2), rgba(185, 128, 37, 0.2))',
                          borderColor: 'var(--secondary)'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0, 43, 39, 0.3)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(to right, rgba(0, 43, 39, 0.2), rgba(185, 128, 37, 0.2))'}
                        >
                          Book Now
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA Section */}
      <section className="py-20 px-6" style={{
        background: 'linear-gradient(to bottom, var(--primary-black), #111111)'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative p-12 rounded-3xl border overflow-hidden" style={{
            background: 'linear-gradient(to right, rgba(0, 43, 39, 0.1), rgba(185, 128, 37, 0.1))',
            borderColor: 'rgba(0, 43, 39, 0.2)'
          }}>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
            
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Choose your services and let's bring your vision to life with professional quality and transparent pricing
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/book-service">
                  <button className="px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform flex items-center gap-2" style={{
                    background: 'linear-gradient(to right, var(--primary-dark), var(--secondary))',
                    boxShadow: '0 10px 25px -5px rgba(0, 43, 39, 0.3)'
                  }}>
                    Book Services Now
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-8 py-4 border-2 rounded-full font-semibold text-lg transition-all" style={{
                    borderColor: 'var(--secondary)',
                    background: 'transparent'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(185, 128, 37, 0.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
