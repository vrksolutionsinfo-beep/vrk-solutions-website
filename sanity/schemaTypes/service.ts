// Sanity Schema: Service Page
export const serviceSchema = {
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    {
      name: "number",
      title: "Service Index (e.g. 01, 02)",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "name",
      title: "Service Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "shortDescription",
      title: "Short Benefit Summary",
      type: "text",
      rows: 2,
    },
    {
      name: "heroHeadline",
      title: "Detail Hero Headline",
      type: "string",
    },
    {
      name: "heroSummary",
      title: "Detail Hero Summary",
      type: "text",
      rows: 3,
    },
    {
      name: "valueProposition",
      title: "Value Proposition",
      type: "text",
      rows: 3,
    },
    {
      name: "businessProblems",
      title: "Business Problems Solved",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "capabilities",
      title: "Technical Capabilities",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Capability Title", type: "string" },
            { name: "description", title: "Description", type: "text", rows: 2 },
          ],
        },
      ],
    },
    {
      name: "methodology",
      title: "Methodology Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "step", title: "Step Number", type: "string" },
            { name: "title", title: "Step Title", type: "string" },
            { name: "description", title: "Description", type: "text", rows: 2 },
          ],
        },
      ],
    },
    {
      name: "applications",
      title: "Typical Commercial Applications",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "faqs",
      title: "Service FAQs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "question", title: "Question", type: "string" },
            { name: "answer", title: "Answer", type: "text", rows: 3 },
          ],
        },
      ],
    },
  ],
};
