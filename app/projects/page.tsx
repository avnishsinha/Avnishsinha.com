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
    <main className="pt-24 min-h-screen">
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <div className="inline-block bg-primary text-white px-4 py-1 mb-8 font-bold uppercase tracking-widest text-sm">
              Portfolio
            </div>
            <h1 className="text-5xl md:text-8xl font-800 uppercase tracking-tighter mb-6">
              Recent Work
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-3xl mx-auto">
              Real projects. Real results. All delivered in 7 days or less.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-gray-500 border border-gray-700 px-6 py-3">
              <span className="material-symbols-outlined text-base">lock</span>
              Certain engagements remain confidential under NDA
            </div>
            <div className="mt-6">
              <a 
                href="https://github.com/avnishsinha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline font-bold uppercase text-sm tracking-widest"
              >
                <span className="material-symbols-outlined text-base">code</span>
                View GitHub Profile
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

          <div className="mt-20 text-center">
            <div className="border-2 border-white p-16 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-800 uppercase tracking-tighter mb-6">
                Ready to Start?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Let&apos;s build your project next week.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-primary text-white px-10 py-4 text-xl font-800 uppercase tracking-tighter hover:bg-white hover:text-primary border-2 border-primary transition-all"
                >
                  Get Started
                </Link>
                <a
                  href="https://calendly.com/avnishkumarsinha69/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent text-white px-10 py-4 text-xl font-800 uppercase tracking-tighter border-2 border-white hover:bg-white hover:text-black transition-all"
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
