import { z } from 'zod';
export const enquirySchema = z.object({
  kind: z.string().max(60),
  name: z.string().trim().min(2, 'Please enter your name.').max(100),
  email: z.email('Please enter a valid email.').max(254),
  company: z.string().max(200).optional(),
  phone: z.string().max(40).optional(),
  service: z.string().min(1, 'Please select a service.').max(100),
  message: z
    .string()
    .trim()
    .min(20, 'Please share at least 20 characters.')
    .max(6000),
  website: z.string().max(200).optional(),
  consent: z.boolean().refine((v) => v, 'Please confirm your consent.'),
});
export type Enquiry = z.infer<typeof enquirySchema>;
