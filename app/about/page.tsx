import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'Independent Software Engineer specializing in scalable digital infrastructure and premium software engineering solutions.',
}

export default function AboutPage() {
  return (
    <main className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block bg-primary text-white px-4 py-1 mb-8 font-bold uppercase tracking-widest text-sm">
            About Me
          </div>
          <h1 className="text-5xl md:text-8xl font-800 uppercase tracking-tighter mb-12">
            Just Another Backbencher Who Likes to Build
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 py-20 bg-white dark:bg-zinc-950 border-y-2 border-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-4xl font-800 uppercase tracking-tighter text-primary">
                My Story
              </h2>
            </div>
            <div className="md:col-span-2 space-y-6">
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-300">
                I&apos;m Avnish Sinha. I build websites fast because I hate wasting time.
              </p>
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-300">
                Worked with agencies. Saw the bloat. The meetings. The &quot;we&apos;ll get back to you.&quot; The 3-month timelines for a 3-day job.
              </p>
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-300">
                So I went solo. Now I build websites the way they should be built: fast, clean, and effective. No BS. No excuses.
              </p>
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-300">
                If you need a website this week, not next quarter, let&apos;s talk.
              </p>
              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="text-sm font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">lock</span>
                  Certain engagements remain confidential under NDA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Stack */}
      <section className="px-6 py-20 border-b-2 border-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-800 uppercase tracking-tighter mb-16">
            Tech Stack
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border-2 border-white p-8 hover:bg-primary group transition-colors">
              <span className="material-symbols-outlined text-4xl mb-4 group-hover:text-white">code</span>
              <h3 className="text-2xl font-800 uppercase mb-3 group-hover:text-white">Frontend</h3>
              <ul className="space-y-2 text-gray-400 group-hover:text-white/80">
                <li className="font-bold">Next.js / React</li>
                <li className="font-bold">Tailwind CSS</li>
                <li className="font-bold">TypeScript</li>
              </ul>
            </div>

            <div className="border-2 border-white p-8 hover:bg-primary group transition-colors">
              <span className="material-symbols-outlined text-4xl mb-4 group-hover:text-white">dns</span>
              <h3 className="text-2xl font-800 uppercase mb-3 group-hover:text-white">Backend</h3>
              <ul className="space-y-2 text-gray-400 group-hover:text-white/80">
                <li className="font-bold">Node.js</li>
                <li className="font-bold">API Integration</li>
                <li className="font-bold">Database Setup</li>
              </ul>
            </div>

            <div className="border-2 border-white p-8 hover:bg-primary group transition-colors">
              <span className="material-symbols-outlined text-4xl mb-4 group-hover:text-white">rocket_launch</span>
              <h3 className="text-2xl font-800 uppercase mb-3 group-hover:text-white">Deployment</h3>
              <ul className="space-y-2 text-gray-400 group-hover:text-white/80">
                <li className="font-bold">Vercel / Netlify</li>
                <li className="font-bold">Custom Domains</li>
                <li className="font-bold">CDN Setup</li>
              </ul>
            </div>

            <div className="border-2 border-white p-8 hover:bg-primary group transition-colors">
              <span className="material-symbols-outlined text-4xl mb-4 group-hover:text-white">payments</span>
              <h3 className="text-2xl font-800 uppercase mb-3 group-hover:text-white">E-Commerce</h3>
              <ul className="space-y-2 text-gray-400 group-hover:text-white/80">
                <li className="font-bold">Stripe Integration</li>
                <li className="font-bold">Shopping Carts</li>
                <li className="font-bold">Checkout Flows</li>
              </ul>
            </div>

            <div className="border-2 border-white p-8 hover:bg-primary group transition-colors">
              <span className="material-symbols-outlined text-4xl mb-4 group-hover:text-white">search</span>
              <h3 className="text-2xl font-800 uppercase mb-3 group-hover:text-white">SEO</h3>
              <ul className="space-y-2 text-gray-400 group-hover:text-white/80">
                <li className="font-bold">Meta Tags</li>
                <li className="font-bold">Structured Data</li>
                <li className="font-bold">Performance</li>
              </ul>
            </div>

            <div className="border-2 border-white p-8 hover:bg-primary group transition-colors">
              <span className="material-symbols-outlined text-4xl mb-4 group-hover:text-white">chat</span>
              <h3 className="text-2xl font-800 uppercase mb-3 group-hover:text-white">Integrations</h3>
              <ul className="space-y-2 text-gray-400 group-hover:text-white/80">
                <li className="font-bold">Contact Forms</li>
                <li className="font-bold">Calendly</li>
                <li className="font-bold">Analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="px-6 py-20 bg-white dark:bg-zinc-950 border-b-2 border-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-4xl font-800 uppercase tracking-tighter text-primary">
                Availability
              </h2>
            </div>
            <div className="md:col-span-2">
              <div className="border-2 border-primary p-10">
                <p className="text-3xl font-800 uppercase tracking-tighter mb-4">
                  2 Slots Per Week
                </p>
                <p className="text-xl text-gray-400 font-medium mb-8">
                  I take on only 2 projects at a time. This ensures you get my full focus and your project gets delivered on time.
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-primary text-white px-8 py-4 text-xl font-800 uppercase tracking-tighter hover:bg-white hover:text-primary border-2 border-primary transition-all text-center"
                  >
                    Check Availability
                  </Link>
                  <a
                    href="https://calendly.com/avnishkumarsinha69/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent text-white px-8 py-4 text-xl font-800 uppercase tracking-tighter border-2 border-white hover:bg-white hover:text-black transition-all text-center"
                  >
                    Book a Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-800 uppercase tracking-tighter mb-8">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            If you&apos;re serious about getting online fast, let&apos;s talk.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="mailto:avnishkumarsinha69@gmail.com"
              className="bg-white text-black px-10 py-6 text-xl font-800 uppercase tracking-tighter hover:bg-primary hover:text-white border-2 border-white hover:border-primary transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">mail</span>
              Email Me
            </a>
            <a
              href="https://github.com/avnishsinha"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-white px-10 py-6 text-xl font-800 uppercase tracking-tighter border-2 border-white hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">code</span>
              View GitHub
            </a>
            <a
              href="https://calendly.com/avnishkumarsinha69/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-white px-10 py-6 text-xl font-800 uppercase tracking-tighter border-2 border-white hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">calendar_today</span>
              Book a Call
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
