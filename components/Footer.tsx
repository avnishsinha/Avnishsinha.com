'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Footer() {
  const [emailCopied, setEmailCopied] = useState(false)

  const handleEmailClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    try {
      await navigator.clipboard.writeText('avnishkumarsinha69@gmail.com')
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    } catch (err) {
      window.location.href = 'mailto:avnishkumarsinha69@gmail.com'
    }
  }
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white border-t-2 border-white px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 sm:gap-10 md:gap-12">
        <div className="max-w-md">
          <h2 className="text-3xl sm:text-4xl font-800 uppercase tracking-tighter mb-4 sm:mb-6">Let&apos;s build.</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-500 font-medium">
            Stop waiting for agencies to &quot;get back to you.&quot; Get your business online this week.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-10 sm:gap-16 md:gap-20">
          <div>
            <h5 className="font-800 uppercase tracking-widest text-xs sm:text-sm mb-4 sm:mb-6 text-primary">Contact</h5>
            <ul className="space-y-3 sm:space-y-4 font-bold uppercase text-xs sm:text-sm">
              <li>
                <a 
                  className="hover:underline cursor-pointer" 
                  href="mailto:avnishkumarsinha69@gmail.com"
                  onClick={handleEmailClick}
                  title={emailCopied ? 'Email copied!' : 'Click to copy email'}
                >
                  {emailCopied ? 'Email Copied!' : 'Email'}
                </a>
              </li>
              <li>
                <a className="hover:underline" href="https://www.linkedin.com/in/avnishkumarsinha/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a className="hover:underline" href="https://github.com/avnishsinha" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a className="hover:underline" href="https://www.instagram.com/avnish_7742/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a className="hover:underline" href="https://calendly.com/avnishkumarsinha69/30min" target="_blank" rel="noopener noreferrer">
                  Calendly
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-800 uppercase tracking-widest text-xs sm:text-sm mb-4 sm:mb-6 text-primary">Quick Links</h5>
            <ul className="space-y-3 sm:space-y-4 font-bold uppercase text-xs sm:text-sm">
              <li>
                <Link href="/projects" className="hover:underline">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/legal" className="hover:underline">
                  Legal
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-10 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-500">
        <span>© {currentYear} AVNISH SINHA</span>
        <span>NO EXCUSES.</span>
      </div>
    </footer>
  )
}
