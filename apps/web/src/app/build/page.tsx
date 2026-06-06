import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Terminal, Cpu, Layers, Zap, Code2, Server } from 'lucide-react';

export const metadata = {
  title: "Build | PIS Labs",
  description: "Production-grade AI engineering and scalable infrastructure at PIS Labs. We build systems that last.",
};

export default function BuildPage() {
  const stack = [
    { name: "Frontend", tools: ["Next.js", "React", "Tailwind CSS", "Framer Motion"] },
    { name: "Backend", tools: ["Node.js", "Python", "Go", "tRPC"] },
    { name: "Infrastructure", tools: ["AWS", "Vercel", "Docker", "Terraform"] },
    { name: "AI/ML", tools: ["OpenAI", "Anthropic", "LangChain", "Pinecone"] },
  ];

  return (
    <div className="min-h-screen text-zinc-900 dark:text-zinc-100 font-sans selection:bg-black/10 dark:selection:bg-white/20 selection:text-black dark:selection:text-white overflow-x-hidden transition-colors duration-300">
      <Navbar />
      <main className="pt-32 pb-24 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6">
          {/* Hero Section */}
          <div className="mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.05] dark:bg-white/[0.05] border border-black/5 dark:border-white/10 text-xs font-medium text-zinc-500 mb-6">
              <Terminal className="w-3.5 h-3.5" /> Technical Utility
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 max-w-3xl">
              Systems Designed for Scale and Utility
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 text-xl max-w-2xl leading-relaxed mb-12">
              We build production-grade software by combining modern engineering practices with cutting-edge AI capabilities. Our focus is on high-utility MVPs that can scale into enterprise-grade ecosystems.
            </p>
          </div>

          {/* Build Principles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
            <div className="group p-10 rounded-[2.5rem] border border-black/5 dark:border-white/10 bg-zinc-50 dark:bg-[#1C1C1E] transition-all">
              <Cpu className="w-10 h-10 mb-8 text-zinc-400" />
              <h3 className="text-2xl font-bold mb-4">AI-Assisted Pipelines</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Leveraging the latest in agentic AI to accelerate development without compromising on quality. We use AI to automate the mundane, allowing us to focus on complex architectural challenges.
              </p>
            </div>
            <div className="group p-10 rounded-[2.5rem] border border-black/5 dark:border-white/10 bg-zinc-50 dark:bg-[#1C1C1E] transition-all">
              <Layers className="w-10 h-10 mb-8 text-zinc-400" />
              <h3 className="text-2xl font-bold mb-4">Scalable Infrastructure</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Architecture that grows with you. From serverless functions to distributed databases, we ensure every system is optimized for performance and cost from day one.
              </p>
            </div>
          </div>

          {/* Tech Stack Grid */}
          <div className="mb-32">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
               <h2 className="text-3xl font-bold tracking-tight">The PIS Stack</h2>
               <div className="flex items-center gap-4 text-sm text-zinc-500 font-mono">
                 <Code2 className="w-4 h-4" /> production-ready.config
               </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stack.map((category) => (
                <div key={category.name} className="p-6 rounded-3xl border border-black/5 dark:border-white/10 bg-zinc-50 dark:bg-black/20">
                   <div className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">{category.name}</div>
                   <ul className="space-y-3">
                     {category.tools.map((tool) => (
                       <li key={tool} className="text-sm font-medium flex items-center gap-2">
                         <div className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                         {tool}
                       </li>
                     ))}
                   </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Efficiency CTA */}
          <div className="p-12 rounded-[3rem] bg-black text-white dark:bg-zinc-100 dark:text-black overflow-hidden relative">
             <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for Efficiency</h2>
                <p className="text-zinc-400 dark:text-zinc-600 max-w-xl mb-8 text-lg">
                  Our engineering model is optimized for the solo founder or small, high-velocity teams. We ship faster by reducing overhead and maximizing technical leverage.
                </p>
                <div className="flex items-center gap-4">
                   <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 dark:border-black/20 text-sm">
                      <Zap className="w-4 h-4" /> High Velocity
                   </div>
                   <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 dark:border-black/20 text-sm">
                      <Server className="w-4 h-4" /> Production Grade
                   </div>
                </div>
             </div>
             {/* Decorative element */}
             <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-white/5 dark:bg-black/5 rounded-full blur-3xl" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
