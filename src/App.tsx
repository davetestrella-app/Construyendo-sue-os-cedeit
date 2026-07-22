import React from 'react';
import { Hero } from './components/Hero';
import { QuickInfoStrip } from './components/QuickInfoStrip';
import { AboutSection } from './components/AboutSection';
import { PillarsSection } from './components/PillarsSection';
import { AudienceSection } from './components/AudienceSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { AgendaSection } from './components/AgendaSection';
import { BenefitsSection } from './components/BenefitsSection';
import { EmotionalSection } from './components/EmotionalSection';
import { GallerySection } from './components/GallerySection';
import { OrganizersSection } from './components/OrganizersSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';

export default function App() {
  return (
    <div className="cs-evento relative min-h-screen">
      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Quick Info Strip */}
        <QuickInfoStrip />

        {/* 4. ¿Qué es Construyendo Sueños? */}
        <AboutSection />

        {/* 5. Los Tres Pilares del Evento */}
        <PillarsSection />

        {/* 6. ¿Quiénes pueden participar? */}
        <AudienceSection />

        {/* 7. Actividades del Evento */}
        <ActivitiesSection />

        {/* 8. Agenda del Evento */}
        <AgendaSection />

        {/* 9. Beneficios de Participar */}
        <BenefitsSection />

        {/* 10. Sección Emocional */}
        <EmotionalSection />

        {/* 11. Galería Fotográfica */}
        <GallerySection />

        {/* 12. Organizadores y Aliados */}
        <OrganizersSection />

        {/* 13. Preguntas Frecuentes */}
        <FaqSection />

        {/* 14. Llamado Final */}
        <FinalCtaSection />
      </main>

      {/* 15. Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingButtons />
    </div>
  );
}


