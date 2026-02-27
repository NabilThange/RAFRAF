# RAFRAF INTERNATIONAL - Quick Start Guide

## 🚀 GET YOUR SEO-OPTIMIZED SITE LIVE IN 5 STEPS

---

## STEP 1: Update Configuration (5 minutes)

### A. Update Domain Name
Replace "rafrafinternational.com" with your actual domain in these files:

**app/sitemap.ts** (line 4):
```typescript
const baseUrl = 'https://YOUR-ACTUAL-DOMAIN.com'
```

**app/robots.ts** (line 4):
```typescript
const baseUrl = 'https://YOUR-ACTUAL-DOMAIN.com'
```

**app/layout.tsx** (line 24):
```typescript
metadataBase: new URL('https://YOUR-ACTUAL-DOMAIN.com'),
```

### B. Add Google Verification Code
**app/layout.tsx** (line 82):
```typescript
verification: {
  google: 'YOUR-GOOGLE-VERIFICATION-CODE-HERE',
},
```

---

## STEP 2: Create Required Images (10 minutes)

### A. Open Graph Image
- **File:** `public/og-image.jpg`
- **Size:** 1200 x 630 pixels
- **Content:** RAFRAF INTERNATIONAL logo + tagline "Premium Fresh Produce Exporter India to UAE"
- **Format:** JPG (optimized, < 200KB)

### B. Logo
- **File:** `public/logo.png`
- **Size:** 512 x 512 pixels
- **Content:** RAFRAF INTERNATIONAL logo
- **Format:** PNG with transparency

### C. Favicon (if not already created)
- **Files:** `public/icon-light-32x32.png`, `public/icon-dark-32x32.png`, `public/icon.svg`
- **Size:** 32x32 pixels (PNG), scalable (SVG)

---

## STEP 3: Deploy to Production (15 minutes)

### Option A: Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Option B: Other Hosting
```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## STEP 4: Submit to Search Engines (20 minutes)

### A. Google Search Console
1. Go to https://search.google.com/search-console
2. Click "Add Property"
3. Enter your domain
4. Verify ownership (use the code from Step 1B)
5. Submit sitemap: `https://your-domain.com/sitemap.xml`

### B. Bing Webmaster Tools
1. Go to https://www.bing.com/webmasters
2. Add your site
3. Verify ownership
4. Submit sitemap: `https://your-domain.com/sitemap.xml`

### C. Google Analytics 4
1. Go to https://analytics.google.com
2. Create new property
3. Get tracking ID
4. Add to your site (Vercel Analytics already included)

---

## STEP 5: Verify Everything Works (10 minutes)

### A. Test URLs
Visit these URLs and verify they load correctly:
- [ ] `https://your-domain.com/` (Homepage)
- [ ] `https://your-domain.com/about` (About page)
- [ ] `https://your-domain.com/blog` (Blog index)
- [ ] `https://your-domain.com/blog/how-to-export-fresh-produce-india-to-uae` (Blog post 1)
- [ ] `https://your-domain.com/blog/al-aweer-market-dubai-supplier-guide` (Blog post 2)
- [ ] `https://your-domain.com/sitemap.xml` (Sitemap)
- [ ] `https://your-domain.com/robots.txt` (Robots file)

### B. Test Structured Data
1. Go to https://search.google.com/test/rich-results
2. Enter your homepage URL
3. Verify Organization and WebSite schemas are detected
4. Test About page for FAQPage schema
5. Test blog posts for Article schema

### C. Test Mobile Responsiveness
1. Go to https://search.google.com/test/mobile-friendly
2. Enter your homepage URL
3. Verify "Page is mobile-friendly"

### D. Test Page Speed
1. Go to https://pagespeed.web.dev
2. Enter your homepage URL
3. Verify Core Web Vitals pass:
   - LCP (Largest Contentful Paint): < 2.5s ✅
   - INP (Interaction to Next Paint): < 200ms ✅
   - CLS (Cumulative Layout Shift): < 0.1 ✅

---

## ✅ YOU'RE LIVE!

Your SEO-optimized website is now live and ready to rank. Here's what happens next:

### Week 1: Indexing
- Google will discover your sitemap
- Pages will start getting indexed
- You'll see first impressions in Search Console

