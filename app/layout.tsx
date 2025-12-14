import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export const metadata: Metadata = {
  title: 'Techie Thrive | Digital Creation Agency',
  description: 'Where Curiosity Meets Creativity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<html lang="en" className="dark">
      <body className="bg-black text-white">
        <Navbar />
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}