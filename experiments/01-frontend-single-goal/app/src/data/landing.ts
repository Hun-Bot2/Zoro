import {
  BadgeCheck,
  Banknote,
  BarChart3,
  Binary,
  Blocks,
  Braces,
  Building2,
  CreditCard,
  Globe2,
  Landmark,
  Layers3,
  LockKeyhole,
  MessageCircle,
  RadioTower,
  ReceiptText,
  Repeat2,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  WalletCards,
  Zap,
} from "lucide-react";

export const navItems = ["Products", "Solutions", "Developers", "Resources", "Pricing"];

export const solutionTabs = [
  "Payments",
  "Billing",
  "Connect",
  "Issuing",
  "Treasury",
];

export const productCards = [
  {
    icon: CreditCard,
    eyebrow: "Payments",
    title: "Accept and optimize payments globally",
    copy:
      "Cards, wallets, bank debits, local methods, and in-person payment flows share one orchestration layer.",
    accent: "from-cyan-400 via-sky-500 to-violet-500",
    stats: ["135+ methods", "42 ms routing"],
  },
  {
    icon: Repeat2,
    eyebrow: "Billing",
    title: "Launch every pricing model from one catalog",
    copy:
      "Subscriptions, usage meters, credits, trials, and one-off invoices stay synchronized across teams.",
    accent: "from-emerald-400 via-teal-500 to-cyan-500",
    stats: ["99.99% metering", "12 currencies"],
  },
  {
    icon: Sparkles,
    eyebrow: "Agentic commerce",
    title: "Make buying available wherever intent appears",
    copy:
      "Expose secure checkout sessions to agents, marketplaces, and embedded storefronts without replatforming.",
    accent: "from-amber-300 via-orange-500 to-rose-500",
    stats: ["3-step checkout", "Live risk scoring"],
  },
  {
    icon: WalletCards,
    eyebrow: "Issuing",
    title: "Create programmable cards for teams and customers",
    copy:
      "Control spend, authorization rules, and reconciliation from the same financial data model.",
    accent: "from-fuchsia-400 via-violet-500 to-indigo-500",
    stats: ["Virtual cards", "Custom controls"],
  },
  {
    icon: Landmark,
    eyebrow: "Money movement",
    title: "Move balances across borders and ledgers",
    copy:
      "Payouts, treasury accounts, stablecoin rails, and bank partners connect through one operations surface.",
    accent: "from-lime-300 via-emerald-500 to-blue-500",
    stats: ["24/7 settlement", "Borderless ledgers"],
  },
  {
    icon: Blocks,
    eyebrow: "Platforms",
    title: "Embed payments into a complete operating system",
    copy:
      "Onboard sellers, split funds, manage risk, and monetize financial services from flexible components.",
    accent: "from-blue-400 via-indigo-500 to-slate-700",
    stats: ["KYC flows", "Revenue share"],
  },
];

export const commerceStats = [
  {
    value: "$1.2T",
    label: "annualized volume supported across sample businesses",
  },
  {
    value: "99.999%",
    label: "historical API availability target for the platform layer",
  },
  {
    value: "160+",
    label: "markets, payment methods, and banking partners connected",
  },
  {
    value: "500M+",
    label: "events normalized daily for finance and product teams",
  },
];

export const caseStudies = [
  {
    company: "Hearth Retail",
    title: "Unified online and in-store payments in 22 countries.",
    metricA: "44%",
    labelA: "faster reconciliation",
    metricB: "7K+",
    labelB: "locations connected",
    palette: "from-sky-300 via-cyan-200 to-lime-200",
  },
  {
    company: "Atlas Market",
    title: "Scaled marketplace onboarding without rebuilding risk tools.",
    metricA: "18 min",
    labelA: "median seller activation",
    metricB: "92%",
    labelB: "automated reviews",
    palette: "from-rose-300 via-orange-200 to-amber-200",
  },
  {
    company: "PulseAI",
    title: "Moved from seat pricing to precise usage-based billing.",
    metricA: "6 weeks",
    labelA: "to launch",
    metricB: "3.8x",
    labelB: "plan expansion",
    palette: "from-violet-300 via-indigo-200 to-sky-200",
  },
];

export const developerPoints = [
  {
    icon: Braces,
    title: "Composable APIs",
    copy: "Stable primitives for payments, identity, subscriptions, ledgering, reporting, and fraud signals.",
  },
  {
    icon: Binary,
    title: "Typed SDKs",
    copy: "Consistent interfaces, generated schemas, webhook replay, and test-mode fixtures for each workflow.",
  },
  {
    icon: RadioTower,
    title: "Operational visibility",
    copy: "Trace requests, inspect events, resolve disputes, and monitor latency without leaving the console.",
  },
];

export const integrationPaths = [
  {
    icon: TerminalSquare,
    title: "Build with APIs",
    copy: "Create custom checkout, platform, treasury, and billing flows.",
  },
  {
    icon: Layers3,
    title: "Use components",
    copy: "Drop embeddable onboarding, payment, and reporting surfaces into your product.",
  },
  {
    icon: BadgeCheck,
    title: "Operate no-code",
    copy: "Configure invoices, payment links, tax, and reporting from a dashboard.",
  },
];

export const newsItems = [
  {
    label: "Annual letter",
    title: "New economic patterns are emerging across internet businesses.",
    copy: "Fresh data from software, retail, marketplaces, and AI products shows faster global expansion.",
  },
  {
    label: "Product update",
    title: "Usage meters now sync with contracts, credits, and revenue reports.",
    copy: "Finance and product teams can iterate on pricing without stitching together parallel systems.",
  },
  {
    label: "Guide",
    title: "How platforms add embedded financial services responsibly.",
    copy: "A practical operating model for onboarding, compliance, risk review, and monetization.",
  },
];

export const footerColumns = [
  {
    heading: "Products",
    links: ["Payments", "Billing", "Connect", "Issuing", "Treasury", "Radar"],
  },
  {
    heading: "Solutions",
    links: ["Enterprises", "Startups", "Marketplaces", "SaaS", "Retail", "AI companies"],
  },
  {
    heading: "Developers",
    links: ["Documentation", "API reference", "SDKs", "Status", "Changelog", "Support"],
  },
  {
    heading: "Company",
    links: ["Customers", "Partners", "Newsroom", "Careers", "Contact", "Privacy"],
  },
];

export const trustSignals = [
  { icon: ShieldCheck, label: "Risk engine" },
  { icon: LockKeyhole, label: "Tokenized data" },
  { icon: Globe2, label: "Global routing" },
  { icon: ReceiptText, label: "Unified reporting" },
  { icon: Banknote, label: "Local settlement" },
  { icon: Building2, label: "Enterprise controls" },
  { icon: BarChart3, label: "Revenue analytics" },
  { icon: MessageCircle, label: "24/7 support" },
  { icon: Zap, label: "Fast launch" },
];
