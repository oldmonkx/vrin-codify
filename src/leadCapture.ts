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
const REALX_CRM_DEFAULTS = {
  businessGroup: 'NAMISHREE',
  source: 'Website',
  sourceId: '1',
  key: 'p3EasMX8M8qe7VU8yZdF',
  projectName: 'Namishree Vrindavan',
};

function envOrDefault(value: string | undefined, fallback: string) {
  return value || fallback;
}

function getLeadWebhookUrl() {
  return TRACKING_IDS.LEAD_WEBHOOK_URL;
}

function buildThankYouUrl({ formTitle, entryPoint }: ThankYouRedirectInput) {
  const thankYouUrl = new URL(THANK_YOU_PAGE_PATH, window.location.origin);
  thankYouUrl.searchParams.set('form', formTitle);
  thankYouUrl.searchParams.set('source', entryPoint);
  return thankYouUrl.toString();
}

export function redirectToThankYou(details: ThankYouRedirectInput) {
  window.location.assign(buildThankYouUrl(details));
}

function normalizePhone(phone: string) {
  return phone.replace(/\D/g, '').slice(0, 10);
}

function buildLeadPayload({
  name,
  phone,
  formTitle,
  source,
  extra,
}: Required<SubmitLeadInput>) {
  const normalizedPhone = normalizePhone(phone);
  return {
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
}

function getRealxCrmConfig() {
  const {
    businessGroup,
    source,
    sourceId,
    key,
    projectName,
  } = REALX_CRM_DEFAULTS;

  return {
    businessGroup: envOrDefault(import.meta.env.VITE_REALX_CRM_BUSINESS_GROUP, businessGroup),
    source: envOrDefault(import.meta.env.VITE_REALX_CRM_SOURCE, source),
    sourceId: envOrDefault(import.meta.env.VITE_REALX_CRM_SOURCE_ID, sourceId),
    key: envOrDefault(import.meta.env.VITE_REALX_CRM_KEY, key),
    projectName: envOrDefault(import.meta.env.VITE_REALX_CRM_PROJECT_NAME, projectName),
  };
}

function buildRealxCrmPayload({ name, phone, formTitle }: SubmitLeadInput) {
  const { businessGroup, source, sourceId, key, projectName } = getRealxCrmConfig();

  return {
    business_group: businessGroup,
    source,
    source_id: sourceId,
    key,
    project_name: projectName,
    lead_name: name.trim(),
    primary_email: '',
    primary_phone: normalizePhone(phone),
    lead_comment: `Lead submitted via ${formTitle} form on Landing Page.`,
  };
}

async function postJson(url: string, body: Record<string, unknown>) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

async function submitToRealxCrm(lead: SubmitLeadInput) {
  const crmUrl = import.meta.env.VITE_REALX_CRM_API_URL;
  if (!crmUrl) return;

  try {
    const response = await postJson(crmUrl, buildRealxCrmPayload(lead));

    if (!response.ok) {
      console.error(`Realx CRM submission returned status ${response.status}`);
    }
  } catch (crmError) {
    console.error('Failed to submit to Realx CRM:', crmError);
  }
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

  const payload = buildLeadPayload({ name, phone, formTitle, source, extra });

  await submitToRealxCrm({ name, phone, formTitle, source, extra });

  const response = await postJson(webhookUrl, payload);
  if (!response.ok) throw new Error(`Lead webhook returned ${response.status}`);

  trackLeadSubmitted({
    form_title: formTitle,
    page_path: window.location.pathname,
    ...extra,
  });

  return payload;
}
