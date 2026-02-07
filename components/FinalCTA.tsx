import { siteConfig, getWhatsAppLink } from '@/config/site'

export default function FinalCTA() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-zinc-950 to-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Pre-headline */}
        <p className="text-accent text-sm uppercase tracking-[0.3em] mb-6">
          Ready to Start?
        </p>

        {/* Headline */}
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          Your Business Deserves
          <br />
          <span className="text-accent">a Real Website</span>
        </h2>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          Stop losing customers to competitors with better online presence.
          Let's build yours in 7 days.
        </p>

        {/* Value props */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-white/60">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>7-Day Delivery Guaranteed</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Mobile-First Design</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Starting at {siteConfig.pricing.starting}</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href={getWhatsAppLink(siteConfig.whatsappMessages.getStarted)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 bg-accent text-black font-bold text-lg uppercase tracking-wider hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-xl shadow-accent/20"
          >
            Start on WhatsApp →
          </a>

          <a
            href={siteConfig.calendlyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 border-2 border-white/20 text-white font-semibold text-lg uppercase tracking-wider hover:border-white/40 hover:bg-white/5 transition-all duration-300"
          >
            Book a Call
          </a>
        </div>

        {/* Trust element */}
        <p className="text-white/40 text-sm">
          No long contracts. No hidden fees. Just a website that works.
        </p>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-24 pt-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm">
          <p>© 2026 Avnish Sinha. All rights reserved.</p>
          <div className="flex gap-6">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-accent transition-colors">
              Email
            </a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              LinkedIn
            </a>
            <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
