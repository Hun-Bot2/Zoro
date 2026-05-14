export type DetailRouteContent = {
  group: "products" | "solutions" | "developers" | "resources" | "company" | "dashboard";
  slug: string;
  eyebrow: string;
  title: string;
  copy: string;
  metric: string;
  metricLabel: string;
  accent: string;
  highlights: string[];
  sections: Array<{
    title: string;
    copy: string;
  }>;
  relatedLinks: Array<{
    label: string;
    href: string;
  }>;
};

export const productDetailPages = {
  payments: {
    group: "products",
    slug: "payments",
    eyebrow: "Payments",
    title: "Global payment acceptance with routing, risk, and reporting built in.",
    copy:
      "Accept cards, wallets, bank debits, local methods, and in-person payments through one orchestration layer.",
    metric: "135+",
    metricLabel: "payment methods",
    accent: "from-cyan-400 via-sky-500 to-violet-500",
    highlights: ["Adaptive authorization", "Local payment methods", "Unified dispute workflows"],
    sections: [
      {
        title: "Optimize every checkout",
        copy: "Smart routing, retry logic, and wallet support help teams lift conversion without creating parallel payment stacks.",
      },
      {
        title: "Keep risk close to revenue",
        copy: "Fraud scoring, identity checks, disputes, and payment events stay connected to the same customer record.",
      },
      {
        title: "Reconcile with less manual work",
        copy: "Finance teams can match authorizations, captures, refunds, and fees from a normalized operational ledger.",
      },
    ],
    relatedLinks: [
      { label: "Billing", href: "/products/billing" },
      { label: "Radar", href: "/products/radar" },
      { label: "Start now", href: "/signup" },
    ],
  },
  billing: {
    group: "products",
    slug: "billing",
    eyebrow: "Billing",
    title: "Subscriptions, usage pricing, invoices, and credits from one catalog.",
    copy:
      "Launch recurring, hybrid, seat-based, and usage-based revenue models while keeping finance state synchronized.",
    metric: "99.99%",
    metricLabel: "metering uptime target",
    accent: "from-emerald-400 via-teal-500 to-cyan-500",
    highlights: ["Usage meters", "Invoice recovery", "Contract credits"],
    sections: [
      {
        title: "Model any pricing motion",
        copy: "Plans, add-ons, trials, coupons, credits, and overage rules live in a shared catalog that product and finance can inspect.",
      },
      {
        title: "Recover failed revenue",
        copy: "Automated retries, hosted customer actions, and payment method updates reduce involuntary churn.",
      },
      {
        title: "Report revenue cleanly",
        copy: "Invoices, tax, payments, and recognition exports preserve the detail needed for month-end operations.",
      },
    ],
    relatedLinks: [
      { label: "Pricing", href: "/pricing" },
      { label: "SaaS solutions", href: "/solutions/saas" },
      { label: "Usage guide", href: "/resources/product-update" },
    ],
  },
  "agentic-commerce": {
    group: "products",
    slug: "agentic-commerce",
    eyebrow: "Agentic commerce",
    title: "Secure buying sessions for agents, marketplaces, and embedded storefronts.",
    copy:
      "Expose constrained checkout, identity, and authorization workflows wherever purchase intent appears.",
    metric: "3-step",
    metricLabel: "controlled checkout",
    accent: "from-amber-300 via-orange-500 to-rose-500",
    highlights: ["Intent verification", "Spend controls", "Real-time monitoring"],
    sections: [
      {
        title: "Constrain autonomous purchases",
        copy: "Set merchant, amount, timing, and category limits before an agent can complete a transaction.",
      },
      {
        title: "Keep humans in review loops",
        copy: "Escalate high-risk activity to the same operations queue used for fraud, disputes, and onboarding.",
      },
      {
        title: "Audit every decision",
        copy: "Agent instructions, payment outcomes, risk decisions, and receipts remain visible in one event trail.",
      },
    ],
    relatedLinks: [
      { label: "AI companies", href: "/solutions/ai-companies" },
      { label: "Payments", href: "/products/payments" },
      { label: "Contact sales", href: "/company/contact" },
    ],
  },
  connect: {
    group: "products",
    slug: "connect",
    eyebrow: "Connect",
    title: "Embedded payments and financial workflows for platforms.",
    copy:
      "Onboard sellers, split funds, manage risk, and monetize financial services without rebuilding platform operations.",
    metric: "18 min",
    metricLabel: "median seller activation",
    accent: "from-blue-400 via-indigo-500 to-slate-700",
    highlights: ["Seller onboarding", "Payout orchestration", "Revenue share"],
    sections: [
      {
        title: "Onboard sellers faster",
        copy: "Hosted and embedded KYC flows collect the right business details while preserving platform conversion.",
      },
      {
        title: "Control funds movement",
        copy: "Split charges, reserve balances, route payouts, and handle negative balances from platform policies.",
      },
      {
        title: "Operate at marketplace scale",
        copy: "Risk reviews, seller support, tax records, and reporting fit into one platform operations model.",
      },
    ],
    relatedLinks: [
      { label: "Marketplaces", href: "/solutions/marketplaces" },
      { label: "Platforms guide", href: "/resources/platform-guide" },
      { label: "Dashboard", href: "/dashboard" },
    ],
  },
  issuing: {
    group: "products",
    slug: "issuing",
    eyebrow: "Issuing",
    title: "Programmable cards with authorization rules and spend controls.",
    copy:
      "Create virtual or physical cards, define controls, and reconcile spend against the same operational ledger.",
    metric: "$18.4K",
    metricLabel: "sample controlled spend",
    accent: "from-fuchsia-400 via-violet-500 to-indigo-500",
    highlights: ["Virtual cards", "Merchant locks", "Real-time authorization"],
    sections: [
      {
        title: "Create cards for any workflow",
        copy: "Issue cards for teams, sellers, agents, or customers with configurable limits and metadata.",
      },
      {
        title: "Approve spend in real time",
        copy: "Authorization hooks let teams evaluate merchant, category, location, and balance before funds move.",
      },
      {
        title: "Close the books faster",
        copy: "Card events connect to receipts, reimbursements, ledger entries, and reporting exports.",
      },
    ],
    relatedLinks: [
      { label: "Treasury", href: "/products/treasury" },
      { label: "Enterprise", href: "/solutions/enterprises" },
      { label: "Contact", href: "/company/contact" },
    ],
  },
  treasury: {
    group: "products",
    slug: "treasury",
    eyebrow: "Treasury",
    title: "Money movement, balances, ledgers, and payouts across markets.",
    copy:
      "Move funds, hold balances, trigger payouts, and reconcile bank partner activity from one operating surface.",
    metric: "24/7",
    metricLabel: "settlement monitoring",
    accent: "from-lime-300 via-emerald-500 to-blue-500",
    highlights: ["Borderless ledgers", "Payout batches", "Stable partner rails"],
    sections: [
      {
        title: "Move balances with context",
        copy: "Every transfer carries customer, invoice, seller, and product metadata into finance operations.",
      },
      {
        title: "Control payout timing",
        copy: "Schedule, pause, retry, or accelerate payouts while monitoring risk and liquidity constraints.",
      },
      {
        title: "Track partner activity",
        copy: "Bank files, ledger entries, and account balances reconcile against the same event model.",
      },
    ],
    relatedLinks: [
      { label: "Connect", href: "/products/connect" },
      { label: "Retail", href: "/solutions/retail" },
      { label: "API reference", href: "/developers/api-reference" },
    ],
  },
  radar: {
    group: "products",
    slug: "radar",
    eyebrow: "Radar",
    title: "Fraud prevention, dispute workflows, and risk intelligence for revenue teams.",
    copy:
      "Monitor payment, identity, seller, and payout risk with rules that stay close to revenue operations.",
    metric: "92%",
    metricLabel: "sample automated reviews",
    accent: "from-rose-400 via-pink-500 to-violet-500",
    highlights: ["Risk rules", "Dispute queues", "Identity signals"],
    sections: [
      {
        title: "Score risk in context",
        copy: "Evaluate customer history, seller state, payment method, device, and velocity before approving activity.",
      },
      {
        title: "Give operators clear queues",
        copy: "Manual reviews, disputes, and blocked payout decisions are routed with the evidence needed to act.",
      },
      {
        title: "Tune without code deploys",
        copy: "Rules, lists, thresholds, and review policies can change as risk patterns move.",
      },
    ],
    relatedLinks: [
      { label: "Payments", href: "/products/payments" },
      { label: "Support", href: "/developers/support" },
      { label: "Dashboard risk", href: "/dashboard/risk" },
    ],
  },
} satisfies Record<string, DetailRouteContent>;

