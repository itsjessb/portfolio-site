# Notes for Claude

## How to ship changes (preview → approve → commit)

Jessica is non-technical and wants to see every change before it is saved to the repo. For any change that affects the site's content, layout, or design, follow this loop:

1. **Make the edits.**
2. **Show a preview.** Render the affected page(s) with the pre-installed browser and send Jessica the screenshot(s) so she can see the result. If the change has multiple visual states (e.g. an accordion open vs. closed, a menu, hover), show each state.
3. **Wait for her approval.** Do NOT commit yet. If she asks for tweaks, revise and send an updated preview.
4. **Ask before committing.** Once she approves, ask before running `git commit` / `git push` — never commit or push automatically.

Notes:
- The "preview" means an actual screenshot delivered to her in chat, not just a description or a promise to show one.
- Trivial non-visual edits (a typo in a comment, etc.) don't need a full screenshot, but still confirm before pushing.
- Pull requests are optional and separate from this loop — only open one if Jessica asks.

## Site & hosting

- **Live site:** https://jessicabargenquast.com
- Hosted on **Netlify**, which serves the **repo root** as the published site. Any file committed to the repo becomes a public URL unless a rule in `_redirects` blocks it. Internal/dev files (`CLAUDE.md`, `.claude/`, `.gitignore`, `README.md`) are blocked there — keep that in mind before committing new non-site files to the root.

## Business & legal status

Jessica currently operates this site and business as an **individual (sole proprietor)**, not a registered business entity. The legal pages (`privacy-policy.html`, `terms-of-use.html`, `cookie-notice.html`) are written for an individual.

**If Jessica ever forms an LLC or other entity, remind her that the legal pages need to be updated** (entity name/references, and possibly the contact/registered-agent details) to reflect the new business structure.

## Google Analytics (currently not installed)

`privacy-policy.html` and `cookie-notice.html` both describe Google Analytics as **"planned, not yet active"**, since it isn't on the site yet.

**When Jessica asks to actually set up Google Analytics, update the language in both pages from "planned" to active/current** (describe the real cookies it sets, e.g. `_ga`, `_ga_*`, and remove the "not yet active" framing). Also:
- Add the GA domain to `_headers`' Content-Security-Policy (`script-src`, `connect-src`, `img-src` as needed for the GA/gtag endpoints).
- Gate the GA script so it only loads when `window.hasAnalyticsConsent()` (see `js/cookie-consent.js`) returns `true`, so the existing cookie banner's Accept/Reject choice and Global Privacy Control detection actually control whether analytics runs.
