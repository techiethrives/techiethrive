'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Instagram,
  Camera,
  Video,
  Edit,
  TrendingUp,
  Users,
  Calendar,
  MessageCircle,
  Hash,
  Clock,
  BarChart3,
  CheckCircle,
  Zap,
  Target,
  ArrowRight,
  Phone
} from 'lucide-react'

const contractPlans = [
  {
    name: '1-Month Contract',
    duration: '31 Days',
    price: '₹17,999',
    popular: false,
    features: [
      'Daily content posting (Posts, Reels, Stories)',
      'Content creation & planning',
      'Daily shoot coordination',
      'Trend research & analysis',
      'Client coordination & approvals',
      'Caption & hashtag strategy',
      'Peak time posting',
      'Basic monthly report'
    ],
    color: `linear-gradient(to bottom right, var(--secondary), var(--primary-dark))`
  },
  {
    name: '3-Month Contract',
    duration: '90 Days',
    price: '₹39,999',
    savings: 'Save ₹14,000',
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
    ],
    color: `linear-gradient(to bottom right, var(--primary-dark), var(--secondary))`
  }
]

const dailyActivities = [
  {
    icon: Camera,
    title: 'Daily Uploading',
    description: 'Regular posting on your Instagram account including posts, reels, and stories as per the plan schedule.',
    color: `linear-gradient(to bottom right, var(--secondary), var(--secondary-dark))`
  },
  {
    icon: Video,
    title: 'Reels & Posts Creation',
    description: 'Complete content ideation, planning, and execution for engaging posts and trending reels.',
    color: `linear-gradient(to bottom right, var(--primary-dark), var(--secondary-dark))`
  },
  {
    icon: Camera,
    title: 'Daily Shoot Coordination',
    description: 'We handle or coordinate regular content shooting (photos/videos) depending on your package requirements.',
    color: `linear-gradient(to bottom right, var(--secondary-light), var(--secondary-lightest))`
  },
  {
    icon: TrendingUp,
    title: 'Daily Content Research',
    description: 'Researching latest trends, viral audio, concepts, and competitor strategies to keep your content fresh and relevant.',
    color: `linear-gradient(to bottom right, var(--secondary-dark), var(--secondary-darkest))`
  },
  {
    icon: MessageCircle,
    title: 'Daily Client Coordination',
    description: 'Regular communication and discussion about content ideas, approvals, updates, and performance insights.',
    color: `linear-gradient(to bottom right, var(--primary-dark), var(--secondary))`
  }
]

const strategies = [
  {
    icon: Edit,
    title: 'High-Impact Captions',
    description: 'We write unique, engaging captions optimized for the current Instagram algorithm to maximize reach and engagement.',
    features: ['Algorithm-friendly', 'Call-to-action focused', 'Brand voice alignment', 'Engagement triggers']
  },
  {
    icon: Hash,
    title: 'Strategic Hashtags',
    description: 'Researched and optimized hashtag sets to increase discoverability and reach your target audience effectively.',
    features: ['Trending hashtags', 'Niche-specific tags', 'Mix of sizes', 'Regular updates']
  },
  {
    icon: Clock,
    title: 'Peak Time Posting',
    description: 'We analyze your audience insights to post at optimal times when your followers are most active for maximum engagement.',
    features: ['Audience analysis', 'Time optimization', 'Continuous adjustment', 'Best engagement windows']
  }
]

