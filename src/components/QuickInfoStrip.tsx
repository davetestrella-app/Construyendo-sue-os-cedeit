import React from 'react';
import { Calendar, MapPin, Target, ShieldCheck } from 'lucide-react';
import { EVENT_DATA } from '../config/eventData';

export const QuickInfoStrip: React.FC = () => {
  const quickData = [
    {
      title: "FECHA OFICIAL",
      subtitle: EVENT_DATA.eventDateFormatted,
      desc: "Jornada completa de integración",
      icon: Calendar,
      color: "border-l-[#FF7A00]",
      badgeBg: "bg-[#FF7A00]/10 text-[#FF7A00]"
    },
    {
      title: "SEDE & CIUDAD",
      subtitle: `${EVENT_DATA.city}, Colombia`,
      desc: "Escenarios deportivos y culturales",
      icon: MapPin,
      color: "border-l-[#00A8E8]",
      badgeBg: "bg-[#00A8E8]/10 text-[#00A8E8]"
    },
    {
      title: "CONCEPTO",
      subtitle: "Integración Académica y Deportiva",
      desc: "Talleres, competencias y arte",
      icon: Target,
      color: "border-l-[#7BC043]",
      badgeBg: "bg-[#7BC043]/10 text-[#7BC043]"
    },
    {
      title: "ORGANIZA",
      subtitle: "CEDEIT S.A.S.",
      desc: "Desarrollo Integral y Tecnológico",
      icon: ShieldCheck,
      color: "border-l-[#2B5B84]",
      badgeBg: "bg-[#2B5B84]/10 text-[#2B5B84]"
    }
  ];

  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickData.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div
              key={idx}
              className={`cs-bento-card cs-bento-card-hover bg-white p-5 border-l-4 ${item.color} flex items-start gap-4`}
            >
              <div className={`p-3 rounded-2xl ${item.badgeBg} flex-shrink-0`}>
                <IconComponent className="w-6 h-6" />
              </div>

              <div className="flex flex-col">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                  {item.title}
                </span>
                <h3 className="cs-title text-2xl text-[#082B50] leading-snug mt-0.5">
                  {item.subtitle}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
