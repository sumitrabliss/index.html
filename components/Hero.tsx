
import React from 'react';
import { Sprout } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-20 relative overflow-hidden">
      {/* Decorative Forest Glow */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-forest rounded-full forest-glow -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-gold/10 rounded-full forest-glow -z-10" />

      <div className="max-w-5xl scroll-reveal">
        <div className="flex items-center gap-4 text-gold/60 mb-12">
          <Sprout className="w-6 h-6 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-[0.4em]">Roots & Systems</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold leading-[1.05] mb-12 tracking-tighter">
          Building growth <br />
          <span className="italic text-gold block mt-2">systems that feel alive.</span>
        </h1>
        
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
          <div className="w-px bg-gradient-to-b from-gold to-transparent h-32 md:h-64 opacity-30 hidden md:block" />
          <div className="space-y-10 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-light text-clay dark:text-bone/80 leading-relaxed font-serif">
              AI-powered growth strategy, regenerative culture, and embodied leadership. 
              For projects that want to scale and stay human.
            </h2>
            <div className="space-y-6">
              <p className="text-xl text-forest dark:text-bone/60 leading-relaxed font-light">
                I work with founders, communities, and creative teams who are building something they actually care about. 
                Sometimes that means AI-powered growth systems, sometimes community infrastructure, sometimes cultural or regenerative work. 
                My role is to bring clarity, structure, and momentum.
              </p>
              <p className="font-mono text-sm uppercase tracking-[0.3em] text-gold italic border-l-2 border-gold/30 pl-6">
                Without rushing what needs time.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-16 right-12 hidden lg:block scroll-reveal">
        <div className="flex flex-col items-center gap-6">
          <span className="[writing-mode:vertical-lr] text-xs font-mono tracking-widest uppercase text-gold/40">Scroll to Explore</span>
          <div className="w-px h-24 bg-gradient-to-b from-gold/50 to-transparent" />
        </div>
      </div>
    </section>
  );
};
