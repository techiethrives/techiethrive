'use client'

import { motion } from 'framer-motion'
import {
  Share2,
  Users,
  TrendingUp,
  Heart,
  CheckCircle,
  Calendar,
  MessageCircle,
  BarChart3,
  Camera,
  Video,
  Image as ImageIcon,
  Zap,
  Target,
  Edit
} from 'lucide-react'

const services = [
  {
    icon: Calendar,
    title: 'Content Planning & Scheduling',
    description: 'Strategic content calendars with optimized posting times for maximum engagement',
    features: ['Monthly Calendar', 'Peak Time Posting', 'Content Mix Strategy', 'Hashtag Research'],
    color: `linear-gradient(to bottom right, var(--primary-dark), var(--secondary-dark))`
  },
  {
    icon: Edit,
    title: 'Content Creation',
    description: 'High-quality graphics, videos, and copy that capture attention and drive action',
    features: ['Custom Graphics', 'Reels & Stories', 'Engaging Captions', 'Brand Consistency'],
    color: `linear-gradient(to bottom right, var(--secondary-light), var(--secondary-lightest))`
  },
  {
    icon: MessageCircle,
    title: 'Community Management',
    description: 'Active engagement with your audience to build loyal communities',
    features: ['Comment Responses', 'DM Management', 'Engagement Boost', 'Crisis Management'],
    color: `linear-gradient(to bottom right, var(--secondary), var(--secondary-dark))`
  },
  {
    icon: Target,
    title: 'Paid Social Advertising',
    description: 'Targeted ad campaigns that deliver measurable ROI on your investment',
    features: ['Ad Creation', 'Audience Targeting', 'Budget Optimization', 'A/B Testing'],
    color: `linear-gradient(to bottom right, var(--primary-dark), var(--secondary))`
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Detailed insights and monthly reports to track growth and performance',
    features: ['Performance Metrics', 'Competitor Analysis', 'Growth Tracking', 'Monthly Reports'],
    color: `linear-gradient(to bottom right, var(--secondary-dark), var(--secondary-darkest))`
  },
  {
    icon: Users,
    title: 'Profile Optimization',
    description: 'Complete profile setup and optimization for maximum discoverability',
    features: ['Bio Optimization', 'Highlights Setup', 'Link in Bio', 'Verification Assistance'],
    color: `linear-gradient(to bottom right, var(--secondary), var(--primary-dark))`
  },
]

const platforms = [
  {
    name: 'Instagram',
    icon: '📸',
    features: ['Feed Posts', 'Stories', 'Reels', 'IGTV', 'Shopping']
  },
  {
    name: 'Facebook',
    icon: '👥',
    features: ['Page Posts', 'Stories', 'Reels', 'Events', 'Groups']
  },
  {
    name: 'LinkedIn',
    icon: '💼',
    features: ['Posts', 'Articles', 'Company Updates', 'Thought Leadership']
  },
  {
    name: 'Twitter (X)',
    icon: '🐦',
    features: ['Tweets', 'Threads', 'Spaces', 'Trending Topics']
  },
  {
    name: 'YouTube',
    icon: '▶️',
    features: ['Videos', 'Shorts', 'Community Posts', 'Live Streams']
  },
  {
    name: 'TikTok',
    icon: '🎵',
    features: ['Short Videos', 'Live Streams', 'Duets', 'Challenges']
  },
]

const contentTypes = [
  { type: 'Static Posts', icon: ImageIcon, description: 'Eye-catching graphics and images' },
  { type: 'Videos & Reels', icon: Video, description: 'Engaging short-form video content' },
  { type: 'Stories', icon: Camera, description: 'Daily stories that keep audience engaged' },
  { type: 'Carousels', icon: Share2, description: 'Multi-image posts for storytelling' },
]

const processSteps = [
  {
    step: '01',
    title: 'Strategy Session',
    description: 'Understanding your brand, goals, target audience, and competitors',
    icon: Target
  },
  {
    step: '02',
    title: 'Content Planning',
    description: 'Creating a monthly content calendar aligned with your marketing goals',
    icon: Calendar
  },
  {
    step: '03',
    title: 'Creation & Approval',
    description: 'Designing content and getting your approval before scheduling',
    icon: Edit
  },
  {
    step: '04',
    title: 'Posting & Engagement',
    description: 'Publishing content and actively engaging with your community',
    icon: MessageCircle
  },
  {
    step: '05',
    title: 'Monitor & Optimize',
    description: 'Tracking performance and adjusting strategy for better results',
    icon: TrendingUp
  },
]

