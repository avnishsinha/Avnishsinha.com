# Quick Start Guide

## ⚡ Super Quick Setup (2 Minutes)

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Update Your Contact Information**
   
   Edit **ONE FILE**: `config/site.ts`
   
   ```typescript
   export const siteConfig = {
     whatsappNumber: "919876543210",     // ← Change this
     calendlyLink: "https://calendly.com/avnishsinha/15min",  // ← Change this
     email: "hello@avnishsinha.com",     // ← Change this
     
     social: {
       linkedin: "https://linkedin.com/in/avnishsinha",  // ← Update these
       github: "https://github.com/avnishsinha",
       twitter: "https://twitter.com/avnishsinha",
     },
     // ... rest stays the same
   }
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   
   Visit: http://localhost:3000

That's it! All your contact info will update across the entire site automatically.

## 🎨 Quick Customizations

### Change Brand Color
Edit `tailwind.config.ts`:
```typescript
accent: '#00ff88', // ← Change to your brand color
```

### Update Pricing
Edit `config/site.ts`:
```typescript
pricing: {
  starting: "₹8,000",  // ← Change this
  range: {
    min: 8000,
    max: 20000,
  }
}
```

### Change Business Name
Edit `config/site.ts`:
```typescript
businessName: "Avnish Sinha",  // ← Your name
tagline: "Solo Developer Studio",  // ← Your tagline
```

## Deployment to Vercel

### Method 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

### Method 2: CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

### Method 3: GitHub Integration

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Click "Deploy"

## Quick Edits

### Change Pricing
Search for `₹8,000` across all files and replace with your price.

### Add/Remove Sections
Edit `app/page.tsx` and comment out or add components:
```tsx
<Hero />
<WhatYouGet />
// <WhoItsFor />  ← Comment to hide
<HowItWorks />
```

### Disable Entry Gate
In `app/page.tsx`, remove or comment out:
```tsx
<EntryGate onEnter={() => setShowContent(true)} />
```

And change:
```tsx
const [showContent, setShowContent] = useState(true) // Changed to true
```

### Update Copy
All text is hardcoded in components. Just open the component file and edit the text directly.

## Common Issues

**Q: npm install fails**
- Make sure you have Node.js 18+ installed
- Delete `node_modules` and `package-lock.json`, try again

**Q: Site looks broken**
- Run `npm run build` to check for errors
- Make sure Tailwind classes are correct

**Q: WhatsApp button not working**
- Verify number format: country code + number, no spaces or +
- Example: `919876543210` for India

**Q: Need help?**
- Check the main README.md for detailed docs
- Open an issue on GitHub

## Next Steps

1. Test on mobile device
2. Add your actual content and images
3. Set up custom domain on Vercel
4. Add Google Analytics (optional)
5. Share with first customers!

---

🚀 You're ready to launch!
