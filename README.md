# PIS Labs | Applied AI Venture Studio 

Welcome to the official repository for the **PIS Labs** digital infrastructure.

PIS Labs is an **Applied AI Venture Studio** based in Nigeria. We build scalable, API-first digital systems and production-grade software by leveraging AI as an execution multiplier and systems architect.

**Live Website:** [pis-labs.com](https://pis-labs.com)

---

## The Venture Studio Model

Unlike traditional agencies or accelerators, every project built at PIS Labs generates three distinct, mandatory outputs:

1. **Research (Authority):** Applied AI papers, technical case studies, and system performance analyses.
2. **Build (Utility):** Production-grade software systems (not just prototypes), scalable architectures, and real-world MVPs.
3. **Distribute (Community):** Engineered growth systems, feedback loops, and tight early-adopter WhatsApp communities.

### The AI-Leveraged Philosophy
PIS Labs operates without large, bloated engineering teams. By leveraging advanced AI models as a development engine and systems architect, we achieve massive execution multiplication, building scalable systems end-to-end with unprecedented speed.

---

## Tech Stack & Architecture

This application is built as a strict **Monorepo** to ensure scalability as the studio launches new products (e.g., `apps/web` for the studio site, `apps/credturn` for future SaaS products).

*   **Framework:** Next.js (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS (Mobile-first, strict iOS/Apple HIG aesthetic)
*   **Icons:** Lucide React
*   **Headless CMS:** Google Sheets API (via Google Apps Script)
*   **Lead Capture:** Next.js Serverless API Routes -> Google Apps Script
*   **Booking Engine:** Calendly Integration
*   **Design System:** Premium Glassmorphism

### The UI Philosophy
The UI rejects "developer brutalism" in favor of a high-end, consumer-grade aesthetic tailored for B2B executives and founders:

*   **Deep Dark Mode:** Pure blacks (`bg-black`) and frosted glass (`backdrop-blur-2xl`, `bg-white/[0.02]`).
*   **Soft Geometry:** Complete elimination of sharp corners (`rounded-3xl`, pill-shaped buttons).
*   **Ambient Depth:** Fading technical grid backgrounds layered with ultra-blurred, low-opacity glowing orbs and floating crosshairs.
*   **Frictionless UX:** Invisible scrolling on mobile, tactile active click states (`active:scale-[0.98]`), and optimized lazy loading.

---

## Monorepo Folder Structure

```text
pis-labs/
├── apps/
│   └── web/                      # Main PIS Labs Next.js Application
│       ├── public/               # Static assets
│       ├── src/
│       │   ├── app/              # Next.js App Router (Orchestration & Routing)
│       │   │   ├── api/          # Serverless Route Handlers (e.g., /subscribe)
│       │   │   ├── research/     # Dynamic Case Study Pages ([slug])
│       │   │   ├── layout.tsx    # Global Layout & Metadata
│       │   │   └── page.tsx      # Main Landing Page Entry
│       │   ├── components/       # Isolated, reusable UI Components
│       │   │   ├── Hero.tsx
│       │   │   ├── TheModel.tsx
│       │   │   ├── Ventures.tsx
│       │   │   └── BackgroundEffects.tsx
│       │   └── lib/              # Utilities and Data fetching logic
│       ├── package.json
│       └── tailwind.config.ts
├── package.json                  # Root Monorepo configuration
└── README.md
```

---

## Core Features

### 1. Zero-Friction Headless CMS (Google Sheets)
To optimize for solo-founder speed, the `Ventures` component dynamically fetches live project data directly from a secured Google Sheet using a custom Apps Script `doGet` API. Adding a new project to the website takes 60 seconds and requires zero code deployment.

### 2. Automated Sales Funnel
Integrated Calendly widget allows B2B clients, SMEs, and micro-lenders to instantly book high-ticket "AI Discovery & Strategy Sessions" directly from the navigation bar.

### 3. Secure Lead Capture
The "Join the Ecosystem" CTA routes emails through a secure Next.js API endpoint (`/api/subscribe/route.ts`), which acts as a proxy to append data to a Google Sheet, bypassing frontend CORS issues and hiding the macro script URL.

---

## Getting Started (Local Development)

### Prerequisites
*   Node.js 18.x or higher
*   npm, yarn, pnpm, or bun

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/pis-labs.git
    cd pis-labs
    ```

2.  **Install dependencies at the root (Monorepo setup):**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**
    Navigate to the web app and create a `.env.local` file:
    ```bash
    cd apps/web
    touch .env.local
    ```

4.  **Add the following variables:**
    ```env
    # Used for fetching dynamic venture data (doGet)
    NEXT_PUBLIC_GOOGLE_SHEETS_API_URL=your_google_script_web_app_url_here

    # Used for securely posting emails (doPost)
    GOOGLE_SCRIPT_URL=your_google_script_web_app_url_here
    ```

5.  **Run the Development Server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Deployment

This repository is optimized for deployment on **Vercel**.

1.  Push your code to GitHub.
2.  Import the repository into your Vercel dashboard.
3.  Ensure the **Root Directory** is set to `apps/web` (or let Vercel auto-detect the monorepo).
4.  Add the Environment Variables (`NEXT_PUBLIC_GOOGLE_SHEETS_API_URL` and `GOOGLE_SCRIPT_URL`) in the Vercel project settings.
5.  Deploy.

---

## Contact & Community

*   **Email:** [contact@pis-labs.com](mailto:contact@pis-labs.com)
*   **Community:** [Join the WhatsApp Channel](https://whatsapp.com/channel/0029VbCOWfn2ER6phFDY0k0J)
*   **Consulting:** [Schedule an AI Discovery Session](https://calendly.com/pis-labs/30min)

© 2026 PIS Labs. All rights reserved.
