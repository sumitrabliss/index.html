
import React from 'react';

export const TribalBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Forest Gradients */}
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-forest/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-clay/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

      {/* Tribal Huni Kuin Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] transition-opacity duration-1000">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tribalPattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M0 60 L60 0 L120 60 L60 120 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <path d="M30 60 L60 30 L90 60 L60 90 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <path d="M60 0 L60 120 M0 60 L120 60" fill="none" stroke="currentColor" strokeWidth="0.2" />
              <circle cx="60" cy="60" r="3" fill="currentColor" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tribalPattern)" />
        </svg>
      </div>
      
      {/* Sacred Geometry Overlays */}
      <div className="absolute top-1/4 left-10 w-96 h-96 opacity-[0.05] rotate-45">
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.1" />
          <rect x="15" y="15" width="70" height="70" fill="none" stroke="currentColor" strokeWidth="0.1" />
          <path d="M0 0 L100 100 M0 100 L100 0" stroke="currentColor" strokeWidth="0.1" />
        </svg>
      </div>
      
      <div className="absolute bottom-1/4 right-10 w-128 h-128 opacity-[0.03]">
        <svg viewBox="0 0 200 200" className="w-full h-full text-forest">
          <defs>
            <mask id="leafMask">
              <rect width="200" height="200" fill="white" />
              <circle cx="100" cy="100" r="80" fill="black" />
            </mask>
          </defs>
          <g mask="url(#leafMask)">
            {[...Array(12)].map((_, i) => (
              <ellipse 
                key={i} 
                cx="100" 
                cy="100" 
                rx="80" 
                ry="20" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="0.2" 
                transform={`rotate(${i * 15}, 100, 100)`}
              />
            ))}
          </g>
        </svg>
      </div>

      {/* Floating Organic Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-gold/10"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(50px)',
              animation: `float ${Math.random() * 20 + 20}s infinite ease-in-out alternate`,
            }}
          />
        ))}
      </div>
      
      <style>{`
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(50px, 100px) rotate(10deg); }
        }
      `}</style>
    </div>
  );
};
