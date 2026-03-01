import type { Metadata } from 'next'
import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Showcase of software engineering projects. Web systems, applications, and digital solutions built with precision and scale.',
}

export default function ProjectsPage() {
  return (
    <main className="pt-16 sm:pt-20 md:pt-24 min-h-screen">
      <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-16 md:mb-20 text-center">
            <div className="inline-block bg-primary text-white px-3 sm:px-4 py-1 mb-6 sm:mb-8 font-bold uppercase tracking-widest text-xs sm:text-sm">
              Portfolio
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-800 uppercase tracking-tighter mb-4 sm:mb-6">
              Recent Work
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 font-medium max-w-3xl mx-auto px-4">
              Real projects. Real results. All delivered in 7 days or less.
            </p>
            <div className="mt-6 sm:mt-8 inline-flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-500 border border-gray-700 px-4 sm:px-6 py-2 sm:py-3">
              <span className="material-symbols-outlined text-sm sm:text-base">lock</span>
              <span className="hidden sm:inline">Certain engagements remain confidential under NDA</span>
              <span className="sm:hidden">Some work under NDA</span>
            </div>
            <div className="mt-4 sm:mt-6">
              <a 
                href="https://github.com/avnishsinha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline font-bold uppercase text-xs sm:text-sm tracking-widest"
              >
                <span className="material-symbols-outlined text-sm sm:text-base">code</span>
                View GitHub Profile
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                category={project.category}
                description={project.description}
                tech={project.tech}
                year={project.year}
              />
            ))}
          </div>

          <div className="mt-12 sm:mt-16 md:mt-20 text-center">
            <div className="border-2 border-white p-8 sm:p-12 md:p-16 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-800 uppercase tracking-tighter mb-4 sm:mb-6">
                Ready to Start?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8">
                Let&apos;s build your project next week.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-primary text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-base sm:text-lg md:text-xl font-800 uppercase tracking-tighter hover:bg-white hover:text-primary border-2 border-primary transition-all"
                >
                  Get Started
                </Link>
                <a
                  href="https://calendly.com/avnishkumarsinha69/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-base sm:text-lg md:text-xl font-800 uppercase tracking-tighter border-2 border-white hover:bg-white hover:text-black transition-all"
                >
                  Book a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
