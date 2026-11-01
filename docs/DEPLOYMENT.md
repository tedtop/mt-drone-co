# Deployment

This project is deployed on Vercel. The Vercel project is already created
and linked:

- **Team:** `tedtops-projects`
- **Project:** `mt-drone-co`
- **Production alias:** https://mt-drone-co.vercel.app

Deploys are done with the Vercel CLI (`vercel`), not a Git integration.

## Setup (new machine / new owner)

The Vercel CLI in this environment is already authenticated and the repo
is already linked to the `tedtops-projects/mt-drone-co` project, so day-to-day
work needs no setup. Setting up from scratch (a new machine, or a new owner
taking over) needs two one-time steps from the repo root:

```bash
vercel login
vercel link
```

`vercel link` will prompt for the team (`tedtops-projects`) and project
(`mt-drone-co`) to attach to — pick the existing project, don't create a new
one.

## Preview vs. Production deploys

- `vercel` (no flags) builds and deploys the current working tree to a new
  **Preview** deployment — a unique, disposable URL for that build. This is
  the safe default for checking a change before it goes live.
- `vercel --prod` promotes a build to **Production** — it becomes the build
  served at the stable alias, https://mt-drone-co.vercel.app.

**Note:** in this environment, Claude Code's permission settings currently
block it from running `vercel --prod` directly — a safety classifier flags
"Production Deploy" actions and withholds approval. So production promotion
is a manual step for the owner to run themselves, either:

```bash
vercel --prod
```

from the repo root (builds and promotes in one step), or, to promote a
specific preview build that's already been reviewed:

```bash
vercel promote <deployment-url>
```

This stays a manual, owner-run step until the owner chooses to loosen that
permission.

## Environment variables

Set production environment variables with:

```bash
vercel env add <NAME> production
```

This prompts for the value and stores it encrypted on the Vercel project;
it does not touch any local `.env` file. `NEXT_PUBLIC_SITE_URL` has already
been set this way, to `https://mt-drone-co.vercel.app`.

Once the owner has a real Resend account and verified sending domain,
`RESEND_API_KEY` and `QUOTE_FORM_TO_EMAIL` should be added the same way.

For the full list of environment variables this project reads (purpose and
fallback behavior if unset), see the
[README's "Environment variables" table](../README.md#environment-variables)
— this doc intentionally doesn't duplicate it.

After adding or changing a production env var, redeploy with `vercel --prod`
(or promote the next preview) for it to take effect on the live site.

## Custom domain setup

Once the owner has a real domain (replacing the placeholder
`example-drone-co.com` referenced in the README), connect it with either:

```bash
vercel domains add <domain>
```

or by adding the domain to the project in the Vercel dashboard
(Project → Settings → Domains) and following its DNS instructions.

After the domain is live:

1. Update `NEXT_PUBLIC_SITE_URL` to the real domain:
   ```bash
   vercel env add NEXT_PUBLIC_SITE_URL production
   ```
   (this overwrites the existing value when prompted, or remove the old one
   first with `vercel env rm NEXT_PUBLIC_SITE_URL production`).
2. Redeploy to production (`vercel --prod`) so metadata, JSON-LD, sitemap,
   and robots.txt pick up the new canonical URL.

## Day-to-day

After each backlog item lands, the build loop runs a plain `vercel` deploy
(Preview) so the owner has a URL to review before anything goes live —
it does not promote to production itself.

To see recent deployments and their URLs:

```bash
vercel ls
```

Production promotion stays a manual, owner-run step (see "Preview vs.
Production deploys" above).
