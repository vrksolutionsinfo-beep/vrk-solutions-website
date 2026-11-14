import { query } from '@/sanity/lib';
import Image from 'next/image';
import Link from 'next/link';
import { faqs, services, steps } from '@/lib/content';
export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}
export async function ServiceList() {
  const overrides = await query<
    { slug: string; title?: string; description?: string }[]
  >('*[_type=="service"]{"slug":slug.current,title,description}');
  const entries = services.map((s) => ({
    ...s,
    ...overrides?.find((o) => o.slug === s.slug),
  }));
  return (
    <div className="service-list">
      {entries.map((s, i) => (
        <Link href={'/services/' + s.slug} key={s.slug} className="service-row">
          <span className="number">0{i + 1}</span>
          <h3>{s.title}</h3>
          <p>{s.description}</p>
          <Arrow />
        </Link>
      ))}
    </div>
  );
}
export async function Process() {
  const content = await query<{ title: string; description: string }[]>(
    '*[_type=="processStep"] | order(order asc){title,description}',
  );
  const entries = content?.length
    ? content.map((c) => [c.title, c.description])
    : steps;
  return (
    <div className="process-list">
      {entries.map(([t, d], i) => (
        <div key={t}>
          <span className="number">0{i + 1}</span>
          <h3>{t}</h3>
          <p>{d}</p>
        </div>
      ))}
    </div>
  );
}
export async function Faq({ all = false }: { all?: boolean }) {
  const content = await query<{ title: string; description: string }[]>(
    '*[_type=="faq"] | order(order asc){title,description}',
  );
  const entries = content?.length
    ? content.map((c) => [c.title, c.description])
    : faqs;
  return (
    <div className="faq-list">
      {entries.slice(0, all ? entries.length : 5).map(([q, a]) => (
        <details key={q}>
          <summary>
            {q}
            <span>+</span>
          </summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}
export async function Cta() {
  const content = await query<{
    closingHeading?: string;
    closingCopy?: string;
  }>('*[_type=="settings"][0]{closingHeading,closingCopy}');
  return (
    <section className="cta">
      <div className="container">
        <span className="eyebrow">THE NEXT MOVE IS YOURS</span>
        <h2>
          {content?.closingHeading || (
            <>
              Have something
              <br />
              ambitious in mind?
            </>
          )}
        </h2>
        <div className="cta-bottom">
          <p>
            {content?.closingCopy ||
              'Tell us what you’re building. We’ll help you explore the right digital approach.'}
          </p>
          <Link className="button light" href="/contact">
            Let’s talk about your project ↗
          </Link>
          <a className="underlined" href="https://wa.me/919398845947">
            WhatsApp us ↗
          </a>
        </div>
      </div>
    </section>
  );
}
export function Footer({ tagline }: { tagline: string }) {
  return (
    <>
      <Cta />
      <footer className="container footer">
        <div>
          <Link href="/" className="brand">
            <Image src="/brand/monogram.svg" alt="" width="44" height="38" />
            <span>
              VRK<span className="brand-small">SOLUTIONS</span>
            </span>
          </Link>
          <p className="eyebrow">{tagline}</p>
        </div>
        <div>
          <span className="eyebrow">LET’S CONNECT</span>
          <a href="mailto:info@vrksolutions.in">info@vrksolutions.in ↗</a>
          <a href="tel:+919398845947">+91 9398845947</a>
        </div>
        <div>
          <span className="eyebrow">EXPLORE</span>
          <Link href="/faq">FAQ</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/book-consultation">Free consultation</Link>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} VRK Solutions</span>
          <div>
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms-and-conditions">Terms</Link>
            <Link href="/cookie-policy">Cookies</Link>
          </div>
          <span>Built for what comes next.</span>
        </div>
      </footer>
      <a
        className="whatsapp"
        href="https://wa.me/919398845947"
        aria-label="Enquire on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          width="22"
          height="22"
          aria-hidden="true"
        >
          <path
            d="M20 11.5a8 8 0 0 1-12 7L3 20l1.5-5A8 8 0 1 1 20 11.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M8 7c-2 3 3 8 6 7l1-2-3-1-1 1-2-2 1-1-2-2Z"
            fill="currentColor"
          />
        </svg>
        <span>Let’s talk</span>
      </a>
    </>
  );
}
