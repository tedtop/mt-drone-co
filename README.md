# Montana Drone Works — Montana Drone Services Website

A Next.js (App Router) + TypeScript + Tailwind marketing/lead-gen site for a
new Montana commercial drone services company. Static-first, built for
Vercel. Every trust/credential claim on the site is driven by a single
config file (`src/lib/siteConfig.ts`) so nothing can falsely claim pilots,
aircraft, insurance, or registrations the business doesn't actually have yet.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. `npm run build` produces the production build;
`npm run lint` runs ESLint; `npm test` runs the Vitest unit test suite.

## How the honesty system works

`src/lib/siteConfig.ts` exports a `flags` object — booleans like
`hasPart107Pilot`, `hasAircraft`, `insuranceLiability`, `samRegistered`,
`capabilityStatementAvailable` — all defaulted to `false` because none of
them are true yet for a brand-new company. Pages import these flags and
render an honest "in progress" / "pending" message when a flag is `false`,
or the real claim when it's `true` (see `src/components/CredibilityStrip.tsx`
and `src/components/ui/Badge.tsx`'s `CredentialBadge` for the pattern used
everywhere). **Flip a flag only once the underlying fact is real** — e.g.
set `hasPart107Pilot: true` only after a Part 107 pilot is actually under
contract. Flipping it early puts a false claim on a public website.

## Placeholders to replace before launch

Everything below is a placeholder. Search the codebase for these exact
strings to find every occurrence.

### `src/lib/siteConfig.ts`
- `companyName`, `companyShortName`, `companyLegalName` — set to
  "Montana Drone Works" / "Montana Drone Works, LLC". This is the single
  source of truth; the rest of the site reads from here.
- `siteUrl` — defaults to the live Vercel production URL
  (`https://mt-drone-co.vercel.app`). Set a custom domain via the
  `NEXT_PUBLIC_SITE_URL` env var once one is purchased.
- `contact.phone` / `contact.phoneHref` — real, owner-provided number
  `(407) 756-4905`.
- `contact.email`, `contact.proceurementEmail` — **still placeholder**
  `@example-drone-co.com` addresses — no real inbox exists yet. Replace with
  a real, checked address before launch.
- `contact.addressLine1`, `contact.addressZip` — left blank on purpose (no
  street address has been provided/confirmed for public display); the
  contact page shows a "based in / serving statewide" line instead.
  `contact.addressCity` defaults to `"Missoula"` — change to wherever the
  company actually bases out of, and fill in a street address once the
  owner wants one published.
