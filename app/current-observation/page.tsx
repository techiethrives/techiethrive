'use client'

import { motion } from 'framer-motion'
import { 
  Eye, 
  TrendingUp, 
  BarChart3, 
  Activity,
  Target,
  Zap,
  CheckCircle,
  LineChart,
  PieChart,
  Monitor,
  AlertCircle,
  Globe
} from 'lucide-react'

const observationAreas = [
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Track website traffic, user behavior, conversion rates, and ROI across all digital channels in real-time',
    metrics: ['Traffic Analytics', 'Conversion Tracking', 'Revenue Metrics', 'User Engagement'],
    color: `linear-gradient(to bottom right, var(--primary-dark), var(--secondary-dark))`
  },
  {
    icon: TrendingUp,
    title: 'Market Trends',
    description: 'Monitor industry shifts, competitor activities, emerging technologies, and consumer behavior patterns',
    metrics: ['Industry Changes', 'Competitor Analysis', 'Consumer Trends', 'Technology Shifts'],
    color: `linear-gradient(to bottom right, var(--secondary-light), var(--secondary-lightest))`
  },
  {
    icon: Target,
    title: 'Campaign Performance',
    description: 'Measure effectiveness of marketing campaigns across social media, search engines, and paid advertising',
    metrics: ['Ad Performance', 'Social Metrics', 'Email Campaigns', 'SEO Rankings'],
    color: `linear-gradient(to bottom right, var(--secondary), var(--secondary-dark))`
  },
  {
    icon: Activity,
    title: 'Brand Health',
    description: 'Monitor brand sentiment, online reputation, social mentions, and customer satisfaction levels',
    metrics: ['Brand Sentiment', 'Online Reviews', 'Social Mentions', 'Customer Feedback'],
    color: `linear-gradient(to bottom right, var(--primary-dark), var(--secondary))`
  },
  {
    icon: Globe,
    title: 'Digital Presence',
    description: 'Track search rankings, website performance, social media growth, and overall online visibility',
    metrics: ['SEO Rankings', 'Social Growth', 'Website Speed', 'Mobile Performance'],
    color: `linear-gradient(to bottom right, var(--secondary-dark), var(--secondary-darkest))`
  },
  {
    icon: AlertCircle,
    title: 'Risk & Opportunities',
    description: 'Identify potential threats, emerging opportunities, algorithm changes, and market gaps early',
    metrics: ['Risk Detection', 'Opportunity Spotting', 'Algorithm Updates', 'Gap Analysis'],
    color: `linear-gradient(to bottom right, var(--secondary), var(--primary-dark))`
  },
]

const keyMetrics = [
  { category: 'Traffic', metrics: ['Total Visits', 'Unique Visitors', 'Page Views', 'Bounce Rate'] },
  { category: 'Engagement', metrics: ['Avg. Session Duration', 'Pages per Session', 'Social Shares', 'Comments'] },
  { category: 'Conversion', metrics: ['Conversion Rate', 'Lead Generation', 'Sales Revenue', 'ROI'] },
  { category: 'SEO', metrics: ['Keyword Rankings', 'Organic Traffic', 'Backlinks', 'Domain Authority'] },
  { category: 'Social Media', metrics: ['Followers Growth', 'Engagement Rate', 'Reach', 'Impressions'] },
  { category: 'Paid Ads', metrics: ['CTR', 'CPC', 'ROAS', 'Quality Score'] },
]

const benefits = [
  {
    icon: Monitor,
    title: 'Real-Time Monitoring',
    description: 'Get instant updates on performance changes, issues, and opportunities as they happen'
  },
  {
    icon: LineChart,
    title: 'Data-Driven Decisions',
    description: 'Make informed choices based on actual data rather than assumptions or guesswork'
  },
  {
    icon: Zap,
    title: 'Quick Response',
    description: 'Identify and address problems immediately before they impact your business'
  },
  {
    icon: TrendingUp,
    title: 'Competitive Advantage',
    description: 'Stay ahead by spotting trends and opportunities before your competitors'
  },
]

const dashboardFeatures = [
  'Customizable KPI tracking',
  'Automated reporting & alerts',
  'Multi-channel integration',
  'Historical trend analysis',
  'Competitor benchmarking',
  'Goal progress tracking',
  'Visual data representation',
  'Export & sharing options',
]

