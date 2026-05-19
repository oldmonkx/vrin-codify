---
name: landing-page-security
description: Ensure production-grade security and compliance for landing pages. Use this skill when auditing, implementing, or hardening landing pages to protect user data, secure API keys, and comply with privacy regulations.
license: Complete terms in LICENSE.txt
---

This skill ensures that high-converting landing pages are not only beautiful and fast but also secure and compliant. It focuses on protecting user trust through robust data handling, API security, and proactive vulnerability management.

## Security Core Pillars

Before deploying, audit the page against these essential security pillars:

### 1. API & Secret Management
- **Never Leak Keys**: Ensure that sensitive API keys (Gemini, Stripe, CRM) are NEVER exposed to the client-side bundle. 
- **Backend Proxies**: Use a secure server-side proxy (Express, Next.js API routes) to make sensitive API calls.
- **Environment Variables**: Use `.env` files for development and secure secret management in production (Vercel Secrets, etc.).

### 2. Data Privacy & Compliance
- **Consent First**: Implement explicit opt-in checkboxes for marketing consent (GDPR/CCPA compliance).
- **Privacy Policy**: Always include a visible link to a comprehensive Privacy Policy.
- **Data Minimization**: Only collect the fields strictly necessary for the lead generation goal.
- **Encrypted Storage**: Ensure captured leads are sent to a CRM or database that encrypts data at rest and in transit.

### 3. Form Integrity & Sanitization
- **Client-Side Validation**: Provide immediate feedback for user errors (phone format, email validity).
- **Server-Side Validation**: NEVER trust client inputs. Re-validate all data on the server before processing.
- **XSS Prevention**: Ensure all user inputs are sanitized and never rendered directly into the DOM using `dangerouslySetInnerHTML` without rigorous cleaning.
- **CSRF Protection**: Implement Cross-Site Request Forgery protection for all form submissions.

### 4. Infrastructure & Headers
- **SSL/TLS (HTTPS)**: Enforce HTTPS for all traffic.
- **Content Security Policy (CSP)**: Implement a strict CSP in `index.html` to prevent unauthorized script execution and clickjacking.
- **Subresource Integrity (SRI)**: Use SRI hashes for all external scripts (Google Analytics, Meta Pixel) to prevent supply-chain attacks.
- **HSTS**: Enable HTTP Strict Transport Security to ensure browsers only connect via HTTPS.

### 5. Dependency Hygiene
- **Regular Audits**: Run `npm audit` frequently and patch vulnerabilities immediately.
- **Version Pinning**: Use `package-lock.json` to ensure consistent and secure dependency trees.
- **Minimal Surface Area**: Remove unused dependencies to reduce the potential attack surface.

## Security Audit Checklist

| Component | Check | Priority |
|---|---|---|
| **API Keys** | Are secrets removed from `vite.config.ts` and `src`? | 🔴 Critical |
| **Dependencies** | Are there any high-severity vulnerabilities? | 🔴 Critical |
| **HTTPS** | Is SSL/TLS enabled and enforced? | 🔴 Critical |
| **Forms** | Is there explicit consent microcopy? | 🟡 High |
| **Headers** | Is a Content Security Policy (CSP) present? | 🟡 High |
| **Legal** | Is the Privacy Policy link functional? | 🟡 High |

**CRITICAL**: Security is as important as aesthetics. A beautiful landing page that leaks user data is a failure. Always prioritize the protection of lead information and API credentials.
