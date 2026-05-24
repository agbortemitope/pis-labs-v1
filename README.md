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

## Operational Intelligence Flywheel

PIS Labs operates through a **closed-loop, six-stage operational intelligence flywheel** that transforms raw business friction into scalable ventures:

### 1. **Consulting** (Operational Audit & Intelligence Discovery)
*Phase: Operational Audit & Intelligence Discovery*

PIS Labs enters organizations through operational consulting. By studying actual business procedures, communication flaws, task dependencies, and systems bottlenecks, we uncover core operational gaps that traditional analysis misses.

**Core Actions & Deliverables:**
- Map out active physical & digital workflows
- Expose structural friction and scalability blockers
- Isolate systemic, repeatable inefficiencies

**Inputs:** Unstructured business pain, raw workflows, founder dependency, disconnected tools.  
**Outputs:** Validated operational blockages, mapping reports, recurring problem profiles.

---

### 2. **Systems Strategy** (Strategic Architecture)
*Phase: Tactical Architecture & Scalability Blueprint*

Transform audit findings into a strategic roadmap. This phase crystallizes what can be systematized, what requires automation, and what should become a separate product.

**Core Focus:**
- Design scalable workflow structures
- Build metrics-driven process infrastructure
- Create strategic architectural blueprints for maximum leverage

---

### 3. **Product Engineering** (Execution & Prototyping)
*Phase: Tool & System Development*

Engineers execute the strategic blueprint by building custom automation layers, internal software systems, and AI infrastructure pipelines to address the structural friction identified.

**Core Focus:**
- Develop hands-on tools and custom automation
- Build internal software systems and integration layers
- Create AI-powered infrastructure to bridge operational gaps

---

### 4. **Studio** (Venture Development & Productization)
*Phase: Venture Development & Scale*

Transforms validated operational strategies into standardizable, scalable SaaS products, operational layers, and standalone high-growth ventures.

**Productization Pipeline:**
- Package repetitive service fixes into modular software products
- Develop automation dashboards and tailored API integrations
- Slice proven patterns into venture-backed entities or enterprise SaaS offerings

---

### 5. **Deployment** (Go-to-Market & Client Activation)
*Phase: Production Rollout & Integration*

Launch engineered solutions into market and client systems. Feed products back to client bases and activate new revenue streams.

**Core Actions:**
- Deploy to production environments
- Establish client training and adoption pipelines
- Create ongoing support and optimization loops

---

### 6. **Expansion** (Intelligence Amplification & Cycle Restart)
*Phase: Intelligence Multiplication & Ecosystem Growth*

Deployment generates massive operational intelligence. Feed back into consulting to discover new patterns and scale the entire flywheel.

**Core Actions:**
- Capture new operational intelligence from deployed systems
- Identify emerging patterns across client base
- Restart cycle with amplified intelligence
- Build ecosystem network effects

---

## The Three Interconnected Arms

### **1. Consulting Arm** — *Discovery & Operational Intelligence*

**Mission:** Not a traditional consulting agency. Focuses exclusively on mapping workflows, identifying bottlenecks, and extracting repeatable problem patterns across diverse organizations.

**Core Sub-Functions:**
- **Operational Audits:** Deep study of communication channels, reporting loops, task pipelines, and coordination failures.
- **Systems Architecture:** Designing scalable workflows, automated structures, and metrics-driven process infrastructure.
- **Intelligence Extraction:** Isolating bottlenecks that appear frequently across multiple companies to design modular solutions.

**Approach:** Audit & Extract  
**Deliverables:** Problem maps, friction reports, repeatable pattern frameworks

---

### **2. Workshops Arm** — *Talent & Execution Pipelines*

**Mission:** Replaces static academic learning with rigorous execution-focused sprint challenges built entirely around real operational problems discovered in Consulting.

**Execution Tracks:**
- **Venture Operations Track:** Equips builders to analyze operational loopholes, architect complex systems, map workflow trees, and formulate recommendations.
- **Venture Build Track:** Develops hands-on tools, custom automation layers, internal software systems, and AI infrastructure pipelines to address structural friction.
- **Talent Engine:** The highest-performing operators are filtered and injected directly into Studio venture construction pipelines.

**Approach:** Learn by Doing  
**Deliverables:** Trained talent, prototype solutions, foundational systems

---

### **3. Studio Arm** — *Venture Development & Scale*

**Mission:** Transforms validated operational strategies into standardizable, scalable SaaS products, operational layers, and standalone high-growth ventures.

**Productization Pipeline:**
- **Productization Standard:** Packaging repetitive custom service fixes into modular software products, automation dashboards, and tailored API integrations.
- **Venture Development:** Slicing proven tooling patterns out as individual, venture-backed entities or enterprise SaaS offerings.
- **The Deployment Loop:** Feeding products back to client bases, generating massive operational intelligence, and starting the cycle again.

**Approach:** Productize & Scale  
**Deliverables:** SaaS products, venture entities, scalable operational systems

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

## Dev Guide (please make sure you follow all instructions)

- Make your pull request to the `main` branch only
- Create your branch from the `main` branch (this happens only the first time you clone the repo)

  ```sh
    git checkout -b --your-github-name
  ```

- Update your branch before working on any task

  ```sh
    git checkout main
    git pull
    git checkout --your-github-name
    git merge main
  ```
- You're not allowed to push the `main` except your branch

  ```sh
    git push --your-github-name
  ```
- Ensure you have a good commit message
- Make sure you do not push a dev | build error
- Do not create a `pages` folder as we are working with the `app` folder
- You're not allowed to install any npm package without informing @pelumiogunremu | @trinitycodez

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

### Creating a component

- your folder name must be in lowercase `progress-bar` and your file name must be `index.tsx`
- if needed your scss name must be `index.module.scss`
- temaplate example:

  ```tsx
  import { FC } from "react";

  type Props = {
    length: string;
  };

  const ProgressBar: FC<Props> = ({ length }) => {
    return <div className="app-container">{length}</div>;
  };

  export default ProgressBar;
  ```

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
