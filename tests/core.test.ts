import { describe, it, expect } from "vitest";
import {
  contactFormSchema,
  quoteFormSchema,
  consultationFormSchema,
} from "@/lib/validation";
import { checkRateLimit } from "@/lib/rate-limit";
import { SERVICES, PROCESS_PHASES, INDUSTRIES, COMPANY } from "@/lib/constants";
import { whatsappUrl } from "@/lib/utils";

describe("VRK Solutions Business Constants", () => {
  it("has exactly 8 confirmed services with complete metadata", () => {
    expect(SERVICES).toHaveLength(8);
    SERVICES.forEach((service) => {
      expect(service.id).toBeDefined();
      expect(service.slug).toBeDefined();
      expect(service.name).toBeDefined();
      expect(service.number).toBeDefined();
      expect(service.shortDescription.length).toBeGreaterThan(20);
      expect(service.capabilities.length).toBeGreaterThan(0);
      expect(service.methodology.length).toBeGreaterThan(0);
      expect(service.businessProblems.length).toBeGreaterThan(0);
    });
  });

  it("has 6 standard delivery methodology phases", () => {
    expect(PROCESS_PHASES).toHaveLength(6);
    expect(PROCESS_PHASES[0].name).toBe("Discover");
    expect(PROCESS_PHASES[5].name).toBe("Improve & Scale");
  });

  it("has 10 cross-industry solution entries", () => {
    expect(INDUSTRIES).toHaveLength(10);
  });

  it("verifies accurate company contact and brand information", () => {
    expect(COMPANY.name).toBe("VRK Solutions");
    expect(COMPANY.email).toBe("info@vrksolutions.in");
    expect(COMPANY.phone).toBe("+91 9398845947");
    expect(COMPANY.phoneRaw).toBe("919398845947");
    expect(COMPANY.tagline).toBe("WE BUILD. WE SCALE. WE DOMINATE.");
  });

  it("formats WhatsApp URL with valid prefilled message", () => {
    const url = whatsappUrl("Hello VRK Solutions");
    expect(url).toContain("https://wa.me/919398845947");
    expect(url).toContain("text=Hello%20VRK%20Solutions");
  });
});

describe("Form Validation Schemas", () => {
  it("validates valid contact form data", () => {
    const validData = {
      fullName: "Jane Doe",
      email: "jane@example.com",
      phone: "+91 93988 45947",
      company: "Acme Corp",
      service: "Website Design & Development",
      message: "We need a corporate website with modern design and fast load times.",
      consent: true,
    };
    const res = contactFormSchema.safeParse(validData);
    expect(res.success).toBe(true);
  });

  it("rejects invalid contact form data with missing consent or bad email", () => {
    const badData = {
      fullName: "J",
      email: "not-an-email",
      service: "",
      message: "short",
      consent: false,
    };
    const res = contactFormSchema.safeParse(badData);
    expect(res.success).toBe(false);
  });

  it("validates quote form data with optional fields", () => {
    const quoteData = {
      fullName: "Alex Morgan",
      email: "alex@startup.io",
      service: "Web Applications & SaaS Development",
      projectType: "New Green-Field Product",
      projectDescription: "A multi-tenant analytics platform with real-time streaming capabilities.",
      budgetRange: "₹3L – ₹6L",
      consent: true,
    };
    const res = quoteFormSchema.safeParse(quoteData);
    expect(res.success).toBe(true);
  });

  it("validates consultation form data", () => {
    const consultData = {
      fullName: "Samantha Reed",
      email: "sam@enterprise.com",
      serviceInterest: "AI & Automation Solutions",
      contactMethod: "video_call",
      timeZone: "IST (UTC+5:30)",
      preferredAvailability: "Weekdays 2 PM - 5 PM",
      meetingObjective: "Discuss private document ingestion and semantic search architecture.",
      consent: true,
    };
    const res = consultationFormSchema.safeParse(consultData);
    expect(res.success).toBe(true);
  });
});

describe("Rate Limiter", () => {
  it("permits requests up to limit and blocks excess", () => {
    const testIp = `test-ip-${Date.now()}`;
    const limit = 3;

    expect(checkRateLimit(testIp, limit).success).toBe(true);
    expect(checkRateLimit(testIp, limit).success).toBe(true);
    expect(checkRateLimit(testIp, limit).success).toBe(true);

    const blocked = checkRateLimit(testIp, limit);
    expect(blocked.success).toBe(false);
    expect(blocked.remaining).toBe(0);
  });
});
