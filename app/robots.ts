import type { MetadataRoute } from 'next';
import { site, indexingEnabled } from '@/lib/seo/site';
export const dynamic = 'force-static';
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/api/', '/studio/'] },
    ...(indexingEnabled() ? { sitemap: site.url + '/sitemap.xml' } : {}),
  };
}
