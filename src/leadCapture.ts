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

  // Submit to Realx CRM if configured
  const crmUrl = import.meta.env.VITE_REALX_CRM_API_URL;
  if (crmUrl) {
    try {
      const crmPayload = {
        business_group: import.meta.env.VITE_REALX_CRM_BUSINESS_GROUP || 'NAMISHREE',
        source: import.meta.env.VITE_REALX_CRM_SOURCE || 'Website',
        source_id: import.meta.env.VITE_REALX_CRM_SOURCE_ID || '1',
        key: import.meta.env.VITE_REALX_CRM_KEY || 'p3EasMX8M8qe7VU8yZdF',
        project_name: import.meta.env.VITE_REALX_CRM_PROJECT_NAME || 'Namishree Vrindavan',
        lead_name: name.trim(),
        primary_email: '',
        primary_phone: normalizedPhone,
        lead_comment: `Lead submitted via ${formTitle} form on Landing Page.`,
      };

      const crmResponse = await fetch(crmUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(crmPayload),
      });

      if (!crmResponse.ok) {
        console.error(`Realx CRM submission returned status ${crmResponse.status}`);
      }
    } catch (crmError) {
      console.error('Failed to submit to Realx CRM:', crmError);
    }
  }

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
