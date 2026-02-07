export default function WhoItsFor() {
  const audiences = [
    {
      title: "Medical Professionals",
      description: "Doctors, dentists, clinics",
      examples: "Show services, timings, location, book appointments"
    },
    {
      title: "Legal Services",
      description: "Lawyers, advocates, legal consultants",
      examples: "Practice areas, credentials, consultation booking"
    },
    {
      title: "CA & Financial Services",
      description: "Chartered accountants, tax consultants",
      examples: "Services offered, credentials, client testimonials"
    },
    {
      title: "Local Services",
      description: "Salons, gyms, repair shops, tutors",
      examples: "Services, pricing, contact, location"
    },
    {
      title: "Early-Stage Startups",
      description: "New businesses needing online presence",
      examples: "Product/service showcase, team info, lead capture"
    },
    {
      title: "Consultants & Coaches",
      description: "Business coaches, career consultants",
      examples: "Expertise, testimonials, booking system"
    }
  ]

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-4">
            Perfect For
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Who It's For
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Built for professionals and businesses who need results, not complexity.
          </p>
        </div>

        {/* Audience grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="p-8 bg-zinc-900/50 border border-white/5 hover:border-accent/20 transition-all duration-300 group"
            >
              <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                {audience.title}
              </h3>
              <p className="text-white/70 mb-4 font-medium">
                {audience.description}
              </p>
              <p className="text-white/40 text-sm leading-relaxed">
                {audience.examples}
              </p>
            </div>
          ))}
        </div>

        {/* Not for */}
        <div className="max-w-3xl mx-auto p-8 border border-white/10 bg-zinc-950/50">
          <h3 className="font-display text-xl font-bold mb-4 text-white/80">
            This is NOT for you if:
          </h3>
          <ul className="space-y-2 text-white/50">
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">✕</span>
              <span>You need an e-commerce store with payment gateway</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">✕</span>
              <span>You want a multi-page corporate website with CMS</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">✕</span>
              <span>You need custom features or third-party integrations</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
