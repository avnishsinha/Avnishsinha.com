import GateEntry from '@/components/GateEntry'

export default function HomePage() {
  return (
    <>
      <GateEntry />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-center items-center px-6 py-20 text-center">
          <div className="inline-block bg-primary text-white px-4 py-1 mb-8 font-bold uppercase tracking-widest text-sm">
            Rapid Solo Development
          </div>
          
          <h1 className="text-6xl md:text-9xl font-800 leading-[0.9] tracking-tighter uppercase max-w-5xl mb-12">
            I build your website in <span className="text-primary italic">7 days.</span> No excuses.
          </h1>
          
          <p className="text-xl md:text-2xl font-medium max-w-2xl mb-12 text-gray-400">
            High-speed solo development. No bloated agencies. No-BS approach for serious businesses who need results yesterday.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 w-full max-w-xl">
            <a 
              href="mailto:avnishkumarsinha69@gmail.com" 
              className="flex-1 bg-white text-black py-6 text-xl font-800 uppercase tracking-tighter hover:bg-primary hover:text-white border-2 border-white hover:border-primary transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">mail</span>
              Email Me
            </a>
            <a 
              href="https://calendly.com/avnishkumarsinha69/30min" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 bg-transparent text-white py-6 text-xl font-800 uppercase tracking-tighter border-2 border-white hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">calendar_today</span>
              Calendly
            </a>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="px-6 py-24 border-y-2 border-white bg-white dark:bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <h2 className="text-5xl md:text-7xl font-800 uppercase tracking-tighter">What You Get</h2>
              <p className="text-xl text-primary font-bold uppercase tracking-widest">No-BS Deliverables</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-black dark:border-white">
              <div className="p-10 border-b-2 md:border-b-0 md:border-r-2 border-black dark:border-white hover:bg-primary group transition-colors">
                <span className="material-symbols-outlined text-4xl mb-6 group-hover:text-white">smartphone</span>
                <h3 className="text-2xl font-800 uppercase mb-4 group-hover:text-white">Mobile-first</h3>
                <p className="text-gray-500 group-hover:text-white/80">Pixel-perfect optimization for every screen size from day one.</p>
              </div>
              
              <div className="p-10 border-b-2 lg:border-b-0 lg:border-r-2 border-black dark:border-white hover:bg-primary group transition-colors">
                <span className="material-symbols-outlined text-4xl mb-6 group-hover:text-white">forum</span>
                <h3 className="text-2xl font-800 uppercase mb-4 group-hover:text-white">Direct Contact</h3>
                <p className="text-gray-500 group-hover:text-white/80">Multiple ways to reach out. Email, Calendly, LinkedIn. Your choice.</p>
              </div>
              
              <div className="p-10 border-b-2 md:border-b-0 md:border-r-2 border-black dark:border-white hover:bg-primary group transition-colors">
                <span className="material-symbols-outlined text-4xl mb-6 group-hover:text-white">search</span>
                <h3 className="text-2xl font-800 uppercase mb-4 group-hover:text-white">SEO-ready</h3>
                <p className="text-gray-500 group-hover:text-white/80">Foundational structures to rank higher on Google from launch.</p>
              </div>
              
              <div className="p-10 hover:bg-primary group transition-colors">
                <span className="material-symbols-outlined text-4xl mb-6 group-hover:text-white">bolt</span>
                <h3 className="text-2xl font-800 uppercase mb-4 group-hover:text-white">Lightning Fast</h3>
                <p className="text-gray-500 group-hover:text-white/80">Optimized code for high performance and low bounce rates.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who This Is For Section */}
        <section className="px-6 py-24" id="who">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-2 border-white">
              <div className="p-12 border-b-2 lg:border-b-0 lg:border-r-2 border-white bg-white dark:bg-zinc-900">
                <h3 className="text-4xl font-800 uppercase mb-10 text-black dark:text-white">FOR</h3>
                <ul className="space-y-6">
                  <li className="flex items-center gap-4 text-2xl font-bold italic uppercase tracking-tighter">
                    <span className="material-symbols-outlined text-primary font-black">check_circle</span>
                    Serious businesses
                  </li>
                  <li className="flex items-center gap-4 text-2xl font-bold italic uppercase tracking-tighter">
                    <span className="material-symbols-outlined text-primary font-black">check_circle</span>
                    Doctors &amp; Lawyers
                  </li>
                  <li className="flex items-center gap-4 text-2xl font-bold italic uppercase tracking-tighter">
                    <span className="material-symbols-outlined text-primary font-black">check_circle</span>
                    High-growth Startups
                  </li>
                  <li className="flex items-center gap-4 text-2xl font-bold italic uppercase tracking-tighter">
                    <span className="material-symbols-outlined text-primary font-black">check_circle</span>
                    Action-takers
                  </li>
                </ul>
              </div>
              <div className="p-12 bg-black">
                <h3 className="text-4xl font-800 uppercase mb-10 text-primary">NOT FOR</h3>
                <ul className="space-y-6">
                  <li className="flex items-center gap-4 text-2xl font-bold italic uppercase tracking-tighter opacity-60">
                    <span className="material-symbols-outlined text-red-500 font-black">cancel</span>
                    People who like long meetings
                  </li>
                  <li className="flex items-center gap-4 text-2xl font-bold italic uppercase tracking-tighter opacity-60">
                    <span className="material-symbols-outlined text-red-500 font-black">cancel</span>
                    Agency drama &amp; politics
                  </li>
                  <li className="flex items-center gap-4 text-2xl font-bold italic uppercase tracking-tighter opacity-60">
                    <span className="material-symbols-outlined text-red-500 font-black">cancel</span>
                    3-month timelines
                  </li>
                  <li className="flex items-center gap-4 text-2xl font-bold italic uppercase tracking-tighter opacity-60">
                    <span className="material-symbols-outlined text-red-500 font-black">cancel</span>
                    Over-thinkers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works (Timeline) */}
        <section className="px-6 py-24 bg-white dark:bg-zinc-950 text-black dark:text-white border-y-2 border-white" id="process">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-800 uppercase tracking-tighter mb-20 text-center">How It Works</h2>
            
            <div className="relative space-y-12">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-primary"></div>
              
              <div className="relative flex items-center gap-12 group">
                <div className="size-16 bg-black dark:bg-white text-white dark:text-black font-800 text-2xl flex items-center justify-center z-10 border-4 border-primary shrink-0">01</div>
                <div>
                  <h4 className="text-3xl font-800 uppercase tracking-tighter mb-2">Discovery Call</h4>
                  <p className="text-gray-400 font-medium">15 minutes to align goals and assets. No fluff.</p>
                </div>
              </div>
              
              <div className="relative flex items-center gap-12 group">
                <div className="size-16 bg-black dark:bg-white text-white dark:text-black font-800 text-2xl flex items-center justify-center z-10 border-4 border-primary shrink-0">02</div>
                <div>
                  <h4 className="text-3xl font-800 uppercase tracking-tighter mb-2">Rapid Build</h4>
                  <p className="text-gray-400 font-medium">Solo development sprint. 48-72 hours of deep focus.</p>
                </div>
              </div>
              
              <div className="relative flex items-center gap-12 group">
                <div className="size-16 bg-black dark:bg-white text-white dark:text-black font-800 text-2xl flex items-center justify-center z-10 border-4 border-primary shrink-0">03</div>
                <div>
                  <h4 className="text-3xl font-800 uppercase tracking-tighter mb-2">Review Loop</h4>
                  <p className="text-gray-400 font-medium">One surgical round of refinements. Precision over perfectionism.</p>
                </div>
              </div>
              
              <div className="relative flex items-center gap-12 group">
                <div className="size-16 bg-primary text-white font-800 text-2xl flex items-center justify-center z-10 border-4 border-black shrink-0">04</div>
                <div>
                  <h4 className="text-3xl font-800 uppercase tracking-tighter mb-2 text-primary">Live Launch</h4>
                  <p className="text-gray-400 font-medium">Day 7. Your business is live. Revenue starts now.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="px-6 py-32 overflow-hidden relative" id="pricing">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <div className="inline-block border-2 border-primary text-primary px-8 py-3 mb-10 font-800 uppercase tracking-[0.2em] transform -rotate-2">
              Website-in-a-Week Badge
            </div>
            
            <h2 className="text-4xl md:text-6xl font-800 uppercase tracking-tighter mb-8">One Price. No Upsells.</h2>
            
            <div className="bg-white dark:bg-white text-black py-16 px-10 border-4 border-primary mb-12 shadow-[20px_20px_0px_0px_rgba(249,6,6,1)]">
              <p className="text-xl font-bold uppercase tracking-widest mb-4">Investment Range</p>
              <div className="text-6xl md:text-8xl font-900 tracking-tighter mb-6">
                ₹8k – ₹20k
              </div>
              <p className="text-lg font-medium opacity-70 mb-10">Depends on complexity. Zero hidden fees.</p>
              <a 
                href="https://calendly.com/avnishkumarsinha69/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full bg-black text-white py-6 text-2xl font-800 uppercase tracking-tighter hover:bg-primary transition-all"
              >
                Secure Your Slot
              </a>
            </div>
            
            <p className="text-gray-500 font-bold uppercase">Only 2 projects accepted per week.</p>
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-900 text-white/5 uppercase select-none pointer-events-none whitespace-nowrap">
            PRICING PRICING
          </div>
        </section>
      </main>
    </>
  )
}
