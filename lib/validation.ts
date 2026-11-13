import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Full name must be at least 2 characters." })
    .max(100, { message: "Full name cannot exceed 100 characters." }),
  email: z
    .string()
    .trim()
    .email({ message: "Please provide a valid business email address." })
    .max(120, { message: "Email cannot exceed 120 characters." }),
  phone: z
    .string()
    .trim()
    .max(30, { message: "Phone number cannot exceed 30 characters." })
    .optional()
    .or(z.literal("")),
  company: z
    .string()
    .trim()
    .max(100, { message: "Company name cannot exceed 100 characters." })
    .optional()
    .or(z.literal("")),
  service: z
    .string()
    .trim()
    .min(1, { message: "Please select the service required." }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Please provide project details (minimum 10 characters)." })
    .max(3000, { message: "Message cannot exceed 3000 characters." }),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must accept the privacy policy to submit." }),
  }),
  website_honeypot: z.string().max(0, { message: "Spam detected." }).optional(),
});

export const quoteFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Full name must be at least 2 characters." })
    .max(100, { message: "Full name cannot exceed 100 characters." }),
  email: z
    .string()
    .trim()
    .email({ message: "Please provide a valid business email address." })
    .max(120, { message: "Email cannot exceed 120 characters." }),
  phone: z
    .string()
    .trim()
    .max(30, { message: "Phone number cannot exceed 30 characters." })
    .optional()
    .or(z.literal("")),
  company: z
    .string()
    .trim()
    .max(100, { message: "Company name cannot exceed 100 characters." })
    .optional()
    .or(z.literal("")),
  service: z
    .string()
    .trim()
    .min(1, { message: "Please select the service required." }),
  projectType: z
    .string()
    .trim()
    .min(1, { message: "Please select the project type." }),
  projectDescription: z
    .string()
    .trim()
    .min(15, { message: "Please describe your project scope (minimum 15 characters)." })
    .max(4000, { message: "Project description cannot exceed 4000 characters." }),
  desiredFeatures: z
    .string()
    .trim()
    .max(2000, { message: "Desired features cannot exceed 2000 characters." })
    .optional()
    .or(z.literal("")),
  budgetRange: z
    .string()
    .trim()
    .max(100, { message: "Budget range cannot exceed 100 characters." })
    .optional()
    .or(z.literal("")),
  preferredTimeline: z
    .string()
    .trim()
    .max(100, { message: "Timeline cannot exceed 100 characters." })
    .optional()
    .or(z.literal("")),
  relevantLinks: z
    .string()
    .trim()
    .max(500, { message: "Links cannot exceed 500 characters." })
    .optional()
    .or(z.literal("")),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must accept the privacy policy to submit." }),
  }),
  website_honeypot: z.string().max(0, { message: "Spam detected." }).optional(),
});

export const consultationFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Full name must be at least 2 characters." })
    .max(100, { message: "Full name cannot exceed 100 characters." }),
  email: z
    .string()
    .trim()
    .email({ message: "Please provide a valid business email address." })
    .max(120, { message: "Email cannot exceed 120 characters." }),
  phone: z
    .string()
    .trim()
    .max(30, { message: "Phone number cannot exceed 30 characters." })
    .optional()
    .or(z.literal("")),
  company: z
    .string()
    .trim()
    .max(100, { message: "Company name cannot exceed 100 characters." })
    .optional()
    .or(z.literal("")),
  serviceInterest: z
    .string()
    .trim()
    .min(1, { message: "Please choose your primary service of interest." }),
  contactMethod: z.enum(["email", "phone", "whatsapp", "video_call"], {
    errorMap: () => ({ message: "Please choose a valid preferred contact method." }),
  }),
  timeZone: z
    .string()
    .trim()
    .min(2, { message: "Please specify your time zone." })
    .max(80),
  preferredAvailability: z
    .string()
    .trim()
    .min(2, { message: "Please specify your preferred availability." })
    .max(120),
  meetingObjective: z
    .string()
    .trim()
    .min(10, { message: "Please describe what you would like to discuss (minimum 10 characters)." })
    .max(2000),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must accept the privacy policy to submit." }),
  }),
  website_honeypot: z.string().max(0, { message: "Spam detected." }).optional(),
});
