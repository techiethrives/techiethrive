'use client'

import { motion } from 'framer-motion'
import { 
  FileText, 
  Code, 
  BookOpen, 
  Layers,
  CheckCircle,
  Zap,
  Users,
  Target,
  GitBranch,
  Search,
  Edit,
  Shield
} from 'lucide-react'

const documentationTypes = [
  {
    icon: Code,
    title: 'Technical Documentation',
    description: 'Comprehensive API docs, code comments, architecture guides, and developer documentation for your software projects',
    deliverables: ['API Reference', 'Code Documentation', 'System Architecture', 'Database Schema'],
    color: `linear-gradient(to bottom right, var(--primary-dark), var(--secondary-dark))`
  },
  {
    icon: BookOpen,
    title: 'User Documentation',
    description: 'Easy-to-follow user guides, tutorials, FAQs, and help centers that empower your customers to use your products',
    deliverables: ['User Manuals', 'Quick Start Guides', 'Video Tutorials', 'FAQ Knowledge Base'],
    color: `linear-gradient(to bottom right, var(--secondary-light), var(--secondary-lightest))`
  },
  {
    icon: Layers,
    title: 'Project Documentation',
    description: 'Complete project specs, requirements, roadmaps, and workflow documentation for effective team collaboration',
    deliverables: ['Requirements Docs', 'Project Plans', 'Process Workflows', 'Sprint Documentation'],
    color: `linear-gradient(to bottom right, var(--secondary), var(--secondary-dark))`
  },
  {
    icon: FileText,
    title: 'Process Documentation',
    description: 'Standard operating procedures, best practices, and internal processes that ensure consistency across your organization',
    deliverables: ['SOPs', 'Best Practices', 'Training Materials', 'Onboarding Guides'],
    color: `linear-gradient(to bottom right, var(--primary-dark), var(--secondary))`
  },
]

const benefits = [
  {
    icon: Users,
    title: 'Better Collaboration',
    description: 'Clear documentation helps teams work together efficiently with shared understanding'
  },
  {
    icon: Zap,
    title: 'Faster Onboarding',
    description: 'New team members get up to speed quickly with comprehensive documentation'
  },
  {
    icon: Target,
    title: 'Reduced Support Load',
    description: 'Well-documented products mean fewer support tickets and customer questions'
  },
  {
    icon: Shield,
    title: 'Knowledge Preservation',
    description: 'Critical information stays accessible even when team members leave'
  },
]

const ourApproach = [
  {
    step: '01',
    title: 'Discovery & Analysis',
    description: 'We analyze your project, audience, and documentation needs to create a tailored plan',
    icon: Search
  },
  {
    step: '02',
    title: 'Content Creation',
    description: 'Our technical writers create clear, accurate, and engaging documentation',
    icon: Edit
  },
  {
    step: '03',
    title: 'Review & Validation',
    description: 'Subject matter experts review for technical accuracy and completeness',
    icon: CheckCircle
  },
  {
    step: '04',
    title: 'Maintenance & Updates',
    description: 'Ongoing updates to keep documentation current as your product evolves',
    icon: GitBranch
  },
]

const features = [
  'Clear, concise writing',
  'Visual diagrams & screenshots',
  'Code examples & snippets',
  'Version control integration',
  'Search-optimized content',
  'Multi-format delivery',
  'Interactive tutorials',
  'Regular updates',
]

const documentationStandards = [
  { standard: 'Markdown', description: 'Clean, version-controlled documentation' },
  { standard: 'HTML/CSS', description: 'Custom web-based documentation sites' },
  { standard: 'PDF', description: 'Professional downloadable guides' },
  { standard: 'Video', description: 'Visual tutorials and walkthroughs' },
  { standard: 'Interactive', description: 'Live demos and code playgrounds' },
  { standard: 'API Specs', description: 'OpenAPI, Swagger, Postman collections' },
]

