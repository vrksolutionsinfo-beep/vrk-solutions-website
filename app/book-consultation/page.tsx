import type { Metadata } from "next";
import ConsultationForm from "@/components/forms/ConsultationForm";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Book a Strategy Consultation — VRK Solutions",
  description:
    "Schedule an architectural discovery session with VRK Solutions engineering leads to evaluate your digital product roadmap.",
  alternates: { canonical: "/book-consultation" },
};

export default function BookConsultationPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-16 lg:py-24 border-b border-brand-hairline bg-brand-warm-ivory">
        <div className="container-main max-w-3xl">
          <span className="font-mono text-xs font-semibold tracking-widest text-brand-orange uppercase block mb-3">
            Strategy & Discovery
          </span>
          <h1 className="text-display-lg text-brand-primary-text mb-6">
            Book an Engineering Consultation.
          </h1>
          <p className="text-body-lg text-brand-secondary-text">
            Spend 30 minutes with our technical leads exploring architectural tradeoffs, technology stack selection, and delivery roadmaps for your digital initiative.
          </p>
        </div>
      </section>

      {/* Form Container */}
      <section className="section-spacing bg-brand-white border-b border-brand-hairline">
        <div className="container-main max-w-3xl">
          <ConsultationForm />

          <div className="mt-12 text-center text-xs text-brand-secondary-text">
            For immediate general inquiries, email us at{" "}
            <a href={`mailto:${COMPANY.email}`} className="text-brand-orange underline">
              {COMPANY.email}
            </a>
            .
          </div>
        </div>
      </section>
    </div>
  );
}
