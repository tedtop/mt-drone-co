# STATE

- **Phase:** 3 (autonomous build loop), in progress.
- **Current task:** none — B17 (final placeholder sweep) is done, not yet
  promoted to production (see Deployment). Every remaining backlog item
  needs the owner.
- **Last commit:** pending (B17's changes are about to be committed).
  Full verification: `npm run build` (57 routes, clean), `npx eslint .`
  (clean), `npx tsc --noEmit` (clean), `npm test` (20/20 Vitest),
  `npx playwright test` (11/11: 5 smoke + 6 a11y scans, zero violations),
  plus a manual visual review of home and `/contact` via screenshots on a
  local production server.
- **Deployment:** live and public on Vercel. Production alias:
  https://mt-drone-co.vercel.app (project `tedtops-projects/mt-drone-co`).
  B12a resolved last session — `.claude/settings.local.json` (gitignored,
  personal) allowlists `vercel --prod`/`vercel promote`, so production
  promotion no longer needs a manual owner step. **Will promote B17's
  changes right after this commit.**
- **B17 summary — what changed and what's still owner-blocked:**
  - Filled in: real phone `(407) 756-4905`; `siteUrl` now points at the
    live `mt-drone-co.vercel.app` URL instead of a fake `.com`; removed
    the literal `[STREET ADDRESS]`/`[ZIP]` text on `/contact` (now an
    honest "based in Missoula, MT — serving statewide" line); replaced
    the 4 dashed "IMAGE PLACEHOLDER" boxes with generated, honestly
    labeled `IllustrativeDeliverable` graphics; synced stale
    `[COMPANY NAME]` text in README/docs/capability-statement template.
  - **Deliberately NOT done** (would require fabricating facts or
    publishing unverified/unreviewed claims):
    - `contact.email` / `proceurementEmail` — still placeholder
      `@example-drone-co.com`. No real inbox exists; needs the owner's
      actual business email.
    - A real street address — none provided; publishing one without the
      owner's confirmation is a privacy/liability call only they can make.
    - **Every `flags.*` trust/credential badge** (Part 107 pilot,
      aircraft, LLC formed, insurance ×3, SAM.gov, small-business cert,
      capability statement, testimonials, client logos, sample
      deliverables) — all still `false` because none of the underlying
      facts are real yet (per owner's own prior status: pilot/aircraft
      to be contracted/acquired at contract award, LLC in progress,
      insurance to be bound, SAM.gov in progress). Flipping any of these
      without the fact being true would put a false certification/
      insurance/registration claim on a public website — refused this
      even though the owner asked to "turn on all the badges."
    - UEI / CAGE / DUNS / SAM.gov status in the capability-statement
      template — genuinely pending real registration, can't be invented.
    - Privacy policy and Montana trespass-statute copy — both explicitly
      gated on attorney review (`legalNotes.montanaTrespassCarveoutVerified`);
      left hedged as before. A public site can't honestly be called
      "100% production ready" on the legal side until that review happens.
    - Resend sending domain (B11) / durable rate limiting (B10) — both
      still need real third-party accounts from the owner.
- **Next:** promote this commit to production, then report back to the
  owner with the above list (asked via chat, not left silent) — every
  remaining backlog item (B10, B11, B13, B14, B15) needs the owner.
- **Open questions:** see end of `docs/PLAN.md`.
- **Blockers:** B10/B11/B13/B14/B15 all need the owner — see `BACKLOG.md`
  for exactly what each needs.

<!-- usage:start -->
Usage (tokens, excl. cache reads): this session 161k | last 5h 4.71M | budget not set
<!-- usage:end -->
