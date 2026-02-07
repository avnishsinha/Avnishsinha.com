'use client'

import { useEffect, useState } from 'react'
import { siteConfig } from '@/config/site'

export default function EntryGate({ onEnter }: { onEnter: () => void }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Check if user already entered this session
    if (sessionStorage.getItem('entered') === 'true') {
      setIsVisible(false)
    }
  }, [])

  const handleEnter = () => {
    sessionStorage.setItem('entered', 'true')
    setIsVisible(false)
    onEnter()
  }

  if (!isVisible) return null

  return (
    <div 
      className={`fixed inset-0 z-50 bg-black flex flex-col items-center justify-center transition-opacity duration-700 ${
        !isVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Logo */}
      <div className="mb-12 text-center">
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.3em] text-white/90 uppercase mb-2">
          {siteConfig.businessName.toUpperCase()}
        </h1>
        <p className="text-sm tracking-[0.2em] text-white/40 uppercase">
          {siteConfig.tagline}
        </p>
      </div>

      {/* Enter Button */}
      <button
        onClick={handleEnter}
        className="group relative px-12 py-4 font-display text-xl font-semibold tracking-[0.2em] text-white uppercase border-2 border-white/50 hover:border-white transition-all duration-300 hover:scale-105 overflow-hidden"
      >
        <span className="relative z-10">[ ENTER ]</span>
        
        {/* Hover effect background */}
        <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center rounded-full"></div>
      </button>

      {/* Footer */}
      <div className="absolute bottom-8 text-white/30 text-sm tracking-[0.1em] font-light">
        © 2026 — PORTFOLIO
      </div>
    </div>
  )
}
