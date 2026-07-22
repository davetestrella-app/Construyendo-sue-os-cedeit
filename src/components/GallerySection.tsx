import React, { useState } from 'react';
import { GALLERY_PHOTOS, GalleryPhoto } from '../config/eventData';
import { ZoomIn, X, Image as ImageIcon } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Todas');

  const categories = ['Todas', 'Deporte', 'Educación', 'Cultura', 'Familias', 'Comunidad'];

  const filteredPhotos = activeCategory === 'Todas'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter(p => p.category === activeCategory);

  return (
    <section className="py-20 bg-[#F4F6F8] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#00A8E8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#00A8E8]/10 text-[#00A8E8] font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Galería Fotográfica Oficial</span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-[#082B50] tracking-tight">
            Momentos e Impresiones del Evento
          </h2>
          <p className="mt-3 text-slate-600 font-poppins text-base sm:text-lg">
            Un vistazo a la energía, las sonrisas y el talento de ediciones previas y preparativos oficiales.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-semibold text-xs sm:text-sm transition-all ${
                activeCategory === cat
                  ? 'bg-[#082B50] text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photos Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo: GalleryPhoto) => (
            <div
              key={photo.id}
              className="cs-bento-card cs-bento-card-hover group relative overflow-hidden bg-white cursor-pointer border border-slate-200/80 h-64"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.imageUrl}
                alt={photo.altText}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082B50]/90 via-[#082B50]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-white">
                <span className="bg-[#FF7A00] text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full w-fit mb-2">
                  {photo.category}
                </span>
                <h3 className="cs-title text-3xl tracking-wide">
                  {photo.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-blue-200 mt-1 font-medium">
                  <ZoomIn className="w-4 h-4 text-[#00A8E8]" />
                  <span>Haz clic para ampliar</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal / Lightbox */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#082B50] rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl border border-white/20 text-white flex flex-col"
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-[#FF7A00] text-white p-2.5 rounded-full backdrop-blur-md transition-colors"
              aria-label="Cerrar ventana"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Image */}
            <div className="relative overflow-hidden bg-black flex-1 flex items-center justify-center max-h-[70vh]">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.altText}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain max-h-[70vh]"
              />
            </div>

            {/* Modal Footer Info */}
            <div className="p-6 bg-[#082B50] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="bg-[#7BC043] text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full mb-1 inline-block">
                  {selectedPhoto.category}
                </span>
                <h3 className="font-bebas text-3xl text-white">
                  {selectedPhoto.title}
                </h3>
              </div>
              <p className="text-xs text-slate-300 font-medium max-w-xs">
                {selectedPhoto.altText}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
