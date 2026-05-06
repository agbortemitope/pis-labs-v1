import React from 'react';

export const BackgroundEffects = () => {
  // Array of positions and animation delays for the technical symbols
  const symbols = [
    { top: '15%', left: '10%', delay: '0s', size: 'text-sm' },
    { top: '25%', left: '85%', delay: '1s', size: 'text-lg' },
    { top: '55%', left: '5%', delay: '2s', size: 'text-base' },
    { top: '75%', left: '90%', delay: '0.5s', size: 'text-xl' },
    { top: '85%', left: '15%', delay: '1.5s', size: 'text-sm' },
    { top: '45%', left: '75%', delay: '2.5s', size: 'text-base' },
    { top: '10%', left: '50%', delay: '0.8s', size: 'text-xs' },
    { top: '90%', left: '55%', delay: '1.2s', size: 'text-lg' },
  ];

  return (
    <div className="fixed inset-0 z-[-1] bg-white dark:bg-black overflow-hidden pointer-events-none transition-colors duration-300">
      {/* Ultra-faint technical grid fading out at the edges */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)] transition-colors duration-300"></div>
      
      {/* Ambient Glow Orbs — reduced blur on mobile for GPU performance */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-400/20 dark:bg-indigo-900/20 blur-[80px] md:blur-[150px] transition-colors duration-300"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-400/10 dark:bg-emerald-900/10 blur-[80px] md:blur-[150px] transition-colors duration-300"></div>
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[60%] h-[30%] rounded-full bg-blue-400/10 dark:bg-blue-900/10 blur-[80px] md:blur-[150px] transition-colors duration-300"></div>

      {/* Floating Technical Symbols */}
      {symbols.map((sym, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            top: sym.top,
            left: sym.left,
            animationDelay: sym.delay,
          }}
        >
          <div 
            className={`font-mono text-black/10 dark:text-white/10 animate-pulse ${sym.size} transition-colors duration-300`}
            style={{ animationDelay: sym.delay, animationDuration: '4s' }}
          >
            +
          </div>
        </div>
      ))}
    </div>
  );
};