### Week 2-4: Initial Rankings
- Pages will start ranking for long-tail keywords
- Blog posts will begin appearing in search results
- AI search engines will start crawling your content

### Month 2-3: Ranking Growth
- Primary keywords will start ranking (positions 20-50)
- Featured snippets may appear
- Organic traffic will begin growing

### Month 4-6: Established Presence
- Top 10 rankings for several keywords
- AI citations in ChatGPT/Perplexity
- Consistent organic traffic and B2B inquiries

---

## 📊 MONITORING CHECKLIST

### Daily (First Week)
- [ ] Check Google Search Console for indexing status
- [ ] Monitor for any crawl errors
- [ ] Verify all pages are accessible

### Weekly (First Month)
- [ ] Review Search Console performance report
- [ ] Check keyword impressions and clicks
- [ ] Monitor Core Web Vitals
- [ ] Review Google Analytics traffic

### Monthly (Ongoing)
- [ ] Track keyword rankings (use Ahrefs or SEMrush)
- [ ] Review top-performing content
- [ ] Check for broken links
- [ ] Update content with fresh statistics
- [ ] Build new backlinks

---

## 🎯 IMMEDIATE PRIORITIES (Next 30 Days)

### Content Creation
1. **Create 4 product pages:**
   - `/products/onions` - Red Onion Export
   - `/products/pomegranates` - Pomegranate Export
   - `/products/bananas` - G9 Banana Export
   - `/products/vegetables` - Fresh Vegetables Export

2. **Create 3 market pages:**
   - `/markets/uae` - UAE Market Guide
   - `/markets/saudi-arabia` - Saudi Arabia Market
   - `/markets/qatar` - Qatar Market

3. **Write 2 more blog posts:**
   - "Nashik Red Onion Export: Quality Standards"
   - "G9 Cavendish Banana Export: Logistics Guide"

### Backlink Building
1. **Submit to directories:**
   - IndiaMART
   - TradeIndia
   - ExportersIndia
   - APEDA directory

2. **Industry associations:**
   - APEDA membership
   - FIEO registration
   - Local export councils

3. **Press releases:**
   - Company launch announcement
   - First shipment milestone

---

## 🆘 TROUBLESHOOTING

### "My pages aren't indexed"
- Wait 1-2 weeks after sitemap submission
- Check robots.txt isn't blocking pages
- Verify sitemap is accessible
- Request indexing in Search Console

### "Core Web Vitals failing"
- Optimize images (use WebP format)
- Enable caching
- Minimize JavaScript
- Use Next.js Image component

### "No organic traffic yet"
- SEO takes 3-6 months for significant results
- Focus on creating more content
- Build backlinks
- Be patient and consistent

### "Structured data errors"
- Use Google Rich Results Test
- Validate JSON-LD syntax
- Check for missing required fields
- Ensure data matches visible content

---

## 📞 NEED HELP?

### Documentation
- **SEO_OPTIMIZATION_REPORT.md** - Complete technical details
- **SEO_IMPLEMENTATION_CHECKLIST.md** - Detailed action items
- **OPTIMIZATION_SUMMARY.md** - Overview and results

### Resources
- Google Search Central: https://developers.google.com/search
- Next.js SEO Docs: https://nextjs.org/docs/app/building-your-application/optimizing
- Schema.org: https://schema.org

### Tools
- Google Search Console: https://search.google.com/search-console
- Google Analytics: https://analytics.google.com
- PageSpeed Insights: https://pagespeed.web.dev
- Rich Results Test: https://search.google.com/test/rich-results

---

## 🎉 SUCCESS!

You've successfully launched an SEO-optimized website that's ready to:
- ✅ Rank in Google search results
- ✅ Be cited by AI assistants (ChatGPT, Perplexity)
- ✅ Attract B2B wholesale buyers
- ✅ Generate organic leads

**Now focus on:**
1. Creating more content (2-4 blog posts per month)
2. Building quality backlinks
3. Monitoring Search Console weekly
4. Delivering excellent service to build testimonials

**Your SEO journey has just begun. Stay consistent, be patient, and watch your organic traffic grow!**

---

**Last Updated:** February 26, 2026  
**Estimated Time to Complete:** 60 minutes  
**Difficulty:** Easy (follow steps in order)
