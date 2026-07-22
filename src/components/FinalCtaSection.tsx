import React from 'react';
import { EVENT_DATA } from '../config/eventData';
import { UserPlus, PhoneCall, Sparkles, Calendar, MapPin } from 'lucide-react';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#FF7A00] via-[#00A8E8] to-[#082B50] text-white relative overflow-hidden">
      
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 cs-pattern-dots opacity-25 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
          <Sparkles className="w-4 h-4 text-[#7BC043]" />
          <span>¡Nos vemos en el evento!</span>
        </div>

        <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-none drop-shadow-md">
          Un día para aprender, compartir y avanzar juntos
        </h2>

        <p className="font-oswald text-xl sm:text-2xl lg:text-3xl text-amber-100 max-w-3xl mx-auto font-normal leading-snug">
          “Este 22 de agosto, Popayán se une para construir sueños a través de la educación, el deporte y la cultura.”
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-blue-100 pt-2">
          <span className="flex items-center gap-1.5 bg-black/20 px-4 py-2 rounded-xl backdrop-blur-md">
            <Calendar className="w-4 h-4 text-[#7BC043]" />
            <span>22 de Agosto de 2026</span>
          </span>
          <span className="flex items-center gap-1.5 bg-black/20 px-4 py-2 rounded-xl backdrop-blur-md">
            <MapPin className="w-4 h-4 text-[#FF7A00]" />
            <span>Popayán, Colombia</span>
          </span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <a
            href="#actividades"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#082B50] hover:bg-slate-100 font-extrabold text-base px-8 py-4 rounded-2xl shadow-2xl transform hover:-translate-y-1 transition-all uppercase tracking-wider"
          >
            <Sparkles className="w-5 h-5 text-[#FF7A00]" />
            <span>Ver Actividades</span>
          </a>

          <a
            href={`https://wa.me/${EVENT_DATA.whatsappNumber}?text=${encodeURIComponent(EVENT_DATA.whatsappDefaultMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#7BC043] hover:bg-[#68a637] text-white font-bold text-base px-8 py-4 rounded-2xl shadow-2xl transform hover:-translate-y-1 transition-all uppercase tracking-wider"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Hablar por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
