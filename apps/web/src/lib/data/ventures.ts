import { Venture } from "@/lib/types/venture";

export const venturesData: Venture[] = [
  {
    id: "credturn-01",
    title: "CredTurn",
    description: "A scalable credit and financial infrastructure product. Built as a core case study for applied AI in fintech, designed with a modular, API-first architecture.",
    stage: "MVP Stage",
    techStack: ["Next.js", "Node.js", "PostgreSQL"],
    codeMockup: {
      endpoint: "GET /api/v1/credturn/score",
      response: `{\n  "status": "success",\n  "data": {\n    "userId": "usr_9a8b7c6d",\n    "creditProfile": {\n      "score": 742,\n      "riskTier": "low"\n    }\n  }\n}`
    },
    links: {
      research: "/research/credturn",
      build: "https://credturn.com",
      distribute: "https://chat.whatsapp.com/YOUR_CREDTURN_COMMUNITY_LINK" // Specific Project Community
    }
  }
];