export default function DocumentationPage() {
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
              Professional Documentation Services
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Crystal-clear documentation that empowers users, supports developers, and drives product success
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Documentation */}
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
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl" style={{
                background: 'linear-gradient(to bottom right, var(--primary-dark), var(--secondary))'
              }}>
                <BookOpen className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Why Documentation Matters</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  <span className="font-semibold" style={{ color: 'var(--secondary)' }}>Documentation</span> is the foundation of successful software development and product adoption. It bridges the gap between creators and users, ensuring everyone understands how to build, use, and maintain your products effectively.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  At Techie Thrives, we create <span style={{ color: 'var(--secondary-light)' }}>comprehensive, accessible, and maintainable documentation</span> that serves developers, end-users, and stakeholders alike—reducing confusion, accelerating adoption, and ensuring long-term project success.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documentation Types */}
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
              Documentation Services We Provide
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive documentation solutions for every aspect of your digital products
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {documentationTypes.map((type, index) => {
              const Icon = type.icon
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
                    background: type.color
                  }} />
                  <div className="relative p-8 backdrop-blur-sm rounded-2xl border transition-all duration-300 h-full" style={{
                    background: 'rgba(17, 17, 17, 0.9)',
                    borderColor: '#2a2a2a'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2a2a2a'}
                  >
                    <div className="inline-flex p-4 rounded-xl mb-4" style={{
                      background: type.color
                    }}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{type.title}</h3>
                    <p className="text-gray-400 mb-6">{type.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold mb-3" style={{ color: 'var(--secondary)' }}>Deliverables:</p>
                      {type.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4" style={{ color: 'var(--secondary-light)' }} />
                          <span>{item}</span>
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

      {/* Our Approach */}
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
              Our Documentation Process
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A systematic approach to creating documentation that truly serves its purpose
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ourApproach.map((process, index) => {
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

      {/* Benefits */}
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
              Benefits of Quality Documentation
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Why investing in documentation pays dividends
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
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
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features & Standards */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent" style={{
                backgroundImage: 'linear-gradient(to right, var(--primary-dark), var(--secondary))'
              }}>
                Documentation Features
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--secondary-light)' }} />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Standards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent" style={{
                backgroundImage: 'linear-gradient(to right, var(--primary-dark), var(--secondary))'
              }}>
                Formats & Standards
              </h2>
              <div className="space-y-4">
                {documentationStandards.map((standard, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="p-4 rounded-lg border" style={{
                      background: 'rgba(17, 17, 17, 0.5)',
                      borderColor: '#2a2a2a'
                    }}
                  >
                    <h4 className="font-bold mb-1" style={{ color: 'var(--secondary)' }}>{standard.standard}</h4>
                    <p className="text-sm text-gray-400">{standard.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Techie Thrives Advantage */}
      <section className="py-20 px-6" style={{
        background: 'linear-gradient(to bottom, var(--primary-black), #111111)'
      }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent" style={{
              backgroundImage: 'linear-gradient(to right, var(--primary-dark), var(--secondary))'
            }}>
              Techie Thrives Documentation Advantage
            </h2>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                Unlike generic documentation services, Techie Thrives combines <span className="font-semibold" style={{ color: 'var(--secondary)' }}>technical expertise</span> with <span className="font-semibold" style={{ color: 'var(--secondary-light)' }}>excellent communication skills</span>. Our team includes developers who understand code, designers who value clarity, and writers who know how to explain complex concepts simply.
              </p>
              <p className="text-lg leading-relaxed">
                We don't just document what exists—we actively improve your product by identifying gaps, suggesting better user flows, and ensuring your documentation becomes a valuable asset that drives adoption and reduces support costs.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border" style={{
                  background: 'linear-gradient(to right, rgba(0, 43, 39, 0.1), rgba(138, 102, 14, 0.1))',
                  borderColor: 'rgba(0, 43, 39, 0.2)'
                }}>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--secondary)' }}>For Developers</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><span style={{ color: 'var(--secondary)' }}>→</span> API documentation & code examples</li>
                    <li className="flex gap-2"><span style={{ color: 'var(--secondary)' }}>→</span> Architecture & design patterns</li>
                    <li className="flex gap-2"><span style={{ color: 'var(--secondary)' }}>→</span> Integration guides & SDKs</li>
                  </ul>
                </div>
                <div className="p-6 rounded-xl border" style={{
                  background: 'linear-gradient(to right, rgba(175, 183, 67, 0.1), rgba(247, 223, 120, 0.1))',
                  borderColor: 'rgba(175, 183, 67, 0.2)'
                }}>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--secondary-light)' }}>For End Users</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><span style={{ color: 'var(--secondary-light)' }}>→</span> Step-by-step tutorials</li>
                    <li className="flex gap-2"><span style={{ color: 'var(--secondary-light)' }}>→</span> Video walkthroughs</li>
                    <li className="flex gap-2"><span style={{ color: 'var(--secondary-light)' }}>→</span> FAQ & troubleshooting</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
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
                Ready for Better Documentation?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Let Techie Thrives create documentation that empowers your users and supports your product's success
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
                  View Examples
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
