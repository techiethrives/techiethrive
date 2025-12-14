'use client'

import { motion } from 'framer-motion'
import {
  Megaphone,
  Target,
  TrendingUp,
  Users,
  CheckCircle,
  Zap,
  Globe,
  Heart,
  BarChart3,
  Palette,
  Mail,
  Video,
  Share2,
  Search
} from 'lucide-react'

const promotionServices = [
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Build engaged communities and drive conversions across all major social platforms',
    features: ['Content Creation', 'Community Management', 'Paid Advertising', 'Analytics & Reporting'],
    color: `linear-gradient(to bottom right, var(--primary-dark), var(--secondary-dark))`
  },
  {
    icon: Search,
    title: 'SEO & Content Marketing',
    description: 'Dominate search rankings with strategic content that attracts and converts',
    features: ['Keyword Research', 'Blog Writing', 'Link Building', 'On-Page Optimization'],
    color: `linear-gradient(to bottom right, var(--secondary-light), var(--secondary-lightest))`
  },
  {
    icon: Target,
    title: 'Paid Advertising (PPC)',
    description: 'Maximize ROI with targeted ads on Google, Facebook, Instagram, and LinkedIn',
    features: ['Google Ads', 'Facebook Ads', 'Instagram Campaigns', 'Retargeting'],
    color: `linear-gradient(to bottom right, var(--secondary), var(--secondary-dark))`
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Nurture leads and drive sales with personalized email campaigns',
    features: ['Newsletter Design', 'Automation', 'Segmentation', 'A/B Testing'],
    color: `linear-gradient(to bottom right, var(--primary-dark), var(--secondary))`
  },
  {
    icon: Video,
    title: 'Video Marketing',
    description: 'Engage audiences with compelling video content for social media and ads',
    features: ['Video Production', 'Editing', 'Animation', 'Distribution'],
    color: `linear-gradient(to bottom right, var(--secondary-dark), var(--secondary-darkest))`
  },
  {
    icon: Palette,
    title: 'Brand Design',
    description: 'Create a memorable brand identity that resonates with your audience',
    features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials', 'Packaging'],
    color: `linear-gradient(to bottom right, var(--secondary), var(--primary-dark))`
  },
]

const promotionChannels = [
  {
    category: 'Digital Channels',
    channels: ['Social Media', 'Search Engines', 'Email', 'Display Ads', 'Video Platforms', 'Mobile Apps']
  },
  {
    category: 'Content Types',
    channels: ['Blog Posts', 'Videos', 'Infographics', 'Podcasts', 'Ebooks', 'Webinars']
  },
  {
    category: 'Platforms',
    channels: ['Facebook', 'Instagram', 'LinkedIn', 'Twitter', 'YouTube', 'TikTok']
  },
  {
    category: 'Ad Networks',
    channels: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'Native Ads', 'Programmatic', 'Affiliate']
  },
]

const benefits = [
  {
    icon: Globe,
    title: 'Unified Brand Message',
    description: 'Consistent messaging across all channels builds trust and brand recognition'
  },
  {
    icon: TrendingUp,
    title: 'Maximum Reach',
    description: 'Connect with your audience wherever they are - online and offline'
  },
  {
    icon: BarChart3,
    title: 'Better ROI',
    description: 'Coordinated campaigns deliver better results than isolated efforts'
  },
  {
    icon: Zap,
    title: 'Faster Growth',
    description: 'Multi-channel approach accelerates brand awareness and customer acquisition'
  },
]

const ourApproach = [
  {
    step: '01',
    title: 'Brand Analysis',
    description: 'Deep dive into your brand, audience, competitors, and market positioning',
    icon: Target
  },
  {
    step: '02',
    title: 'Strategy Development',
    description: 'Create integrated 360° marketing strategy aligned with business goals',
    icon: Palette
  },
  {
    step: '03',
    title: 'Multi-Channel Execution',
    description: 'Launch coordinated campaigns across all relevant channels simultaneously',
    icon: Megaphone
  },
  {
    step: '04',
    title: 'Monitor & Optimize',
    description: 'Track performance, gather insights, and continuously improve results',
    icon: BarChart3
  },
]

