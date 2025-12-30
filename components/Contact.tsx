
import React from 'react';
import { Mail, Trees } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section className="py-64 md:py-80 px-6 md:px-12 lg:px-24 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 -z-10 scale-[2]">
        <Trees className="w-96 h-96 text-forest" />
      </div>

      <div className="max-w-4xl mx-auto scroll-reveal">
        <h2 className="text-gold font-mono text-sm uppercase tracking-[0.5em] mb-12">If this resonates</h2>
        <h3 className="text-4xl md:text-6xl font-serif leading-tight mb-16 font-medium">
          Working on something thoughtful? <br />
          <span className="text-clay italic">I'm happy to connect.</span>
        </h3>
        <p className="text-2xl text-obsidian/60 dark:text-bone/60 mb-20 max-w-2xl mx-auto font-light leading-relaxed">
          Whether it's a startup, community project, or cultural initiative—if you're looking for support that's both practical and grounded.
        </p>
        
        <a 
          href="mailto:luca.fischer@sumitra.eu"
          className="group relative inline-flex items-center gap-6 bg-obsidian text-bone dark:bg-bone dark:text-obsidian px-16 py-8 rounded-full font-medium text-xl transition-all duration-500 overflow-hidden shadow-2xl"
        >
          <span className="relative z-10">Get in touch</span>
          <Mail className="relative z-10 w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
        </a>
        
        <p className="mt-12 text-gold/50 font-mono text-xs uppercase tracking-widest">A conversation is enough to start.</p>
      </div>
    </section>
  );
};
