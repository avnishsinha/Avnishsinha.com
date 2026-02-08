'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  
  const isActive = (path: string) => pathname === path

  return (
    <header className="fixed top-0 w-full z-50 bg-background-light dark:bg-background-dark border-b-2 border-black dark:border-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="bg-primary p-1">
            <span className="material-symbols-outlined text-white font-bold leading-none">terminal</span>
          </div>
          <h2 className="text-xl font-800 tracking-tighter uppercase">avnishsinha.com</h2>
        </Link>
        
        <nav className="hidden md:flex gap-8 uppercase text-sm font-bold tracking-widest">
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
        
        <a 
          href="https://calendly.com/avnishkumarsinha69/30min" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-primary text-white px-6 py-2 font-bold uppercase tracking-tighter hover:bg-white hover:text-primary border-2 border-primary transition-all"
        >
          Book Now
        </a>
      </div>
    </header>
  )
}
