import type { Metadata } from "next";
import Link from "next/link";
import { INITIAL_CASE_STUDIES } from "@/lib/constants";
import Button from "@/components/ui/Button";
import SectionReveal from "@/components/ui/SectionReveal";

export const metadata: Metadata = {
  title: "Case Studies & Work — Technical Portfolio",
  description:
    "Engineering demonstrations, architecture proofs of concept, and custom software systems built by VRK Solutions.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-16 lg:py-24 border-b border-brand-hairline bg-brand-warm-ivory">
        <div className="container-main">
          <span className="font-mono text-xs font-semibold tracking-widest text-brand-orange uppercase block mb-3">
            Portfolio & Demonstrations
          </span>
          <h1 className="text-display-lg text-brand-primary-text max-w-3xl">
            Technical Architecture in Action.
          </h1>
          <p className="text-body-lg text-brand-secondary-text mt-6 max-w-2xl">
            Explore our engineering prototypes and case studies demonstrating system performance, decoupled architectures, and clean product design.
          </p>

          <div className="mt-8 p-4 rounded-md bg-brand-soft-surface border border-brand-hairline max-w-2xl text-xs text-brand-secondary-text">
            <strong className="text-brand-primary-text font-semibold">Transparency Notice:</strong> All client case studies published here adhere strictly to non-disclosure agreements. Unverified client names and metrics are never fabricated; projects marked &ldquo;Concept Demo&rdquo; represent internal engineering prototypes.
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="section-spacing bg-brand-white border-b border-brand-hairline">
        <div className="container-main">
          <div className="space-y-12">
            {INITIAL_CASE_STUDIES.map((project) => (
              <SectionReveal key={project._id}>
                <div className="p-8 lg:p-12 border border-brand-hairline rounded-lg bg-brand-warm-ivory/30 flex flex-col lg:flex-row gap-8 items-start justify-between">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-brand-soft-surface text-brand-orange">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-brand-secondary-text">
                        {project.industry}
                      </span>
                    </div>

                    <h2 className="text-display-sm text-brand-primary-text mb-4">
                      {project.name}
                    </h2>

                    <p className="text-body text-brand-secondary-text mb-6">
                      {project.overview}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div>
                        <strong className="text-xs font-mono text-brand-primary-text uppercase block">
                          The Challenge
                        </strong>
                        <p className="text-xs text-brand-secondary-text mt-1">
                          {project.businessProblem}
                        </p>
                      </div>
                      <div>
                        <strong className="text-xs font-mono text-brand-primary-text uppercase block">
                          Delivered Architecture
                        </strong>
                        <p className="text-xs text-brand-secondary-text mt-1">
                          {project.proposedSolution}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-mono px-2 py-0.5 rounded bg-white text-brand-primary-text border border-brand-hairline"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/work/${project.slug.current}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-brand-deep-orange"
                    >
                      Read In-Depth Case Study & Technical Review <span>→</span>
                    </Link>
                  </div>

                  <div className="w-full lg:w-72 p-6 rounded-md bg-white border border-brand-hairline text-center self-stretch flex flex-col justify-center">
                    <span className="font-mono text-xs uppercase text-brand-secondary-text block mb-2">
                      Key Result
                    </span>
                    <p className="text-base font-bold text-brand-primary-text mb-6">
                      {project.results}
                    </p>
                    <Button variant="secondary" href="/contact">
                      Request Similar Build
                    </Button>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
