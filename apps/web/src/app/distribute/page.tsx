import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Users, MessageSquare, Share2, TrendingUp, Heart, Globe } from 'lucide-react';

export const metadata = {
  title: "Distribute | PIS Labs",
  description: "Community-driven distribution and user acquisition at PIS Labs. We build ecosystems, not just products.",
};

export default function DistributePage() {
  return (
    <div className="min-h-screen text-zinc-900 dark:text-zinc-100 font-sans selection:bg-black/10 dark:selection:bg-white/20 selection:text-black dark:selection:text-white overflow-x-hidden transition-colors duration-300">
      <Navbar />
      <main className="pt-32 pb-24 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6">
          {/* Hero Section */}
          <div className="mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.05] dark:bg-white/[0.05] border border-black/5 dark:border-white/10 text-xs font-medium text-zinc-500 mb-6">
              <Users className="w-3.5 h-3.5" /> Community-First
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 max-w-3xl">
              Distribution is the Best Product Feature
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 text-xl max-w-2xl leading-relaxed mb-12">
              We believe that great code is useless without a community to use it. Our distribution model focuses on building tight feedback loops, organic user acquisition, and product-led growth systems.
            </p>
          </div>

          {/* Distribution Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
             <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-white/5 flex items-center justify-center text-zinc-900 dark:text-white">
                   <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">User Feedback Loops</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  We integrate distribution directly into the development process. By acquiring early adopters before the product is "finished," we ensure every feature we build is validated by real users.
                </p>
                <ul className="space-y-3">
                   <li className="flex items-center gap-3 text-sm text-zinc-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" /> Direct WhatsApp/Telegram channels
                   </li>
                   <li className="flex items-center gap-3 text-sm text-zinc-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" /> Rapid prototyping with beta testers
                   </li>
                   <li className="flex items-center gap-3 text-sm text-zinc-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" /> In-app behavioral analysis
                   </li>
                </ul>
             </div>

             <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-white/5 flex items-center justify-center text-zinc-900 dark:text-white">
                   <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Growth Systems</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Building virality and retention into the architecture. We research how to create "sticky" ecosystems where users become advocates for the brand.
                </p>
                <ul className="space-y-3">
                   <li className="flex items-center gap-3 text-sm text-zinc-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" /> Referral and incentive engines
                   </li>
                   <li className="flex items-center gap-3 text-sm text-zinc-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" /> Content-driven lead generation
                   </li>
                   <li className="flex items-center gap-3 text-sm text-zinc-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" /> Strategic partnerships and integrations
                   </li>
                </ul>
             </div>
          </div>

          {/* Social Proof / Ecosystem */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-32">
             <div className="lg:col-span-2 p-10 rounded-[2.5rem] border border-black/5 dark:border-white/10 bg-zinc-50 dark:bg-[#1C1C1E]">
                <h3 className="text-2xl font-bold mb-6">The PIS Ecosystem</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                  Our ventures don't operate in silos. They share a common community base, allowing us to cross-pollinate users and data across different products in the studio.
                </p>
                <div className="flex flex-wrap gap-4">
                   <div className="px-5 py-3 rounded-2xl bg-white dark:bg-black/40 border border-black/5 dark:border-white/5 flex items-center gap-3">
                      <Globe className="w-4 h-4" /> 10k+ Active Users
                   </div>
                   <div className="px-5 py-3 rounded-2xl bg-white dark:bg-black/40 border border-black/5 dark:border-white/5 flex items-center gap-3">
                      <Heart className="w-4 h-4" /> 95% Retention Rate
                   </div>
                   <div className="px-5 py-3 rounded-2xl bg-white dark:bg-black/40 border border-black/5 dark:border-white/5 flex items-center gap-3">
                      <Share2 className="w-4 h-4" /> Organic Growth
                   </div>
                </div>
             </div>
             <div className="p-10 rounded-[2.5rem] border border-black/5 dark:border-white/10 bg-black text-white dark:bg-white dark:text-black flex flex-col justify-between">
                <h3 className="text-xl font-bold mb-8">Join the Network</h3>
                <p className="text-zinc-400 dark:text-zinc-500 text-sm mb-12">
                   Be the first to know about new ventures, technical research, and studio updates.
                </p>
                <a href="/#cta" className="w-full py-4 rounded-2xl bg-white dark:bg-black text-black dark:text-white font-bold text-center">
                   Subscribe
                </a>
             </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
