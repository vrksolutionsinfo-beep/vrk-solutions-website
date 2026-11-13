import type { Metadata } from "next";
import Link from "next/link";
import { getArticles } from "@/sanity/lib/client";
import SectionReveal from "@/components/ui/SectionReveal";

export const metadata: Metadata = {
  title: "Insights & Technical Perspectives — VRK Solutions",
  description:
    "Engineering analyses, architectural decisions, and product strategies from the VRK Solutions technical team.",
  alternates: { canonical: "/insights" },
};

export default async function InsightsPage() {
  const articles = await getArticles();

  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-16 lg:py-24 border-b border-brand-hairline bg-brand-warm-ivory">
        <div className="container-main max-w-3xl">
          <span className="font-mono text-xs font-semibold tracking-widest text-brand-orange uppercase block mb-3">
            Technical Thinking
          </span>
          <h1 className="text-display-lg text-brand-primary-text mb-6">
            Engineering Insights & Analysis.
          </h1>
          <p className="text-body-lg text-brand-secondary-text">
            Reflections on high-throughput software design, modern web architecture, and pragmatic automation from our development team.
          </p>
        </div>
      </section>

      {/* Articles List */}
      <section className="section-spacing bg-brand-white border-b border-brand-hairline">
        <div className="container-main max-w-4xl">
          {articles.length === 0 ? (
            <div className="p-12 text-center border border-brand-hairline rounded-lg bg-brand-soft-surface">
              <h2 className="text-xl font-bold text-brand-primary-text mb-2">
                No Articles Published Yet
              </h2>
              <p className="text-sm text-brand-secondary-text">
                Our engineering team publishes practical articles as client engagements wrap up. Check back soon.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {articles.map((art) => (
                <SectionReveal key={art._id}>
                  <Link
                    href={`/insights/${art.slug.current}`}
                    className="group block p-8 border border-brand-hairline rounded-lg bg-brand-warm-ivory/20 hover:border-brand-orange/50 transition"
                  >
                    <div className="flex items-center gap-4 text-xs font-mono text-brand-secondary-text mb-3">
                      <span className="text-brand-orange font-bold uppercase">{art.category}</span>
                      <span>•</span>
                      <span>{art.readTime}</span>
                    </div>

                    <h2 className="text-display-sm text-brand-primary-text group-hover:text-brand-orange transition-colors mb-4">
                      {art.title}
                    </h2>

                    <p className="text-body text-brand-secondary-text mb-6">
                      {art.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs font-mono text-brand-primary-text pt-4 border-t border-brand-hairline">
                      <span>{art.author?.name || "VRK Engineering"}</span>
                      <span className="text-brand-orange font-semibold">Read Article →</span>
                    </div>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