export default function SocialMediaManagementPage() {
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
              Social Media Management
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From ideas to uploads — we manage everything! Boost your presence with our smart and creative social media management
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
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
                <Share2 className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Complete Social Media Management</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  At Techie Thrives, we take the headache out of social media. Our <span className="font-semibold" style={{ color: 'var(--secondary)' }}>comprehensive management service</span> handles everything from strategy and content creation to posting, engagement, and performance tracking.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Whether you need help with one platform or want us to manage your entire social media presence, we deliver <span style={{ color: 'var(--secondary-light)' }}>consistent, engaging content</span> that builds your brand, grows your following, and drives real business results.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
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
              What's Included
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Everything you need for a thriving social media presence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
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
                          <CheckCircle className="w-3 h-3" style={{ color: '#22c55e' }} />
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

      {/* Platforms We Manage */}
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
              Platforms We Manage
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Expert management across all major social media platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
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
                <div className="text-4xl mb-3">{platform.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--secondary)' }}>{platform.name}</h3>
                <ul className="space-y-2">
                  {platform.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--secondary-light)' }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types */}
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
              Content We Create
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Diverse content formats to keep your audience engaged
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentTypes.map((content, index) => {
              const Icon = content.icon
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
                  <h3 className="text-lg font-bold mb-2">{content.type}</h3>
                  <p className="text-gray-400 text-sm">{content.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Process */}
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
              How We Work
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our streamlined process for social media success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((process, index) => {
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
                  <div className="relative p-6 backdrop-blur-sm rounded-2xl border text-center h-full" style={{
                    background: 'rgba(17, 17, 17, 0.9)',
                    borderColor: '#2a2a2a'
                  }}>
                    <div className="inline-flex p-3 rounded-xl mb-4" style={{
                      background: 'linear-gradient(to bottom right, var(--primary-dark), var(--secondary))'
                    }}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-3xl font-bold mb-2" style={{ color: 'rgba(185, 128, 37, 0.3)' }}>{process.step}</div>
                    <h3 className="text-lg font-bold mb-2">{process.title}</h3>
                    <p className="text-gray-400 text-xs">{process.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose Techie Thrives
            </h2>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                We're not just another social media agency—we're your <span className="font-semibold" style={{ color: 'var(--secondary)' }}>growth partners</span>. Our team combines creative storytelling with data-driven strategy to create content that not only looks great but actually drives results.
              </p>
              <p className="text-lg leading-relaxed">
                From <span style={{ color: 'var(--secondary-light)' }}>content creation and scheduling</span> to community management and paid advertising, we handle everything so you can focus on running your business while we grow your online presence.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="p-6 rounded-xl border text-center" style={{
                  background: 'linear-gradient(to right, rgba(0, 43, 39, 0.1), rgba(185, 128, 37, 0.1))',
                  borderColor: 'rgba(0, 43, 39, 0.2)'
                }}>
                  <Zap className="w-10 h-10 mx-auto mb-3" style={{ color: 'var(--secondary)' }} />
                  <h3 className="font-bold mb-2">Fast Turnaround</h3>
                  <p className="text-sm text-gray-400">Quick approvals and timely posting</p>
                </div>
                <div className="p-6 rounded-xl border text-center" style={{
                  background: 'linear-gradient(to right, rgba(185, 128, 37, 0.1), rgba(250, 232, 167, 0.1))',
                  borderColor: 'rgba(185, 128, 37, 0.2)'
                }}>
                  <Heart className="w-10 h-10 mx-auto mb-3" style={{ color: 'var(--secondary-light)' }} />
                  <h3 className="font-bold mb-2">Brand Aligned</h3>
                  <p className="text-sm text-gray-400">Content that matches your voice</p>
                </div>
                <div className="p-6 rounded-xl border text-center" style={{
                  background: 'linear-gradient(to right, rgba(185, 128, 37, 0.1), rgba(140, 94, 27, 0.1))',
                  borderColor: 'rgba(185, 128, 37, 0.2)'
                }}>
                  <TrendingUp className="w-10 h-10 mx-auto mb-3" style={{ color: 'var(--secondary)' }} />
                  <h3 className="font-bold mb-2">Proven Results</h3>
                  <p className="text-sm text-gray-400">Measurable growth and engagement</p>
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
                Ready to Elevate Your Social Media?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Let Techie Thrives manage your social media while you focus on what you do best
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform" style={{
                    background: 'linear-gradient(to right, var(--primary-dark), var(--secondary))',
                    boxShadow: '0 10px 25px -5px rgba(0, 43, 39, 0.3)'
                  }}
                >
                  Start Your Project
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