export default function CurrentObservationPage() {
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
              Current Observation & Analytics
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Stay informed with comprehensive monitoring, real-time analytics, and actionable insights for your digital presence
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Current Observation */}
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
                <Eye className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">What is Current Observation?</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  <span className="font-semibold" style={{ color: 'var(--secondary)' }}>Current Observation</span> is the continuous, systematic monitoring of your digital performance, market conditions, and competitive landscape to provide real-time insights that drive better business decisions.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Unlike one-time reports, current observation provides <span style={{ color: 'var(--secondary-light)' }}>ongoing surveillance</span> of key metrics, trends, and opportunities—enabling you to respond quickly to changes, capitalize on emerging opportunities, and mitigate risks before they impact your business.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Observation Areas */}
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
              What We Monitor
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive observation across all critical aspects of your digital presence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {observationAreas.map((area, index) => {
              const Icon = area.icon
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
                    background: area.color
                  }} />
                  <div className="relative p-6 backdrop-blur-sm rounded-2xl border transition-all duration-300 h-full" style={{
                    background: 'rgba(17, 17, 17, 0.9)',
                    borderColor: '#2a2a2a'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2a2a2a'}
                  >
                    <div className="inline-flex p-3 rounded-xl mb-4" style={{
                      background: area.color
                    }}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{area.description}</p>
                    <div className="space-y-2">
                      {area.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3" style={{ color: 'var(--secondary-light)' }} />
                          <span>{metric}</span>
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

      {/* Key Metrics */}
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
              Key Metrics We Track
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Essential KPIs that measure your digital success across all channels
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyMetrics.map((group, index) => (
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
                  {group.metrics.map((metric, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--secondary-light)' }} />
                      {metric}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
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
              Benefits of Continuous Observation
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Why ongoing monitoring is critical for digital success
            </p>
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

      {/* Dashboard Features */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent" style={{
              backgroundImage: 'linear-gradient(to right, var(--primary-dark), var(--secondary))'
            }}>
              Our Observation Dashboard
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Powerful features that make monitoring simple and actionable
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl border" style={{
                background: 'linear-gradient(to right, rgba(0, 43, 39, 0.1), rgba(185, 128, 37, 0.1))',
                borderColor: 'rgba(0, 43, 39, 0.2)'
              }}
            >
              <PieChart className="w-12 h-12 mb-4" style={{ color: 'var(--secondary)' }} />
              <h3 className="text-2xl font-bold mb-4">Visual Analytics</h3>
              <p className="text-gray-300 mb-6">
                Transform complex data into easy-to-understand charts, graphs, and visualizations that reveal insights at a glance.
              </p>
              <ul className="space-y-3">
                {dashboardFeatures.slice(0, 4).map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4" style={{ color: 'var(--secondary-light)' }} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl border" style={{
                background: 'linear-gradient(to right, rgba(175, 183, 67, 0.1), rgba(247, 223, 120, 0.1))',
                borderColor: 'rgba(175, 183, 67, 0.2)'
              }}
            >
              <Activity className="w-12 h-12 mb-4" style={{ color: 'var(--secondary-light)' }} />
              <h3 className="text-2xl font-bold mb-4">Smart Insights</h3>
              <p className="text-gray-300 mb-6">
                Receive automated alerts, trend predictions, and actionable recommendations based on your data patterns.
              </p>
              <ul className="space-y-3">
                {dashboardFeatures.slice(4, 8).map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4" style={{ color: 'var(--secondary-light)' }} />
                    {feature}
                  </li>
                ))}
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
                Start Monitoring Your Success
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Get complete visibility into your digital performance with Techie Thrives's comprehensive observation and analytics services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform" style={{
                    background: 'linear-gradient(to right, var(--primary-dark), var(--secondary))',
                    boxShadow: '0 10px 25px -5px rgba(0, 43, 39, 0.3)'
                  }}
                >
                  Request a Demo
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 rounded-full font-semibold text-lg transition-all" style={{
                    borderColor: 'var(--secondary)',
                    background: 'transparent'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(185, 128, 37, 0.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  View All Services
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
