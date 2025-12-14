'use client'

import { motion } from 'framer-motion'

export default function CookiePolicyPage() {
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
              Cookie Policy
            </h1>
            <p className="text-gray-400 mb-8">Last updated: November 15, 2025</p>

            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies</h2>
                <p className="leading-relaxed">
                  Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
                <p className="leading-relaxed mb-4">We use cookies for several purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Essential cookies: Required for the website to function properly</li>
                  <li>Analytics cookies: Help us understand how visitors use our website</li>
                  <li>Functionality cookies: Remember your preferences and settings</li>
                  <li>Marketing cookies: Track your browsing habits to show relevant ads</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies We Use</h2>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-lg border" style={{
                    background: 'rgba(17, 17, 17, 0.5)',
                    borderColor: '#2a2a2a'
                  }}>
                    <h3 className="font-bold text-white mb-2">Session Cookies</h3>
                    <p>Temporary cookies that expire when you close your browser. These help us maintain your session as you navigate through our website.</p>
                  </div>

                  <div className="p-4 rounded-lg border" style={{
                    background: 'rgba(17, 17, 17, 0.5)',
                    borderColor: '#2a2a2a'
                  }}>
                    <h3 className="font-bold text-white mb-2">Persistent Cookies</h3>
                    <p>Remain on your device for a set period or until you delete them. These remember your preferences for future visits.</p>
                  </div>

                  <div className="p-4 rounded-lg border" style={{
                    background: 'rgba(17, 17, 17, 0.5)',
                    borderColor: '#2a2a2a'
                  }}>
                    <h3 className="font-bold text-white mb-2">Third-Party Cookies</h3>
                    <p>Set by external services we use, such as Google Analytics, to help us improve our website performance and user experience.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
                <p className="leading-relaxed mb-4">
                  You can control and manage cookies in various ways:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Browser settings: Most browsers allow you to refuse or delete cookies</li>
                  <li>Opt-out tools: You can use industry opt-out tools for advertising cookies</li>
                  <li>Privacy settings: Adjust your preferences in our cookie consent banner</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Please note that disabling certain cookies may impact the functionality of our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Cookie Consent</h2>
                <p className="leading-relaxed">
                  We obtain your consent before placing non-essential cookies on your device. You can withdraw your consent at any time by changing your cookie preferences or contacting us directly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
                <p className="leading-relaxed">
                  We may update this Cookie Policy to reflect changes in our practices or legal requirements. Please check this page regularly for updates.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="leading-relaxed mb-4">
                  If you have questions about our use of cookies, please contact us:
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
