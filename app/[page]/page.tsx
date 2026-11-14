import { pageContent as pages } from '@/lib/seo/pages';
import { guides } from '@/lib/seo/guides';
import { pageMetadata, canonicalUrl, websiteId, orgId } from '@/lib/seo/site';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ServiceList, Process, Faq } from '@/components/Site';
import EnquiryForm from '@/components/EnquiryForm';
import { industries } from '@/lib/content';
import { query } from '@/sanity/lib';
import { PortableText } from 'next-sanity';
export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const p = pages[page];
  if (!p) notFound();
  const content = await query<{ seoTitle?: string; seoDescription?: string }>(
    '*[_type=="page" && slug.current==$slug][0]{seoTitle,seoDescription}',
    { slug: page },
  );
  const publishedCount =
    page === 'work'
      ? await query<number>(
          'count(*[_type=="caseStudy" && published==true && clientPermissionConfirmed==true])',
        )
      : 1;
  return pageMetadata(
    content?.seoTitle || p[0],
    content?.seoDescription || p[2],
    '/' + page,
    { noindex: page === 'work' && !publishedCount },
  );
}
export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ page: string }>;
  searchParams: Promise<{ brief?: string }>;
}) {
  const { page } = await params;
  const p = pages[page];
  if (!p) notFound();
  const cms = await query<{
    intro?: string;
    body?: Parameters<typeof PortableText>[0]['value'];
  }>('*[_type=="page" && slug.current==$slug][0]{intro,body}', { slug: page });
  const cmsItems = ['work', 'insights'].includes(page)
    ? await query<{ title: string; slug: string; excerpt: string }[]>(
        `*[_type=="${page === 'work' ? 'caseStudy' : 'article'}" && ($preview || published==true) ${page === 'work' ? '&& clientPermissionConfirmed==true' : ''}]{title,"slug":slug.current,excerpt}`,
      )
    : null;
  const items =
    page === 'insights'
      ? [
          ...(cmsItems || []),
          ...guides
            .filter((g) => !cmsItems?.some((c) => c.slug === g.slug))
            .map((g) => ({
              slug: g.slug,
              title: g.title,
              excerpt: g.description,
            })),
        ]
      : cmsItems;
  return (
    <main id="main">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type':
            page === 'about'
              ? 'AboutPage'
              : page === 'contact'
                ? 'ContactPage'
                : ['services', 'insights', 'work'].includes(page)
                  ? 'CollectionPage'
                  : 'WebPage',
          name: p[0],
          url: canonicalUrl('/' + page),
          isPartOf: { '@id': websiteId },
          about: { '@id': orgId },
        }}
      />
      <section className="container page-intro">
        <Breadcrumbs items={[{ name: p[0], path: '/' + page }]} />
        <span className="eyebrow">VRK SOLUTIONS / {p[0].toUpperCase()}</span>
        <h1>{p[1]}</h1>
        <p>{cms?.intro || p[2]}</p>
      </section>
      <section className="container page-body">
        {cms?.body && (
          <div className="prose">
            <PortableText value={cms.body} />
          </div>
        )}
        {page === 'services' && <ServiceList />}
        {page === 'process' && <Process />}
        {page === 'faq' && <Faq all />}
        {page === 'industries' && (
          <div className="industry-detail">
            {industries.map(([t, d], i) => (
              <article key={t}>
                <span className="number">{String(i + 1).padStart(2, '0')}</span>
                <h2>{t}</h2>
                <p>{d}</p>
              </article>
            ))}
          </div>
        )}
        {page === 'about' && (
          <>
            <div className="about-statement">
              <span className="eyebrow">WE BUILD. WE SCALE. WE DOMINATE.</span>
              <h2>
                Built on clarity.
                <br />
                Focused on progress.
              </h2>
              <p>
                Based in Kakinada, Andhra Pradesh, we operate digitally and work
                with startups, entrepreneurs, small and medium businesses,
                enterprises and international clients. Every project deserves an
                understanding of the people it serves and the business it
                supports.
              </p>
            </div>
            <Process />
          </>
        )}
        {['contact', 'book-consultation', 'get-quote'].includes(page) && (
          <div className="contact-layout">
            <aside>
              <p className="contact-location">
                <strong>Kakinada, Andhra Pradesh, India</strong>
                <br />
                We operate digitally. Remote consultations only; no public
                walk-in office.
              </p>
              <h2>
                Good things start
                <br />
                with a hello.
              </h2>
              <a href="mailto:info@vrksolutions.in">info@vrksolutions.in ↗</a>
              <a href="tel:+919398845947">+91 9398845947 ↗</a>
              <a href="https://wa.me/919398845947">Message on WhatsApp ↗</a>
              <p>
                Based on your enquiry, we’ll discuss scope, working arrangements
                and appropriate next steps.
              </p>
            </aside>
            <EnquiryForm
              kind={page}
              brief={(await searchParams).brief?.slice(0, 5000) || ''}
            />
          </div>
        )}
        {['work', 'insights'].includes(page) &&
          (items?.length ? (
            <div className="editorial-list">
              {items.map((x) => (
                <Link key={x.slug} href={'/' + page + '/' + x.slug}>
                  <h2>{x.title} ↗</h2>
                  <p>{x.excerpt}</p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="empty-editorial">
              <span className="eyebrow">
                {page === 'work'
                  ? 'REAL WORK. REAL CONTEXT.'
                  : 'A SPACE FOR USEFUL IDEAS.'}
              </span>
              <h2>
                {page === 'work'
                  ? 'Your challenge could be our next conversation.'
                  : 'Good thinking takes time.'}
              </h2>
              <p>
                {page === 'work'
                  ? 'Discuss your requirements with us. We can explore a relevant approach without making unsupported promises.'
                  : 'No articles have been published yet. Explore our services or bring your question to a consultation.'}
              </p>
              <Link
                href={page === 'work' ? '/contact' : '/services'}
                className="button"
              >
                {page === 'work'
                  ? 'Discuss your project'
                  : 'Explore our services'}{' '}
                ↗
              </Link>
            </div>
          ))}
        {page === 'privacy-policy' && (
          <div className="prose">
            <h2>Information you provide</h2>
            <p>
              When you enquire, we receive your name, email, optional company
              and phone details, service interests and project message. Please
              do not send sensitive personal information.
            </p>
            <h2>How we use information</h2>
            <p>
              We use enquiry information to respond, discuss potential services
              and maintain business correspondence. We do not sell your
              information. Email delivery uses a transactional email provider
              when configured; content is managed with Sanity.
            </p>
            <h2>Retention and your choices</h2>
            <p>
              We retain correspondence while needed for your enquiry, an
              engagement or applicable legal obligations. You may request
              access, correction or deletion by emailing info@vrksolutions.in.
              Applicable legal obligations may limit deletion.
            </p>
            <h2>Third-party services</h2>
            <p>
              WhatsApp links take you to an external service governed by its own
              policies. Hosting services may process technical request logs for
              security and delivery.
            </p>
            <h2>Contact and review</h2>
            <p>
              Contact info@vrksolutions.in for privacy enquiries. This draft
              policy requires business and legal review before public launch,
              including confirmation of the legal entity, address, processors
              and retention periods.
            </p>
          </div>
        )}
        {page === 'terms-and-conditions' && (
          <div className="prose">
            <h2>Website information</h2>
            <p>
              Website content provides general information about VRK Solutions.
              It is not a binding quotation or guarantee of a particular result.
              Individual proposals define deliverables, fees, timelines,
              ownership and support.
            </p>
            <h2>Acceptable use</h2>
            <p>
              Do not misuse this website, interfere with its security or submit
              unlawful content. Website materials may not be reproduced
              commercially without permission.
            </p>
            <h2>External links and availability</h2>
            <p>
              External services have their own terms. We aim to maintain
              accurate information but cannot guarantee uninterrupted
              availability or that every page is free from errors.
            </p>
            <h2>Project engagements</h2>
            <p>
              A separate written agreement must be agreed before a project
              begins. Enquiry submission does not create a service contract.
            </p>
            <h2>Business review required</h2>
            <p>
              These draft website terms require legal review before public
              launch, including the legal entity, registered address, governing
              law and appropriate liability provisions. Contact
              info@vrksolutions.in with questions.
            </p>
          </div>
        )}
        {page === 'cookie-policy' && (
          <div className="prose">
            <h2>Current use</h2>
            <p>
              Public pages do not set optional marketing or analytics cookies.
              Authorized draft preview uses an essential session cookie to
              display unpublished content. The Sanity editing workspace may use
              cookies required for authentication.
            </p>
            <h2>Your controls</h2>
            <p>
              You can manage cookies through your browser. Disabling essential
              cookies may affect editing and preview features. If optional
              tracking is introduced, this policy and the necessary consent
              controls must be updated before it is enabled.
            </p>
            <p>
              This policy requires business review before public launch. Contact
              info@vrksolutions.in for questions.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
