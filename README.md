# Avnish Sinha - Solo Developer Studio

A high-conversion landing page for a "Website-in-a-Week" service targeting small Indian businesses and startups.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Fonts**: Google Fonts (Inter, Oswald)

## 📁 Project Structure

```
avnishsinha.com/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Main page with all sections
│   └── globals.css          # Global styles
├── components/
│   ├── EntryGate.tsx        # Entry gate animation
│   ├── Hero.tsx             # Hero section with CTAs
│   ├── WhatYouGet.tsx       # Package features
│   ├── WhoItsFor.tsx        # Target audience
│   ├── HowItWorks.tsx       # Process steps
│   ├── AddOns.tsx           # Optional services
│   ├── SampleWork.tsx       # Portfolio samples
│   ├── FAQ.tsx              # Frequently asked questions
│   ├── FinalCTA.tsx         # Final call-to-action
│   └── WhatsAppButton.tsx   # Sticky WhatsApp button
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🎨 Design Features

- **Dark theme** with accent color (#00ff88 - customizable)
- **Mobile-first** responsive design
- **Premium, minimal** aesthetic
- **Entry gate** with smooth animation
- **Sticky WhatsApp button** on scroll
- Clean typography and spacing

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Customize Your Information

Update the following in the components:

**Hero.tsx, WhatsAppButton.tsx, AddOns.tsx, FAQ.tsx:**
```typescript
const whatsappNumber = "919876543210" // Your WhatsApp number
const calendlyLink = "https://calendly.com/avnishsinha/15min" // Your Calendly link
```

**FinalCTA.tsx:**
```typescript
// Update email and social links
```

**tailwind.config.ts:**
```typescript
// Change accent color if desired
accent: '#00ff88'
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

### 4. Build for Production

```bash
npm run build
npm start
```

## 🚀 Deploy to Vercel

### Option 1: Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: GitHub + Vercel Dashboard

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

## 📝 Content Customization

All copy is directly in the components for easy editing:

- **Hero**: Main headline and value proposition
- **WhatYouGet**: Package features list
- **WhoItsFor**: Target audience examples
- **HowItWorks**: Process steps
- **AddOns**: Optional services and pricing
- **SampleWork**: Portfolio examples
- **FAQ**: Common questions and answers

## 🎯 Key Features

✅ Entry gate with "ENTER" button (stored in sessionStorage)  
✅ Mobile-first responsive design  
✅ Sticky WhatsApp button (appears on scroll)  
✅ Multiple CTAs throughout the page  
✅ SEO metadata configured  
✅ Smooth animations and transitions  
✅ Collapsible FAQ section  
✅ Clean, production-ready code  

## 📱 Components Overview

### EntryGate
- Full-screen entry animation
- "AVNISH SINHA" branding
- Enter button with hover effects
- Session storage to remember entry

### Hero
- Large headline with subheadline
- Starting price display
- Dual CTAs (WhatsApp + Calendly)
- Background gradient effects

### WhatYouGet
- 8 key features in grid layout
- Hover effects on cards
- Checkmark icons

### WhoItsFor
- 6 target audience cards
- "Not for you if" section
- Industry-specific examples

### HowItWorks
- 4-step process
- Timeline visualization
- Duration for each step

### AddOns
- 6 optional services
- Pricing displayed
- Custom work CTA

### SampleWork
- Portfolio grid (6 samples)
- Placeholder cards with hover
- Industry categories

### FAQ
- 10 common questions
- Collapsible accordion
- Extra CTA at bottom

### FinalCTA
- Compelling final pitch
- Dual CTAs repeated
- Footer with links

### WhatsAppButton
- Sticky on scroll (300px threshold)
- Different styles for mobile/desktop
- WhatsApp green color (#25D366)

## 🔧 Customization Tips

### Change Accent Color
Edit `tailwind.config.ts`:
```typescript
accent: '#YOUR_COLOR'
```

### Add Google Analytics
Add to `app/layout.tsx`:
```tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
```

### Modify Entry Gate
Edit `components/EntryGate.tsx` to change animation or remove sessionStorage

### Update Pricing
Search for "₹8,000" and "₹20,000" to update pricing across components

## 📊 Performance

- **Lighthouse Score**: 95+ (with optimizations)
- **Mobile-first**: Optimized for Indian market (primarily mobile users)
- **Fast loading**: Minimal dependencies, optimized images

## 🐛 Troubleshooting

**Entry gate shows every time:**
- Remove sessionStorage check in `EntryGate.tsx`

**WhatsApp button not showing:**
- Check scroll threshold (300px)
- Verify WhatsApp number format

**Build errors:**
- Run `npm install` again
- Check Node.js version (v18+)
- Clear `.next` folder and rebuild

## 📄 License

MIT License - feel free to use for your own projects

## 🤝 Support

For questions or support, reach out on WhatsApp or email.

---

Built with ❤️ by Avnish Sinha
