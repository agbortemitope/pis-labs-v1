# PIS Labs | Operational Intelligence and Venture Studio

PIS Labs is an operational intelligence and venture studio focused on helping businesses identify operational bottlenecks, implement scalable systems, and transform validated solutions into scalable ventures.

We operate at the intersection of:

- Operational Consulting
- Systems Design
- Applied AI
- Venture Development
- Talent Execution

Our model is built around one core belief:

**Many businesses are not limited by ideas — they are limited by weak operational systems.**

Instead of building random startups disconnected from real market problems, PIS Labs works directly with businesses to uncover operational friction, architect scalable solutions, and develop repeatable systems that can evolve into products and ventures.

**Website:** [PIS Labs](https://pis-labs.com)

---

## What We Do

### 1. Consulting

We work with SMEs and growing businesses to:

- Conduct operational audits
- Identify workflow bottlenecks
- Map execution gaps
- Design scalable operational systems
- Support implementation and optimization

Our focus is operational clarity, scalability, and execution infrastructure.

---

### 2. Workshops

PIS Labs runs execution-focused workshops designed around real operational problems discovered during consulting engagements.

The workshops are structured into two tracks:

**Operational Systems Track**

Participants learn how to:

- Conduct operational audits
- Identify system loopholes
- Map workflows
- Design operational structures
- Recommend scalable solutions

**Product Engineering Track**

Participants focus on:

- Building internal tools
- Developing automation systems
- Creating AI-assisted workflows
- Engineering scalable software infrastructure

Top participants may later contribute to live internal projects and venture builds.

---

### 3. Studio

The Studio arm develops scalable solutions based on validated operational problems identified during consulting engagements.

Rather than building speculative products, we focus on:

- Repeatable operational gaps
- Proven implementation needs
- Workflow infrastructure
- AI-assisted operational systems

The goal is to transform validated business problems into scalable ventures and infrastructure products.

---

## Core Philosophy

PIS Labs is built on:

- **Clarity over hype**
- **Systems over survival**
- **Execution over theory**
- **Validation before scale**

We believe scalable businesses are built on strong operational foundations — not reactive execution.

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Backend Integrations:** Google Apps Script / Google Sheets
- **Validation:** Zod
- **Deployment:** Vercel

---

## Repository Structure

```
pis-labs/
├── apps/
│   └── web/
│       ├── public/
│       ├── src/
│       │   ├── app/
│       │   ├── components/
│       │   ├── lib/
│       │   └── styles/
│       ├── package.json
│       └── tailwind.config.ts
├── package.json
└── README.md
```

---

## Development Guidelines

### Branching

Create your branch from main.

```sh
git checkout -b your-github-name
```

### Before Working

Always sync with the latest version of main.

```sh
git checkout main
git pull
git checkout your-github-name
git merge main
```

### Rules

- Do not push directly to main
- Use meaningful commit messages
- Ensure builds pass before pushing
- Use the Next.js app directory (not pages)
- Do not install new packages without approval

---

## Local Development

### Prerequisites

- Node.js 18+
- npm / pnpm / yarn / bun

### Installation

Clone the repository:

```sh
git clone https://github.com/your-username/pis-labs.git
cd pis-labs
```

Install dependencies:

```sh
npm install
```

Create environment variables:

```sh
cd apps/web
touch .env.local
```

Add required variables:

```
NEXT_PUBLIC_GOOGLE_SHEETS_API_URL=your_url
GOOGLE_SCRIPT_URL=your_url
```

Run development server:

```sh
npm run dev
```

Visit:

```
http://localhost:3000
```

---

## Deployment

This project is optimized for deployment on Vercel.

Steps:

1. Push code to GitHub
2. Import repository into Vercel
3. Configure environment variables
4. Deploy

---

## Contact

- **Website:** [PIS Labs](https://pis-labs.com)
- **Email:** contact@pis-labs.com
