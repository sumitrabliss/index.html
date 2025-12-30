
import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  onToggle: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, onToggle }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8 md:px-12 flex justify-between items-center bg-transparent backdrop-blur-sm">
      <div className="text-gold font-mono tracking-tighter text-sm uppercase">
        Luca Sumitra
      </div>
      <div className="flex items-center gap-8">
        <button 
          onClick={onToggle}
          className="p-2 rounded-full hover:bg-gold/10 transition-colors duration-300"
          aria-label="Toggle Theme"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-gold" />
          ) : (
            <Moon className="w-5 h-5 text-obsidian" />
          )}
        </button>
      </div>
    </nav>
  );
};