export default function InstagramManagementPage() {
  return (
    <main className="min-h-screen text-white" style={{ background: 'var(--primary-black)' }}>
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom right, rgba(138, 102, 14, 0.2), var(--primary-black), rgba(0, 43, 39, 0.2))'
        }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border backdrop-blur-sm" style={{
              background: 'linear-gradient(to right, rgba(185, 128, 37, 0.1), rgba(0, 43, 39, 0.1))',
              borderColor: 'rgba(185, 128, 37, 0.2)'
            }}>
              <Instagram className="w-4 h-4" style={{ color: 'var(--secondary)' }} />
              <span className="text-sm text-gray-300">Professional Instagram Management</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent" style={{
              backgroundImage: 'linear-gradient(to right, var(--secondary), var(--primary-dark), var(--secondary-lightest))'
            }}>
              Instagram Management Services
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From ideas to uploads — we handle everything! Professional Instagram management that grows your brand, engages your audience, and drives real results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl border" style={{
              background: 'linear-gradient(to right, rgba(185, 128, 37, 0.1), rgba(0, 43, 39, 0.1))',
              borderColor: 'rgba(185, 128, 37, 0.2)'
            }}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl" style={{
                background: 'linear-gradient(to bottom right, var(--secondary), var(--primary-dark))'
              }}>
                <Instagram className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">What We Do</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  Our <span className="font-semibold" style={{ color: 'var(--secondary)' }}>Instagram Management service</span> is a complete solution where we handle everything for your Instagram account — from content creation and daily posting to strategic planning and performance tracking.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We don't just post content; we create a <span style={{ color: 'var(--primary-dark)' }}>cohesive Instagram strategy</span> that aligns with your brand, engages your target audience, and helps you achieve measurable growth. You focus on your business while we make your Instagram presence shine!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contract Plans */}
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
              backgroundImage: 'linear-gradient(to right, var(--secondary), var(--primary-dark))'
            }}>
              Choose Your Contract
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Flexible plans designed to fit your budget and growth goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {contractPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="px-4 py-1.5 rounded-full text-sm font-bold shadow-lg" style={{
                      background: 'linear-gradient(to right, var(--secondary), var(--primary-dark))'
                    }}>
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Card Glow */}
                <div className="absolute -inset-0.5 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" style={{
                  background: plan.color
                }} />
                
                {/* Card Content */}
                <div className="relative p-8 backdrop-blur-sm rounded-2xl border transition-all duration-300" style={{
                  background: 'rgba(17, 17, 17, 0.9)',
                  borderColor: '#2a2a2a'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2a2a2a'}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{plan.duration}</p>
                    <div className="text-4xl font-bold bg-clip-text text-transparent mb-2" style={{
                      backgroundImage: 'linear-gradient(to right, var(--secondary), var(--primary-dark))'
                    }}>
                      {plan.price}
                    </div>
                    {plan.savings && (
                      <p className="text-sm font-semibold" style={{ color: 'var(--secondary-light)' }}>{plan.savings}</p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--secondary-light)' }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/services-book">
                    <button className="w-full px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform" style={{
                      background: 'linear-gradient(to right, var(--secondary), var(--primary-dark))',
                      boxShadow: '0 10px 25px -5px rgba(185, 128, 37, 0.3)'
                    }}>
                      Select Plan
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Activities */}
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
              backgroundImage: 'linear-gradient(to right, var(--secondary), var(--primary-dark))'
            }}>
              Daily Activities Included
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Here's what we do for you every single day
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dailyActivities.map((activity, index) => {
              const Icon = activity.icon
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
                    background: activity.color
                  }} />
                  <div className="relative p-6 backdrop-blur-sm rounded-2xl border transition-all duration-300 h-full" style={{
                    background: 'rgba(17, 17, 17, 0.9)',
                    borderColor: '#2a2a2a'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2a2a2a'}
                  >
                    <div className="inline-flex p-3 rounded-xl mb-4" style={{
                      background: activity.color
                    }}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{activity.title}</h3>
                    <p className="text-gray-400 text-sm">{activity.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Strategies */}
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
              backgroundImage: 'linear-gradient(to right, var(--secondary), var(--primary-dark))'
            }}>
              Our Winning Strategy
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Data-driven approaches that maximize your Instagram performance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {strategies.map((strategy, index) => {
              const Icon = strategy.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="p-6 rounded-2xl border transition-all" style={{
                    background: 'rgba(17, 17, 17, 0.5)',
                    borderColor: '#2a2a2a'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2a2a2a'}
                >
                  <div className="inline-flex p-3 rounded-xl mb-4" style={{
                    background: 'linear-gradient(to bottom right, var(--secondary), var(--primary-dark))'
                  }}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{strategy.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{strategy.description}</p>
                  <ul className="space-y-2">
                    {strategy.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                        <Zap className="w-3 h-3" style={{ color: 'var(--secondary)' }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Reports & Results */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl border" style={{
              background: 'linear-gradient(to right, rgba(185, 128, 37, 0.1), rgba(0, 43, 39, 0.1))',
              borderColor: 'rgba(185, 128, 37, 0.2)'
            }}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl" style={{
                background: 'linear-gradient(to bottom right, var(--secondary), var(--primary-dark))'
              }}>
                <BarChart3 className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">Performance Reports & Results</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Transparency is key to our service. We provide detailed performance reports so you can track your Instagram growth and see the real impact of our work.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg" style={{
                    background: 'rgba(17, 17, 17, 0.5)'
                  }}>
                    <h4 className="font-semibold mb-2" style={{ color: 'var(--secondary)' }}>What We Track</h4>
                    <ul className="space-y-1 text-sm text-gray-400">
                      <li>• Follower growth</li>
                      <li>• Engagement rate</li>
                      <li>• Reach & impressions</li>
                      <li>• Top-performing content</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg" style={{
                    background: 'rgba(17, 17, 17, 0.5)'
                  }}>
                    <h4 className="font-semibold mb-2" style={{ color: 'var(--primary-dark)' }}>Reporting Schedule</h4>
                    <ul className="space-y-1 text-sm text-gray-400">
                      <li>• Weekly insights summary</li>
                      <li>• Monthly detailed report</li>
                      <li>• Growth trend analysis</li>
                      <li>• Strategy recommendations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
            background: 'linear-gradient(to right, rgba(185, 128, 37, 0.1), rgba(0, 43, 39, 0.1))',
            borderColor: 'rgba(185, 128, 37, 0.2)'
          }}>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
            
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Grow Your Instagram?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Let's create a winning Instagram strategy that drives real engagement and business growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/book-service">
                  <button className="group px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform flex items-center gap-2" style={{
                    background: 'linear-gradient(to right, var(--secondary), var(--primary-dark))',
                    boxShadow: '0 10px 25px -5px rgba(185, 128, 37, 0.3)'
                  }}>
                    Book a Plan
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <a
                  href="https://wa.me/918000520687"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2" style={{
                    borderColor: 'var(--secondary)',
                    background: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(185, 128, 37, 0.1)'
                    e.currentTarget.style.borderColor = 'var(--secondary)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.borderColor = 'var(--secondary)'
                  }}
                >
                  <Phone className="w-5 h-5" />
                  Talk on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
