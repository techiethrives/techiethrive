'use client'

import { motion } from 'framer-motion'
import { 
  Target, 
  TrendingUp, 
  Users, 
  Lightbulb,
  BarChart3,
  Zap,
  CheckCircle,
  LineChart,
  Globe,
  Rocket,
  Brain,
  Search
} from 'lucide-react'

const strategyComponents = [
  {
    icon: Target,
    title: 'Goal Setting & Vision',
    description: 'Define clear, measurable objectives aligned with your business mission and market opportunities',
    color: `linear-gradient(to bottom right, var(--primary-dark), var(--secondary-dark))`
  },
  {
    icon: Users,
    title: 'Audience Analysis',
    description: 'Deep dive into your target market, customer personas, behaviors, and pain points',
    color: `linear-gradient(to bottom right, var(--secondary-light), var(--secondary-lightest))`
  },
  {
    icon: Search,
    title: 'Market Research',
    description: 'Comprehensive competitor analysis, industry trends, and market positioning strategy',
    color: `linear-gradient(to bottom right, var(--secondary), var(--secondary-dark))`
  },
  {
    icon: LineChart,
    title: 'Data-Driven Insights',
    description: 'Leverage analytics and metrics to inform decisions and predict outcomes',
    color: `linear-gradient(to bottom right, var(--primary-dark), var(--secondary))`
  },
  {
    icon: Rocket,
    title: 'Action Roadmap',
    description: 'Step-by-step implementation plan with timelines, milestones, and KPIs',
    color: `linear-gradient(to bottom right, var(--secondary-dark), var(--secondary-darkest))`
  },
  {
    icon: BarChart3,
    title: 'Performance Tracking',
    description: 'Continuous monitoring, optimization, and adjustment based on real-time results',
    color: `linear-gradient(to bottom right, var(--secondary), var(--primary-dark))`
  },
]

const strategyTypes = [
  {
    title: 'Digital Transformation Strategy',
    description: 'Modernize your business operations with technology integration, process automation, and digital-first approaches',
    benefits: ['Increased efficiency', 'Cost reduction', 'Better customer experience', 'Competitive advantage']
  },
  {
    title: 'Content Marketing Strategy',
    description: 'Create valuable content that attracts, engages, and converts your target audience across all channels',
    benefits: ['Brand authority', 'Organic traffic growth', 'Lead generation', 'Customer trust']
  },
  {
    title: 'Social Media Strategy',
    description: 'Build engaged communities and drive conversions through strategic social media presence and campaigns',
    benefits: ['Brand awareness', 'Community building', 'Direct customer engagement', 'Viral potential']
  },
  {
    title: 'SEO & Growth Strategy',
    description: 'Dominate search rankings and drive sustainable organic growth through technical and content optimization',
    benefits: ['Higher visibility', 'Quality traffic', 'Long-term ROI', 'Authority building']
  },
  {
    title: 'Brand Positioning Strategy',
    description: 'Define your unique value proposition and differentiate your brand in a crowded marketplace',
    benefits: ['Clear identity', 'Customer loyalty', 'Premium pricing', 'Market differentiation']
  },
  {
    title: 'Conversion Optimization Strategy',
    description: 'Maximize ROI by optimizing every touchpoint in the customer journey for higher conversions',
    benefits: ['Increased sales', 'Better UX', 'Higher engagement', 'Improved metrics']
  },
]

const ourProcess = [
  {
    step: '01',
    title: 'Discovery & Assessment',
    description: 'We analyze your current situation, challenges, opportunities, and competitive landscape'
  },
  {
    step: '02',
    title: 'Strategic Planning',
    description: 'Develop customized strategies aligned with your goals, budget, and timeline'
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'Execute the strategy with precision, leveraging our expertise across design, development, and marketing'
  },
  {
    step: '04',
    title: 'Optimization',
    description: 'Continuously monitor, analyze, and refine the strategy based on performance data'
  },
]

