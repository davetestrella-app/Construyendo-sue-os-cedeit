import React, { useState } from 'react';
import { AGENDA_TIMELINE, AgendaSlot } from '../config/eventData';
import { Clock, ClipboardCheck, Megaphone, Activity, Coffee, Music, Trophy, CheckCircle2, AlertCircle } from 'lucide-react';

export const AgendaSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'morning' | 'afternoon'>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ClipboardCheck': return ClipboardCheck;
      case 'Megaphone': return Megaphone;
      case 'Activity': return Activity;
      case 'Coffee': return Coffee;
      case 'Music': return Music;
      case 'Trophy': return Trophy;
      case 'CheckCircle2': return CheckCircle2;
      default: return Clock;
    }
  };

  const filteredTimeline = AGENDA_TIMELINE.filter(slot => {
    if (activeTab === 'morning') return slot.time.includes('a. m.');
    if (activeTab === 'afternoon') return slot.time.includes('p. m.');
    return true;
  });

  return (
    <section id="agenda" className="py-20 bg-[#F4F6F8] relative overflow-hidden">
      
      {/* Background Subtle Accent Grids */}
      <div className="absolute inset-0 cs-pattern-grid opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FF7A00]/10 text-[#FF7A00] font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>Cronograma de Actividades</span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-[#082B50] tracking-tight">
            Agenda del Evento – 22 de Agosto de 2026
          </h2>
          <p className="mt-3 text-slate-600 font-poppins text-base sm:text-lg">
            Planifica tu participación en la jornada completa de educación, deporte y cultura en Popayán.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-all ${
              activeTab === 'all'
                ? 'bg-[#082B50] text-white shadow-lg'
                : 'bg-white text-slate-600 hover:bg-slate-200'
            }`}
          >
            Jornada Completa
          </button>
          <button
            onClick={() => setActiveTab('morning')}
            className={`px-5 py-2 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-all ${
              activeTab === 'morning'
                ? 'bg-[#00A8E8] text-white shadow-lg'
                : 'bg-white text-slate-600 hover:bg-slate-200'
            }`}
          >
            Mañana (A.M.)
          </button>
          <button
            onClick={() => setActiveTab('afternoon')}
            className={`px-5 py-2 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-all ${
              activeTab === 'afternoon'
                ? 'bg-[#FF7A00] text-white shadow-lg'
                : 'bg-white text-slate-600 hover:bg-slate-200'
            }`}
          >
            Tarde (P.M.)
          </button>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[#2B5B84]/30 ml-4 sm:ml-32 space-y-8 pl-6 sm:pl-10">
          {filteredTimeline.map((slot: AgendaSlot) => {
            const IconComponent = getIcon(slot.iconName);

            return (
              <div key={slot.id} className="relative group">
                
                {/* Timeline Pin Badge on Left */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-10 h-10 rounded-full bg-[#082B50] text-[#00A8E8] border-2 border-white flex items-center justify-center shadow-lg group-hover:bg-[#FF7A00] group-hover:text-white transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Time Badge for Desktop */}
                <div className="hidden sm:block absolute -left-36 top-2 font-bebas text-2xl text-[#082B50] w-24 text-right">
                  {slot.time}
                </div>

                {/* Main Card */}
                <div className="cs-bento-card cs-bento-card-hover bg-white p-6 border border-slate-200/80 relative overflow-hidden">
                  
                  {/* Category Tag & Time for Mobile */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="sm:hidden cs-title text-2xl text-[#FF7A00]">
                      {slot.time}
                    </span>
                    <span className="text-[10px] font-extrabold uppercase px-3 py-1 rounded-full bg-[#082B50]/10 text-[#082B50]">
                      {slot.category}
                    </span>
                  </div>

                  <h3 className="cs-title text-3xl text-[#082B50] tracking-wide mb-1">
                    {slot.title}
                  </h3>

                  <p className="text-slate-600 text-sm font-poppins leading-relaxed">
                    {slot.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-5 flex items-start gap-3 text-amber-900 text-xs sm:text-sm font-medium">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p>
            <strong>Nota importante:</strong> La programación y horarios definitivos están sujetos a ligeros ajustes para garantizar el óptimo desarrollo de las actividades académicas y deportivas. CEDEIT notificará cualquier actualización a las delegaciones inscritas.
          </p>
        </div>

      </div>
    </section>
  );
};
