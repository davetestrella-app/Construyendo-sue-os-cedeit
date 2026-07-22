import React from 'react';
import { EVENT_DATA } from '../config/eventData';
import { CedeitLogo } from './BrandLogos';
import { Building2, Handshake } from 'lucide-react';

export const OrganizersSection: React.FC = () => {
  return (
    <section id="organizadores" className="py-20 bg-white relative overflow-hidden">
      
      {/* Background Subtle Accent Grids */}
      <div className="absolute inset-0 cs-pattern-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#2B5B84]/10 text-[#2B5B84] font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <Handshake className="w-3.5 h-3.5" />
            <span>Organizador Oficial</span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-[#082B50] tracking-tight">
            Organizador del Evento
          </h2>
          <p className="mt-3 font-oswald text-xl sm:text-2xl text-[#FF7A00] font-bold uppercase tracking-wide">
            “Unimos esfuerzos para crear oportunidades que transforman.”
          </p>
        </div>

        {/* Main Organizer Bento Card: CEDEIT */}
        <div className="max-w-4xl mx-auto cs-bento-card cs-gradient-blue text-white p-8 sm:p-10 shadow-2xl relative overflow-hidden border border-[#00A8E8]/30">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00A8E8]/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
              <span className="bg-[#FF7A00] text-white text-[10px] font-extrabold uppercase px-3.5 py-1 rounded-full tracking-wider shadow-md">
                Organizador Principal
              </span>
              
              <div className="py-2">
                <CedeitLogo variant="full" className="scale-110" />
              </div>

              <p className="text-slate-200 text-sm max-w-md font-poppins leading-relaxed">
                {EVENT_DATA.organizerFullName} es una institución dedicada al fortalecimiento social, la educación integral, la tecnología y el deporte en el Cauca.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 text-center md:text-right min-w-[240px]">
              <span className="text-xs uppercase text-blue-200 font-semibold block">Sede de Operación</span>
              <span className="cs-title text-4xl text-white block mt-0.5">Popayán, Colombia</span>
              <span className="text-[11px] text-[#7BC043] font-extrabold uppercase tracking-wider block mt-1">#IntegraciónCEDEIT</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
