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
npm run visual
env REFERENCE_URL=https://stripe.com/in npm run visual -- --grep "Stripe reference"
```

Playwright writes local light/dark and reference captures into `screenshots/`. The pre-dark-mode baseline is preserved under `diffs/baseline-before-dark-mode/`.
