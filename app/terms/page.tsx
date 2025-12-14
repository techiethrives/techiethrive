'use client'

import { motion } from 'framer-motion'

export default function TermsPage() {
  return (
    <main className="min-h-screen text-white" style={{ background: 'var(--primary-black)' }}>
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent" style={{
              backgroundImage: 'linear-gradient(to right, var(--primary-dark), var(--secondary))'
            }}>
              Terms of Service
            </h1>
            <p className="text-gray-400 mb-8">Last updated: November 15, 2025</p>

            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                <p className="leading-relaxed">
                  By accessing and using Techie Thrives's services, you accept and agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
                <p className="leading-relaxed mb-4">
                  Permission is granted to temporarily access the materials on Techie Thrives's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>Attempt to decompile or reverse engineer any software</li>
                  <li>Remove any copyright or proprietary notations</li>
                  <li>Transfer the materials to another person</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Services</h2>
                <p className="leading-relaxed">
                  Techie Thrives provides digital services including web development, app development, branding, video production, and related services. All services are subject to availability and we reserve the right to modify or discontinue services without notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. User Accounts</h2>
                <p className="leading-relaxed">
                  When you create an account with us, you must provide accurate, complete information. You are responsible for safeguarding your password and for all activities under your account. You must notify us immediately of any unauthorized use.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Payments and Pricing</h2>
                <p className="leading-relaxed">
                  Prices for our services are subject to change without notice. Payment terms will be specified in individual service agreements. All payments must be made in full before delivery of services unless otherwise agreed in writing.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Intellectual Property</h2>
                <p className="leading-relaxed">
                  All content, features, and functionality on our website are owned by Techie Thrives and are protected by international copyright, trademark, and other intellectual property laws. Upon full payment, clients receive ownership of deliverables as specified in individual service agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
                <p className="leading-relaxed">
                  In no event shall Techie Thrives be liable for any damages arising out of the use or inability to use our services, even if we have been advised of the possibility of such damages. This includes but is not limited to indirect, incidental, or consequential damages.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Termination</h2>
                <p className="leading-relaxed">
                  We may terminate or suspend access to our services immediately, without prior notice, for any reason, including if you breach these Terms. Upon termination, your right to use the services will immediately cease.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Governing Law</h2>
                <p className="leading-relaxed">
                  These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions. Any disputes shall be resolved in the courts of the jurisdiction where Techie Thrives operates.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Changes to Terms</h2>
                <p className="leading-relaxed">
                  We reserve the right to modify these terms at any time. We will provide notice of significant changes by posting the new Terms of Service on this page with an updated revision date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                <p className="leading-relaxed mb-4">
                  If you have any questions about these Terms, please contact us:
                </p>
                <div className="p-4 rounded-lg border" style={{
                  background: 'rgba(17, 17, 17, 0.5)',
                  borderColor: '#2a2a2a'
                }}>
                  <p>Email: techiethrives@gmail.com</p>
                  <p>Phone: +91 8000 520 687</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
