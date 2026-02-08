import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="pt-24 min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        <div className="mb-8">
          <span className="material-symbols-outlined text-primary" style={{ fontSize: '120px' }}>
            error
          </span>
        </div>
        
        <h1 className="text-8xl md:text-9xl font-900 uppercase tracking-tighter mb-6 text-outline">
          404
        </h1>
        
        <h2 className="text-4xl md:text-6xl font-800 uppercase tracking-tighter mb-8">
          Page Not Found
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-400 font-medium mb-12">
          This page doesn&apos;t exist. Just like excuses for slow websites.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-primary text-white px-10 py-6 text-xl font-800 uppercase tracking-tighter hover:bg-white hover:text-primary border-2 border-primary transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">home</span>
            Go Home
          </Link>
          <Link
            href="/projects"
            className="bg-transparent text-white px-10 py-6 text-xl font-800 uppercase tracking-tighter border-2 border-white hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">work</span>
            View Projects
          </Link>
        </div>
      </div>
    </main>
  )
}
