'use client'

import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Search, 
  Share2, 
  Target, 
  BarChart3, 
  Zap,
  CheckCircle,
  Code,
  Brain,
  Rocket
} from 'lucide-react'

const algorithmTypes = [
  {
    icon: Search,
    title: 'Search Engine Algorithms',
    description: 'Google and other search engines use complex algorithms to rank websites based on relevance, quality, and user experience',
    features: ['SEO Optimization', 'Keyword Strategy', 'Content Ranking', 'Site Structure'],
    color: `linear-gradient(to bottom right, var(--secondary-lightest), var(--secondary-light))`
  },
  {
    icon: Share2,
    title: 'Social Media Algorithms',
    description: 'Platforms like Instagram, Facebook, and TikTok use algorithms to determine what content appears in user feeds',
    features: ['Content Visibility', 'Engagement Boost', 'Audience Targeting', 'Post Timing'],
    color: `linear-gradient(to bottom right, var(--secondary), var(--primary-dark))`
  },
  {
    icon: Target,
    title: 'Ad Serving Algorithms',
    description: 'Digital advertising platforms optimize ad delivery to reach the right audience at the right time',
    features: ['Audience Targeting', 'Bid Optimization', 'ROI Maximization', 'Performance Tracking'],
    color: `linear-gradient(to bottom right, var(--secondary-dark), var(--secondary-darkest))`
  },
  {
    icon: Brain,
    title: 'Recommendation Algorithms',
    description: 'AI-powered systems suggest products, content, and services based on user behavior and preferences',
    features: ['Personalization', 'User Behavior', 'Product Matching', 'Conversion Boost'],
    color: `linear-gradient(to bottom right, var(--primary-dark), var(--secondary))`
  },
]

const howWeHelp = [
  {
    icon: TrendingUp,
    title: 'Algorithm Optimization',
    description: 'We optimize your content and campaigns to work with algorithms, not against them, maximizing visibility and engagement.'
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Strategy',
    description: 'Using analytics and insights, we develop strategies that align with how algorithms prioritize and distribute content.'
  },
  {
    icon: Zap,
    title: 'Performance Monitoring',
    description: 'Continuous tracking and adjustment ensure your content stays optimized as algorithms evolve and change.'
  },
]

const keyFactors = [
  { factor: 'Engagement Rate', description: 'Likes, comments, shares, and saves signal content quality to algorithms' },
  { factor: 'Content Relevance', description: 'How well your content matches user interests and search intent' },
  { factor: 'Posting Consistency', description: 'Regular posting helps algorithms recognize your account as active and reliable' },
  { factor: 'User Experience', description: 'Page speed, mobile-friendliness, and site structure impact rankings' },
  { factor: 'Timeliness', description: 'Fresh, recent content is often prioritized over older posts' },
  { factor: 'Quality Signals', description: 'Backlinks, domain authority, and content depth matter for SEO' },
]

export default function AlgorithmsPage() {
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
              Understanding Digital Algorithms
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Master the algorithms that control your digital success and learn how Techie Thrives optimizes your presence across all platforms
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Are Algorithms */}
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
                <Code className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">What Are Digital Algorithms?</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  Digital algorithms are <span className="font-semibold" style={{ color: 'var(--secondary)' }}>mathematical formulas and rules</span> that platforms use to determine which content to show to users, when to show it, and how prominently to display it.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  These algorithms analyze user behavior, engagement patterns, content quality, and hundreds of other factors to create personalized experiences that keep users engaged while helping businesses reach their target audiences.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Types of Algorithms */}
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
              Types of Digital Algorithms
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Different platforms use different algorithms to serve their unique purposes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {algorithmTypes.map((type, index) => {
              const Icon = type.icon
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
                    background: type.color
                  }} />
                  <div className="relative p-8 backdrop-blur-sm rounded-2xl border transition-all duration-300" style={{
                    background: 'rgba(17, 17, 17, 0.9)',
                    borderColor: '#2a2a2a'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2a2a2a'}
                  >
                    <div className="inline-flex p-4 rounded-xl mb-4" style={{
                      background: type.color
                    }}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{type.title}</h3>
                    <p className="text-gray-400 mb-6">{type.description}</p>
                    <div className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4" style={{ color: 'var(--secondary-light)' }} />
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

      {/* Key Ranking Factors */}
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
              Key Algorithmic Factors
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              What algorithms look for when ranking and distributing content
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFactors.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
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
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--secondary)' }}>{item.factor}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
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
              How Techie Thrives Helps
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our algorithm optimization services ensure your content gets maximum visibility
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {howWeHelp.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="inline-flex p-4 rounded-xl mb-4" style={{
                    background: 'linear-gradient(to bottom right, var(--primary-dark), var(--secondary))'
                  }}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Our Services */}
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
            <h3 className="text-2xl font-bold mb-6 text-center">What We Offer</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Rocket className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: 'var(--secondary)' }} />
                  <div>
                    <h4 className="font-semibold mb-1">SEO Optimization</h4>
                    <p className="text-sm text-gray-400">Rank higher on Google with algorithm-friendly content and technical optimization</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Rocket className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: 'var(--secondary-light)' }} />
                  <div>
                    <h4 className="font-semibold mb-1">Social Media Strategy</h4>
                    <p className="text-sm text-gray-400">Create content that algorithms love and audiences engage with</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Rocket className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: 'var(--secondary-lightest)' }} />
                  <div>
                    <h4 className="font-semibold mb-1">Content Optimization</h4>
                    <p className="text-sm text-gray-400">Format and structure content for maximum algorithmic visibility</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Rocket className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: 'var(--secondary-dark)' }} />
                  <div>
                    <h4 className="font-semibold mb-1">Ad Campaign Management</h4>
                    <p className="text-sm text-gray-400">Leverage ad algorithms to maximize ROI and reach your ideal customers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Rocket className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: 'var(--secondary-light)' }} />
                  <div>
                    <h4 className="font-semibold mb-1">Analytics & Reporting</h4>
                    <p className="text-sm text-gray-400">Track algorithm performance and adjust strategies for continuous improvement</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Rocket className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: 'var(--primary-dark)' }} />
                  <div>
                    <h4 className="font-semibold mb-1">Algorithm Updates</h4>
                    <p className="text-sm text-gray-400">Stay ahead of changes with our monitoring and adaptation services</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
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
                Ready to Beat the Algorithm?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Let Techie Thrives optimize your digital presence for maximum visibility, engagement, and growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/services"
                  className="px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform" style={{
                    background: 'linear-gradient(to right, var(--primary-dark), var(--secondary))',
                    boxShadow: '0 10px 25px -5px rgba(0, 43, 39, 0.3)'
                  }}
                >
                  View Our Services
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 rounded-full font-semibold text-lg transition-all" style={{
                    borderColor: 'var(--secondary)',
                    background: 'transparent'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(185, 128, 37, 0.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
