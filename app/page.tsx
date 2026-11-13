import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, SERVICES, PROCESS_PHASES, INDUSTRIES, INITIAL_CASE_STUDIES, GENERAL_FAQS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import SectionReveal from "@/components/ui/SectionReveal";
import Hero3DCanvas from "@/components/three/Hero3DCanvas";
import HomeFAQ from "@/components/sections/HomeFAQ";
import ProjectBriefBuilder from "@/components/sections/ProjectBriefBuilder";
import { whatsappUrl, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "VRK Solutions — We Build. We Scale. We Dominate.",
  description:
    "From ambitious websites to intelligent software platforms, VRK Solutions designs and engineers digital products built for real business growth.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* =========================================================================
          SECTION 1: SIGNATURE HERO WITH 3D MONOLITH
          ========================================================================= */}
      <section className="relative min-h-[calc(100vh-4.5rem)] flex items-center border-b border-brand-hairline bg-gradient-to-b from-brand-warm-ivory via-brand-warm-ivory to-brand-soft-surface/60 py-12 lg:py-20">
        <div className="container-main w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-soft-surface border border-brand-hairline w-fit mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                <span className="font-mono text-xs font-semibold tracking-wider text-brand-primary-text uppercase">
                  Technology Engineering & Delivery
                </span>
              </div>

              <h1 className="text-display-hero text-brand-primary-text max-w-3xl">
                We Build Digital Experiences That Move Businesses Forward.
              </h1>

              {/* Tagline callout */}
              <div className="mt-4 flex items-center gap-3">
                <div className="h-[2px] w-8 bg-brand-orange" />
                <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.22em] text-brand-orange">
                  {COMPANY.tagline}
                </span>
              </div>

              <p className="text-body-lg text-brand-secondary-text mt-6 max-w-2xl">
                {COMPANY.subheadline}
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button variant="primary" size="lg" href="/contact">
                  Start Your Project
                </Button>
                <Button variant="secondary" size="lg" href="/services">
                  Explore Our Services
                </Button>
              </div>

              {/* Technical confidence metric pill */}
              <div className="mt-12 pt-8 border-t border-brand-hairline flex flex-wrap gap-8 text-xs font-mono text-brand-secondary-text">
                <div>
                  <span className="block text-base font-bold text-brand-primary-text">8 Core</span>
                  Disciplines
                </div>
                <div>
                  <span className="block text-base font-bold text-brand-primary-text">Next.js / TypeScript</span>
                  Standard Stack
                </div>
                <div>
                  <span className="block text-base font-bold text-brand-primary-text">Global & India</span>
                  Client Delivery
                </div>
              </div>
            </div>

            {/* Right 3D Monolith Experience */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <div className="w-full max-w-lg lg:max-w-none">
                <Hero3DCanvas />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: INTRODUCTORY EDITORIAL STATEMENT
          ========================================================================= */}
      <section className="section-spacing border-b border-brand-hairline bg-brand-white">
        <div className="container-narrow text-center">
          <SectionReveal>
            <span className="font-mono text-xs font-semibold tracking-widest text-brand-orange uppercase block mb-4">
              Company Positioning
            </span>
            <blockquote className="text-display-md text-brand-primary-text max-w-3xl mx-auto font-bold leading-tight">
              &ldquo;Technology should do more than exist. It should solve problems, open opportunities, and create momentum.&rdquo;
            </blockquote>
            <p className="text-body-lg text-brand-secondary-text mt-6 max-w-2xl mx-auto">
              VRK Solutions is an independent technology partner serving ambitious founders, expanding businesses, and enterprise teams. We deliver end-to-end software, high-performing websites, and intelligent automation built with architectural discipline.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: SERVICES SHOWCASE (8 SERVICES DIRECTORY)
          ========================================================================= */}
      <section className="section-spacing border-b border-brand-hairline bg-brand-warm-ivory">
        <div className="container-main">
          <SectionReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="font-mono text-xs font-semibold tracking-widest text-brand-orange uppercase block mb-2">
                  Our Engineering Disciplines
                </span>
                <h2 className="text-display-lg text-brand-primary-text">
                  Services Engineered for Scale.
                </h2>
              </div>
              <p className="text-body text-brand-secondary-text max-w-md mt-4 md:mt-0">
                Eight specialized capability centers built around modern web standards, resilient cloud architectures, and conversion-focused UX.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 border-t border-l border-brand-hairline">
            {SERVICES.map((service) => (
              <SectionReveal key={service.id}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block p-8 lg:p-12 border-r border-b border-brand-hairline bg-brand-white hover:bg-brand-soft-surface transition-all duration-300 relative"
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-mono text-3xl lg:text-4xl font-bold text-brand-hairline group-hover:text-brand-orange transition-colors">
                      {service.number}
                    </span>
                    <span className="w-8 h-8 rounded-full border border-brand-hairline flex items-center justify-center text-brand-primary-text group-hover:border-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="text-display-sm text-brand-primary-text group-hover:text-brand-orange transition-colors mb-3">
                    {service.name}
                  </h3>
                  <p className="text-body text-brand-secondary-text line-clamp-3">
                    {service.shortDescription}
                  </p>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: HOW WE WORK (METHODOLOGY TIMELINE)
          ========================================================================= */}
      <section className="section-spacing border-b border-brand-hairline bg-brand-white">
        <div className="container-main">
          <SectionReveal>
            <div className="max-w-3xl mb-16">
              <span className="font-mono text-xs font-semibold tracking-widest text-brand-orange uppercase block mb-2">
                Standard Methodology
              </span>
              <h2 className="text-display-lg text-brand-primary-text">
                A Clear Process. Built Around Your Goals.
              </h2>
              <p className="text-body-lg text-brand-secondary-text mt-4">
                We eliminate guesswork through a disciplined six-stage development framework tailored to enterprise reliability and rapid iteration.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROCESS_PHASES.map((phase) => (
              <SectionReveal key={phase.phase}>
                <div className="p-8 border border-brand-hairline rounded-lg bg-brand-warm-ivory/40 hover:border-brand-orange/40 transition">
                  <span className="font-mono text-2xl font-bold text-brand-orange block mb-3">
                    PHASE {phase.phase}
                  </span>
                  <h3 className="text-xl font-bold text-brand-primary-text mb-2">
                    {phase.name}
                  </h3>
                  <p className="text-sm font-semibold text-brand-primary-text mb-3">
                    {phase.headline}
                  </p>
                  <p className="text-body-sm text-brand-secondary-text mb-4">
                    {phase.summary}
                  </p>
                  <div className="pt-4 border-t border-brand-hairline">
                    <span className="font-mono text-xs text-brand-orange uppercase font-semibold block mb-2">
                      Key Deliverables
                    </span>
                    <ul className="text-xs text-brand-secondary-text space-y-1">
                      {phase.deliverables.map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="secondary" href="/process">
              Read Complete Methodology & Deliverables →
            </Button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: SELECTED WORK (CMS CASE STUDIES & DEMOS)
          ========================================================================= */}
      <section className="section-spacing border-b border-brand-hairline bg-brand-soft-surface/50">
        <div className="container-main">
          <SectionReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="font-mono text-xs font-semibold tracking-widest text-brand-orange uppercase block mb-2">
                  Portfolio & Prototypes
                </span>
                <h2 className="text-display-lg text-brand-primary-text">
                  Selected Work & Case Studies.
                </h2>
                <p className="text-xs text-brand-secondary-text italic mt-2">
                  Displaying internal engineering demonstrations and architecture proofs of concept.
                </p>
              </div>
              <Button variant="secondary" href="/work" className="mt-4 md:mt-0">
                View All Case Studies
              </Button>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INITIAL_CASE_STUDIES.map((project) => (
              <SectionReveal key={project._id}>
                <div className="bg-brand-white border border-brand-hairline rounded-lg p-8 flex flex-col justify-between hover:shadow-md transition">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-semibold px-2 py-1 rounded bg-brand-soft-surface text-brand-orange">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-brand-secondary-text">
                        CONCEPT DEMO
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-brand-primary-text mb-3">
                      {project.name}
                    </h3>

                    <p className="text-body-sm text-brand-secondary-text mb-6">
                      {project.overview}
                    </p>

                    <div className="mb-6">
                      <span className="text-xs font-mono text-brand-primary-text font-semibold uppercase block mb-2">
                        Tech Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-mono px-2 py-0.5 rounded bg-brand-warm-ivory text-brand-secondary-text border border-brand-hairline"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/work/${project.slug.current}`}
                    className="text-sm font-semibold text-brand-orange hover:text-brand-deep-orange inline-flex items-center gap-1.5 pt-4 border-t border-brand-hairline"
                  >
                    Explore Architecture Breakdown <span>→</span>
                  </Link>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: INDUSTRIES DIRECTORY PREVIEW
          ========================================================================= */}
      <section className="section-spacing border-b border-brand-hairline bg-brand-white">
        <div className="container-main">
          <SectionReveal>
            <div className="max-w-2xl mb-12">
              <span className="font-mono text-xs font-semibold tracking-widest text-brand-orange uppercase block mb-2">
                Domain Applications
              </span>
              <h2 className="text-display-lg text-brand-primary-text">
                Cross-Industry Digital Architecture.
              </h2>
              <p className="text-body text-brand-secondary-text mt-3">
                We engineer digital solutions tailored to the operating constraints and data privacy requirements of diverse market sectors.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {INDUSTRIES.slice(0, 6).map((ind) => (
              <SectionReveal key={ind.id}>
                <div className="p-6 border border-brand-hairline rounded-lg bg-brand-warm-ivory/30 hover:bg-brand-soft-surface transition">
                  <h3 className="text-lg font-bold text-brand-primary-text mb-2">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-brand-secondary-text mb-2">
                    <strong className="text-brand-primary-text">Challenges:</strong> {ind.challenges}
                  </p>
                  <p className="text-xs text-brand-secondary-text">
                    <strong className="text-brand-orange">Solutions:</strong> {ind.solutions}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="secondary" href="/industries">
              View All 10 Industry Frameworks →
            </Button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: INTERACTIVE PROJECT BRIEF BUILDER
          ========================================================================= */}
      <section className="section-spacing border-b border-brand-hairline bg-brand-warm-ivory">
        <div className="container-main">
          <ProjectBriefBuilder />
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: WHY VRK SOLUTIONS (ENGINEERING PRINCIPLES)
          ========================================================================= */}
      <section className="section-spacing border-b border-brand-hairline bg-brand-white">
        <div className="container-main">
          <SectionReveal>
            <div className="max-w-2xl mb-16">
              <span className="font-mono text-xs font-semibold tracking-widest text-brand-orange uppercase block mb-2">
                Why VRK Solutions
              </span>
              <h2 className="text-display-lg text-brand-primary-text">
                Authentic Engineering Values.
              </h2>
              <p className="text-body-lg text-brand-secondary-text mt-3">
                We avoid speculative claims and vanity metrics. Our delivery reputation rests on repeatable technical discipline and business empathy.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Business-Led Discovery",
                desc: "We diagnose your commercial objectives, unit economics, and operational bottlenecks before formulating architecture.",
              },
              {
                num: "02",
                title: "Strict Engineering Standards",
                desc: "Type safety, zero-bloat dependencies, and automated regression testing protect your software against future debt.",
              },
              {
                num: "03",
                title: "Direct Access to Engineers",
                desc: "You collaborate directly with senior developers and architects. No lost-in-translation account management layers.",
              },
              {
                num: "04",
                title: "Radical Transparency",
                desc: "Continuous live staging deployments, transparent git repositories, and honest progress communication at every stage.",
              },
              {
                num: "05",
                title: "Enterprise-Grade Security",
                desc: "Input sanitization, encrypted storage, least-privilege cloud roles, and defensive coding baked in as defaults.",
              },
              {
                num: "06",
                title: "Long-Term Scalability",
                desc: "Modular codebases that scale cleanly from your first 1,000 customers to high-concurrency enterprise workloads.",
              },
            ].map((item) => (
              <SectionReveal key={item.num}>
                <div className="p-8 border-l-2 border-brand-orange bg-brand-warm-ivory/50">
                  <span className="font-mono text-sm font-bold text-brand-orange block mb-2">
                    {item.num}
                  </span>
                  <h3 className="text-xl font-bold text-brand-primary-text mb-3">
                    {item.title}
                  </h3>
                  <p className="text-body-sm text-brand-secondary-text">
                    {item.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: FAQ PREVIEW
          ========================================================================= */}
      <section className="section-spacing border-b border-brand-hairline bg-brand-soft-surface/40">
        <div className="container-main">
          <SectionReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="font-mono text-xs font-semibold tracking-widest text-brand-orange uppercase block mb-2">
                  Frequently Answered Questions
                </span>
                <h2 className="text-display-lg text-brand-primary-text">
                  Direct Answers to Common Inquiries.
                </h2>
              </div>
              <Button variant="secondary" href="/faq" className="mt-4 md:mt-0">
                View All FAQs
              </Button>
            </div>
          </SectionReveal>

          <HomeFAQ faqs={GENERAL_FAQS.slice(0, 5)} />
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: PREMIUM CONVERSION CLOSING BANNER
          ========================================================================= */}
      <section className="section-spacing bg-brand-primary-text text-brand-white">
        <div className="container-main">
          <SectionReveal>
            <div className="max-w-4xl mx-auto text-center">
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-brand-orange uppercase block mb-4">
                {COMPANY.tagline}
              </span>
              <h2 className="text-display-lg text-white font-extrabold mb-6">
                Have Something Ambitious in Mind?
              </h2>
              <p className="text-body-lg text-zinc-300 max-w-2xl mx-auto mb-10">
                Tell us what you&apos;re building. We&apos;ll help you explore the right digital approach, estimate development scope, and architect for long-term growth.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button variant="primary" size="lg" href="/contact">
                  Let&apos;s Talk About Your Project
                </Button>
                <a
                  href={whatsappUrl(WHATSAPP_DEFAULT_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-md border border-brand-orange text-white font-semibold hover:bg-brand-orange/20 transition text-lg inline-flex items-center gap-2"
                >
                  <span>Chat on WhatsApp</span>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.109.005.253-.042.395.3.144.347.491 1.198.534 1.285.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
                  </svg>
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
