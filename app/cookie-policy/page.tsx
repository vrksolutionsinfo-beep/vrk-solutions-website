import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — VRK Solutions",
  description: "Explanation of cookies and privacy practices on vrksolutions.in.",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <div className="w-full">
      <section className="py-16 border-b border-brand-hairline bg-brand-warm-ivory">
        <div className="container-narrow">
          <span className="font-mono text-xs font-semibold tracking-widest text-brand-orange uppercase block mb-2">
            Transparency
          </span>
          <h1 className="text-display-md text-brand-primary-text mb-4">
            Cookie Policy
          </h1>
          <p className="text-sm font-mono text-brand-secondary-text">
            Last Updated: January 2025
          </p>
        </div>
      </section>

      <section className="section-spacing bg-brand-white border-b border-brand-hairline">
        <div className="container-narrow space-y-6 text-sm text-brand-secondary-text leading-relaxed">
          <p>
            VRK Solutions values user privacy and adheres to a minimal-tracking philosophy.
          </p>

          <div>
            <h2 className="text-lg font-bold text-brand-primary-text mb-2">What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your device to ensure websites function smoothly and remember your preferences.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-primary-text mb-2">Cookies We Use</h2>
            <p>
              We prioritize strictly necessary session cookies required for core navigation, server load balancing, and secure form validation. We do not use third-party behavioral advertising or cross-site tracking cookies.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-primary-text mb-2">Managing Cookies</h2>
            <p>
              You can control or disable cookies at any time through your browser settings. Disabling essential cookies may impact certain interactive forms.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
