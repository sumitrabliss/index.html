
import React from 'react';
import { Flower2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className="py-48 md:py-64 px-6 md:px-12 lg:px-24 bg-white/5 dark:bg-black/20 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40 items-start">
        <div className="scroll-reveal space-y-12">
          <div className="flex items-center gap-4">
            <h2 className="text-gold font-mono text-sm uppercase tracking-[0.4em]">A bit about me</h2>
            <div className="h-px flex-grow bg-gold/10" />
          </div>
          
          <div className="space-y-10 text-2xl leading-relaxed text-obsidian/80 dark:text-bone/90 font-light">
            <p>
              My work lives between different worlds. I design growth strategies and AI-supported systems, but I’m just as at home in community spaces, cultural projects, and embodied practices.
            </p>
            <p>
              Over the years, I’ve worked with startups, regenerative initiatives, indigenous partners, artists & builders across Europe and beyond. What connects all of it is a simple intention: helping good work land in the world in a way that feels honest and sustainable.
            </p>
            <div className="pt-8 space-y-4">
              <p className="font-medium text-obsidian dark:text-bone font-serif text-3xl">
                I’m not interested in growth for growth’s sake.
              </p>
              <p className="text-clay dark:text-gold italic font-serif text-2xl border-l-4 border-clay pl-8 py-4 bg-clay/5">
                I’m interested in coherence: Between values, people, and the systems we build.
              </p>
            </div>
          </div>
        </div>
        
        <div className="relative scroll-reveal flex flex-col justify-center lg:sticky lg:top-40">
          <div className="absolute top-0 right-0 w-48 h-48 border-t border-r border-gold/10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 border-b border-l border-gold/10 pointer-events-none" />
          
          <div className="flex justify-center mb-12">
            <Flower2 className="w-16 h-16 text-gold/20" />
          </div>

          <blockquote className="relative px-12">
            <span className="text-[12rem] font-serif text-gold/5 absolute -top-32 -left-8 select-none leading-none">“</span>
            <p className="text-4xl md:text-6xl font-serif italic text-clay text-center leading-tight tracking-tight relative z-10">
              Clarity is more <br />
              powerful than speed.
            </p>
            <span className="text-[12rem] font-serif text-gold/5 absolute -bottom-32 -right-8 select-none leading-none">”</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
};
