import React, { useState } from 'react';
import { EVENT_PILLARS, PillarItem } from '../config/eventData';
import { BookOpen, Trophy, Palette, ChevronRight, Check } from 'lucide-react';

export const PillarsSection: React.FC = () => {
  const [activePillar, setActivePillar] = useState<string>('educacion');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return BookOpen;
      case 'Trophy': return Trophy;
      case 'Palette': return Palette;
      default: return BookOpen;
    }
  };

  return (
    <section id="pilares" className="py-20 bg-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A8E8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF7A00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FF7A00]/10 text-[#FF7A00] font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <span>Estructura del Evento</span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-[#082B50] tracking-tight">
            Los Tres Pilares Fundamentales
          </h2>
          <p className="mt-3 text-slate-600 font-poppins text-base sm:text-lg">
            Combinamos el conocimiento, el movimiento y la expresión artística para lograr un desarrollo integral transformador.
          </p>
        </div>

        {/* 3 Bento Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EVENT_PILLARS.map((pillar: PillarItem) => {
            const IconComponent = getIcon(pillar.iconName);
            const isSelected = activePillar === pillar.id;

            // Bento theme colors for the pillars
            const getBentoCardStyle = (id: string) => {
              if (id === 'educacion') return 'bg-[#00A8E8] text-white';
              if (id === 'deporte') return 'bg-[#7BC043] text-white';
              return 'cs-gradient-orange text-white';
            };

            return (
              <div
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className={`cs-bento-card cs-bento-card-hover p-6 sm:p-8 cursor-pointer relative overflow-hidden flex flex-col justify-between ${getBentoCardStyle(pillar.id)} ${
                  isSelected ? 'ring-4 ring-[#082B50]/30 shadow-2xl scale-[1.02]' : 'opacity-95'
                }`}
              >
                <div>
                  {/* Photo Banner */}
                  <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6 group border border-white/20 shadow-md">
                    <img
                      src={pillar.imageUrl}
                      alt={`Fotografía del pilar de ${pillar.title}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute top-3 left-3 p-3 bg-white/20 backdrop-blur-md rounded-xl">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <h3 className="cs-title text-4xl text-white tracking-wide mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-white/90 text-sm leading-snug mb-6 font-poppins">
                    {pillar.summary}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-white/20">
                    <p className="text-[11px] font-extrabold uppercase tracking-widest text-white/70 mb-2">
                      Highlights:
                    </p>
                    {pillar.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2.5 text-xs font-semibold text-white">
                        <div className="w-4 h-4 rounded-full bg-white/20 text-white flex items-center justify-center text-[10px]">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-white">
                  <span>Explorar Pilar</span>
                  <div className="p-2 rounded-full bg-white/20">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
