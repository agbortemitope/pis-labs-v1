import React from 'react';
import { Layers, Zap, Cpu } from 'lucide-react';

export const FounderPhilosophy = () => {
  return (
    <section id="research" className="w-full py-24 px-6 border-t border-black/5 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
      {/* Subtle background element */}
      <div className="absolute -left-40 top-20 w-96 h-96 bg-black/5 dark:bg-white/5 rounded-full blur-[100px] pointer-events-none transition-colors duration-300"></div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text & Philosophy */}
        <div className="space-y-8 z-10">
          <div>
            <div className="inline-flex items-center rounded-full border border-black/10 dark:border-white/10 bg-black/[0.05] dark:bg-white/[0.05] px-4 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 mb-6 backdrop-blur-md transition-colors duration-300">
              Execution Model
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4 transition-colors duration-300">
              The AI-Leveraged Execution
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed transition-colors duration-300">
              PIS Labs operates without large, bloated engineering teams. By leveraging advanced AI models as a development engine and systems architect, we achieve massive execution multiplication—building scalable systems end-to-end with unprecedented speed.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="mt-1 p-3 bg-zinc-50 dark:bg-[#1C1C1E] rounded-2xl text-zinc-900 dark:text-zinc-100 mr-5 border border-black/5 dark:border-white/10 shadow-sm dark:shadow-[0_0_20px_rgba(255,255,255,0.02)] transition-colors duration-300">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-zinc-900 dark:text-zinc-100 font-medium text-base tracking-tight mb-1 transition-colors duration-300">Systems Architecture</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed transition-colors duration-300">Designing clean, modular, and scalable infrastructures from day one.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mt-1 p-3 bg-zinc-50 dark:bg-[#1C1C1E] rounded-2xl text-zinc-900 dark:text-zinc-100 mr-5 border border-black/5 dark:border-white/10 shadow-sm dark:shadow-[0_0_20px_rgba(255,255,255,0.02)] transition-colors duration-300">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-zinc-900 dark:text-zinc-100 font-medium text-base tracking-tight mb-1 transition-colors duration-300">Execution Multiplier</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed transition-colors duration-300">Rapidly generating production-ready code, automating workflows, and deploying faster.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mt-1 p-3 bg-zinc-50 dark:bg-[#1C1C1E] rounded-2xl text-zinc-900 dark:text-zinc-100 mr-5 border border-black/5 dark:border-white/10 shadow-sm dark:shadow-[0_0_20px_rgba(255,255,255,0.02)] transition-colors duration-300">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-zinc-900 dark:text-zinc-100 font-medium text-base tracking-tight mb-1 transition-colors duration-300">Research Assistant</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed transition-colors duration-300">Processing complex technical documentation and distilling actionable engineering insights.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Mockup (macOS style) */}
        <div className="w-full rounded-2xl border border-black/10 dark:border-white/10 bg-zinc-50/80 dark:bg-black/60 shadow-xl dark:shadow-[0_0_40px_rgba(255,255,255,0.03)] overflow-hidden font-mono text-xs sm:text-sm z-10 backdrop-blur-2xl transition-colors duration-300">
          <div className="flex items-center px-4 py-3 border-b border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] transition-colors duration-300">
             <div className="flex space-x-2">
               <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/10 dark:border-white/10"></div>
               <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/10 dark:border-white/10"></div>
               <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/10 dark:border-white/10"></div>
             </div>
             <div className="ml-4 text-zinc-500 dark:text-zinc-400 text-xs font-medium transition-colors duration-300">pis_labs_system_prompt.ts</div>
          </div>
          <div className="p-6 text-zinc-700 dark:text-zinc-300 overflow-x-auto no-scrollbar leading-relaxed transition-colors duration-300">
            <pre>
<code className="text-zinc-700 dark:text-zinc-300 transition-colors duration-300">{`export const PIS_LABS_ENGINE = {
  role: "Lead Systems Architect",
  objectives: [
    "Design API-first scalable architecture",
    "Ensure strict separation of concerns",
    "Prioritize production-grade over prototypes"
  ],
  constraints: {
    overEngineering: false,
    fragileSystems: false,
    soloFounderOptimized: true
  },
  execute: async (project) => {
    await analyzeRequirements(project);
    await buildScalableMVP(project);
    await distributeToCommunity(project);
    
    return "Mission Accomplished.";
  }
};`}</code>
            </pre>
          </div>
        </div>

      </div>
    </section>
  );
};
