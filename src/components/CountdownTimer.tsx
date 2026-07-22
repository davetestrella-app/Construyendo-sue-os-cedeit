import React, { useState, useEffect } from 'react';
import { EVENT_DATA } from '../config/eventData';
import { Clock, Calendar, MapPin } from 'lucide-react';

export const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date(EVENT_DATA.eventDate).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#082B50] text-white rounded-2xl p-6 md:p-8 shadow-2xl border border-[#00A8E8]/30 relative overflow-hidden backdrop-blur-md">
      {/* Background Subtle Accent Lines */}
      <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#FF7A00]/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -left-10 -top-10 w-48 h-48 bg-[#00A8E8]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Title & Badge */}
        <div className="flex flex-col text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-[#FF7A00] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest w-fit mx-auto md:mx-0 shadow-md mb-2">
            <Clock className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
            <span>Cuenta Regresiva Oficial</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bebas tracking-wide text-white">
            ¡Nos vemos en Popayán!
          </h3>
          <div className="flex items-center justify-center md:justify-start gap-4 text-xs font-medium text-slate-300 mt-1">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#00A8E8]" />
              {EVENT_DATA.eventDateFormatted}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#7BC043]" />
              {EVENT_DATA.city}, {EVENT_DATA.country}
            </span>
          </div>
        </div>

        {/* Countdown Digits */}
        <div className="grid grid-cols-4 gap-2.5 sm:gap-4 text-center w-full md:w-auto">
          
          <div className="flex flex-col bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-2.5 sm:p-3 min-w-[68px] sm:min-w-[80px]">
            <span className="font-bebas text-3xl sm:text-4xl md:text-5xl text-[#FF7A00] leading-none">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-300 mt-1">
              Días
            </span>
          </div>

          <div className="flex flex-col bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-2.5 sm:p-3 min-w-[68px] sm:min-w-[80px]">
            <span className="font-bebas text-3xl sm:text-4xl md:text-5xl text-[#00A8E8] leading-none">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-300 mt-1">
              Horas
            </span>
          </div>

          <div className="flex flex-col bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-2.5 sm:p-3 min-w-[68px] sm:min-w-[80px]">
            <span className="font-bebas text-3xl sm:text-4xl md:text-5xl text-[#7BC043] leading-none">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-300 mt-1">
              Min
            </span>
          </div>

          <div className="flex flex-col bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-2.5 sm:p-3 min-w-[68px] sm:min-w-[80px]">
            <span className="font-bebas text-3xl sm:text-4xl md:text-5xl text-white leading-none">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-300 mt-1">
              Seg
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};
