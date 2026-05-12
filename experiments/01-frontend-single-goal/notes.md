# Notes

- Implemented a Next.js, TypeScript, and Tailwind CSS landing page in `app/`.
- Added a reusable design-system layer with section, card, button, icon, pill, and brand primitives.
- Added a complete dark-mode path with design tokens, no-flash boot script, persistent toggle, and themed product UI surfaces.
- Added real Products, Solutions, Developers, Resources, Pricing, Login, Signup, and Dashboard routes.
- Added client-side auth simulation with localStorage session state, form validation, protected dashboard routing, and logout behavior.
- Captured Playwright desktop and mobile screenshots for light and dark modes in `screenshots/`.
- Captured route and authenticated dashboard screenshots in `screenshots/`.
- Preserved pre-dark-mode screenshots in `diffs/baseline-before-dark-mode/`.
- Preserved pre-multipage screenshots in `diffs/baseline-before-multipage/`.
- Added route-level SEO metadata, app loading/error/not-found states, skip-link navigation, reduced-motion handling, stronger form validation, and deployment documentation.
- Reference captures target the live Stripe India homepage at `https://stripe.com/in`.
- Visual and implementation diffs should be stored in `diffs/` if later comparison tooling is added.
