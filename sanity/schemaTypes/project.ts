// Sanity Schema: Project / Case Study
export const projectSchema = {
  name: "project",
  title: "Projects & Case Studies",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Project / Product Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "isApproved",
      title: "Public Publication Approved by Client / Stakeholder",
      type: "boolean",
      initialValue: true,
      description: "Only approved projects are visible on the public site.",
    },
    {
      name: "isInternalConcept",
      title: "Is Internal Prototype / Engineering Demonstration",
      type: "boolean",
      initialValue: false,
      description: "Clearly labels prototypes as internal demonstrations rather than client work.",
    },
    {
      name: "clientName",
      title: "Client Display Name (Optional/Anonymized)",
      type: "string",
    },
    {
      name: "category",
      title: "Primary Category",
      type: "string",
    },
    {
      name: "industry",
      title: "Industry",
      type: "string",
    },
    {
      name: "servicesProvided",
      title: "Services Provided",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "overview",
      title: "Project Overview",
      type: "text",
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "businessProblem",
      title: "Business Problem & Challenge",
      type: "text",
      rows: 4,
    },
    {
      name: "proposedSolution",
      title: "Delivered Solution",
      type: "text",
      rows: 4,
    },
    {
      name: "technicalApproach",
      title: "Technical Engineering Approach",
      type: "text",
      rows: 4,
    },
    {
      name: "techStack",
      title: "Technology Stack Tags",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "results",
      title: "Verified Real Outcomes (Leave blank if unverified)",
      type: "text",
      rows: 2,
    },
    {
      name: "featured",
      title: "Featured on Homepage",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    },
  ],
};
