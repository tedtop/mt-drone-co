# STATE

- **Phase:** 3 (autonomous build loop), in progress.
- **Current task:** none — B16 (visual richness pass) is done. Every
  remaining backlog item needs the owner.
- **Last commit:** pending (B16's changes + this STATE/BACKLOG/PLAN update
  are about to be committed). Full verification after the visual overhaul:
  `npm run build` (57 routes, clean), `npx eslint .` (clean),
  `npx tsc --noEmit` (clean), `npm test` (20/20 Vitest), `npx playwright
  test` (11/11: 5 smoke + 6 a11y scans, zero violations — also spot-checked
  `/fleet`, `/services`, `/service-area` index outside the formal suite,
  also zero violations), plus a manual visual review via screenshots.
- **Deployment:** live and public on Vercel. Production alias:
  https://mt-drone-co.vercel.app (project `tedtops-projects/mt-drone-co`).
  SSO deployment protection disabled so it's publicly reachable. A plain
  `vercel` deploy runs after each milestone; `vercel --prod` (production
  promotion) is blocked by a Claude Code permission classifier in this
  environment — see B12/B12a in `BACKLOG.md`. Will push a fresh deploy with
  B16's changes right after this checkpoint.
- **Next:** nothing — every remaining backlog item (B10, B11, B12a, B13,
  B14, B15) needs the owner.
- **Open questions:** see end of `docs/PLAN.md`.
- **Blockers:** B10/B11/B12a/B13/B14/B15 all need the owner — see
  `BACKLOG.md` for exactly what each needs.

<!-- usage:start -->
Usage (tokens, excl. cache reads): this session 474k | last 5h 3.87M | budget not set
<!-- usage:end -->
