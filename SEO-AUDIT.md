# VRK Solutions search audit and implementation

Audit date: 14 November 2026. Business details confirmed by the owner: VRK Solutions operates digitally, is based in Kakinada, Andhra Pradesh, and has no public walk-in office. Phone: +91 9398845947. Email: info@vrksolutions.in.

## What was found

The inspected production domain redirects `https://vrksolutions.in` to `https://www.vrksolutions.in/`. It currently serves a different, older application from the Next.js branch in this repository. Its initial HTML contains no H1; its JavaScript may render further content. Its sitemap lists homepage fragments such as `#services`, which are not separate service pages. `/services` returned 404 during this audit. The older page canonical points at the non-www host despite the www redirect. The supplied Sites preview was deliberately noindex and is not a replacement for publishing on the business domain.

The new build previously had generic metadata, short and repetitive service detail content, no local intent pages, no published planning guides, SVG-only social artwork and no shared canonical policy for article/case-study pages. The audit did not have authenticated Search Console, analytics, Bing Webmaster Tools or ranking-tracker data. No keyword volumes, ranking positions, Core Web Vitals scores or lead improvements are claimed.

## Implemented

- A shared metadata policy for canonical URLs, unique page titles and descriptions, Open Graph and Twitter cards. The default canonical origin is the currently observed www domain. Query strings and fragments do not enter canonical URLs.
- Two substantive local pages: `/website-development-kakinada` and `/app-development-kakinada`. They answer different purchase questions and link to their detailed service pages, contact routes and planning guides.
- Expanded content for all eight confirmed services: purpose, deliverables, planning decisions, service-specific questions and related services.
- Three original project-planning guides: choosing a developer, understanding website costs, and choosing a website versus a mobile app. They have direct introductory answers, linked contents, publication dates, publisher attribution and relevant next steps.
- Consistent visible Kakinada contact information and explicit remote-only operations. Organization schema contains city, state and country; it does not invent a street, coordinates, opening hours, a storefront, reviews or ratings.
- Organization, WebSite, Service, BreadcrumbList, WebPage/AboutPage/ContactPage/CollectionPage, Article and FAQPage structured data. FAQ markup is generated from the same answers rendered on the page. JSON-LD text is safely escaped.
- A crawlable HTML page directory, comprehensive footer links, contextual links and visible breadcrumbs.
- A sitemap with canonical page URLs, published CMS articles and approved case studies. Empty work listings, private routes and draft documents are excluded. Dates are only emitted when an actual publication/update date exists.
- Production crawler access, preview noindex controls, protected editor/API/draft indexing controls, and real HTTP 404 responses for missing pages. The generic loading screen was moved into the content studio to avoid starting a successful HTTP response before public route validation completes.
- PNG social artwork and CMS fields for search titles, descriptions and article publication dates.
- An optional `/llms.txt` information index. This is a convenience for systems that read it, not a ranking mechanism or a requirement for Google AI results.
- Automated SEO checks and an HTTP crawl of the rendered production build.

## Search-intent map

These are editorial targeting choices based on the services and the requested market, not measured keyword-volume claims.

| Intent                                                   | Primary page                                         | Supporting content                                              |
| -------------------------------------------------------- | ---------------------------------------------------- | --------------------------------------------------------------- |
| Website and app developers in Kakinada                   | `/`                                                  | Clear location and links to both local service pages            |
| Website developers / website design in Kakinada          | `/website-development-kakinada`                      | Website scope, local delivery model, quote questions            |
| App developers / Android and iOS development in Kakinada | `/app-development-kakinada`                          | Platform decisions, backend needs, release responsibilities     |
| Website development services                             | `/services/website-development`                      | Detailed deliverables and related services                      |
| SaaS, UI/UX, automation, e-commerce, SEO, software       | The corresponding `/services/[slug]` page            | Distinct service content and internal links                     |
| Choosing a website developer in Kakinada                 | `/insights/how-to-choose-website-developer-kakinada` | Evaluation and handover checklist                               |
| Website development cost                                 | `/insights/website-development-cost-planning`        | Cost drivers and quotation preparation, without invented prices |
| Website versus mobile app                                | `/insights/website-vs-mobile-app-for-business`       | Decision guidance based on user tasks                           |

