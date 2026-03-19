'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { ExternalLink, Play } from 'lucide-react'

const categories = ['All', 'Web Design', 'App Development', 'Branding', 'Video Production', '3D Design']

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Design',
    description: 'Modern online store with seamless checkout experience',
    tags: ['Next.js', 'Tailwind', 'Stripe'],
    link: '#',
    hasVideo: false,
    color: `linear-gradient(to bottom right, var(--primary-dark), var(--secondary-dark))`
  },
  {
    id: 2,
    title: 'Fitness Tracking App',
    category: 'App Development',
    description: 'Mobile app for tracking workouts and nutrition',
    tags: ['React Native', 'Firebase', 'TypeScript'],
    link: '#',
    hasVideo: false,
    color: `linear-gradient(to bottom right, var(--primary-dark), var(--secondary))`
  },
  {
    id: 3,
    title: 'Brand Identity Design',
    category: 'Branding',
    description: 'Complete brand identity for tech startup',
    tags: ['Logo Design', 'Brand Guidelines', 'Print'],
    link: '#',
    hasVideo: false,
    color: `linear-gradient(to bottom right, var(--secondary-dark), var(--secondary-darkest))`
  },
  {
    id: 4,
    title: 'Corporate Video',
    category: 'Video Production',
    description: 'Professional promotional video for enterprise client',
    tags: ['Cinematography', 'Editing', 'Motion Graphics'],
    link: '#',
    hasVideo: true,
    color: `linear-gradient(to bottom right, var(--secondary-lightest), var(--secondary-light))`
  },
  {
    id: 5,
    title: '3D Product Showcase',
    category: '3D Design',
    description: 'Interactive 3D product visualization',
    tags: ['Three.js', 'WebGL', 'Blender'],
    link: '#',
    hasVideo: true,
    color: `linear-gradient(to bottom right, var(--primary-dark), var(--secondary))`
  },
  {
    id: 6,
    title: 'Real Estate Website',
    category: 'Web Design',
    description: 'Luxury property listing platform',
    tags: ['Next.js', 'CMS', 'SEO'],
    link: '#',
    hasVideo: false,
    color: `linear-gradient(to bottom right, var(--secondary-light), var(--secondary-lightest))`
  },
  {
    id: 7,
    title: 'Food Delivery App',
    category: 'App Development',
    description: 'Restaurant ordering and delivery platform',
    tags: ['Flutter', 'Maps API', 'Payment Gateway'],
    link: '#',
    hasVideo: false,
    color: `linear-gradient(to bottom right, var(--secondary), var(--secondary-dark))`
  },
  {
    id: 8,
    title: 'Fashion Brand Identity',
    category: 'Branding',
    description: 'Elegant branding for boutique fashion label',
    tags: ['Visual Identity', 'Packaging', 'Photography'],
    link: '#',
    hasVideo: false,
    color: `linear-gradient(to bottom right, var(--secondary), var(--secondary-dark))`
  },
  {
    id: 9,
    title: 'Product Launch Video',
    category: 'Video Production',
    description: 'Dynamic product reveal video campaign',
    tags: ['Animation', '3D', 'Sound Design'],
    link: '#',
    hasVideo: true,
    color: `linear-gradient(to bottom right, var(--secondary), var(--primary-dark))`
  },
  {
    id: 10,
    title: 'Virtual Showroom',
    category: '3D Design',
    description: 'Immersive 3D virtual exhibition space',
    tags: ['Unity', 'VR', 'Interactive'],
    link: '#',
    hasVideo: true,
    color: `linear-gradient(to bottom right, var(--primary-dark), var(--secondary-lightest))`
  },
  {
    id: 11,
    title: 'SaaS Dashboard',
    category: 'Web Design',
    description: 'Analytics dashboard for business intelligence',
    tags: ['React', 'Charts', 'Data Viz'],
    link: '#',
    hasVideo: false,
    color: `linear-gradient(to bottom right, var(--secondary-light), var(--secondary))`
  },
  {
    id: 12,
    title: 'Health & Wellness App',
    category: 'App Development',
    description: 'Mental health and meditation mobile app',
    tags: ['Swift', 'HealthKit', 'Push Notifications'],
    link: '#',
    hasVideo: false,
    color: `linear-gradient(to bottom right, var(--primary-dark), var(--secondary))`
  },
]

