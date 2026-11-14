# VRK Solutions

Next.js App Router, React, strict TypeScript, Tailwind, Sanity, React Three Fiber and server-side Resend enquiries.

## Run

Node 22+ recommended. `npm ci`, copy `.env.example` to `.env.local`, then `npm run dev`. Public pages work without CMS credentials. Run `npm run build`, `npm test`, `npm run lint`, `npm run test:e2e`.

## Content

Connect an existing Sanity project using the public project ID and dataset. Add your deployed origin in Sanity CORS configuration and invite authorized editors. `/studio` provides authenticated editing. Create a settings document to edit the tagline, page documents with route slugs to override intros and add editorial body content, and case studies/articles for publication. Cases require both publication and client permission confirmation. No clients or performance figures are seeded.

Service directory defaults are maintained in `lib/content.ts`; create Service documents with matching slugs to override titles, descriptions and detail content. Site settings edit hero text, tagline, introductory copy and closing CTA. The CMS page system supports additional editorial content. Process steps and FAQs have dedicated CMS collections. Section labels and industry defaults remain source-managed.

Service slugs: `website-development`, `web-applications-saas`, `mobile-app-development`, `ui-ux-design`, `ai-automation`, `digital-marketing-seo`, `ecommerce-development`, `software-development`.

Preview: set a strong `SANITY_PREVIEW_SECRET` and read token, then visit `/api/draft?secret=...&path=/work/your-slug`. Draft preview displays unpublished documents; case studies still require client permission confirmation. Exit at `/api/draft/disable`. Keep preview links private.

## Email

Verify a sender domain in Resend. Set `RESEND_API_KEY` and `ENQUIRY_FROM`. The recipient is fixed to info@vrksolutions.in. Without configuration the form returns an honest unavailable response and direct contact alternatives. No email has been sent or verified in this build. Add provider-level rate limiting/WAF before public launch. Validation, origin checking and a honeypot are implemented.

## Brand

Original geometric vector assets are in `public/brand`. Allow clear space equal to one-quarter of the emblem height. Minimum emblem width 28px; horizontal lockup 145px. Archivo and IBM Plex Mono are open-source Google Fonts loaded via Next font. Use a raster 1200×630 social image for broad sharing support; the editable SVG source is supplied.

See DEPLOYMENT.md for launch prerequisites and verification limits.
