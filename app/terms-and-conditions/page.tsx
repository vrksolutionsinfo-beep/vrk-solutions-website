import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms and Conditions (Draft for Legal Review) — VRK Solutions",
  description: "Terms and conditions draft governing the use of vrksolutions.in.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsPage() {
  return (
    <div className="w-full">
      <section className="py-16 border-b border-brand-hairline bg-brand-warm-ivory">
        <div className="container-narrow">
          <span className="font-mono text-xs font-semibold tracking-widest text-brand-orange uppercase block mb-2">
            Governance & Legal
          </span>
          <h1 className="text-display-md text-brand-primary-text mb-4">
            Terms and Conditions
          </h1>
          <p className="text-sm font-mono text-brand-secondary-text">
            Last Updated: January 2025
          </p>
        </div>
      </section>

      <section className="section-spacing bg-brand-white border-b border-brand-hairline">
        <div className="container-narrow space-y-8 text-sm text-brand-secondary-text leading-relaxed">
          <div className="p-4 rounded-md bg-amber-50 border border-amber-200 text-amber-900 text-xs">
            <strong>Draft Notice:</strong> These terms represent an operational review draft and require formal legal qualification prior to execution as binding statutory terms.
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-primary-text mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing or using https://vrksolutions.in, you agree to comply with and be bound by these Terms and Conditions. If you disagree with any portion, you should refrain from using this website.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-primary-text mb-2">2. Scope of Online Information</h2>
            <p>
              The content published on this website is provided for informational and preliminary scoping purposes. Informational content, service explanations, and brief estimations do not constitute binding engineering contracts. Formal engagements require an executed Master Services Agreement (MSA) and Statement of Work (SOW).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-primary-text mb-2">3. Intellectual Property</h2>
            <p>
              All visual trademarks, original vector monograms, typography systems, diagrams, code architectures, and written text presented on this website are the proprietary property of VRK Solutions, protected by applicable copyright and intellectual property legislation.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-primary-text mb-2">4. Client Engagements & IP Ownership</h2>
            <p>
              Under formal client agreements, custom source code, design systems, and digital assets engineered specifically for the client transfer entirely to client ownership upon satisfaction of contractual milestones.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-primary-text mb-2">5. Inquiries</h2>
            <p>
              Direct all contractual inquiries to{" "}
              <a href={`mailto:${COMPANY.email}`} className="text-brand-orange underline">
                {COMPANY.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
