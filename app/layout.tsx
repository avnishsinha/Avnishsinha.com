import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://avnishsinha.com'),
  title: {
    default: 'Avnish Sinha - Website in 7 Days | Rapid Solo Development',
    template: '%s | Avnish Sinha',
  },
  description: 'I build high-performance websites in 7 days. No excuses. Professional solo development for serious businesses.',
  keywords: ['web development', 'rapid development', 'solo developer', 'freelance developer', 'website in 7 days'],
  authors: [{ name: 'Avnish Sinha' }],
  creator: 'Avnish Sinha',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://avnishsinha.com',
    title: 'Avnish Sinha - Website in 7 Days',
    description: 'I build high-performance websites in 7 days. No excuses.',
    siteName: 'Avnish Sinha',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avnish Sinha - Website in 7 Days',
    description: 'I build high-performance websites in 7 days. No excuses.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${spaceGrotesk.variable} font-display antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
