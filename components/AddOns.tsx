import { getWhatsAppLink, siteConfig } from '@/config/site'

export default function AddOns() {
  const addons = [
    {
      title: "Custom Domain Setup",
      description: "I'll help you buy and connect a .com or .in domain",
      price: "₹1,500"
    },
    {
      title: "Logo Design",
      description: "Simple, clean logo for your business",
      price: "₹3,000"
    },
    {
      title: "Additional Pages",
      description: "Add more pages (About, Services, Blog, etc.)",
      price: "₹2,500/page"
    },
    {
      title: "Google My Business Setup",
      description: "Get your business listed on Google Maps",
      price: "₹2,000"
    },
    {
      title: "Professional Photography",
      description: "Stock photos curated for your industry",
      price: "₹1,000"
    },
    {
      title: "Monthly Updates",
      description: "I'll handle content updates for you",
      price: "₹2,000/month"
    }
  ]

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-4">
            Optional Extras
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Add-Ons
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Need more? Choose what makes sense for your business.
          </p>
        </div>

        {/* Add-ons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {addons.map((addon, index) => (
            <div 
              key={index}
              className="p-8 bg-zinc-900/50 border border-white/10 hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display text-xl font-bold group-hover:text-accent transition-colors flex-1">
                  {addon.title}
                </h3>
                <span className="text-accent font-bold text-lg ml-4">
                  {addon.price}
                </span>
              </div>
              <p className="text-white/60 leading-relaxed">
                {addon.description}
              </p>
            </div>
          ))}
        </div>

        {/* Custom solution */}
        <div className="mt-16 max-w-3xl mx-auto p-8 border-2 border-accent/20 bg-zinc-950/50 text-center">
          <h3 className="font-display text-2xl font-bold mb-4">
            Need Something Custom?
          </h3>
          <p className="text-white/60 mb-6">
            Have a specific requirement? Let's discuss it. I'll give you an honest answer on whether I can help.
          </p>
          <a
            href={getWhatsAppLink(siteConfig.whatsappMessages.custom)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-black transition-all duration-300 font-semibold uppercase tracking-wider"
          >
            Ask About Custom Work
          </a>
        </div>
      </div>
    </section>
  )
}
