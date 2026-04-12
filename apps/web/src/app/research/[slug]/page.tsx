import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Terminal, GitCommit, Layers, Cpu } from 'lucide-react';
import { getVentures } from '@/lib/data/ventures';

export async function generateStaticParams() {
  const ventures = await getVentures();
  return ventures.map((venture) => ({
    slug: venture.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const ventures = await getVentures();
  const project = ventures.find((v) => v.id === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study | PIS Labs`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Applied AI Case Study`,
      description: project.description,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — Case Study | PIS Labs`,
      description: project.description,
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const ventures = await getVentures();
  const project = ventures.find((v) => v.id === resolvedParams.slug);

  if (!project) notFound(); 

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-zinc-800 selection:text-white pt-32 pb-24">
      <article className="max-w-3xl mx-auto px-6">
        
        {/* Navigation & Metadata */}
        <div className="mb-12">
          <Link href="/#ventures" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Ventures
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono uppercase tracking-wider">
              {project.stage}
            </span>
            <span className="text-zinc-600 text-sm font-mono">
              // Applied AI Research
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
            System Architecture: {project.title}
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Technical Stack Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-y border-zinc-900 mb-12">
          <div className="space-y-1">
            <div className="text-xs text-zinc-600 uppercase font-mono tracking-wider">Infrastructure</div>
            <div className="text-sm font-medium text-zinc-300 flex items-center">
               <Layers className="w-3.5 h-3.5 mr-2 text-zinc-500"/> {project.techStack[0]}
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-xs text-zinc-600 uppercase font-mono tracking-wider">Backend</div>
            <div className="text-sm font-medium text-zinc-300 flex items-center">
               <Terminal className="w-3.5 h-3.5 mr-2 text-zinc-500"/> {project.techStack[1]}
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-xs text-zinc-600 uppercase font-mono tracking-wider">Database</div>
            <div className="text-sm font-medium text-zinc-300 flex items-center">
               <GitCommit className="w-3.5 h-3.5 mr-2 text-zinc-500"/> {project.techStack[2]}
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-xs text-zinc-600 uppercase font-mono tracking-wider">Engine</div>
            <div className="text-sm font-medium text-zinc-300 flex items-center">
               <Cpu className="w-3.5 h-3.5 mr-2 text-zinc-500"/> Custom AI Logic
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="prose prose-invert prose-zinc max-w-none">
          <h2 className="text-2xl font-semibold tracking-tight text-white mb-4">1. Abstract & Problem Space</h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            Detailed breakdown of the market gap and the specific problem {project.title} aims to solve. As an Applied AI studio, we identified that traditional solutions fail to scale efficiently without embedding AI logic at the architectural level.
          </p>

          <h2 className="text-2xl font-semibold tracking-tight text-white mb-4">2. Execution & Architecture</h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            By prioritizing an API-first approach, the system remains entirely decoupled. The primary business logic operates entirely independent of the presentation layer, allowing rapid iteration by the solo founder model.
          </p>

          {/* Conditional Code Mockup Display */}
          {project.codeMockup && (
            <div className="my-10 rounded-lg border border-zinc-800 bg-[#0c0c0c] overflow-hidden font-mono text-sm">
              <div className="flex items-center px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
                <div className="text-zinc-500 text-xs">{project.codeMockup.endpoint}</div>
              </div>
              <div className="p-6 text-zinc-300 overflow-x-auto">
                <pre><code>{project.codeMockup.response}</code></pre>
              </div>
            </div>
          )}
        </div>

        {/* Action Blocks */}
        <div className="mt-16 pt-8 border-t border-zinc-900 flex gap-4">
           <a href={project.links.build} target="_blank" rel="noopener noreferrer" className="bg-white text-black px-6 py-3 rounded-md text-sm font-semibold hover:bg-zinc-200 transition-colors">
             View Live Product
           </a>
           <a href={project.links.distribute} target="_blank" rel="noopener noreferrer" className="bg-transparent text-white border border-zinc-700 hover:border-zinc-500 px-6 py-3 rounded-md text-sm font-semibold transition-colors">
             Join WhatsApp Community
           </a>
        </div>

      </article>
    </main>
  );
}
