'use client'

import { motion } from 'framer-motion'

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-gray-400 mb-8">Last updated: November 15, 2025</p>

            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
                <p className="leading-relaxed">
                  Welcome to Techie Thrives's Privacy Policy. We are committed to protecting and respecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                <p className="leading-relaxed mb-4">We may collect and process the following data about you:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Information you provide when filling out forms on our website</li>
                  <li>Records of correspondence if you contact us</li>
                  <li>Details of your visits to our website and the resources you access</li>
                  <li>Technical data including IP address, browser type, and device information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                <p className="leading-relaxed mb-4">We use your information for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>To provide and deliver the services you request</li>
                  <li>To respond to your inquiries and support requests</li>
                  <li>To send you important updates about our services</li>
                  <li>To improve our website and user experience</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Your data is transmitted securely using encryption protocols.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Cookies</h2>
                <p className="leading-relaxed">
                  Our website uses cookies to improve your experience. You can control cookie settings through your browser. For more information, please see our Cookie Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
                <p className="leading-relaxed mb-4">Under data protection laws, you have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate or incomplete data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Request restriction of processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
                <p className="leading-relaxed">
                  We may use third-party services for analytics and payment processing. These services have their own privacy policies and we are not responsible for their practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
                <p className="leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4 p-4 rounded-lg border" style={{
                  background: 'rgba(17, 17, 17, 0.5)',
                  borderColor: '#2a2a2a'
                }}>
                  <p>Email: techiethrives@gmail.com</p>
                  <p>Phone: +91 8000 520 687</p>
                  <p>Address: 1st floor, above santosh bakers dadabari extension, Kota Raj. 324009</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
