import React, { useState, useEffect } from 'react';
import { EVENT_DATA } from '../config/eventData';
import { PhoneCall, ArrowUp } from 'lucide-react';

export const FloatingButtons: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3">
      
      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${EVENT_DATA.whatsappNumber}?text=${encodeURIComponent(EVENT_DATA.whatsappDefaultMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-[#25D366] hover:bg-[#1ebf58] text-white p-3.5 sm:p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center border-2 border-white animate-pulse-glow"
        title="Hablar por WhatsApp con CEDEIT"
        aria-label="Contactar por WhatsApp"
      >
        <PhoneCall className="w-6 h-6 fill-current" />
        
        {/* Tooltip on hover */}
        <span className="absolute right-full mr-3 bg-[#082B50] text-white text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          ¿Dudas? ¡Escríbenos!
        </span>
      </a>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="bg-[#082B50] hover:bg-[#FF7A00] text-white p-3 rounded-full shadow-xl transition-all transform hover:scale-105 border border-white/20 flex items-center justify-center cursor-pointer"
          title="Volver al inicio"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
};

