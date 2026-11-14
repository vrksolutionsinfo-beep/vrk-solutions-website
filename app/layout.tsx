import { site, organizationGraph } from '@/lib/seo/site';
import { JsonLd } from '@/components/seo/JsonLd';
import type { Metadata } from 'next';
import { Archivo, IBM_Plex_Mono } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Site';
import { query } from '@/sanity/lib';
import './globals.css';
const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
});
const mono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Website & App Developers in Kakinada | VRK Solutions',
    template: '%s | VRK Solutions',
  },
  description: site.description,
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.BING_SITE_VERIFICATION
      ? { 'msvalidate.01': process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
};
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await query<{ tagline?: string }>(
    '*[_type=="settings"][0]{tagline}',
  );
  return (
    <html lang="en" className={`${archivo.variable} ${mono.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer
          tagline={settings?.tagline || 'WE BUILD. WE SCALE. WE DOMINATE.'}
        />
        <JsonLd data={organizationGraph} />
      </body>
    </html>
  );
}