export const solutionDetailPages = {
  enterprises: {
    group: "solutions",
    slug: "enterprises",
    eyebrow: "Enterprise solutions",
    title: "Modernize global payments without replatforming every system at once.",
    copy:
      "Consolidate routing, risk, finance reporting, and local payment method expansion around existing enterprise operations.",
    metric: "160+",
    metricLabel: "markets and rails",
    accent: "from-sky-400 via-cyan-500 to-emerald-400",
    highlights: ["Migration support", "Regional rollout", "Custom controls"],
    sections: [
      {
        title: "Migrate in phases",
        copy: "Start with selected markets, products, or payment flows before expanding to a full revenue platform.",
      },
      {
        title: "Centralize oversight",
        copy: "Shared reporting, support queues, roles, and risk policies reduce fragmented operations.",
      },
      {
        title: "Support complex contracts",
        copy: "Volume commitments, regional fees, uptime targets, and custom support terms fit enterprise procurement.",
      },
    ],
    relatedLinks: [
      { label: "Pricing", href: "/pricing" },
      { label: "Contact sales", href: "/company/contact" },
      { label: "Customers", href: "/company/customers" },
    ],
  },
  startups: {
    group: "solutions",
    slug: "startups",
    eyebrow: "Startup solutions",
    title: "Launch revenue workflows quickly and keep the path to scale open.",
    copy:
      "Start with checkout, billing, and basic reporting, then add platform, issuing, and treasury workflows as the business grows.",
    metric: "$0",
    metricLabel: "starter monthly fee",
    accent: "from-violet-400 via-indigo-500 to-cyan-400",
    highlights: ["Fast onboarding", "No-code setup", "Upgrade path"],
    sections: [
      {
        title: "Start with the essentials",
        copy: "Hosted checkout, payment links, invoices, and a dashboard give early teams a complete revenue base.",
      },
      {
        title: "Iterate on pricing",
        copy: "Usage meters and catalogs let teams test packaging without rebuilding billing infrastructure.",
      },
      {
        title: "Grow into operations",
        copy: "Risk, support, reporting, and finance workflows are already available when volume grows.",
      },
    ],
    relatedLinks: [
      { label: "Signup", href: "/signup" },
      { label: "Billing", href: "/products/billing" },
      { label: "Startup story", href: "/resources/pulse-ai" },
    ],
  },
  marketplaces: {
    group: "solutions",
    slug: "marketplaces",
    eyebrow: "Marketplace solutions",
    title: "Onboard sellers, split funds, and operate risk from one platform layer.",
    copy:
      "Marketplaces can support payments, compliance, payouts, disputes, and seller reporting without parallel systems.",
    metric: "18 min",
    metricLabel: "seller activation example",
    accent: "from-amber-300 via-orange-400 to-rose-500",
    highlights: ["Seller KYC", "Split payments", "Dispute operations"],
    sections: [
      {
        title: "Reduce seller friction",
        copy: "Embedded onboarding collects required details while keeping sellers in the marketplace experience.",
      },
      {
        title: "Route funds precisely",
        copy: "Application fees, seller payouts, refunds, and reserves can be controlled per transaction.",
      },
      {
        title: "Give teams operational context",
        copy: "Support, risk, and finance can inspect seller activity, payout state, and dispute evidence together.",
      },
    ],
    relatedLinks: [
      { label: "Connect", href: "/products/connect" },
      { label: "Atlas Market", href: "/resources/atlas-market" },
      { label: "Platforms guide", href: "/resources/platform-guide" },
    ],
  },
  saas: {
    group: "solutions",
    slug: "saas",
    eyebrow: "SaaS solutions",
    title: "Recurring revenue, usage pricing, and account operations for software teams.",
    copy:
      "SaaS businesses can manage subscriptions, trials, overages, credits, and reporting without separating product and finance data.",
    metric: "3.8x",
    metricLabel: "sample plan expansion",
    accent: "from-fuchsia-400 via-violet-500 to-sky-500",
    highlights: ["Usage pricing", "Revenue recovery", "Self-serve billing"],
    sections: [
      {
        title: "Launch flexible packages",
        copy: "Seat, tier, usage, and hybrid pricing can coexist in one catalog for product-led growth and sales-led contracts.",
      },
      {
        title: "Keep accounts healthy",
        copy: "Dunning, invoice updates, payment method collection, and customer portals reduce support load.",
      },
      {
        title: "Inform product decisions",
        copy: "Revenue and usage events show which packaging changes affect retention, expansion, and cash collection.",
      },
    ],
    relatedLinks: [
      { label: "Billing", href: "/products/billing" },
      { label: "Product update", href: "/resources/product-update" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  retail: {
    group: "solutions",
    slug: "retail",
    eyebrow: "Retail solutions",
    title: "Unified online, in-store, and marketplace commerce operations.",
    copy:
      "Retail teams can consolidate payments, refunds, disputes, store reporting, and local payment expansion.",
    metric: "44%",
    metricLabel: "faster reconciliation example",
    accent: "from-lime-300 via-emerald-400 to-cyan-500",
    highlights: ["Omnichannel payments", "Store reporting", "Refund controls"],
    sections: [
      {
        title: "Connect every sales channel",
        copy: "Online checkout, in-person payment flows, subscriptions, and marketplaces share customer and payment state.",
      },
      {
        title: "Support local expectations",
        copy: "Add wallets, bank methods, and regional payment options without fragmenting reconciliation.",
      },
      {
        title: "Resolve disputes faster",
        copy: "Evidence, receipts, shipping state, and payment activity stay visible to operations teams.",
      },
    ],
    relatedLinks: [
      { label: "Payments", href: "/products/payments" },
      { label: "Hearth Retail", href: "/resources/hearth-retail" },
      { label: "Radar", href: "/products/radar" },
    ],
  },
  "ai-companies": {
    group: "solutions",
    slug: "ai-companies",
    eyebrow: "AI company solutions",
    title: "Controlled commerce workflows for AI products and agentic buying.",
    copy:
      "AI teams can verify intent, constrain spend, process payments, and monitor risk for autonomous purchasing flows.",
    metric: "500M+",
    metricLabel: "events normalized daily",
    accent: "from-cyan-300 via-blue-500 to-violet-600",
    highlights: ["Agent checkout", "Spend policies", "Event monitoring"],
    sections: [
      {
        title: "Verify purchase intent",
        copy: "Bind agent actions to user permissions, payment limits, merchant context, and review thresholds.",
      },
      {
        title: "Expose safe checkout",
        copy: "Hosted sessions and APIs let AI products complete purchases without exposing unnecessary payment data.",
      },
      {
        title: "Monitor agent behavior",
        copy: "Operators can inspect payment, identity, risk, and support events as patterns evolve.",
      },
    ],
    relatedLinks: [
      { label: "Agentic commerce", href: "/products/agentic-commerce" },
      { label: "API reference", href: "/developers/api-reference" },
      { label: "Contact", href: "/company/contact" },
    ],
  },
} satisfies Record<string, DetailRouteContent>;

export const developerDetailPages = {
  documentation: {
    group: "developers",
    slug: "documentation",
    eyebrow: "Documentation",
    title: "Guides, examples, and integration paths for every Zoro workflow.",
    copy:
      "Move from first payment to production operations with task-oriented documentation and tested examples.",
    metric: "42",
    metricLabel: "implementation guides",
    accent: "from-sky-400 via-blue-500 to-violet-500",
    highlights: ["Quickstarts", "Integration guides", "Operational checklists"],
    sections: [
      {
        title: "Start with a clear path",
        copy: "Choose a checkout, billing, platform, or treasury path and follow the implementation sequence.",
      },
      {
        title: "Use realistic examples",
        copy: "Sample payloads, webhook fixtures, and dashboard screenshots mirror the production model.",
      },
      {
        title: "Ship with guardrails",
        copy: "Testing, rollout, observability, and support checklists help teams avoid brittle launches.",
      },
    ],
    relatedLinks: [
      { label: "API reference", href: "/developers/api-reference" },
      { label: "SDKs", href: "/developers/sdks" },
      { label: "Support", href: "/developers/support" },
    ],
  },
  "api-reference": {
    group: "developers",
    slug: "api-reference",
    eyebrow: "API reference",
    title: "Consistent primitives for payments, billing, accounts, identity, and ledgers.",
    copy:
      "Every endpoint follows predictable resource patterns, idempotency behavior, errors, and webhook semantics.",
    metric: "10K+",
    metricLabel: "requests per second sample",
    accent: "from-cyan-300 via-sky-500 to-indigo-600",
    highlights: ["Idempotency", "Webhooks", "Typed objects"],
    sections: [
      {
        title: "Compose stable resources",
        copy: "Payment intents, invoices, accounts, cards, and transfers share naming, pagination, and metadata patterns.",
      },
      {
        title: "Handle failure explicitly",
        copy: "Structured errors, retry guidance, and webhook replay keep production behavior debuggable.",
      },
      {
        title: "Test before launch",
        copy: "Test-mode fixtures and event simulation make integration states repeatable.",
      },
    ],
    relatedLinks: [
      { label: "Documentation", href: "/developers/documentation" },
      { label: "Status", href: "/developers/status" },
      { label: "Build dashboard", href: "/dashboard" },
    ],
  },
  sdks: {
    group: "developers",
    slug: "sdks",
    eyebrow: "SDKs",
    title: "Typed SDKs and generated schemas for product and platform teams.",
    copy:
      "Use consistent client libraries, types, retries, and webhook helpers across application stacks.",
    metric: "8",
    metricLabel: "SDK families",
    accent: "from-emerald-300 via-teal-500 to-cyan-500",
    highlights: ["Type safety", "Webhook helpers", "Test fixtures"],
    sections: [
      {
        title: "Integrate with confidence",
        copy: "Generated request and response types help teams catch mismatches before production.",
      },
      {
        title: "Keep behavior consistent",
        copy: "Retries, idempotency keys, pagination, and error parsing follow shared SDK conventions.",
      },
      {
        title: "Move between stacks",
        copy: "Product, backend, data, and operations teams can use the same resource model in different languages.",
      },
    ],
    relatedLinks: [
      { label: "API reference", href: "/developers/api-reference" },
      { label: "Changelog", href: "/developers/changelog" },
      { label: "Support", href: "/developers/support" },
    ],
  },
  components: {
    group: "developers",
    slug: "components",
    eyebrow: "Components",
    title: "Hosted and embedded surfaces for checkout, onboarding, billing, and reporting.",
    copy:
      "Drop secure product experiences into your app while keeping customization, accessibility, and observability.",
    metric: "4 min",
    metricLabel: "sample first payment",
    accent: "from-violet-400 via-fuchsia-500 to-rose-500",
    highlights: ["Hosted checkout", "Onboarding components", "Embedded reports"],
    sections: [
      {
        title: "Reduce sensitive scope",
        copy: "Hosted components keep payment and identity details inside secure surfaces.",
      },
      {
        title: "Match product workflows",
        copy: "Use theme tokens, callbacks, and state events to keep embedded flows aligned with your product.",
      },
      {
        title: "Observe every step",
        copy: "Component events, errors, and completion state are visible in the developer console.",
      },
    ],
    relatedLinks: [
      { label: "Documentation", href: "/developers/documentation" },
      { label: "Payments", href: "/products/payments" },
      { label: "Signup", href: "/signup" },
    ],
  },
  "no-code": {
    group: "developers",
    slug: "no-code",
    eyebrow: "No-code operations",
    title: "Configure invoices, payment links, tax, and reports from the dashboard.",
    copy:
      "Operations teams can launch and manage revenue workflows without waiting for every change to become an engineering project.",
    metric: "12",
    metricLabel: "dashboard modules",
    accent: "from-amber-300 via-orange-400 to-rose-500",
    highlights: ["Payment links", "Invoice workflows", "Reporting exports"],
    sections: [
      {
        title: "Launch simple flows quickly",
        copy: "Create payment links, invoices, customer portals, and test data from dashboard controls.",
      },
      {
        title: "Keep engineers in the loop",
        copy: "No-code changes still emit events and preserve configuration history for auditability.",
      },
      {
        title: "Operate daily work",
        copy: "Support, finance, and risk teams can resolve common revenue tasks from one workspace.",
      },
    ],
    relatedLinks: [
      { label: "Dashboard", href: "/dashboard" },
      { label: "Billing", href: "/products/billing" },
      { label: "Support", href: "/developers/support" },
    ],
  },
  status: {
    group: "developers",
    slug: "status",
    eyebrow: "Status",
    title: "Operational status, uptime targets, and incident communication.",
    copy:
      "Track API availability, latency, event delivery, and product-level incidents across the Zoro platform.",
    metric: "99.999%",
    metricLabel: "availability target",
    accent: "from-lime-300 via-emerald-500 to-cyan-500",
    highlights: ["API health", "Event delivery", "Incident updates"],
    sections: [
      {
        title: "Monitor core systems",
        copy: "Payments, billing, connect, treasury, dashboard, and webhooks expose current operating state.",
      },
      {
        title: "Understand impact",
        copy: "Incident summaries connect affected products, regions, and mitigation status.",
      },
      {
        title: "Review history",
        copy: "Post-incident records help teams understand reliability patterns and planned improvements.",
      },
    ],
    relatedLinks: [
      { label: "Support", href: "/developers/support" },
      { label: "Changelog", href: "/developers/changelog" },
      { label: "Dashboard", href: "/dashboard" },
    ],
  },
  changelog: {
    group: "developers",
    slug: "changelog",
    eyebrow: "Changelog",
    title: "Product, API, and dashboard changes organized for shipping teams.",
    copy:
      "Follow new APIs, dashboard improvements, SDK updates, and behavior changes before they affect production.",
    metric: "24h",
    metricLabel: "release note target",
    accent: "from-blue-400 via-indigo-500 to-violet-600",
    highlights: ["API updates", "SDK releases", "Dashboard changes"],
    sections: [
      {
        title: "Track relevant releases",
        copy: "Filter changes by product area, version, and operational impact.",
      },
      {
        title: "Plan migrations",
        copy: "Deprecation windows, migration steps, and compatibility notes keep upgrades manageable.",
      },
      {
        title: "Share changes internally",
        copy: "Release notes are written for engineers, operators, and finance teams that depend on revenue systems.",
      },
    ],
    relatedLinks: [
      { label: "API reference", href: "/developers/api-reference" },
      { label: "Documentation", href: "/developers/documentation" },
      { label: "Status", href: "/developers/status" },
    ],
  },
  support: {
    group: "developers",
    slug: "support",
    eyebrow: "Support",
    title: "Technical support paths for integration, launch, and production incidents.",
    copy:
      "Give engineers and operators a clear way to resolve API questions, dashboard issues, and urgent payment behavior.",
    metric: "24/7",
    metricLabel: "coverage example",
    accent: "from-rose-400 via-orange-400 to-amber-300",
    highlights: ["Integration help", "Incident triage", "Launch reviews"],
    sections: [
      {
        title: "Resolve build blockers",
        copy: "Get help with webhooks, SDKs, test data, component integration, and dashboard configuration.",
      },
      {
        title: "Escalate production issues",
        copy: "Payment, payout, billing, and risk incidents can be triaged with operational context.",
      },
      {
        title: "Prepare for launch",
        copy: "Review readiness, observability, support runbooks, and failure handling before go-live.",
      },
    ],
    relatedLinks: [
      { label: "Documentation", href: "/developers/documentation" },
      { label: "Status", href: "/developers/status" },
      { label: "Contact", href: "/company/contact" },
    ],
  },
} satisfies Record<string, DetailRouteContent>;

export const resourceDetailPages = {
  "annual-letter": {
    group: "resources",
    slug: "annual-letter",
    eyebrow: "Annual letter",
    title: "New economic patterns are emerging across internet businesses.",
    copy:
      "A research view into how software, retail, marketplaces, and AI products are changing revenue operations.",
    metric: "$1.2T",
    metricLabel: "sample supported volume",
    accent: "from-[#0a2540] via-blue-600 to-cyan-400",
    highlights: ["Global expansion", "Usage pricing", "Embedded finance"],
    sections: [
      {
        title: "Internet businesses are becoming more operationally complex",
        copy: "Revenue teams now manage payment methods, billing models, seller flows, risk, and regional finance requirements together.",
      },
      {
        title: "Product and finance are converging",
        copy: "Pricing, checkout, tax, and reporting decisions increasingly require shared systems rather than exports and spreadsheets.",
      },
      {
        title: "AI introduces new commerce surfaces",
        copy: "Agentic purchasing makes identity, spend control, and audit trails core infrastructure requirements.",
      },
    ],
    relatedLinks: [
      { label: "Resources", href: "/resources" },
      { label: "AI companies", href: "/solutions/ai-companies" },
      { label: "Platform guide", href: "/resources/platform-guide" },
    ],
  },
  "product-update": {
    group: "resources",
    slug: "product-update",
    eyebrow: "Product update",
    title: "Usage meters now sync with contracts, credits, and revenue reports.",
    copy:
      "A closer look at how metering, billing catalogs, and finance reporting stay aligned for usage-based products.",
    metric: "74%",
    metricLabel: "sample usage threshold",
    accent: "from-emerald-300 via-cyan-400 to-sky-500",
    highlights: ["Usage meters", "Contract credits", "Revenue reports"],
    sections: [
      {
        title: "Meters stay attached to commercial terms",
        copy: "Usage events can map to plan limits, committed spend, credits, and invoice line items.",
      },
      {
        title: "Finance gets earlier visibility",
        copy: "Product usage trends can be inspected before invoices close so teams can explain revenue movement.",
      },
      {
        title: "Pricing experiments become safer",
        copy: "Teams can test usage packaging while preserving auditability and customer-facing invoice clarity.",
      },
    ],
    relatedLinks: [
      { label: "Billing", href: "/products/billing" },
      { label: "SaaS", href: "/solutions/saas" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  "platform-guide": {
    group: "resources",
    slug: "platform-guide",
    eyebrow: "Guide",
    title: "How platforms add embedded financial services responsibly.",
    copy:
      "A practical operating model for onboarding, compliance, risk review, payouts, and monetization.",
    metric: "92%",
    metricLabel: "reviews automated example",
    accent: "from-amber-300 via-rose-300 to-violet-400",
    highlights: ["Seller onboarding", "Risk review", "Payout controls"],
    sections: [
      {
        title: "Define the platform operating model",
        copy: "Clarify which teams own onboarding, risk decisions, payout exceptions, and seller support.",
      },
      {
        title: "Build financial services incrementally",
        copy: "Start with payments and payouts before introducing cards, financing, treasury, or advanced risk controls.",
      },
      {
        title: "Instrument every handoff",
        copy: "Seller state, payout state, compliance reviews, and support actions should remain visible in one system.",
      },
    ],
    relatedLinks: [
      { label: "Connect", href: "/products/connect" },
      { label: "Marketplaces", href: "/solutions/marketplaces" },
      { label: "Support", href: "/developers/support" },
    ],
  },
  "hearth-retail": {
    group: "resources",
    slug: "hearth-retail",
    eyebrow: "Customer story",
    title: "Hearth Retail unified online and in-store payments in 22 countries.",
    copy:
      "A retail operations story about consolidating payment methods, refunds, disputes, and reconciliation.",
    metric: "44%",
    metricLabel: "faster reconciliation",
    accent: "from-sky-300 via-cyan-200 to-lime-200",
    highlights: ["Omnichannel payments", "Local methods", "Reconciliation"],
    sections: [
      {
        title: "The challenge",
        copy: "Regional stores, ecommerce, and marketplaces used different reporting paths and refund workflows.",
      },
      {
        title: "The operating change",
        copy: "Hearth moved online and in-store payments into one event model with shared risk and finance workflows.",
      },
      {
        title: "The outcome",
        copy: "Finance teams reduced manual matching while local teams kept payment methods customers expected.",
      },
    ],
    relatedLinks: [
      { label: "Retail", href: "/solutions/retail" },
      { label: "Payments", href: "/products/payments" },
      { label: "Radar", href: "/products/radar" },
    ],
  },
  "atlas-market": {
    group: "resources",
    slug: "atlas-market",
    eyebrow: "Customer story",
    title: "Atlas Market scaled seller onboarding without rebuilding risk tools.",
    copy:
      "A marketplace story about seller activation, KYC, payout controls, and embedded payment operations.",
    metric: "18 min",
    metricLabel: "median seller activation",
    accent: "from-rose-300 via-orange-200 to-amber-200",
    highlights: ["Seller KYC", "Payout controls", "Risk queues"],
    sections: [
      {
        title: "The challenge",
        copy: "Atlas needed faster seller activation without losing visibility into risk and payout exceptions.",
      },
      {
        title: "The operating change",
        copy: "The team embedded onboarding and connected risk review directly to payout readiness.",
      },
      {
        title: "The outcome",
        copy: "Sellers activated faster while operations teams kept a single view of compliance and payout state.",
      },
    ],
    relatedLinks: [
      { label: "Marketplaces", href: "/solutions/marketplaces" },
      { label: "Connect", href: "/products/connect" },
      { label: "Platform guide", href: "/resources/platform-guide" },
    ],
  },
  "pulse-ai": {
    group: "resources",
    slug: "pulse-ai",
    eyebrow: "Customer story",
    title: "PulseAI moved from seat pricing to precise usage-based billing.",
    copy:
      "A SaaS and AI billing story about usage meters, packaging, credits, and revenue reporting.",
    metric: "6 weeks",
    metricLabel: "to launch",
    accent: "from-violet-300 via-indigo-200 to-sky-200",
    highlights: ["Usage pricing", "Credits", "Revenue reporting"],
    sections: [
      {
        title: "The challenge",
        copy: "PulseAI needed to map variable model usage to customer contracts and understandable invoices.",
      },
      {
        title: "The operating change",
        copy: "Usage meters, plan catalogs, credits, and invoice previews became part of one billing workflow.",
      },
      {
        title: "The outcome",
        copy: "The team launched usage pricing quickly and created clearer expansion paths for high-volume customers.",
      },
    ],
    relatedLinks: [
      { label: "SaaS", href: "/solutions/saas" },
      { label: "Billing", href: "/products/billing" },
      { label: "Product update", href: "/resources/product-update" },
    ],
  },
  "latest-report": {
    group: "resources",
    slug: "latest-report",
    eyebrow: "Latest report",
    title: "Revenue infrastructure benchmarks for high-growth internet teams.",
    copy:
      "Benchmarks for payment conversion, billing retention, marketplace onboarding, and global expansion operations.",
    metric: "42",
    metricLabel: "benchmarks and guides",
    accent: "from-cyan-300 via-blue-400 to-violet-500",
    highlights: ["Payment conversion", "Billing retention", "Marketplace activation"],
    sections: [
      {
        title: "Compare operating models",
        copy: "Review how teams organize payment operations, finance workflows, and platform risk at different stages.",
      },
      {
        title: "Use benchmarks carefully",
        copy: "Metrics are most useful when paired with business model, market, and support context.",
      },
      {
        title: "Turn findings into work",
        copy: "Each benchmark includes suggested instrumentation and process changes for revenue teams.",
      },
    ],
    relatedLinks: [
      { label: "Annual letter", href: "/resources/annual-letter" },
      { label: "Resources", href: "/resources" },
      { label: "Contact", href: "/company/contact" },
    ],
  },
} satisfies Record<string, DetailRouteContent>;

export const companyDetailPages = {
  customers: {
    group: "company",
    slug: "customers",
    eyebrow: "Customers",
    title: "Customer stories from teams scaling global revenue operations.",
    copy:
      "Explore how retailers, marketplaces, SaaS teams, and AI products use Zoro primitives together.",
    metric: "7K+",
    metricLabel: "sample locations connected",
    accent: "from-sky-300 via-cyan-300 to-emerald-300",
    highlights: ["Retail", "Marketplaces", "SaaS"],
    sections: [
      {
        title: "Operational depth matters",
        copy: "Customer stories focus on payment, billing, risk, and finance workflows rather than surface metrics alone.",
      },
      {
        title: "Every segment composes differently",
        copy: "The same primitives support retail checkout, marketplace onboarding, and SaaS usage pricing.",
      },
      {
        title: "Scale changes responsibilities",
        copy: "As teams grow, support, finance, risk, and product need shared visibility into revenue state.",
      },
    ],
    relatedLinks: [
      { label: "Hearth Retail", href: "/resources/hearth-retail" },
      { label: "Atlas Market", href: "/resources/atlas-market" },
      { label: "PulseAI", href: "/resources/pulse-ai" },
    ],
  },
  partners: {
    group: "company",
    slug: "partners",
    eyebrow: "Partners",
    title: "Partner with Zoro across implementation, platforms, and financial operations.",
    copy:
      "Implementation teams, platform operators, and financial partners can help customers adopt revenue infrastructure.",
    metric: "160+",
    metricLabel: "markets and partner rails",
    accent: "from-emerald-300 via-teal-400 to-cyan-500",
    highlights: ["Implementation", "Financial rails", "Platform programs"],
    sections: [
      {
        title: "Implementation partners",
        copy: "Help customers design checkout, billing, platform, and reporting workflows.",
      },
      {
        title: "Technology partners",
        copy: "Connect product, data, CRM, support, and finance systems to the Zoro event model.",
      },
      {
        title: "Financial partners",
        copy: "Support regional rails, settlement, treasury, and compliance workflows.",
      },
    ],
    relatedLinks: [
      { label: "Contact", href: "/company/contact" },
      { label: "Developers", href: "/developers" },
      { label: "Solutions", href: "/solutions" },
    ],
  },
  newsroom: {
    group: "company",
    slug: "newsroom",
    eyebrow: "Newsroom",
    title: "Company news, product milestones, and internet economy updates.",
    copy:
      "Follow Zoro announcements, research, product releases, and stories about changing revenue infrastructure.",
    metric: "24h",
    metricLabel: "release update target",
    accent: "from-blue-400 via-indigo-500 to-violet-600",
    highlights: ["Company news", "Product releases", "Research"],
    sections: [
      {
        title: "Product milestones",
        copy: "Updates cover new APIs, dashboard surfaces, platform tools, and operating improvements.",
      },
      {
        title: "Research releases",
        copy: "Internet economy reports track how businesses expand globally and adopt new revenue models.",
      },
      {
        title: "Company notes",
        copy: "Hiring, partner, customer, and community updates are organized for quick scanning.",
      },
    ],
    relatedLinks: [
      { label: "Annual letter", href: "/resources/annual-letter" },
      { label: "Changelog", href: "/developers/changelog" },
      { label: "Careers", href: "/company/careers" },
    ],
  },
  careers: {
    group: "company",
    slug: "careers",
    eyebrow: "Careers",
    title: "Build revenue infrastructure for ambitious internet businesses.",
    copy:
      "Join product, engineering, design, operations, and go-to-market teams working on modern financial systems.",
    metric: "6",
    metricLabel: "team disciplines",
    accent: "from-violet-400 via-fuchsia-500 to-rose-400",
    highlights: ["Engineering", "Design", "Operations"],
    sections: [
      {
        title: "Product engineering",
        copy: "Build payments, billing, platform, risk, developer, and dashboard systems with high reliability expectations.",
      },
      {
        title: "Design and research",
        copy: "Shape dense operational workflows that still feel approachable and visually precise.",
      },
      {
        title: "Customer operations",
        copy: "Help teams launch, debug, and scale revenue infrastructure across markets.",
      },
    ],
    relatedLinks: [
      { label: "Company", href: "/company" },
      { label: "Contact", href: "/company/contact" },
      { label: "Developers", href: "/developers" },
    ],
  },
  contact: {
    group: "company",
    slug: "contact",
    eyebrow: "Contact",
    title: "Talk with the Zoro team about payments, billing, platforms, or global operations.",
    copy:
      "Use this destination for sales conversations, enterprise questions, support routing, and partnership inquiries.",
    metric: "24h",
    metricLabel: "enterprise response target",
    accent: "from-amber-300 via-orange-400 to-rose-500",
    highlights: ["Sales", "Support", "Partnerships"],
    sections: [
      {
        title: "Sales inquiries",
        copy: "Discuss pricing, migration, launch timing, regions, and the right combination of products.",
      },
      {
        title: "Support routing",
        copy: "Existing teams can route technical and operational questions to the right support path.",
      },
      {
        title: "Partner conversations",
        copy: "Implementation, technology, and financial partners can start a program discussion.",
      },
    ],
    relatedLinks: [
      { label: "Pricing", href: "/pricing" },
      { label: "Support", href: "/developers/support" },
      { label: "Partners", href: "/company/partners" },
    ],
  },
  privacy: {
    group: "company",
    slug: "privacy",
    eyebrow: "Privacy",
    title: "Privacy, data handling, and operational trust commitments.",
    copy:
      "A plain-language overview of how a revenue infrastructure platform should approach data minimization and control.",
    metric: "0",
    metricLabel: "third-party trackers in this demo",
    accent: "from-slate-400 via-blue-500 to-cyan-500",
    highlights: ["Data minimization", "Role-based access", "Audit trails"],
    sections: [
      {
        title: "Collect only what workflows need",
        copy: "Payment, identity, and operational data should be scoped to product, support, risk, and compliance needs.",
      },
      {
        title: "Control who can act",
        copy: "Roles, permissions, and audit trails help teams separate view, support, finance, and admin actions.",
      },
      {
        title: "Keep users informed",
        copy: "Clear data practices make it easier for customers, partners, and operators to understand responsibilities.",
      },
    ],
    relatedLinks: [
      { label: "Company", href: "/company" },
      { label: "Contact", href: "/company/contact" },
      { label: "Dashboard", href: "/dashboard" },
    ],
  },
} satisfies Record<string, DetailRouteContent>;

export const companyOverviewPage: DetailRouteContent = {
  group: "company",
  slug: "company",
  eyebrow: "Company",
  title: "Zoro builds revenue infrastructure for product, finance, and operations teams.",
  copy:
    "The company hub connects customers, partners, newsroom updates, careers, contact paths, and privacy information.",
  metric: "2026",
  metricLabel: "demo company timeline",
  accent: "from-[#0a2540] via-blue-600 to-cyan-400",
  highlights: ["Customers", "Partners", "Careers"],
  sections: [
    {
      title: "Customer-centered product work",
      copy: "The product model starts from how businesses actually collect revenue, move money, and reconcile operations.",
    },
    {
      title: "Partner-friendly infrastructure",
      copy: "Implementation, technology, and financial partners can build durable workflows around shared primitives.",
    },
    {
      title: "Transparent company surfaces",
      copy: "News, hiring, contact, and privacy pages are separated so every company link has a clear destination.",
    },
  ],
  relatedLinks: [
    { label: "Customers", href: "/company/customers" },
    { label: "Partners", href: "/company/partners" },
    { label: "Contact", href: "/company/contact" },
  ],
};

export const dashboardDetailPages = {
  payments: {
    group: "dashboard",
    slug: "payments",
    eyebrow: "Dashboard payments",
    title: "Authenticated payment activity, conversion, and authorization detail.",
    copy:
      "Inspect payment health, authorization trends, refunds, disputes, and route performance for the active workspace.",
    metric: "$428.6K",
    metricLabel: "workspace revenue processed",
    accent: "from-cyan-400 via-sky-500 to-violet-500",
    highlights: ["Authorization", "Refunds", "Disputes"],
    sections: [
      {
        title: "Payment health",
        copy: "Track volume, conversion, approval rate, payment methods, and failure reasons from the dashboard context.",
      },
      {
        title: "Operational queues",
        copy: "Refunds, disputes, high-value checkouts, and review tasks stay connected to customer and invoice state.",
      },
      {
        title: "Route performance",
        copy: "Monitor p95 latency, processor outcomes, and regional method behavior for active routes.",
      },
    ],
    relatedLinks: [
      { label: "Dashboard", href: "/dashboard" },
      { label: "Public payments page", href: "/products/payments" },
      { label: "Risk", href: "/dashboard/risk" },
    ],
  },
  risk: {
    group: "dashboard",
    slug: "risk",
    eyebrow: "Dashboard risk",
    title: "Authenticated risk reviews, policies, and queue health.",
    copy:
      "Review fraud signals, seller checks, dispute evidence, and payout controls for the active workspace.",
    metric: "14",
    metricLabel: "open risk reviews",
    accent: "from-rose-400 via-pink-500 to-violet-500",
    highlights: ["Review queue", "Fraud rules", "Dispute evidence"],
    sections: [
      {
        title: "Queue triage",
        copy: "Prioritize reviews by risk score, value, customer state, seller status, and deadline.",
      },
      {
        title: "Policy monitoring",
        copy: "Track which rules block, review, or allow payment, seller, and payout activity.",
      },
      {
        title: "Evidence handling",
        copy: "Keep disputes, receipts, checkout events, and communications in one operational record.",
      },
    ],
    relatedLinks: [
      { label: "Dashboard", href: "/dashboard" },
      { label: "Radar", href: "/products/radar" },
      { label: "Billing", href: "/dashboard/billing" },
    ],
  },
  billing: {
    group: "dashboard",
    slug: "billing",
    eyebrow: "Dashboard billing",
    title: "Authenticated invoices, usage meters, credits, and customer billing state.",
    copy:
      "Monitor billing operations for active subscriptions, usage thresholds, invoice recovery, and revenue reporting.",
    metric: "98.7%",
    metricLabel: "successful payments",
    accent: "from-emerald-400 via-teal-500 to-cyan-500",
    highlights: ["Invoices", "Usage meters", "Revenue recovery"],
    sections: [
      {
        title: "Subscription health",
        copy: "Track active plans, trial conversions, invoice state, and payment method coverage.",
      },
      {
        title: "Usage visibility",
        copy: "Inspect meter thresholds, contract credits, and upcoming invoice previews before close.",
      },
      {
        title: "Recovery workflows",
        copy: "Retry failed payments, request updated methods, and review dunning status from the same workspace.",
      },
    ],
    relatedLinks: [
      { label: "Dashboard", href: "/dashboard" },
      { label: "Public billing page", href: "/products/billing" },
      { label: "Payments", href: "/dashboard/payments" },
    ],
  },
} satisfies Record<string, DetailRouteContent>;

export const detailRouteGroups = {
  products: productDetailPages,
  solutions: solutionDetailPages,
  developers: developerDetailPages,
  resources: resourceDetailPages,
  company: companyDetailPages,
  dashboard: dashboardDetailPages,
};
