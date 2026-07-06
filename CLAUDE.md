# Notes for Claude

## Business & legal status

Jessica currently operates this site and business as an **individual (sole proprietor)**, not a registered business entity. The legal pages (`privacy-policy.html`, `terms-of-use.html`, `cookie-notice.html`) are written for an individual.

**If Jessica ever forms an LLC or other entity, remind her that the legal pages need to be updated** (entity name/references, and possibly the contact/registered-agent details) to reflect the new business structure.

## Google Analytics (currently not installed)

`privacy-policy.html` and `cookie-notice.html` both describe Google Analytics as **"planned, not yet active"**, since it isn't on the site yet.

**When Jessica asks to actually set up Google Analytics, update the language in both pages from "planned" to active/current** (describe the real cookies it sets, e.g. `_ga`, `_ga_*`, and remove the "not yet active" framing). Also:
- Add the GA domain to `_headers`' Content-Security-Policy (`script-src`, `connect-src`, `img-src` as needed for the GA/gtag endpoints).
- Gate the GA script so it only loads when `window.hasAnalyticsConsent()` (see `js/cookie-consent.js`) returns `true`, so the existing cookie banner's Accept/Reject choice and Global Privacy Control detection actually control whether analytics runs.
