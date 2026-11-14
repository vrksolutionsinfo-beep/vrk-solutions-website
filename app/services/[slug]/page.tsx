import Link from 'next/link';
import { cache } from 'react';
import { notFound } from 'next/navigation';
import { PortableText } from 'next-sanity';
import { query } from '@/sanity/lib';
import { services } from '@/lib/content';
import { serviceContent, serviceDescriptions } from '@/lib/seo/services';
import { pageMetadata, serviceGraph } from '@/lib/seo/site';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { Questions } from '@/components/seo/Questions';
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
const get = cache(async (slug: string) => {
  const base = services.find((s) => s.slug === slug);
  if (!base) return null;
  const cms = await query<{
    title?: string;
    description?: string;
    body?: Parameters<typeof PortableText>[0]['value'];
    seoTitle?: string;
    seoDescription?: string;
  }>('*[_type=="service" && slug.current==$slug][0]', { slug });
  return {
    ...base,
    ...Object.fromEntries(
      Object.entries(cms || {}).filter(([, v]) => v != null && v !== ''),
    ),
    body: cms?.body,
    seoTitle: cms?.seoTitle,
    seoDescription: cms?.seoDescription,
  };
});
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = await get(slug);
  if (!s) notFound();
  return pageMetadata(
    s.seoTitle || serviceContent[slug].seo,
    s.seoDescription || serviceDescriptions[slug],
    '/services/' + slug,
  );
}
export default async function Service({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = await get(slug);
  if (!s) notFound();
  const c = serviceContent[slug];
  return (
    <main id="main">
      <section className="container page-intro">
        <Breadcrumbs
          items={[
            { name: 'Services', path: '/services' },
            { name: s.title, path: '/services/' + slug },
          ]}
        />
        <span className="eyebrow">VRK SOLUTIONS / SERVICES</span>
        <h1>{s.title}</h1>
        <p>{c.intro}</p>
        <Link href="/get-quote" className="button">
          Discuss your project ↗
        </Link>
      </section>
      <JsonLd data={serviceGraph(s.title, c.intro, '/services/' + slug)} />
      <section className="container section local-content">
        <div>
          <span className="eyebrow">SCOPE WITH PURPOSE</span>
          <h2>
            What we can
            <br />
            help you build.
          </h2>
          <p>{c.decisions}</p>
        </div>
        <div className="prose">
          {c.deliverables.map(([h, t]) => (
            <section key={h}>
              <h2>{h}</h2>
              <p>{t}</p>
            </section>
          ))}
          {s.body && <PortableText value={s.body} />}
          <p>
            Based in Kakinada, Andhra Pradesh, we collaborate digitally with
            clients in India and internationally. Deliverables, acceptance
            criteria and support arrangements are agreed for each engagement.
          </p>
          <Link href="/process" className="text-link">
            Understand our delivery process ↗
          </Link>
        </div>
      </section>
      <section className="container section faq-section">
        <h2>
          Questions about
          <br />
          this service.
        </h2>
        <Questions items={c.faqs} />
      </section>
      <section className="container section">
        <h2>Plan the next step.</h2>
        <div className="editorial-list">
          {c.related.map((slug) => {
            const related = services.find((s) => s.slug === slug)!;
            return (
              <Link href={'/services/' + slug} key={slug}>
                <h3>{related.title} ↗</h3>
                <p>{related.description}</p>
              </Link>
            );
          })}
        </div>
        <div className="local-links">
          <Link href="/website-development-kakinada">
            Website development in Kakinada ↗
          </Link>
          <Link href="/app-development-kakinada">
            App development in Kakinada ↗
          </Link>
          <Link href="/insights/website-development-cost-planning">
            How to plan a website budget ↗
          </Link>
          <Link href="/book-consultation">Request a remote consultation ↗</Link>
        </div>
      </section>
    </main>
  );
}
