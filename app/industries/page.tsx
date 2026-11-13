import type { Metadata } from "next";
import { INDUSTRIES } from "@/lib/constants";
import Button from "@/components/ui/Button";
import SectionReveal from "@/components/ui/SectionReveal";

export const metadata: Metadata = {
  title: "Industries We Serve — Cross-Sector Digital Solutions",
  description:
    "Tailored digital architectures for SaaS, Fintech, Healthcare, E-Commerce, Logistics, Real Estate, and Enterprise sectors.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-16 lg:py-24 border-b border-brand-hairline bg-brand-warm-ivory">
        <div className="container-main max-w-3xl">
          <span className="font-mono text-xs font-semibold tracking-widest text-brand-orange uppercase block mb-3">
            Industry Applications
          </span>
          <h1 className="text-display-lg text-brand-primary-text mb-6">
            Domain-Specific Digital Architectures.
          </h1>
          <p className="text-body-lg text-brand-secondary-text">
            While technical fundamentals remain universal, operating realities differ across industries. We design software architectures engineered to meet domain compliance, transaction velocities, and customer expectations.
          </p>
        </div>
      </section>

      {/* Industries Matrix */}
      <section className="section-spacing bg-brand-white border-b border-brand-hairline">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INDUSTRIES.map((ind) => (
              <SectionReveal key={ind.id}>
                <div className="p-8 border border-brand-hairline rounded-lg bg-brand-warm-ivory/30 hover:border-brand-orange/50 transition flex flex-col justify-between">
                  <div>
                    <h2 className="text-display-sm text-brand-primary-text mb-4">
                      {ind.name}
                    </h2>

                    <div className="mb-4">
                      <span className="font-mono text-xs uppercase font-bold text-brand-secondary-text block mb-1">
                        Common Industry Challenges
                      </span>
                      <p className="text-sm text-brand-secondary-text">
                        {ind.challenges}
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-xs uppercase font-bold text-brand-orange block mb-1">
                        Engineered Solutions
                      </span>
                      <p className="text-sm text-brand-primary-text font-medium">
                        {ind.solutions}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-brand-hairline">
                    <Button variant="ghost" href={`/get-quote?service=${encodeURIComponent(ind.name)}`}>
                      Explore Solutions for {ind.name} →
                    </Button>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Industry Summary */}
      <section className="section-spacing bg-brand-soft-surface/50 text-center">
        <div className="container-narrow">
          <h2 className="text-display-sm font-bold text-brand-primary-text mb-4">
            Operating in Another Sector?
          </h2>
          <p className="text-body text-brand-secondary-text mb-8">
            Our engineering team builds custom software for unique business models worldwide. Tell us about your operational constraints.
          </p>
          <Button variant="primary" href="/contact">
            Discuss Your Custom Use Case
          </Button>
        </div>
      </section>
    </div>
  );
}
