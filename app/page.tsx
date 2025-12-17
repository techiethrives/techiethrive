'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code2, Palette, Rocket, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Scene3D from '@/components/Scene3D'
import ParticleBackground from '@/components/ParticleBackground' // Add this import

export default function Home() {
  return (
    <main className="min-h-screen text-white overflow-hidden" style={{ background: 'var(--primary-black)' }}>
      {/* Add 3D Background */}
      <Scene3D />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        {/* Animated gradient background */}
        <div className="absolute inset-0" style={{ 
          background: `linear-gradient(to bottom right, rgba(0, 43, 39, 0.2), var(--primary-black), rgba(185, 128, 37, 0.1))` 
        }} />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Floating badge - Now Clickable */}
          <Link href="/what-we-do">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full backdrop-blur-sm transition-all cursor-pointer group"
              style={{ 
                background: `linear-gradient(to right, rgba(0, 43, 39, 0.1), rgba(185, 128, 37, 0.1))`,
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'var(--primary-dark)'
              }}
            >
              <Image
                src="/logo.png"
                alt="Techie Thrive Logo"
                width={35}
                height={35}
                className="object-contain group-hover:scale-110 transition-transform"
                priority
              />
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                Digital Creation Agency
              </span>
              <svg
                className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-all"
                style={{ color: 'var(--secondary-light)' }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>
          </Link>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent"
            style={{ 
              backgroundImage: `linear-gradient(to right, var(--primary-dark), var(--secondary), var(--secondary-lightest))` 
            }}
          >
            Techie Thrive
          </motion.h1>

          {/* Slogan */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-6 max-w-3xl mx-auto"
          >
            Where Curiosity Meets Creativity
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
          >
            Techie Experts, One Mission: Promote Your Business & Boost Your Sales
          </motion.p>

          {/* Keywords */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12 max-w-4xl mx-auto"
          >
            <div className="px-6 py-3 backdrop-blur-sm rounded-full" style={{
              background: `linear-gradient(to right, rgba(0, 43, 39, 0.2), rgba(138, 102, 14, 0.2))`,
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'var(--primary-dark)'
            }}>
              <span className="text-sm md:text-base font-semibold bg-clip-text text-transparent" style={{
                backgroundImage: `linear-gradient(to right, var(--primary-dark), var(--secondary-dark))`
              }}>
                Be Digital With Us
              </span>
            </div>
            <div className="px-6 py-3 backdrop-blur-sm rounded-full" style={{
              background: `linear-gradient(to right, rgba(175, 183, 67, 0.2), rgba(247, 223, 120, 0.2))`,
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'var(--secondary-light)'
            }}>
              <span className="text-sm md:text-base font-semibold bg-clip-text text-transparent" style={{
                backgroundImage: `linear-gradient(to right, var(--secondary-light), var(--secondary-lightest))`
              }}>
                Advertise. Engage. Grow
              </span>
            </div>
            <div className="px-6 py-3 backdrop-blur-sm rounded-full" style={{
              background: `linear-gradient(to right, rgba(185, 128, 37, 0.2), rgba(138, 102, 14, 0.2))`,
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'var(--secondary)'
            }}>
              <span className="text-sm md:text-base font-semibold bg-clip-text text-transparent" style={{
                backgroundImage: `linear-gradient(to right, var(--secondary), var(--secondary-dark))`
              }}>
                Code Your Thoughts
              </span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/services-book">
              <button className="group relative px-8 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all hover:scale-105" style={{
                background: `linear-gradient(to right, var(--primary-dark), var(--secondary))`,
                boxShadow: '0 10px 25px -5px rgba(0, 43, 39, 0.3)'
              }}>
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </Link>

            <Link href="/portfolio">
              <button className="px-8 py-4 rounded-full font-semibold text-lg transition-all" style={{
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: 'var(--secondary)',
                background: 'transparent'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(185, 128, 37, 0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                View Our Work
              </button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { value: '100+', label: 'Projects' },
              { value: '50+', label: 'Happy Clients' },
              { value: '2X', label: 'Work Rate' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent" style={{
                  backgroundImage: `linear-gradient(to right, var(--primary-dark), var(--secondary))`
                }}>
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent" style={{
              backgroundImage: `linear-gradient(to right, var(--primary-dark), var(--secondary))`
            }}>
              Our Expertise
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We deliver exceptional digital solutions with a focus on innovation and quality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Palette className="w-12 h-12" />,
                title: 'All-Round Promotion',
                description: 'We provide All-Round Promotion for brands — from a little content to digital marketing and creative design.',
                color: `linear-gradient(to bottom right, var(--primary-dark), var(--secondary-dark))`,
                link: '/all-round-promotion'
              },
              {
                icon: <Rocket className="w-12 h-12" />,
                title: 'Social Media Management',
                description: 'From ideas to uploads — we manage everything! Boost your presence with our smart and creative social media management.',
                color: `linear-gradient(to bottom right, var(--secondary), var(--secondary-lightest))`,
                link: '/social-media-manegement'
              },
              {
                icon: <Code2 className="w-12 h-12" />,
                title: 'Web & App Development',
                description: 'Turning your ideas into digital reality! From websites to apps — we build it all with smart design and smooth performance.',
                color: `linear-gradient(to bottom right, var(--secondary-light), var(--accent))`,
                link: '/app-web-dev'
              }
            ].map((service, index) => (
              <Link key={index} href={service.link}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group relative cursor-pointer"
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-0.5 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" style={{
                    background: service.color
                  }} />

                  {/* Card content */}
                  <div className="relative p-8 backdrop-blur-sm rounded-2xl border transition-all duration-300 h-full" style={{
                    background: 'rgba(17, 17, 17, 0.9)',
                    borderColor: '#2a2a2a'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2a2a2a'}
                  >
                    <div className="inline-flex p-3 rounded-xl mb-4" style={{
                      background: service.color
                    }}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>

                    {/* Arrow indicator */}
                    <div className="flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all" style={{
                      color: 'var(--secondary)'
                    }}>
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
