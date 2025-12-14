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
  Instagram
} from 'lucide-react'

// Updated services matching the Services page
const allServices = [
  // Video & Reel Production
  { id: 'promo-video', name: 'Promotion Video (5-12 min)', price: 14999, category: 'Video & Reel Production' },
  { id: 'promo-reel', name: 'Promotion Reel (20-45 sec)', price: 999, category: 'Video & Reel Production' },
  { id: 'cinematic-reel', name: 'Cinematic Reels', price: 999, category: 'Video & Reel Production' },
  { id: 'pre-wedding', name: 'Pre-Wedding Shoots', price: 1999, category: 'Video & Reel Production' },
  { id: '10-reel-package', name: '10 Reel Package (Shoot + Edit)', price: 9999, category: 'Video & Reel Production' },
  { id: 'youtube-package', name: 'YouTube Package (3 videos + 10 shorts)', price: 1999, category: 'Video & Reel Production' },
  
  // Editing Services
  { id: 'short-edit', name: 'Short Video Editing (30s-1min)', price: 799, category: 'Editing Services' },
  { id: 'long-edit', name: 'Long Video Editing (10-20 min)', price: 1499, category: 'Editing Services' },
  
  // Design & Branding
  { id: 'poster', name: 'Poster Layouts', price: 699, category: 'Design & Branding' },
  { id: 'thumbnail', name: 'Thumbnails', price: 699, category: 'Design & Branding' },
  { id: 'pamphlet', name: 'Pamphlets / Poster Design', price: 899, category: 'Design & Branding' },
  { id: 'menu', name: 'Menu Designs', price: 799, category: 'Design & Branding' },
  { id: 'logo', name: 'Logo Design', price: 499, category: 'Design & Branding' },
  { id: 'visiting-card', name: 'Visiting Card Design', price: 899, category: 'Design & Branding' },
  { id: 'presentation', name: 'Presentation Design', price: 999, category: 'Design & Branding' },
  { id: 'carousel', name: 'Carousel Video (8 photos)', price: 1199, category: 'Design & Branding' },
  
  // Web & App Development
  { id: 'portfolio-web', name: 'Portfolio Website', price: 1499, category: 'Web & App Development' },
  { id: 'multipage-web', name: 'Multi-Page Website', price: 999, category: 'Web & App Development' },
  { id: 'ecommerce', name: 'E-Commerce Website', price: 1999, category: 'Web & App Development' },
  { id: 'app-dev', name: 'App Development', price: 17500, category: 'Web & App Development' },
  
  // Social Media & Ads
  { id: 'meta-ads', name: 'Meta Ads Management (per week)', price: 999, category: 'Social Media & Ads' },
  { id: 'google-ads', name: 'Google Ads Management', price: 999, category: 'Social Media & Ads' },
  { id: 'insta-3month', name: '3-Month Instagram Management', price: 39999, category: 'Social Media & Ads' },
  { id: 'insta-1month', name: '1-Month Instagram Management', price: 14999, category: 'Social Media & Ads' },
]

const categories = [
  'All', 
  'Video & Reel Production', 
  'Editing Services', 
  'Design & Branding', 
  'Web & App Development', 
  'Social Media & Ads'
]

