import { TRACKING_IDS, trackLeadSubmitted } from './tracking';

export interface SubmitLeadInput {
  name: string;
  phone: string;
  formTitle: string;
  source?: string;
  extra?: Record<string, unknown>;
}

export interface ThankYouRedirectInput {
  formTitle: string;
  entryPoint: string;
}

const THANK_YOU_PAGE_PATH = '/thank-you.html';

export function getLeadWebhookUrl() {
  return TRACKING_IDS.LEAD_WEBHOOK_URL;
}

export function buildThankYouUrl({ formTitle, entryPoint }: ThankYouRedirectInput) {
  const thankYouUrl = new URL(THANK_YOU_PAGE_PATH, window.location.origin);
  thankYouUrl.searchParams.set('form', formTitle);
  thankYouUrl.searchParams.set('source', entryPoint);
  return thankYouUrl.toString();
}

export function redirectToThankYou(details: ThankYouRedirectInput) {
  window.location.assign(buildThankYouUrl(details));
}

export async function submitLead({
  name,
  phone,
  formTitle,
  source = 'vrindavan-statified-landing-page',
  extra = {},
}: SubmitLeadInput) {
  const webhookUrl = getLeadWebhookUrl();

  if (!webhookUrl) {
    throw new Error('Lead capture is not configured yet. Add the n8n webhook URL first.');
  }

  const normalizedPhone = phone.replace(/\D/g, '').slice(0, 10);

  const payload = {
    name: name.trim(),
    phone: normalizedPhone,
    phoneWithCountryCode: `+91${normalizedPhone}`,
    countryCode: '+91',
    source,
    formTitle,
    pageUrl: window.location.href,
    pagePath: window.location.pathname,
    submittedAt: new Date().toISOString(),
    userAgent: navigator.userAgent,
    ...extra,
  };

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Lead webhook returned ${response.status}`);
  }

  trackLeadSubmitted({
    form_title: formTitle,
    page_path: window.location.pathname,
    ...extra,
  });

  return payload;
}
