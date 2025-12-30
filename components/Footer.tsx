
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-6 md:px-12 lg:px-24 border-t border-gold/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div className="space-y-4">
            <p className="text-xl font-medium italic text-clay">
              Building slowly. Paying attention. Staying curious.
            </p>
            <p className="text-obsidian/60 dark:text-bone/60">
              I’m not here to scale everything. <br />
              I’m here to help the right things grow.
            </p>
          </div>
          
          <div className="flex flex-col md:items-end gap-4 text-lg">
            <a href="mailto:luca.fischer@sumitra.eu" className="hover:text-gold transition-colors">Email</a>
            <a href="https://x.com/luca_sumitra" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Twitter / X</a>
            <a href="https://www.linkedin.com/in/luca-fischer-87b2ba204/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">LinkedIn</a>
            <a href="https://github.com/sumitrabliss" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">GitHub</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-gold/5">
          <div className="font-serif italic text-2xl text-gold">
            Hari Om
          </div>
          <div className="text-xs uppercase tracking-[0.3em] opacity-30">
            &copy; {new Date().getFullYear()} Luca Sumitra Isa Dewé Fischer
          </div>
        </div>
      </div>
    </footer>
  );
};
