import './globals.css'
import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const oswald = Oswald({ 
  subsets: ['latin'],
  variable: '--font-oswald',
})

export const metadata: Metadata = {
  title: 'Avnish Sinha - Website in a Week | Modern Websites for Indian Businesses',
  description: 'Get a professional, mobile-first website for your business in just 7 days. Perfect for doctors, lawyers, CA firms, and startups. Starting at ₹8,000.',
  keywords: 'website design India, small business website, website in 7 days, affordable website, mobile website, professional website',
  authors: [{ name: 'Avnish Sinha' }],
  openGraph: {
    title: 'Avnish Sinha - Website in a Week',
    description: 'Modern websites for Indian businesses delivered in 7 days',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  )
}