“Near me” searches also depend on the searcher’s location and other signals. Repeating that phrase or claiming offices in nearby cities does not establish local presence. No duplicate city landing pages or unsupported leadership claims were added.

## Deployment required for the business domain

The GitHub branch is `vrk-corporate-website` in `vrksolutionsinfo-beep/vrk-solutions-website`. Publishing the demonstration Site does not modify the existing `www.vrksolutions.in` hosting or DNS.

Deploy this Next.js server application on the domain’s host. Configure:

```dotenv
NEXT_PUBLIC_SITE_URL=https://www.vrksolutions.in
SITE_INDEXING_ENABLED=true
```

Keep `SITE_INDEXING_ENABLED=false` on previews. Vercel preview deployments are also automatically excluded from indexing. Connect Sanity and email using the existing environment instructions. Retain a permanent non-www to www redirect and HTTPS; if the business later deliberately changes its preferred host, update all environment values and redirects together. Review legacy URLs before migration. Homepage fragment links are not server routes; don't add fragment URLs to the sitemap.

The Sites demonstration remains noindex so it does not compete with the business domain. Its pages allow crawlers to read the noindex directive, and its sitemap is empty. Removing this protection is not a substitute for deploying the production branch.

## Owner/account actions after domain deployment

1. Verify the domain in Google Search Console and Bing Webmaster Tools. Optional environment variables `GOOGLE_SITE_VERIFICATION` and `BING_SITE_VERIFICATION` support verification tags; use the actual values from those accounts. DNS verification may be preferable for a domain property.
2. Submit `https://www.vrksolutions.in/sitemap.xml`. Inspect the homepage, both Kakinada pages and a service page using the real account's URL Inspection tool. Check Google's selected canonical and indexability after crawling.
3. Confirm the production forms deliver enquiries and that phone/email links are correct. Measure qualified enquiries alongside relevant query impressions and clicks. No analytics or advertising trackers were added without a configured measurement and consent plan.
4. Review Search Console query/page data after launch and as it accumulates; improve pages based on actual questions and conversion quality. Do not interpret daily ranking changes or one search location as a complete performance report.
5. Publish real, permission-approved case studies and genuine business details. Add earned references and legitimate business citations where appropriate. Do not buy links or fabricate reviews.
6. Google Business Profile currently requires in-person customer contact and excludes online-only businesses. The confirmed digital-only operation should not be presented as a walk-in office or an eligible Maps listing. If the operating model changes, reassess eligibility against the current rules.

## Verification scope

See `SEO-VERIFICATION.json` for the rendered crawl. Run `npm run build`, `npm run lint`, `npm test`, then start the production application on port 3100 and run `npm run seo:check`. The checker follows internal links, checks page status and metadata, parses JSON-LD, compares FAQ answers with visible content, validates sitemap discovery and checks missing routes.

Search-engine indexing, rich-result appearance, AI citations and rankings have not been verified and cannot be guaranteed. Live CMS/account integration, browser performance measurements and real-device accessibility remain separate checks. FAQ schema describes visible answers; it does not imply eligibility for Google FAQ rich results, which are generally limited to authoritative government and health sites.

## Sources consulted

- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google: Optimizing for generative AI search](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Google: Local ranking factors](https://support.google.com/business/answer/7091)
- [Google: Business Profile eligibility](https://support.google.com/business/answer/13763036)
- [Google: LocalBusiness structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google: FAQ rich-result changes](https://developers.google.com/search/blog/2023/08/howto-faq-changes)
- [OpenAI: Crawler documentation](https://developers.openai.com/api/docs/bots)
- Installed Next.js documentation for metadata, static exports, robots, sitemaps, loading and not-found response behaviour.
