# BACKLOG

Authoritative, ordered. One item per session. Status: `todo` / `doing` /
`review` / `done` / `blocked`. Sizes: S (1-3 h), M (3-6 h); L is not
allowed, split it. Architecture and decisions: `docs/PLAN.md`.

**Immediate queue:** B07 (the only remaining non-blocked item). Row order
below is the priority order. `blocked` items sit at the bottom and are
skipped by the loop until the owner unblocks them (see each one's criteria
for what's needed).

| ID | Title | Status | Priority | Size | Acceptance criteria |
|----|-------|--------|----------|------|---------------------|
| B01 | Replace placeholder favicon/app icons with a generated brand mark | done | P0 | S | `create-next-app`'s default Next.js/Vercel SVGs and favicon are gone; a simple, original (not stock) icon using the existing brand color tokens renders as the favicon and OG fallback; no false claims introduced. |
| B02 | Wire up analytics scripts behind existing env-var flags | done | P0 | S | `layout.tsx` conditionally renders a Plausible script tag when `analytics.plausibleDomain` is set, and `@vercel/analytics`'s `<Analytics />` when `analytics.vercelAnalytics` is true. Neither loads when unset (verify via build output / no network call with env unset). README's "Known gaps" line about this is removed. |
| B03 | Render footer social icons from `siteConfig.social` | done | P0 | S | `Footer.tsx` renders an icon link for each of `linkedin`/`instagram`/`youtube` only when that string is non-empty; renders nothing when all are empty (current state). README's "Known gaps" line about this is removed. |
| B04 | Unit tests for `/api/quote` validation logic | done | P0 | S | A test runner (Vitest, minimal config) covers: honeypot rejection, timing-guard rejection, each required-field-missing case, invalid email rejection, and the happy path producing `{ok:true}`. `npm test` (new script) passes in CI-less local run. |
| B05 | Playwright smoke tests for key pages | done | P0 | M | Using the pre-installed Playwright, a smoke suite loads `/`, one service page, one city page, `/government-enterprise`, and `/quote`, checks for a 200/expected heading, and exercises the quote form's client-side validation (submit empty → sees inline errors). Runs against `next build && next start` or `next dev`. |
| B06 | Per-page dynamic OG images for services and cities | done | P1 | M | `src/app/services/[slug]/opengraph-image.tsx` and `src/app/service-area/[slug]/opengraph-image.tsx` generate a 1200x630 image per service/city (title + category/region), reusing the root image's visual style. Verified by hitting each route and checking image dimensions/content-type. |
| B07 | Accessibility pass (WCAG AA) | todo | P1 | M | Manual + automated (axe via Playwright) check across the 5 template types (home, service detail, city detail, long-form page, form page): color contrast, focus visibility, heading order, form label/ARIA association, skip link. Fixes applied; no new regressions in B05's smoke suite. |
| B08 | Draft capability-statement PDF template | done | P1 | S | A `docs/capability-statement-template.md` (or generated PDF) with bracketed placeholder fields (UEI, CAGE, NAICS, differentiators, past performance) matching the on-page summary in `/government-enterprise`, ready for the owner to fill in once SAM.gov registration is underway. Not linked from the live site yet (that still requires `flags.capabilityStatementAvailable`). |
| B09 | Deployment prep doc (Vercel — confirmed hosting target) | done | P2 | S | `docs/DEPLOYMENT.md` listing exact steps to deploy to Vercel (env vars to set, domain setup, any `vercel.json` needed) — informational prep only, doesn't deploy anything. |
| B10 | Durable rate limiting for `/api/quote` | blocked | P2 | S | Needs an Upstash Redis (or equivalent) account/credentials from the owner before this can be implemented — current in-memory limiter stays as the stopgap. |
| B11 | Bind a real Resend sending domain | blocked | P1 | S | Needs the owner to create/verify a sending domain in Resend and provide `RESEND_API_KEY` — code path already exists and branches on this being set. |
| B12 | Deploy to Vercel | done | P1 | S | Live at `https://mt-drone-co.vercel.app` (project `tedtops-projects/mt-drone-co`), SSO deployment protection disabled so it's publicly reachable. A plain `vercel` deploy runs after each milestone per owner's standing instruction; promoting a given deploy to the stable production alias via `vercel --prod` is blocked by a Claude Code permission classifier in this environment — remains a manual owner step, or B12a below if they want it automated. |
| B12a | Allow automatic production promotion | blocked | P2 | S | Needs the owner to loosen the Bash permission rule blocking `vercel --prod` in this environment (Settings → permissions), if they want production promotion to happen automatically after each deploy instead of manually. |
| B13 | Attorney review of Montana trespass-statute copy and privacy policy | blocked | P0 | S | Needs the owner to engage counsel; both pages are already hedged/templated pending this per `docs/PLAN.md` risk notes. |
| B14 | Fill in real company identity in `siteConfig.ts` | blocked | P0 | S | Needs the owner's decision on final company name, domain, base address, and contact info. |
| B15 | Flip honesty flags as real-world milestones land | blocked | — | — | Business operations, not code: pilot hired, LLC formed, insurance bound, aircraft acquired, SAM.gov registered, capability statement finalized. See `README.md` prerequisites checklist. |
