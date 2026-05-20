# Vrindavan Landing Page - KT Document

This is the working handoff and editing guide for the current Vrindavan landing page.

Read this first before making new copy, image, section-order, CTA, or modal changes.

## 1. Main source of truth

The main source of truth for user-facing content is:

- `src/content.ts`

Use that file first for:

- headings
- section body copy
- stat values
- CTA labels
- modal titles
- footer/disclaimer text
- location data
- specification rows
- image paths used by content-driven sections

The goal now is:

- `content.ts` owns copy and content structure
- section components own layout, animation, and styling

## 2. What is content-driven now

These areas now read from `content.ts` and should be edited there first:

- `header`
  - nav labels
  - book-visit CTA labels
- `interactions`
  - modal titles
  - lead form titles
  - entry-point ids used by lead capture / thank-you redirects
- `hero`
  - hero copy
  - spread-across stat
  - hero form labels/placeholders
- `leadModal`
  - modal subtitle
  - placeholders
  - submit labels
  - privacy label
- `projectHighlights`
  - section title
  - all highlight value/label pairs
- `configurations`
  - section copy
  - panel title
  - configuration card data and button labels
- `highlights`
  - section heading/body
  - all 3 card titles
  - card copy
  - card stats
  - image paths
- `amenities`
  - heading/body/CTA
  - group titles/items
- `floorPlans`
  - heading
  - left description
  - locked card title/body/CTA
- `location`
  - heading
  - nearby label
  - location description
  - proximities
- `specifications`
  - section heading
  - intro body
  - button labels
  - visible/hidden specification rows
- `mobileBottomBar`
  - call / WhatsApp / brochure labels and links
- `footer`
  - main heading
  - body
  - CTA labels
  - other-projects label
  - office/contact/trust bar/legal/disclaimer content
- `thankYou`
  - thank-you page copy

## 3. Main files to know

Important layout / behavior files:

- `src/App.tsx`
  - section order
  - app-level modal opening logic
- `src/components/Header.tsx`
- `src/components/Hero.tsx`
- `src/components/ProjectHighlights.tsx`
- `src/components/Configurations.tsx`
- `src/components/Highlights.tsx`
- `src/components/Amenities.tsx`
- `src/components/FloorPlans.tsx`
- `src/components/Location.tsx`
- `src/components/ConstructionUpdates.tsx`
- `src/components/Specifications.tsx`
- `src/components/Footer.tsx`
- `src/components/LeadModal.tsx`

## 4. Image workflow

Live section images should go under:

- `public/optimized`

Current highlights images:

- `clubhouse-new.webp`
- `green-quiet.webp`
- `home-sky.webp`

If you add or replace an image:

1. place it in `public/optimized/`
2. update the matching image path in `src/content.ts`
3. only edit the component if layout itself must change

## 5. Lead capture / tracking note

Lead and thank-you behavior files:

- `src/leadCapture.ts`
- `src/tracking.ts`
- `.env.production`
- `.env.example`

Important note:

- some visible modal titles also flow into lead payloads, tracking metadata, and thank-you URL params
- that is why these labels now live in `contentDraft.interactions`
- `.env.production` is the committed build config meant to survive across systems
- `.env.local` is ignored and only for machine-specific overrides

If you rename:

- `Book a Site Visit`
- `Download Brochure`
- `Get Price Sheet`
- `Download Specifications`
- `Download Floor Plans`

do it in `src/content.ts`, not directly in `App.tsx` or a component.

## 6. Recent major changes already made

This repo has already had these notable updates:

- cloned and set up locally for ongoing landing-page work
- cleaned duplicate/unused image folders
- moved active lifestyle card imagery into `public/optimized/`
- reordered sections so configurations sits directly after hero
- added the `Project Highlights` section
- softened the `Find Your Perfect Home` image overlays
- reworked the lifestyle/highlights cards with new image slots
- enlarged and cleaned up the floor-plans section
- renamed floor-plan copy and CTA to `Download Floor Plans`
- changed `Project Specification` heading and intro copy
- normalized live acreage references to `9.5`
- centralized most visible copy into `content.ts`
- fixed multiple places where components were still using hardcoded strings instead of content values
- added a construction updates section with inline YouTube playback and a thumbnail playlist
- corrected Vercel preview deployment issues caused by placeholder Git author email
- removed the extra mobile hero CTA above the fold and relabeled the hero form submit action to `Download Brochure`
- aligned the `Find Your Perfect Home` intro copy by removing the decorative left rule
- refined the footer with a brighter luxury treatment while keeping the specifications section layout unchanged
- merged the `Location` and `Construction Updates` cream backgrounds so the handoff feels seamless
- simplified the construction updates copy by removing the eyebrow and repeated per-video title labels

## 7. How to edit safely moving forward

For content-only changes:

1. edit `src/content.ts`
2. refresh local dev server
3. verify the live section visually

For layout/styling changes:

1. edit the relevant component in `src/components/`
2. keep copy and data in `src/content.ts`
3. run a build check

Recommended validation:

```bash
npm run build
```

## 8. Known caution

The main recurring bug earlier was this:

- a section looked content-driven
- but the component still contained hardcoded strings
- so editing `content.ts` appeared to do nothing

If a future copy change does not reflect:

1. search the section component for a hardcoded literal
2. confirm the component is actually reading from `contentDraft`
3. move the stray string into `src/content.ts`

This should now be much less common, but that is still the first debugging step.
