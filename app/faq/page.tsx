import type { Metadata } from "next";
import { GENERAL_FAQS, COMPANY } from "@/lib/constants";
import FAQPageClient from "@/components/sections/FAQPage";
import Button from "@/components/ui/Button";
import { whatsappUrl, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Frequently Answered Questions — VRK Solutions",
  description:
    "Direct answers regarding service scopes, project timelines, international client collaboration, and engineering practices.",
  alternates: { canonical: "/faq" },
};

export default function FAQRoute() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-16 lg:py-24 border-b border-brand-hairline bg-brand-warm-ivory">
        <div className="container-main max-w-3xl text-center">
          <span className="font-mono text-xs font-semibold tracking-widest text-brand-orange uppercase block mb-3">
            Help & Transparency
          </span>
          <h1 className="text-display-lg text-brand-primary-text mb-6">
            Frequently Answered Questions.
          </h1>
          <p className="text-body-lg text-brand-secondary-text">
            Everything you need to know about partnering with VRK Solutions for software, web platforms, and mobile apps.
          </p>
        </div>
      </section>

      {/* FAQ Accordion List */}
      <section className="section-spacing bg-brand-white border-b border-brand-hairline">
        <div className="container-main">
          <FAQPageClient faqs={GENERAL_FAQS} />
        </div>
      </section>

      {/* Direct Contact Bar */}
      <section className="py-12 bg-brand-soft-surface text-center">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-brand-primary-text mb-2">
            Have a question not addressed here?
          </h2>
          <p className="text-sm text-brand-secondary-text mb-6">
            Speak directly with our team via email at {COMPANY.email} or directly on WhatsApp at {COMPANY.phone}.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="/contact">
              Send an Enquiry
            </Button>
            <a
              href={whatsappUrl(WHATSAPP_DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md border border-brand-hairline bg-white hover:border-brand-orange text-brand-primary-text font-semibold text-sm transition"
            >
              Ask via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
