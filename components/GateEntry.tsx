'use client'

import { useEffect, useState } from 'react'

export default function GateEntry() {
  const [isVisible, setIsVisible] = useState(true)
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    // Check if user has entered before (within 24 hours)
    const lastEntry = localStorage.getItem('siteEntryTime')
    const now = new Date().getTime()
    const oneDay = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

    if (lastEntry && now - parseInt(lastEntry) < oneDay) {
      // User entered within last 24 hours, don't show gate
      setShouldRender(false)
      return
    }
  }, [])

  const handleEnter = () => {
    // Save entry time to localStorage
    localStorage.setItem('siteEntryTime', new Date().getTime().toString())
    
    // Start fade out
    setIsVisible(false)
    
    // Remove from DOM after animation
    setTimeout(() => {
      setShouldRender(false)
    }, 500)
  }

  if (!shouldRender) return null

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black z-[9999] flex items-center justify-center transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="gate-content px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="bg-primary p-3">
            <span className="material-symbols-outlined text-white text-5xl font-bold leading-none">
              terminal
            </span>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-800 uppercase tracking-tighter mb-6">
          AVNISH SINHA
        </h1>
        
        <p className="text-2xl md:text-3xl text-gray-400 font-medium mb-12 tracking-wide">
          Just Another Backbencher who likes to build!
        </p>
        
        <button
          onClick={handleEnter}
          className="bg-primary text-white px-12 py-6 text-2xl font-800 uppercase tracking-tighter border-4 border-white hover:bg-white hover:text-primary transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(249,6,6,0.5)]"
        >
          Enter Site
        </button>
      </div>
    </div>
  )
}
