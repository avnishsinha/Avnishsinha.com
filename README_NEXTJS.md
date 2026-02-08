# Avnish Sinha - Portfolio Website

A brutalist-style multi-page website built with Next.js 14, showcasing rapid web development services.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS (local install)
- **Language**: TypeScript
- **Font**: Space Grotesk + Material Symbols
- **Dark Mode**: Default enabled

## 📁 Project Structure

```
avnishsinha.com/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page with GateEntry
│   ├── globals.css          # Global styles
│   ├── projects/
│   │   ├── page.tsx         # Projects listing
│   │   └── [slug]/
│   │       └── page.tsx     # Individual project case studies
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── contact/
│   │   └── page.tsx         # Contact page with form
│   ├── legal/
│   │   └── page.tsx         # Legal/Terms page
│   ├── not-found.tsx        # Custom 404 page
│   ├── sitemap.ts           # Sitemap generation
│   └── robots.ts            # Robots.txt
├── components/
│   ├── Navbar.tsx           # Navigation component
│   ├── Footer.tsx           # Footer component
│   ├── GateEntry.tsx        # Entry screen (home only)
│   └── ProjectCard.tsx      # Project card component
├── data/
│   └── projects.ts          # Project data
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS config
├── tsconfig.json            # TypeScript config
├── next.config.js           # Next.js config
└── package.json             # Dependencies

```

## 🎨 Design System

### Colors
- **Primary**: `#f90606` (Red)
- **Background Light**: `#f8f5f5`
- **Background Dark**: `#000000`

### Typography
- **Font Family**: Space Grotesk
- **Weights**: 300, 400, 500, 600, 700, 800
- **Style**: Uppercase headings, tight tracking, brutalist

### Components
- **Borders**: 2px solid lines (no rounded corners)
- **Hover**: Primary color fills
- **Transitions**: All 0.3s ease

## 🛠️ Setup & Installation

1. **Install Dependencies**
```bash
npm install
```

2. **Run Development Server**
```bash
npm run dev
```

3. **Open Browser**
Navigate to `http://localhost:3000`

4. **Build for Production**
```bash
npm run build
npm start
```

## 📄 Pages Overview

### 1. Home (`/`)
- Gate entry screen (shows once per 24 hours)
- Hero section with CTA
- Features grid
- Who it's for section
- Process timeline
- Pricing section

### 2. Projects (`/projects`)
- Grid of project cards
- Filter by category (future)
- Links to individual case studies

### 3. Project Detail (`/projects/[slug]`)
- Problem statement
- Solution approach
- Tech stack
- Results & metrics
- CTA to start project

### 4. About (`/about`)
- Personal story
- Tech stack showcase
- Availability status
- Skills grid

### 5. Contact (`/contact`)
- Quick contact methods (WhatsApp, Calendly, Email)
- Contact form
- Response time info

### 6. Legal (`/legal`)
- Terms of service
- Refund policy
- Privacy policy
- Disclaimer

### 7. 404 Page
- Custom error page
- Navigation to home/projects

## 🎯 Features

### Gate Entry
- Client-side component
- localStorage remembers for 24 hours
- Smooth fade-out animation
- Only shows on home page

### Navigation
- Fixed header with active state
- Mobile responsive
- Quick Book Now button

### SEO
- Metadata per page
- OpenGraph tags
- Sitemap.xml
- Robots.txt
- Semantic HTML

### Performance
- No heavy images
- Minimal JavaScript
- Optimized fonts
- Fast page loads

## 📝 Customization

### Update Projects
Edit `/data/projects.ts` to add/modify projects:

```typescript
{
  slug: 'your-project',
  title: 'Project Title',
  category: 'Web App',
  description: 'Short description',
  tech: ['Next.js', 'Tailwind'],
  year: '2024',
  problem: 'What was the problem?',
  solution: 'How did you solve it?',
  results: ['Result 1', 'Result 2'],
}
```

### Update Contact Info
Replace these throughout the app:
- WhatsApp: `https://wa.me/15204910441`
- Calendly: `https://calendly.com/avnishkumarsinha69/30min`
- Email: `avnishkumarsinha69@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/avnishkumarsinha/`

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#f90606',
  'background-light': '#f8f5f5',
  'background-dark': '#000000',
}
```

## 🚢 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
- **Netlify**: Connect GitHub repo
- **Custom Server**: `npm run build` then `npm start`

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🔗 Links

- **Live Site**: https://avnishsinha.com
- **GitHub**: [Repo URL]

## 📄 License

© 2024 Avnish Sinha. All rights reserved.

---

**Built in 7 days. No excuses.** 🚀
