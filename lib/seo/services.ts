export type ServiceContent = {
  title: string;
  seo: string;
  intro: string;
  deliverables: [string, string][];
  decisions: string;
  faqs: [string, string][];
  related: string[];
};
export const serviceContent: Record<string, ServiceContent> = {
  'website-development': {
    title: 'Website Design & Development',
    seo: 'Website Design & Development Services',
    intro:
      'A business website should explain your offer, help visitors find the right information and make contacting you straightforward. VRK Solutions plans and builds responsive websites for businesses in Kakinada and beyond, with content structure, performance and maintainability considered from the start.',
    deliverables: [
      [
        'Business websites',
        'Service pages, company information, enquiry journeys and an editable content system shaped around your customers.',
      ],
      [
        'Redesigns and migrations',
        'A review of existing content, URLs and enquiry paths before moving to a new design. Important URLs need redirects so visitors and search engines can reach the right pages.',
      ],
      [
        'Launch foundations',
        'Responsive layouts, accessible navigation, page metadata, sitemap preparation and checks of the agreed forms and integrations.',
      ],
    ],
    decisions:
      'We first agree on the pages, content ownership, editing needs and integrations. Hosting, domain access, image rights and ongoing updates are discussed separately so you know what you will manage after launch.',
    faqs: [
      [
        'Do you build websites for businesses in Kakinada?',
        'Yes. VRK Solutions is based in Kakinada and works remotely with businesses there and elsewhere. Start by sharing your services, intended audience and the action you want visitors to take.',
      ],
      [
        'Is SEO included in website development?',
        'Technical foundations such as descriptive page titles, crawlable pages, a sitemap and responsive layouts can be included in the agreed scope. Content strategy, ongoing SEO and search performance monitoring should be specified separately.',
      ],
      [
        'Can you update an existing website?',
        'Yes. We can review its content, design and technical constraints before proposing an update or rebuild. Access to the existing hosting and domain helps us plan a safe migration.',
      ],
    ],
    related: ['ui-ux-design', 'digital-marketing-seo', 'ecommerce-development'],
  },
  'web-applications-saas': {
    title: 'Web Applications & SaaS Development',
    seo: 'Web Application & SaaS Development',
    intro:
      'A web application lets people complete tasks, manage information or collaborate through a browser. We help founders and businesses turn a workflow into a scoped product, from an initial MVP to an application that can evolve as usage grows.',
    deliverables: [
      [
        'Product scope and user roles',
        'Define the key user journeys, account permissions, data structures and the smallest useful release.',
      ],
      [
        'Application workflows',
        'Build dashboards, business processes, API integrations and subscription workflows where required. Billing rules and access control are planned explicitly.',
      ],
      [
        'Release and maintainability',
        'Agree on testing, environments, documentation and ownership. Capacity planning and support depend on the actual product and engagement.',
      ],
    ],
    decisions:
      'Before development, clarify who will use the application, what data it handles, how it earns revenue and which external systems it must connect to. Features that depend on third-party APIs need feasibility checks and account access.',
    faqs: [
      [
        'Can you develop a SaaS MVP?',
        'Yes. We can help prioritize a first release around a specific user problem, then agree on the features and acceptance criteria. An MVP should be useful enough to test with users.',
      ],
      [
        'Can a web application share data with a mobile app?',
        'Yes. A shared backend or API can support both, subject to authentication, permissions and data requirements. We scope the web and mobile journeys together.',
      ],
    ],
    related: ['mobile-app-development', 'ui-ux-design', 'software-development'],
  },
  'mobile-app-development': {
    title: 'Mobile App Development',
    seo: 'Mobile App Development Services',
    intro:
      'Mobile apps are useful when customers need repeat access, device features or a focused experience on their phone. VRK Solutions plans and develops Android and iOS applications with attention to user journeys, backend requirements and release preparation.',
    deliverables: [
      [
        'Platform and experience planning',
        'Choose Android, iOS or a shared approach based on your audience, budget, device needs and maintenance plans.',
      ],
      [
        'Connected app development',
        'Implement agreed screens, account flows and API connections. Payments, notifications, location access or offline behaviour are assessed individually.',
      ],
      [
        'Testing and release preparation',
        'Test agreed devices and critical flows, prepare store assets and document release steps. App-store approval remains subject to each platform’s review.',
      ],
    ],
    decisions:
      'An application needs more than screens. We discuss backend hosting, user data, content moderation where relevant, store account ownership and ongoing platform updates before committing to a delivery plan.',
    faqs: [
      [
        'Do you develop Android and iOS apps?',
        'We can scope Android, iOS or a cross-platform application. The recommendation depends on your users and the device capabilities your product needs.',
      ],
      [
        'How much does mobile app development cost?',
        'Cost depends on screen complexity, backend features, integrations, supported platforms, testing and maintenance. A useful quote starts with a prioritized feature list rather than a fixed price for an undefined app.',
      ],
      [
        'Can you guarantee app-store approval?',
        'No. Store review decisions belong to Apple and Google. We can help prepare a release and address agreed technical requirements, but approval cannot be guaranteed.',
      ],
    ],
    related: ['web-applications-saas', 'ui-ux-design', 'ai-automation'],
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    seo: 'UI/UX Design for Websites & Applications',
    intro:
      'Good interface design helps people understand where they are, what they can do and what happens next. Our UI/UX work connects business goals with clear journeys, readable content and consistent interaction patterns.',
    deliverables: [
      [
        'Structure and journeys',
        'Organize information, map important tasks and identify points where a user may need guidance.',
      ],
      [
        'Wireframes and prototypes',
        'Explore layout and interaction before development. Prototypes help teams discuss behaviour and resolve questions while changes are still inexpensive.',
      ],
      [
        'Visual systems and handoff',
        'Define typography, spacing, components and interface states. Document responsive behaviour and accessibility considerations for implementation.',
      ],
    ],
    decisions:
      'Share the audience, existing product, known usability issues and the decisions the design needs to support. User research or usability testing can be included when there is access to appropriate participants.',
    faqs: [
      [
        'Can you design before development starts?',
        'Yes. A design engagement can establish user flows and prototypes before implementation. Deliverables and developer handoff are agreed in the scope.',
      ],
      [
        'Can you improve an existing application interface?',
        'Yes. We can assess navigation, task flow and consistency, then prioritize improvements. We distinguish observed usability issues from assumptions that need testing.',
      ],
    ],
    related: [
      'website-development',
      'mobile-app-development',
      'web-applications-saas',
    ],
  },
  'ai-automation': {
    title: 'AI & Automation Solutions',
    seo: 'AI Integration & Business Automation',
    intro:
      'Automation can reduce repetitive steps and help teams use information more effectively. We identify suitable workflows, assess available data and integrate AI where its behaviour can be evaluated and supervised.',
    deliverables: [
      [
        'Workflow assessment',
        'Map the current process, exceptions and responsibilities. Decide whether rules, integrations or AI are the appropriate tool.',
      ],
      [
        'Practical integrations',
        'Connect systems, automate routine data movement or build AI-assisted search and drafting tools around agreed use cases.',
      ],
      [
        'Controls and evaluation',
        'Define human review, access permissions, error handling and evaluation examples. Sensitive data and third-party provider terms need review before use.',
      ],
    ],
    decisions:
      'We start with the task and expected outcome, not a model choice. Consider data quality, operating cost, accuracy requirements and what should happen when an automated step is uncertain or unavailable.',
    faqs: [
      [
        'Can you automate an existing business process?',
        'We can review the process and its systems, then identify steps that are suitable for automation. API access, data quality and exceptions affect what is feasible.',
      ],
      [
        'Will AI outputs always be correct?',
        'No. AI outputs can be inaccurate. We design appropriate review and fallback steps and agree on evaluation criteria for the intended use.',
      ],
    ],
    related: [
      'software-development',
      'web-applications-saas',
      'mobile-app-development',
    ],
  },
  'digital-marketing-seo': {
    title: 'Digital Marketing & SEO',
    seo: 'SEO & Digital Marketing Services',
    intro:
      'Search visibility begins with a useful, accessible website and clear information about your business. We connect technical SEO, content planning and conversion journeys so potential customers can understand your services and take the next step.',
    deliverables: [
      [
        'Technical search foundations',
        'Review crawlability, indexability, canonical URLs, site structure, page metadata and mobile usability. Prioritize issues that prevent people or crawlers from reaching content.',
      ],
      [
        'Content and local relevance',
        'Plan service pages and useful answers around real customer questions. For a digital agency, location information should accurately describe its base and delivery model.',
      ],
      [
        'Measurement and iteration',
        'Agree on meaningful outcomes such as qualified enquiries and relevant search impressions. Search Console or analytics access is needed to measure an existing site’s performance.',
      ],
    ],
    decisions:
      'Share your website, target audience and service priorities. Existing search data is more useful than assumptions about keyword popularity. Campaign management, content production and ongoing optimization need their own agreed scope.',
    faqs: [
      [
        'Can you guarantee a number-one Google ranking?',
        'No. Search positions depend on competition, relevance, location and other factors outside a developer’s control. We can improve technical foundations and content, then evaluate performance over time.',
      ],
      [
        'What is AEO or GEO?',
        'Answer engine optimization and generative engine optimization describe work intended to improve visibility in answer-based and AI search experiences. Useful content, crawlable pages and consistent business information remain the foundation.',
      ],
    ],
    related: ['website-development', 'ecommerce-development', 'ui-ux-design'],
  },
  'ecommerce-development': {
    title: 'E-commerce Development',
    seo: 'E-commerce Website Development',
    intro:
      'An online store must make products understandable and purchasing dependable. We plan storefronts around your catalog, payment requirements, fulfilment process and the tools your team uses to manage orders.',
    deliverables: [
      [
        'Catalog and storefront',
        'Organize categories, product details, media and variations so customers can evaluate what they are buying.',
      ],
      [
        'Checkout and integrations',
        'Scope payment gateways, order notifications, shipping tools and stock connections. Account approvals and provider charges remain separate from development.',
      ],
      [
        'Store operations',
        'Define admin workflows, policies, transactional messages and essential checkout tests. Clear ownership makes ongoing catalog updates easier.',
      ],
    ],
    decisions:
      'Before selecting a platform, identify catalog size, product types, currencies, tax requirements and shipping rules. Legal policies and payment-provider eligibility should be confirmed by the business and relevant specialists.',
    faqs: [
      [
        'Can you add online payments to a website?',
        'Yes, subject to a suitable payment provider and an approved merchant account. We agree on integration responsibilities, supported payment methods and checkout testing.',
      ],
      [
        'Can my team manage products after launch?',
        'An editable catalog can be included. The required roles, product fields and handover are agreed in the project scope.',
      ],
    ],
    related: [
      'website-development',
      'digital-marketing-seo',
      'software-development',
    ],
  },
  'software-development': {
    title: 'Software Development',
    seo: 'Custom Software Development Services',
    intro:
      'Custom software is appropriate when a business process needs capabilities that standard tools cannot provide efficiently. We build internal systems, integrations and applications around agreed operational requirements.',
    deliverables: [
      [
        'Requirements and architecture',
        'Map the workflow, user permissions and data responsibilities. Identify integration boundaries and define measurable acceptance criteria.',
      ],
      [
        'Custom tools and APIs',
        'Build operational dashboards, customer portals, business workflows or connections between existing systems.',
      ],
      [
        'Modernization and handover',
        'Assess legacy constraints, plan migration where needed and document the solution. Maintenance, monitoring and future changes are scoped explicitly.',
      ],
    ],
    decisions:
      'A clear picture of the current process helps avoid replacing familiar work with unnecessary complexity. We discuss who owns the source code, how releases are approved and what support is needed after launch.',
    faqs: [
      [
        'Can you integrate existing business systems?',
        'We can assess available APIs, file interfaces and access permissions to propose an integration. Feasibility depends on the systems and their vendor restrictions.',
      ],
      [
        'Do you provide maintenance after delivery?',
        'Support and maintenance can be discussed as part of the engagement. Coverage, response arrangements and exclusions must be agreed in writing.',
      ],
    ],
    related: [
      'web-applications-saas',
      'ai-automation',
      'ecommerce-development',
    ],
  },
};

export const serviceDescriptions: Record<string, string> = {
  'website-development':
    'Responsive business websites, redesigns and CMS development from VRK Solutions. Plan content, integrations and launch with a digital agency in Kakinada.',
  'web-applications-saas':
    'Build web applications and SaaS products with VRK Solutions. Define your MVP, user roles, integrations and release plan before development begins.',
  'mobile-app-development':
    'Plan and build Android and iOS applications with VRK Solutions. Explore UI/UX, backend integrations, testing and app release preparation.',
  'ui-ux-design':
    'UI/UX design for websites and applications, including user journeys, wireframes, prototypes and design systems. Discuss your product with VRK Solutions.',
  'ai-automation':
    'Explore AI integration and business workflow automation with VRK Solutions. Assess data, human review, integrations and practical evaluation criteria.',
  'digital-marketing-seo':
    'Technical SEO, content planning and digital marketing services from VRK Solutions. Improve search foundations and enquiry journeys with a scoped approach.',
  'ecommerce-development':
    'E-commerce development from VRK Solutions: storefronts, product catalogs, payment integrations and order workflows shaped around your business.',
  'software-development':
    'Custom software, APIs and business tools from VRK Solutions. Define workflows, integrations, acceptance criteria and handover for a maintainable solution.',
};
