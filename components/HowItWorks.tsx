export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Quick Chat",
      description: "We talk about your business, what you need, and what you want to say to your customers.",
      duration: "15 minutes"
    },
    {
      number: "02",
      title: "I Build It",
      description: "You send me content (text, photos, contact info). I design and build your website.",
      duration: "3-4 days"
    },
    {
      number: "03",
      title: "You Review",
      description: "I send you a preview link. You tell me what to change. We get it perfect.",
      duration: "1-2 days"
    },
    {
      number: "04",
      title: "Launch",
      description: "Your website goes live. I send you a guide on how to update it yourself.",
      duration: "1 day"
    }
  ]

  return (
    <section className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-4">
            The Process
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Simple, transparent, and built around your schedule.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row gap-8 items-start group"
            >
              {/* Step number */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 flex items-center justify-center border-2 border-accent/30 group-hover:border-accent transition-all duration-300">
                  <span className="font-display text-2xl font-bold text-accent">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pb-8 border-b border-white/10 last:border-0">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="font-display text-3xl font-bold group-hover:text-accent transition-colors mb-2 md:mb-0">
                    {step.title}
                  </h3>
                  <span className="text-white/40 text-sm uppercase tracking-wider">
                    {step.duration}
                  </span>
                </div>
                <p className="text-white/60 text-lg leading-relaxed max-w-3xl">
                  {step.description}
                </p>
              </div>

              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-10 w-0.5 h-full bg-white/5 ml-10 mt-20"></div>
              )}
            </div>
          ))}
        </div>

        {/* Timeline note */}
        <div className="mt-16 text-center p-6 bg-black/50 border border-accent/20">
          <p className="text-white/80 font-medium">
            <span className="text-accent font-bold">Total timeline: 7 days</span> from kickoff to live website
          </p>
        </div>
      </div>
    </section>
  )
}
