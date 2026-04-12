import React from 'react';
import { ArrowUpRight, Code2, BookOpen, Terminal, Users, Loader2 } from 'lucide-react';
import { venturesData } from '@/lib/data/ventures';
import { ToastButton } from '@/components/ToastButton';

interface Venture {
  id: string;
  title: string;
  description: string;
  stage: string;
  techStack: string[];
  codeMockup: { endpoint: string; response: string } | null;
  links: { research: string; build: string; distribute: string };
}

async function getVentures(): Promise<Venture[]> {
  const url = process.env.GOOGLE_SHEETS_API_URL;
  
  if (!url) {
    console.warn('[PIS Labs System]: GOOGLE_SHEETS_API_URL not configured. Falling back to local data.');
    return venturesData as Venture[];
  }

  try {
    const res = await fetch(url, { next: { revalidate: 60 } });
    
    if (!res.ok) {
      console.warn('[PIS Labs System]: Failed to fetch ventures from API. Falling back to local data.');
      return venturesData as Venture[];
    }
    
    const data = await res.json();
    
    if (data.error) {
      console.warn(`[PIS Labs System]: API Error: ${data.error}. Falling back to local data.`);
      return venturesData as Venture[];
    }
    
    return data;
  } catch (error) {
    console.warn('[PIS Labs System]: Network error fetching ventures. Falling back to local data.', error);
    return venturesData as Venture[];
  }
}