export default function AllRoundPromotionPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent" style={{
              backgroundImage: 'linear-gradient(to right, var(--primary-dark), var(--secondary), var(--secondary-lightest))'
            }}>
              All-Round Promotion
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              360-degree marketing solutions that reach your audience everywhere and drive measurable business growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is All-Round Promotion */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl border" style={{
              background: 'linear-gradient(to right, rgba(0, 43, 39, 0.1), rgba(185, 128, 37, 0.1))',
              borderColor: 'rgba(0, 43, 39, 0.2)'
            }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl" style={{
                background: 'linear-gradient(to bottom right, var(--primary-dark), var(--secondary))'
              }}>
                <Megaphone className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">What is 360° Marketing?</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  <span className="font-semibold" style={{ color: 'var(--secondary)' }}>All-Round Promotion</span> (also known as 360-degree marketing) is a comprehensive approach that ensures your brand message reaches your target audience through every possible touchpoint - from social media and search engines to email, video, and beyond.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  At Techie Thrives, we create <span style={{ color: 'var(--secondary-light)' }}>integrated marketing campaigns</span> that deliver consistent messaging across all channels, maximizing your brand's visibility, engagement, and conversion rates while ensuring every marketing dollar works harder for your business.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Promotion Services */}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent" style={{
              backgroundImage: 'linear-gradient(to right, var(--primary-dark), var(--secondary))'
            }}>
              Our Promotion Services
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Complete marketing solutions from content creation to campaign execution
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promotionServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" style={{
                    background: service.color
                  }} />
                  <div className="relative p-6 backdrop-blur-sm rounded-2xl border transition-all duration-300 h-full" style={{
                    background: 'rgba(17, 17, 17, 0.9)',
                    borderColor: '#2a2a2a'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2a2a2a'}
                  >
                    <div className="inline-flex p-3 rounded-xl mb-4" style={{
                      background: service.color
                    }}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3" style={{ color: 'var(--secondary-light)' }} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Promotion Channels */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent" style={{
              backgroundImage: 'linear-gradient(to right, var(--primary-dark), var(--secondary))'
            }}>
              Marketing Channels & Platforms
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We promote your brand across all relevant channels for maximum impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {promotionChannels.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-xl border transition-colors" style={{
                  background: 'rgba(17, 17, 17, 0.5)',
                  borderColor: '#2a2a2a'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2a2a2a'}
              >
                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--secondary)' }}>{group.category}</h3>
                <ul className="space-y-2">
                  {group.channels.map((channel, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--secondary-light)' }} />
                      {channel}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent" style={{
              backgroundImage: 'linear-gradient(to right, var(--primary-dark), var(--secondary))'
            }}>
              Our 360° Approach
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A systematic process for creating and executing integrated marketing campaigns
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ourApproach.map((process, index) => {
              const Icon = process.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -inset-0.5 rounded-2xl blur opacity-30" style={{
                    background: 'linear-gradient(to right, var(--primary-dark), var(--secondary))'
                  }} />
                  <div className="relative p-6 backdrop-blur-sm rounded-2xl border text-center" style={{
                    background: 'rgba(17, 17, 17, 0.9)',
                    borderColor: '#2a2a2a'
                  }}>
                    <div className="inline-flex p-3 rounded-xl mb-4" style={{
                      background: 'linear-gradient(to bottom right, var(--primary-dark), var(--secondary))'
                    }}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-4xl font-bold mb-2" style={{ color: 'rgba(185, 128, 37, 0.3)' }}>{process.step}</div>
                    <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                    <p className="text-gray-400 text-sm">{process.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent" style={{
              backgroundImage: 'linear-gradient(to right, var(--primary-dark), var(--secondary))'
            }}>
              Benefits of All-Round Promotion
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex p-4 rounded-xl mb-4" style={{
                    background: 'linear-gradient(to bottom right, var(--primary-dark), var(--secondary))'
                  }}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Techie Thrives */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent" style={{
              backgroundImage: 'linear-gradient(to right, var(--primary-dark), var(--secondary))'
            }}>
              Techie Thrives Advantage
            </h2>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                Unlike single-channel marketing agencies, Techie Thrives provides <span className="font-semibold" style={{ color: 'var(--secondary)' }}>true 360-degree promotion</span> by handling everything from creative design to content creation, campaign execution, and performance tracking - all under one roof.
              </p>
              <p className="text-lg leading-relaxed">
                Our integrated approach ensures your brand message is <span style={{ color: 'var(--secondary-light)' }}>consistent, compelling, and converting</span> across every touchpoint. We don't just run campaigns - we build complete marketing ecosystems that work together to amplify your brand's reach and impact.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="p-6 rounded-xl border text-center" style={{
                  background: 'linear-gradient(to right, rgba(0, 43, 39, 0.1), rgba(138, 102, 14, 0.1))',
                  borderColor: 'rgba(0, 43, 39, 0.2)'
                }}>
                  <Users className="w-10 h-10 mx-auto mb-3" style={{ color: 'var(--secondary)' }} />
                  <h3 className="font-bold mb-2">Expert Team</h3>
                  <p className="text-sm text-gray-400">Specialists in every marketing discipline</p>
                </div>
                <div className="p-6 rounded-xl border text-center" style={{
                  background: 'linear-gradient(to right, rgba(175, 183, 67, 0.1), rgba(247, 223, 120, 0.1))',
                  borderColor: 'rgba(175, 183, 67, 0.2)'
                }}>
                  <BarChart3 className="w-10 h-10 mx-auto mb-3" style={{ color: 'var(--secondary-light)' }} />
                  <h3 className="font-bold mb-2">Data-Driven</h3>
                  <p className="text-sm text-gray-400">Decisions based on real analytics</p>
                </div>
                <div className="p-6 rounded-xl border text-center" style={{
                  background: 'linear-gradient(to right, rgba(185, 128, 37, 0.1), rgba(138, 102, 14, 0.1))',
                  borderColor: 'rgba(185, 128, 37, 0.2)'
                }}>
                  <Heart className="w-10 h-10 mx-auto mb-3" style={{ color: 'var(--secondary-dark)' }} />
                  <h3 className="font-bold mb-2">Results-Focused</h3>
                  <p className="text-sm text-gray-400">Measured success and ROI</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
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
                Ready to Amplify Your Brand?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Let Techie Thrives create a comprehensive 360° marketing strategy that drives real, measurable results
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform" style={{
                    background: 'linear-gradient(to right, var(--primary-dark), var(--secondary))',
                    boxShadow: '0 10px 25px -5px rgba(0, 43, 39, 0.3)'
                  }}
                >
                  Start Your Campaign
                </a>
                <a
                  href="/portfolio"
                  className="px-8 py-4 border-2 rounded-full font-semibold text-lg transition-all" style={{
                    borderColor: 'var(--secondary)',
                    background: 'transparent'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(185, 128, 37, 0.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
