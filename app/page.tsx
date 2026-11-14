import Link from 'next/link';
import Sculpture from '@/components/Sculpture';
import BriefBuilder from '@/components/BriefBuilder';
import { ServiceList, Process, Faq } from '@/components/Site';
import { industries } from '@/lib/content';
import { query } from '@/sanity/lib';
export default async function Home() {
  const cases = await query<{ title: string; slug: string; excerpt: string }[]>(
    '*[_type=="caseStudy" && ($preview || published==true) && clientPermissionConfirmed==true][0...3]{title,"slug":slug.current,excerpt}',
  );
  const settings = await query<{
    tagline?: string;
    heroLead?: string;
    heroAccent?: string;
    heroCopy?: string;
    introCopy?: string;
  }>('*[_type=="settings"][0]{tagline,heroLead,heroAccent,heroCopy,introCopy}');
  return (
    <main id="main">
      <section className="hero container">
        <div className="hero-top">
          <span className="eyebrow">
            <i className="status-dot" /> TECHNOLOGY. WITH INTENT.
          </span>
          <span className="eyebrow hero-note">
            INDEPENDENT THINKING.
            <br />
            CONNECTED POSSIBILITIES.
          </span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <h1>
              <span className="hero-lead">
                {settings?.heroLead || 'We build digital.\nYou move'}
              </span>
              <span>{settings?.heroAccent || 'forward.'}</span>
            </h1>
            <p>
              {settings?.heroCopy ||
                'From ambitious websites to intelligent software platforms, we design and engineer digital products built for real business growth.'}
            </p>
            <div className="hero-actions">
              <Link href="/get-quote" className="button">
                Start your project ↗
              </Link>
              <Link href="/services" className="text-link">
                Explore our services ↗
              </Link>
            </div>
          </div>
          <div className="hero-art">
            <Sculpture />
            <span className="art-caption">
              <span>VRK / STRUCTURE STUDY</span>
              <span>01 — ∞</span>
            </span>
          </div>
        </div>
        <div className="hero-baseline">
          <span>{settings?.tagline || 'WE BUILD. WE SCALE. WE DOMINATE.'}</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>
      <section className="section container intro">
        <span className="eyebrow">01 / A PARTNER IN YOUR PROGRESS</span>
        <div>
          <h2>
            Technology should
            <br />
            create <em>momentum.</em>
          </h2>
          <p className="large-copy">
            Solve a real problem. Open a new opportunity. Make the next move
            possible.
          </p>
          <div className="intro-bottom">
            <p>
              VRK Solutions brings product thinking, thoughtful design and
              dependable engineering together. We work with founders, growing
              businesses and enterprises to turn complex challenges into useful
              digital experiences.
            </p>
            <Link className="text-link" href="/about">
              Meet VRK Solutions ↗
            </Link>
          </div>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">02 / WHAT WE DO</span>
            <h2>
              Ambition, meet
              <br />
              <em>execution.</em>
            </h2>
          </div>
          <p>
            One technology partner.
            <br />
            The capabilities to move you forward.
          </p>
        </div>
        <ServiceList />
      </section>
      <section className="section process-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">
                03 / FROM FIRST CONVERSATION TO WHAT’S NEXT
              </span>
              <h2>
                A clear process.
                <br />
                Built around you.
              </h2>
            </div>
            <Link className="text-link" href="/process">
              How we work ↗
            </Link>
          </div>
          <Process />
        </div>
      </section>
      <section className="section container work-section">
        <span className="eyebrow">04 / WORK, WITH PURPOSE</span>
        <div className="work-intro">
          <h2>
            The right solution
            <br />
            starts with the
            <br />
            <em>right question.</em>
          </h2>
          <div>
            <p className="large-copy">
              What could work better
              <br />
              for your business?
            </p>
            <p>
              Our case-study collection is being prepared for publication. In
              the meantime, let’s talk about your challenge and the approach it
              deserves.
            </p>
            <Link className="text-link" href="/work">
              Explore our approach ↗
            </Link>
          </div>
        </div>
        {cases?.length ? (
          <div className="editorial-list">
            {cases.map((c) => (
              <Link key={c.slug} href={'/work/' + c.slug}>
                <h3>{c.title} ↗</h3>
                <p>{c.excerpt}</p>
              </Link>
            ))}
          </div>
        ) : null}
        <div
          className="work-diagram"
          aria-label="A considered progression from business challenge to useful product"
        >
          <span>YOUR CHALLENGE</span>
          <b>Understand</b>
          <i>→</i>
          <b>Make</b>
          <i>→</i>
          <b>Improve</b>
          <span>A USEFUL PRODUCT</span>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              05 / DIFFERENT CONTEXTS. SHARED AMBITION.
            </span>
            <h2>
              Built around
              <br />
              your world.
            </h2>
          </div>
          <p>
            Explore possible applications across industries.
            <br />
            Every engagement begins with your specific needs.
          </p>
        </div>
        <div className="industry-index">
          {industries.slice(0, 6).map(([t], i) => (
            <Link href="/industries" key={t}>
              <span className="number">0{i + 1}</span>
              {t}
              <span>↗</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="section brief-section" id="brief">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">
                06 / TURN AN IDEA INTO A CONVERSATION
              </span>
              <h2>
                Big idea?
                <br />
                <em>Start here.</em>
              </h2>
            </div>
            <p>
              Build a simple project brief in five steps.
              <br />
              No estimates. No commitment. Just clarity.
            </p>
          </div>
          <BriefBuilder />
        </div>
      </section>
      <section className="section container principles">
        <span className="eyebrow">07 / THE WAY WE THINK</span>
        <h2>
          Good technology.
          <br />
          <em>Grounded in good thinking.</em>
        </h2>
        <div className="principle-grid">
          {[
            [
              'Business before features',
              'We begin with what you need to achieve, then define what is worth building.',
            ],
            [
              'Clarity throughout',
              'Shared scope, useful conversations and deliberate decisions keep the work moving.',
            ],
            [
              'Built for the next chapter',
              'Maintainable engineering and considered user experiences leave room to evolve.',
            ],
          ].map(([t, d], i) => (
            <article key={t}>
              <span className="principle-symbol" aria-hidden="true">
                {['↗', '⌘', '⊞'][i]}
              </span>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section container faq-section">
        <div>
          <span className="eyebrow">08 / A FEW THINGS, EXPLAINED</span>
          <h2>
            Before we
            <br />
            begin.
          </h2>
          <Link href="/faq" className="text-link">
            More answers ↗
          </Link>
        </div>
        <Faq />
      </section>
    </main>
  );
}
