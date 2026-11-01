# PLAN

Montana commercial drone services marketing/lead-gen site. Origin: 2026-11-01.
This plan was written retrospectively — the MVP (research + full site) was
already built in the session that bootstrapped this backlog loop; this
document captures what exists, the decisions behind it, and the backlog of
remaining work.

## What exists (as of 2026-11-01)

- Next.js 16 (App Router) + TypeScript + Tailwind v4, static-first, 36
  prerendered routes, deployable to Vercel.
- `/research/competitors.md` — competitor research and gap analysis for 5
  Montana-relevant drone companies plus adjacent context companies.
- Home, 12 service pages (dynamic `[slug]`), 7 city service-area pages
  (dynamic `[slug]`), Government & Enterprise, Safety & Compliance, About,
  Contact, FAQ, Privacy.
- Quote request form + `/api/quote` route handler (validation, honeypot +
  timing spam guard, best-effort in-memory rate limiting, optional Resend
  email delivery with a console-log fallback).
- JSON-LD (Organization in the layout, Service schema per service page),
  `sitemap.ts`, `robots.ts`, root `opengraph-image.tsx`.
- The honesty system: `src/lib/siteConfig.ts` exports a `flags` object
  (booleans for pilot, aircraft, insurance, SAM.gov, LLC, etc), all `false`
  by default. Every trust claim across the site reads from these flags
  instead of being hardcoded — verified in rendered output.
- `README.md` — full placeholder list, env vars, known gaps, and the
  real-world prerequisite checklist (hire pilot, form LLC, insurance, FAA
  aircraft registration, SAM.gov/UEI, NAICS confirmation, NDAA-compliant
  fleet plan, capability statement, Montana trespass-statute legal review).

## Architecture

- No database, no auth, no CMS — content lives in `src/lib/services-data.ts`
  and `src/lib/cities-data.ts` as typed arrays; pages are generated from them
  via `generateStaticParams`. Adding a service or city is a data-file edit,
  not a new page.
- `src/lib/siteConfig.ts` is the single source of truth for company
  identity, contact info, and every honesty flag. Nothing else should
  hardcode a trust claim.
- `src/components/ui/*` are generic primitives; `src/components/*` are
  site-specific compositions. Keep that boundary — don't put business copy
  in `ui/`.
- Quote form: client component (`src/components/QuoteForm.tsx`) posts JSON
  to `src/app/api/quote/route.ts`. No external form service (Formspree etc)
  — kept in-house so the honesty/spam-guard logic is auditable.

## Decisions log

1. Disabled Next 16's experimental `cacheComponents`/`partialPrefetching` —
   this is a static-first marketing site and the dynamic-IO tracker was
   flagging ordinary build-time values (e.g. a copyright year) as
   "unstable." Not needed here.
2. Dynamic `[slug]` routes with `generateStaticParams` for both services and
   cities, rather than 12 + 7 hand-written page files — less duplication,
   same static output.
3. Email delivery via a raw `fetch` to Resend's REST API rather than an SDK
   dependency — one less package, and the branch is trivial
   (`quoteForm.resendApiKeyConfigured`).
4. Rate limiting on `/api/quote` is an in-memory `Map`, explicitly
   documented as best-effort (resets on redeploy, not shared across
   serverless instances). Upgrading this requires an external store
   (Upstash Redis or similar) — deferred until there's real traffic or spam,
   tracked as a backlog item.
5. No stock photography or scraped competitor imagery anywhere — every
   image slot is a labeled `PlaceholderImage` component instead.
6. Montana's 2025 drone-trespass statute is deliberately NOT cited with any
   specific section or interpretation on the site. `legalNotes.
   montanaTrespassCarveoutVerified` stays `false` until a human verifies the
   current statute text with counsel.
7. 2026-11-01 — Bootstrapped the backlog-loop structure (this file,
   `BACKLOG.md`, `STATE.md`, `CLAUDE.md`, `.claude/commands/next.md`) around
   the already-built MVP rather than re-running the greenfield interview,
   since scope was already established by the original brief.
8. 2026-11-01 — Owner (Ted) asked for autonomous continuous operation: no
   per-item AskUserQuestion review gate. `CLAUDE.md`'s build loop is
   customized accordingly — see that file's "Autonomous mode" note. Owner
   will check in periodically for a status/backlog review instead.
9. 2026-11-01 — Owner confirmed Vercel as the hosting target and asked for
   a `vercel` deploy after each milestone so they can review live. New
   Vercel projects default to SSO deployment protection on every
   environment (including production) — disabled via
   `vercel project protection disable mt-drone-co --sso` so the site is
   publicly reachable without a Vercel login. Separately, this Claude Code
   environment's own permission settings block `vercel --prod` (a
   "Production Deploy" classifier) — plain `vercel` deploys (preview, or
   production on the very first deploy of a project) remain available and
   are what the loop uses; promoting a later deploy to the stable
   production alias is a manual owner step (B12a in `BACKLOG.md` if they
   want that automated instead).
10. 2026-11-01 — B07 accessibility pass: added an `accent-700` color token
    (darker amber) because the original `accent-500` failed WCAG AA
    contrast (3.18:1, need 4.5:1) as both button text-on-background and as
    small text on light backgrounds. Buttons/CTAs now use accent-600 (base)
    / accent-700 (hover); text-only accent usage on light backgrounds uses
    accent-600. Also fixed several `/NN` opacity-based text colors
    (PlaceholderImage captions) and two slate shades used against the wrong
    background (slate-400 on white, slate-500 on dark) — opacity-blended
    and shade-by-feel text colors are risky for contrast and worth
    avoiding in future additions; prefer a solid shade picked against the
    actual background it sits on.

## Risks

- **Legal/compliance copy** (Montana trespass statute, privacy policy) is
  explicitly placeholder/hedged pending attorney review — must not be
  tightened or made more specific by an automated pass without that review.
- **Email deliverability**: Resend sending domain is a placeholder
  (`quotes@yourdomain.com`); setting `RESEND_API_KEY` without first
  verifying a real domain in Resend will silently fail (falls back to
  logging, doesn't crash, but also doesn't deliver — easy to miss).
- **No real imagery/branding yet** — the site currently uses generic
  placeholder icons/favicon inherited from `create-next-app`'s default
  scaffold, which look unfinished for a credibility-focused site; a cheap
  near-term fix is a simple generated brand mark (not real photography).

## Open questions (need the owner — not blockers for other backlog items)

- Final company name, domain, and base city/address.
- Whether to pursue a Resend account + verified sending domain now, or wait
  until closer to launch.
- Real capability statement content (UEI/CAGE, final NAICS codes, actual
  differentiators) once SAM.gov registration is underway.
- Vercel account/project to deploy to, and whether a staging URL is wanted
  before a real domain is pointed at it.
- Attorney review timing for the Montana trespass-statute language and the
  privacy policy template.
