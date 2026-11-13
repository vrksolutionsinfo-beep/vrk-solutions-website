import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import Button from "@/components/ui/Button";
import SectionReveal from "@/components/ui/SectionReveal";

export const metadata: Metadata = {
  title: "Services — Software, Web & AI Engineering",
  description:
    "Explore our eight core disciplines: Website Design & Development, Web Applications & SaaS, Mobile Apps, UI/UX, AI Automation, SEO, E-commerce, and Custom Software.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-16 lg:py-24 border-b border-brand-hairline bg-brand-warm-ivory">
        <div className="container-main">
          <span className="font-mono text-xs font-semibold tracking-widest text-brand-orange uppercase block mb-3">
            Core Technical Capabilities
          </span>
          <h1 className="text-display-lg text-brand-primary-text max-w-3xl">
            Engineering Disciplines Tailored for Growth.
          </h1>
          <p className="text-body-lg text-brand-secondary-text mt-6 max-w-2xl">
            We operate across eight specialized software and design practices. Each service delivers dependable engineering, high usability, and business value.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-spacing bg-brand-white border-b border-brand-hairline">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((s) => (
              <SectionReveal key={s.id}>
                <div className="p-8 lg:p-10 border border-brand-hairline rounded-lg bg-brand-warm-ivory/20 flex flex-col justify-between hover:border-brand-orange/40 transition">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="font-mono text-4xl font-bold text-brand-orange">
                        {s.number}
                      </span>
                      <span className="text-xs font-mono text-brand-secondary-text uppercase">
                        Enterprise Grade
                      </span>
                    </div>

                    <h2 className="text-display-sm text-brand-primary-text mb-4">
                      {s.name}
                    </h2>

                    <p className="text-body text-brand-secondary-text mb-6">
                      {s.shortDescription}
                    </p>

                    <div className="mb-6">
                      <span className="text-xs font-mono text-brand-primary-text uppercase font-semibold block mb-2">
                        Core Capabilities
                      </span>
                      <ul className="text-xs text-brand-secondary-text space-y-1.5">
                        {s.capabilities.slice(0, 3).map((cap, idx) => (
                          <li key={idx}>• {cap.title}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    href={`/services/${s.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-brand-deep-orange pt-4 border-t border-brand-hairline"
                  >
                    Explore Service Architecture & Methodology <span>→</span>
                  </Link>
                </div>
              </SectionReveal>
            ))}
          </div>

          <div className="mt-16 p-8 border border-brand-hairline rounded-lg bg-brand-soft-surface text-center">
            <h3 className="text-xl font-bold text-brand-primary-text mb-2">
              Need a Multi-Discipline Solution?
            </h3>
            <p className="text-body text-brand-secondary-text max-w-xl mx-auto mb-6">
              Most ambitious digital transformations require cross-discipline execution — combining SaaS engineering, mobile apps, and automated workflows.
            </p>
            <Button variant="primary" href="/contact">
              Discuss a Custom Engagement
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
