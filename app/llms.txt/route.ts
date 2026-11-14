import { site, canonicalUrl } from '@/lib/seo/site';
import { services } from '@/lib/content';
import { guides } from '@/lib/seo/guides';
export const dynamic = 'force-static';
export function GET() {
  const text = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    'Location: Kakinada, Andhra Pradesh, India. Digital operations; no public walk-in office.',
    'Enquiries: info@vrksolutions.in | +91 9398845947',
    'Project scope, price, milestones and support are agreed individually.',
    '',
    '## Services',
    ...services.map(
      (s) =>
        `- [${s.title}](${canonicalUrl('/services/' + s.slug)}): ${s.description}`,
    ),
    '',
    '## Kakinada',
    `- [Website development](${canonicalUrl('/website-development-kakinada')})`,
    `- [Mobile app development](${canonicalUrl('/app-development-kakinada')})`,
    '',
    '## Planning guides',
    ...guides.map(
      (g) =>
        `- [${g.title}](${canonicalUrl('/insights/' + g.slug)}): ${g.description}`,
    ),
    '',
    '## Business information',
    `- [About](${canonicalUrl('/about')})`,
    `- [Contact](${canonicalUrl('/contact')})`,
    `- [Frequently asked questions](${canonicalUrl('/faq')})`,
    `- [Website directory](${canonicalUrl('/site-map')})`,
    '',
  ].join('\n');
  return new Response(text, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
