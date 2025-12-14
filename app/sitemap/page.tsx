'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, Info, Briefcase, FolderOpen, Mail, FileText, Shield, Cookie } from 'lucide-react'

const sitemapSections = [
  {
    title: 'Main Pages',
    icon: Home,
    links: [
      { name: 'Home', url: '/' },
      { name: 'About Us', url: '/about' },
      { name: 'Services', url: '/services' },
      { name: 'Portfolio', url: '/portfolio' },
      { name: 'Contact', url: '/contact' },
    ]
  },
  {
    title: 'Services',
    icon: Briefcase,
    links: [
      { name: 'Web & App Development', url: '/app-web-dev' },
      { name: 'All Round Promotion', url: '/all-round-promotion' },
      { name: 'Social Media Management', url: '/social-media-manegement' },
      { name: 'Video & Reels Production', url: '/services#video-production' },
      { name: 'Design & Branding', url: '/services#design' },
    ]
  },
  {
    title: 'Legal',
    icon: Shield,
    links: [
      { name: 'Privacy Policy', url: '/privacy' },
      { name: 'Terms of Service', url: '/terms' },
      { name: 'Cookie Policy', url: '/cookies' },
    ]
  },
]

export default function SitemapPage() {
  return (
    <main className="min-h-screen text-white" style={{ background: 'var(--primary-black)' }}>
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent" style={{
              backgroundImage: 'linear-gradient(to right, var(--primary-dark), var(--secondary))'
            }}>
              Sitemap
            </h1>
            <p className="text-gray-400 text-lg">
              Navigate through all pages of Techie Thrives website
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitemapSections.map((section, index) => {
              const Icon = section.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl border transition-all"
                  style={{
                    background: 'rgba(17, 17, 17, 0.5)',
                    borderColor: '#2a2a2a'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2a2a2a'}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg" style={{
                      background: 'linear-gradient(to bottom right, var(--primary-dark), var(--secondary))'
                    }}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl font-bold">{section.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {section.links.map((link, idx) => (
                      <li key={idx}>
                        <Link
                          href={link.url}
                          className="text-gray-400 transition-colors flex items-center gap-2 group"
                          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--secondary)'}
                          onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(156, 163, 175)'}
                        >
                          <span className="w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{
                            background: 'var(--secondary)'
                          }} />
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
