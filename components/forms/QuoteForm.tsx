"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { SERVICES } from "@/lib/constants";
import { submitQuoteForm } from "@/lib/actions/quote";

export default function QuoteForm() {
  const searchParams = useSearchParams();

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  // Pre-fill state from URL query parameters (sent by Project Brief Builder)
  const [initialService, setInitialService] = useState("");
  const [initialObjective, setInitialObjective] = useState("");
  const [initialFeatures, setInitialFeatures] = useState("");
  const [initialTimeline, setInitialTimeline] = useState("");
  const [initialBudget, setInitialBudget] = useState("");

  useEffect(() => {
    const serviceParam = searchParams.get("service") || "";
    const objectiveParam = searchParams.get("objective") || "";
    const featuresParam = searchParams.get("features") || "";
    const timelineParam = searchParams.get("timeline") || "";
    const budgetParam = searchParams.get("budget") || "";

    if (serviceParam) setInitialService(serviceParam);
    if (objectiveParam) setInitialObjective(objectiveParam);
    if (featuresParam) setInitialFeatures(featuresParam);
    if (timelineParam) setInitialTimeline(timelineParam);
    if (budgetParam) setInitialBudget(budgetParam);
  }, [searchParams]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const result = await submitQuoteForm(formData);

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
          <h3 className="text-xl font-bold text-brand-primary-text mb-2">Proposal Request Received</h3>
          <p className="text-brand-secondary-text mb-6">{message}</p>
          <button
            onClick={() => setStatus("idle")}
            className="text-sm font-semibold text-brand-orange hover:text-brand-deep-orange underline"
          >
            Submit another quotation request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot field */}
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
                placeholder="Acme Technologies"
                className="w-full px-4 py-3 border border-brand-hairline rounded-md bg-brand-warm-ivory/50 focus:bg-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange text-brand-primary-text transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-brand-primary-text mb-2">
                Required Service <span className="text-brand-orange">*</span>
              </label>
              <select
                id="service"
                name="service"
                required
                value={initialService}
                onChange={(e) => setInitialService(e.target.value)}
                className="w-full px-4 py-3 border border-brand-hairline rounded-md bg-brand-warm-ivory/50 focus:bg-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange text-brand-primary-text transition"
              >
                <option value="" disabled>Select primary service...</option>
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.name}>
                    {s.name}
                  </option>
                ))}
                <option value="Custom Multi-Service Architecture">Custom Multi-Service Architecture</option>
              </select>
            </div>

            <div>
              <label htmlFor="projectType" className="block text-sm font-semibold text-brand-primary-text mb-2">
                Project Classification <span className="text-brand-orange">*</span>
              </label>
              <select
                id="projectType"
                name="projectType"
                required
                defaultValue="New Green-Field Product"
                className="w-full px-4 py-3 border border-brand-hairline rounded-md bg-brand-warm-ivory/50 focus:bg-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange text-brand-primary-text transition"
              >
                <option value="New Green-Field Product">New Green-Field Product</option>
                <option value="Complete Modernization / Rebuild">Complete Modernization / Rebuild</option>
                <option value="Feature Scaling & Optimization">Feature Scaling & Optimization</option>
                <option value="Ongoing Engineering Retainer">Ongoing Engineering Retainer</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="budgetRange" className="block text-sm font-semibold text-brand-primary-text mb-2">
                Budget Allocation <span className="text-brand-secondary-text font-normal">(Optional)</span>
              </label>
              <select
                id="budgetRange"
                name="budgetRange"
                value={initialBudget}
                onChange={(e) => setInitialBudget(e.target.value)}
                className="w-full px-4 py-3 border border-brand-hairline rounded-md bg-brand-warm-ivory/50 focus:bg-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange text-brand-primary-text transition"
              >
                <option value="">Flexible / To Be Evaluated</option>
                <option value="₹1.5L – ₹3L (MVP / Corporate Portal)">₹1.5L – ₹3L (MVP / Corporate Portal)</option>
                <option value="₹3L – ₹6L (Full Web App / Mobile App)">₹3L – ₹6L (Full Web App / Mobile App)</option>
                <option value="₹6L – ₹15L (Multi-Platform / Enterprise SaaS)">₹6L – ₹15L (Multi-Platform / Enterprise SaaS)</option>
                <option value="₹15L+ (Custom Enterprise Software)">₹15L+ (Custom Enterprise Software)</option>
                <option value="International Scope (USD/EUR)">International Scope (USD/EUR)</option>
              </select>
            </div>

            <div>
              <label htmlFor="preferredTimeline" className="block text-sm font-semibold text-brand-primary-text mb-2">
                Target Timeline <span className="text-brand-secondary-text font-normal">(Optional)</span>
              </label>
              <select
                id="preferredTimeline"
                name="preferredTimeline"
                value={initialTimeline}
                onChange={(e) => setInitialTimeline(e.target.value)}
                className="w-full px-4 py-3 border border-brand-hairline rounded-md bg-brand-warm-ivory/50 focus:bg-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange text-brand-primary-text transition"
              >
                <option value="">Flexible Timeline</option>
                <option value="Under 4 Weeks (Fast-Track)">Under 4 Weeks (Fast-Track)</option>
                <option value="1 – 2 Months">1 – 2 Months</option>
                <option value="2 – 4 Months">2 – 4 Months</option>
                <option value="4+ Months (Phased Enterprise Architecture)">4+ Months (Phased Enterprise Architecture)</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="projectDescription" className="block text-sm font-semibold text-brand-primary-text mb-2">
              Project Scope & High-Level Objective <span className="text-brand-orange">*</span>
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              required
              rows={4}
              maxLength={4000}
              value={initialObjective}
              onChange={(e) => setInitialObjective(e.target.value)}
              placeholder="Outline the operational context, problem to solve, and the success criteria for this project..."
              className="w-full px-4 py-3 border border-brand-hairline rounded-md bg-brand-warm-ivory/50 focus:bg-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange text-brand-primary-text transition resize-y"
            />
          </div>

          <div>
            <label htmlFor="desiredFeatures" className="block text-sm font-semibold text-brand-primary-text mb-2">
              Desired Key Features & Integrations <span className="text-brand-secondary-text font-normal">(Optional)</span>
            </label>
            <textarea
              id="desiredFeatures"
              name="desiredFeatures"
              rows={3}
              maxLength={2000}
              value={initialFeatures}
              onChange={(e) => setInitialFeatures(e.target.value)}
              placeholder="e.g. Next.js App Router, Stripe checkout, Role-based auth, WhatsApp bot webhook, Real-time telemetry..."
              className="w-full px-4 py-3 border border-brand-hairline rounded-md bg-brand-warm-ivory/50 focus:bg-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange text-brand-primary-text transition resize-y"
            />
          </div>

          <div>
            <label htmlFor="relevantLinks" className="block text-sm font-semibold text-brand-primary-text mb-2">
              Reference Links / Figma / Existing Site <span className="text-brand-secondary-text font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              id="relevantLinks"
              name="relevantLinks"
              maxLength={500}
              placeholder="https://yourcurrentsite.com or Figma prototype URL"
              className="w-full px-4 py-3 border border-brand-hairline rounded-md bg-brand-warm-ivory/50 focus:bg-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange text-brand-primary-text transition"
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
              I confirm that the submitted requirements are intended for quotation analysis by VRK Solutions. Specifications are protected under confidential evaluation standards.
            </label>
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-4 px-6 bg-brand-orange hover:bg-brand-deep-orange text-white font-semibold rounded-md shadow-sm transition disabled:opacity-50 text-base"
          >
            {status === "submitting" ? "Compiling & Transmitting Quotation..." : "Submit Quotation Request"}
          </button>
        </form>
      )}
    </div>
  );
}
