# Vrindavan Landing — Editing Guide

A plain-English map of what lives in each file, and **exactly which lines** to touch for the minor edits you'll actually want to make. No layout or code changes required for most content tweaks.

> **Golden rule:** always edit the string between the quotes. Don't delete the quotes themselves.
> After any edit, save the file — Vite hot-reloads in the preview.

---

## 🎨 Site-wide colors & fonts

**File:** `src/index.css`
Every color on the site comes from this file. Change one hex code → the whole site updates.

| I want to change… | Edit this token |
|---|---|
| Main dark background | `--color-brand-paper` |
| Section cards / surfaces | `--color-brand-surface`, `--color-brand-surface-2` |
| Body text color | `--color-brand-ink` (warm pearl, not pure white) |
| Secondary / muted text | `--color-brand-ink-light`, `--color-brand-ink-muted` |
| Teal accent (pills, dots, italic stats) | `--color-brand-cyan` |
| Royal purple (gradient middle) | `--color-brand-violet` |
| Wine/magenta accent (gradient end) | `--color-brand-magenta` |
| NEW champagne accent | `--color-brand-gold`, `--color-brand-gold-deep` |

Fonts (lines 1 & 5–6): Playfair Display (serif) + Inter (sans). Swap the Google Fonts URL + token to change.

---

## 📊 Google Analytics, Meta Pixel, Google Ads, Search Console

**File:** `src/tracking.ts`
Paste your IDs into the `TRACKING_IDS` object at the top. Anything left as `''` is skipped — zero errors. That's it.

**File:** `index.html`
Search Console meta-tag verification is here — look for the big `SEARCH CONSOLE` comment block and replace `PASTE_GOOGLE_SEARCH_CONSOLE_TOKEN_HERE` with your token.
SEO `<title>` and `<meta description>` also live in this file.

---

## 🧭 Section-by-section file map

Each section of the page is one file in `src/components/`.
`src/App.tsx` decides their order — move a line up/down to reorder sections.

### `Header.tsx` — top navigation bar
- Line 30: brand prefix text (`"Namishree"`)
- Line 41, 75: "Book Site Visit" button label
- Lines 66–69: mobile menu links (Overview / Residences / Amenities / Location)

### `Hero.tsx` — the big first screen
- Line 18: hero background image path (in `/public/3d-renders/`)
- Line 39: the white logo (`/public/logo.png`)
- Line 42–44: eyebrow "LIVE IN THE HEART OF KONDAPUR"
- Line 47: main headline "The pride of Kondapur"
- Lines 51–52: tagline and tower/floor/open-area line
- Line 58: "9.75 acres" stat
- Line 64: "August 2029" handover date
- Line 73: brochure button label
- Lines 86, 90, 92: RERA / layout permission numbers and regulator URL

### `Snapshot.tsx` — "Vrindavan at a Glance" stats grid
- Lines 5–10 (`stats` array): the four stat tiles — label, value, unit.

### `Configurations.tsx` — 2/3/4 BHK cards
- Line 92, 94: section heading "Find Your Perfect Home"
- Lines 96–99: section paragraph
- Lines 62–81 (`configs` array): each BHK card — type, size, towers, image

### `Highlights.tsx` — "Where every detail is a luxury"
- Lines 4–19 (`highlights` array): the two big feature cards (clubhouse + greenery) — each has subtitle, title, stat, copy, image.
- Line 34: eyebrow "Life at Vrindavan"
- Lines 43–45: main headline

### `Amenities.tsx` — expanding accordion of 4 amenity groups
- Lines 4–29 (`amenityGroups` array): the 4 groups (NATURE / SOCIAL / FITNESS / CONVENIENCE), each with fullTitle, image, and `items` list of bullet points.
- Line 45: headline "Carefully curated lifestyle"
- Line 55: CTA button label

