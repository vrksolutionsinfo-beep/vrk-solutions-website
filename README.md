# VRK SOLUTIONS — Corporate Web Platform

> **WE BUILD. WE SCALE. WE DOMINATE.**  
> Official corporate website for VRK Solutions: [https://vrksolutions.in](https://vrksolutions.in)

---

## 1. Technical Stack & Architecture

- **Framework**: Next.js 15+ (App Router, React 19, TypeScript strict mode)
- **Styling**: Tailwind CSS with custom brand design tokens (`#E85D24` primary orange, warm ivory, soft surface, hairline borders)
- **Typography**: Archivo (Display & Body) + IBM Plex Mono (Technical Labels)
- **3D Graphics**: Custom pure Three.js interactive architectural monolith with pointer inertia, reduced motion handling, and static SVG fallback
- **CMS**: Sanity CMS schemas with automatic verified local fallback data store
- **Form Architecture**: Strongly typed Server Actions with Zod validation, honeypot anti-spam, and sliding-window IP rate limiting
- **Email Delivery**: Resend transactional email integration with developer console fallback
- **Testing**: Vitest unit test suite with 100% core logic verification

---

## 2. Implemented Routes & Sitemap

| Route | Purpose | Prerender Type |
|---|---|---|
| `/` | Homepage with 3D Monolith, 8 Services, 6-Stage Process, Project Brief Builder, FAQ, CTAs | Static |
| `/about` | Corporate positioning, mission, vision, and 6 core delivery principles | Static |
| `/services` | Directory index of all eight confirmed technology disciplines | Static |
| `/services/[slug]` | 8 individual SEO-ready service pages with capabilities, methodology, and FAQs | Static (SSG) |
| `/work` | Portfolio index showing case studies & engineering prototypes | Static |
| `/work/[slug]` | Detailed case study architecture breakdowns | Static (SSG) |
| `/process` | Comprehensive 6-stage engineering and delivery framework | Static |
| `/industries` | 10 cross-industry software architectures & challenge analyses | Static |
| `/faq` | Frequently answered questions with accessible accordion disclosure | Static |
| `/contact` | Direct enquiry form, business email, direct calling, and WhatsApp links | Static |
| `/get-quote` | Technical quotation questionnaire with Project Brief Builder prefilling | Static |
| `/book-consultation` | Architecture strategy session scheduling request flow | Static |
| `/insights` | Technology insights index with empty-state protection | Static |
| `/insights/[slug]` | Deep-dive architectural articles | Static (SSG) |
| `/privacy-policy` | Operational privacy draft marked for legal review | Static |
| `/terms-and-conditions` | Corporate terms draft marked for legal review | Static |
| `/cookie-policy` | Minimalist cookie policy | Static |
| `/sitemap.xml` | Dynamic XML sitemap covering all 32 pages | Dynamic XML |
| `/robots.txt` | Crawler indexing policy with sitemap reference | Text |

---

## 3. Confirmed Services Detail Pages

1. `/services/website-design-development`
2. `/services/web-applications-saas`
3. `/services/mobile-app-development`
4. `/services/ui-ux-design`
5. `/services/ai-automation-solutions`
6. `/services/digital-marketing-seo`
7. `/services/e-commerce-development`
8. `/services/software-development`

---

## 4. Brand & Vector Identity

All original vector artwork has been created and verified:
- `public/brand/vrk-logo-horizontal.svg` — Primary horizontal brandmark
- `public/brand/vrk-logo-monogram.svg` — Precision geometric VRK monogram
- `public/brand/vrk-logo-monochrome.svg` — Single-color black/white edition
- `public/brand/vrk-icon-square.svg` — High-resolution 512x512 app icon
- `public/brand/vrk-social-card.svg` — 1200x630 Open Graph & Twitter social card
- `public/favicon.svg` & `public/robots.txt`

---

## 5. Contact & WhatsApp Integrations

- **Direct Calling**: `tel:+919398845947`
- **Email Contact**: `mailto:info@vrksolutions.in`
- **Floating WhatsApp**: `https://wa.me/919398845947` with contextual URL-encoded prefill
- **Interactive Project Brief Builder**: Visitors configure service, objectives, features, timeline, and budget. Outputs structured summaries, pre-fills the quotation form via query parameters, or exports directly to WhatsApp.

---

## 6. Local Development & Commands

```bash
# Install dependencies
npm install

# Start local development server (http://localhost:3000)
npm run dev

# Run TypeScript strict typecheck
npx tsc --noEmit

# Run unit tests
npm test

# Create optimized production build
npm run build

# Start production server
npm start
```

---

## 7. Environment Variables Reference

Copy `.env.example` to `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://vrksolutions.in

# Sanity CMS (Optional - runs with built-in verified fallback data store if omitted)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-03-01
SANITY_API_READ_TOKEN=your_token

# Transactional Email (Resend)
RESEND_API_KEY=re_your_api_key
CONTACT_RECEIVER_EMAIL=info@vrksolutions.in
CONTACT_SENDER_EMAIL=VRK Solutions <notifications@vrksolutions.in>
```
