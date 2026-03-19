'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import {
  CheckCircle,
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  Calendar,
  Sparkles,
  X,
  Package,
  ShoppingCart,
  Instagram,
  Info
} from 'lucide-react'

// ✅ Import from single source of truth
import {
  getAllServicesFlat,
  serviceCategories,
  packageServices,
  getServicePagePriceDisplay
} from '@/app/servicedata/page.ts'

// ─── Flat list for booking page ──────────────────────────────
// Each service already has bookingPrice (midpoint) and bookingPriceNote
const allServices = getAllServicesFlat()

// Also include package services in the bookable list
const packageServicesFlat = packageServices.map(s => ({
  ...s,
  category: 'Packages',
  bookingPrice: s.price.type === 'fixed' ? s.price.amount : 0,
  bookingPriceNote: null
}))

const bookableServices = [...packageServicesFlat, ...allServices]

// ─── Category list (auto-generated from data) ────────────────
const categories = [
  'All',
  'Packages',
  ...serviceCategories.map(c => c.title)
]

// ─── Booking page content ────────────────────────────────────
function BookServiceContent() {
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [bookingType, setBookingType] = useState<'individual' | 'package' | null>(null)
  const [showPackagePrompt, setShowPackagePrompt] = useState(false)
  const [hoveredServiceId, setHoveredServiceId] = useState<string | null>(null)
  const [tooltipPos, setTooltipPos] = useState<'right' | 'left'>('right')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    instagram: '',
    company: '',
    projectDetails: '',
    budget: '',
    deadline: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Auto-select service from URL parameter (e.g. /services-book?service=logo)
  useEffect(() => {
    const serviceId = searchParams.get('service')
    if (serviceId && bookableServices.find(s => s.id === serviceId)) {
      setSelectedServices([serviceId])
      if (typeof window !== 'undefined' && window.innerWidth < 768) {
        setTimeout(() => {
          document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })
        }, 500)
      }
    }
  }, [searchParams])

  const filteredServices = selectedCategory === 'All'
    ? bookableServices
    : bookableServices.filter(s => s.category === selectedCategory)

  // ─── Pricing calculation (uses midpoint booking prices) ────
  const calculateTotal = () => {
    const subtotal = selectedServices.reduce((total, serviceId) => {
      const service = bookableServices.find(s => s.id === serviceId)
      return total + (service?.bookingPrice || 0)
    }, 0)

    if (bookingType === 'package' && selectedServices.length >= 3) {
      const discount = subtotal * 0.1
      return { subtotal, discount, total: subtotal - discount, isPackage: true }
    }

    return { subtotal, discount: 0, total: subtotal, isPackage: false }
  }

  // ─── Combined range note across ALL selected services ────────
  // Fixed services contribute their fixed price to both min and max
  // Range services contribute their min and max separately
  // Example: a(₹999) + b(₹999–₹2499) + c(₹2499–₹4999)
  //   → "Estimated range: ₹4,497 – ₹8,497/-"
  const getCombinedRangeNote = (): string | null => {
    const hasAnyRange = selectedServices.some(serviceId => {
      const service = bookableServices.find(s => s.id === serviceId)
      return service?.bookingPriceNote != null
    })
    if (!hasAnyRange) return null

    let totalMin = 0
    let totalMax = 0

    selectedServices.forEach(serviceId => {
      const service = bookableServices.find(s => s.id === serviceId)
      if (!service) return
      if (service.bookingPriceNote) {
        // Extract min/max from note: "...estimated range (₹X – ₹Y)"
        const match = service.bookingPriceNote.match(/\u20b9([\d,]+)\s*\u2013\s*\u20b9([\d,]+)/)
        if (match) {
          totalMin += parseInt(match[1].replace(/,/g, ''))
          totalMax += parseInt(match[2].replace(/,/g, ''))
        }
      } else {
        // Fixed price — contributes same value to both min and max
        totalMin += service.bookingPrice
        totalMax += service.bookingPrice
      }
    })

    return `Estimated range: \u20b9${totalMin.toLocaleString()} \u2013 \u20b9${totalMax.toLocaleString()}/-`
  }

  const handleServiceSelect = (serviceId: string) => {
    const isSelected = selectedServices.includes(serviceId)

    if (isSelected) {
      const newServices = selectedServices.filter(id => id !== serviceId)
      setSelectedServices(newServices)
      if (newServices.length < 2) setBookingType(null)
      if (bookingType === 'package' && newServices.length < 3) setBookingType('individual')
    } else {
      const newServices = [...selectedServices, serviceId]
      setSelectedServices(newServices)
      if (newServices.length === 2 && !bookingType) setShowPackagePrompt(true)
    }
  }

  const handleBookingTypeSelection = (type: 'individual' | 'package') => {
    setBookingType(type)
    setShowPackagePrompt(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const pricing = calculateTotal()
    const combinedNote = getCombinedRangeNote()

    const selectedServiceDetails = selectedServices.map(id => {
      const service = bookableServices.find(s => s.id === id)
      return {
        name: service?.name,
        displayPrice: service?.bookingPrice,
        category: service?.category,
        rangeNote: getBookingPriceNote(service!.price)
      }
    })

    const formPayload = {
      access_key: "a30f90e0-00f7-46e0-adb4-8c79ff2f95d8",
      subject: `New Booking from ${formData.name}`,
      from_name: formData.name,

      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      whatsapp: formData.whatsapp,
      instagram: formData.instagram || 'Not provided',
      company: formData.company || 'Not provided',

      booking_type: bookingType === 'package' ? 'Package (10% Discount Applied)' : 'Individual Services',
      services: selectedServiceDetails
        .map(s => `${s.name} (₹${s.displayPrice?.toLocaleString()}${s.rangeNote ? ` — est. range noted` : ''})`)
        .join(', '),
      number_of_services: selectedServices.length,

      subtotal: `₹${pricing.subtotal.toLocaleString()}`,
      discount: pricing.isPackage ? `₹${pricing.discount.toLocaleString()} (10% off)` : '₹0',
      total_amount: `₹${pricing.total.toLocaleString()}`,

      pricing_note: combinedNote ?? 'All prices are fixed',

      project_details: formData.projectDetails,
      budget_range: formData.budget || 'Not specified',
      deadline: formData.deadline || 'Not specified',
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formPayload)
      })
      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setTimeout(() => {
          setFormData({ name: '', email: '', phone: '', whatsapp: '', instagram: '', company: '', projectDetails: '', budget: '', deadline: '' })
          setSelectedServices([])
          setBookingType(null)
          setSubmitStatus('idle')
        }, 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const pricing = calculateTotal()
  const canSubmit = selectedServices.length > 0 &&
    (!bookingType || bookingType === 'individual' ||
      (bookingType === 'package' && selectedServices.length >= 3))

  return (
    <main className="min-h-screen text-white" style={{ background: 'var(--primary-black)' }}>

      {/* Package Prompt Modal */}
      <AnimatePresence>
        {showPackagePrompt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            style={{ background: 'rgba(0, 0, 0, 0.8)' }}
            onClick={() => setShowPackagePrompt(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="rounded-2xl border p-8 max-w-md w-full"
              style={{ background: '#111111', borderColor: 'var(--secondary)' }}
            >
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent" style={{
                backgroundImage: 'linear-gradient(to right, var(--primary-dark), var(--secondary))'
              }}>
                Create a Package?
              </h3>
              <p className="text-gray-300 mb-6">
                You've selected multiple services. Would you like to create a package or book them individually?
              </p>

              <div className="space-y-3">
                <button
                  onClick={() => handleBookingTypeSelection('package')}
                  className="w-full p-4 rounded-xl border-2 transition-all text-left"
                  style={{ borderColor: 'var(--primary-dark)', background: 'rgba(0, 43, 39, 0.2)' }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0, 43, 39, 0.3)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0, 43, 39, 0.2)'}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Package className="w-5 h-5" style={{ color: 'var(--secondary)' }} />
                    <span className="font-bold">Create Package</span>
                    <span className="ml-auto text-sm px-2 py-1 rounded-full" style={{
                      background: 'rgba(34, 197, 94, 0.2)', color: '#22c55e'
                    }}>10% OFF</span>
                  </div>
                  <p className="text-sm text-gray-400">Select 3+ services for 10% discount</p>
                </button>

                <button
                  onClick={() => handleBookingTypeSelection('individual')}
                  className="w-full p-4 rounded-xl border-2 transition-all text-left"
                  style={{ borderColor: 'rgb(55, 65, 81)', background: 'rgba(31, 41, 55, 0.5)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgb(75, 85, 99)'
                    e.currentTarget.style.background = 'rgb(31, 41, 55)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgb(55, 65, 81)'
                    e.currentTarget.style.background = 'rgba(31, 41, 55, 0.5)'
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <ShoppingCart className="w-5 h-5" style={{ color: 'var(--secondary-light)' }} />
                    <span className="font-bold">Book Individually</span>
                  </div>
                  <p className="text-sm text-gray-400">No package discount</p>
                </button>
              </div>

              <button
                onClick={() => setShowPackagePrompt(false)}
                className="w-full mt-4 text-gray-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom right, rgba(0, 43, 39, 0.2), var(--primary-black), rgba(185, 128, 37, 0.1))'
        }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border backdrop-blur-sm" style={{
              background: 'linear-gradient(to right, rgba(0, 43, 39, 0.1), rgba(185, 128, 37, 0.1))',
              borderColor: 'rgba(0, 43, 39, 0.2)'
            }}>
              <Sparkles className="w-4 h-4" style={{ color: 'var(--secondary-light)' }} />
              <span className="text-sm text-gray-300">Select Multiple Services • Get 10% Package Discount</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent" style={{
              backgroundImage: 'linear-gradient(to right, var(--primary-dark), var(--secondary), var(--secondary-lightest))'
            }}>
              Book Your Service
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Select services, create packages, and get instant quotes!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">

            {/* ─── Services List (Left) ───────────────────── */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="sticky top-24"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold bg-clip-text text-transparent" style={{
                    backgroundImage: 'linear-gradient(to right, var(--primary-dark), var(--secondary))'
                  }}>
                    Select Services
                  </h2>
                  {selectedServices.length > 0 && (
                    <span className="px-3 py-1 border rounded-full text-sm font-semibold" style={{
                      background: 'rgba(0, 43, 39, 0.2)',
                      borderColor: 'var(--secondary)'
                    }}>
                      {selectedServices.length} Selected
                    </span>
                  )}
                </div>

                {bookingType && (
                  <div className="mb-4 p-3 rounded-lg border" style={{
                    background: 'linear-gradient(to right, rgba(0, 43, 39, 0.2), rgba(185, 128, 37, 0.2))',
                    borderColor: 'rgba(0, 43, 39, 0.3)'
                  }}>
                    <div className="flex items-center gap-2">
                      {bookingType === 'package' ? (
                        <>
                          <Package className="w-4 h-4" style={{ color: 'var(--secondary)' }} />
                          <span className="text-sm font-semibold">Package Mode</span>
                          {selectedServices.length >= 3 && (
                            <span className="ml-auto text-xs px-2 py-1 rounded-full" style={{
                              background: 'rgba(34, 197, 94, 0.2)', color: '#22c55e'
                            }}>10% OFF Active</span>
                          )}
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4" style={{ color: 'var(--secondary-light)' }} />
                          <span className="text-sm font-semibold">Individual Booking</span>
                        </>
                      )}
                    </div>
                    {bookingType === 'package' && selectedServices.length < 3 && (
                      <p className="text-xs mt-1" style={{ color: '#fb923c' }}>
                        Select {3 - selectedServices.length} more service(s) for package discount
                      </p>
                    )}
                  </div>
                )}

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedCategory === category ? 'text-white' : 'text-gray-400 hover:bg-gray-700'
                      }`}
                      style={selectedCategory === category ? {
                        background: 'linear-gradient(to right, var(--primary-dark), var(--secondary))'
                      } : {
                        background: 'rgb(31, 41, 55)'
                      }}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* Service Cards */}
                <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                  {filteredServices.map((service) => {
                    const isSelected = selectedServices.includes(service.id)
                    const isHovered = hoveredServiceId === service.id
                    return (
                      <div key={service.id} className="relative">
                        <motion.button
                          onClick={() => handleServiceSelect(service.id)}
                          whileTap={{ scale: 0.98 }}
                          className="w-full p-4 rounded-xl border text-left transition-all"
                          style={isSelected ? {
                            background: 'linear-gradient(to right, rgba(0, 43, 39, 0.2), rgba(185, 128, 37, 0.2))',
                            borderColor: 'var(--secondary)'
                          } : {
                            background: 'rgba(17, 17, 17, 0.5)',
                            borderColor: isHovered ? 'var(--secondary)' : '#2a2a2a'
                          }}
                          onMouseEnter={(e) => {
                            setHoveredServiceId(service.id)
                            // Check if we're in the right half of the screen — show tooltip on left if so
                            const rect = e.currentTarget.getBoundingClientRect()
                            setTooltipPos(rect.left > window.innerWidth / 2 ? 'left' : 'right')
                          }}
                          onMouseLeave={() => setHoveredServiceId(null)}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                              <h3 className="font-semibold text-white mb-1">{service.name}</h3>
                              <p className="text-xs text-gray-400">{service.category}</p>
                            </div>
                            <div className="text-right flex-shrink-0">
                              <p className="text-sm font-bold" style={{ color: 'var(--secondary)' }}>
                                ₹{service.bookingPrice.toLocaleString()}
                              </p>
                              {service.bookingPriceNote && (
                                <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1 justify-end">
                                  <Info className="w-3 h-3" />
                                  est.
                                </p>
                              )}
                              {isSelected && (
                                <CheckCircle className="w-5 h-5 mt-1 ml-auto" style={{ color: '#22c55e' }} />
                              )}
                            </div>
                          </div>
                        </motion.button>

                        {/* ── Hover Tooltip ── */}
                        <AnimatePresence>
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.95, x: tooltipPos === 'right' ? -8 : 8 }}
                              animate={{ opacity: 1, scale: 1, x: 0 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              transition={{ duration: 0.15 }}
                              className="absolute top-0 z-50 w-64 pointer-events-none"
                              style={tooltipPos === 'right'
                                ? { left: 'calc(100% + 12px)' }
                                : { right: 'calc(100% + 12px)' }
                              }
                            >
                              <div className="rounded-xl border p-4 shadow-2xl" style={{
                                background: '#0d0d0d',
                                borderColor: 'var(--secondary)',
                                boxShadow: '0 0 24px rgba(185, 128, 37, 0.15)'
                              }}>
                                {/* Service name */}
                                <h4 className="font-bold text-white text-sm mb-1">{service.name}</h4>

                                {/* Full price (service-page style) */}
                                <div className="text-base font-bold mb-1 bg-clip-text text-transparent" style={{
                                  backgroundImage: 'linear-gradient(to right, var(--primary-dark), var(--secondary))'
                                }}>
                                  {getServicePagePriceDisplay(service.price)}
                                </div>

                                {/* Note if any */}
                                {service.note && (
                                  <p className="text-xs text-gray-500 mb-3">{service.note}</p>
                                )}

                                {/* Divider */}
                                <div className="border-t mb-3" style={{ borderColor: '#2a2a2a' }} />

                                {/* Features */}
                                <ul className="space-y-1.5">
                                  {service.features.map((feature: string, idx: number) => (
                                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                                      <CheckCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: 'var(--secondary)' }} />
                                      <span>{feature}</span>
                                    </li>
                                  ))}
                                </ul>

                                {/* Booking price note */}
                                {service.bookingPriceNote && (
                                  <div className="mt-3 pt-3 border-t flex items-start gap-1.5" style={{ borderColor: '#2a2a2a' }}>
                                    <Info className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: '#fb923c' }} />
                                    <p className="text-xs leading-relaxed" style={{ color: '#fb923c' }}>
                                      Booking price shown is an estimate
                                    </p>
                                  </div>
                                )}

                                {/* Arrow pointing back to the card */}
                                <div
                                  className="absolute top-4 w-2.5 h-2.5 rotate-45 border"
                                  style={tooltipPos === 'right' ? {
                                    left: '-6px',
                                    background: '#0d0d0d',
                                    borderColor: 'var(--secondary)',
                                    borderRight: 'none',
                                    borderTop: 'none'
                                  } : {
                                    right: '-6px',
                                    background: '#0d0d0d',
                                    borderColor: 'var(--secondary)',
                                    borderLeft: 'none',
                                    borderBottom: 'none'
                                  }}
                                />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            </div>

            {/* ─── Booking Form (Right) ───────────────────── */}
            <div className="lg:col-span-3" id="booking-form">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="sticky top-24"
              >
                <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent" style={{
                  backgroundImage: 'linear-gradient(to right, var(--primary-dark), var(--secondary))'
                }}>
                  Customer Details
                </h2>

                <div className="p-8 rounded-2xl border" style={{
                  background: 'rgba(17, 17, 17, 0.5)',
                  borderColor: '#2a2a2a'
                }}>
                  {/* Selected Services + Pricing Summary */}
                  <div className="mb-6">
                    {selectedServices.length > 0 ? (
                      <div className="space-y-3">
                        {selectedServices.map(serviceId => {
                          const service = bookableServices.find(s => s.id === serviceId)
                          if (!service) return null
                          const isFormHovered = hoveredServiceId === `form-${service.id}`
                          return (
                            <div
                              key={serviceId}
                              className="relative flex items-center justify-between p-3 rounded-lg transition-all"
                              style={{
                                background: isFormHovered ? 'rgba(0, 43, 39, 0.25)' : 'rgba(31, 41, 55, 0.5)',
                                borderRadius: '0.5rem',
                                cursor: 'default'
                              }}
                              onMouseEnter={() => setHoveredServiceId(`form-${service.id}`)}
                              onMouseLeave={() => setHoveredServiceId(null)}
                            >
                              <span className="text-sm text-gray-300">{service.name}</span>
                              <div className="flex items-center gap-3">
                                <span className="text-sm font-semibold" style={{ color: 'var(--secondary)' }}>
                                  ₹{service.bookingPrice.toLocaleString()}
                                </span>
                                <button
                                  onClick={() => handleServiceSelect(serviceId)}
                                  className="text-gray-400 transition-colors"
                                  onMouseEnter={(e) => e.currentTarget.style.color = '#ef4444'}
                                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(156, 163, 175)'}
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>

                              {/* Tooltip for selected service in form */}
                              <AnimatePresence>
                                {isFormHovered && (
                                  <motion.div
                                    initial={{ opacity: 0, scale: 0.95, y: 4 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute bottom-full left-0 mb-2 z-50 w-64 pointer-events-none"
                                  >
                                    <div className="rounded-xl border p-4 shadow-2xl" style={{
                                      background: '#0d0d0d',
                                      borderColor: 'var(--secondary)',
                                      boxShadow: '0 0 24px rgba(185, 128, 37, 0.15)'
                                    }}>
                                      {/* Service name */}
                                      <h4 className="font-bold text-white text-sm mb-1">{service.name}</h4>

                                      {/* Full price — service page style */}
                                      <div className="text-base font-bold mb-1 bg-clip-text text-transparent" style={{
                                        backgroundImage: 'linear-gradient(to right, var(--primary-dark), var(--secondary))'
                                      }}>
                                        {getServicePagePriceDisplay(service.price)}
                                      </div>

                                      {/* Note */}
                                      {service.note && (
                                        <p className="text-xs text-gray-500 mb-2">{service.note}</p>
                                      )}

                                      <div className="border-t mb-3" style={{ borderColor: '#2a2a2a' }} />

                                      {/* Features */}
                                      <ul className="space-y-1.5">
                                        {service.features.map((feature: string, idx: number) => (
                                          <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                                            <CheckCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: 'var(--secondary)' }} />
                                            <span>{feature}</span>
                                          </li>
                                        ))}
                                      </ul>

                                      {/* Range estimate note */}
                                      {service.bookingPriceNote && (
                                        <div className="mt-3 pt-3 border-t flex items-start gap-1.5" style={{ borderColor: '#2a2a2a' }}>
                                          <Info className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: '#fb923c' }} />
                                          <p className="text-xs leading-relaxed" style={{ color: '#fb923c' }}>
                                            Booking price shown is an estimate
                                          </p>
                                        </div>
                                      )}

                                      {/* Arrow pointing down toward the row */}
                                      <div className="absolute bottom-[-6px] left-6 w-2.5 h-2.5 rotate-45 border" style={{
                                        background: '#0d0d0d',
                                        borderColor: 'var(--secondary)',
                                        borderLeft: 'none',
                                        borderTop: 'none'
                                      }} />
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          )
                        })}

                        {/* Price Summary Box */}
                        <div className="mt-4 p-4 rounded-xl border" style={{
                          background: 'linear-gradient(to right, rgba(0, 43, 39, 0.2), rgba(185, 128, 37, 0.2))',
                          borderColor: 'rgba(0, 43, 39, 0.3)'
                        }}>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-400">Subtotal:</span>
                              <span className="font-semibold">₹{pricing.subtotal.toLocaleString()}</span>
                            </div>
                            {pricing.isPackage && (
                              <div className="flex justify-between" style={{ color: '#22c55e' }}>
                                <span>Package Discount (10%):</span>
                                <span className="font-semibold">-₹{pricing.discount.toLocaleString()}</span>
                              </div>
                            )}
                            <div className="pt-2 border-t flex justify-between text-lg" style={{ borderColor: 'rgb(55, 65, 81)' }}>
                              <span className="font-bold">Total Amount:</span>
                              <span className="font-bold" style={{ color: 'var(--secondary)' }}>
                                ₹{pricing.total.toLocaleString()}
                              </span>
                            </div>
                          </div>

                          {/* ✅ Single combined range note below total */}
                          {(() => {
                            const combinedNote = getCombinedRangeNote()
                            if (!combinedNote) return null
                            return (
                              <div className="mt-3 pt-3 border-t" style={{ borderColor: 'rgba(55, 65, 81, 0.5)' }}>
                                <div className="flex items-start gap-2">
                                  <Info className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#fb923c' }} />
                                  <p className="text-xs leading-relaxed" style={{ color: '#fb923c' }}>
                                    {combinedNote}
                                  </p>
                                </div>
                              </div>
                            )
                          })()}
                        </div>
                      </div>
                    ) : (
                      <div className="p-4 rounded-xl border" style={{
                        background: 'rgba(31, 41, 55, 0.5)',
                        borderColor: 'rgb(55, 65, 81)'
                      }}>
                        <p className="text-sm text-gray-400 text-center">
                          ← Please select service(s) from the list
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Form Fields */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                        <User className="w-4 h-4" style={{ color: 'var(--secondary)' }} />
                        Full Name *
                      </label>
                      <input
                        type="text" id="name" name="name" value={formData.name}
                        onChange={handleInputChange} required
                        className="w-full px-4 py-3 border rounded-lg text-white placeholder-gray-500 transition-colors"
                        style={{ background: 'rgba(0, 0, 0, 0.5)', borderColor: 'rgb(55, 65, 81)' }}
                        onFocus={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                        onBlur={(e) => e.currentTarget.style.borderColor = 'rgb(55, 65, 81)'}
                        placeholder="Your Name"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                          <Mail className="w-4 h-4" style={{ color: 'var(--secondary-light)' }} />
                          Email *
                        </label>
                        <input
                          type="email" id="email" name="email" value={formData.email}
                          onChange={handleInputChange} required
                          className="w-full px-4 py-3 border rounded-lg text-white placeholder-gray-500 transition-colors"
                          style={{ background: 'rgba(0, 0, 0, 0.5)', borderColor: 'rgb(55, 65, 81)' }}
                          onFocus={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                          onBlur={(e) => e.currentTarget.style.borderColor = 'rgb(55, 65, 81)'}
                          placeholder="@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                          <Phone className="w-4 h-4" style={{ color: 'var(--secondary)' }} />
                          Phone *
                        </label>
                        <input
                          type="tel" id="phone" name="phone" value={formData.phone}
                          onChange={handleInputChange} required
                          className="w-full px-4 py-3 border rounded-lg text-white placeholder-gray-500 transition-colors"
                          style={{ background: 'rgba(0, 0, 0, 0.5)', borderColor: 'rgb(55, 65, 81)' }}
                          onFocus={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                          onBlur={(e) => e.currentTarget.style.borderColor = 'rgb(55, 65, 81)'}
                          placeholder="+91 800 052 0687"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                          <Phone className="w-4 h-4" style={{ color: '#22c55e' }} />
                          WhatsApp Number *
                        </label>
                        <input
                          type="tel" id="whatsapp" name="whatsapp" value={formData.whatsapp}
                          onChange={handleInputChange} required
                          className="w-full px-4 py-3 border rounded-lg text-white placeholder-gray-500 transition-colors"
                          style={{ background: 'rgba(0, 0, 0, 0.5)', borderColor: 'rgb(55, 65, 81)' }}
                          onFocus={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                          onBlur={(e) => e.currentTarget.style.borderColor = 'rgb(55, 65, 81)'}
                          placeholder="Enter your WhatsApp number"
                        />
                      </div>
                      <div>
                        <label htmlFor="instagram" className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                          <Instagram className="w-4 h-4" style={{ color: 'var(--secondary)' }} />
                          Instagram Handle (Optional)
                        </label>
                        <input
                          type="text" id="instagram" name="instagram" value={formData.instagram}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border rounded-lg text-white placeholder-gray-500 transition-colors"
                          style={{ background: 'rgba(0, 0, 0, 0.5)', borderColor: 'rgb(55, 65, 81)' }}
                          onFocus={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                          onBlur={(e) => e.currentTarget.style.borderColor = 'rgb(55, 65, 81)'}
                          placeholder="@yourusername"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company/Organization (Optional)
                      </label>
                      <input
                        type="text" id="company" name="company" value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border rounded-lg text-white placeholder-gray-500 transition-colors"
                        style={{ background: 'rgba(0, 0, 0, 0.5)', borderColor: 'rgb(55, 65, 81)' }}
                        onFocus={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                        onBlur={(e) => e.currentTarget.style.borderColor = 'rgb(55, 65, 81)'}
                        placeholder="Your Company Name"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budget" name="budget" value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border rounded-lg text-white transition-colors"
                          style={{ background: 'rgba(0, 0, 0, 0.5)', borderColor: 'rgb(55, 65, 81)' }}
                          onFocus={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                          onBlur={(e) => e.currentTarget.style.borderColor = 'rgb(55, 65, 81)'}
                        >
                          <option value="">Select Budget</option>
                          <option value="under-5k">Under ₹5,999</option>
                          <option value="5k-15k">₹5,999 – ₹15,999</option>
                          <option value="15k-50k">₹15,999 – ₹50,999</option>
                          <option value="50k-1l">₹50,999 – ₹1,00,999</option>
                          <option value="above-1l">Above ₹1,00,999</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="deadline" className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                          <Calendar className="w-4 h-4" style={{ color: '#22c55e' }} />
                          Deadline
                        </label>
                        <input
                          type="date" id="deadline" name="deadline" value={formData.deadline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border rounded-lg text-white transition-colors"
                          style={{ background: 'rgba(0, 0, 0, 0.5)', borderColor: 'rgb(55, 65, 81)' }}
                          onFocus={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                          onBlur={(e) => e.currentTarget.style.borderColor = 'rgb(55, 65, 81)'}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" style={{ color: '#fb923c' }} />
                        Project Details *
                      </label>
                      <textarea
                        id="projectDetails" name="projectDetails" value={formData.projectDetails}
                        onChange={handleInputChange} required rows={5}
                        className="w-full px-4 py-3 border rounded-lg text-white placeholder-gray-500 transition-colors resize-none"
                        style={{ background: 'rgba(0, 0, 0, 0.5)', borderColor: 'rgb(55, 65, 81)' }}
                        onFocus={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                        onBlur={(e) => e.currentTarget.style.borderColor = 'rgb(55, 65, 81)'}
                        placeholder="Tell us about your project, requirements, and any specific details..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={!canSubmit || isSubmitting}
                      className="w-full px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                      style={{
                        background: 'linear-gradient(to right, var(--primary-dark), var(--secondary))',
                        boxShadow: '0 10px 25px -5px rgba(0, 43, 39, 0.3)'
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Submit Booking Request
                        </>
                      )}
                    </button>

                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 border rounded-lg text-center"
                        style={{ background: 'rgba(34, 197, 94, 0.1)', borderColor: 'rgba(34, 197, 94, 0.5)', color: '#22c55e' }}
                      >
                        <CheckCircle className="w-6 h-6 mx-auto mb-2" />
                        <p className="font-semibold">Booking request submitted successfully!</p>
                        <p className="text-sm mt-1">We'll contact you on WhatsApp within 24 hours.</p>
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 border rounded-lg text-center"
                        style={{ background: 'rgba(239, 68, 68, 0.1)', borderColor: 'rgba(239, 68, 68, 0.5)', color: '#ef4444' }}
                      >
                        <p className="font-semibold">Something went wrong!</p>
                        <p className="text-sm mt-1">Please try again or contact us directly.</p>
                      </motion.div>
                    )}
                  </form>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #1f2937; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: linear-gradient(to bottom, var(--primary-dark), var(--secondary)); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: linear-gradient(to bottom, var(--secondary), var(--secondary-light)); }
      `}</style>
    </main>
  )
}

export default function BookServicePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--primary-black)' }}>
        <div className="text-white text-xl">Loading...</div>
      </div>
    }>
      <BookServiceContent />
    </Suspense>
  )
}