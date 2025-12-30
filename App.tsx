
import React, { useState, useEffect, useCallback } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Philosophy } from './components/Philosophy';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { TribalBackground } from './components/Patterns';
import { CustomCursor } from './components/CustomCursor';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.remove('bg-bone', 'text-obsidian');
      document.body.classList.add('bg-obsidian', 'text-bone');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('bg-obsidian', 'text-bone');
      document.body.classList.add('bg-bone', 'text-obsidian');
    }
  }, [darkMode]);

  const toggleDarkMode = useCallback(() => {
    setDarkMode(prev => !prev);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = document.querySelectorAll('.scroll-reveal');
    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen">
      <CustomCursor />
      <TribalBackground />
      <Navbar darkMode={darkMode} onToggle={toggleDarkMode} />
      
      <div className="relative z-10 flex flex-col gap-32 md:gap-64">
        <Hero />
        <About />
        <Services />
        <Philosophy />
        <Contact />
        <Footer />
      </div>
      
      {/* Subtle Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </main>
  );
};

export default App;
