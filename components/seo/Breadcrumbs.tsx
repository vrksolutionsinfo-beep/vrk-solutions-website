import Link from 'next/link';
import { JsonLd } from './JsonLd';
import { canonicalUrl } from '@/lib/seo/site';
export function Breadcrumbs({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const entries = [{ name: 'Home', path: '/' }, ...items];
  return (
    <>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol>
          {entries.map((x, i) => (
            <li key={x.path}>
              {i === entries.length - 1 ? (
                <span aria-current="page">{x.name}</span>
              ) : (
                <Link href={x.path}>{x.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: entries.map((x, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: x.name,
            item: canonicalUrl(x.path),
          })),
        }}
      />
    </>
  );
}
