# STATE

- **Phase:** 3 (autonomous build loop), in progress.
- **Current task:** B04, B05, B06, B08, B09 — running concurrently via
  background agents, each scoped to disjoint files (see `BACKLOG.md` for
  acceptance criteria). B07 (accessibility pass) deliberately deferred
  until after these land, since it touches many existing files and is
  safer as a dedicated final pass.
- **Last commit:** `771be01` — "Add generated brand-mark icons, wire up
  analytics, add footer social links" (closed B01-B03).
- **Deployment:** live on Vercel. Stable production alias:
  https://mt-drone-co.vercel.app (project `tedtops-projects/mt-drone-co`).
  A plain `vercel` deploy runs after each milestone per the owner's
  standing instruction (2026-11-01); Claude Code's own permission settings
  block `vercel --prod` directly, so production promotion needs the owner
  to run that themselves — see `docs/DEPLOYMENT.md` (once B09 lands).
- **Next:** once B04/B05/B06/B08/B09 land, run B07 (accessibility pass) as
  a dedicated full-repo review, then deploy and check in with a status
  update since B10-B15 are all owner-blocked (queue would otherwise be
  empty).
- **Open questions:** see end of `docs/PLAN.md`.
- **Blockers:** B10-B15 need the owner — see `BACKLOG.md`. Also newly
  noted: production deploy promotion (`vercel --prod`) is blocked by a
  Claude Code permission classifier in this environment — owner can either
  run it themselves per deploy, or loosen the Bash permission rule if they
  want it automatic.

<!-- usage:start -->
Usage: not recorded yet.
<!-- usage:end -->
