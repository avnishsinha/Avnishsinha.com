export interface Project {
  slug: string
  title: string
  category: string
  description: string
  tech: string[]
  year: string
  problem: string
  solution: string
  results: string[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'ecommerce-storefront',
    title: 'E-Commerce Storefront',
    category: 'Web App',
    description: 'Lightning-fast storefront with seamless checkout. Built for conversion.',
    tech: ['Next.js', 'Stripe', 'Tailwind'],
    year: '2024',
    problem: 'Client needed an online store that loads instantly and converts visitors into customers. Their old site had a 70% bounce rate.',
    solution: 'Built a brutally simple Next.js storefront with Stripe integration. Focused on speed, clarity, and zero friction checkout. No bloat.',
    results: [
      'Page load time: 0.8s',
      'Bounce rate dropped to 22%',
      'Conversion rate: 4.2%',
      'Launched in 6 days',
    ],
    featured: true,
  },
  {
    slug: 'law-firm-website',
    title: 'Law Firm Website',
    category: 'Professional',
    description: 'Authority-building presence for a litigation firm. SEO-optimized and mobile-first.',
    tech: ['Next.js', 'SEO', 'Forms'],
    year: '2024',
    problem: 'Law firm was invisible on Google. No credibility online. Losing cases to competitors with better web presence.',
    solution: 'Created a clean, professional site with strong SEO foundation, client testimonials, and integrated contact forms for instant consultations.',
    results: [
      'Ranking #1 for 3 local keywords',
      '85% increase in consultation requests',
      'Mobile-optimized contact forms',
      'Delivered in 7 days',
    ],
    featured: true,
  },
  {
    slug: 'saas-landing-page',
    title: 'SaaS Landing Page',
    category: 'Marketing',
    description: 'High-converting landing page for B2B SaaS. Clear value prop, strong CTA.',
    tech: ['Next.js', 'Analytics', 'Calendly'],
    year: '2024',
    problem: 'Startup had a great product but their landing page confused visitors. Demo requests were low.',
    solution: 'Stripped everything down to the core value proposition. Added social proof, clear pricing, and direct Calendly booking.',
    results: [
      'Demo requests up 140%',
      'Time on page increased 3x',
      'Integrated with their CRM',
      'Live in 5 days',
    ],
    featured: true,
  },
  {
    slug: 'restaurant-booking',
    title: 'Restaurant Booking Site',
    category: 'Hospitality',
    description: 'Menu showcase and reservation system. Direct contact built-in.',
    tech: ['Next.js', 'Contact Forms', 'Google Maps'],
    year: '2024',
    problem: 'Restaurant was losing bookings to competitors. Phone-only reservations were limiting growth.',
    solution: 'Built a visual menu showcase with instant contact and reservation system. Integrated Google Maps and opening hours.',
    results: [
      'Reservations increased 60%',
      'Online orders now 40% of business',
      'Reduced missed calls',
      'Completed in 6 days',
    ],
  },
  {
    slug: 'portfolio-redesign',
    title: 'Designer Portfolio',
    category: 'Portfolio',
    description: 'Minimalist showcase for a UI/UX designer. Fast, clean, memorable.',
    tech: ['Next.js', 'Animations', 'Contact Forms'],
    year: '2023',
    problem: 'Designer had amazing work but their portfolio was slow and outdated. Not getting inbound leads.',
    solution: 'Created a brutally simple portfolio with emphasis on the work. Fast loading, smooth scrolling, direct contact methods.',
    results: [
      'Load time under 1 second',
      'Client inquiries tripled',
      'Mobile-optimized gallery',
      'Shipped in 4 days',
    ],
  },
  {
    slug: 'consulting-agency',
    title: 'Consulting Agency Site',
    category: 'Business',
    description: 'Professional services site with lead capture and case studies.',
    tech: ['Next.js', 'Lead Forms', 'SEO'],
    year: '2023',
    problem: 'Consulting firm relied only on referrals. Wanted inbound lead generation through their website.',
    solution: 'Built an authority-focused site with detailed case studies, client logos, and strategic lead magnets.',
    results: [
      '20+ qualified leads per month',
      'Authority positioning established',
      'Case studies drive conversions',
      'Launched in 7 days',
    ],
  },
]
