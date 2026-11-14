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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://vrksolutions.in',
  ),
  title: {
    default: 'VRK Solutions | Digital Products. Built for Momentum.',
    template: '%s | VRK Solutions',
  },
  description:
    'Website, application, software, UI/UX and AI development for ambitious businesses in India and worldwide.',
  openGraph: {
    type: 'website',
    siteName: 'VRK Solutions',
    images: ['/brand/social.svg'],
  },
  robots: { index: true, follow: true },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'VRK Solutions',
              url: 'https://vrksolutions.in',
              email: 'info@vrksolutions.in',
              telephone: '+919398845947',
            }),
          }}
        />
      </body>
    </html>
  );
}
