import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    src: '/optimized/clubhouse-new.webp',
    alt: 'Vrindavan Clubhouse — 1,35,000 Sq.Ft of Lifestyle',
    label: 'Clubhouse',
    span: 'col-span-2 row-span-2',
  },
  {
    src: '/optimized/green-quiet.webp',
    alt: 'Landscaped Gardens Across 9.5 Acres',
    label: 'Green Quiet',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/optimized/home-sky.webp',
    alt: 'Aerial View — Vrindavan Towers, Kondapur',
    label: 'Aerial View',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/optimized/fitness.webp',
    alt: 'World-Class Fitness & Sports Facilities',
    label: 'Sports & Fitness',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/optimized/greens.webp',
    alt: 'Curated Outdoor Spaces & Nature Trails',
    label: 'Outdoors & Nature',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/optimized/clubhouse.webp',
    alt: 'Premium Clubhouse Social Spaces',
    label: 'Social Spaces',
    span: 'col-span-2 row-span-1',
  },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length));
  const nextImage = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % galleryImages.length));

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-brand-paper relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(201,168,119,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-14"
        >
          <p className="text-[10px] tracking-[0.25em] uppercase text-brand-gold mb-3 font-sans">
            Life at Vrindavan
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-sans tracking-tight font-light leading-[1.05] text-white">
            A World Within{' '}
            <span className="font-serif italic font-light text-gradient">
              9.5 Acres
            </span>
          </h2>
          <p className="text-brand-ink-light font-light text-sm md:text-base leading-relaxed max-w-xl mt-4">
            From sky-high views to curated green quiet — discover the spaces crafted for everyday indulgence.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-2 md:gap-3 h-[420px] md:h-[560px] lg:h-[680px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => openLightbox(i)}
              className={`${img.span} relative overflow-hidden cursor-pointer group bg-brand-surface`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Gold border reveal on hover */}
              <div className="absolute inset-0 border border-brand-gold/0 group-hover:border-brand-gold/40 transition-colors duration-500 pointer-events-none" />
              {/* Label overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-black/80 via-black/20 to-transparent translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                <span className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-brand-gold font-sans">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom caption */}
        <p className="text-center text-brand-ink-muted text-[11px] tracking-wider mt-6 font-sans uppercase">
          Click any image to view full screen
        </p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Image */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[85vh] w-full mx-6"
            >
              <img
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                className="w-full h-full object-contain max-h-[85vh]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-sm font-sans">{galleryImages[lightboxIndex].alt}</p>
              </div>
            </motion.div>

            {/* Controls */}
            <button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              aria-label="Close gallery"
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:border-brand-gold hover:text-brand-gold transition-colors duration-200"
            >
              <X size={18} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:border-brand-gold hover:text-brand-gold transition-colors duration-200"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:border-brand-gold hover:text-brand-gold transition-colors duration-200"
            >
              <ChevronRight size={20} />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {galleryImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex(idx); }}
                  aria-label={`Go to image ${idx + 1}`}
                  className={`w-1.5 h-1.5 rotate-45 transition-colors duration-200 ${
                    idx === lightboxIndex ? 'bg-brand-gold' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
