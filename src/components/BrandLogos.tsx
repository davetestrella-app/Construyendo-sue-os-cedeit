import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'white';
}

export const CedeitLogo: React.FC<LogoProps> = ({ className = 'h-10', variant = 'full' }) => {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Icon Graphic */}
      <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#082B50] via-[#2B5B84] to-[#00A8E8] shadow-md p-1.5">
        <svg viewBox="0 0 100 100" className="w-full h-full text-white" fill="none" stroke="currentColor">
          {/* Stylized Ring of People */}
          <circle cx="50" cy="50" r="38" stroke="#7BC043" strokeWidth="4" strokeDasharray="6 4" />
          <circle cx="50" cy="22" r="6" fill="#FF7A00" stroke="none" />
          <circle cx="78" cy="50" r="6" fill="#00A8E8" stroke="none" />
          <circle cx="50" cy="78" r="6" fill="#7BC043" stroke="none" />
          <circle cx="22" cy="50" r="6" fill="#2B5B84" stroke="none" />
          {/* Tech & Graduation Cap */}
          <path d="M50 35 L70 45 L50 55 L30 45 Z" fill="#FFFFFF" stroke="none" />
          <path d="M40 50 L40 60 C40 65 60 65 60 60 L60 50" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      {variant !== 'icon' && (
        <div className="flex flex-col leading-none">
          <span className={`font-bebas text-2xl tracking-wider ${variant === 'white' ? 'text-white' : 'text-[#082B50]'}`}>
            CEDEIT
          </span>
          <span className={`text-[9px] font-semibold tracking-tight uppercase max-w-[170px] ${variant === 'white' ? 'text-blue-200' : 'text-[#2B5B84]'}`}>
            Centro para el Desarrollo Integral y Tecnológico S.A.S.
          </span>
        </div>
      )}
    </div>
  );
};

export const EventLogo: React.FC<LogoProps> = ({ className = 'h-12', variant = 'full' }) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Dynamic Emblem */}
      <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF7A00] via-[#00A8E8] to-[#2B5B84] p-0.5 shadow-lg transform -rotate-3 hover:rotate-0 transition-transform">
        <div className="w-full h-full bg-[#082B50] rounded-[14px] flex items-center justify-center p-2 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#7BC043_1px,transparent_1px)] [background-size:8px_8px]" />
          
          <svg viewBox="0 0 100 100" className="w-full h-full relative z-10" fill="none">
            {/* Figures in Circle */}
            <path d="M50 15 C30 15 15 30 15 50 C15 70 30 85 50 85 C70 85 85 70 85 50" stroke="#7BC043" strokeWidth="6" strokeLinecap="round" />
            <path d="M25 40 Q50 20 75 40" stroke="#00A8E8" strokeWidth="5" strokeLinecap="round" />
            
            {/* Soccer Ball & Graduation Cap Symbol */}
            <circle cx="50" cy="58" r="14" fill="#FFFFFF" />
            <polygon points="50,50 56,54 54,61 46,61 44,54" fill="#082B50" />
            
            {/* Graduation Cap */}
            <path d="M50 26 L72 37 L50 48 L28 37 Z" fill="#FF7A00" />
            <path d="M38 42 L38 52 C38 56 62 56 62 52 L62 42" fill="none" stroke="#FF7A00" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {variant !== 'icon' && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1">
            <span className={`font-bebas text-3xl tracking-tight leading-none ${variant === 'white' ? 'text-white' : 'text-[#082B50]'}`}>
              CONSTRUYENDO
            </span>
            <span className="font-bebas text-3xl tracking-tight leading-none text-[#FF7A00]">
              SUEÑOS
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#00A8E8]">
              EDUCACIÓN
            </span>
            <span className="text-[10px] font-extrabold text-[#FF7A00]">&amp;</span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#7BC043]">
              DEPORTE
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
