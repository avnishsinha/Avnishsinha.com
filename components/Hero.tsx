import { siteConfig, getWhatsAppLink } from '@/config/site'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Pre-headline */}
        <p className="text-accent text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-medium">
          For Indian Businesses
        </p>

        {/* Main headline */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
          Your Website.
          <br />
          <span className="text-white/60">In 7 Days.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
          A modern, mobile-first website that works as hard as you do. 
          No agency BS. No months of waiting. Just results.
        </p>

        {/* Price */}
        <div className="mb-12">
          <p className="text-white/50 text-sm uppercase tracking-wider mb-2">Starting at</p>
          <p className="font-display text-4xl md:text-5xl font-bold">
            {siteConfig.pricing.starting}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 bg-accent text-black font-bold text-lg uppercase tracking-wider hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-accent/20"
          >
            Let's Talk on WhatsApp
          </a>

          <a
            href={siteConfig.calendlyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 border-2 border-white/20 text-white font-semibold text-lg uppercase tracking-wider hover:border-white/40 hover:bg-white/5 transition-all duration-300"
          >
            Book 15-Min Call
          </a>
        </div>

        {/* Social proof hint */}
        <p className="mt-12 text-white/40 text-sm">
          ✓ Delivered on time  ✓ Mobile-first  ✓ SEO-ready
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
    </section>
  )
}
