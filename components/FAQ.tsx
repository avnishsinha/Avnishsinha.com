'use client'

import { useState } from 'react'
import { getWhatsAppLink, siteConfig } from '@/config/site'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Why only 1 page?",
      answer: "Most small businesses need to communicate who they are, what they do, and how to contact them. One well-designed page does this better than a confusing multi-page site. If you need more later, we can add pages as an add-on."
    },
    {
      question: "Can I update the website myself later?",
      answer: "Yes. I'll send you a simple guide showing how to make basic updates. For bigger changes, you can hire me on a monthly retainer."
    },
    {
      question: "What if I don't have photos or content ready?",
      answer: "No problem. I'll help you write the content and suggest stock photos that fit your business. We'll work together to make it look professional."
    },
    {
      question: "Do you handle domain and hosting?",
      answer: "I can guide you through buying a domain, or do it for you as an add-on. Hosting is included for the first year (via Vercel), which is fast and reliable."
    },
    {
      question: "What about payment terms?",
      answer: "50% upfront to start, 50% before launch. Simple."
    },
    {
      question: "Can I see examples of your work?",
      answer: "Check the 'Sample Work' section above. If you want to see live sites or need references, just ask on WhatsApp."
    },
    {
      question: "What if I need changes after launch?",
      answer: "Minor tweaks within the first week are free. After that, I offer monthly support packages or one-time updates at ₹500/hour."
    },
    {
      question: "How do you guarantee 7-day delivery?",
      answer: "I limit the number of projects I take on. When I commit to you, you get my full attention. If I'm delayed, you get a refund."
    },
    {
      question: "Will my website work on phones?",
      answer: "Yes. Every website is built mobile-first. In India, most of your customers will visit from their phones, so that's my priority."
    },
    {
      question: "Do I own the website after it's done?",
      answer: "100%. You own all the code, design, and content. No lock-in, no recurring fees unless you want support."
    }
  ]

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-4">
            Questions?
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            FAQ
          </h2>
          <p className="text-white/60 text-lg">
            Everything you need to know before we start.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-white/10 bg-zinc-950/50 hover:border-accent/30 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="font-bold text-lg pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 flex-shrink-0 text-accent transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-6 text-white/60 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-16 text-center p-8 border border-white/10 bg-zinc-900/30">
          <h3 className="font-display text-xl font-bold mb-4">
            Still Have Questions?
          </h3>
          <p className="text-white/60 mb-6">
            I'm happy to answer anything. No sales pressure, just honest answers.
          </p>
          <a
            href={getWhatsAppLink(siteConfig.whatsappMessages.question)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-accent text-black font-semibold uppercase tracking-wider hover:bg-accent/90 transition-all duration-300"
          >
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
