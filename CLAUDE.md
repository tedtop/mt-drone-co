# mt-drone-co

Montana commercial drone services marketing/lead-gen site. Origin:
2026-11-01. Architecture, schema and decisions: `docs/PLAN.md`. Do not
duplicate it here.

## Stack
- Next.js 16 (App Router) + TypeScript + Tailwind v4, static-first, Vercel.
- No database, no auth. Content is typed data files (`src/lib/services-data.ts`,
  `src/lib/cities-data.ts`), not a CMS.

## Conventions
- Boring tools, minimal dependencies.
- Every trust/credential claim must read from a boolean in `flags`
  (`src/lib/siteConfig.ts`) — never hardcode a claim about pilots, aircraft,
  insurance, clients, or years of experience. See that file's comments.
- No stock photography or scraped competitor imagery — use `PlaceholderImage`.
- Secrets only in gitignored env files; update `README.md`'s env var table
  for every new variable.
- Commits: small and logical, imperative subject. No `Co-Authored-By` or
  tool-attribution lines.

## Source of truth
- `BACKLOG.md`: ordered table, authoritative. Status: todo/doing/review/done/blocked.
- `STATE.md`: current task, last commit, next, open questions, blockers.
  Rewrite at every checkpoint. Never edit between `<!-- usage:start -->` and
  `<!-- usage:end -->` — the global usage hook owns that block.
- `docs/PLAN.md`: architecture, decisions log, risks, open questions.

## Build loop (one backlog item per session)

**Autonomous mode (owner's standing instruction as of 2026-11-01):** the
owner asked to not be stopped at a per-item review gate — they check in
periodically themselves instead. So the loop below replaces the default
skill's step 3-4 (AskUserQuestion gate) with self-verification:

1. Take the top `todo` item (skip `blocked`), or resume `doing`. Set it to
   `doing`. Update `STATE.md`.
2. Build with small commits. Run lint, typecheck, and the test/smoke suites
   before declaring done.
3. Self-verify: if build/lint/tests pass and the acceptance criteria are
   met, mark the item `done` directly (no stop-and-ask). State the commit
   message in the response text for transparency, then commit — don't block
   waiting for a reply.
4. Rewrite `STATE.md` (keep the usage block), then continue straight to the
   next `todo` item. Do not stop between items.
5. If a genuine blocker comes up that needs the owner (credentials, a
   business/legal decision, an account only they can create): mark that
   item `blocked` with exactly what's needed in `STATE.md`/`BACKLOG.md`,
   and move to the next unblocked item rather than stopping.
6. Only stop outputting and wait when every remaining `todo` item is
   genuinely blocked, or the owner explicitly asks for a status update —
   then show the backlog table and what's ready for review.

## Rules
- Never work on more than one backlog item's code at a time (sequential,
  not parallel, within the loop) — but don't pause between items.
- Features must fit one focused session; split anything sized L.
- Never commit secrets.
- Usage logging is global: `~/.claude/hooks/usage.py` (`--report`, `--by-project`).
