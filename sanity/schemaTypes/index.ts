import { siteSettingsSchema } from "./siteSettings";
import { serviceSchema } from "./service";
import { projectSchema } from "./project";
import { processStepSchema, industrySchema, faqSchema, articleSchema } from "./others";

export const schemaTypes = [
  siteSettingsSchema,
  serviceSchema,
  projectSchema,
  processStepSchema,
  industrySchema,
  faqSchema,
  articleSchema,
];
