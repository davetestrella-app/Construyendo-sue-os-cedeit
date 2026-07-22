import React, { useState } from 'react';
import { FAQ_LIST, FaqItem } from '../config/eventData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#F4F6F8] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-[#00A8E8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#00A8E8]/10 text-[#00A8E8] font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Resolviendo Inquietudes</span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-[#082B50] tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="mt-2 text-slate-600 font-poppins text-base sm:text-lg">
            Encuentra aquí todas las respuestas que necesitas para preparar tu participación.
          </p>
        </div>

        {/* Accordion Bento List */}
        <div className="space-y-4">
          {FAQ_LIST.map((faq: FaqItem, idx: number) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="cs-bento-card bg-white border border-slate-200/80 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left cs-title text-3xl text-[#082B50] flex items-center justify-between gap-4 hover:text-[#FF7A00] transition-colors focus:outline-none cursor-pointer"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div className={`p-2.5 rounded-full bg-[#F4F6F8] text-[#082B50] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#FF7A00] text-white' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-slate-600 text-sm font-poppins leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
