'use client'

import { motion } from 'framer-motion'
import { 
  Palette, 
  Code, 
  Megaphone, 
  TrendingUp, 
  Users, 
  Zap,
  Globe,
  Smartphone,
  Video,
  Sparkles
} from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Website Design & Development',
    description: 'Creating stunning, responsive websites that captivate audiences and drive conversions',
    color: `linear-gradient(to bottom right, var(--primary-dark), var(--secondary-dark))`
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Building native and cross-platform mobile applications for iOS and Android',
    color: `linear-gradient(to bottom right, var(--secondary-light), var(--secondary-lightest))`
  },
  {
    icon: Palette,
    title: 'Branding & Design',
    description: 'Crafting unique brand identities, logos, and visual assets that make you stand out',
    color: `linear-gradient(to bottom right, var(--secondary), var(--secondary-dark))`
  },
  {
    icon: Video,
    title: 'Video Production',
    description: 'Professional cinematography, editing, and motion graphics for impactful storytelling',
    color: `linear-gradient(to bottom right, var(--primary-dark), var(--secondary))`
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Strategic social media management, SEO, and advertising campaigns that boost visibility',
    color: `linear-gradient(to bottom right, var(--secondary), var(--secondary-dark))`
  },
  {
    icon: Sparkles,
    title: '3D UI & Interactive Design',
    description: 'Cutting-edge 3D visuals and interactive experiences using WebGL and modern frameworks',
    color: `linear-gradient(to bottom right, var(--secondary), var(--primary-dark))`
  },
]

const benefits = [
  {
    icon: Zap,
    title: 'All-in-One Solution',
    description: 'Everything you need for your digital presence under one roof'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Skilled professionals in design, development, and marketing'
  },
  {
    icon: TrendingUp,
    title: 'Results-Driven',
    description: 'Focus on measurable outcomes that grow your business'
  },
]

export default function WhatWeDoPage() {
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
              What is a Digital Creation Agency?
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Understanding Techie Thrives's comprehensive approach to digital excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Definition */}
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
            <h2 className="text-3xl font-bold mb-4">Definition</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              A <span className="font-semibold" style={{ color: 'var(--secondary)' }}>Digital Creation Agency</span> is a specialized service provider that leverages modern digital tools, technologies, and creative expertise to help businesses establish, grow, and thrive in the digital landscape.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Unlike traditional agencies that focus on offline marketing, a digital creation agency like Techie Thrives combines <span style={{ color: 'var(--secondary-light)' }}>design</span>, <span style={{ color: 'var(--secondary)' }}>development</span>, and <span style={{ color: 'var(--secondary)' }}>digital strategy</span> to deliver comprehensive online solutions that drive real business results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
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
              Our Core Services
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              As a full-service digital creation agency, we provide end-to-end solutions for all your digital needs
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
                  <div className="relative p-6 backdrop-blur-sm rounded-2xl border transition-all duration-300" style={{
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
                    <p className="text-gray-400 text-sm">{service.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How We're Different */}
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
              Why Choose a Digital Creation Agency?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
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
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Detailed Explanation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--secondary)' }}>Traditional Agency</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex gap-2">
                    <span style={{ color: '#ef4444' }}>✗</span>
                    <span>Limited to offline marketing channels</span>
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: '#ef4444' }}>✗</span>
                    <span>Separate vendors for design, development, and marketing</span>
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: '#ef4444' }}>✗</span>
                    <span>Slower turnaround times</span>
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: '#ef4444' }}>✗</span>
                    <span>Limited analytics and tracking</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--secondary-light)' }}>Digital Creation Agency</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex gap-2">
                    <span style={{ color: '#22c55e' }}>✓</span>
                    <span>Complete online presence management</span>
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: '#22c55e' }}>✓</span>
                    <span>Integrated team handling all aspects</span>
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: '#22c55e' }}>✓</span>
                    <span>Fast, agile project execution</span>
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: '#22c55e' }}>✓</span>
                    <span>Data-driven decisions and real-time insights</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Techie Thrives Approach */}
      <section className="py-20 px-6" style={{
        background: 'linear-gradient(to bottom, var(--primary-black), #111111)'
      }}>
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
              Techie Thrives's Approach
            </h2>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                At Techie Thrives, we don't just build websites or run ads – we create comprehensive digital ecosystems that work together seamlessly. Our three-expert team brings together <span className="font-semibold" style={{ color: 'var(--secondary)' }}>creativity</span>, <span className="font-semibold" style={{ color: 'var(--secondary-light)' }}>technical excellence</span>, and <span className="font-semibold" style={{ color: 'var(--secondary)' }}>strategic thinking</span> to deliver solutions that truly transform businesses.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you need a stunning website, a powerful mobile app, engaging video content, or a complete digital marketing strategy, we provide everything under one roof. This integrated approach ensures consistency across all touchpoints, faster project delivery, and better ROI for your investment.
              </p>
              <p className="text-lg leading-relaxed">
                Our mission is simple: <span className="font-semibold" style={{ color: 'var(--secondary)' }}>Promote Your Business & Boost Your Sales</span> through innovative digital solutions that connect you with your audience and drive measurable results.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
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
                Ready to Go Digital?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Let Techie Thrives transform your digital presence and take your business to the next level
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/services"
                  className="px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform" style={{
                    background: 'linear-gradient(to right, var(--primary-dark), var(--secondary))',
                    boxShadow: '0 10px 25px -5px rgba(0, 43, 39, 0.3)'
                  }}
                >
                  Explore Our Services
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
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
