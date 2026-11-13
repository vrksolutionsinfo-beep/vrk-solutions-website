import type { Metadata } from "next";
import { Suspense } from "react";
import QuoteForm from "@/components/forms/QuoteForm";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Request a Project Quotation — VRK Solutions",
  description:
    "Submit your technical specifications, timeline, and feature requirements to receive a detailed software quotation from VRK Solutions.",
  alternates: { canonical: "/get-quote" },
};

export default function GetQuotePage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-16 lg:py-24 border-b border-brand-hairline bg-brand-warm-ivory">
        <div className="container-main max-w-3xl">
          <span className="font-mono text-xs font-semibold tracking-widest text-brand-orange uppercase block mb-3">
            Quotation & Scoping
          </span>
          <h1 className="text-display-lg text-brand-primary-text mb-6">
            Request a Technical Quotation.
          </h1>
          <p className="text-body-lg text-brand-secondary-text">
            Provide details about your project objectives, desired features, and timeline expectations. Our senior engineering leads will evaluate your requirements and compile a structured proposal.
          </p>
        </div>
      </section>

      {/* Form Container */}
      <section className="section-spacing bg-brand-white border-b border-brand-hairline">
        <div className="container-main max-w-4xl">
          <Suspense fallback={<div className="p-12 text-center text-sm font-mono">Loading form parameters...</div>}>
            <QuoteForm />
          </Suspense>

          <div className="mt-12 text-center text-xs text-brand-secondary-text">
            Need urgent scoping advice? Call or WhatsApp us directly at{" "}
            <a href={`tel:${COMPANY.phoneInternational}`} className="text-brand-orange underline">
              {COMPANY.phone}
            </a>
            .
          </div>
        </div>
      </section>
    </div>
  );
}
