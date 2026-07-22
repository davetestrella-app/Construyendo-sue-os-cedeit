import React, { useState, useEffect } from 'react';
import { CedeitLogo, EventLogo } from './BrandLogos';
import { Menu, X, UserPlus, PhoneCall } from 'lucide-react';
import { EVENT_DATA } from '../config/eventData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'El Evento', href: '#que-es' },
    { label: 'Pilares', href: '#pilares' },
    { label: 'Actividades', href: '#actividades' },
    { label: 'Agenda', href: '#agenda' },
    { label: 'Organizadores', href: '#organizadores' },
    { label: 'Preguntas', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#082B50]/95 backdrop-blur-md shadow-lg py-2.5 border-b border-[#00A8E8]/20'
          : 'bg-gradient-to-b from-[#082B50]/90 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logos Group */}
          <div className="flex items-center gap-3 sm:gap-5">
            <a href="#inicio" className="hover:opacity-90 transition-opacity" title="Construyendo Sueños">
              <EventLogo variant="full" className="scale-90 sm:scale-100" />
            </a>
            <div className="hidden sm:block h-7 w-[1px] bg-white/20" />
            <a href="#organizadores" className="hidden sm:block hover:opacity-90 transition-opacity" title="Organiza CEDEIT">
              <CedeitLogo variant="full" className="scale-90" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs xl:text-sm font-semibold text-white/90 hover:text-[#FF7A00] transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${EVENT_DATA.whatsappNumber}?text=${encodeURIComponent(EVENT_DATA.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/80 hover:text-[#7BC043] transition-colors rounded-full hover:bg-white/10"
              title="Contacto por WhatsApp"
            >
              <PhoneCall className="w-5 h-5" />
            </a>

            <a
              href={`https://wa.me/${EVENT_DATA.whatsappNumber}?text=${encodeURIComponent(EVENT_DATA.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#7BC043] hover:bg-[#68a637] text-white font-bold text-xs xl:text-sm px-5 py-2.5 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 uppercase tracking-wide"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contactar WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`https://wa.me/${EVENT_DATA.whatsappNumber}?text=${encodeURIComponent(EVENT_DATA.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden bg-[#25D366] text-white font-bold text-xs px-3 py-1.5 rounded-full shadow-md flex items-center gap-1"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#FF7A00] focus:outline-none rounded-lg bg-white/10"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#082B50] border-b border-[#00A8E8]/30 shadow-2xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <CedeitLogo variant="full" className="scale-90" />
            <span className="text-[11px] font-bold text-[#00A8E8] uppercase tracking-wider">
              {EVENT_DATA.city} 2026
            </span>
          </div>

          <div className="flex flex-col space-y-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-semibold text-white/90 hover:text-[#FF7A00] hover:bg-white/5 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[#00A8E8]">→</span>
              </a>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-2">
            <a
              href="#actividades"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-[#FF7A00] text-white font-bold text-sm py-3 rounded-xl shadow-lg uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Ver Actividades del Evento</span>
            </a>
            
            <a
              href={`https://wa.me/${EVENT_DATA.whatsappNumber}?text=${encodeURIComponent(EVENT_DATA.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-[#25D366] text-white font-bold text-sm py-2.5 rounded-xl flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Escribir por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
