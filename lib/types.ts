export interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
  consent: boolean;
  website_honeypot?: string;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  projectType: string;
  projectDescription: string;
  desiredFeatures?: string;
  budgetRange?: string;
  preferredTimeline?: string;
  relevantLinks?: string;
  consent: boolean;
  website_honeypot?: string;
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  company?: string;
  phone?: string;
  serviceInterest: string;
  contactMethod: "email" | "phone" | "whatsapp" | "video_call";
  timeZone: string;
  preferredAvailability: string;
  meetingObjective: string;
  consent: boolean;
  website_honeypot?: string;
}

export interface ProjectBriefState {
  service: string;
  objective: string;
  features: string[];
  timeline: string;
  budget: string;
}

export interface CaseStudy {
  _id: string;
  name: string;
  slug: { current: string };
  clientName?: string;
  isApproved?: boolean;
  isInternalConcept?: boolean;
  category: string;
  industry: string;
  servicesProvided: string[];
  overview: string;
  businessProblem: string;
  proposedSolution: string;
  technicalApproach: string;
  techStack: string[];
  results?: string;
  featured?: boolean;
}

export interface InsightArticle {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  publishedAt: string;
  readTime: string;
  excerpt: string;
  author?: {
    name: string;
    role: string;
  };
  content?: string[];
}
