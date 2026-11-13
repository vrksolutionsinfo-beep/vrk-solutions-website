// Sanity Schema: Site Settings & Global Company Identity
export const siteSettingsSchema = {
  name: "siteSettings",
  title: "Site Settings & Brand Identity",
  type: "document",
  fields: [
    {
      name: "companyName",
      title: "Company Name",
      type: "string",
      initialValue: "VRK Solutions",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "tagline",
      title: "Brand Tagline",
      type: "string",
      initialValue: "WE BUILD. WE SCALE. WE DOMINATE.",
      description: "Editable public-facing brand motto",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "headline",
      title: "Homepage Hero Headline",
      type: "string",
      initialValue: "We Build Digital Experiences That Move Businesses Forward.",
    },
    {
      name: "subheadline",
      title: "Homepage Hero Subheadline",
      type: "text",
      rows: 3,
      initialValue:
        "From ambitious websites to intelligent software platforms, VRK Solutions designs and engineers digital products built for real business growth.",
    },
    {
      name: "email",
      title: "Primary Business Email",
      type: "string",
      initialValue: "info@vrksolutions.in",
      validation: (Rule: any) => Rule.email(),
    },
    {
      name: "phone",
      title: "Phone & WhatsApp Number",
      type: "string",
      initialValue: "+91 9398845947",
    },
    {
      name: "whatsAppNumber",
      title: "WhatsApp International Digits",
      type: "string",
      initialValue: "919398845947",
    },
    {
      name: "socialLinks",
      title: "Configured Social Links (Leave empty if unverified)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "platform", type: "string", title: "Platform Name" },
            { name: "url", type: "url", title: "Profile URL" },
          ],
        },
      ],
    },
  ],
};
