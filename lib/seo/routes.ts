import { pageContent } from './pages';
import { services } from '@/lib/content';
import { localPages } from './local';
import { guides } from './guides';
export const staticPages = [
  { path: '/', title: 'Home' },
  ...Object.entries(pageContent).map(([slug, value]) => ({
    path: '/' + slug,
    title: value[0],
  })),
  ...services.map((s) => ({ path: '/services/' + s.slug, title: s.title })),
  ...localPages.map((p) => ({ path: '/' + p.slug, title: p.title })),
  ...guides.map((g) => ({ path: '/insights/' + g.slug, title: g.title })),
  { path: '/site-map', title: 'All website pages' },
];
