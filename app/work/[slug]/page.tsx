import { pageMetadata } from '@/lib/seo/site';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import Image from 'next/image';
import { query } from '@/sanity/lib';
import { notFound } from 'next/navigation';
import { PortableText } from 'next-sanity';
import Link from 'next/link';
type Post = {
  title: string;
  excerpt: string;
  seoDescription?: string;
  cover?: { url: string; alt: string };
  body: Parameters<typeof PortableText>[0]['value'];
};
async function get(slug: string) {
  return query<Post>(
    '*[_type=="caseStudy" && slug.current==$slug && ($preview || published==true) && clientPermissionConfirmed==true][0]{title,excerpt,body,seoDescription,"cover":{"url":cover.asset->url,"alt":cover.alt}}',
    { slug },
  );
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const p = await get((await params).slug);
  if (!p) notFound();
  return pageMetadata(
    p.title,
    p.seoDescription || p.excerpt,
    '/work/' + (await params).slug,
  );
}
export default async function Detail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const p = await get((await params).slug);
  if (!p) notFound();
  return (
    <main id="main">
      <section className="container page-intro">
        <Breadcrumbs
          items={[
            { name: 'Our work', path: '/work' },
            { name: p.title, path: '/work/' + (await params).slug },
          ]}
        />
        <Link className="eyebrow" href="/work">
          WORK / BACK TO INDEX
        </Link>
        <h1>{p.title}</h1>
        <p>{p.excerpt}</p>
      </section>
      <article className="container page-body prose">
        {p.cover?.url && (
          <Image
            className="case-cover"
            src={p.cover.url}
            alt={p.cover.alt || p.title}
            width={1200}
            height={750}
            unoptimized
          />
        )}
        <PortableText value={p.body || []} />
      </article>
    </main>
  );
}
