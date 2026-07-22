import React, { useState } from 'react';
import { ACTIVITIES_LIST, ActivityItem } from '../config/eventData';
import { Dumbbell, BrainCircuit, Sparkles, Smile, Medal, Heart, Landmark, Cpu, Filter } from 'lucide-react';

export const ActivitiesSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('todos');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell': return Dumbbell;
      case 'BrainCircuit': return BrainCircuit;
      case 'Sparkles': return Sparkles;
      case 'Smile': return Smile;
      case 'Medal': return Medal;
      case 'Heart': return Heart;
      case 'Landmark': return Landmark;
      case 'Cpu': return Cpu;
      default: return Sparkles;
    }
  };

  const filteredActivities = filter === 'todos'
    ? ACTIVITIES_LIST
    : ACTIVITIES_LIST.filter(a => a.category === filter);

  return (
    <section id="actividades" className="py-20 bg-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#7BC043]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#2B5B84]/10 text-[#2B5B84] font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <span>Programación Dinámica</span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-[#082B50] tracking-tight">
            Actividades Destacadas del Evento
          </h2>
          <p className="mt-3 text-slate-600 font-poppins text-base sm:text-lg">
            Explora la oferta completa de retos, torneos, expresiones culturales y talleres tecnológicos.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter('todos')}
            className={`px-5 py-2 rounded-full font-semibold text-xs sm:text-sm transition-all ${
              filter === 'todos'
                ? 'bg-[#082B50] text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Todas las actividades ({ACTIVITIES_LIST.length})
          </button>
          <button
            onClick={() => setFilter('deporte')}
            className={`px-5 py-2 rounded-full font-semibold text-xs sm:text-sm transition-all ${
              filter === 'deporte'
                ? 'bg-[#7BC043] text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Deporte
          </button>
          <button
            onClick={() => setFilter('educacion')}
            className={`px-5 py-2 rounded-full font-semibold text-xs sm:text-sm transition-all ${
              filter === 'educacion'
                ? 'bg-[#2B5B84] text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Educación &amp; Tecnología
          </button>
          <button
            onClick={() => setFilter('cultura')}
            className={`px-5 py-2 rounded-full font-semibold text-xs sm:text-sm transition-all ${
              filter === 'cultura'
                ? 'bg-[#FF7A00] text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Cultura
          </button>
          <button
            onClick={() => setFilter('comunidad')}
            className={`px-5 py-2 rounded-full font-semibold text-xs sm:text-sm transition-all ${
              filter === 'comunidad'
                ? 'bg-[#00A8E8] text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Comunidad &amp; Familias
          </button>
        </div>

        {/* Activity Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredActivities.map((act: ActivityItem) => {
            const IconComponent = getIcon(act.iconName);

            return (
              <div
                key={act.id}
                className="cs-bento-card cs-bento-card-hover bg-[#F4F6F8] p-6 border border-slate-200/80 hover:bg-white flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3.5 rounded-2xl bg-white shadow-md group-hover:scale-110 transition-transform text-[#082B50]">
                      <IconComponent className="w-6 h-6 text-[#FF7A00]" />
                    </div>
                    <span className={`text-[10px] font-extrabold uppercase px-3 py-1 rounded-full ${act.badgeColor}`}>
                      {act.category}
                    </span>
                  </div>

                  <h3 className="cs-title text-3xl text-[#082B50] tracking-wide mb-2 group-hover:text-[#00A8E8] transition-colors">
                    {act.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-poppins">
                    {act.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-400">
                  <span>Popayán 2026</span>
                  <span className="text-[#7BC043] font-semibold">Incluido</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
