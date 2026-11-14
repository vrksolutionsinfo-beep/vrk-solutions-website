import type { MetadataRoute } from 'next';
import { services } from '@/lib/content';
import { createClient } from 'next-sanity';
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://vrksolutions.in';
  const routes = [
    '',
    '/about',
    '/services',
    '/work',
    '/process',
    '/industries',
    '/faq',
    '/contact',
    '/get-quote',
    '/book-consultation',
    '/insights',
    '/privacy-policy',
    '/terms-and-conditions',
    '/cookie-policy',
    ...services.map((s) => '/services/' + s.slug),
  ];
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    const client = createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
      apiVersion: '2026-11-01',
      useCdn: true,
    });
    const items = await client.fetch<{ _type: string; slug: string }[]>(
      '*[(_type=="article" || (_type=="caseStudy" && clientPermissionConfirmed==true)) && published==true]{_type,"slug":slug.current}',
    );
    routes.push(
      ...items
        .filter((i) => i.slug)
        .map(
          (i) => `/${i._type === 'article' ? 'insights' : 'work'}/${i.slug}`,
        ),
    );
  }
  return routes.map((path) => ({ url: base + path }));
}
