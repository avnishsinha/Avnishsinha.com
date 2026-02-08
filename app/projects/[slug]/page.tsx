import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: project.title,
    description: project.description,
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="px-6 py-20 border-b-2 border-white">
        <div className="max-w-5xl mx-auto">
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors mb-10"
          >
            <span className="material-symbols-outlined text-xl">arrow_back</span>
            Back to Projects
          </Link>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <span className="text-sm font-800 uppercase tracking-widest text-primary block mb-4">
                {project.category}
              </span>
              <h1 className="text-5xl md:text-7xl font-800 uppercase tracking-tighter">
                {project.title}
              </h1>
            </div>
            <span className="text-sm font-800 uppercase tracking-widest text-gray-500">
              {project.year}
            </span>
          </div>

          <p className="text-2xl md:text-3xl text-gray-400 font-medium mb-10">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3">
            {project.tech.map((item) => (
              <span
                key={item}
                className="px-4 py-2 border-2 border-white text-sm font-bold uppercase tracking-wider"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="px-6 py-20 bg-white dark:bg-zinc-950 border-b-2 border-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-4xl font-800 uppercase tracking-tighter text-primary">
                Problem
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-300">
                {project.problem}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="px-6 py-20 border-b-2 border-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-4xl font-800 uppercase tracking-tighter text-primary">
                Solution
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-300">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="px-6 py-20 bg-white dark:bg-zinc-950 border-b-2 border-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-4xl font-800 uppercase tracking-tighter text-primary">
                Results
              </h2>
            </div>
            <div className="md:col-span-2">
              <ul className="space-y-6">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary text-3xl shrink-0">check_circle</span>
                    <span className="text-xl md:text-2xl font-bold uppercase tracking-tight">
                      {result}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-800 uppercase tracking-tighter mb-8">
            Let&apos;s Build Your Project
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Same process. Same timeline. Results guaranteed.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary text-white px-10 py-6 text-xl font-800 uppercase tracking-tighter hover:bg-white hover:text-primary border-2 border-primary transition-all"
            >
              Start Your Project
            </Link>
            <a
              href="https://calendly.com/avnishkumarsinha69/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-white px-10 py-6 text-xl font-800 uppercase tracking-tighter border-2 border-white hover:bg-white hover:text-black transition-all"
            >
              Schedule Call
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
