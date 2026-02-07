'use client'

import { useState } from 'react'
import EntryGate from '@/components/EntryGate'
import Hero from '@/components/Hero'
import WhatYouGet from '@/components/WhatYouGet'
import WhoItsFor from '@/components/WhoItsFor'
import HowItWorks from '@/components/HowItWorks'
import AddOns from '@/components/AddOns'
import SampleWork from '@/components/SampleWork'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  const [showContent, setShowContent] = useState(false)

  return (
    <>
      <EntryGate onEnter={() => setShowContent(true)} />
      
      {showContent && (
        <main className="min-h-screen">
          <Hero />
          <WhatYouGet />
          <WhoItsFor />
          <HowItWorks />
          <AddOns />
          <SampleWork />
          <FAQ />
          <FinalCTA />
          <WhatsAppButton />
        </main>
      )}
    </>
  )
}
