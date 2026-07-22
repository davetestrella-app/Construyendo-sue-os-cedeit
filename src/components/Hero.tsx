import React from 'react';
import { CountdownTimer } from './CountdownTimer';
import { Calendar, MapPin, Sparkles, Trophy } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-8 sm:pt-12 md:pt-16 pb-12 bg-gradient-to-b from-[#082B50] via-[#0B3B6D] to-[#F4F6F8] text-white overflow-hidden">
      
      {/* Visual Accent Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-[#FF7A00]/20 via-[#00A8E8]/20 to-[#7BC043]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Main Headline & Punchy Subtitle */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#FF7A00]/20 border border-[#FF7A00]/40 text-[#FF9E4D] px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-widest backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#FF7A00]" />
            <span>Gran Encuentro Juvenil y Comunitario</span>
          </div>

          <div className="relative flex justify-center items-center py-2 sm:py-4">
            {/* Smooth integrated radial glow behind logo */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-3/4 max-w-2xl mx-auto bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.2)_0%,_rgba(255,255,255,0.08)_45%,_transparent_75%)] blur-2xl pointer-events-none rounded-full" />
            <div className="absolute w-2/3 h-2/3 bg-[#00A8E8]/20 blur-3xl pointer-events-none rounded-full" />

            <img
              src="https://lh3.googleusercontent.com/d/1g1sQyCStEtMN7C39U9tmqyhv_GLFADpD"
              alt="Construyendo Sueños - Logo del Evento"
              referrerPolicy="no-referrer"
              className="relative z-10 max-h-48 sm:max-h-64 md:max-h-80 lg:max-h-96 w-full max-w-3xl object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
            />
          </div>

          <p className="font-oswald text-xl sm:text-3xl text-[#00A8E8] font-bold uppercase tracking-wider">
            Un día para aprender, competir y celebrar juntos
          </p>
        </div>

        {/* Essential Info Cards: CUÁNDO, DÓNDE, POR QUÉ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-2">
          
          {/* Card 1: CUÁNDO */}
          <div className="cs-bento-card cs-bento-card-hover bg-white text-[#082B50] p-6 border-2 border-[#FF7A00]/30 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF7A00]/10 rounded-bl-full pointer-events-none" />
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-[#FF7A00] text-white rounded-2xl shadow-md">
                  <Calendar className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#FF7A00] bg-[#FF7A00]/10 px-3 py-1 rounded-full">
                  ¿CUÁNDO?
                </span>
              </div>
              <div>
                <h3 className="cs-title text-4xl text-[#082B50] leading-none">22 DE AGOSTO</h3>
                <p className="text-sm font-bold text-slate-600 mt-1">Sábado • 8:00 AM a 5:00 PM</p>
              </div>
            </div>
            <p className="text-xs text-slate-500 font-medium pt-4 border-t border-slate-100 mt-4">
              Entrada libre para toda la comunidad.
            </p>
          </div>

          {/* Card 2: DÓNDE */}
          <div className="cs-bento-card cs-bento-card-hover bg-white text-[#082B50] p-6 border-2 border-[#00A8E8]/30 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#00A8E8]/10 rounded-bl-full pointer-events-none" />
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-[#00A8E8] text-white rounded-2xl shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#00A8E8] bg-[#00A8E8]/10 px-3 py-1 rounded-full">
                  ¿DÓNDE?
                </span>
              </div>
              <div>
                <h3 className="cs-title text-3xl sm:text-4xl text-[#082B50] leading-none">COLEGIO LAS SALESIANAS</h3>
                <p className="text-sm font-bold text-slate-600 mt-1">I.E. Sagrado Corazón de Jesús • Popayán</p>
              </div>
            </div>
            <p className="text-xs text-slate-500 font-medium pt-4 border-t border-slate-100 mt-4">
              Instalaciones deportivas y auditorio principal.
            </p>
          </div>

          {/* Card 3: POR QUÉ */}
          <div className="cs-bento-card cs-bento-card-hover bg-white text-[#082B50] p-6 border-2 border-[#7BC043]/30 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#7BC043]/10 rounded-bl-full pointer-events-none" />
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-[#7BC043] text-white rounded-2xl shadow-md">
                  <Trophy className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#7BC043] bg-[#7BC043]/10 px-3 py-1 rounded-full">
                  ¿POR QUÉ ESTAR?
                </span>
              </div>
              <div>
                <h3 className="cs-title text-4xl text-[#082B50] leading-none">EDUCACIÓN &amp; DEPORTE</h3>
                <p className="text-sm font-bold text-slate-600 mt-1">Torneos, talleres, música y becas</p>
              </div>
            </div>
            <p className="text-xs text-slate-500 font-medium pt-4 border-t border-slate-100 mt-4">
              Impulsado por CEDEIT S.A.S. para la comunidad.
            </p>
          </div>

        </div>



        {/* Realtime Countdown Timer Bar */}
        <div className="pt-2">
          <CountdownTimer />
        </div>

      </div>
    </section>
  );
};