const stats = [
  { value: '150+', label: 'Projects Completed' },
  { value: '50+', label: 'Happy Clients' },
  { value: '98%', label: 'Satisfaction Rate' },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory)

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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent" style={{
              backgroundImage: 'linear-gradient(to right, var(--primary-dark), var(--secondary), var(--secondary-lightest))'
            }}>
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our collection of innovative projects and successful collaborations that showcase our expertise
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="sticky top-20 z-40 border-b backdrop-blur-md" style={{
        background: 'rgba(0, 0, 0, 0.8)',
        borderColor: 'rgba(0, 43, 39, 0.2)'
      }}>
        {/* Scrollable row — no wrapping, single line always */}
        <div
          className="flex items-center gap-2 px-6 py-4 overflow-x-auto"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            justifyContent: 'safe center',
          }}
        >
          <style>{`.cat-scroll::-webkit-scrollbar { display: none; }`}</style>
          {categories.map((category) => {
            const isActive = activeCategory === category
            return (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileTap={{ scale: 0.95 }}
                className="cat-scroll relative flex-shrink-0 px-5 py-2 rounded-full font-medium text-sm transition-colors duration-200"
                style={isActive ? {
                  background: 'linear-gradient(to right, var(--primary-dark), var(--secondary))',
                  color: 'white',
                  boxShadow: '0 4px 20px -4px rgba(185, 128, 37, 0.4)',
                  border: '1px solid transparent'
                } : {
                  background: 'transparent',
                  color: 'rgb(156, 163, 175)',
                  border: '1px solid rgb(55, 65, 81)'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'white'
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'rgb(156, 163, 175)'
                }}
              >
                {category}
              </motion.button>
            )
          })}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">

          {/* FIX 3: AnimatePresence wraps the list so exit animations work on filter */}
          <AnimatePresence mode="popLayout">
            <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.92, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 16 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="group relative"
                >
                  {/* Card glow */}
                  <div
                    className="absolute -inset-0.5 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"
                    style={{ background: project.color }}
                  />

                  {/* Card */}
                  <div
                    className="relative backdrop-blur-sm rounded-2xl border overflow-hidden transition-all duration-300 h-full flex flex-col"
                    style={{ background: 'rgba(17, 17, 17, 0.9)', borderColor: '#2a2a2a' }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2a2a2a'}
                  >
                    {/* Image / Thumbnail area */}
                    <div className="relative h-52 overflow-hidden flex-shrink-0">
                      {/* Background gradient */}
                      <div className="absolute inset-0" style={{
                        background: 'linear-gradient(to bottom right, #1f2937, #111827)'
                      }} />
                      {/* FIX 2: Richer visual placeholder — gradient mesh + project number */}
                      <div
                        className="absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-60"
                        style={{ background: project.color }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span
                          className="text-8xl font-black select-none"
                          style={{
                            color: 'rgba(255,255,255,0.06)',
                            letterSpacing: '-0.05em'
                          }}
                        >
                          {String(project.id).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Hover overlay */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3"
                        style={{
                          background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)'
                        }}
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                          style={{
                            background: 'rgba(255,255,255,0.15)',
                            backdropFilter: 'blur(8px)',
                            border: '1px solid rgba(255,255,255,0.25)'
                          }}
                        >
                          <ExternalLink className="w-4 h-4 text-white" />
                        </a>

                        {/* FIX 4: Play button only shows if project has a video */}
                        {project.hasVideo && (
                          <button
                            className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                            style={{
                              background: 'rgba(255,255,255,0.15)',
                              backdropFilter: 'blur(8px)',
                              border: '1px solid rgba(255,255,255,0.25)'
                            }}
                          >
                            <Play className="w-4 h-4 text-white" />
                          </button>
                        )}
                      </div>

                      {/* Category badge */}
                      <div className="absolute top-3 right-3">
                        <span
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{
                            background: 'rgba(0,0,0,0.55)',
                            backdropFilter: 'blur(8px)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: 'rgba(255,255,255,0.75)'
                          }}
                        >
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6 flex flex-col flex-1">
                      {/* FIX 1: Title uses inline style for gradient — no broken Tailwind group-hover */}
                      <h3
                        className="text-xl font-bold mb-2 bg-clip-text text-transparent"
                        style={{
                          backgroundImage: 'linear-gradient(to right, #ffffff, rgba(255,255,255,0.75))'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundImage = 'linear-gradient(to right, var(--secondary), var(--secondary-light))'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundImage = 'linear-gradient(to right, #ffffff, rgba(255,255,255,0.75))'
                        }}
                      >
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 flex-1">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full text-xs text-gray-400"
                            style={{
                              background: 'rgba(31, 41, 55, 0.5)',
                              border: '1px solid rgb(55, 65, 81)'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-500 text-lg">No projects found in this category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6" style={{
        background: 'linear-gradient(to bottom, var(--primary-black), #111111)'
      }}>
        <div className="max-w-6xl mx-auto">
          {/* FIX 5: 3 items — use grid-cols-3 always, centered on mobile with flex fallback */}
          <div className="grid grid-cols-3 gap-8 text-center max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div
                  className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent mb-2"
                  style={{ backgroundImage: 'linear-gradient(to right, var(--primary-dark), var(--secondary))' }}
                >
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
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
          <div
            className="relative p-12 rounded-3xl border overflow-hidden"
            style={{
              background: 'linear-gradient(to right, rgba(0, 43, 39, 0.1), rgba(185, 128, 37, 0.1))',
              borderColor: 'rgba(0, 43, 39, 0.2)'
            }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a Project in Mind?</h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Let's collaborate and create something extraordinary together
              </p>
              <Link href="/services">
                <button
                  className="px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform"
                  style={{
                    background: 'linear-gradient(to right, var(--primary-dark), var(--secondary))',
                    boxShadow: '0 10px 25px -5px rgba(0, 43, 39, 0.3)'
                  }}
                >
                  Start Your Project
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </main>
  )
}