
import React from 'react';
import { Compass } from 'lucide-react';

const ApproachItem: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-center gap-8 group py-10 border-b border-gold/10 scroll-reveal">
    <div className="w-3 h-3 rounded-full border border-gold group-hover:bg-gold transition-all duration-500 scale-100 group-hover:scale-125" />
    <span className="text-2xl md:text-4xl font-serif font-light text-obsidian/90 dark:text-bone/90 group-hover:translate-x-4 transition-transform duration-500">{text}</span>
  </li>
);

export const Philosophy: React.FC = () => {
  return (
    <section className="py-48 md:py-64 px-6 md:px-12 lg:px-24 bg-forest/5 dark:bg-forest/[0.03] overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-32 items-center">
        <div className="lg:w-1/2 scroll-reveal w-full">
          <div className="flex items-center gap-4 mb-16">
            <Compass className="w-6 h-6 text-gold" />
            <h2 className="text-gold font-mono text-sm uppercase tracking-[0.4em]">Way of Being</h2>
          </div>
          <ul className="space-y-0 w-full">
            <ApproachItem text="I listen first" />
            <ApproachItem text="I prefer simple over complex" />
            <ApproachItem text="People as much as outcomes" />
            <ApproachItem text="Culture is strategy" />
            <ApproachItem text="Structure and intuition" />
          </ul>
        </div>
        
        <div className="lg:w-1/2 flex flex-col justify-center scroll-reveal relative">
          <div className="p-16 md:p-24 bg-gold/[0.03] border border-gold/10 rounded-[3rem] relative backdrop-blur-sm">
            <div className="absolute top-8 left-8 text-6xl text-gold/10 font-serif">†</div>
            <p className="text-4xl md:text-6xl font-serif italic text-gold leading-[1.2] tracking-tight text-center">
              “Good systems should feel supportive, not demanding.”
            </p>
          </div>
          {/* Subtle decoration */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-gold/5 rounded-full" />
        </div>
      </div>
    </section>
  );
};
