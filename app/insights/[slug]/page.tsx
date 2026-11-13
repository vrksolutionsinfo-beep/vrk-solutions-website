import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticles } from "@/sanity/lib/client";
import Button from "@/components/ui/Button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((a) => ({
    slug: a.slug.current,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const articles = await getArticles();
  const article = articles.find((a) => a.slug.current === slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${article.title} — VRK Solutions Insights`,
    description: article.excerpt,
    alternates: { canonical: `/insights/${article.slug.current}` },
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const articles = await getArticles();
  const article = articles.find((a) => a.slug.current === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-16 lg:py-24 border-b border-brand-hairline bg-brand-warm-ivory">
        <div className="container-main max-w-3xl">
          <div className="flex items-center gap-3 text-xs font-mono text-brand-secondary-text mb-4">
            <Link href="/insights" className="text-brand-orange hover:underline">
              ← Insights
            </Link>
            <span>/</span>
            <span className="uppercase">{article.category}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>

          <h1 className="text-display-md text-brand-primary-text mb-6">
            {article.title}
          </h1>

          <div className="flex items-center gap-3 text-xs font-mono text-brand-secondary-text">
            <span>By {article.author?.name || "VRK Solutions Team"}</span>
            <span>•</span>
            <span>{article.author?.role || "Engineering"}</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section-spacing bg-brand-white border-b border-brand-hairline">
        <article className="container-narrow space-y-6 text-body text-brand-secondary-text leading-relaxed">
          <p className="text-body-lg text-brand-primary-text font-medium leading-relaxed">
            {article.excerpt}
          </p>

          <hr className="border-brand-hairline my-8" />

          {article.content &&
            article.content.map((para, idx) => (
              <p key={idx} className="text-base text-brand-primary-text leading-relaxed">
                {para}
              </p>
            ))}

          <div className="mt-12 p-8 border border-brand-hairline rounded-lg bg-brand-soft-surface text-center">
            <h3 className="text-lg font-bold text-brand-primary-text mb-2">
              Interested in discussing this approach for your codebase?
            </h3>
            <p className="text-xs text-brand-secondary-text mb-4">
              Our architects are available for technical audits and strategy reviews.
            </p>
            <Button variant="primary" href="/contact">
              Connect with Engineering
            </Button>
          </div>
        </article>
      </section>
    </div>
  );
}