- `social.linkedin` / `instagram` / `youtube` — empty strings. Fill in once
  real accounts exist; the footer only renders an icon for non-empty values
  (icons aren't wired up yet — see "Known gaps" below).
- `flags.*` — see "How the honesty system works" above. Flip each only when
  true. `flags.yearsInOperation` is `0`; nothing currently reads it to render
  a "years in business" badge, but keep it accurate if you wire that up.
- `certificationsList` — empty array. Only add a socio-economic/set-aside
  certification (8(a), WOSB, VOSB, etc) once it's real, and flip
  `flags.hasSmallBusinessCert` to `true` at the same time.
- `naicsCodes` — a starting list (541370 primary, plus 541990/541922/541512)
  for your accountant/registration specialist to confirm before filing in
  SAM.gov.
- `legalNotes.montanaTrespassCarveoutVerified` — **stays `false` until a
  human verifies the current text of Montana's 2025 commercial-drone
  trespass statute with legal counsel.** The Safety & Compliance page
  deliberately only shows hedged, non-specific language while this is
  `false` — do not flip it or add a specific statute citation without that
  verification.

### Stock photography
Hero backgrounds, service/city card thumbnails, and the Fleet &amp; Equipment
page use free stock photography (sourced from Pexels — free for commercial
use, no attribution required) stored locally in `public/images/` and
referenced from `src/lib/images.ts`. This is generic, atmospheric/subject-
matter imagery (drones in flight, Montana landscapes, power lines, solar
panels, etc) — **never** presented as photos of this company's own completed
projects, aircraft, or staff. No scraped competitor images or copyrighted
brand/product photography (e.g. official DJI marketing photos) were used;
the "Fleet & Equipment" page names real equipment classes in text but
illustrates them with generic stock photos, not official manufacturer
images. Swap any of these for real photography/drone imagery whenever you
have it — update the paths in `src/lib/images.ts`.

### Sample-deliverable illustrations
The "sample deliverable" slots on the home page and each service page
(orthomosaic, thermal report, inspection report) are a different case —
these claim to represent **this company's own work product**, so they use
generated, clearly-labeled `<IllustrativeDeliverable>` graphics ("Illustrative
example — not an actual client deliverable") rather than stock photos or an
empty dashed box. Replace each `<IllustrativeDeliverable variant="..." />`
with a real `next/image` once you have an actual sample deliverable to show,
and flip `flags.hasSampleDeliverables` to `true` at the same time.

### Capability statement PDF
`src/app/government-enterprise/page.tsx` links to `/capability-statement.pdf`
**only if** `flags.capabilityStatementAvailable` is `true`. That file does
not exist yet — once you have a real capability statement, drop the PDF in
`public/capability-statement.pdf` and flip the flag.

### Favicon / app icons
`src/app/icon.tsx` and `src/app/apple-icon.tsx` generate a simple navy/amber
"MT" monogram brand mark (no stock imagery) so the site doesn't ship with
`create-next-app`'s default Next.js/Vercel logos. Replace with a real
designed icon once brand assets exist.

## Environment variables

| Variable | Purpose | Default if unset |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL, used in metadata, JSON-LD, sitemap, robots | `https://mt-drone-co.vercel.app` (live Vercel URL) |
| `RESEND_API_KEY` | Enables email delivery for the quote form via [Resend](https://resend.com)'s REST API | Unset — submissions are only logged server-side (visible in your hosting provider's function logs), and the user still sees a success message either way |
| `QUOTE_FORM_TO_EMAIL` | Destination inbox for quote form submissions, once `RESEND_API_KEY` is set | Falls back to `contact.email` in siteConfig.ts |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Enables Plausible analytics if you wire up the script (see "Known gaps") | Unset — no analytics loads |
| `NEXT_PUBLIC_ENABLE_VERCEL_ANALYTICS` | Set to `"true"` to enable Vercel Analytics if you add the `@vercel/analytics` package (see "Known gaps") | Unset — disabled |

Before setting `RESEND_API_KEY`, verify a real sending domain in Resend —
`src/app/api/quote/route.ts` currently sends `from: "Montana Drone Works Website <quotes@yourdomain.com>"`,
where `yourdomain.com` is still a placeholder and will fail to deliver until
you replace it with your verified Resend sending domain (a Vercel `.vercel.app`
subdomain cannot be verified in Resend — this needs a real custom domain).

## Known gaps / things to finish before launch

- **Quote-form rate limiting is best-effort only.** `src/app/api/quote/route.ts`
  rate-limits by IP using an in-memory `Map` (max 5 submissions / 10 minutes
  / IP). This resets on every redeploy and isn't shared across serverless
  instances, so it won't stop a determined or distributed spammer. If this
  form gets real traffic, move to a durable store (e.g. Upstash Redis) or a
  managed form-spam service.
- **Analytics are wired up but off by default.** `src/app/layout.tsx` loads
  a Plausible `<script>` when `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` is set, and
  `@vercel/analytics`'s `<Analytics />` when `NEXT_PUBLIC_ENABLE_VERCEL_ANALYTICS="true"`.
  Neither loads with those env vars unset (the current state).
- **Footer social icons render automatically** once you fill in any of
  `social.linkedin` / `instagram` / `youtube` in `siteConfig.ts` — currently
  empty, so no icons show.
- **Privacy policy is a template**, flagged as such on the page itself —
  have an attorney review before launch, especially once analytics/email
  vendors are finalized.
- **Montana drone-trespass statute language is intentionally generic** —
  see `legalNotes.montanaTrespassCarveoutVerified` above.

## Real-world prerequisites before this business can actually operate

These are outside the codebase, but the site's flags and copy are built to
light up automatically as each one becomes real:

1. **Hire or contract a Part 107 certified remote pilot** → flip
   `flags.hasPart107Pilot`.
2. **Form the LLC** (and pick/finalize the legal name) → update
   `companyLegalName` and flip `flags.llcFormed`.
3. **Bind insurance** — general/commercial liability at minimum, plus hull
   (aircraft physical damage) and non-owned aircraft liability if renting
   before owning → flip `flags.insuranceLiability` / `insuranceHull` /
   `insuranceNonOwned` individually as each is actually bound.
4. **Acquire and FAA-register aircraft** → flip `flags.hasAircraft`. If any
   aircraft is Blue UAS / NDAA-compliant (needed for a lot of federal work),
   also flip `flags.ndaaCompliantFleet` once your fleet actually qualifies —
   don't flip it for aircraft that don't.
5. **Register in SAM.gov and get a UEI** (required for most federal
   contracts) → flip `flags.samRegistered`, and fill in the UEI/CAGE code
   placeholders on the Government & Enterprise page.
6. **Confirm final NAICS codes** with an accountant or registration
   specialist (starting list is in `naicsCodes` in siteConfig.ts; 541370 is
   the most relevant primary code for drone survey/mapping work).
7. **Decide the NDAA-compliant aircraft procurement plan** in more detail if
   pursuing federal work that requires Blue UAS-listed hardware specifically.
8. **Write a real capability statement** and drop the PDF at
   `public/capability-statement.pdf` → flip `flags.capabilityStatementAvailable`.
9. **Verify the current text of Montana's 2025 commercial-drone trespass
   statute** with legal counsel before publishing any specific claim about
   how it applies to this business → see
   `legalNotes.montanaTrespassCarveoutVerified` above.

## Project structure

- `src/lib/siteConfig.ts` — company identity, contact info, and all honesty
  flags. Start here.
- `src/lib/services-data.ts` — the 12 service lines (title, copy,
  capabilities, deliverables, process, legal/positioning notes). Powers
  `/services` and `/services/[slug]`.
- `src/lib/cities-data.ts` — the 7 Montana service-area cities. Powers
  `/service-area` and `/service-area/[slug]`.
- `src/components/ui/` — shared design-system primitives (`Container`,
  `Section`/`SectionHeading`, `Button`, `Badge`/`CredentialBadge`,
  `PlaceholderImage`, `Checklist`).
- `src/components/` — site-specific composed components (`Header`,
  `Footer`, `CredibilityStrip`, `ServiceCard`, `QuoteForm`).
- `src/app/api/quote/route.ts` — quote-form submission handler (validation,
  spam guard, optional Resend email, logging fallback).
- `src/app/sitemap.ts` / `src/app/robots.ts` / `src/app/opengraph-image.tsx` —
  SEO infrastructure, generated from the same `services`/`cities`/`siteConfig`
  data rather than hardcoded lists.

## Research

See `/research/competitors.md` for the competitor research and gap analysis
this site's structure and positioning were built from (no competitor text,
images, or branding were copied — structure and positioning insights only).
