# Post-launch initial check

Production is not complete until every gate below has fresh evidence from the same launch window. Do not infer Google Search Console state from DNS records, an older task, or website availability.

Expected production origin: https://verityhorror.wiki

## Minimal evidence summary

Status: BLOCKED — the production deployment is ready, but the formal domain is not online. Spaceship loaded after one safe reconnect, then browser control stopped again while opening the add-record form. Per the launch controller's reconnect limit, no further DNS or GSC operation was attempted.

### 1. Production HTTPS

- Checked at: 2026-08-18 15:54 UTC
- Requested URL: https://verityhorror.wiki/
- Final URL: none
- HTTP status: none; TLS request timed out after 12 seconds
- Page identity observed: not observable on the formal domain
- Result: FAIL

### 2. Production sitemap

- Checked at: 2026-08-18 15:54 UTC
- Requested URL: https://verityhorror.wiki/sitemap.xml
- HTTP status: none; TLS request timed out after 12 seconds
- Content type: unavailable
- XML parse result: unavailable
- Canonical-origin URL count: unavailable
- Foreign-origin URL count: unavailable
- Result: FAIL

### 3. Exact GSC property

- Checked at: not reached after the browser reconnect limit was exhausted
- Property value: no current UI evidence for `sc-domain:verityhorror.wiki`
- Property type: not confirmed in this launch window
- Ownership UI state: not confirmed in this launch window
- Result: FAIL — do not infer ownership from Vercel or DNS

### 4. Sitemap inside the same GSC property

- Checked at: not reached after the browser reconnect limit was exhausted
- Property value: no current UI evidence for `sc-domain:verityhorror.wiki`
- Submitted sitemap: https://verityhorror.wiki/sitemap.xml
- GSC submission status: not submitted in this launch window; no Success evidence
- Discovered pages: unavailable
- Result: FAIL

## Deployment and DNS recovery point

- Vercel production deployment: `dpl_2QxepDeUmftrowvAhdJekJwTE7h5` (`READY`)
- Production preview: https://verity-horror-specter.vercel.app
- Vercel project is connected to: https://github.com/zhangtongxin888/verity-horror-specter
- Vercel domain status after the stopped browser step: apex and www are attached, but both are `invalid-configuration`.
- Spaceship changes submitted: none.
- Authoritative nameservers retained: `launch1.spaceship.net`, `launch2.spaceship.net`.
- Authoritative apex records before and after the stopped step: `A 34.216.117.25`, `A 54.149.79.189` (TTL 300).
- Authoritative www records before and after the stopped step: no A, AAAA, or CNAME.
- Authoritative MX, TXT, and CAA answers observed at the apex: none.
- Exact pending Vercel records: `A @ 216.198.79.1`, `A @ 64.29.17.1`, and `CNAME www c2b6924d9ada78aa.vercel-dns-017.com.`
- Vercel www redirect configuration: `308` to `verityhorror.wiki`.
- Browser cleanup: the single task tab was closed and the task browser session reported no remaining tabs.

## Completion rule

Report completion only when all four Result fields are PASS with current evidence. If any field is missing, stale, mismatched, or inferred, the launch remains incomplete.
