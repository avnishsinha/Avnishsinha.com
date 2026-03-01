import GateEntry from '@/components/GateEntry'
import EmailLink from '@/components/EmailLink'

export default function HomePage() {
  return (
    <>
      <GateEntry />
      <main className="pt-16 sm:pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-center items-center px-4 sm:px-6 py-12 sm:py-16 md:py-20 text-center">
          <div className="inline-block bg-primary text-white px-3 sm:px-4 py-1 mb-6 sm:mb-8 font-bold uppercase tracking-widest text-xs sm:text-sm">
            Independent Software Engineer
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-800 leading-[0.9] tracking-tighter uppercase max-w-5xl mb-8 sm:mb-10 md:mb-12 px-2">
            Designing and building <span className="text-primary italic">scalable</span> digital infrastructure.
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium max-w-2xl mb-8 sm:mb-10 md:mb-12 text-gray-400 px-4">
            Premium software engineering solutions. Architecting digital systems that drive measurable business outcomes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-xl px-4">
            <EmailLink 
              className="flex-1 bg-white text-black py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl font-800 uppercase tracking-tighter hover:bg-primary hover:text-white border-2 border-white hover:border-primary transition-all flex items-center justify-center gap-2"
              copiedClassName="flex-1 bg-primary text-white py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl font-800 uppercase tracking-tighter border-2 border-primary transition-all flex items-center justify-center gap-2"
              normalText="Email Me"
              copiedText="Email Copied!"
            />
            <a 
              href="https://calendly.com/avnishkumarsinha69/30min" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 bg-transparent text-white py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl font-800 uppercase tracking-tighter border-2 border-white hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">calendar_today</span>
              Calendly
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24 border-y-2 border-white bg-white dark:bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 md:mb-16 gap-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-800 uppercase tracking-tighter">Core Services</h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary font-bold uppercase tracking-widest">Enterprise-Grade Solutions</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-black dark:border-white">
              <div className="p-6 sm:p-8 md:p-10 border-b-2 sm:border-b-2 lg:border-b-0 sm:border-r-2 border-black dark:border-white hover:bg-primary group transition-colors">
                <div className="text-3xl sm:text-4xl mb-4 sm:mb-6 font-800 group-hover:text-white">01</div>
                <h3 className="text-xl sm:text-2xl font-800 uppercase mb-3 sm:mb-4 group-hover:text-white">Web Development</h3>
                <p className="text-sm sm:text-base text-gray-500 group-hover:text-white/80">High-performance web systems built for clarity, speed, and scale.</p>
              </div>
              
              <div className="p-6 sm:p-8 md:p-10 border-b-2 lg:border-b-0 border-black dark:border-white sm:border-r-2 lg:border-r-2 hover:bg-primary group transition-colors">
                <div className="text-3xl sm:text-4xl mb-4 sm:mb-6 font-800 group-hover:text-white">02</div>
                <h3 className="text-xl sm:text-2xl font-800 uppercase mb-3 sm:mb-4 group-hover:text-white">Application Development</h3>
                <p className="text-sm sm:text-base text-gray-500 group-hover:text-white/80">Robust mobile and desktop applications engineered for long-term reliability.</p>
              </div>
              
              <div className="p-6 sm:p-8 md:p-10 border-b-2 sm:border-b-2 lg:border-b-0 sm:border-r-2 border-black dark:border-white hover:bg-primary group transition-colors">
                <div className="text-3xl sm:text-4xl mb-4 sm:mb-6 font-800 group-hover:text-white">03</div>
                <h3 className="text-xl sm:text-2xl font-800 uppercase mb-3 sm:mb-4 group-hover:text-white">Digital Strategy</h3>
                <p className="text-sm sm:text-base text-gray-500 group-hover:text-white/80">Data-driven digital positioning and performance optimization.</p>
              </div>
              
              <div className="p-6 sm:p-8 md:p-10 hover:bg-primary group transition-colors">
                <div className="text-3xl sm:text-4xl mb-4 sm:mb-6 font-800 group-hover:text-white">04</div>
                <h3 className="text-xl sm:text-2xl font-800 uppercase mb-3 sm:mb-4 group-hover:text-white">Software Engineering</h3>
                <p className="text-sm sm:text-base text-gray-500 group-hover:text-white/80">Custom backend architectures and scalable system design.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who This Is For Section */}
        <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24" id="who">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-2 border-white">
              <div className="p-6 sm:p-8 md:p-10 lg:p-12 border-b-2 lg:border-b-0 lg:border-r-2 border-white bg-white dark:bg-zinc-900">
                <h3 className="text-3xl sm:text-4xl font-800 uppercase mb-6 sm:mb-8 md:mb-10 text-black dark:text-white">FOR</h3>
                <ul className="space-y-4 sm:space-y-6">
                  <li className="flex items-center gap-3 sm:gap-4 text-lg sm:text-xl md:text-2xl font-bold italic uppercase tracking-tighter">
                    <span className="material-symbols-outlined text-primary font-black text-xl sm:text-2xl">check_circle</span>
                    <span>Serious businesses</span>
                  </li>
                  <li className="flex items-center gap-3 sm:gap-4 text-lg sm:text-xl md:text-2xl font-bold italic uppercase tracking-tighter">
                    <span className="material-symbols-outlined text-primary font-black text-xl sm:text-2xl">check_circle</span>
                    <span>Doctors &amp; Lawyers</span>
                  </li>
                  <li className="flex items-center gap-3 sm:gap-4 text-lg sm:text-xl md:text-2xl font-bold italic uppercase tracking-tighter">
                    <span className="material-symbols-outlined text-primary font-black text-xl sm:text-2xl">check_circle</span>
                    <span>High-growth Startups</span>
                  </li>
                  <li className="flex items-center gap-3 sm:gap-4 text-lg sm:text-xl md:text-2xl font-bold italic uppercase tracking-tighter">
                    <span className="material-symbols-outlined text-primary font-black text-xl sm:text-2xl">check_circle</span>
                    <span>Action-takers</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 sm:p-8 md:p-10 lg:p-12 bg-black">
                <h3 className="text-3xl sm:text-4xl font-800 uppercase mb-6 sm:mb-8 md:mb-10 text-primary">NOT FOR</h3>
                <ul className="space-y-4 sm:space-y-6">
                  <li className="flex items-center gap-3 sm:gap-4 text-lg sm:text-xl md:text-2xl font-bold italic uppercase tracking-tighter opacity-60">
                    <span className="material-symbols-outlined text-red-500 font-black text-xl sm:text-2xl">cancel</span>
                    <span>People who like long meetings</span>
                  </li>
                  <li className="flex items-center gap-3 sm:gap-4 text-lg sm:text-xl md:text-2xl font-bold italic uppercase tracking-tighter opacity-60">
                    <span className="material-symbols-outlined text-red-500 font-black text-xl sm:text-2xl">cancel</span>
                    <span>Agency drama &amp; politics</span>
                  </li>
                  <li className="flex items-center gap-3 sm:gap-4 text-lg sm:text-xl md:text-2xl font-bold italic uppercase tracking-tighter opacity-60">
                    <span className="material-symbols-outlined text-red-500 font-black text-xl sm:text-2xl">cancel</span>
                    <span>3-month timelines</span>
                  </li>
                  <li className="flex items-center gap-3 sm:gap-4 text-lg sm:text-xl md:text-2xl font-bold italic uppercase tracking-tighter opacity-60">
                    <span className="material-symbols-outlined text-red-500 font-black text-xl sm:text-2xl">cancel</span>
                    <span>Over-thinkers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works (Timeline) */}
        <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-zinc-950 text-black dark:text-white border-y-2 border-white" id="process">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-800 uppercase tracking-tighter mb-12 sm:mb-16 md:mb-20 text-center">How It Works</h2>
            
            <div className="relative space-y-8 sm:space-y-10 md:space-y-12">
              <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 sm:w-1 bg-primary"></div>
              
              <div className="relative flex items-start sm:items-center gap-6 sm:gap-8 md:gap-12 group">
                <div className="size-12 sm:size-14 md:size-16 bg-black dark:bg-white text-white dark:text-black font-800 text-lg sm:text-xl md:text-2xl flex items-center justify-center z-10 border-2 sm:border-4 border-primary shrink-0">01</div>
                <div>
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-800 uppercase tracking-tighter mb-1 sm:mb-2">Discovery Call</h4>
                  <p className="text-sm sm:text-base md:text-lg text-gray-400 font-medium">15 minutes to align goals and assets. No fluff.</p>
                </div>
              </div>
              
              <div className="relative flex items-start sm:items-center gap-6 sm:gap-8 md:gap-12 group">
                <div className="size-12 sm:size-14 md:size-16 bg-black dark:bg-white text-white dark:text-black font-800 text-lg sm:text-xl md:text-2xl flex items-center justify-center z-10 border-2 sm:border-4 border-primary shrink-0">02</div>
                <div>
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-800 uppercase tracking-tighter mb-1 sm:mb-2">Rapid Build</h4>
                  <p className="text-sm sm:text-base md:text-lg text-gray-400 font-medium">Solo development sprint. 48-72 hours of deep focus.</p>
                </div>
              </div>
              
              <div className="relative flex items-start sm:items-center gap-6 sm:gap-8 md:gap-12 group">
                <div className="size-12 sm:size-14 md:size-16 bg-black dark:bg-white text-white dark:text-black font-800 text-lg sm:text-xl md:text-2xl flex items-center justify-center z-10 border-2 sm:border-4 border-primary shrink-0">03</div>
                <div>
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-800 uppercase tracking-tighter mb-1 sm:mb-2">Review Loop</h4>
                  <p className="text-sm sm:text-base md:text-lg text-gray-400 font-medium">One surgical round of refinements. Precision over perfectionism.</p>
                </div>
              </div>
              
              <div className="relative flex items-start sm:items-center gap-6 sm:gap-8 md:gap-12 group">
                <div className="size-12 sm:size-14 md:size-16 bg-primary text-white font-800 text-lg sm:text-xl md:text-2xl flex items-center justify-center z-10 border-2 sm:border-4 border-black shrink-0">04</div>
                <div>
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-800 uppercase tracking-tighter mb-1 sm:mb-2 text-primary">Live Launch</h4>
                  <p className="text-sm sm:text-base md:text-lg text-gray-400 font-medium">Day 7. Your business is live. Revenue starts now.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden relative" id="pricing">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <div className="inline-block border-2 border-primary text-primary px-4 sm:px-6 md:px-8 py-2 sm:py-3 mb-6 sm:mb-8 md:mb-10 font-800 uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] transform -rotate-2 text-xs sm:text-sm">
              Website-in-a-Week Badge
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-800 uppercase tracking-tighter mb-6 sm:mb-8">One Price. No Upsells.</h2>
            
            <div className="bg-white dark:bg-white text-black py-10 sm:py-12 md:py-16 px-6 sm:px-8 md:px-10 border-2 sm:border-4 border-primary mb-8 sm:mb-10 md:mb-12 shadow-[10px_10px_0px_0px_rgba(249,6,6,1)] sm:shadow-[15px_15px_0px_0px_rgba(249,6,6,1)] md:shadow-[20px_20px_0px_0px_rgba(249,6,6,1)]">
              <p className="text-base sm:text-lg md:text-xl font-bold uppercase tracking-widest mb-3 sm:mb-4">Pricing</p>
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-900 tracking-tighter mb-4 sm:mb-5 md:mb-6">
                Contact for Quote
              </div>
              <p className="text-sm sm:text-base md:text-lg font-medium opacity-70 mb-6 sm:mb-8 md:mb-10">Custom pricing based on your needs. Zero hidden fees.</p>
              <a 
                href="https://calendly.com/avnishkumarsinha69/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full bg-black text-white py-4 sm:py-5 md:py-6 text-lg sm:text-xl md:text-2xl font-800 uppercase tracking-tighter hover:bg-primary transition-all"
              >
                Secure Your Slot
              </a>
            </div>
            
            <p className="text-gray-500 font-bold uppercase text-xs sm:text-sm">Only 2 projects accepted per week.</p>
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-900 text-white/5 uppercase select-none pointer-events-none whitespace-nowrap hidden sm:block">
            PRICING PRICING
          </div>
        </section>
      </main>
    </>
  )
}
