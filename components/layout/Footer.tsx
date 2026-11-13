import Link from "next/link";
import Image from "next/image";

const services = [
  { label: "Website Design & Development", slug: "website-design-development" },
  { label: "Web Applications & SaaS", slug: "web-applications-saas" },
  { label: "Mobile App Development", slug: "mobile-app-development" },
  { label: "UI/UX Design", slug: "ui-ux-design" },
  { label: "AI & Automation Solutions", slug: "ai-automation-solutions" },
  { label: "Digital Marketing & SEO", slug: "digital-marketing-seo" },
  { label: "E-Commerce Development", slug: "e-commerce-development" },
  { label: "Software Development", slug: "software-development" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "FAQ", href: "/faq" },
];

const contact = [
  {
    label: "info@vrksolutions.in",
    href: "mailto:info@vrksolutions.in",
    external: true,
  },
  {
    label: "+91 93988 45947",
    href: "tel:+919398845947",
    external: true,
  },
  {
    label: "WhatsApp Us",
    href: "https://wa.me/919398845947",
    external: true,
  },
  {
    label: "Book Consultation",
    href: "/book-consultation",
    external: false,
  },
  {
    label: "Get a Quote",
    href: "/get-quote",
    external: false,
  },
];

function FooterLogo() {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="VRK Solutions – Home">
      <Image
        src="/brand/vrk-logo-dark.png"
        alt="VRK Solutions"
        width={260}
        height={40}
        className="h-9 sm:h-10 w-auto object-contain"
      />
    </Link>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-brand-orange">
      {children}
    </h3>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary-text" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 lg:px-8 lg:pt-20">
        {/* Main grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <FooterLogo />

            <p className="mt-4 font-mono text-xs font-medium uppercase tracking-[0.15em] text-brand-orange">
              WE BUILD. WE SCALE. WE DOMINATE.
            </p>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-warm-neutral/80">
              We craft premium digital experiences — websites, applications, and
              growth strategies — engineered to elevate ambitious brands and
              deliver measurable results.
            </p>

            <div className="mt-6 text-xs text-brand-warm-neutral/60">
              <p>© {year} VRK Solutions.</p>
              <p className="mt-0.5">vrksolutions.in</p>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <SectionHeading>Services</SectionHeading>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-brand-warm-ivory/80 transition-colors duration-150 hover:text-brand-orange"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <SectionHeading>Company</SectionHeading>
            <ul className="space-y-2.5">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-brand-warm-ivory/80 transition-colors duration-150 hover:text-brand-orange"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Get in Touch */}
          <div>
            <SectionHeading>Get in Touch</SectionHeading>
            <ul className="space-y-2.5">
              {contact.map((c) =>
                c.external ? (
                  <li key={c.href}>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-brand-warm-ivory/80 transition-colors duration-150 hover:text-brand-orange"
                    >
                      {c.label}
                    </a>
                  </li>
                ) : (
                  <li key={c.href}>
                    <Link
                      href={c.href}
                      className="text-sm text-brand-warm-ivory/80 transition-colors duration-150 hover:text-brand-orange"
                    >
                      {c.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-xs text-brand-warm-neutral/60 transition-colors duration-150 hover:text-brand-orange"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-xs text-brand-warm-neutral/60 transition-colors duration-150 hover:text-brand-orange"
            >
              Terms
            </Link>
          </div>
          <p className="text-xs text-brand-warm-neutral/60">
            Designed &amp; Engineered by VRK Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
