# Verification record

Verified in the managed build environment on 14 November 2026:

- `npm run build`: passed, Next.js production compilation, TypeScript and route generation.
- `npm run lint`: passed without warnings.
- `npm test`: six tests passed across enquiry schema and server endpoint suites.
- Public brand SVGs: XML parsing checked.

Playwright tests are supplied for brief-to-quotation data transfer and mobile dialog keyboard behavior, but were not executed. The supported browser-control entry point was unavailable in this environment. No visual, real-device, screen-reader or Lighthouse results are claimed.

No Sanity project, authenticated editor session, email provider account or production domain was configured. CMS queries, schemas, draft endpoints and transactional delivery code are implemented, but live integrations need credential-backed verification. Forms return an explicit 503 and direct-contact alternatives when email delivery is not configured.

No fabricated client work, testimonials, awards, pricing estimates or outcome metrics are included. Legal pages are clearly marked as drafts requiring business/legal review. See DEPLOYMENT.md for outstanding launch prerequisites and CMS coverage.

## Search implementation — 14 November 2026

Production and static preview builds passed. ESLint passed. Fourteen tests passed, including canonical URL handling, preview/production indexability, sitemap exclusions and JSON-LD serialization.

The rendered production HTTP crawl passed across 28 public pages, 28 internally linked paths and 27 sitemap entries. It checked unique titles and descriptions, canonical/OG URLs, one H1 per page, valid JSON-LD, visible FAQ parity, asset availability, query canonicalization and four missing-page HTTP 404 responses. See SEO-VERIFICATION.json. The preview remains noindex; the real business domain still serves a different deployment until the production branch is deployed there.
