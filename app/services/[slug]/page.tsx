import { query } from '@/sanity/lib';
import { PortableText } from 'next-sanity';
import { services, steps } from '@/lib/content';
import { notFound } from 'next/navigation';
import Link from 'next/link';
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const base = services.find((x) => x.slug === slug);
  const override = await query<{
    title?: string;
    description?: string;
    detail?: string;
    body?: Parameters<typeof PortableText>[0]['value'];
    seoDescription?: string;
  }>('*[_type=="service" && slug.current==$slug][0]', { slug });
  const s = base ? { ...base, ...override } : null;
  return {
    title: s?.title,
    description: s?.seoDescription || s?.description,
    alternates: { canonical: '/services/' + slug },
  };
}
export default async function Service({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const base = services.find((x) => x.slug === slug);
  const override = await query<{
    title?: string;
    description?: string;
    detail?: string;
    body?: Parameters<typeof PortableText>[0]['value'];
    seoDescription?: string;
  }>('*[_type=="service" && slug.current==$slug][0]', { slug });
  const s = base ? { ...base, ...override } : null;
  if (!s) notFound();
  return (
    <main id="main">
      <section className="container page-intro">
        <Link href="/services" className="eyebrow">
          SERVICES / EXPLORE ALL ↗
        </Link>
        <h1>{s.title}</h1>
        <p>{s.description}</p>
        <Link href="/get-quote" className="button">
          Discuss your project ↗
        </Link>
      </section>
      <section className="container page-body service-detail">
        <div>
          <span className="eyebrow">A SOLUTION SHAPED AROUND YOU</span>
          <h2>
            From the right questions
            <br />
            to a useful product.
          </h2>
        </div>
        <div>
          <p className="large-copy">{s.detail}</p>
          <p>
            We begin by understanding your users, current systems and business
            priorities. Together, we define an appropriate scope, delivery
            approach and acceptance criteria.
          </p>
          {s.body && (
            <div className="prose">
              <PortableText value={s.body} />
            </div>
          )}
          <h3>What an engagement can include</h3>
          <p>
            Discovery and requirements, solution design, implementation,
            integration, testing and launch preparation. Deliverables and
            ongoing support are agreed in your proposal.
          </p>
          <h3>How we approach delivery</h3>
          {steps.slice(0, 3).map(([t, d]) => (
            <p key={t}>
              <strong>{t}.</strong> {d}
            </p>
          ))}
          <Link href="/book-consultation" className="text-link">
            Request a free consultation ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
