# Developer Documentation

Welcome to the **Vrindavan by Namishree** landing page codebase. This document outlines the project setup, directory structure, configurations, and deployment guidelines for future developers.

---

## 🛠️ Technology Stack
*   **Framework:** React 19 (SPA)
*   **Build Tool:** Vite 6
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS v4 (with Vite plugin integration)
*   **Animations:** Motion (formerly Framer Motion)

---

## 🚀 Local Development Setup

### 1. Prerequisite
Ensure you have **Node.js** (v18+ recommended) and **npm** installed on your system.

### 2. Installation
Install the project dependencies:
```bash
npm install
```

### 3. Running Development Server
Start the development server with Hot Module Replacement (HMR) enabled:
```bash
npm run dev
```
By default, the application runs at `http://localhost:3000`.

---

## 📦 Production Builds & Image Optimization

### 1. Build Command
To compile the project into optimized static assets:
```bash
npm run build
```
This outputs all final files into the `dist/` folder at the root.

### 2. Automated Image Optimizer
The project is configured with `vite-plugin-image-optimizer` (which runs on top of **Sharp** and **SVGO**).
*   **Vite Configuration:** [vite.config.ts](file:///d:/code/vrindsvsn/vite.config.ts)
*   **Compression Quality:** Set to **85** for PNG, JPEG, JPG, and WebP assets to ensure visually lossless high-DPI quality on Retina/4K displays while reducing file sizes by up to 80%+.
*   **Usage:** Any image you drop in the `public/` directory (e.g., inside `public/optimized/`) is automatically resized and compressed during the build step. No manual image pre-compression script is required.

---

## ⚙️ Project Configurations

### 1. Lead Capture Form (`n8n` Webhook)
*   Form submissions are managed by `submitLead` in [leadCapture.ts](file:///d:/code/vrindsvsn/src/leadCapture.ts).
*   It submits lead payloads to the webhook URL configured via the environment variable `VITE_LEAD_WEBHOOK_URL`.
*   **Configuration Files:** `.env.production` (and `.env.local` for testing).
*   **Important:** Vite injects variables at build-time. You must update `.env.production` **before** running `npm run build` for changes to take effect in production.

### 2. Marketing Tracking
*   **Google Tag Manager (GTM)** and **Meta Pixel** scripts are loaded immediately in [index.html](file:///d:/code/vrindsvsn/index.html) to guarantee 100% ad attribution.
*   Other tracking integrations can be configured dynamically via `VITE_` variables inside [tracking.ts](file:///d:/code/vrindsvsn/src/tracking.ts).

### 3. SEO & Structured Schema Data
*   **Metadata:** Title tags and meta descriptions are set in [index.html](file:///d:/code/vrindsvsn/index.html).
*   **Google Search Rich Snippet:** A JSON-LD schema graph representing `ApartmentComplex` and `RealEstateAgent` is embedded in the `<head>` of [index.html](file:///d:/code/vrindsvsn/index.html) to display structured snippet details on Google Search.

---

## 🌐 Manual Hostinger Deployment

Since Hostinger Shared Hosting does not build Node projects dynamically, you must compile it locally and upload it:

1.  Set the production environment variables in `.env.production`.
2.  Run the build command locally:
    ```bash
    npm run build
    ```
3.  Open the compiled `dist/` folder. Select all files **inside** `dist/` (`index.html`, `thank-you.html`, `assets/`, `optimized/`) and compress them into a `build.zip`.
4.  Log into your **Hostinger hPanel** ➔ **File Manager**.
5.  Navigate to your subdomain directory (usually `public_html/subdomain-name/`).
6.  Delete any Hostinger default files (like `default.php`).
7.  Upload `build.zip` and **Extract** it directly into the subdomain root directory.
8.  Delete `build.zip` when done.
