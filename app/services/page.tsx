'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowRight,
  CheckCircle,
  Sparkles,
  Star,
} from 'lucide-react'

// ✅ Import everything from single source of truth
import {
  packageServices,
  serviceCategories,
  getServicePagePriceDisplay,
} from '@/lib/servicedata/page'

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

      {/* Package Services Section */}
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
              <span className="text-sm font-semibold" style={{ color: 'var(--secondary)' }}>Packages</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent" style={{
              backgroundImage: 'linear-gradient(to right, var(--secondary), var(--primary-dark))'
            }}>
              Package Services
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our most requested services chosen by hundreds of satisfied clients
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {packageServices.map((service, index) => {
              const Icon = service.icon as React.ElementType
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group relative"
                >
                  <div className="absolute -top-3 -right-3 z-10">
                    <div className="p-2 rounded-full shadow-lg" style={{
                      background: 'linear-gradient(to right, var(--secondary), var(--primary-dark))'
                    }}>
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>

                  <div className="absolute -inset-0.5 rounded-2xl blur opacity-40 group-hover:opacity-70 transition duration-500" style={{
                    background: service.color
                  }} />

                  <div className="relative p-8 backdrop-blur-sm rounded-2xl border transition-all duration-300 h-full flex flex-col" style={{
                    background: 'rgba(17, 17, 17, 0.9)',
                    borderColor: 'var(--secondary)'
                  }}>
                    <div className="inline-flex p-4 rounded-xl mb-4 w-fit" style={{
                      background: service.color
                    }}>
                      <Icon className="w-8 h-8" />
                    </div>

                    <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                    <div className="text-3xl font-bold bg-clip-text text-transparent mb-3" style={{
                      backgroundImage: 'linear-gradient(to right, var(--secondary), var(--primary-dark))'
                    }}>
                      {getServicePagePriceDisplay(service.price)}
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
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* All Service Categories — auto-generated from data file */}
      {serviceCategories.map((category, categoryIndex) => {
        const Icon = category.icon as React.ElementType
        return (
          <section
            key={category.id}
            id={category.id}
            className="py-20 px-6"
            style={{
              background: categoryIndex % 2 === 0
                ? 'var(--primary-black)'
                : 'linear-gradient(to bottom, var(--primary-black), #111111)'
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
                  <div className="p-3 rounded-xl" style={{ background: category.color }}>
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

                    <div
                      className="relative p-6 backdrop-blur-sm rounded-xl border transition-all duration-300 h-full flex flex-col"
                      style={{ background: 'rgba(17, 17, 17, 0.9)', borderColor: '#2a2a2a' }}
                      onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                      onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2a2a2a'}
                    >
                      <h3 className="text-lg font-bold mb-2 text-white">{service.name}</h3>

                      <div className="mb-4">
                        <div className="text-2xl font-bold bg-clip-text text-transparent" style={{
                          backgroundImage: 'linear-gradient(to right, var(--primary-dark), var(--secondary))'
                        }}>
                          {getServicePagePriceDisplay(service.price)}
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
                        <button
                          className="w-full px-4 py-2 border rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group-hover:scale-105"
                          style={{
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Choose your services and let's bring your vision to life with professional quality and transparent pricing
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services-book">
                  <button className="px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform flex items-center gap-2" style={{
                    background: 'linear-gradient(to right, var(--primary-dark), var(--secondary))',
                    boxShadow: '0 10px 25px -5px rgba(0, 43, 39, 0.3)'
                  }}>
                    Book Services Now
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link href="/contact">
                  <button
                    className="px-8 py-4 border-2 rounded-full font-semibold text-lg transition-all"
                    style={{ borderColor: 'var(--secondary)', background: 'transparent' }}
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