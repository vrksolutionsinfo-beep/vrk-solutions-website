import { LocalServicePage } from '@/components/seo/LocalServicePage';
import { pageMetadata } from '@/lib/seo/site';
import { localPages } from '@/lib/seo/local';
const page = localPages.find((x) => x.slug === 'website-development-kakinada')!;
export const metadata = pageMetadata(
  page.title,
  page.description,
  '/' + page.slug,
);
export default function Page() {
  return <LocalServicePage slug={page.slug} />;
}
