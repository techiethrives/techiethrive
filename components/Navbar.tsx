'use client'


import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'


const navItems = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'services', label: 'Services', href: '/services' },
  { id: 'portfolio', label: 'Portfolio', href: '/portfolio' },
  { id: 'contact', label: 'Contact', href: '/contact' },
]


export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()


  const isActive = (path: string) => pathname === path


  const handleMouseEnter = (href: string) => {
    router.push(href)
  }


  return (
    <motion.nav
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 z-50 h-screen w-24"
    >
      <div className="flex flex-col items-center justify-between h-full py-8">
        {/* Top Section - Logo and Navigation */}
        <div className="flex flex-col items-center w-full">
          {/* Logo */}
          <Link href="/" className="mb-16">
            <div className="relative w-12 h-12 hover:scale-110 transition-transform">
              <Image
                src="/logo.png"
                alt="Techie Thrives Logo"
                width={48}
                height={48}
                className="object-contain"
                priority
              />
            </div>
          </Link>


          {/* Vertical Navigation with Rotated Text (Bottom to Top) */}
          <ul className="flex flex-col items-center gap-12 w-full">
            {navItems.map((item) => (
              <li key={item.id} className="w-full flex justify-center">
                <Link
                  href={item.href}
                  onMouseEnter={() => handleMouseEnter(item.href)}
                  className="relative transition-all"
                  style={{
                    writingMode: 'vertical-rl',
                    transform: 'rotate(180deg)',
                    color: isActive(item.href) ? 'var(--accent-light)' : 'var(--color-text-muted)'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-light)'}
                  onMouseOut={(e) => {
                    if (!isActive(item.href)) {
                      e.currentTarget.style.color = 'var(--color-text-muted)'
                    }
                  }}
                >
                  <span className="text-sm font-medium tracking-wider">
                    {item.label}
                  </span>
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute left-0 top-0 bottom-0 w-0.5"
                      style={{ background: 'var(--secondary)' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        {/* Bottom Section - Cart Icon */}
        <div className="flex flex-col items-center gap-6">
          <Link
            href="/services-book"
            className="w-10 h-10 flex items-center justify-center transition-colors hover:scale-110 transform"
            style={{ color: 'var(--color-text-muted)' }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--secondary)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}
          >
            <ShoppingCart className="w-9 h-9" />
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}