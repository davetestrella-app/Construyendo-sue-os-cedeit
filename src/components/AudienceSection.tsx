import React from 'react';
import { AUDIENCE_LIST, AudienceCategory } from '../config/eventData';
import { GraduationCap, School, UserCheck, HeartHandshake, Award, Users, Heart } from 'lucide-react';

export const AudienceSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return GraduationCap;
      case 'School': return School;
      case 'UserCheck': return UserCheck;
      case 'HeartHandshake': return HeartHandshake;
      case 'Award': return Award;
      case 'Users': return Users;
      default: return Users;
    }
  };

  return (
    <section className="py-20 bg-[#F4F6F8] relative overflow-hidden">
      
      {/* Background Dots */}
      <div className="absolute inset-0 cs-pattern-dots opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#7BC043]/10 text-[#7BC043] font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <span>Convocatoria Abierta</span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-[#082B50] tracking-tight">
            ¿Quiénes Pueden Participar?
          </h2>
          <p className="mt-3 text-slate-600 font-poppins text-base sm:text-lg">
            Un espacio inclusivo diseñado para integrar a toda la comunidad de Popayán y sus alrededores.
          </p>
        </div>

        {/* Audience Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AUDIENCE_LIST.map((item: AudienceCategory) => {
            const IconComponent = getIcon(item.iconName);

            return (
              <div
                key={item.id}
                className="cs-bento-card cs-bento-card-hover bg-white p-6 border border-slate-200/80 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3.5 rounded-2xl bg-[#082B50] text-[#00A8E8] group-hover:bg-[#FF7A00] group-hover:text-white transition-colors shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                      Popayán 2026
                    </span>
                  </div>

                  <h3 className="cs-title text-3xl text-[#082B50] tracking-wide mb-2 group-hover:text-[#FF7A00] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-poppins">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#2B5B84]">
                  <Heart className="w-3.5 h-3.5 text-[#FF7A00]" />
                  <span>Inscripción abierta</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Banner Quote */}
        <div className="mt-16 bg-gradient-to-r from-[#082B50] via-[#2B5B84] to-[#082B50] rounded-3xl p-8 sm:p-10 text-white text-center shadow-2xl relative overflow-hidden border border-[#00A8E8]/30">
          <div className="absolute inset-0 bg-[radial-gradient(#00A8E8_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-3">
            <span className="text-3xl font-bebas text-[#FF7A00] tracking-widest uppercase">
              #ConstruyendoSueñosPopayán
            </span>
            <blockquote className="font-oswald text-2xl sm:text-3xl md:text-4xl text-white font-normal italic tracking-wide leading-snug">
              “Todos tenemos un talento que compartir y un sueño que construir.”
            </blockquote>
            <p className="text-xs font-semibold uppercase text-slate-300 tracking-wider pt-2">
              — CEDEIT S.A.S. • Centro para el Desarrollo Integral y Tecnológico
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