export const Ventures = async () => {
  let ventures: Venture[] = [];
  let error = false;

  try {
    ventures = await getVentures();
  } catch (e) {
    console.error('[PIS Labs System Error]: Critical failure loading ventures', e);
    error = true;
  }

  return (
    <section id="ventures" className="w-full py-24 px-6 border-t border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4 transition-colors duration-300">
              Current Ventures
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 max-w-xl leading-relaxed transition-colors duration-300">
              We build SaaS products, financial infrastructure tools, and AI-powered systems optimized for real-world utility.
            </p>
          </div>
          <ToastButton href="#" toastMessage="All projects page coming soon." className="text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-black dark:hover:text-white flex items-center transition-colors bg-black/[0.05] dark:bg-white/[0.05] hover:bg-black/[0.08] dark:hover:bg-white/[0.08] px-5 py-2.5 rounded-full border border-black/10 dark:border-white/10 active:scale-[0.98]">
            View All Projects <ArrowUpRight className="w-4 h-4 ml-1" />
          </ToastButton>
        </div>

        {error ? (
          <div className="w-full p-12 rounded-3xl border border-black/5 dark:border-white/10 bg-zinc-50 dark:bg-[#1C1C1E] shadow-sm dark:shadow-[0_0_40px_rgba(255,255,255,0.02)] flex flex-col items-center justify-center min-h-[300px] transition-colors duration-300">
            <Loader2 className="w-8 h-8 text-zinc-400 dark:text-zinc-500 animate-spin mb-4" />
            <p className="text-zinc-500 dark:text-zinc-400 font-medium animate-pulse">System updating ventures...</p>
          </div>
        ) : (
          <div className="space-y-12">
            {ventures.map((venture) => (
              <div key={venture.id} className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-black/5 dark:border-white/10 rounded-3xl overflow-hidden bg-zinc-50 dark:bg-[#1C1C1E] shadow-sm dark:shadow-[0_0_40px_rgba(255,255,255,0.02)] transition-colors duration-300">
                
                {/* Project Details */}
                <div className="p-6 sm:p-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-black/5 dark:border-white/5 relative z-10 transition-colors duration-300">
                  <div className="inline-flex items-center rounded-full bg-black/[0.05] dark:bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 mb-6 w-fit border border-black/5 dark:border-white/10 backdrop-blur-md transition-colors duration-300">
                    {venture.stage}
                  </div>
                  <h3 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-3 transition-colors duration-300">{venture.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed transition-colors duration-300">
                    {venture.description}
                  </p>
                  
                  <div className="space-y-6">
                    {/* Tech Stack */}
                    <div className="flex items-center text-sm text-zinc-500 dark:text-zinc-400 font-mono transition-colors duration-300">
                      <Code2 className="w-4 h-4 mr-3 text-zinc-400" />
                      {venture.techStack.join(" / ")}
                    </div>

                    {/* Core Output Links */}
                    <div className="flex flex-wrap gap-3 pt-6 border-t border-black/5 dark:border-white/5 transition-colors duration-300">
                      <ToastButton href={venture.links.research} toastMessage="Research compiling. Coming soon." className="flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white bg-black/[0.05] dark:bg-white/[0.05] hover:bg-black/[0.08] dark:hover:bg-white/[0.08] border border-black/10 dark:border-white/10 px-4 py-2 rounded-full transition-all active:scale-[0.98]">
                        <BookOpen className="w-4 h-4 text-zinc-500 dark:text-zinc-400" /> Case Study
                      </ToastButton>
                      <a href={venture.links.build} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 bg-black dark:bg-zinc-100 border border-transparent px-4 py-2 rounded-full transition-all active:scale-[0.98] shadow-md dark:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        <Terminal className="w-4 h-4" /> Live Product
                      </a>
                      <a href={venture.links.distribute} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white bg-black/[0.05] dark:bg-white/[0.05] hover:bg-black/[0.08] dark:hover:bg-white/[0.08] border border-black/10 dark:border-white/10 px-4 py-2 rounded-full transition-all active:scale-[0.98]">
                        <Users className="w-4 h-4 text-zinc-500 dark:text-zinc-400" /> Community
                      </a>
                    </div>
                  </div>
                </div>

                {/* Visual Presentation (Code Mockup or Thumbnail) */}
                <div className="bg-black/[0.02] dark:bg-black/40 p-8 flex items-center justify-center relative overflow-hidden transition-colors duration-300">
                  {/* Decorative background element inside mockup area */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-black/5 dark:bg-white/5 rounded-full blur-3xl pointer-events-none transition-colors duration-300"></div>

                  {venture.codeMockup ? (
                    // Render Code Editor for API-first showcases (macOS style)
                    <div className="w-full rounded-2xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/60 shadow-xl dark:shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur-2xl font-mono text-xs sm:text-sm relative z-10 transition-colors duration-300">
                      <div className="flex items-center px-4 py-3 border-b border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] transition-colors duration-300">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/10 dark:border-white/10"></div>
                          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/10 dark:border-white/10"></div>
                          <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/10 dark:border-white/10"></div>
                        </div>
                        <div className="ml-4 text-zinc-500 dark:text-zinc-400 text-xs font-medium transition-colors duration-300">{venture.codeMockup.endpoint}</div>
                      </div>
                      <div className="p-6 text-zinc-700 dark:text-zinc-300 overflow-x-auto no-scrollbar leading-relaxed transition-colors duration-300">
                        <pre><code className="transition-colors duration-300">{(() => {
                          try {
                            // Attempt to parse and pretty-print if it's valid JSON
                            const parsed = JSON.parse(venture.codeMockup.response);
                            return JSON.stringify(parsed, null, 2);
                          } catch (e) {
                            // Fallback: handle literal \n strings or return as-is
                            return venture.codeMockup.response.replace(/\\n/g, '\n');
                          }
                        })()}</code></pre>
                      </div>
                    </div>
                  ) : (
                    // Render Standard Thumbnail if no code mockup exists
                    <div className="w-full aspect-video rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-xl dark:shadow-[0_0_40px_rgba(0,0,0,0.5)] bg-white/80 dark:bg-black/60 backdrop-blur-xl relative z-10 flex items-center justify-center text-zinc-500 transition-colors duration-300">
                       <span className="text-sm font-mono">// Visual Asset Required</span>
                    </div>
                  )}
                </div>
                
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
