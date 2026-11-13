"use client";

import { useState } from "react";
import { whatsappUrl } from "@/lib/utils";
import { SERVICES } from "@/lib/constants";
import type { ProjectBriefState } from "@/lib/types";

interface ProjectBriefBuilderProps {
  serviceNames?: string[];
}

const FEATURE_OPTIONS = [
  "User Authentication",
  "Payment Integration",
  "Admin Dashboard",
  "API Development",
  "Mobile Responsive",
  "CMS Integration",
  "Search & Filtering",
  "Analytics & Reporting",
  "Third-Party Integrations",
  "Real-Time Features",
];

const TIMELINE_OPTIONS = [
  "1–2 months",
  "2–4 months",
  "4–6 months",
  "6+ months",
  "Not sure yet",
];

const BUDGET_OPTIONS = [
  "Exploring options",
  "₹1–3 Lakhs",
  "₹3–5 Lakhs",
  "₹5–10 Lakhs",
  "₹10+ Lakhs",
  "International budget — let's discuss",
];

const TOTAL_STEPS = 5;

export default function ProjectBriefBuilder({
  serviceNames = SERVICES.map((s) => s.name),
}: ProjectBriefBuilderProps) {
  const [step, setStep] = useState(1);
  const [brief, setBrief] = useState<ProjectBriefState>({
    service: "",
    objective: "",
    features: [],
    timeline: "",
    budget: "",
  });
  const [completed, setCompleted] = useState(false);

  const progressPercent = (step / TOTAL_STEPS) * 100;

  const canProceed = (): boolean => {
    switch (step) {
      case 1:
        return brief.service !== "";
      case 2:
        return brief.objective.trim().length > 0;
      case 3:
        return brief.features.length > 0;
      case 4:
        return brief.timeline !== "";
      case 5:
        return brief.budget !== "";
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (step < TOTAL_STEPS) {
      setStep((s) => s + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const handleReset = () => {
    setBrief({ service: "", objective: "", features: [], timeline: "", budget: "" });
    setStep(1);
    setCompleted(false);
  };

  const toggleFeature = (feature: string) => {
    setBrief((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }));
  };

  const getQuoteUrl = (): string => {
    const params = new URLSearchParams({
      service: brief.service,
      objective: brief.objective,
      features: brief.features.join(","),
      timeline: brief.timeline,
      budget: brief.budget,
    });
    return `/get-quote?${params.toString()}`;
  };

  const getWhatsAppMessage = (): string => {
    return `Hello VRK Solutions,\n\nHere is my project brief:\n\n*Service:* ${brief.service}\n*Objective:* ${brief.objective}\n*Features:* ${brief.features.join(", ")}\n*Timeline:* ${brief.timeline}\n*Budget:* ${brief.budget}\n\nPlease get back to me with a proposal.`;
  };

  if (completed) {
    return (
      <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-lg border border-brand-hairline-border">
        <h3 className="text-display-sm text-brand-primary-text">Your Project Brief</h3>
        <p className="text-body-sm text-brand-secondary-text mt-1">
          Review your selections below.
        </p>

        <div className="mt-6 space-y-4">
          <SummaryRow label="Service" value={brief.service} />
          <SummaryRow label="Objective" value={brief.objective} />
          <SummaryRow label="Key Features" value={brief.features.join(", ")} />
          <SummaryRow label="Timeline" value={brief.timeline} />
          <SummaryRow label="Budget Range" value={brief.budget} />
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={getQuoteUrl()}
            className="inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-150 px-6 py-3 text-base bg-brand-orange text-white hover:bg-brand-deep-orange"
          >
            Get a Quote
          </a>
          <a
            href={whatsappUrl(getWhatsAppMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-150 px-6 py-3 text-base border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.126 1.52 5.867L0 24l6.335-1.652A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.9 0-3.727-.5-5.336-1.44l-.383-.228-3.967 1.04 1.058-3.866-.25-.397A9.788 9.788 0 012.182 12c0-5.418 4.4-9.818 9.818-9.818S21.818 6.582 21.818 12 17.418 21.818 12 21.818z" />
            </svg>
            Send via WhatsApp
          </a>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-150 px-6 py-3 text-base text-brand-secondary-text hover:text-brand-primary-text hover:bg-brand-soft-surface"
          >
            Start Over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-lg border border-brand-hairline-border">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-label font-mono text-brand-orange">
            STEP {step} OF {TOTAL_STEPS}
          </span>
          <span className="text-body-sm text-brand-secondary-text">
            {Math.round(progressPercent)}% complete
          </span>
        </div>
        <div className="w-full h-1.5 bg-brand-soft-surface rounded-full overflow-hidden">
          <div
            className="h-full bg-brand-orange rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Step Indicators */}
        <div className="flex items-center justify-between mt-4">
          {Array.from({ length: TOTAL_STEPS }, (_, i) => {
            const stepNum = i + 1;
            const isActive = stepNum === step;
            const isDone = stepNum < step;
            return (
              <div key={stepNum} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? "bg-brand-orange text-white"
                      : isDone
                      ? "bg-brand-deep-orange text-white"
                      : "bg-brand-soft-surface text-brand-secondary-text"
                  }`}
                >
                  {isDone ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    stepNum
                  )}
                </div>
                {stepNum < TOTAL_STEPS && (
                  <div
                    className={`hidden sm:block w-8 md:w-12 lg:w-16 h-px mx-1 ${
                      isDone ? "bg-brand-deep-orange" : "bg-brand-hairline-border"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Step Content */}
      <div className="min-h-[280px]">
        {step === 1 && (
          <StepWrapper title="What type of project are you planning?">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {serviceNames.map((name) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => setBrief((prev) => ({ ...prev, service: name }))}
                  className={`p-4 rounded-md border text-left font-medium transition-all duration-200 ${
                    brief.service === name
                      ? "border-brand-orange bg-brand-orange/5 text-brand-orange"
                      : "border-brand-hairline-border text-brand-primary-text hover:border-brand-secondary-text hover:bg-brand-soft-surface"
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
          </StepWrapper>
        )}

        {step === 2 && (
          <StepWrapper title="What is the primary objective of your project?">
            <textarea
              value={brief.objective}
              onChange={(e) =>
                setBrief((prev) => ({ ...prev, objective: e.target.value }))
              }
              placeholder="e.g., Build a customer portal that lets users track orders, manage subscriptions, and view analytics…"
              rows={5}
              className="w-full px-4 py-3 rounded-md border border-brand-hairline-border bg-brand-warm-ivory text-brand-primary-text placeholder:text-brand-secondary-text/60 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-200 resize-none text-base"
            />
          </StepWrapper>
        )}

        {step === 3 && (
          <StepWrapper title="Select the key features you need.">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {FEATURE_OPTIONS.map((feature) => {
                const isSelected = brief.features.includes(feature);
                return (
                  <button
                    key={feature}
                    type="button"
                    onClick={() => toggleFeature(feature)}
                    className={`flex items-center gap-3 p-4 rounded-md border text-left transition-all duration-200 ${
                      isSelected
                        ? "border-brand-orange bg-brand-orange/5"
                        : "border-brand-hairline-border hover:border-brand-secondary-text hover:bg-brand-soft-surface"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded flex items-center justify-center shrink-0 transition-colors duration-200 ${
                        isSelected
                          ? "bg-brand-orange"
                          : "border-2 border-brand-hairline-border"
                      }`}
                    >
                      {isSelected && (
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className={`font-medium text-sm ${isSelected ? "text-brand-orange" : "text-brand-primary-text"}`}>
                      {feature}
                    </span>
                  </button>
                );
              })}
            </div>
          </StepWrapper>
        )}

        {step === 4 && (
          <StepWrapper title="What is your expected timeline?">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {TIMELINE_OPTIONS.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setBrief((prev) => ({ ...prev, timeline: option }))}
                  className={`p-4 rounded-md border text-center font-medium transition-all duration-200 ${
                    brief.timeline === option
                      ? "border-brand-orange bg-brand-orange/5 text-brand-orange"
                      : "border-brand-hairline-border text-brand-primary-text hover:border-brand-secondary-text hover:bg-brand-soft-surface"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </StepWrapper>
        )}

        {step === 5 && (
          <StepWrapper title="What is your approximate budget range?">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {BUDGET_OPTIONS.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setBrief((prev) => ({ ...prev, budget: option }))}
                  className={`p-4 rounded-md border text-center font-medium transition-all duration-200 ${
                    brief.budget === option
                      ? "border-brand-orange bg-brand-orange/5 text-brand-orange"
                      : "border-brand-hairline-border text-brand-primary-text hover:border-brand-secondary-text hover:bg-brand-soft-surface"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </StepWrapper>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-brand-hairline-border">
        <button
          type="button"
          onClick={handleBack}
          disabled={step === 1}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold text-sm transition-colors duration-200 ${
            step === 1
              ? "text-brand-hairline-border cursor-not-allowed"
              : "text-brand-secondary-text hover:text-brand-primary-text hover:bg-brand-soft-surface"
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={!canProceed()}
          className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-md font-semibold text-sm transition-colors duration-200 ${
            canProceed()
              ? "bg-brand-orange text-white hover:bg-brand-deep-orange"
              : "bg-brand-soft-surface text-brand-hairline-border cursor-not-allowed"
          }`}
        >
          {step === TOTAL_STEPS ? "View Summary" : "Next"}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

/* ---- Sub-components ---- */

function StepWrapper({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-display-sm text-brand-primary-text mb-6">{title}</h3>
      {children}
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 py-3 border-b border-brand-hairline-border last:border-0">
      <span className="text-label font-mono text-brand-orange shrink-0 w-32">{label}</span>
      <span className="text-body text-brand-primary-text">{value}</span>
    </div>
  );
}
