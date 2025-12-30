
import React from 'react';
import { Cpu, Leaf, Wind, Sparkles } from 'lucide-react';

const ServiceItem: React.FC<{
  title: string;
  desc: string;
  icon: React.ReactNode;
  tag: string;
}> = ({ title, desc, icon, tag }) => (
  <div className="group p-12 rounded-[2rem] border border-gold/5 bg-white/5 dark:bg-obsidian/30 hover:bg-gold/[0.02] hover:border-gold/20 transition-all duration-700 scroll-reveal flex flex-col items-center text-center">
    <div className="mb-10 p-6 rounded-full bg-gold/5 text-gold group-hover:scale-110 group-hover:bg-gold/10 transition-all duration-700">
      {icon}
    </div>
    <span className="text-[10px] uppercase tracking-[0.4em] text-gold/50 mb-4 font-mono">{tag}</span>
    <h3 className="text-3xl font-serif font-bold mb-8 group-hover:text-gold transition-colors duration-500">{title}</h3>
    <p className="text-xl text-obsidian/60 dark:text-bone/60 leading-relaxed font-light">
      {desc}
    </p>
  </div>
);

export const Services: React.FC = () => {
  return (
    <section className="py-48 md:py-64 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center mb-32 scroll-reveal">
        <div className="flex justify-center mb-8">
          <Sparkles className="w-8 h-8 text-gold/40" />
        </div>
        <h2 className="text-gold font-mono text-sm uppercase tracking-[0.5em] mb-6">What I help with</h2>
        <h3 className="text-5xl md:text-7xl font-serif leading-tight">Integration of <br /> tools & heart.</h3>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        <ServiceItem 
          tag="Structure"
          icon={<Cpu className="w-12 h-12" />}
          title="Growth & AI Systems"
          desc="I support projects with strategy, structure, and execution. Often using AI to reduce friction and increase focus. This includes positioning, funnels, CRM setups, and practical growth planning."
        />
        <ServiceItem 
          tag="Ecology"
          icon={<Leaf className="w-12 h-12" />}
          title="Regenerative & Cultural Projects"
          desc="I collaborate on projects rooted in ecology, culture, and community. Including indigenous-led initiatives and biodiversity work. These projects move at human speed."
        />
        <ServiceItem 
          tag="Practice"
          icon={<Wind className="w-12 h-12" />}
          title="Embodied & Community Work"
          desc="Founder of Tribal Yoga, a decentralized movement practice focused on breath and presence. This work informs how I approach leadership and group dynamics in all areas."
        />
      </div>
    </section>
  );
};