export default function NewStrategyPage() {
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
              Crafting Winning Digital Strategies
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transform your business with data-driven strategies that deliver measurable results and sustainable growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Strategy */}
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
                <Brain className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">What is a Digital Strategy?</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  A <span className="font-semibold" style={{ color: 'var(--secondary)' }}>digital strategy</span> is a comprehensive plan that outlines how your business will leverage digital channels, technologies, and data to achieve specific goals and objectives.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  It's not just about having a website or social media presence—it's about creating a cohesive, data-driven approach that aligns all digital efforts toward <span style={{ color: 'var(--secondary-light)' }}>measurable business outcomes</span> like increased revenue, brand awareness, customer acquisition, and market leadership.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategy Components */}
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
              Key Components of Effective Strategy
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Every successful digital strategy includes these essential elements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategyComponents.map((component, index) => {
              const Icon = component.icon
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
                    background: component.color
                  }} />
                  <div className="relative p-6 backdrop-blur-sm rounded-2xl border transition-all duration-300" style={{
                    background: 'rgba(17, 17, 17, 0.9)',
                    borderColor: '#2a2a2a'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2a2a2a'}
                  >
                    <div className="inline-flex p-3 rounded-xl mb-4" style={{
                      background: component.color
                    }}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{component.title}</h3>
                    <p className="text-gray-400 text-sm">{component.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Strategy Types */}
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
              Strategic Services We Offer
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive strategy development across all digital disciplines
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {strategyTypes.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl border transition-all duration-300" style={{
                  background: 'rgba(17, 17, 17, 0.5)',
                  borderColor: '#2a2a2a'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2a2a2a'}
              >
                <h3 className="text-2xl font-bold mb-3 text-white">{strategy.title}</h3>
                <p className="text-gray-400 mb-6">{strategy.description}</p>
                <div className="space-y-2">
                  {strategy.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4" style={{ color: 'var(--secondary-light)' }} />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
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
              Our Strategic Process
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A proven 4-step approach to developing and executing winning strategies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ourProcess.map((process, index) => (
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
                <div className="relative p-6 backdrop-blur-sm rounded-2xl border" style={{
                  background: 'rgba(17, 17, 17, 0.9)',
                  borderColor: '#2a2a2a'
                }}>
                  <div className="text-5xl font-bold mb-4" style={{ color: 'rgba(185, 128, 37, 0.2)' }}>{process.step}</div>
                  <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                  <p className="text-gray-400 text-sm">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Strategy Matters */}
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
              Why Strategy is Critical
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#ef4444' }}>Without Strategy</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex gap-3">
                  <span className="text-xl" style={{ color: '#ef4444' }}>✗</span>
                  <span>Random, disconnected marketing efforts</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-xl" style={{ color: '#ef4444' }}>✗</span>
                  <span>Wasted budget on ineffective channels</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-xl" style={{ color: '#ef4444' }}>✗</span>
                  <span>No clear direction or measurable goals</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-xl" style={{ color: '#ef4444' }}>✗</span>
                  <span>Reactive instead of proactive approach</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-xl" style={{ color: '#ef4444' }}>✗</span>
                  <span>Difficulty tracking ROI and success</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-xl" style={{ color: '#ef4444' }}>✗</span>
                  <span>Inconsistent brand messaging</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--secondary-light)' }}>With Techie Thrives's Strategy</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex gap-3">
                  <span className="text-xl" style={{ color: 'var(--secondary-light)' }}>✓</span>
                  <span>Coordinated campaigns across all channels</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-xl" style={{ color: 'var(--secondary-light)' }}>✓</span>
                  <span>Optimized budget allocation for maximum ROI</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-xl" style={{ color: 'var(--secondary-light)' }}>✓</span>
                  <span>Clear objectives with defined KPIs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-xl" style={{ color: 'var(--secondary-light)' }}>✓</span>
                  <span>Proactive planning for market changes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-xl" style={{ color: 'var(--secondary-light)' }}>✓</span>
                  <span>Data-driven decisions and reporting</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-xl" style={{ color: 'var(--secondary-light)' }}>✓</span>
                  <span>Cohesive brand experience everywhere</span>
                </li>
              </ul>
            </motion.div>
          </div>
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
            background: 'linear-gradient(to right, rgba(0, 43, 39, 0.1), rgba(185, 128, 37, 0.1))',
            borderColor: 'rgba(0, 43, 39, 0.2)'
          }}>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
            
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Let Techie Thrives develop a winning strategy that drives real, measurable results for your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform" style={{
                    background: 'linear-gradient(to right, var(--primary-dark), var(--secondary))',
                    boxShadow: '0 10px 25px -5px rgba(0, 43, 39, 0.3)'
                  }}
                >
                  Schedule Consultation
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
                  View Case Studies
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
