import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BookOpen, ArrowRight, FileText, Globe, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import { getVentures } from '@/lib/api/ventures';

export const metadata = {
  title: "Research | PIS Labs",
  description: "Applied AI research and technical authority at PIS Labs. We bridge the gap between theoretical AI and production-ready systems.",
};

export default async function ResearchPage() {
  const ventures = await getVentures();

  return (
    <div className="min-h-screen text-zinc-900 dark:text-zinc-100 font-sans selection:bg-black/10 dark:selection:bg-white/20 selection:text-black dark:selection:text-white overflow-x-hidden transition-colors duration-300">
      <Navbar />
      <main className="pt-32 pb-24 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6">
          {/* Hero Section */}
          <div className="mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.05] dark:bg-white/[0.05] border border-black/5 dark:border-white/10 text-xs font-medium text-zinc-500 mb-6">
              <BookOpen className="w-3 h-3" /> Technical Authority
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 max-w-3xl">
              Engineering the Future of Applied AI
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 text-xl max-w-2xl leading-relaxed mb-12">
              We don't just use AI; we research how to make it reliable, scalable, and useful in production environments. Our research focuses on agentic systems, infrastructure efficiency, and user-centric AI design.
            </p>
          </div>

          {/* Core Pillars of Research */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
             <div className="p-8 rounded-3xl border border-black/5 dark:border-white/10 bg-zinc-50 dark:bg-[#1C1C1E] transition-colors">
                <FileText className="w-8 h-8 mb-6 text-zinc-400" />
                <h3 className="text-xl font-semibold mb-4">Technical Papers</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  Deep-dives into specific AI architectures, performance benchmarks, and implementation strategies for production-grade systems.
                </p>
             </div>
             <div className="p-8 rounded-3xl border border-black/5 dark:border-white/10 bg-zinc-50 dark:bg-[#1C1C1E] transition-colors">
                <Lightbulb className="w-8 h-8 mb-6 text-zinc-400" />
                <h3 className="text-xl font-semibold mb-4">Applied Logic</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  Moving beyond prompt engineering to architectural integration. We research how to embed AI logic at the core of the system.
                </p>
             </div>
             <div className="p-8 rounded-3xl border border-black/5 dark:border-white/10 bg-zinc-50 dark:bg-[#1C1C1E] transition-colors">
                <Globe className="w-8 h-8 mb-6 text-zinc-400" />
                <h3 className="text-xl font-semibold mb-4">System Dynamics</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  Analyzing how AI-driven systems interact with real-world data and user behavior to ensure long-term stability and value.
                </p>
             </div>
          </div>

          {/* Case Studies Section */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold tracking-tight mb-12">Applied AI Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ventures.map((venture) => (
                <Link 
                  key={venture.id}
                  href={`/research/${venture.id}`}
                  className="group p-8 rounded-3xl border border-black/5 dark:border-white/10 bg-zinc-50 dark:bg-[#1C1C1E] hover:bg-zinc-100 dark:hover:bg-[#242426] transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{venture.stage}</span>
                    <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{venture.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                    {venture.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {venture.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 text-[10px] font-mono bg-black/5 dark:bg-white/5 rounded border border-black/5 dark:border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
