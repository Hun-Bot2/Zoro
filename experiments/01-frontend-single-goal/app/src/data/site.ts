export const siteNavItems = [
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "Developers", href: "/developers" },
  { label: "Resources", href: "/resources" },
  { label: "Pricing", href: "/pricing" },
];

export type MarketingPageContent = {
  slug: "products" | "solutions" | "developers" | "resources" | "pricing";
  eyebrow: string;
  title: string;
  copy: string;
  metric: string;
  metricLabel: string;
  primaryAction: string;
  primaryHref: string;
  secondaryAction: string;
  secondaryHref: string;
  features: Array<{
    eyebrow: string;
    title: string;
    copy: string;
    href?: string;
  }>;
  proof: Array<{
    value: string;
    label: string;
  }>;
};

export const marketingPages: Record<MarketingPageContent["slug"], MarketingPageContent> = {
  products: {
    slug: "products",
    eyebrow: "Products",
    title: "One connected suite for every way you collect, move, and report revenue.",
    copy:
      "Compose payments, billing, financial accounts, risk controls, and reporting into one operational system.",
    metric: "12",
    metricLabel: "integrated product primitives",
    primaryAction: "Explore products",
    primaryHref: "/products/payments",
    secondaryAction: "View dashboard",
    secondaryHref: "/dashboard",
    features: [
      {
        eyebrow: "Payments",
        title: "Authorize, route, and optimize every checkout.",
        copy: "Cards, wallets, bank rails, and local methods share consistent data and risk controls.",
        href: "/products/payments",
      },
      {
        eyebrow: "Billing",
        title: "Launch subscriptions, usage pricing, and credits faster.",
        copy: "Catalogs, invoices, metering, revenue recovery, and tax state move together.",
        href: "/products/billing",
      },
      {
        eyebrow: "Financial accounts",
        title: "Embed money movement into your product.",
        copy: "Issue cards, hold balances, trigger payouts, and reconcile ledger events in one place.",
        href: "/products/treasury",
      },
    ],
    proof: [
      { value: "135+", label: "payment methods" },
      { value: "42 ms", label: "routing p95" },
      { value: "99.99%", label: "workflow uptime" },
    ],
  },
  solutions: {
    slug: "solutions",
    eyebrow: "Solutions",
    title: "Flexible infrastructure for enterprises, platforms, startups, and AI products.",
    copy:
      "Use the same revenue foundation across business models while tailoring onboarding, compliance, and operations.",
    metric: "6",
    metricLabel: "business segments supported",
    primaryAction: "Find a solution",
    primaryHref: "/solutions/enterprises",
    secondaryAction: "Talk to sales",
    secondaryHref: "/company/contact",
    features: [
      {
        eyebrow: "Enterprise",
        title: "Modernize global payments without replatforming.",
        copy: "Consolidate routing, risk, finance reporting, and local payment method expansion.",
        href: "/solutions/enterprises",
      },
      {
        eyebrow: "Platforms",
        title: "Onboard sellers and monetize embedded finance.",
        copy: "KYC, payouts, disputes, card issuing, and seller dashboards fit into your product.",
        href: "/solutions/marketplaces",
      },
      {
        eyebrow: "AI commerce",
        title: "Turn intent into safe agentic checkout.",
        copy: "Create controlled buying sessions, verify identity, and monitor transactions in real time.",
        href: "/solutions/ai-companies",
      },
    ],
    proof: [
      { value: "160+", label: "markets and rails" },
      { value: "18 min", label: "seller activation" },
      { value: "24/7", label: "operations coverage" },
    ],
  },
  developers: {
    slug: "developers",
    eyebrow: "Developers",
    title: "APIs, components, and observability for teams that need control.",
    copy:
      "Typed SDKs, hosted components, webhook replay, and a rich dashboard help teams ship safely at scale.",
    metric: "500M+",
    metricLabel: "normalized events daily",
    primaryAction: "Read the docs",
    primaryHref: "/developers/documentation",
    secondaryAction: "Open console",
    secondaryHref: "/dashboard",
    features: [
      {
        eyebrow: "APIs",
        title: "Build custom flows from stable primitives.",
        copy: "Payments, accounts, invoices, identity, risk, and ledger objects share consistent patterns.",
        href: "/developers/api-reference",
      },
      {
        eyebrow: "Components",
        title: "Drop secure surfaces into your app.",
        copy: "Hosted onboarding, payment elements, pricing tables, and embedded reporting reduce build time.",
        href: "/developers/components",
      },
      {
        eyebrow: "Operations",
        title: "Debug, replay, and observe production behavior.",
        copy: "Trace requests, inspect event streams, and monitor latency without leaving the console.",
        href: "/developers/status",
      },
    ],
    proof: [
      { value: "10K+", label: "requests per second" },
      { value: "8", label: "typed SDK families" },
      { value: "4 min", label: "median first payment" },
    ],
  },
  resources: {
    slug: "resources",
    eyebrow: "Resources",
    title: "Guides, reports, and operating playbooks for internet businesses.",
    copy:
      "Learn how teams scale global payments, billing, fraud operations, marketplaces, and embedded finance.",
    metric: "42",
    metricLabel: "operating guides and reports",
    primaryAction: "Browse resources",
    primaryHref: "/resources/annual-letter",
    secondaryAction: "Latest report",
    secondaryHref: "/resources/latest-report",
    features: [
      {
        eyebrow: "Reports",
        title: "Track internet economy benchmarks.",
        copy: "Compare payment conversion, billing retention, and global expansion patterns by segment.",
        href: "/resources/latest-report",
      },
      {
        eyebrow: "Guides",
        title: "Design safer money movement workflows.",
        copy: "Practical checklists for onboarding, compliance, fraud review, and finance operations.",
        href: "/resources/platform-guide",
      },
      {
        eyebrow: "Customer stories",
        title: "See how businesses scale from launch to global operations.",
        copy: "Case studies connect product decisions to measurable revenue and operations outcomes.",
        href: "/company/customers",
      },
    ],
    proof: [
      { value: "3.8x", label: "plan expansion example" },
      { value: "44%", label: "faster reconciliation" },
      { value: "92%", label: "reviews automated" },
    ],
  },
  pricing: {
    slug: "pricing",
    eyebrow: "Pricing",
    title: "Transparent packages that scale from prototype to global finance operations.",
    copy:
      "Start with integrated payments and add billing, platform, issuing, treasury, and support modules as needed.",
    metric: "2.9%",
    metricLabel: "starting card processing rate",
    primaryAction: "Start now",
    primaryHref: "/signup",
    secondaryAction: "Compare plans",
    secondaryHref: "/pricing#plans",
    features: [
      {
        eyebrow: "Launch",
        title: "Simple usage-based pricing for early teams.",
        copy: "Pay for the payment and billing primitives you use while staying upgrade-ready.",
      },
      {
        eyebrow: "Scale",
        title: "Volume discounts and richer operations controls.",
        copy: "Add risk workflows, advanced reporting, custom roles, and priority support.",
      },
      {
        eyebrow: "Enterprise",
        title: "Custom commercial terms for complex businesses.",
        copy: "Negotiate committed volume, migration support, uptime targets, and regional rollout plans.",
      },
    ],
    proof: [
      { value: "$0", label: "monthly starter fee" },
      { value: "1.5%", label: "local method examples" },
      { value: "24h", label: "enterprise response target" },
    ],
  },
};
