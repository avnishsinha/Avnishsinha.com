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
    default: 'Avnishsinha.com',
    template: '%s | Avnish Sinha',
  },
  description: 'Independent Software Engineer designing and building scalable digital infrastructure. Premium software engineering solutions for modern businesses.',
  keywords: ['software engineer', 'web development', 'application development', 'digital strategy', 'scalable systems', 'independent developer'],
  authors: [{ name: 'Avnish Sinha' }],
  creator: 'Avnish Sinha',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://avnishsinha.com',
    title: 'Avnishsinha.com - Independent Software Engineer',
    description: 'Designing and building scalable digital infrastructure.',
    siteName: 'Avnish Sinha',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avnishsinha.com - Independent Software Engineer',
    description: 'Designing and building scalable digital infrastructure.',
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
