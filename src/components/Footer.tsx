import React from 'react';
import { EVENT_DATA } from '../config/eventData';
import { CedeitLogo, EventLogo } from './BrandLogos';
import { Mail, Phone, MapPin, Calendar, Heart, Shield, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#082B50] text-white pt-16 pb-24 lg:pb-12 border-t border-[#00A8E8]/20 relative overflow-hidden">
      
      {/* Background Accent Grids */}
      <div className="absolute inset-0 cs-pattern-dots opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <EventLogo variant="full" />
            </div>

            <p className="text-slate-300 text-sm font-poppins leading-relaxed max-w-md">
              <strong>Construyendo Sueños – Educación &amp; Deporte</strong> es una iniciativa institucional de <strong>CEDEIT S.A.S.</strong> enfocada en unir el talento estudiantil, los valores deportivos y la riqueza cultural de Popayán y el departamento del Cauca.
            </p>

            {/* CEDEIT Signature */}
            <div className="pt-2">
              <CedeitLogo variant="full" />
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-bebas text-2xl text-[#00A8E8] tracking-wider uppercase">
              Información de Contacto
            </h3>

            <div className="space-y-3 text-sm text-slate-300 font-poppins">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-[#FF7A00] flex-shrink-0 mt-0.5" />
                <span>{EVENT_DATA.eventDateFormatted} ({EVENT_DATA.eventTime})</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#7BC043] flex-shrink-0 mt-0.5" />
                <span>{EVENT_DATA.exactAddress}</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#00A8E8] flex-shrink-0" />
                <a href={`mailto:${EVENT_DATA.contactEmail}`} className="hover:text-[#FF7A00] transition-colors">
                  {EVENT_DATA.contactEmail}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#7BC043] flex-shrink-0" />
                <a
                  href={`https://wa.me/${EVENT_DATA.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#7BC043] transition-colors"
                >
                  +{EVENT_DATA.whatsappNumber} (Atención WhatsApp)
                </a>
              </div>
            </div>
          </div>

          {/* Hashtags & Social Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-bebas text-2xl text-[#7BC043] tracking-wider uppercase">
              Comunidad &amp; Hashtags
            </h3>

            <div className="flex flex-wrap gap-2">
              {EVENT_DATA.allHashtags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-white/10 text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10 hover:border-[#FF7A00] hover:text-[#FF7A00] transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <span className="text-xs text-slate-400 font-semibold block mb-2">Síguenos en redes sociales:</span>
              <div className="flex items-center gap-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/10 hover:bg-[#FF7A00] rounded-xl transition-colors text-white" title="Facebook CEDEIT">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/10 hover:bg-[#FF7A00] rounded-xl transition-colors text-white" title="Instagram CEDEIT">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/10 hover:bg-[#FF7A00] rounded-xl transition-colors text-white" title="YouTube CEDEIT">
                  <Youtube className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/10 hover:bg-[#FF7A00] rounded-xl transition-colors text-white" title="LinkedIn CEDEIT">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © 2026 <strong>CEDEIT S.A.S.</strong> – Centro para el Desarrollo Integral y Tecnológico. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-6">
            <a href="#faq" className="hover:text-white transition-colors flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-[#7BC043]" />
              <span>Preguntas Frecuentes</span>
            </a>
            <span>•</span>
            <a href="#inicio" className="hover:text-[#FF7A00] transition-colors">
              Volver arriba
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
