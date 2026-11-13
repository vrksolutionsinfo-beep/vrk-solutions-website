import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import JsonLd from "@/components/seo/JsonLd";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vrksolutions.in"),
  title: {
    default: "VRK Solutions — We Build. We Scale. We Dominate.",
    template: "%s | VRK Solutions",
  },
  description:
    "VRK Solutions designs and engineers high-performance websites, web applications, mobile apps, and AI-powered automation for startups, enterprises, and international clients.",
  keywords: [
    "VRK Solutions",
    "web development",
    "SaaS development",
    "mobile app development",
    "UI UX design",
    "AI automation",
    "digital marketing",
    "SEO",
    "e-commerce development",
    "software development",
    "Hyderabad",
    "India",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vrksolutions.in",
    siteName: "VRK Solutions",
    title: "VRK Solutions — We Build. We Scale. We Dominate.",
    description:
      "Premium technology services: Website Development, SaaS Platforms, Mobile Apps, AI Automation, and Digital Marketing.",
  },
  twitter: {
    card: "summary_large_image",
    title: "VRK Solutions — We Build. We Scale. We Dominate.",
    description:
      "Premium technology services: Website Development, SaaS Platforms, Mobile Apps, AI Automation, and Digital Marketing.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://vrksolutions.in",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/brand/vrk-icon-square.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${ibmPlexMono.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="font-sans bg-brand-warm-ivory text-brand-primary-text antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand-orange focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="pt-16 lg:pt-[72px]">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
