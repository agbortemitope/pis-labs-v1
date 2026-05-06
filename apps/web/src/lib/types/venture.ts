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
