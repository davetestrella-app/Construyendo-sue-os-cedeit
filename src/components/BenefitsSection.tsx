import React from 'react';
import { EVENT_BENEFITS, BenefitCard } from '../config/eventData';
import { Zap, Users2, Building2, Sparkles, Award, Network, Flag, ShieldCheck } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return Zap;
      case 'Users2': return Users2;
      case 'Building2': return Building2;
      case 'Sparkles': return Sparkles;
      case 'Award': return Award;
      case 'Network': return Network;
      case 'Flag': return Flag;
      default: return ShieldCheck;
    }
  };

  return (
    <section className="py-20 bg-[#082B50] text-white relative overflow-hidden cs-clip-diagonal-reverse">
      
      {/* Background Accent Blur Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF7A00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00A8E8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FF7A00] text-white font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-3 shadow-md">
            <span>¿Por qué inscribirte?</span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Beneficios Exclusivos de Participar
          </h2>
          <p className="mt-3 text-slate-300 font-poppins text-base sm:text-lg">
            Una experiencia diseñada para dejar una huella positiva imborrable en cada estudiante y participante.
          </p>
        </div>

        {/* Benefits Grid with Light Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENT_BENEFITS.map((ben: BenefitCard, idx: number) => {
            const IconComponent = getIcon(ben.iconName);

            return (
              <div
                key={ben.id}
                className="cs-bento-card cs-bento-card-hover bg-white text-[#1A1A1A] p-6 border border-slate-100 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="p-3.5 rounded-2xl bg-[#082B50] text-[#00A8E8] group-hover:bg-[#FF7A00] group-hover:text-white transition-colors shadow-md flex-shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="cs-title text-3xl text-slate-300">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="cs-title text-3xl text-[#082B50] tracking-wide mb-2 group-hover:text-[#FF7A00] transition-colors">
                    {ben.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-poppins">
                    {ben.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
