# Deployment

Deploy this Next.js server application to a supported Node host such as Vercel. Build command `npm run build`; Node 22+. Configure the environment from `.env.example`, attach vrksolutions.in and configure DNS/TLS. Do not expose server tokens with NEXT_PUBLIC names.

Before public launch:

- Connect the real Sanity project, dataset, editor access and CORS origin. Test editorial publication and draft preview with real credentials.
- Verify the Resend sender domain and send/receive a real test enquiry. Configure platform rate limiting for `/api/enquiry` and monitoring without logging enquiry bodies.
- Review draft legal copy with the business, adding legal entity, registered address, retention details and jurisdiction.
- Supply approved case-study content and screenshots. No projects or testimonials have been fabricated.
- PNG social artwork and metadata are implemented; verify rich-link rendering on the final domain.
- Run Playwright in a browser-enabled environment, test screen readers, keyboard navigation, contrast, real mobile devices and WebGL fallback.
- Review CMS coverage: tagline, page intros/editorial bodies, articles and case studies are editable; hero and closing copy, services, process steps and FAQs are editable; module layouts and some section headings remain source-managed.
- Verify the generated sitemap includes approved published article and case-study URLs.

No live deployment, CMS authentication or transactional delivery has been performed without account credentials. The repository is an implemented foundation with the listed production prerequisites, not a claim of completed external service setup.

Search rollout: use the canonical www host already served by the domain, set SITE_INDEXING_ENABLED=true in production and false on previews, and follow SEO-AUDIT.md. The Sites demonstration remains noindex.
