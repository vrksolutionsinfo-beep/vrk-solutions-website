import type { MetadataRoute } from 'next';
import { createClient } from 'next-sanity';
import { staticPages } from '@/lib/seo/routes';
import { canonicalUrl, indexingEnabled } from '@/lib/seo/site';
import { guides } from '@/lib/seo/guides';
export const revalidate = 3600;
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!indexingEnabled()) return [];
  const entries: MetadataRoute.Sitemap = staticPages
    .filter((p) => p.path !== '/work')
    .map((p) => {
      const guide = guides.find((g) => p.path === '/insights/' + g.slug);
      return {
        url: canonicalUrl(p.path),
        ...(guide ? { lastModified: guide.updatedAt } : {}),
      };
    });
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    const client = createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
      apiVersion: '2026-11-01',
      useCdn: false,
      perspective: 'published',
    });
    const records = await client.fetch<
      { _type: string; slug: string; _updatedAt?: string }[]
    >(
      '*[(_type=="article" || (_type=="caseStudy" && clientPermissionConfirmed==true)) && published==true && defined(slug.current)]{_type,"slug":slug.current,_updatedAt}',
    );
    if (records.some((r) => r._type === 'caseStudy'))
      entries.push({ url: canonicalUrl('/work') });
    for (const p of records) {
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.slug)) continue;
      entries.push({
        url: canonicalUrl(
          `/${p._type === 'article' ? 'insights' : 'work'}/${p.slug}`,
        ),
        ...(p._updatedAt ? { lastModified: p._updatedAt } : {}),
      });
    }
  }
  return [...new Map(entries.map((e) => [e.url, e])).values()];
}
