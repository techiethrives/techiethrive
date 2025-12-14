'use client'

import { motion } from 'framer-motion'
import { 
  Code, 
  Smartphone, 
  Globe, 
  Zap,
  CheckCircle,
  Layers,
  Cpu,
  Shield,
  TrendingUp,
  Users,
  Palette,
  Database
} from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Custom, responsive websites built with modern frameworks that deliver exceptional user experiences',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Secure & Scalable'],
    color: `linear-gradient(to bottom right, var(--primary-dark), var(--secondary-dark))`
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native iOS and Android apps that provide seamless experiences across all devices',
    features: ['Native Apps', 'Cross-Platform', 'Cloud Integration', 'Push Notifications'],
    color: `linear-gradient(to bottom right, var(--secondary-light), var(--secondary-lightest))`
  },
  {
    icon: Code,
    title: 'Web Applications',
    description: 'Complex web apps with powerful backends, APIs, and real-time functionality',
    features: ['Custom APIs', 'Real-time Updates', 'Database Design', 'Admin Dashboards'],
    color: `linear-gradient(to bottom right, var(--secondary), var(--secondary-dark))`
  },
  {
    icon: Layers,
    title: 'Progressive Web Apps',
    description: 'PWAs that combine the best of web and mobile apps for maximum reach',
    features: ['Offline Support', 'App-like Experience', 'Cross-Platform', 'Cost-Effective'],
    color: `linear-gradient(to bottom right, var(--primary-dark), var(--secondary))`
  },
]

const technologies = [
  {
    category: 'Frontend',
    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Angular']
  },
  {
    category: 'Backend',
    techs: ['Node.js', 'Python', 'Django', 'Laravel', 'Express', 'MongoDB']
  },
  {
    category: 'Mobile',
    techs: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic', 'Xamarin']
  },
  {
    category: 'Database',
    techs: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Redis', 'SQLite']
  },
]

const developmentProcess = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'We analyze requirements, define scope, and create detailed project roadmaps',
    icon: Users
  },
  {
    step: '02',
    title: 'Design & Prototyping',
    description: 'UI/UX design, wireframes, and interactive prototypes for validation',
    icon: Palette
  },
  {
    step: '03',
    title: 'Development',
    description: 'Agile development with regular updates and continuous integration',
    icon: Code
  },
  {
    step: '04',
    title: 'Testing & Launch',
    description: 'Comprehensive testing, deployment, and post-launch support',
    icon: Zap
  },
]

const features = [
  {
    icon: Shield,
    title: 'Security First',
    description: 'Built-in security measures, encryption, and best practices to protect your data'
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Optimized code and infrastructure for lightning-fast loading and response times'
  },
  {
    icon: Cpu,
    title: 'Scalable Architecture',
    description: 'Solutions designed to grow with your business, handling increased traffic effortlessly'
  },
  {
    icon: TrendingUp,
    title: 'Future-Proof Tech',
    description: 'Modern tech stack ensuring long-term maintainability and easy updates'
  },
]

export default function AppWebDevPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent" style={{
              backgroundImage: 'linear-gradient(to right, var(--primary-dark), var(--secondary), var(--secondary-lightest))'
            }}>
              App & Web Development
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Building powerful, scalable applications that drive business growth and deliver exceptional user experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Description */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl border" style={{
              background: 'linear-gradient(to right, rgba(0, 43, 39, 0.1), rgba(185, 128, 37, 0.1))',
              borderColor: 'rgba(0, 43, 39, 0.2)'
            }}
          >
            <h2 className="text-3xl font-bold mb-4">Custom Development Solutions</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              At Techie Thrives, we specialize in creating <span className="font-semibold" style={{ color: 'var(--secondary)' }}>custom web and mobile applications</span> that perfectly align with your business objectives. From simple websites to complex enterprise platforms, we deliver solutions that are scalable, secure, and built to last.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our full-stack development team handles everything from <span style={{ color: 'var(--secondary-light)' }}>frontend design</span> to <span style={{ color: 'var(--secondary-dark)' }}>backend architecture</span>, ensuring seamless integration and optimal performance across all devices and platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
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
              Development Services
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive development solutions for web, mobile, and cloud platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" style={{
                    background: service.color
                  }} />
                  <div className="relative p-8 backdrop-blur-sm rounded-2xl border transition-all duration-300 h-full" style={{
                    background: 'rgba(17, 17, 17, 0.9)',
                    borderColor: '#2a2a2a'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2a2a2a'}
                  >
                    <div className="inline-flex p-4 rounded-xl mb-4" style={{
                      background: service.color
                    }}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-400 mb-6">{service.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4" style={{ color: 'var(--secondary-light)' }} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-6">
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
              Technologies We Use
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Modern, industry-leading technologies for robust and scalable solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-xl border transition-colors" style={{
                  background: 'rgba(17, 17, 17, 0.5)',
                  borderColor: '#2a2a2a'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2a2a2a'}
              >
                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--secondary)' }}>{tech.category}</h3>
                <ul className="space-y-2">
                  {tech.techs.map((t, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--secondary-light)' }} />
                      {t}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
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
              Our Development Process
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A proven approach that delivers quality results on time and within budget
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentProcess.map((process, index) => {
              const Icon = process.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -inset-0.5 rounded-2xl blur opacity-30" style={{
                    background: 'linear-gradient(to right, var(--primary-dark), var(--secondary))'
                  }} />
                  <div className="relative p-6 backdrop-blur-sm rounded-2xl border text-center" style={{
                    background: 'rgba(17, 17, 17, 0.9)',
                    borderColor: '#2a2a2a'
                  }}>
                    <div className="inline-flex p-3 rounded-xl mb-4" style={{
                      background: 'linear-gradient(to bottom right, var(--primary-dark), var(--secondary))'
                    }}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-4xl font-bold mb-2" style={{ color: 'rgba(185, 128, 37, 0.3)' }}>{process.step}</div>
                    <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                    <p className="text-gray-400 text-sm">{process.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
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
              Why Choose Techie Thrives
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex p-4 rounded-xl mb-4" style={{
                    background: 'linear-gradient(to bottom right, var(--primary-dark), var(--secondary))'
                  }}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Build Your Application?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss your project and create a powerful solution that drives your business forward
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform" style={{
                    background: 'linear-gradient(to right, var(--primary-dark), var(--secondary))',
                    boxShadow: '0 10px 25px -5px rgba(0, 43, 39, 0.3)'
                  }}
                >
                  Start Your Project
                </a>
                <a
                  href="/portfolio"
                  className="px-8 py-4 border-2 rounded-full font-semibold text-lg transition-all" style={{
                    borderColor: 'var(--secondary)',
                    background: 'transparent'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(185, 128, 37, 0.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
