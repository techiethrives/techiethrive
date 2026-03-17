'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  Youtube,
  Twitter,
  Instagram,
  Linkedin,
  Facebook,
} from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    details: 'techiethrives@gmail.com',
    link: 'mailto:techiethrives@gmail.com',
    color: `linear-gradient(to bottom right, var(--primary-dark), var(--secondary-dark))`
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: '+91 8000-520-687',
    link: 'tel:+918000520687',
    color: `linear-gradient(to bottom right, var(--secondary-light), var(--secondary-lightest))`
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: 'Kota, Rajasthan',
    link: 'https://maps.app.goo.gl/KtoyviZk2XjkbZkS9',
    color: `linear-gradient(to bottom right, var(--secondary), var(--secondary-dark))`
  },
  {
    icon: Clock,
    title: 'Customer Support',
    details: 'Mon - Sat: 10AM - 6PM',
    link: 'https://wa.me/918000520687',
    color: `linear-gradient(to bottom right, var(--primary-dark), var(--secondary))`
  },
]

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/techiethrives/#', label: 'Instagram', hoverColor: 'var(--secondary)' },
  { icon: Twitter, href: 'https://x.com/Techie_Thrives', label: 'Twitter', hoverColor: 'var(--secondary-light)' },
  { icon: Linkedin, href: 'https://linkedin.com/in/techie-thrives-digital-creation-agency-332661399 ', label: 'LinkedIn', hoverColor: 'var(--secondary-lightest)' },
  { icon: Facebook, href: 'https://facebook.com/techiethrives', label: 'GitHub', hoverColor: 'var(--accent-light)' },
  { icon: Youtube, href: 'https://www.youtube.com/@TECHIETHRIVES', label: 'youtube', hoverColor: 'var(--secondary-dark)' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Prepare data for Web3Forms
    const formPayload = {
      access_key: "a30f90e0-00f7-46e0-adb4-8c79ff2f95d8",
      subject: `Contact Form: ${formData.subject}`,
      from_name: `${formData.firstName} ${formData.lastName}`,
      
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone || 'Not provided',
      
      message: formData.message,
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
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
        
        setTimeout(() => setSubmitStatus('idle'), 5000)
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
              Get In Touch
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500" style={{
                    background: info.color
                  }} />
                  <div className="relative p-6 backdrop-blur-sm rounded-xl border transition-all duration-300 text-center" style={{
                    background: 'rgba(17, 17, 17, 0.9)',
                    borderColor: '#2a2a2a'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2a2a2a'}
                  >
                    <div className="inline-flex p-3 rounded-lg mb-3" style={{
                      background: info.color
                    }}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    <a 
                      href={info.link}
                      className="text-sm text-gray-400 transition-colors"
                      onMouseOver={(e) => e.currentTarget.style.color = 'var(--secondary)'}
                      onMouseOut={(e) => e.currentTarget.style.color = 'rgb(156, 163, 175)'}
                    >
                      {info.details}
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent" style={{
                backgroundImage: 'linear-gradient(to right, var(--primary-dark), var(--secondary))'
              }}>
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors"
                      style={{
                        background: 'rgba(17, 17, 17, 0.5)',
                        borderColor: 'rgb(55, 65, 81)'
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                      onBlur={(e) => e.currentTarget.style.borderColor = 'rgb(55, 65, 81)'}
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors"
                      style={{
                        background: 'rgba(17, 17, 17, 0.5)',
                        borderColor: 'rgb(55, 65, 81)'
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                      onBlur={(e) => e.currentTarget.style.borderColor = 'rgb(55, 65, 81)'}
                      placeholder="Surname"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors"
                      style={{
                        background: 'rgba(17, 17, 17, 0.5)',
                        borderColor: 'rgb(55, 65, 81)'
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                      onBlur={(e) => e.currentTarget.style.borderColor = 'rgb(55, 65, 81)'}
                      placeholder="abcd123@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors"
                      style={{
                        background: 'rgba(17, 17, 17, 0.5)',
                        borderColor: 'rgb(55, 65, 81)'
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                      onBlur={(e) => e.currentTarget.style.borderColor = 'rgb(55, 65, 81)'}
                      placeholder="Mobile No."
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors"
                    style={{
                      background: 'rgba(17, 17, 17, 0.5)',
                      borderColor: 'rgb(55, 65, 81)'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'rgb(55, 65, 81)'}
                    placeholder="How can we help you?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors resize-none"
                    style={{
                      background: 'rgba(17, 17, 17, 0.5)',
                      borderColor: 'rgb(55, 65, 81)'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'rgb(55, 65, 81)'}
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{
                    background: 'linear-gradient(to right, var(--primary-dark), var(--secondary))',
                    boxShadow: '0 10px 25px -5px rgba(0, 43, 39, 0.3)'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg text-center"
                    style={{
                      background: 'rgba(34, 197, 94, 0.1)',
                      border: '1px solid rgba(34, 197, 94, 0.5)',
                      color: '#4ade80'
                    }}
                  >
                    ✓ Message sent successfully! We'll get back to you soon.
                  </motion.div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg text-center"
                    style={{
                      background: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.5)',
                      color: '#f87171'
                    }}
                  >
                    ✗ Failed to send message. Please try again or email us directly.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Right Column - Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Why Contact Us */}
              <div>
                <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent" style={{
                  backgroundImage: 'linear-gradient(to right, var(--primary-dark), var(--secondary))'
                }}>
                  Why Work With Us?
                </h2>
                <div className="space-y-4">
                  {[
                    { title: 'Fast Response', description: 'We typically respond within 24 hours' },
                    { title: 'Expert Consultation', description: 'Free initial consultation for all projects' },
                    { title: 'Transparent Pricing', description: 'Clear, upfront pricing with no hidden costs' },
                    { title: 'Dedicated Support', description: '24/7 support throughout your project' },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full" style={{
                        background: 'linear-gradient(to right, var(--primary-dark), var(--secondary))'
                      }} />
                      <div>
                        <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex gap-3">
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
                        className="w-12 h-12 rounded-lg border flex items-center justify-center text-gray-400 transition-colors"
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
              </div>

              {/* Map */}
              <div className="relative h-80 rounded-2xl overflow-hidden border border-gray-800">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d225.70805743869843!2d75.83231325842632!3d25.15836934556821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1765631370770!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Techie Thrives Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6" style={{
        background: 'linear-gradient(to bottom, var(--primary-black), #111111)'
      }}>
        <div className="max-w-4xl mx-auto">
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
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: 'What is your typical response time?',
                answer: 'We typically respond to all inquiries within 24 hours during business days.'
              },
              {
                question: 'Do you offer free consultations?',
                answer: 'Yes! We offer a free initial consultation to discuss your project and provide recommendations.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept bank transfers, UPI, credit cards, and other major payment methods.'
              },
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary based on complexity. Simple projects take 1-2 weeks, while larger projects may take 4-8 weeks.'
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 border rounded-xl transition-colors"
                style={{
                  background: 'rgba(17, 17, 17, 0.5)',
                  borderColor: '#2a2a2a'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2a2a2a'}
              >
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
