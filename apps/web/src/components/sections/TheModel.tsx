import React from 'react';
import { BookOpen, Terminal, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface PillarCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  features: string[];
  href: string;
}

const PillarCard: React.FC<PillarCardProps> = ({ title, subtitle, icon, features, href }) => (
  <div className="flex flex-col p-8 rounded-3xl border border-black/5 dark:border-white/10 bg-zinc-50 dark:bg-[#1C1C1E] backdrop-blur-xl shadow-lg dark:shadow-[0_0_40px_rgba(255,255,255,0.02)] hover:bg-zinc-100 dark:hover:bg-[#242426] transition-all duration-300 group">
    <div className="p-4 bg-black/[0.05] dark:bg-white/[0.05] rounded-2xl w-fit mb-6 text-zinc-900 dark:text-zinc-100 border border-black/5 dark:border-white/5 transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-1 transition-colors duration-300">{title}</h3>
    <p className="text-xs font-medium text-zinc-400 mb-6 uppercase tracking-widest transition-colors duration-300">{subtitle}</p>
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start text-sm text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
          <span className="mr-3 text-zinc-400 dark:text-zinc-500 mt-0.5">•</span>
          {feature}
        </li>
      ))}
    </ul>
    <div className="mt-auto">
      <Link 
        href={href}
        className="inline-flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:gap-2 transition-all duration-300"
      >
        Learn More <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
      </Link>
    </div>
  </div>
);

export const TheModel = () => {
  const pillars = [
    {
      title: "Research",
      subtitle: "Authority",
      icon: <BookOpen className="w-6 h-6" />,
      href: "/research",
      features: [
        "Applied AI papers and findings",
        "Deep-dive technical case studies",
        "System performance analysis",
        "Technical documentation"
      ]
    },
    {
      title: "Build",
      subtitle: "Utility",
      icon: <Terminal className="w-6 h-6" />,
      href: "/build",
      features: [
        "Production-grade software systems",
        "AI-assisted development pipelines",
        "Scalable architecture from day one",
        "Real-world usable MVPs"
      ]
    },
    {
      title: "Distribute",
      subtitle: "Community",
      icon: <Users className="w-6 h-6" />,
      href: "/distribute",
      features: [
        "Early adopter acquisition",
        "Tight user feedback loops",
        "Growth and engagement systems",
        "Product-led community building"
      ]
    }
  ];

  return (
    <section id="model" className="w-full py-24 px-6 border-t border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 md:text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4 transition-colors duration-300">
            The Venture Model
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl md:mx-auto leading-relaxed transition-colors duration-300">
            Every project at PIS Labs generates three distinct outputs. We don't just ship code; we publish the research behind it and cultivate the community around it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <PillarCard key={idx} {...pillar} />
          ))}
        </div>
      </div>
    </section>
  );
};
