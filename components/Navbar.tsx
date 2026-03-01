'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const isActive = (path: string) => pathname === path

  return (
    <header className="fixed top-0 w-full z-50 bg-background-light dark:bg-background-dark border-b-2 border-black dark:border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity z-50">
          <div className="bg-primary p-1">
            <span className="material-symbols-outlined text-white font-bold leading-none text-base sm:text-xl">terminal</span>
          </div>
          <h2 className="text-base sm:text-xl font-800 tracking-tighter uppercase">avnishsinha.com</h2>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 lg:gap-8 uppercase text-sm font-bold tracking-widest">
          <Link 
            href="/projects" 
            className={`transition-colors ${isActive('/projects') ? 'text-primary' : 'hover:text-primary'}`}
          >
            Projects
          </Link>
          <Link 
            href="/about" 
            className={`transition-colors ${isActive('/about') ? 'text-primary' : 'hover:text-primary'}`}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className={`transition-colors ${isActive('/contact') ? 'text-primary' : 'hover:text-primary'}`}
          >
            Contact
          </Link>
        </nav>
        
        <div className="flex items-center gap-3">
          <a 
            href="https://calendly.com/avnishkumarsinha69/30min" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden sm:block bg-primary text-white px-4 sm:px-6 py-2 text-xs sm:text-sm font-bold uppercase tracking-tighter hover:bg-white hover:text-primary border-2 border-primary transition-all"
          >
            Book Now
          </a>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden z-50 p-2 hover:bg-primary transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[57px] sm:top-[65px] bg-black/95 backdrop-blur-lg z-40">
          <nav className="flex flex-col items-center justify-center h-full gap-8 px-6">
            <Link 
              href="/projects" 
              onClick={() => setMobileMenuOpen(false)}
              className={`text-3xl font-800 uppercase tracking-tighter transition-colors ${isActive('/projects') ? 'text-primary' : 'hover:text-primary'}`}
            >
              Projects
            </Link>
            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className={`text-3xl font-800 uppercase tracking-tighter transition-colors ${isActive('/about') ? 'text-primary' : 'hover:text-primary'}`}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className={`text-3xl font-800 uppercase tracking-tighter transition-colors ${isActive('/contact') ? 'text-primary' : 'hover:text-primary'}`}
            >
              Contact
            </Link>
            <a 
              href="https://calendly.com/avnishkumarsinha69/30min" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-8 bg-primary text-white px-10 py-4 text-xl font-bold uppercase tracking-tighter hover:bg-white hover:text-primary border-2 border-primary transition-all"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
