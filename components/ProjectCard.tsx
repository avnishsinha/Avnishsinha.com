import Link from 'next/link'

interface ProjectCardProps {
  slug: string
  title: string
  category: string
  description: string
  tech: string[]
  year: string
}

export default function ProjectCard({ slug, title, category, description, tech, year }: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`}>
      <div className="group border-2 border-white hover:bg-primary transition-all cursor-pointer h-full">
        <div className="p-8 md:p-10">
          <div className="flex justify-between items-start mb-6">
            <span className="text-sm font-800 uppercase tracking-widest text-primary group-hover:text-white transition-colors">
              {category}
            </span>
            <span className="text-sm font-800 uppercase tracking-widest text-gray-500 group-hover:text-white/70 transition-colors">
              {year}
            </span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-800 uppercase tracking-tighter mb-4 group-hover:text-white transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-400 font-medium mb-6 group-hover:text-white/80 transition-colors">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="px-3 py-1 border border-gray-600 text-xs font-bold uppercase tracking-wider group-hover:border-white group-hover:text-white transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        
        <div className="border-t-2 border-white p-6 flex items-center justify-between">
          <span className="font-800 uppercase text-sm tracking-widest group-hover:text-white transition-colors">
            View Case Study
          </span>
          <span className="material-symbols-outlined group-hover:text-white transition-colors">
            arrow_forward
          </span>
        </div>
      </div>
    </Link>
  )
}
