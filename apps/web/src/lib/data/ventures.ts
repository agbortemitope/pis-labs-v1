export interface Venture {
  id: string;
  title: string;
  description: string;
  stage: string;
  techStack: string[];
  thumbnail?: string; 
  codeMockup?: {      
    endpoint: string;
    response: string;
  };
  links: {
    research: string;   
    build: string;      
    distribute: string; // -> WhatsApp Community Link
  };
}

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

export async function getVentures(): Promise<Venture[]> {
  const url = process.env.GOOGLE_SHEETS_API_URL;
  if (!url) {
    console.warn('[PIS Labs System]: GOOGLE_SHEETS_API_URL is missing. Falling back to static data.');
    return venturesData;
  }

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(`CMS returned status ${res.status}`);
    const data = await res.json();
    
    // Assuming the Apps Script returns { status: "success", data: Venture[] } or a direct Array
    const parsedData = data.data || data;
    
    if (Array.isArray(parsedData) && parsedData.length > 0) {
      return parsedData as Venture[];
    }
    
    // Fallback if data format isn't what we expect
    return venturesData;
  } catch (error) {
    console.error('[PIS Labs System Error]: Failed to fetch from Google Sheets CMS:', error);
    return venturesData; // Fallback to avoid crashing the app
  }
}
