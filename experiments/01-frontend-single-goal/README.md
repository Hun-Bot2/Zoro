# ZORO Frontend Reconstruction Experiment

This experiment isolates the first frontend reconstruction pass for ZORO.

The `app/` directory contains a production-oriented Stripe-inspired landing page built with Next.js, TypeScript, and Tailwind CSS.

The current implementation includes a tokenized component system, responsive light and dark themes, persisted theme switching, multi-page SaaS routes, simulated client-side authentication, and Playwright visual captures for the main product flows.

## Run

```bash
cd app
npm install
npm run dev
```

## Verify

```bash
cd app
npm run lint
npm run build
npm run typecheck
npm test
npm audit --omit=dev
env REFERENCE_URL=https://stripe.com/in npm run visual -- --grep "Stripe reference"
```

`npm run build` should run before `npm run typecheck` in a clean checkout so Next.js can generate `.next/types/`.

## Deploy

```bash
cd app
npm ci
npm run lint
npm run build
npm run typecheck
npm test
npm start
```

Set `NEXT_PUBLIC_SITE_URL` to the production origin before building so canonical and Open Graph URLs resolve to the deployed site. Playwright writes local light/dark, route, dashboard, and reference captures into `screenshots/`. Baselines are preserved under `diffs/`.
