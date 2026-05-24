# PIS Labs | Operational Intelligence & Venture Infrastructure System

Welcome to the official repository for the PIS Labs digital infrastructure.

PIS Labs is an operational intelligence and venture infrastructure company focused on helping SMEs identify operational bottlenecks, redesign scalable systems, and transform validated operational solutions into scalable ventures.

Instead of starting with assumptions, we begin with real operational problems discovered directly inside businesses.

**Live Website:** [PIS Labs](https://pis-labs.com)

---

## The PIS Labs Model

PIS Labs operates as a connected ecosystem built around three core functions:

**Consulting** → Discover operational bottlenecks  
**Workshops** → Train execution-focused talent  
**Studio** → Build scalable ventures from validated operational gaps

The system functions as a continuous intelligence loop:

**Consulting → Gap Discovery → Talent Execution → Venture Creation → Deployment**

---

## Core Thesis

Most SMEs do not fail because they lack ideas.

They struggle because:

- Their operations are fragmented
- Their workflows are reactive
- Their systems are manual and founder-dependent
- Their execution environments are difficult to scale

Most businesses do not even know where the real bottlenecks exist.

PIS Labs enters through operational consulting, maps these bottlenecks, designs scalable operational systems, and converts recurring patterns into scalable products and ventures.

---

## The Three Core Arms

### 1. Consulting Arm — Operational Intelligence

**Mission**

Help businesses identify operational bottlenecks, redesign execution systems, and implement scalable operational infrastructure.

This is not traditional consulting.

PIS Labs focuses on:

- Operational audits
- Workflow analysis
- Systems architecture
- AI workflow integration
- Operational transformation
- Execution infrastructure

**Operational Audit Philosophy**

We do not rely purely on surveys or assumptions.

We study:

- Communication flows
- Task dependencies
- Reporting systems
- Internal coordination structures
- Workflow breakdowns
- Execution bottlenecks

The goal is to identify:

- Hidden operational friction
- Repeatable inefficiencies
- Systemic scalability blockers

**Core Deliverables**

- Operational audit reports
- Workflow redesigns
- Systems architecture blueprints
- AI workflow recommendations
- Implementation strategies
- Operational transformation support

**Core Principle**

Consulting is the intelligence layer.

Every operational gap discovered becomes:

- A systems opportunity
- A tooling opportunity
- Or a venture opportunity

---

### 2. Workshops Arm — Talent & Execution Engine

**Mission**

Train operators and builders to work on real operational systems and venture infrastructure.

PIS Labs workshops are not tutorial-based learning environments.

They are execution-focused sprint systems built around real operational problems discovered through consulting engagements.

**Two Core Tracks**

**A. Operations Systems Track**

Participants learn:

- Operational auditing
- Bottleneck extraction
- Workflow mapping
- Systems thinking
- Operational architecture
- AI workflow planning

The focus is understanding how businesses actually function and identifying where scalable systems can be introduced.

**B. Product Engineering Track**

Participants learn:

- Internal tooling
- Automation systems
- AI-assisted infrastructure
- Workflow implementation
- Systems deployment
- Operational software engineering

The focus is building solutions for the operational gaps discovered during consulting.

**Workshop Model**

**Pre-Workshop Phase**

Participants are trained before sprint day.

**Sprint Day**

Business owners are invited for:

- Free operational audits
- Workflow diagnosis
- Operational assessments

**Execution Phase**

Participants work on:

- Operational mapping
- Systems recommendations
- Prototype implementation
- Internal venture tooling

**Talent Pipeline**

Top participants move into:

- Client implementation teams
- Internal product development
- Studio venture builds

---

### 3. Studio Arm — Venture Infrastructure

**Mission**

Transform validated operational bottlenecks into scalable ventures and operational products.

The Studio does not operate on random startup assumptions.

Every product originates from:

- Real operational problems
- Active implementation environments
- Repeatable business inefficiencies

**Venture Creation Pipeline**

Operational Audit  
        ↓  
Gap Identification  
        ↓  
Systems Architecture  
        ↓  
Prototype Development  
        ↓  
Operational Validation  
        ↓  
Venture/Product Creation

**Focus Areas**

- SME operational infrastructure
- Workflow systems
- AI-enabled operations
- Internal tooling
- Automation infrastructure
- Operational intelligence systems

---

## Operational Intelligence Flywheel

PIS Labs operates through a closed operational intelligence loop:

1. **Consulting**

Operational audits uncover hidden bottlenecks.

↓

2. **Intelligence Extraction**

Recurring operational patterns are identified.

↓

3. **Workshops**

Operators and engineers are trained to solve these problems.

↓

4. **Studio**

Validated solutions become scalable ventures.

↓

5. **Deployment**

Solutions are deployed back into businesses.

↓

6. **Intelligence Expansion**

New operational insights feed the next cycle.

---

## Current Focus

PIS Labs is currently focused on:

- SMEs in Nigeria
- Retail operations
- Scaling businesses with operational inefficiencies
- AI-assisted operational systems
- Workflow infrastructure

**Current Internal Products**

**Prism**

Internal operational tool currently active and approaching internal acquisition by a client.

**Acute**

Early-stage operational solution currently under development.

---

## Philosophy

### Operational Reality Over Startup Assumptions

Most startups begin with:

- Market assumptions
- Trend chasing
- Hypothetical user problems

PIS Labs begins with:

- Existing operational friction
- Validated execution bottlenecks
- Real implementation environments

---

## Tech Stack & Architecture

This application is built as a strict Monorepo to support scalable venture and infrastructure development.

**Core Stack**

- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Icons: Lucide React
- Validation: Zod
- Lead Capture: Next.js Server Actions
- Storage Layer: Google Sheets (temporary)
- Future Infrastructure: Supabase/Postgres
- Booking Engine: Calendly

---

## UI & Product Philosophy

The UI system prioritizes:

- Clarity over decoration
- Structure over noise
- Conversion over aesthetics

**Core principles:**

- Large typography
- Minimal navigation
- Card-based interactions
- Mobile-first execution
- Purple/Onyx design system
- Guided decision architecture

---

## Monorepo Structure

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

## Core Platform Principles

- No dead-end user flows
- Every page has one primary action
- Trust before conversion
- Operational clarity before capture
- Real implementation over hype
- Systems thinking over isolated tools

---

## Development Guide

### Branching Rules

Create branches from main only:

```sh
git checkout -b your-github-name
```

Update branch before working:

```sh
git checkout main
git pull
git checkout your-github-name
git merge main
```

### Important Rules

- Do not push directly to main
- Ensure clean commit history
- Do not introduce build errors
- Use the Next.js app directory only
- Do not install packages without approval

---

## Local Development

### Prerequisites

- Node.js 18+
- npm / pnpm / yarn / bun

### Installation

Clone repository:

```sh
git clone https://github.com/your-username/pis-labs.git
cd pis-labs
```

Install dependencies:

```sh
npm install
```

### Environment Variables

Inside apps/web/.env.local

```
NEXT_PUBLIC_GOOGLE_SHEETS_API_URL=your_url
GOOGLE_SCRIPT_URL=your_url
```

### Run Development Server

```sh
npm run dev
```

---

## Deployment

Optimized for deployment on Vercel

Deployment steps:

1. Push repository to GitHub
2. Import project into Vercel
3. Configure monorepo root
4. Add environment variables
5. Deploy

---

## Contact

- Website: [PIS Labs](https://pis-labs.com)
- Email: contact@pis-labs.com
- Community: [WhatsApp Channel](https://whatsapp.com/channel/0029VbCOWfn2ER6phFDY0k0J)