### `FloorPlans.tsx` — locked floor-plan gallery
- Lines 10–17 (`towerTabs` array): each tower tab — id, label, "units" description, and images (in `/public/floorplans/`).
- Line 42: eyebrow "Architectural Excellence"
- Line 49: headline
- Lines 94, 96: unlock prompt wording

### `Location.tsx` — map + proximity grid
- Lines 5–14 (`proximities` array): the 8 nearby-landmark pills (label + time).
- Line 26: headline "The Kondapur Advantage"
- Line 40: Google Maps `iframe` `src` — paste a new embed URL here to recentre the map.

### `Specifications.tsx` — technical specs grid
- Lines 4–13 (`specs` array): the 8 spec tiles (title + description).
- Line 20: headline "Technical Excellence"
- Line 27: "Download Full Specifications" button

### `Footer.tsx` — the long closer
- Lines 58–59: giant CTA headline "Your Sky-High Life Awaits"
- Line 62: sub-copy
- Lines 69, 74–75: "Book a Site Visit" button + `tel:` phone number
- Lines 4–42 (`otherProjects` array): the 4 "other projects by Namishree" cards — name, location, type, size, details list, RERA, image, optional badge.
- Line 155: contact email
- Line 158: company website URL
- Line 166: corporate office address
- Lines 180–188: trust-bar chips (RERA / acreage / units / floors / brand)
- Lines 193–196: legal disclaimer

### `MobileBottomBar.tsx` — sticky phone/WhatsApp/brochure bar (mobile only)
- Line 8: `tel:` phone number (call button)
- Line 18: `wa.me/…` WhatsApp number
- Lines 11, 22, 33: label texts ("Call" / "WhatsApp" / "Brochure")

### `LeadModal.tsx` — popup form
- Line 60: modal title (default — each button overrides with its own)
- Lines 61–62: modal sub-copy
- Line 71, 83: field placeholders ("Full Name", "Phone Number")
- Line 94: submit button labels
- Line 98: privacy microcopy ("Your details are private")
- Line 113: success-state heading ("Thank you")
- Line 115: success-state sub-copy
- **Form submit logic (lines 15–26):** currently a dummy 1.5s delay. Replace with a `fetch('/api/lead', …)` or your CRM endpoint when ready.

---

## 🖼 Images & assets

All images live in `public/`:
- `public/3d-renders/` — hero + marketing renders (referenced by Hero, Configurations, Highlights, Amenities, Footer, etc.)
- `public/floorplans/` — numbered floor-plan JPGs (referenced by `FloorPlans.tsx`)
- `public/logo.png` — the white hero logo

To swap an image, drop the new file into the same folder with the same name (or update the path string in the component).

---

## 🚀 Running & building

```bash
cd vrindavan-landing
npm install          # first time only
npm run dev          # local preview at http://localhost:3000
npm run build        # production bundle in /dist
npm run preview      # serve the production build locally
```

---

## 🔁 Common tasks — quick lookup

| Task | Where |
|---|---|
| Change phone number everywhere | Footer.tsx line 72/75, MobileBottomBar.tsx lines 8 & 18 |
| Change RERA number | Hero.tsx line 90, Footer.tsx line 180, plus `index.html` `<meta description>` |
| Change hero headline | Hero.tsx line 47 |
| Change handover date | Hero.tsx line 64 |
| Add a new amenity bullet | Amenities.tsx — add to `items` array in lines 9/15/21/27 |
| Add a new "other project" card | Footer.tsx `otherProjects` array |
| Paste n8n webhook URL | `.env.local` → `VITE_LEAD_WEBHOOK_URL` |
| Paste Google Analytics ID | `.env.local` → `VITE_GA4_MEASUREMENT_ID` |
| Paste Meta Pixel ID | `.env.local` → `VITE_META_PIXEL_ID` |
| Paste Search Console token | `index.html` → `google-site-verification` meta tag |
| Change page `<title>` / SEO description | `index.html` lines near the top |
| Swap section order | `src/App.tsx` — reorder the component tags inside `<main>` |
| Change brand color | `src/index.css` `@theme` block |
