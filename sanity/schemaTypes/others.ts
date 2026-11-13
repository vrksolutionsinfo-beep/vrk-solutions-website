export const processStepSchema = {
  name: "processStep",
  title: "Process Step",
  type: "document",
  fields: [
    { name: "phase", title: "Phase Number (e.g. 01)", type: "string" },
    { name: "name", title: "Phase Name", type: "string" },
    { name: "headline", title: "Headline", type: "string" },
    { name: "summary", title: "Summary", type: "text", rows: 3 },
    { name: "activities", title: "Key Activities", type: "array", of: [{ type: "string" }] },
    { name: "deliverables", title: "Typical Deliverables", type: "array", of: [{ type: "string" }] },
    { name: "collaboration", title: "Collaboration Model", type: "text", rows: 2 },
  ],
};

export const industrySchema = {
  name: "industry",
  title: "Industries",
  type: "document",
  fields: [
    { name: "name", title: "Industry Name", type: "string" },
    { name: "challenges", title: "Common Digital Challenges", type: "text", rows: 2 },
    { name: "solutions", title: "Engineered Solutions", type: "text", rows: 2 },
  ],
};

export const faqSchema = {
  name: "faq",
  title: "FAQs",
  type: "document",
  fields: [
    { name: "question", title: "Question", type: "string" },
    { name: "answer", title: "Answer", type: "text", rows: 4 },
    { name: "category", title: "Category", type: "string", initialValue: "General" },
  ],
};

export const articleSchema = {
  name: "article",
  title: "Insights & Articles",
  type: "document",
  fields: [
    { name: "title", title: "Article Title", type: "string", validation: (Rule: any) => Rule.required() },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    { name: "publishedAt", title: "Published Date", type: "datetime" },
    { name: "readTime", title: "Estimated Read Time", type: "string", initialValue: "5 min read" },
    { name: "category", title: "Category", type: "string" },
    { name: "excerpt", title: "Excerpt / Summary", type: "text", rows: 3 },
    {
      name: "content",
      title: "Content Blocks",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
