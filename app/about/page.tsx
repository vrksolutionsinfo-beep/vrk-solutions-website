import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import Button from "@/components/ui/Button";
import SectionReveal from "@/components/ui/SectionReveal";

export const metadata: Metadata = {
  title: "About VRK Solutions",
  description:
    "Learn about VRK Solutions — a technology services company building digital products for businesses that value engineering quality, transparent delivery, and long-term partnership.",
  alternates: { canonical: "/about" },
};

const PRINCIPLES = [
  {
    number: "01",
    title: "Business-Led Discovery",
    description:
      "Every project begins with understanding your commercial objectives, user needs, and operational constraints — not jumping straight to code.",
  },
  {
    number: "02",
    title: "Rigorous Engineering Standards",
    description:
      "Strict TypeScript typing, automated testing, accessible markup, and performance budgets are non-negotiable on every engagement.",
  },
  {
    number: "03",
    title: "Transparent Communication",
    description:
      "Weekly progress updates, live staging access, and honest timelines. No black-box processes, no surprises at the finish line.",
  },
  {
    number: "04",
    title: "User-Centered Design",
    description:
      "Interfaces are designed around real user tasks and tested against real behavior — not decorated based on assumptions or trends.",
  },
  {
    number: "05",
    title: "Security by Default",
    description:
      "Data encryption, strict input validation, dependency auditing, and secure deployment practices are built in from the first commit.",
  },
  {
    number: "06",
    title: "Long-Term Product Thinking",
    description:
      "We architect for extensibility and maintainability. The decisions we make today should reduce — not increase — your costs tomorrow.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="section-spacing bg-brand-warm-ivory">
        <div className="container-main">
          <SectionReveal>
            <h1 className="text-display-hero text-brand-primary-text">
              About {COMPANY.name}
            </h1>
            <p className="mt-6 text-body-lg text-brand-secondary-text max-w-3xl">
              A technology services company building digital products for
              businesses that value engineering quality, transparent delivery,
              and long-term partnership.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="section-spacing bg-brand-soft-surface">
        <div className="container-narrow">
          <SectionReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-brand-hairline rounded-lg p-8">
                <p className="text-label text-brand-orange mb-4">Our Mission</p>
                <p className="text-display-sm text-brand-primary-text">
                  To deliver technology solutions with integrity, precision, and
                  measurable impact.
                </p>
              </div>
              <div className="bg-white border border-brand-hairline rounded-lg p-8">
                <p className="text-label text-brand-orange mb-4">Our Vision</p>
                <p className="text-display-sm text-brand-primary-text">
                  To be the engineering partner businesses trust for their most
                  important digital products.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── How We Think ── */}
      <section className="section-spacing">
        <div className="container-narrow">
          <SectionReveal>
            <h2 className="text-display-md text-brand-primary-text mb-8">
              How We Think
            </h2>
            <div className="space-y-6 text-body-lg text-brand-secondary-text">
              <p>
                We believe technology should be purposeful — every feature,
                every screen, every API endpoint should exist because it serves
                a verified business need or solves a genuine user problem.
                Anything else is noise that increases maintenance burden and
                dilutes focus.
              </p>
              <p>
                Our engineering culture deliberately avoids unnecessary
                complexity. We choose proven, well-supported technologies over
                speculative ones. We write strongly typed code because it
                prevents entire categories of runtime failure. We document our
                systems because undocumented software becomes legacy the moment
                its original author walks away.
              </p>
              <p>
                Ultimately, our measure of success is not how technically
                impressive a system is internally — it is how effectively it
                serves the people who use it every day. User outcomes, business
                results, and operational reliability are the metrics that matter.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── Core Principles ── */}
      <section className="section-spacing bg-brand-soft-surface">
        <div className="container-main">
          <SectionReveal>
            <h2 className="text-display-md text-brand-primary-text mb-12">
              Core Principles
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRINCIPLES.map((p) => (
              <SectionReveal key={p.number}>
                <div className="bg-white border border-brand-hairline rounded-lg p-8 h-full">
                  <span className="font-mono text-5xl font-bold text-brand-hairline">
                    {p.number}
                  </span>
                  <h3 className="text-display-sm mt-4 mb-3 text-brand-primary-text">
                    {p.title}
                  </h3>
                  <p className="text-body text-brand-secondary-text">
                    {p.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-spacing">
        <div className="container-narrow text-center">
          <SectionReveal>
            <h2 className="text-display-md text-brand-primary-text mb-4">
              Ready to Build Something Meaningful?
            </h2>
            <p className="text-body-lg text-brand-secondary-text mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how {COMPANY.name} can bring engineering
              precision and transparent delivery to your next project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" size="lg">
                Contact Us
              </Button>
              <Button href="/get-quote" variant="secondary" size="lg">
                Get a Quote
              </Button>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
