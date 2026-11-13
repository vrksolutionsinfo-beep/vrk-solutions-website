import type { Metadata } from "next";
import { PROCESS_PHASES } from "@/lib/constants";
import Button from "@/components/ui/Button";
import SectionReveal from "@/components/ui/SectionReveal";

export const metadata: Metadata = {
  title: "Engineering Process & Delivery Framework — VRK Solutions",
  description:
    "Explore our six-stage software delivery methodology: Discover, Strategize, Design, Develop, Test & Launch, and Improve & Scale.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-16 lg:py-24 border-b border-brand-hairline bg-brand-warm-ivory">
        <div className="container-main max-w-3xl">
          <span className="font-mono text-xs font-semibold tracking-widest text-brand-orange uppercase block mb-3">
            Execution Framework
          </span>
          <h1 className="text-display-lg text-brand-primary-text mb-6">
            A Rigorous, Repeatable Engineering Methodology.
          </h1>
          <p className="text-body-lg text-brand-secondary-text">
            Predictable outcomes demand disciplined project management. We combine modern agile engineering cycles with clear architectural checkpoints and transparent deliverables.
          </p>
        </div>
      </section>

      {/* Process Deep Dive */}
      <section className="section-spacing bg-brand-white border-b border-brand-hairline">
        <div className="container-main space-y-16">
          {PROCESS_PHASES.map((phase) => (
            <SectionReveal key={phase.phase}>
              <div className="p-8 lg:p-12 border border-brand-hairline rounded-lg bg-brand-warm-ivory/20 grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-brand-hairline pb-6 lg:pb-0 lg:pr-8">
                  <span className="font-mono text-5xl font-extrabold text-brand-orange block mb-4">
                    {phase.phase}
                  </span>
                  <h2 className="text-display-sm text-brand-primary-text mb-2">
                    {phase.name}
                  </h2>
                  <p className="text-sm font-semibold text-brand-orange mb-4">
                    {phase.headline}
                  </p>
                  <p className="text-body-sm text-brand-secondary-text">
                    {phase.summary}
                  </p>
                </div>

                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-mono text-xs uppercase font-bold text-brand-primary-text mb-3">
                      Key Activities
                    </h3>
                    <ul className="text-sm text-brand-secondary-text space-y-2">
                      {phase.activities.map((act, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-brand-orange">•</span>
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-mono text-xs uppercase font-bold text-brand-primary-text mb-3">
                      Typical Deliverables
                    </h3>
                    <ul className="text-sm text-brand-secondary-text space-y-2 mb-6">
                      {phase.deliverables.map((del, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-brand-orange">✓</span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="p-4 rounded bg-white border border-brand-hairline text-xs text-brand-secondary-text">
                      <strong className="text-brand-primary-text block mb-1">Collaboration Model:</strong>
                      {phase.collaboration}
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-brand-primary-text text-white text-center">
        <div className="container-narrow">
          <h2 className="text-display-md font-bold mb-4">
            Experience Transparent Project Delivery
          </h2>
          <p className="text-body text-zinc-300 mb-8 max-w-xl mx-auto">
            Book an introductory architecture discovery session to review how this process maps to your upcoming initiative.
          </p>
          <Button variant="primary" size="lg" href="/contact">
            Start Discovery Process
          </Button>
        </div>
      </section>
    </div>
  );
}
