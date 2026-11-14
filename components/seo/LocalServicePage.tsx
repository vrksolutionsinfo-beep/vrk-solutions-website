import Link from 'next/link';
import { localPages } from '@/lib/seo/local';
import { services } from '@/lib/content';
import { Breadcrumbs } from './Breadcrumbs';
import { JsonLd } from './JsonLd';
import { Questions, type Question } from './Questions';
import { serviceGraph } from '@/lib/seo/site';
export function LocalServicePage({ slug }: { slug: string }) {
  const p = localPages.find((x) => x.slug === slug)!;
  return (
    <main id="main">
      <section className="container page-intro">
        <Breadcrumbs items={[{ name: p.title, path: '/' + p.slug }]} />
        <span className="eyebrow">
          KAKINADA, ANDHRA PRADESH / REMOTE COLLABORATION
        </span>
        <h1>{p.title}</h1>
        <p>{p.intro}</p>
        <Link href="/get-quote" className="button">
          Discuss your requirements ↗
        </Link>
      </section>
      <JsonLd data={serviceGraph(p.title, p.intro, '/' + p.slug)} />
      <section className="container section local-content">
        <div>
          <span className="eyebrow">A PRACTICAL APPROACH</span>
          <h2>{p.heading}</h2>
          <p>Based in Kakinada. Working digitally. No public walk-in office.</p>
          <a className="text-link" href="tel:+919398845947">
            Call +91 9398845947 ↗
          </a>
        </div>
        <div className="prose">
          {p.sections.map(([h, t]) => (
            <section key={h}>
              <h2>{h}</h2>
              <p>{t}</p>
            </section>
          ))}
          <Link href={'/services/' + p.service} className="text-link">
            Explore the service in detail ↗
          </Link>
        </div>
      </section>
      <section className="container section">
        <div className="section-heading">
          <h2>
            What to prepare
            <br />
            before we begin.
          </h2>
          <Link href="/process" className="text-link">
            Our delivery process ↗
          </Link>
        </div>
        <dl className="planning-list">
          {p.planning.map(([h, t], i) => (
            <div key={h}>
              <span className="number">0{i + 1}</span>
              <dt>{h}</dt>
              <dd>{t}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="container section faq-section">
        <h2>
          Your questions,
          <br />
          answered.
        </h2>
        <Questions items={p.faqs as Question[]} structured />
      </section>
      <section className="container section">
        <h2>Explore related services.</h2>
        <div className="editorial-list">
          {p.related.map((slug) => {
            const s = services.find((x) => x.slug === slug)!;
            return (
              <Link href={'/services/' + slug} key={slug}>
                <h3>{s.title} ↗</h3>
                <p>{s.description}</p>
              </Link>
            );
          })}
        </div>
        <p className="related-guides">
          Planning your first project? Read our{' '}
          <Link href="/insights/how-to-choose-website-developer-kakinada">
            developer selection guide
          </Link>{' '}
          or compare{' '}
          <Link href="/insights/website-vs-mobile-app-for-business">
            websites and mobile apps
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
