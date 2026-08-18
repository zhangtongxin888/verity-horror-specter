# Verity Horror Field Guide

Independent beginner-first guide for **Verity [HORROR]** by **Specter Development**.

- Production domain: https://verityhorror.wiki
- Roblox Place ID: 129839966867899
- Roblox Universe ID: 10514488908
- Repository: zhangtongxin888/verity-horror-specter

This repository is the only long-term source for the site. It is intentionally separate from every multi-site repository.

## Local development

Install dependencies with npm install, then start the local site with npm run dev.

## Quality checks

Run npm run lint, npm test, and npm run deploy:cloudflare:dry-run.

## Cloudflare deployment

Run npm run deploy:cloudflare. The build produces a Cloudflare Worker configuration at dist/server/wrangler.json.

Custom-domain, DNS, and Search Console work is performed only after the launch controller releases the browser/DNS lock for this site.

After launch, record the four required real-time checks in docs/POST_LAUNCH_CHECK.md. Git push or a successful deployment by itself does not satisfy the completion gate.

## Content accuracy

Gameplay claims are limited to the official Roblox experience description, Games API metadata, official badges, and explicitly dated verification notes. The site does not mix in the Umek0 Games version or Verity [REALISTIC].
