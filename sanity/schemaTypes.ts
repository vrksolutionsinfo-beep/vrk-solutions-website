import { defineType, defineField } from 'sanity';
export const schemaTypes = [
  defineType({
    name: 'settings',
    title: 'Site settings',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        type: 'string',
        initialValue: 'VRK Solutions',
      }),
      defineField({
        name: 'tagline',
        type: 'string',
        initialValue: 'WE BUILD. WE SCALE. WE DOMINATE.',
      }),
      defineField({ name: 'description', type: 'text' }),
      defineField({
        name: 'heroLead',
        title: 'Hero lead (line breaks supported)',
        type: 'text',
      }),
      defineField({ name: 'heroAccent', type: 'string' }),
      defineField({ name: 'heroCopy', type: 'text' }),
      defineField({ name: 'introCopy', type: 'text' }),
      defineField({ name: 'closingHeading', type: 'string' }),
      defineField({ name: 'closingCopy', type: 'text' }),
    ],
  }),
  defineType({
    name: 'page',
    title: 'Page content',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        type: 'string',
        validation: (r) => r.required(),
      }),
      defineField({
        name: 'slug',
        type: 'slug',
        options: { source: 'title' },
        validation: (r) => r.required(),
      }),
      defineField({
        name: 'seoTitle',
        title: 'Search title',
        type: 'string',
        validation: (r) =>
          r.max(70).warning('Keep titles concise and specific.'),
      }),
      defineField({
        name: 'seoDescription',
        title: 'Search description',
        type: 'text',
        validation: (r) =>
          r.max(170).warning('Write a concise, useful summary.'),
      }),
      defineField({ name: 'intro', type: 'text' }),
      defineField({ name: 'body', type: 'array', of: [{ type: 'block' }] }),
    ],
  }),
  defineType({
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        type: 'string',
        validation: (r) => r.required(),
      }),
      defineField({
        name: 'slug',
        type: 'slug',
        description:
          'Use one of the eight existing service slugs listed in the README.',
        validation: (r) => r.required(),
      }),
      defineField({ name: 'description', type: 'text' }),
      defineField({ name: 'detail', type: 'text' }),
      defineField({ name: 'body', type: 'array', of: [{ type: 'block' }] }),
      defineField({ name: 'seoTitle', type: 'string' }),
      defineField({ name: 'seoDescription', type: 'text' }),
    ],
  }),
  ...['processStep', 'faq', 'industry', 'principle'].map((name) =>
    defineType({
      name,
      title: (
        {
          processStep: 'Process step',
          faq: 'FAQ',
          industry: 'Industry application',
          principle: 'Service principle',
        } as Record<string, string>
      )[name],
      type: 'document',
      fields: [
        defineField({
          name: 'title',
          title: name === 'faq' ? 'Question' : 'Title',
          type: 'string',
          validation: (r) => r.required(),
        }),
        defineField({
          name: 'description',
          title: name === 'faq' ? 'Answer' : 'Description',
          type: 'text',
          validation: (r) => r.required(),
        }),
        defineField({ name: 'order', type: 'number', initialValue: 0 }),
      ],
    }),
  ),
  ...['caseStudy', 'article'].map((name) =>
    defineType({
      name,
      title: name === 'caseStudy' ? 'Case study' : 'Insight',
      type: 'document',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          validation: (r) => r.required(),
        }),
        defineField({
          name: 'slug',
          type: 'slug',
          options: { source: 'title' },
          validation: (r) => r.required(),
        }),
        defineField({
          name: 'published',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'publishedAt',
          type: 'datetime',
          description:
            'Actual publication date. Do not backdate or imply an earlier publication.',
        }),
        defineField({ name: 'excerpt', type: 'text' }),
        defineField({
          name: 'cover',
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', validation: (r) => r.required() },
          ],
        }),
        defineField({ name: 'body', type: 'array', of: [{ type: 'block' }] }),
        defineField({ name: 'seoTitle', type: 'string' }),
        defineField({ name: 'seoDescription', type: 'text' }),
        ...(name === 'caseStudy'
          ? [
              defineField({
                name: 'clientPermissionConfirmed',
                type: 'boolean',
                description: 'Confirm permission before publication.',
              }),
              defineField({
                name: 'services',
                type: 'array',
                of: [{ type: 'string' }],
              }),
            ]
          : []),
      ],
    }),
  ),
];
