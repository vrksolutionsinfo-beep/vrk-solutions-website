import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { INITIAL_CASE_STUDIES } from "@/lib/constants";
import Button from "@/components/ui/Button";
import SectionReveal from "@/components/ui/SectionReveal";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INITIAL_CASE_STUDIES.map((p) => ({
    slug: p.slug.current,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = INITIAL_CASE_STUDIES.find((p) => p.slug.current === slug);

  if (!project) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: `${project.name} — Architecture Case Study`,
    description: project.overview,
    alternates: { canonical: `/work/${project.slug.current}` },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = INITIAL_CASE_STUDIES.find((p) => p.slug.current === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-16 lg:py-24 border-b border-brand-hairline bg-brand-warm-ivory">
        <div className="container-main max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-brand-soft-surface text-brand-orange">
              {project.category}
            </span>
            <span className="text-xs font-mono text-brand-secondary-text">
              {project.industry}
            </span>
          </div>

          <h1 className="text-display-lg text-brand-primary-text mb-6">
            {project.name}
          </h1>

          <p className="text-body-lg text-brand-secondary-text mb-8">
            {project.overview}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-mono px-3 py-1 rounded-full bg-brand-white text-brand-primary-text border border-brand-hairline"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Breakdown */}
      <section className="section-spacing bg-brand-white border-b border-brand-hairline">
        <div className="container-narrow space-y-12">
          <SectionReveal>
            <div className="p-4 bg-brand-soft-surface border border-brand-hairline rounded-md text-xs text-brand-secondary-text">
              <strong className="text-brand-primary-text">Engineering Proof of Concept:</strong> This case study describes a verified internal architecture implementation built by VRK Solutions to validate throughput, state hydration, and multi-tenant security boundaries.
            </div>
          </SectionReveal>

          <SectionReveal>
            <h2 className="text-display-sm text-brand-primary-text mb-4">
              The Commercial Problem
            </h2>
            <p className="text-body text-brand-secondary-text leading-relaxed">
              {project.businessProblem}
            </p>
          </SectionReveal>

          <SectionReveal>
            <h2 className="text-display-sm text-brand-primary-text mb-4">
              Proposed & Delivered Solution
            </h2>
            <p className="text-body text-brand-secondary-text leading-relaxed">
              {project.proposedSolution}
            </p>
          </SectionReveal>

          <SectionReveal>
            <h2 className="text-display-sm text-brand-primary-text mb-4">
              Technical Engineering Approach
            </h2>
            <p className="text-body text-brand-secondary-text leading-relaxed">
              {project.technicalApproach}
            </p>
          </SectionReveal>

          {project.results && (
            <SectionReveal>
              <div className="p-8 border border-brand-hairline rounded-lg bg-brand-warm-ivory/50">
                <span className="font-mono text-xs uppercase text-brand-orange font-bold block mb-2">
                  Observed Outcomes
                </span>
                <p className="text-xl font-bold text-brand-primary-text">
                  {project.results}
                </p>
              </div>
            </SectionReveal>
          )}

          <div className="pt-8 border-t border-brand-hairline flex justify-between items-center">
            <Button variant="secondary" href="/work">
              ← Return to Work Index
            </Button>
            <Button variant="primary" href="/contact">
              Discuss Similar Architecture
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
