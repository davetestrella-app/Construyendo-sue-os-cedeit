import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';

export const EmotionalSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative cs-bento-card overflow-hidden shadow-2xl cs-gradient-blue text-white">
          
          {/* Background Image Overlay with Opacity */}
          <div className="absolute inset-0">
            <img
              src="https://lh3.googleusercontent.com/d/1oyw61YINEDgxQYMoZOgb_pzbHhyzdIhn"
              alt="Jóvenes uniendo manos en círculo celebrando valores y compañerismo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-25 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#082B50] via-[#082B50]/80 to-transparent" />
          </div>

          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-3xl space-y-6">
            
            <div className="inline-flex items-center gap-2 bg-[#FF7A00] text-white font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
              <Heart className="w-4 h-4 fill-current" />
              <span>Inspiración &amp; Valores</span>
            </div>

            <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none">
              “Cuando nos unimos, los sueños se hacen más grandes”
            </h2>

            <p className="text-slate-200 text-base sm:text-lg font-poppins leading-relaxed">
              Cada encuentro, cada aprendizaje y cada desafío puede convertirse en el inicio de una nueva historia. Construyendo Sueños es una invitación a creer en el talento, la educación y el poder de la comunidad.
            </p>

            <div className="pt-4">
              <a
                href="#registro"
                className="inline-flex items-center justify-center gap-3 bg-[#FF7A00] hover:bg-[#e06b00] text-white font-extrabold text-base px-8 py-4 rounded-2xl shadow-xl shadow-[#FF7A00]/40 transform hover:-translate-y-1 transition-all uppercase tracking-wider group"
              >
                <span>Sé parte de esta experiencia</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
