'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  Target,
  Lightbulb,
  Users,
  Award,
  Linkedin,
  Instagram,
  PhoneCall,
  Mail
} from 'lucide-react'

const stats = [
  { value: '150+', label: 'Projects Completed' },
  { value: '50+', label: 'Happy Clients' },
  { value: '2+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
]

const values = [
  {
    icon: Target,
    title: 'Innovation First',
    description: 'We embrace cutting-edge technologies and creative solutions to deliver exceptional digital experiences.',
    color: `linear-gradient(to bottom right, var(--primary-dark), var(--secondary-dark))`
  },
  {
    icon: Lightbulb,
    title: 'Client-Centric',
    description: 'Your success is our priority. We collaborate closely to understand and exceed your expectations.',
    color: `linear-gradient(to bottom right, var(--secondary-light), var(--secondary-lightest))`
  },
  {
    icon: Users,
    title: 'Team Excellence',
    description: 'Our diverse team brings together expertise, passion, and dedication to every project we undertake.',
    color: `linear-gradient(to bottom right, var(--secondary), var(--secondary-dark))`
  },
  {
    icon: Award,
    title: 'Quality Driven',
    description: 'We maintain the highest standards in code quality, design aesthetics, and project delivery.',
    color: `linear-gradient(to bottom right, var(--primary-dark), var(--secondary))`
  },
]

const team = [
  {
    name: 'Chetan Gaur',
    role: 'Team Lead & Developer',
    image: '/team/1.jpg',
    bio: 'Team Lead & Developer driving scalable solutions while guiding teams through efficient collaboration and technical excellence.',
    social: {
      linkedin: 'https://www.linkedin.com/in/chetan-gaur-156089366?trk=contact-info',
      instagram: 'https://www.instagram.com/im_chetan_578?igsh=MXhncmJjbWZxbnZuNQ%3D%3D&utm_source=qr',
      phonecall: '9257676694',
      email: 'Chetangaur966@gmail.com'
    }
  },
  {
    name: 'Priyanshu Rathor',
    role: 'UI & Web designer & Innovation Officer',
    image: '/team/2.jpg',
    bio: 'UI & Web Designer creating user-focused interfaces and innovative web solutions through creativity and strategic design.',
    social: {
      linkedin: 'https://www.linkedin.com/in/priyanshu-rathor-792535312?utm_source=share_via&utm_content=profile&utm_medium=member_ios ',
      instagram: 'https://www.instagram.com/_pr1yanshu_?igsh=emJveHM5aGVmZnpn&utm_source=qr',
      phonecall: '7413078090',
      email: 'priyanshurathor612@gmail.com'
    }
  },
  {
    name: 'Anurag Agarwal',
    role: 'Editor & Social Media Manager',
    image: '/team/3.jpg',
    bio: 'Editor & Social Media Manager driving reach, engagement, and brand identity through creative content and data-driven strategies.',
    social: {
      linkedin: 'https://www.linkedin.com/in/anurag-agarwal-57b62838a?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      instagram: 'https://www.instagram.com/anurag_15267?igsh=MnJhNnBueHcyZmlp',
      phonecall: '6377973977',
      email: 'anuragagarwal15267@gmail.com'
    }
  },
  {
    name: 'Ankit Meena',
    role: 'Data Analyzer & Marketing',
    image: '/team/4.png',
    bio: 'Data Analyzer & Marketing professional turning insights into effective campaigns through strategic planning and performance optimization.',
    social: {
      linkedin: '',
      instagram: 'https://www.instagram.com/ its_ankit.x',
      phonecall: '8769706816',
      email: 'ankitmeena3611@gmail.com'
    }
  },
]

export default function AboutPage() {
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
              About Techie Thrive
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're a passionate team of innovators, designers, and developers dedicated to transforming ideas into stunning digital realities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent mb-2" style={{
                  backgroundImage: 'linear-gradient(to right, var(--primary-dark), var(--secondary))'
                }}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent" style={{
              backgroundImage: 'linear-gradient(to right, var(--primary-dark), var(--secondary))'
            }}>
              Our Story
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Founded in 2020, Techie Thrive began as a vision to bridge the gap between cutting-edge technology and stunning design. What started as a small team of three passionate developers has grown into a full-service digital agency.
              </p>
              <p>
                We believe that technology should be beautiful, intuitive, and accessible. Our mission is to create digital experiences that not only meet business objectives but also delight users and push the boundaries of what's possible on the web.
              </p>
              <p>
                Today, we specialize in creating immersive 3D web experiences, modern web applications, and comprehensive digital strategies that help businesses thrive in the digital age.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              These principles guide everything we do and define who we are as a team
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" style={{
                    background: value.color
                  }} />
                  <div className="relative p-8 backdrop-blur-sm rounded-2xl border transition-all duration-300" style={{
                    background: 'rgba(17, 17, 17, 0.9)',
                    borderColor: '#2a2a2a'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2a2a2a'}
                  >
                    <div className="inline-flex p-4 rounded-xl mb-4" style={{
                      background: value.color
                    }}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6" id="team">
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
              Meet Our Team
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The talented individuals behind Techie Thrive's success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                {/* Card glow effect */}
                <div className="absolute -inset-0.5 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" style={{
                  background: 'linear-gradient(to right, var(--primary-dark), var(--secondary))'
                }} />

                {/* Card content */}
                <div className="relative backdrop-blur-sm rounded-2xl border overflow-hidden transition-all duration-300" style={{
                  background: 'rgba(17, 17, 17, 0.9)',
                  borderColor: '#2a2a2a'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2a2a2a'}
                >
                  {/* Image section */}
                  <div className="relative h-80" style={{
                    background: 'linear-gradient(to bottom right, rgba(0, 43, 39, 0.2), rgba(185, 128, 37, 0.2))'
                  }}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={320}
                      className="object-cover w-full h-full"
                      priority={index < 3}
                    />
                  </div>

                  {/* Member info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-sm mb-3" style={{ color: 'var(--secondary)' }}>{member.role}</p>
                    <p className="text-gray-400 text-sm mb-4">{member.bio}</p>

                    {/* Social links */}
                    <div className="flex items-center gap-3">
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg border flex items-center justify-center text-gray-400 transition-all"
                        style={{
                          background: 'rgba(31, 41, 55, 0.5)',
                          borderColor: 'rgb(55, 65, 81)'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.color = 'var(--secondary-lightest)'
                          e.currentTarget.style.borderColor = 'var(--secondary-lightest)'
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.color = 'rgb(156, 163, 175)'
                          e.currentTarget.style.borderColor = 'rgb(55, 65, 81)'
                        }}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg border flex items-center justify-center text-gray-400 transition-all"
                        style={{
                          background: 'rgba(31, 41, 55, 0.5)',
                          borderColor: 'rgb(55, 65, 81)'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.color = 'var(--secondary-light)'
                          e.currentTarget.style.borderColor = 'var(--secondary-light)'
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.color = 'rgb(156, 163, 175)'
                          e.currentTarget.style.borderColor = 'rgb(55, 65, 81)'
                        }}
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                      <a
                        href={`tel:${member.social.phonecall}`}
                        className="w-9 h-9 rounded-lg border flex items-center justify-center text-gray-400 transition-all"
                        style={{
                          background: 'rgba(31, 41, 55, 0.5)',
                          borderColor: 'rgb(55, 65, 81)'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.color = 'var(--accent-light)'
                          e.currentTarget.style.borderColor = 'var(--accent-light)'
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.color = 'rgb(156, 163, 175)'
                          e.currentTarget.style.borderColor = 'rgb(55, 65, 81)'
                        }}
                      >
                        <PhoneCall className="w-4 h-4" />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="w-9 h-9 rounded-lg border flex items-center justify-center text-gray-400 transition-all"
                        style={{
                          background: 'rgba(31, 41, 55, 0.5)',
                          borderColor: 'rgb(55, 65, 81)'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.color = 'var(--secondary)'
                          e.currentTarget.style.borderColor = 'var(--secondary)'
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.color = 'rgb(156, 163, 175)'
                          e.currentTarget.style.borderColor = 'rgb(55, 65, 81)'
                        }}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
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
          <div className="relative p-12 rounded-3xl border overflow-hidden" style={{
            background: 'linear-gradient(to right, rgba(0, 43, 39, 0.1), rgba(185, 128, 37, 0.1))',
            borderColor: 'rgba(0, 43, 39, 0.2)'
          }}>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:30px_30px]" />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Work Together?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Let's bring your vision to life with cutting-edge technology and stunning design
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services">
                  <button className="px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform" style={{
                    background: 'linear-gradient(to right, var(--primary-dark), var(--secondary))',
                    boxShadow: '0 10px 25px -5px rgba(0, 43, 39, 0.3)'
                  }}>
                    Start Your Project
                  </button>
                </Link>
                <Link href="/portfolio">
                  <button className="px-8 py-4 border-2 rounded-full font-semibold text-lg transition-all" style={{
                    borderColor: 'var(--secondary)',
                    background: 'transparent'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(185, 128, 37, 0.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    View Our Work
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