// Separate component that uses useSearchParams
function BookServiceContent() {
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [bookingType, setBookingType] = useState<'individual' | 'package' | null>(null)
  const [showPackagePrompt, setShowPackagePrompt] = useState(false)
  
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

  // Auto-select service from URL parameter
  useEffect(() => {
    const serviceId = searchParams.get('service')
    if (serviceId && allServices.find(s => s.id === serviceId)) {
      setSelectedServices([serviceId])
      
      // Scroll to form on mobile
      if (typeof window !== 'undefined' && window.innerWidth < 768) {
        setTimeout(() => {
          document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })
        }, 500)
      }
    }
  }, [searchParams])

  const filteredServices = selectedCategory === 'All' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory)

  const calculateTotal = () => {
    const subtotal = selectedServices.reduce((total, serviceId) => {
      const service = allServices.find(s => s.id === serviceId)
      return total + (service?.price || 0)
    }, 0)

    if (bookingType === 'package' && selectedServices.length >= 3) {
      const discount = subtotal * 0.1
      return {
        subtotal,
        discount,
        total: subtotal - discount,
        isPackage: true
      }
    }

    return {
      subtotal,
      discount: 0,
      total: subtotal,
      isPackage: false
    }
  }

  const handleServiceSelect = (serviceId: string) => {
    const isSelected = selectedServices.includes(serviceId)
    
    if (isSelected) {
      const newServices = selectedServices.filter(id => id !== serviceId)
      setSelectedServices(newServices)
      
      if (newServices.length < 2) {
        setBookingType(null)
      }
      
      if (bookingType === 'package' && newServices.length < 3) {
        setBookingType('individual')
      }
    } else {
      const newServices = [...selectedServices, serviceId]
      setSelectedServices(newServices)
      
      if (newServices.length === 2 && !bookingType) {
        setShowPackagePrompt(true)
      }
    }
  }

  const handleBookingTypeSelection = (type: 'individual' | 'package') => {
    setBookingType(type)
    setShowPackagePrompt(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const pricing = calculateTotal()
    const selectedServiceDetails = selectedServices.map(id => {
      const service = allServices.find(s => s.id === id)
      return {
        name: service?.name,
        price: service?.price,
        category: service?.category
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
      services: selectedServiceDetails.map(s => `${s.name} (₹${s.price})`).join(', '),
      number_of_services: selectedServices.length,
      
      subtotal: `₹${pricing.subtotal.toLocaleString()}`,
      discount: pricing.isPackage ? `₹${pricing.discount.toLocaleString()} (10% off)` : '₹0',
      total_amount: `₹${pricing.total.toLocaleString()}`,
      
      project_details: formData.projectDetails,
      budget_range: formData.budget || 'Not specified',
      deadline: formData.deadline || 'Not specified',
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formPayload)
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setTimeout(() => {
          setFormData({
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
          setSelectedServices([])
          setBookingType(null)
          setSubmitStatus('idle')
        }, 999)
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
              className="rounded-2xl border p-8 max-w-md w-full" style={{
                background: '#111111',
                borderColor: 'var(--secondary)'
              }}
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
                  style={{
                    borderColor: 'var(--primary-dark)',
                    background: 'rgba(0, 43, 39, 0.2)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0, 43, 39, 0.3)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0, 43, 39, 0.2)'}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Package className="w-5 h-5" style={{ color: 'var(--secondary)' }} />
                    <span className="font-bold">Create Package</span>
                    <span className="ml-auto text-sm px-2 py-1 rounded-full" style={{
                      background: 'rgba(34, 197, 94, 0.2)',
                      color: '#22c55e'
                    }}>10% OFF</span>
                  </div>
                  <p className="text-sm text-gray-400">Select 3+ services for 10% discount</p>
                </button>

                <button
                  onClick={() => handleBookingTypeSelection('individual')}
                  className="w-full p-4 rounded-xl border-2 transition-all text-left"
                  style={{
                    borderColor: 'rgb(55, 65, 81)',
                    background: 'rgba(31, 41, 55, 0.5)'
                  }}
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
            {/* Services List */}
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
                              background: 'rgba(34, 197, 94, 0.2)',
                              color: '#22c55e'
                            }}>
                              10% OFF Active
                            </span>
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

                <div className="flex flex-wrap gap-2 mb-6">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedCategory === category
                          ? 'text-white'
                          : 'text-gray-400 hover:bg-gray-700'
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

                <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                  {filteredServices.map((service) => {
                    const isSelected = selectedServices.includes(service.id)
                    return (
                      <motion.button
                        key={service.id}
                        onClick={() => handleServiceSelect(service.id)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full p-4 rounded-xl border text-left transition-all"
                        style={isSelected ? {
                          background: 'linear-gradient(to right, rgba(0, 43, 39, 0.2), rgba(185, 128, 37, 0.2))',
                          borderColor: 'var(--secondary)'
                        } : {
                          background: 'rgba(17, 17, 17, 0.5)',
                          borderColor: '#2a2a2a'
                        }}
                        onMouseEnter={(e) => !isSelected && (e.currentTarget.style.borderColor = 'var(--secondary)')}
                        onMouseLeave={(e) => !isSelected && (e.currentTarget.style.borderColor = '#2a2a2a')}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <h3 className="font-semibold text-white mb-1">{service.name}</h3>
                            <p className="text-xs text-gray-400">{service.category}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-bold" style={{ color: 'var(--secondary)' }}>₹{service.price.toLocaleString()}</p>
                            {isSelected && (
                              <CheckCircle className="w-5 h-5 mt-1 ml-auto" style={{ color: '#22c55e' }} />
                            )}
                          </div>
                        </div>
                      </motion.button>
                    )
                  })}
                </div>
              </motion.div>
            </div>

            {/* Booking Form */}
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
                  <div className="mb-6">
                    {selectedServices.length > 0 ? (
                      <div className="space-y-3">
                        {selectedServices.map(serviceId => {
                          const service = allServices.find(s => s.id === serviceId)
                          return (
                            <div key={serviceId} className="flex items-center justify-between p-3 rounded-lg" style={{
                              background: 'rgba(31, 41, 55, 0.5)'
                            }}>
                              <span className="text-sm text-gray-300">{service?.name}</span>
                              <div className="flex items-center gap-3">
                                <span className="text-sm font-semibold" style={{ color: 'var(--secondary)' }}>
                                  ₹{service?.price.toLocaleString()}
                                </span>
                                <button
                                  onClick={() => handleServiceSelect(serviceId)}
                                  className="text-gray-400 transition-colors"
                                  style={{ color: 'rgb(156, 163, 175)' }}
                                  onMouseEnter={(e) => e.currentTarget.style.color = '#ef4444'}
                                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(156, 163, 175)'}
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          )
                        })}
                        
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
                              <span className="font-bold" style={{ color: 'var(--secondary)' }}>₹{pricing.total.toLocaleString()}</span>
                            </div>
                          </div>
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

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                        <User className="w-4 h-4" style={{ color: 'var(--secondary)' }} />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border rounded-lg text-white placeholder-gray-500 transition-colors"
                        style={{
                          background: 'rgba(0, 0, 0, 0.5)',
                          borderColor: 'rgb(55, 65, 81)'
                        }}
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
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border rounded-lg text-white placeholder-gray-500 transition-colors"
                          style={{
                            background: 'rgba(0, 0, 0, 0.5)',
                            borderColor: 'rgb(55, 65, 81)'
                          }}
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
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border rounded-lg text-white placeholder-gray-500 transition-colors"
                          style={{
                            background: 'rgba(0, 0, 0, 0.5)',
                            borderColor: 'rgb(55, 65, 81)'
                          }}
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
                          type="tel"
                          id="whatsapp"
                          name="whatsapp"
                          value={formData.whatsapp}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border rounded-lg text-white placeholder-gray-500 transition-colors"
                          style={{
                            background: 'rgba(0, 0, 0, 0.5)',
                            borderColor: 'rgb(55, 65, 81)'
                          }}
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
                          type="text"
                          id="instagram"
                          name="instagram"
                          value={formData.instagram}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border rounded-lg text-white placeholder-gray-500 transition-colors"
                          style={{
                            background: 'rgba(0, 0, 0, 0.5)',
                            borderColor: 'rgb(55, 65, 81)'
                          }}
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
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border rounded-lg text-white placeholder-gray-500 transition-colors"
                        style={{
                          background: 'rgba(0, 0, 0, 0.5)',
                          borderColor: 'rgb(55, 65, 81)'
                        }}
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
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border rounded-lg text-white transition-colors"
                          style={{
                            background: 'rgba(0, 0, 0, 0.5)',
                            borderColor: 'rgb(55, 65, 81)'
                          }}
                          onFocus={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                          onBlur={(e) => e.currentTarget.style.borderColor = 'rgb(55, 65, 81)'}
                        >
                          <option value="">Select Budget</option>
                          <option value="under-5k">Under ₹5999</option>
                          <option value="5k-15k">₹5999 - ₹15999</option>
                          <option value="15k-50k">₹15999 - ₹50999</option>
                          <option value="50k-1l">₹50999 - ₹1,00999</option>
                          <option value="above-1l">Above ₹1,00999</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="deadline" className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                          <Calendar className="w-4 h-4" style={{ color: '#22c55e' }} />
                          Deadline
                        </label>
                        <input
                          type="date"
                          id="deadline"
                          name="deadline"
                          value={formData.deadline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border rounded-lg text-white transition-colors"
                          style={{
                            background: 'rgba(0, 0, 0, 0.5)',
                            borderColor: 'rgb(55, 65, 81)'
                          }}
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
                        id="projectDetails"
                        name="projectDetails"
                        value={formData.projectDetails}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border rounded-lg text-white placeholder-gray-500 transition-colors resize-none"
                        style={{
                          background: 'rgba(0, 0, 0, 0.5)',
                          borderColor: 'rgb(55, 65, 81)'
                        }}
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
                        style={{
                          background: 'rgba(34, 197, 94, 0.1)',
                          borderColor: 'rgba(34, 197, 94, 0.5)',
                          color: '#22c55e'
                        }}
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
                        style={{
                          background: 'rgba(239, 68, 68, 0.1)',
                          borderColor: 'rgba(239, 68, 68, 0.5)',
                          color: '#ef4444'
                        }}
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
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, var(--primary-dark), var(--secondary));
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, var(--secondary), var(--secondary-light));
        }
      `}</style>
    </main>
  )
}

// Main export with Suspense wrapper
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
