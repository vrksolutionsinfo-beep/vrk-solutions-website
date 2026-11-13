"use client";

import { useState } from "react";
import { SERVICES } from "@/lib/constants";
import { submitContactForm } from "@/lib/actions/contact";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm(formData);

    if (result.success) {
      setStatus("success");
      setMessage(result.message);
    } else {
      setStatus("error");
      setMessage(result.message);
    }
  }

  return (
    <div className="bg-brand-white border border-brand-hairline p-6 lg:p-10 rounded-lg shadow-sm">
      {status === "success" ? (
        <div className="p-8 text-center bg-brand-soft-surface border border-brand-hairline rounded-md">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-brand-primary-text mb-2">Enquiry Received</h3>
          <p className="text-brand-secondary-text mb-6">{message}</p>
          <button
            onClick={() => setStatus("idle")}
            className="text-sm font-semibold text-brand-orange hover:text-brand-deep-orange underline"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot field for bot protection */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website_honeypot">Website</label>
            <input type="text" id="website_honeypot" name="website_honeypot" tabIndex={-1} autoComplete="off" />
          </div>

          {status === "error" && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-md" role="alert">
              {message}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-brand-primary-text mb-2">
                Full Name <span className="text-brand-orange">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                maxLength={100}
                placeholder="Jane Doe"
                className="w-full px-4 py-3 border border-brand-hairline rounded-md bg-brand-warm-ivory/50 focus:bg-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange text-brand-primary-text transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-brand-primary-text mb-2">
                Business Email <span className="text-brand-orange">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                maxLength={120}
                placeholder="jane@company.com"
                className="w-full px-4 py-3 border border-brand-hairline rounded-md bg-brand-warm-ivory/50 focus:bg-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange text-brand-primary-text transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-brand-primary-text mb-2">
                Phone Number <span className="text-brand-secondary-text font-normal">(Optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                maxLength={30}
                placeholder="+91 93988 45947"
                className="w-full px-4 py-3 border border-brand-hairline rounded-md bg-brand-warm-ivory/50 focus:bg-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange text-brand-primary-text transition"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-brand-primary-text mb-2">
                Company / Organization <span className="text-brand-secondary-text font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                maxLength={100}
                placeholder="Acme Corp"
                className="w-full px-4 py-3 border border-brand-hairline rounded-md bg-brand-warm-ivory/50 focus:bg-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange text-brand-primary-text transition"
              />
            </div>
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-semibold text-brand-primary-text mb-2">
              Service of Interest <span className="text-brand-orange">*</span>
            </label>
            <select
              id="service"
              name="service"
              required
              defaultValue=""
              className="w-full px-4 py-3 border border-brand-hairline rounded-md bg-brand-warm-ivory/50 focus:bg-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange text-brand-primary-text transition"
            >
              <option value="" disabled>Select a core service...</option>
              {SERVICES.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name}
                </option>
              ))}
              <option value="Multi-Service Project">Multi-Service / Custom Engagement</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-brand-primary-text mb-2">
              Project Overview & Objectives <span className="text-brand-orange">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              maxLength={3000}
              placeholder="Tell us what you're building, your timeline expectations, and core challenges..."
              className="w-full px-4 py-3 border border-brand-hairline rounded-md bg-brand-warm-ivory/50 focus:bg-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange text-brand-primary-text transition resize-y"
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              required
              className="mt-1 h-4 w-4 rounded border-brand-hairline text-brand-orange focus:ring-brand-orange"
            />
            <label htmlFor="consent" className="text-xs text-brand-secondary-text leading-relaxed">
              I agree to the processing of this enquiry in accordance with VRK Solutions&apos;{" "}
              <a href="/privacy-policy" className="text-brand-orange underline">
                Privacy Policy
              </a>
              . Your details are never sold or shared.
            </label>
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-4 px-6 bg-brand-orange hover:bg-brand-deep-orange text-white font-semibold rounded-md shadow-sm transition disabled:opacity-50 text-base"
          >
            {status === "submitting" ? "Transmitting Enquiry..." : "Send Project Enquiry"}
          </button>
        </form>
      )}
    </div>
  );
}
