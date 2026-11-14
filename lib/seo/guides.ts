export type Guide = {
  slug: string;
  title: string;
  description: string;
  answer: string;
  service: string;
  publishedAt: string;
  updatedAt: string;
  sections: { title: string; paragraphs: string[]; items?: string[] }[];
};
export const guides: Guide[] = [
  {
    slug: 'how-to-choose-website-developer-kakinada',
    title: 'How to choose a website developer in Kakinada',
    description:
      'A practical checklist for comparing website developers: scope, content, SEO foundations, ownership, testing and ongoing support.',
    answer:
      'Compare website developers on the clarity of their proposal, relevant work they are permitted to share, content responsibilities, technical delivery and handover. A useful proposal explains what is included and how the finished website will be evaluated.',
    service: 'website-development',
    sections: [
      {
        title: 'Begin with the business outcome',
        paragraphs: [
          'Write down the action the website should support: a call, a quotation request, a booking or an online purchase. Identify the audience and the questions they need answered before contacting you. A provider can then recommend a structure around a clear goal.',
          'For a Kakinada service business, location and contact information should be consistent and easy to find. An online-only business should say how remote consultations work rather than suggesting a public office exists.',
        ],
      },
      {
        title: 'Compare the same scope',
        paragraphs: [
          'Two prices are difficult to compare when one includes copywriting and an editable CMS while the other covers only page design. Ask for a page list, the expected content, the number and purpose of forms, integrations and any migration work.',
          'Separate one-time development from recurring domain, hosting, email, software subscriptions and maintenance costs. A lower initial price may cover fewer responsibilities; a higher price needs an explanation of the additional work.',
        ],
        items: [
          'Which pages and user journeys are included?',
          'Who supplies and approves text, images and legal policies?',
          'Which integrations depend on external accounts or subscriptions?',
          'What changes are included during review, and how are new requirements handled?',
        ],
      },
      {
        title: 'Ask how the site will be checked',
        paragraphs: [
          'A visually attractive page can still have broken forms, inaccessible controls or poor mobile layouts. Ask which devices and critical journeys will be checked, and how defects are recorded and resolved.',
          'Search foundations should include crawlable content, descriptive titles, consistent canonical URLs and a sitemap of real pages. These are technical deliverables, not a promise of first-place rankings. Request an explanation of any ongoing SEO work separately.',
        ],
      },
      {
        title: 'Clarify ownership and handover',
        paragraphs: [
          'Agree who controls the domain, hosting, source code and CMS accounts. Keep business-owned accounts under the business’s control, with appropriate access for the delivery team. Confirm which documentation or training is included.',
          'Ask what happens after launch: how updates are requested, what maintenance covers and which costs recur. Put these details into the agreement before deciding.',
        ],
      },
      {
        title: 'A useful next step',
        paragraphs: [
          'Prepare a short brief and use it when speaking to potential providers. VRK Solutions can discuss your website requirements remotely from Kakinada. Share your goals and priorities to begin a scoped conversation.',
        ],
      },
    ],
    publishedAt: '2026-11-14',
    updatedAt: '2026-11-14',
  },
  {
    slug: 'website-development-cost-planning',
    title: 'What affects the cost of a business website?',
    description:
      'Understand website cost drivers, recurring expenses and the information a developer needs to prepare a meaningful project quotation.',
    answer:
      'Website cost depends on the work required: page types, design, content, CMS setup, integrations, testing and migration. A useful quotation separates those deliverables from ongoing expenses such as hosting, domain renewal and maintenance.',
    service: 'website-development',
    sections: [
      {
        title: 'Page count is only part of the work',
        paragraphs: [
          'Ten pages built from a consistent content pattern may require less work than a smaller site with a custom product configurator. Ask what is unique about each page or interaction. Content migration and editing workflows also change the scope.',
          'A simple business website usually focuses on explaining services and receiving enquiries. A store or customer portal introduces workflows, account permissions and more testing. Comparing these as if they are the same product is rarely useful.',
        ],
      },
      {
        title: 'Content readiness affects delivery',
        paragraphs: [
          'A developer needs approved service descriptions, contact details and usable images. If the project includes copywriting, photography, translation or research, those responsibilities should appear in the proposal.',
          'Unclear content can cause repeated layout changes and delay approvals. Even a rough content inventory helps: list each page, who owns it, what already exists and what must be created.',
        ],
      },
      {
        title: 'Separate launch costs from running costs',
        paragraphs: [
          'A domain name, hosting service, business email and paid software may renew independently of the development project. Payment gateways or external APIs can introduce usage charges. Ask who pays each provider and who manages renewals.',
        ],
        items: [
          'One-time discovery, design and development work',
          'Content preparation, migration and integration setup',
          'Hosting, domain and third-party subscriptions',
          'Ongoing maintenance, content changes and support',
        ],
      },
      {
        title: 'Define quality and acceptance',
        paragraphs: [
          'The quote should explain what “finished” means. That can include approved layouts, working enquiry delivery, responsive behaviour, essential accessibility checks and a documented launch process. Testing requirements should match the business use of the website.',
          'Maintenance is different from the launch scope. Agree whether ongoing support includes security updates, bug fixes, content editing, backups or new features, and how requests are handled.',
        ],
      },
      {
        title: 'Request a quote with enough context',
        paragraphs: [
          'Send your business type, target customers, essential pages, required features and existing website URL. Include timeline preferences and a budget range if you have one; both help prioritize the scope.',
          'VRK Solutions provides project-specific quotations after discussing requirements. This guide intentionally does not assign a universal price to an undefined website.',
        ],
      },
    ],
    publishedAt: '2026-11-14',
    updatedAt: '2026-11-14',
  },
  {
    slug: 'website-vs-mobile-app-for-business',
    title: 'Website or mobile app: which should your business build first?',
    description:
      'Compare websites, web applications and mobile apps by discovery, repeat use, device features, backend needs and maintenance.',
    answer:
      'Start with a responsive website when discovery, information and enquiries are the main goals. Consider a mobile app when repeat use or device features are central to the experience. A web application may suit interactive workflows that need browser access without an app installation.',
    service: 'mobile-app-development',
    sections: [
      {
        title: 'Start with how customers will find and use it',
        paragraphs: [
          'A website can be opened from a search result or shared link without installing anything. This is useful when someone is evaluating a service, reading a product description or making a first enquiry. Clear service pages can also support search discovery.',
          'A mobile app asks users to install and keep another product on their device. That investment makes more sense when the app solves a recurring task or offers a meaningful advantage over a browser experience.',
        ],
      },
      {
        title: 'Identify the device features that matter',
        paragraphs: [
          'Camera access, notifications, background activity and offline behaviour may influence platform choice. Support varies by operating system and browser, so each requirement needs assessment rather than a blanket claim that apps or websites can do everything.',
          'An internal tool used by staff on laptops may fit a browser-based application. A recurring mobile workflow may justify an app. Some products need both interfaces connected to the same backend.',
        ],
      },
      {
        title: 'Remember the backend',
        paragraphs: [
          'Accounts, bookings, payments and business records usually need server-side services regardless of the interface. A mobile app does not remove the need to plan data ownership, permissions and operational processes.',
          'If a website and app share data, plan the API and identity model together. This reduces inconsistent business rules and helps future releases use the same underlying information.',
        ],
      },
      {
        title: 'Consider maintenance and release responsibilities',
        paragraphs: [
          'Websites need hosting and updates. Mobile applications also require platform-specific testing, store assets and release management, alongside any backend maintenance. Budget for the operating model as well as the first launch.',
          'A phased release can reduce uncertainty. Build the smallest useful experience, observe how people use it and decide what to improve. Avoid adding a mobile app only because competitors have one.',
        ],
      },
      {
        title: 'Make the decision around one clear task',
        paragraphs: [
          'Write one sentence describing the task your customer must complete, how often they do it and where they are likely to be. Then list required device features and the systems involved. This gives a development discussion a concrete starting point.',
          'VRK Solutions can scope websites, web applications and mobile apps through a remote consultation. The platform recommendation should follow the requirements and the resources available to operate it.',
        ],
      },
    ],
    publishedAt: '2026-11-14',
    updatedAt: '2026-11-14',
  },
];
