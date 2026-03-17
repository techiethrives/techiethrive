'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Youtube,
  Twitter,
  Instagram,
  Linkedin,
  Facebook,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from 'lucide-react'

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/about#team' },
    { label: 'Contact', href: '/contact' },
    { label: 'Our Projects', href: '/portfolio' },
  ],
  services: [
    { label: 'IG Management', href: '/ig-management' },
    { label: 'Web & App Development', href: '/app-web-dev' },
    { label: 'Digitalization', href: '/services#web-app' },
    { label: 'Advertising', href: '/services#video-production' },
  ],
  Research: [
    { label: 'Algorithms', href: '/algorithms' },
    { label: 'New Strategy', href: '/new-strategy' },
    { label: 'Current Observation', href: '/current-observation' },
    { label: 'Documentation', href: '/Documentation' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Sitemap', href: '/sitemap' },
  ],
}

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/techiethrives/', label: 'Instagram', hoverColor: 'var(--secondary)' },
  { icon: Twitter, href: 'https://x.com/Techie_Thrives', label: 'Twitter', hoverColor: 'var(--secondary-light)' },
  { icon: Linkedin, href: 'https://linkedin.com/in/techie-thrives-digital-creation-agency-332661399', label: 'LinkedIn', hoverColor: 'var(--secondary-lightest)' },
  { icon: Facebook, href: 'https://facebook.com/techiethrives', label: 'GitHub', hoverColor: 'var(--accent-light)' },
  { icon: Youtube, href: 'https://www.youtube.com/@TECHIETHRIVES', label: 'youtube', hoverColor: 'var(--secondary-dark)' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t pt-16 pb-8" style={{
      background: 'linear-gradient(to bottom, var(--primary-black), #111111)',
      borderColor: 'rgba(0, 43, 39, 0.2)'
    }}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="relative w-10 h-10 group-hover:scale-110 transition-transform">
                <Image
                  src="/logo.png"
                  alt="Techie Thrives Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent" style={{
                backgroundImage: 'linear-gradient(to right, var(--primary-dark), var(--secondary))'
              }}>
                Techie Thrive
              </span>
            </Link>

            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              We create, manage, and promote brands — your all-in-one partner for complete digital transformation through expert web design, app development, and social media management.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" style={{ color: 'var(--secondary)' }} />
                <a 
                  href="mailto:techiethrives@gmail.com" 
                  className="transition-colors"
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--secondary)'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'rgb(156, 163, 175)'}
                >
                  techiethrives@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" style={{ color: 'var(--secondary)' }} />
                <a 
                  href="tel:+918000520687" 
                  className="transition-colors"
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--secondary)'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'rgb(156, 163, 175)'}
                >
                  +91 8000-520-687
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" style={{ color: 'var(--secondary)' }} />
                <a 
                  href="https://maps.app.goo.gl/KtoyviZk2XjkbZkS9" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--secondary)'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'rgb(156, 163, 175)'}
                >
                  1st floor, above Santosh bakers dadabari, <br /> dadabari extension, Kota, Rajasthan 324009
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm transition-colors inline-flex items-center gap-1 group"
                    onMouseOver={(e) => e.currentTarget.style.color = 'var(--secondary)'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'rgb(156, 163, 175)'}
                  >
                    {link.label}
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm transition-colors inline-flex items-center gap-1 group"
                    onMouseOver={(e) => e.currentTarget.style.color = 'var(--secondary)'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'rgb(156, 163, 175)'}
                  >
                    {link.label}
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Research Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Research</h3>
            <ul className="space-y-3">
              {footerLinks.Research.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm transition-colors inline-flex items-center gap-1 group"
                    onMouseOver={(e) => e.currentTarget.style.color = 'var(--secondary)'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'rgb(156, 163, 175)'}
                  >
                    {link.label}
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm transition-colors inline-flex items-center gap-1 group"
                    onMouseOver={(e) => e.currentTarget.style.color = 'var(--secondary)'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'rgb(156, 163, 175)'}
                  >
                    {link.label}
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © {currentYear} Techie Thrive. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg border flex items-center justify-center text-gray-400 transition-colors"
                    style={{
                      background: 'rgba(31, 41, 55, 0.5)',
                      borderColor: 'rgb(55, 65, 81)'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = social.hoverColor
                      e.currentTarget.style.borderColor = social.hoverColor
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = 'rgb(156, 163, 175)'
                      e.currentTarget.style.borderColor = 'rgb(55, 65, 81)'
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>

            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sm text-gray-400 transition-colors flex items-center gap-2 group"
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--secondary)'}
              onMouseOut={(e) => e.currentTarget.style.color = 'rgb(156, 163, 175)'}
            >
              Back to Top
              <ArrowRight className="w-4 h-4 rotate-[-90deg] group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
