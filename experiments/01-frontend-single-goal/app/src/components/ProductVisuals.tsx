import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  CreditCard,
  Gauge,
  LineChart,
  LockKeyhole,
  Play,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from "lucide-react";

import { cn } from "./design-system";

const monthBars = [58, 76, 63, 84, 70, 95, 82, 101, 74, 93, 86, 111];
const railDots = ["#00d4ff", "#00e095", "#ffb84d", "#ff5b7f", "#7c5cff"];

export function HeroCommerceVisual() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative mx-auto h-[320px] w-full max-w-[620px] sm:h-[380px] lg:h-[560px]"
    >
      <div className="hero-ribbon hero-ribbon-a" />
      <div className="hero-ribbon hero-ribbon-b" />
      <div className="hero-ribbon hero-ribbon-c" />

      <div className="absolute left-[3%] top-12 hidden w-[210px] rotate-[-8deg] rounded-[28px] bg-ink p-3 shadow-stripe dark:bg-slate-950 sm:block lg:left-0 lg:top-24">
        <div className="rounded-[22px] bg-[#061a2f] p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-300 to-emerald-300" />
            <CreditCard className="h-5 w-5 text-cyan-200" />
          </div>
          <p className="mt-16 text-xs text-slate-300">Unified balance</p>
          <p className="mt-1 text-2xl font-semibold">$42,518.80</p>
          <div className="mt-5 flex items-end gap-1.5">
            {[34, 49, 42, 62, 54, 70, 58].map((height) => (
              <span
                key={height}
                className="w-4 rounded-t-full bg-gradient-to-t from-cyan-500 to-emerald-300"
                style={{ height }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute right-[3%] top-1 w-[285px] rounded-[30px] bg-surface p-3 shadow-stripe sm:w-[350px] lg:right-0 lg:top-4 lg:w-[430px]">
        <div className="rounded-[22px] border border-line bg-surface-muted p-4 sm:p-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold text-violet">Global revenue</p>
              <p className="mt-1 text-2xl font-semibold text-title sm:text-3xl">$12.84M</p>
            </div>
            <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              +18.2%
            </div>
          </div>
          <div className="mt-6 grid grid-cols-12 items-end gap-1.5">
            {monthBars.map((height, index) => (
              <span
                key={`${height}-${index}`}
                className={cn(
                  "rounded-t-md",
                  index % 3 === 0
                    ? "bg-violet"
                    : index % 3 === 1
                      ? "bg-cyan-400"
                      : "bg-emerald-400",
                )}
                style={{ height }}
              />
            ))}
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {["Payments", "Billing", "Payouts"].map((label, index) => (
              <div key={label} className="rounded-2xl bg-surface p-3 shadow-[0_8px_24px_rgba(15,23,42,0.07)] dark:shadow-none">
                <div
                  className="mb-2 h-2.5 rounded-full"
                  style={{ backgroundColor: railDots[index] }}
                />
                <p className="text-[11px] font-semibold text-muted">{label}</p>
                <p className="mt-1 text-sm font-semibold text-title">
                  {["$7.4M", "$3.1M", "$2.3M"][index]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-[2%] w-[290px] rounded-[26px] bg-surface p-4 shadow-stripe sm:bottom-8 sm:left-[16%] sm:w-[360px] lg:bottom-14 lg:left-[12%]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-200">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-title">Risk review queue</p>
              <p className="text-xs text-muted">All regions active</p>
            </div>
          </div>
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
            Clear
          </span>
        </div>
        <div className="mt-4 space-y-2">
          {["High-value checkout", "New seller onboarding", "Instant payout request"].map(
            (item, index) => (
              <div key={item} className="flex items-center justify-between rounded-2xl bg-surface-muted px-3 py-2">
                <span className="text-xs font-medium text-body">{item}</span>
                <span className="text-xs font-semibold text-title">{[97, 88, 94][index]}%</span>
              </div>
            ),
          )}
        </div>
      </div>

      <div className="absolute bottom-2 right-[2%] hidden w-[165px] rotate-[8deg] rounded-[26px] bg-surface p-3 shadow-stripe sm:block lg:bottom-0 lg:right-[12%]">
        <div className="rounded-[20px] bg-gradient-to-br from-amber-100 via-white to-cyan-100 p-3">
          <div className="flex items-center justify-between text-ink">
            <LockKeyhole className="h-5 w-5" />
            <span className="rounded-full bg-white px-2 py-1 text-[10px] font-semibold shadow-sm">
              Live
            </span>
          </div>
          <p className="mt-14 text-xs text-slate-500">Checkout</p>
          <p className="mt-1 text-xl font-semibold text-ink">$148.00</p>
          <span className="mt-4 flex h-9 w-full items-center justify-center rounded-full bg-ink text-xs font-semibold text-white">
            Pay now
          </span>
        </div>
      </div>
    </div>
  );
}

export function PaymentsMiniVisual() {
  return (
    <div className="mt-8 rounded-[24px] bg-slate-950 p-4 text-white">
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <span className="text-xs text-slate-400">/v1/payment_intents</span>
      </div>
      <div className="mt-5 space-y-2 font-mono text-xs leading-6 text-slate-300">
        <p>
          <span className="text-cyan-300">payment_method</span>: card
        </p>
        <p>
          <span className="text-emerald-300">capture_method</span>: automatic
        </p>
        <p>
          <span className="text-amber-300">risk_score</span>: 0.03
        </p>
      </div>
      <div className="mt-5 rounded-2xl bg-white/10 p-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-300">Authorization</span>
          <span className="rounded-full bg-emerald-400/20 px-2.5 py-1 text-xs font-semibold text-emerald-200">
            approved
          </span>
        </div>
      </div>
    </div>
  );
}

export function BillingMiniVisual() {
  return (
    <div className="mt-8 rounded-[24px] bg-surface p-4 shadow-[0_16px_45px_rgba(15,23,42,0.1)] dark:shadow-none">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold text-violet">Pro Plan</p>
          <p className="text-2xl font-semibold text-title">$0.95</p>
        </div>
        <ChevronDown className="h-5 w-5 text-muted" />
      </div>
      <div className="mt-5 rounded-2xl bg-skyglass p-3 dark:bg-cyan-400/10">
        <div className="flex items-center justify-between text-xs font-semibold text-title">
          <span>Tokens used</span>
          <span>74%</span>
        </div>
        <div className="mt-3 h-2 rounded-full bg-white dark:bg-slate-700">
          <div className="h-2 w-[74%] rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500" />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {["Credits", "Seats", "Overage"].map((item) => (
          <span key={item} className="rounded-xl bg-surface-muted px-2 py-2 text-center text-xs font-medium text-body">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function PlatformMiniVisual() {
  return (
    <div className="mt-8 rounded-[24px] bg-surface p-4 shadow-[0_16px_45px_rgba(15,23,42,0.1)] dark:shadow-none">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet/10 text-violet">
          <WalletCards className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-semibold text-title">Connected accounts</p>
          <p className="text-xs text-muted">Risk, payout, and tax status</p>
        </div>
      </div>
      <div className="mt-5 space-y-2">
        {["Studio North", "Vector Supply", "Lumen Market"].map((account, index) => (
          <div key={account} className="flex items-center justify-between rounded-2xl bg-surface-muted px-3 py-3">
            <div className="flex items-center gap-3">
              <span
                className="h-8 w-8 rounded-full"
                style={{ backgroundColor: railDots[index + 1] }}
              />
              <span className="text-xs font-semibold text-body">{account}</span>
            </div>
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function AgenticMiniVisual() {
  return (
    <div className="mt-8 overflow-hidden rounded-[24px] bg-gradient-to-br from-rose-50 via-white to-amber-50 p-4 shadow-[0_16px_45px_rgba(15,23,42,0.1)] dark:from-rose-950/40 dark:via-surface dark:to-amber-950/40 dark:shadow-none">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700">
          Agent checkout
        </span>
        <Sparkles className="h-5 w-5 text-amber-500" />
      </div>
      <div className="mt-5 rounded-2xl bg-surface p-3 shadow-sm dark:shadow-none">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-title">Travel bundle</p>
          <p className="text-sm font-semibold text-title">$428</p>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {["flight", "hotel", "pass"].map((item, index) => (
            <span
              key={item}
              className={cn(
                "rounded-xl px-2 py-2 text-center text-[11px] font-semibold",
                index === 0 && "bg-cyan-50 text-cyan-700",
                index === 1 && "bg-amber-50 text-amber-700",
                index === 2 && "bg-violet/10 text-violet",
              )}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between rounded-2xl bg-ink px-3 py-3 text-white">
        <span className="text-xs font-semibold">Intent verified</span>
        <CheckCircle2 className="h-4 w-4 text-emerald-300" />
      </div>
    </div>
  );
}

export function IssuingMiniVisual() {
  return (
    <div className="mt-8 rounded-[24px] bg-slate-950 p-4 text-white shadow-[0_16px_45px_rgba(15,23,42,0.1)] dark:shadow-none">
      <div className="rounded-[20px] bg-gradient-to-br from-fuchsia-400 via-violet-500 to-indigo-500 p-4">
        <div className="flex items-center justify-between">
          <WalletCards className="h-6 w-6" />
          <span className="text-xs font-semibold">Zoro Card</span>
        </div>
        <p className="mt-10 text-xs text-white/70">Monthly controls</p>
        <p className="mt-1 text-2xl font-semibold">$18,400</p>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {["Travel cap", "Vendor lock"].map((item) => (
          <span key={item} className="rounded-xl bg-white/10 px-2 py-2 text-center text-xs font-semibold text-slate-200">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function MoneyMovementMiniVisual() {
  return (
    <div className="mt-8 rounded-[24px] bg-surface p-4 shadow-[0_16px_45px_rgba(15,23,42,0.1)] dark:shadow-none">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-title">Borderless ledger</p>
        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
          live
        </span>
      </div>
      <div className="mt-5 space-y-3">
        {[
          ["USD", "EUR", "$80K"],
          ["GBP", "INR", "$44K"],
          ["CAD", "MXN", "$31K"],
        ].map(([from, to, amount], index) => (
          <div key={`${from}-${to}`} className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 rounded-2xl bg-surface-muted px-3 py-3">
            <span className="text-xs font-semibold text-title">{from}</span>
            <ArrowUpRight
              className={cn(
                "h-4 w-4",
                index === 0 && "text-cyan-500",
                index === 1 && "text-emerald-500",
                index === 2 && "text-amber-500",
              )}
            />
            <span className="text-right text-xs font-semibold text-title">{to}</span>
            <span className="col-span-3 text-xs text-muted">{amount} settled today</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DeveloperConsoleVisual() {
  return (
    <div className="relative mt-12 overflow-hidden rounded-[32px] bg-[#07182c] p-4 shadow-stripe lg:mt-0">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
      <div className="rounded-[24px] border border-white/10 bg-[#0b2139]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-400" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
            Test mode
          </span>
        </div>
        <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
          <div className="border-b border-white/10 p-5 lg:border-b-0 lg:border-r">
            <p className="mb-4 text-xs font-semibold text-sky-200">Request</p>
            <pre className="overflow-x-auto text-[12px] leading-6 text-slate-300">
              <code>{`const intent = await zoro.payments.create({
  amount: 4800,
  currency: "usd",
  customer: customer.id,
  automatic_payment_methods: true,
  metadata: { plan: "global-pro" }
});`}</code>
            </pre>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                ["500M+", "events/day"],
                ["10K+", "req/sec"],
                ["42 ms", "p95 route"],
              ].map(([value, label]) => (
                <div key={value} className="rounded-2xl bg-white/5 p-3">
                  <p className="text-lg font-semibold text-white">{value}</p>
                  <p className="mt-1 text-[11px] text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-sky-200">Event stream</p>
              <Play className="h-4 w-4 text-emerald-300" />
            </div>
            <div className="mt-5 space-y-3">
              {[
                ["payment_intent.succeeded", "200", "18 ms"],
                ["invoice.finalized", "200", "22 ms"],
                ["payout.created", "200", "31 ms"],
                ["risk.review.closed", "200", "27 ms"],
              ].map(([event, status, latency]) => (
                <div key={event} className="rounded-2xl bg-white/5 p-3">
                  <div className="flex items-center justify-between gap-3">
                    <p className="truncate text-xs font-semibold text-white">{event}</p>
                    <span className="text-xs text-emerald-300">{status}</span>
                  </div>
                  <p className="mt-2 text-[11px] text-slate-400">{latency} latency</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MetricsOrbit() {
  return (
    <div aria-hidden="true" className="relative h-[360px] overflow-hidden rounded-[34px] bg-white/5">
      <div className="absolute inset-6 rounded-full border border-cyan-300/20" />
      <div className="absolute inset-16 rounded-full border border-emerald-300/15" />
      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-300 to-emerald-300 shadow-[0_0_80px_rgba(34,211,238,0.35)]" />
      {[
        ["top-10 left-12", "USD"],
        ["top-16 right-10", "INR"],
        ["bottom-16 left-10", "EUR"],
        ["bottom-10 right-14", "JPY"],
        ["left-1/2 top-5 -translate-x-1/2", "MXN"],
      ].map(([position, label], index) => (
        <div
          key={label}
          className={cn(
            "absolute flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-sm font-semibold text-white shadow-panel backdrop-blur",
            position,
          )}
        >
          {label}
          <span
            className="absolute -right-1 -top-1 h-3 w-3 rounded-full"
            style={{ backgroundColor: railDots[index] }}
          />
        </div>
      ))}
      <div className="absolute inset-x-8 bottom-8 rounded-2xl bg-white/10 p-4 backdrop-blur">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-300">Network health</p>
            <p className="mt-1 text-2xl font-semibold text-white">99.999%</p>
          </div>
          <Gauge className="h-8 w-8 text-cyan-200" />
        </div>
      </div>
    </div>
  );
}

export function NewsVisual() {
  return (
    <div className="relative h-44 overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0a2540] via-[#2563eb] to-[#00d4ff] p-4">
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/20" />
      <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/90 p-3 shadow-panel dark:bg-slate-950/85">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-muted">Internet economy</p>
            <p className="mt-1 text-lg font-semibold text-title">$1.2T</p>
          </div>
          <ArrowUpRight className="h-5 w-5 text-violet" />
        </div>
        <div className="mt-3 flex items-end gap-1">
          {[22, 30, 24, 38, 43, 48, 56].map((height) => (
            <span key={height} className="w-full rounded-t bg-violet/80" style={{ height }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function StartupVisual() {
  return (
    <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-white via-sky-50 to-emerald-50 p-5 shadow-panel dark:from-surface dark:via-surface-muted dark:to-emerald-950/35">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-violet/10 px-3 py-1 text-xs font-semibold text-violet">
          Startup suite
        </span>
        <CircleDollarSign className="h-6 w-6 text-emerald-500" />
      </div>
      <div className="mt-16">
        <p className="text-4xl font-semibold text-title">$0 to $10M</p>
        <p className="mt-2 text-sm leading-6 text-body">
          Incorporation, revenue collection, tax setup, and reporting grow together.
        </p>
      </div>
      <div className="mt-6 flex items-center gap-2">
        {["Atlas", "Billing", "Tax", "Radar"].map((item) => (
          <span key={item} className="rounded-full bg-surface px-3 py-1 text-xs font-semibold text-body shadow-sm dark:shadow-none">
            {item}
          </span>
        ))}
      </div>
      <Sparkles className="absolute right-6 top-20 h-10 w-10 text-amber-400" />
      <LineChart className="absolute right-16 top-28 h-16 w-16 text-cyan-400" />
    </div>
  );
}
