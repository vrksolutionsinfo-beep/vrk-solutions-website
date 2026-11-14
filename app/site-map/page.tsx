import Link from 'next/link';
import { staticPages } from '@/lib/seo/routes';
import { pageMetadata } from '@/lib/seo/site';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
export const metadata = pageMetadata(
  'Website Directory',
  'Find every VRK Solutions service, Kakinada development page, project planning guide and contact route.',
  '/site-map',
);
export default function Page() {
  return (
    <main id="main">
      <section className="container page-intro">
        <Breadcrumbs items={[{ name: 'All pages', path: '/site-map' }]} />
        <h1>Find your next step.</h1>
        <p>
          Explore our services, practical guides and ways to discuss a project.
        </p>
      </section>
      <nav
        className="container page-body site-directory"
        aria-label="All website pages"
      >
        {staticPages
          .filter((p) => p.path !== '/site-map')
          .map((p) => (
            <Link href={p.path} key={p.path}>
              {p.title} ↗
            </Link>
          ))}
      </nav>
    </main>
  );
}
