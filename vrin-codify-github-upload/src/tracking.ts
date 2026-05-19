/**
 * ────────────────────────────────────────────────────────────────
 * TRACKING & ANALYTICS — SINGLE SOURCE OF TRUTH
 * ────────────────────────────────────────────────────────────────
 *
 * Add your IDs in `.env.local` (see `.env.example`).
 * Anything left blank is simply skipped — no errors.
 *
 * Scripts are injected into <head> at page load via initTracking()
 * (called from src/main.tsx).
 *
 * Search Console DNS / HTML-file verification does NOT go here —
 * Search Console meta-tag verification goes in `index.html` instead
 * (look for the <meta name="google-site-verification" …> placeholder).
 *
 * ──── Where do I get each ID? ───────────────────────────────────
 *   GA4_MEASUREMENT_ID ............ analytics.google.com  → Admin → Data Streams → "G-XXXXXXXXXX"
 *   GTM_CONTAINER_ID .............. tagmanager.google.com → "GTM-XXXXXXX" (optional, if you use GTM instead of / with GA)
 *   GOOGLE_ADS_CONVERSION_ID ...... ads.google.com        → Tools → Conversions → "AW-XXXXXXXXXX"
 *   META_PIXEL_ID ................. business.facebook.com → Events Manager → "123456789012345" (15-digit numeric)
 *   HOTJAR_SITE_ID ................ hotjar.com            → numeric site ID (optional)
 *   LINKEDIN_PARTNER_ID ........... linkedin.com campaign manager (optional)
 * ────────────────────────────────────────────────────────────────
 */

const prefer = (...values: Array<string | undefined>) =>
  values.find((value) => value?.trim())?.trim() ?? '';

export const TRACKING_IDS = {
  LEAD_WEBHOOK_URL: prefer(import.meta.env.VITE_LEAD_WEBHOOK_URL, ''), // e.g. 'https://n8n.example.com/webhook-test/...'
  GA4_MEASUREMENT_ID: prefer(import.meta.env.VITE_GA4_MEASUREMENT_ID, ''), // e.g. 'G-XXXXXXXXXX'
  GTM_CONTAINER_ID: prefer(import.meta.env.VITE_GTM_CONTAINER_ID, ''), // e.g. 'GTM-XXXXXXX'
  GOOGLE_ADS_CONVERSION_ID: prefer(import.meta.env.VITE_GOOGLE_ADS_CONVERSION_ID, ''), // e.g. 'AW-1234567890'
  GOOGLE_ADS_LEAD_SEND_TO: prefer(import.meta.env.VITE_GOOGLE_ADS_LEAD_SEND_TO, ''), // e.g. 'AW-1234567890/AbC-D_efG-h12_34-567'
  META_PIXEL_ID: prefer(import.meta.env.VITE_META_PIXEL_ID, ''), // e.g. '123456789012345'
  HOTJAR_SITE_ID: prefer(import.meta.env.VITE_HOTJAR_SITE_ID, ''), // e.g. '1234567'
  LINKEDIN_PARTNER_ID: prefer(import.meta.env.VITE_LINKEDIN_PARTNER_ID, ''), // e.g. '1234567'
};

// ──── Loader helpers (you shouldn't need to edit below) ────────

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
    hj?: (...args: unknown[]) => void;
    _hjSettings?: unknown;
    _linkedin_partner_id?: string;
    _linkedin_data_partner_ids?: string[];
  }
}

function injectScript(src: string, async = true): void {
  const s = document.createElement('script');
  s.src = src;
  s.async = async;
  document.head.appendChild(s);
}

function injectInline(code: string): void {
  const s = document.createElement('script');
  s.text = code;
  document.head.appendChild(s);
}

/** Google Analytics 4 (gtag.js) */
function initGA4(id: string) {
  injectScript(`https://www.googletagmanager.com/gtag/js?id=${id}`);
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) { window.dataLayer!.push(args); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', id);
}

/** Google Tag Manager */
function initGTM(id: string) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
  injectScript(`https://www.googletagmanager.com/gtm.js?id=${id}`);
}

/** Google Ads (uses gtag.js — shares with GA4 if both present) */
function initGoogleAds(id: string) {
  if (!window.gtag) {
    injectScript(`https://www.googletagmanager.com/gtag/js?id=${id}`);
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) { window.dataLayer!.push(args); }
    window.gtag = gtag;
    gtag('js', new Date());
  }
  window.gtag!('config', id);
}

/** Meta / Facebook Pixel */
function initMetaPixel(id: string) {
  injectInline(`
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
    document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${id}'); fbq('track', 'PageView');
  `);
}

/** Hotjar */
function initHotjar(id: string) {
  injectInline(`
    (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:${id},hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  `);
}

/** LinkedIn Insight */
function initLinkedIn(id: string) {
  window._linkedin_partner_id = id;
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
  window._linkedin_data_partner_ids.push(id);
  injectScript('https://snap.licdn.com/li.lms-analytics/insight.min.js');
}

/** Called once from main.tsx — runs every loader whose ID is set. */
export function initTracking(): void {
  const t = TRACKING_IDS;
  if (t.GA4_MEASUREMENT_ID)        initGA4(t.GA4_MEASUREMENT_ID);
  if (t.GTM_CONTAINER_ID)          initGTM(t.GTM_CONTAINER_ID);
  if (t.GOOGLE_ADS_CONVERSION_ID)  initGoogleAds(t.GOOGLE_ADS_CONVERSION_ID);
  if (t.META_PIXEL_ID)             initMetaPixel(t.META_PIXEL_ID);
  if (t.HOTJAR_SITE_ID)            initHotjar(t.HOTJAR_SITE_ID);
  if (t.LINKEDIN_PARTNER_ID)       initLinkedIn(t.LINKEDIN_PARTNER_ID);
}

/** Call this from any button handler to log a Google Ads conversion. */
export function trackAdsConversion(sendTo: string, value?: number, currency = 'INR') {
  if (!window.gtag) return;
  window.gtag('event', 'conversion', {
    send_to: sendTo,               // e.g. 'AW-1234567890/AbC-D_efG-h12_34-567'
    value: value ?? 1,
    currency,
  });
}

/** Call this from any button handler to log a Meta Pixel lead event. */
export function trackMetaLead(extra: Record<string, unknown> = {}) {
  if (!window.fbq) return;
  window.fbq('track', 'Lead', extra);
}

/** Lead event helper for form submits. Fires GA4, Meta, and optional Google Ads conversion. */
export function trackLeadSubmitted(extra: Record<string, unknown> = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'lead_submitted',
    ...extra,
  });

  if (window.gtag) {
    window.gtag('event', 'generate_lead', extra);

    if (TRACKING_IDS.GOOGLE_ADS_LEAD_SEND_TO) {
      trackAdsConversion(TRACKING_IDS.GOOGLE_ADS_LEAD_SEND_TO, 1);
    }
  }

  trackMetaLead(extra);
}
