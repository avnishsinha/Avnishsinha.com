export default function SampleWork() {
  const samples = [
    {
      title: "Medical Clinic",
      category: "Healthcare",
      description: "Modern clinic website with appointment booking"
    },
    {
      title: "Law Firm",
      category: "Legal Services",
      description: "Professional legal practice showcase"
    },
    {
      title: "CA Practice",
      category: "Finance",
      description: "Clean, trustworthy accounting firm site"
    },
    {
      title: "Fitness Studio",
      category: "Wellness",
      description: "Energetic gym website with class schedule"
    },
    {
      title: "Consulting Business",
      category: "Business Services",
      description: "Corporate consultant portfolio and booking"
    },
    {
      title: "Local Restaurant",
      category: "Food & Beverage",
      description: "Menu showcase with online ordering link"
    }
  ]

  return (
    <section className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-4">
            Portfolio
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Sample Work
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Examples of websites I've built for different industries.
          </p>
        </div>

        {/* Sample cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {samples.map((sample, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              {/* Placeholder image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-zinc-800 to-zinc-900 mb-6 flex items-center justify-center border border-white/10 group-hover:border-accent/30 transition-all duration-300 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 border-2 border-white/20 rounded-full flex items-center justify-center group-hover:border-accent group-hover:scale-110 transition-all duration-300">
                    <svg 
                      className="w-8 h-8 text-white/40 group-hover:text-accent transition-colors" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                      />
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
                      />
                    </svg>
                  </div>
                  <p className="text-white/40 text-sm">View Sample</p>
                </div>
              </div>

              {/* Card content */}
              <div>
                <p className="text-accent text-xs uppercase tracking-wider mb-2">
                  {sample.category}
                </p>
                <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {sample.title}
                </h3>
                <p className="text-white/60">
                  {sample.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-16 text-center">
          <p className="text-white/50 text-sm max-w-2xl mx-auto">
            Note: These are sample layouts. Your website will be custom-designed based on your brand, content, and business needs.
          </p>
        </div>
      </div>
    </section>
  )
}
