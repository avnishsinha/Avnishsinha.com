# 🚀 Deployment Guide

Complete guide to deploying your website to production.

## Option 1: Vercel (Recommended) ⭐

Vercel is the best option - it's made by the Next.js team and offers:
- ✅ Free hosting
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deployments from GitHub
- ✅ Custom domain support

### Method A: GitHub + Vercel Dashboard (Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Website-in-a-Week landing page"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Sign in with GitHub
   - Click "Import Project"
   - Select your repository
   - Click "Deploy"
   - Done! ✨

3. **Automatic Updates**
   Every time you push to GitHub, Vercel auto-deploys!

### Method B: Vercel CLI (Fastest)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name? avnishsinha-com
# - Which directory? ./
# - Override settings? No

# Production deployment
vercel --prod
```

### Add Custom Domain on Vercel

1. Go to your project on Vercel
2. Settings → Domains
3. Add your domain (e.g., `avnishsinha.com`)
4. Update DNS records as shown
5. Wait for verification (5-60 minutes)

## Option 2: Netlify

Alternative to Vercel, also great:

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Production
netlify deploy --prod
```

## Option 3: Traditional Hosting (cPanel/Shared)

For traditional hosting like Hostinger, Bluehost, etc:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Export static version**
   Update `next.config.js`:
   ```javascript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   }
   ```

3. **Build again**
   ```bash
   npm run build
   ```

4. **Upload**
   - Upload contents of `out/` folder
   - Point domain to this folder

**Note**: Static export has limitations (no API routes, no server components benefits)

## Environment Variables

If you use environment variables:

### Vercel
1. Project Settings → Environment Variables
2. Add each variable
3. Redeploy

### Netlify
```bash
netlify env:set VARIABLE_NAME "value"
```

## Custom Domain Setup

### Step 1: Buy Domain
- Namecheap
- GoDaddy
- Google Domains
- BigRock (India)

### Step 2: DNS Configuration

For Vercel:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

For Netlify:
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: YOUR_SITE.netlify.app
```

### Step 3: Wait
DNS changes take 5-60 minutes to propagate.

## Performance Optimization

Before deploying:

### 1. Optimize Images
Add real images to `public/` folder:
```
public/
  ├── images/
  │   ├── logo.png
  │   ├── sample1.jpg
  │   └── sample2.jpg
```

Use Next.js Image component:
```tsx
import Image from 'next/image'

<Image 
  src="/images/logo.png" 
  alt="Logo" 
  width={200} 
  height={200} 
/>
```

### 2. Add Analytics

**Google Analytics:**
1. Get tracking ID from [analytics.google.com](https://analytics.google.com)
2. Edit `app/layout.tsx`:
   ```tsx
   import Script from 'next/script'
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <head>
           <Script
             src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
             strategy="afterInteractive"
           />
           <Script id="google-analytics" strategy="afterInteractive">
             {`
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
               gtag('config', 'G-XXXXXXXXXX');
             `}
           </Script>
         </head>
         <body>{children}</body>
       </html>
     )
   }
   ```

### 3. SEO Check
```bash
npm run build
# Check for warnings
```

## Post-Deployment Checklist

After deployment:

- [ ] Test all links (WhatsApp, Calendly, social)
- [ ] Test on mobile device
- [ ] Test on different browsers (Chrome, Safari, Firefox)
- [ ] Check page load speed: [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Verify SEO: [Google Search Console](https://search.google.com/search-console)
- [ ] Test contact form if added
- [ ] Check HTTPS certificate
- [ ] Verify custom domain works (www and non-www)
- [ ] Set up Google My Business
- [ ] Submit sitemap to Google

## Continuous Deployment

### GitHub → Vercel (Recommended)
- Push to `main` branch → Auto-deploys to production
- Push to other branches → Preview deployments

### Update Workflow
```bash
# Make changes locally
npm run dev
# Test changes

# Commit and push
git add .
git commit -m "Update pricing"
git push

# Vercel auto-deploys!
```

## Monitoring

### Vercel Analytics
- Free built-in analytics
- Real-time visitors
- Page performance

### Google Analytics
- Detailed visitor insights
- Traffic sources
- User behavior

## Troubleshooting Deployment

### Build Fails
```bash
# Test build locally first
npm run build

# Check errors
# Fix and try again
```

### Styles Not Loading
- Clear cache
- Hard refresh (Ctrl+Shift+R)
- Check Tailwind config

### WhatsApp Links Not Working
- Check URL encoding
- Verify number format in `config/site.ts`

### Domain Not Working
- Check DNS propagation: [whatsmydns.net](https://www.whatsmydns.net/)
- Wait up to 24 hours
- Verify DNS records

## Going Live Announcement

After successful deployment:

1. **Test Everything** (see checklist above)
2. **Share Your Site**:
   - WhatsApp Status
   - LinkedIn post
   - Twitter
   - Email signature
   - Google My Business

3. **Drive Traffic**:
   - Local business directories
   - Social media
   - Word of mouth
   - Local SEO

## Need Help?

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Next.js Deployment: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
- This project's README.md

---

🎉 Ready to launch? Let's go!

**Quick Deploy:**
```bash
vercel --prod
```
