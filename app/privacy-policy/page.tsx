import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy (Draft for Legal Review) — VRK Solutions",
  description: "Privacy policy draft outlining data protection standards for VRK Solutions.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full">
      <section className="py-16 border-b border-brand-hairline bg-brand-warm-ivory">
        <div className="container-narrow">
          <span className="font-mono text-xs font-semibold tracking-widest text-brand-orange uppercase block mb-2">
            Governance & Compliance
          </span>
          <h1 className="text-display-md text-brand-primary-text mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm font-mono text-brand-secondary-text">
            Last Updated: January 2025
          </p>
        </div>
      </section>

      <section className="section-spacing bg-brand-white border-b border-brand-hairline">
        <div className="container-narrow space-y-8 text-sm text-brand-secondary-text leading-relaxed">
          <div className="p-4 rounded-md bg-amber-50 border border-amber-200 text-amber-900 text-xs">
            <strong>Draft Notice:</strong> This document represents a structural operational draft prepared for corporate transparency and requires formal legal counsel review prior to publication under applicable statutory jurisdictions.
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-primary-text mb-2">1. Scope of Policy</h2>
            <p>
              This policy explains how VRK Solutions (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, processes, and protects information submitted through https://vrksolutions.in. We treat client information and project requirements with rigorous confidentiality.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-primary-text mb-2">2. Information We Collect</h2>
            <p>We collect only information voluntarily submitted by visitors seeking our technology services, including:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Full Name and contact details (email address, telephone / WhatsApp number).</li>
              <li>Company name and organizational context.</li>
              <li>Project briefs, technical specifications, and timeline requirements.</li>
              <li>Communications exchanged via our website forms or direct email/WhatsApp dialogues.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-primary-text mb-2">3. How Information Is Used</h2>
            <p>Information provided is used exclusively to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Evaluate project requirements and compile accurate technical proposals.</li>
              <li>Coordinate scheduled consultation calls and respond to inquiries.</li>
              <li>Fulfill professional service agreements once an engagement commences.</li>
            </ul>
            <p className="mt-2">
              We never sell, rent, monetize, or publicly distribute personal data or client proposals.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-primary-text mb-2">4. Data Storage and Security</h2>
            <p>
              Form submissions are processed through authenticated server endpoints with input length limits, anti-spam validation, and TLS encryption in transit. Submissions are transmitted directly to our secure business inbox at {COMPANY.email}.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-primary-text mb-2">5. Third-Party Processors</h2>
            <p>
              We utilize select enterprise service providers solely for infrastructural purposes (e.g. transactional email delivery and cloud hosting). All providers maintain strict data protection standards.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-primary-text mb-2">6. Inquiries and Data Rights</h2>
            <p>
              To request inspection, correction, or deletion of any contact information submitted to VRK Solutions, contact our administrative team at{" "}
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
