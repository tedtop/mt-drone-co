---
description: Pick up the next backlog item and continue the autonomous loop
---

First run `python3 ~/.claude/hooks/usage.py --report`. If a budget is set
and last-5h usage is at or above 80%, tell the owner and stop before
starting the item.

Otherwise:
1. Read `CLAUDE.md`, `STATE.md`, and `BACKLOG.md`.
2. Check `git status --short --branch` and that the working directory is
   the repo root.
3. Pick the item with status `doing`, or else the top `todo` item (skip
   `blocked`). If the item is sized L, propose a split and stop.
4. Follow the autonomous build loop in `CLAUDE.md`: set it to `doing`,
   update `STATE.md`, build, self-verify, commit, update `STATE.md`/
   `BACKLOG.md`, and continue straight to the next unblocked `todo` item —
   do not stop between items unless every remaining item is blocked or the
   owner asks for a status update.
