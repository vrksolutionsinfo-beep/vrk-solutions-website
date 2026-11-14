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
    '*[_type=="article" && slug.current==$slug && ($preview || published==true) ][0]{title,excerpt,body,seoDescription,"cover":{"url":cover.asset->url,"alt":cover.alt}}',
    { slug },
  );
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const p = await get((await params).slug);
  return { title: p?.title, description: p?.seoDescription || p?.excerpt };
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
        <Link className="eyebrow" href="/insights">
          INSIGHTS / BACK TO INDEX
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
