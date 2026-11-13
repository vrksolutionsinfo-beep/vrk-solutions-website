import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import ContactForm from "@/components/forms/ContactForm";
import { whatsappUrl, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact VRK Solutions — Project Enquiries & Consultation",
  description:
    "Get in touch with VRK Solutions. Send a project enquiry, book a consultation, or connect directly on WhatsApp at +91 9398845947.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-16 lg:py-24 border-b border-brand-hairline bg-brand-warm-ivory">
        <div className="container-main max-w-3xl">
          <span className="font-mono text-xs font-semibold tracking-widest text-brand-orange uppercase block mb-3">
            Initiate Engagement
          </span>
          <h1 className="text-display-lg text-brand-primary-text mb-6">
            Let&apos;s Discuss Your Project.
          </h1>
          <p className="text-body-lg text-brand-secondary-text">
            Whether you have a defined project specification or are exploring digital approaches, our engineering leadership is ready to evaluate your requirements.
          </p>
        </div>
      </section>

      {/* Main Form & Information */}
      <section className="section-spacing bg-brand-white border-b border-brand-hairline">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <h2 className="text-display-sm text-brand-primary-text mb-6">
                Send Project Enquiry
              </h2>
              <ContactForm />
            </div>

            {/* Direct Channels Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 border border-brand-hairline rounded-lg bg-brand-warm-ivory/40">
                <span className="font-mono text-xs uppercase font-bold text-brand-orange block mb-2">
                  Direct Messaging
                </span>
                <h3 className="text-xl font-bold text-brand-primary-text mb-2">
                  Instant WhatsApp Discussion
                </h3>
                <p className="text-sm text-brand-secondary-text mb-4">
                  For rapid technical scoping or quick questions, connect directly with our engineering team on WhatsApp.
                </p>
                <a
                  href={whatsappUrl(WHATSAPP_DEFAULT_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#25D366] text-white font-semibold text-sm hover:opacity-90 transition"
                >
                  <span>Chat on WhatsApp (+91 93988 45947)</span>
                </a>
              </div>

              <div className="p-8 border border-brand-hairline rounded-lg bg-white">
                <span className="font-mono text-xs uppercase font-bold text-brand-secondary-text block mb-4">
                  Contact Information
                </span>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-mono text-brand-secondary-text block">Primary Business Email</span>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-base font-bold text-brand-primary-text hover:text-brand-orange transition"
                    >
                      {COMPANY.email}
                    </a>
                  </div>

                  <div>
                    <span className="text-xs font-mono text-brand-secondary-text block">Phone & WhatsApp Hotline</span>
                    <a
                      href={`tel:${COMPANY.phoneInternational}`}
                      className="text-base font-bold text-brand-primary-text hover:text-brand-orange transition"
                    >
                      {COMPANY.phone}
                    </a>
                  </div>

                  <div>
                    <span className="text-xs font-mono text-brand-secondary-text block">Delivery Operations</span>
                    <p className="text-sm text-brand-primary-text font-medium">
                      Hyderabad, India (Global Remote Delivery)
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 border border-brand-hairline rounded-lg bg-brand-soft-surface">
                <h3 className="text-base font-bold text-brand-primary-text mb-2">
                  Looking for a Formal Quotation?
                </h3>
                <p className="text-xs text-brand-secondary-text mb-4">
                  If you already have detailed scope, features, and timeline estimates, submit our comprehensive quotation questionnaire.
                </p>
                <a
                  href="/get-quote"
                  className="text-sm font-semibold text-brand-orange hover:text-brand-deep-orange underline"
                >
                  Go to Project Quotation Form →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
