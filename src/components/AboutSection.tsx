import React from 'react';
import { Lightbulb, HeartPulse, Sparkles, CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const benefits = [
    {
      title: "Nuevos aprendizajes",
      desc: "Talleres prácticos, tecnología, desarrollo de habilidades de pensamiento crítico y trabajo colaborativo.",
      icon: Lightbulb,
      color: "bg-[#2B5B84]",
      textColor: "text-[#2B5B84]"
    },
    {
      title: "Hábitos saludables",
      desc: "Fomento de la actividad física diaria, nutrición consciente y disciplina deportiva en la juventud.",
      icon: HeartPulse,
      color: "bg-[#7BC043]",
      textColor: "text-[#7BC043]"
    },
    {
      title: "Conexiones que transforman",
      desc: "Espacios de networking social, lazos comunitarios y alianzas con colegios y universidades de la región.",
      icon: Sparkles,
      color: "bg-[#FF7A00]",
      textColor: "text-[#FF7A00]"
    }
  ];

  return (
    <section id="que-es" className="py-20 bg-[#F4F6F8] relative overflow-hidden">
      
      {/* Background Subtle Accent Grids */}
      <div className="absolute inset-0 cs-pattern-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#00A8E8]/10 text-[#00A8E8] font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <span>¿Qué es Construyendo Sueños?</span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-[#082B50] tracking-tight">
            Un encuentro para <span className="text-[#FF7A00]">aprender</span>, <span className="text-[#7BC043]">competir</span> y <span className="text-[#00A8E8]">crecer</span> juntos
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg font-poppins leading-relaxed">
            Construyendo Sueños es un evento de integración académica, deportiva y cultural creado para reunir estudiantes, familias, instituciones y comunidades alrededor de experiencias que fortalecen el talento, los valores, el liderazgo y el trabajo en equipo.
          </p>
        </div>

        {/* Content Layout: Image + Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Wide Showcase Photo Bento Card */}
          <div className="lg:col-span-6 cs-bento-card bg-white p-4 relative overflow-hidden flex flex-col justify-between border border-slate-200/80 shadow-xl">
            <div className="relative rounded-2xl overflow-hidden group h-full min-h-[380px]">
              <img
                src="https://lh3.googleusercontent.com/d/1S57soTBjZeLUfRSBPcNhcDq50JgJiLvc"
                alt="Jóvenes estudiantes y deportistas sonrientes en jornada de integración CEDEIT"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 min-h-[380px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082B50]/90 via-[#082B50]/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="bg-[#7BC043] text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider mb-2 inline-block shadow-md">
                  Popayán, Cauca
                </span>
                <h3 className="cs-title text-3xl leading-tight">
                  Construyendo futuro a través del talento juvenil
                </h3>
                <p className="text-xs text-slate-200 mt-1">
                  Integración comunitaria para estudiantes, familias e instituciones de Popayán.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Column Bento Cards */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4">
            {benefits.map((b, idx) => {
              const IconComp = b.icon;
              return (
                <div
                  key={idx}
                  className="cs-bento-card cs-bento-card-hover bg-white p-6 border border-slate-200/80 flex items-start gap-5 flex-1"
                >
                  <div className={`${b.color} text-white p-3.5 rounded-2xl flex-shrink-0 shadow-md`}>
                    <IconComp className="w-6 h-6" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className={`cs-title text-2xl ${b.textColor} tracking-wide`}>
                        {b.title}
                      </h4>
                      <CheckCircle className="w-4 h-4 text-[#7BC043]" />
                    </div>
                    <p className="text-slate-600 text-sm mt-1 leading-relaxed font-poppins">
                      {b.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
