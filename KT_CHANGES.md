# KT Change Log

This file is the implementation-facing change log for the Vrindavan landing page.

Use it as the first stop after cloning the repo again or before pushing a fresh round of updates to GitHub.

## How To Use This File

- Add a new dated entry at the top for every meaningful product, design, performance, tracking, or deployment change.
- Keep each entry focused on why the change was made, what files changed, and any follow-up work still pending.
- If an update introduces new assets, environment variables, or operational steps, document them here on the same day.

---

## 2026-05-20 - Premium UI Upgrade Pass + Construction Updates + Footer Polish

### Why this change was made

- The landing page moved through a concentrated UI refinement pass after browser-based review comments.
- The biggest goals were to improve above-the-fold clarity on mobile, make the construction updates area more usable, and smooth out section-to-section visual continuity.
- A Vercel preview deployment was also blocked by invalid Git author metadata and had to be corrected before preview verification could continue.

### Major implementation changes

- Fixed Git author email and re-pushed the preview branch so Vercel would accept preview deployments.
- Updated the hero mobile experience by removing the extra top CTA and changing the hero form submit label to `Download Brochure`.
- Cleaned up the configurations section by removing the decorative left-side rule from the supporting copy block.
- Iterated on the construction updates experience:
  - wired and verified real YouTube update videos
  - restored inline embedded playback on the page
  - added rectangular preview thumbnails to the playlist rail
  - renamed the pilot item to `Vrindavan Construction Update`
  - removed repeated construction-update text and simplified card labels to month-only
  - merged the section visually with `Location` by removing the visible divider and tightening spacing
- Corrected a misapplied styling pass so the brighter luxury refresh landed on the footer section after specifications, not on the specifications section itself.

### Files changed

- `src/content.ts`
- `src/components/Hero.tsx`
- `src/components/Configurations.tsx`
- `src/components/ConstructionUpdates.tsx`
- `src/components/Footer.tsx`
- `src/components/Location.tsx`
- `KT_DOCUMENT.md`
- `KT_CHANGES.md`

### Operational / deployment notes

- `premium-ui-upgrades` was pushed and verified through Vercel preview during this round.
- One preview deploy was blocked because commits were authored with placeholder Git identity values; the branch history was rewritten with the correct GitHub email and then re-pushed.
- Local `npm run build` generally passed during this work, but an intermittent Vite/Rollup absolute-path error was also observed in one run and should be watched if build behavior becomes inconsistent again.

### Validation completed

- `npm.cmd run lint`
- Multiple `npm.cmd run build` checks across the UI iterations
- Local browser review on `http://localhost:3000/`
- Vercel preview deployment review on `premium-ui-upgrades`

## 2026-05-19 - Scroll Performance Cleanup + Asset Optimization

### Why this change was made

- The landing page felt laggy during scroll even though the JavaScript was relatively light.
- The primary bottleneck was large decorative imagery being decoded and painted too early, especially in the hero and below-the-fold card sections.
- Several sections used CSS `background-image`, which prevented normal image-loading hints like `loading="lazy"` from helping.

### Major implementation changes

- Added optimized WebP derivatives in `public/optimized/` for the hero, configuration cards, highlights, amenities, footer project cards, and floor-plan preview.
- Reworked the hero to use a single responsive `<picture>` flow instead of rendering multiple large hero images at once.
- Replaced heavy `background-image` card surfaces with real `<img>` elements so the browser can lazy-load and decode them more efficiently.
- Added `loading="lazy"` and `decoding="async"` to below-the-fold image surfaces.
- Centralized the optimized asset paths inside `src/content.ts` so content and asset swaps stay easier to manage.

### Files changed

- `src/content.ts`
- `src/components/Hero.tsx`
- `src/components/Configurations.tsx`
- `src/components/Amenities.tsx`
- `src/components/Highlights.tsx`
- `src/components/FloorPlans.tsx`
- `src/components/Footer.tsx`
- `public/optimized/*`

### Optimized assets added

- `public/optimized/hero-mobile.webp`
- `public/optimized/hero-desktop.webp`
- `public/optimized/config-2bhk.webp`
- `public/optimized/config-3bhk.webp`
- `public/optimized/config-4bhk.webp`
- `public/optimized/clubhouse.webp`
- `public/optimized/greens.webp`
- `public/optimized/fitness.webp`
- `public/optimized/convenience.webp`
- `public/optimized/floorplan-preview.webp`

### Observed impact

- Hero image payload dropped from multi-megabyte JPGs to much smaller WebP variants.
- Below-the-fold sections now defer more image work instead of forcing the browser to decode nearly everything up front.
- The page now builds cleanly after the refactor with `npm run build`.

### Follow-up recommendations

- If performance is still a concern on lower-end Android devices, the next step should be generating multiple responsive widths per image and using `srcset` for card surfaces too.
- If the project later moves to Next.js, migrate these media surfaces to `next/image`.
- Keep newly added marketing renders out of the live page until they are compressed first; avoid dropping raw 3 to 7 MB JPGs straight into section components.

### Validation completed

- `npm run build`
- Local browser smoke test on `http://localhost:3001/`

