/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LEAD_WEBHOOK_URL?: string;
  readonly VITE_GA4_MEASUREMENT_ID?: string;
  readonly VITE_GTM_CONTAINER_ID?: string;
  readonly VITE_GOOGLE_ADS_CONVERSION_ID?: string;
  readonly VITE_GOOGLE_ADS_LEAD_SEND_TO?: string;
  readonly VITE_META_PIXEL_ID?: string;
  readonly VITE_HOTJAR_SITE_ID?: string;
  readonly VITE_LINKEDIN_PARTNER_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
