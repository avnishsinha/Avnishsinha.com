export default function WhatYouGet() {
  const features = [
    {
      title: "1-Page Modern Website",
      description: "Clean, professional design that puts your business front and center"
    },
    {
      title: "Mobile-First Design",
      description: "Looks perfect on every device, from phones to desktops"
    },
    {
      title: "WhatsApp Integration",
      description: "One-tap contact button so customers reach you instantly"
    },
    {
      title: "Click-to-Call Button",
      description: "Make it easy for customers to call you directly"
    },
    {
      title: "Contact Form",
      description: "Collect inquiries even when you're offline"
    },
    {
      title: "SEO-Ready Setup",
      description: "Basic optimization to help you show up on Google"
    },
    {
      title: "Fast Loading Speed",
      description: "Built for performance, not bloat"
    },
    {
      title: "7-Day Delivery",
      description: "From start to launch in one week, guaranteed"
    }
  ]

  return (
    <section className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-4">
            The Package
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            What You Get
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Everything you need to establish your online presence. No fluff, no extras you don't need.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 border border-white/10 hover:border-accent/30 bg-black/50 hover:bg-black/70 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                {/* Checkmark icon */}
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-1">
                  <svg 
                    className="w-4 h-4 text-accent" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-16 text-center">
          <p className="text-white/40 text-sm">
            All websites are hosted on reliable infrastructure and include basic analytics.
          </p>
        </div>
      </div>
    </section>
  )
}
