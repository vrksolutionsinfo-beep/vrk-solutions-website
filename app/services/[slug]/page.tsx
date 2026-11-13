import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import Button from "@/components/ui/Button";
import SectionReveal from "@/components/ui/SectionReveal";
import ServiceFAQ from "@/components/sections/ServiceFAQ";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.name} — VRK Solutions`,
    description: service.shortDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} | VRK Solutions`,
      description: service.shortDescription,
      url: `https://vrksolutions.in/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div className="w-full">
      {/* Service Hero */}
      <section className="py-16 lg:py-24 border-b border-brand-hairline bg-brand-warm-ivory">
        <div className="container-main">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-sm font-bold text-brand-orange px-2.5 py-1 rounded bg-brand-soft-surface border border-brand-hairline">
                SERVICE {service.number}
              </span>
              <span className="text-xs font-mono text-brand-secondary-text uppercase">
                Enterprise Engineering
              </span>
            </div>

            <h1 className="text-display-lg text-brand-primary-text mb-6">
              {service.heroHeadline}
            </h1>

            <p className="text-body-lg text-brand-secondary-text mb-8">
              {service.heroSummary}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="primary" href={`/get-quote?service=${encodeURIComponent(service.name)}`}>
                Request a Proposal
              </Button>
              <Button variant="secondary" href="/book-consultation">
                Book Architecture Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-spacing border-b border-brand-hairline bg-brand-white">
        <div className="container-narrow">
          <SectionReveal>
            <span className="font-mono text-xs font-semibold tracking-widest text-brand-orange uppercase block mb-3">
              Value Proposition
            </span>
            <blockquote className="text-display-md text-brand-primary-text font-bold leading-tight mb-8">
              &ldquo;{service.valueProposition}&rdquo;
            </blockquote>
          </SectionReveal>

          {/* Business Problems Solved */}
          <SectionReveal>
            <div className="mt-12 p-8 border border-brand-hairline rounded-lg bg-brand-soft-surface/50">
              <h2 className="text-lg font-bold text-brand-primary-text mb-4">
                Core Business Challenges Addressed
              </h2>
              <ul className="space-y-3">
                {service.businessProblems.map((prob, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-brand-secondary-text">
                    <span className="font-mono text-brand-orange font-bold">0{idx + 1}.</span>
                    <span>{prob}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="section-spacing border-b border-brand-hairline bg-brand-warm-ivory">
        <div className="container-main">
          <SectionReveal>
            <div className="max-w-2xl mb-12">
              <span className="font-mono text-xs font-semibold tracking-widest text-brand-orange uppercase block mb-2">
                Capabilities
              </span>
              <h2 className="text-display-md text-brand-primary-text">
                Technical Scope & Deliverables
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.capabilities.map((cap, idx) => (
              <SectionReveal key={idx}>
                <div className="p-8 border border-brand-hairline rounded-lg bg-brand-white">
                  <span className="font-mono text-xs font-bold text-brand-orange block mb-2">
                    CAPABILITY {idx + 1}
                  </span>
                  <h3 className="text-xl font-bold text-brand-primary-text mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-body text-brand-secondary-text">
                    {cap.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Methodology */}
      <section className="section-spacing border-b border-brand-hairline bg-brand-white">
        <div className="container-main">
          <SectionReveal>
            <div className="max-w-2xl mb-12">
              <span className="font-mono text-xs font-semibold tracking-widest text-brand-orange uppercase block mb-2">
                Structured Execution
              </span>
              <h2 className="text-display-md text-brand-primary-text">
                Service Delivery Methodology
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.methodology.map((step) => (
              <SectionReveal key={step.step}>
                <div className="p-6 border border-brand-hairline rounded-lg bg-brand-warm-ivory/30">
                  <span className="font-mono text-2xl font-bold text-brand-orange block mb-3">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-brand-primary-text mb-2">
                    {step.title}
                  </h3>
                  <p className="text-body-sm text-brand-secondary-text">
                    {step.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Applications */}
      <section className="py-12 border-b border-brand-hairline bg-brand-soft-surface/60">
        <div className="container-main">
          <span className="font-mono text-xs font-semibold tracking-widest text-brand-primary-text uppercase block mb-4">
            Commercial Use-Cases & Applications
          </span>
          <div className="flex flex-wrap gap-3">
            {service.applications.map((app, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full border border-brand-hairline bg-white text-sm font-semibold text-brand-primary-text"
              >
                {app}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="section-spacing border-b border-brand-hairline bg-brand-white">
          <div className="container-main">
            <div className="max-w-2xl mb-12">
              <span className="font-mono text-xs font-semibold tracking-widest text-brand-orange uppercase block mb-2">
                Service FAQs
              </span>
              <h2 className="text-display-md text-brand-primary-text">
                Questions Regarding {service.name}
              </h2>
            </div>
            <ServiceFAQ faqs={service.faqs} />
          </div>
        </section>
      )}

      {/* Related Services */}
      <section className="section-spacing border-b border-brand-hairline bg-brand-warm-ivory">
        <div className="container-main">
          <span className="font-mono text-xs font-semibold tracking-widest text-brand-orange uppercase block mb-6">
            Complementary Disciplines
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <Link
                key={rel.id}
                href={`/services/${rel.slug}`}
                className="p-6 border border-brand-hairline rounded-lg bg-white hover:border-brand-orange transition"
              >
                <span className="font-mono text-xs text-brand-orange font-bold block mb-1">
                  {rel.number}
                </span>
                <h3 className="font-bold text-brand-primary-text mb-2">
                  {rel.name}
                </h3>
                <p className="text-xs text-brand-secondary-text line-clamp-2">
                  {rel.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-brand-primary-text text-white text-center">
        <div className="container-narrow">
          <h2 className="text-display-md font-bold mb-4">
            Ready to Begin Your {service.name} Project?
          </h2>
          <p className="text-body text-zinc-300 mb-8 max-w-xl mx-auto">
            Discuss your requirements with our lead technical architects and get a tailored delivery proposal.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" size="lg" href={`/get-quote?service=${encodeURIComponent(service.name)}`}>
              Request Detailed Proposal
            </Button>
            <Button variant="secondary" size="lg" href="/contact" className="text-white border-white hover:bg-white/10">
              General Enquiry
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
