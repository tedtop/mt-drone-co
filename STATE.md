# STATE

- **Phase:** 3 (autonomous build loop), in progress.
- **Current task:** B07 — accessibility (WCAG AA) pass, the last
  non-blocked item. Starting next, as a dedicated full-repo review since it
  touches many existing files.
- **Last commit:** `4f4984f` — "Add Playwright smoke-test suite for key
  pages (B05)". Full verification re-run after all 5 concurrent agents
  (B04/B05/B06/B08/B09) landed: `npm run build` (56 routes, clean),
  `npx eslint .` (clean), `npx tsc --noEmit` (clean), `npm test` (20/20
  Vitest), `npx playwright test` (5/5) — all green.
- **Deployment:** live and public on Vercel. Production alias:
  https://mt-drone-co.vercel.app (project `tedtops-projects/mt-drone-co`).
  SSO deployment protection (on by default for new Vercel projects) was
  disabled via `vercel project protection disable mt-drone-co --sso` so the
  owner and anyone else can view it without a Vercel login. A plain
  `vercel` deploy runs after each milestone; `vercel --prod` (production
  promotion) is blocked by a Claude Code permission classifier in this
  environment — see B12/B12a in `BACKLOG.md`.
- **Next:** B07, then every remaining backlog item is `blocked` on the
  owner (B10, B11, B12a, B13, B14, B15) — will stop and give a status
  update once B07 lands, since the queue would otherwise be empty.
- **Open questions:** see end of `docs/PLAN.md`.
- **Blockers:** none for B07. B10/B11/B12a/B13/B14/B15 need the owner —
  see `BACKLOG.md` for exactly what each needs.

<!-- usage:start -->
Usage (tokens, excl. cache reads): this session 358k | last 5h 3.21M | budget not set
<!-- usage:end -->
