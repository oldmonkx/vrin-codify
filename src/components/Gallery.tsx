import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    src: '/optimized/clubhouse-new.webp',
    alt: 'World-Class Fitness & Sports Facilities',
    caption: 'Sports & Fitness',
    sub: 'Olympic Pool · Courts · Indoor Gym',
  },
  {
    src: '/optimized/banquet-social.png',
    alt: 'Premium Clubhouse Social Spaces',
    caption: 'Social Spaces',
    sub: 'Banquet · Co-working · Guest Suites',
  },
  {
    src: '/optimized/club.jpg',
    alt: 'Vrindavan Clubhouse — 1,35,000 Sq.Ft',
    caption: 'Clubhouse',
    sub: '1,35,000 Sq.Ft of Lifestyle',
  },
  {
    src: '/optimized/double-lobbies.jpg',
    alt: 'Landscaped Gardens Across 9.5 Acres',
    caption: 'Green Quiet',
    sub: '9.5 Acres of Curated Landscaping',
  },
  {
    src: '/optimized/court.jpg',
    alt: 'Professional Sports Courts',
    caption: 'Sports Courts',
    sub: 'Tennis, Badminton & Basketball',
  },
  {
    src: '/optimized/entrance.jpg',
    alt: 'Grand Entrance Gateway',
    caption: 'Grand Entrance',
    sub: 'Welcome to Vrindavan',
  },
  {
    src: '/optimized/gym.jpg',
    alt: 'State-of-the-Art Fitness Center',
    caption: 'Fitness Center',
    sub: 'Modern Strength & Cardio Equipment',
  },
  {
    src: '/optimized/restraunt.jpg',
    alt: 'Premium Restaurant Dining',
    caption: 'Fine Dining',
    sub: 'In-house Restaurant & Cafe Lounge',
  },
];

const AUTOPLAY_MS = 4500;

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.3 });

  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);
  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);

  // Autoplay
  useEffect(() => {
    if (paused || !isInView) return;
    const t = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [current, paused, next, isInView]);

  // Keyboard
  useEffect(() => {
    if (!isInView) return;
    const fn = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [prev, next, isInView]);

  return (
    <section id="gallery" ref={sectionRef} className="py-16 md:py-24 bg-brand-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(201,168,119,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-brand-gold/40" />
            <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-brand-gold font-['Josefin_Sans'] font-medium">
              Life at Vrindavan
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-['Josefin_Sans'] tracking-tight font-light leading-[1.05] text-white">
              A World Within{' '}
              <span className="font-['Cinzel'] italic font-light text-gradient">9.5 Acres</span>
            </h2>
            {/* Desktop nav arrows */}
            <div className="hidden md:flex items-center gap-3 pb-1">
              <button
                onClick={prev}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                aria-label="Previous image"
                className="w-10 h-10 flex items-center justify-center border border-brand-gold/30 text-brand-gold hover:bg-brand-gold hover:text-brand-paper transition-colors duration-200"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="text-brand-ink-muted text-xs tabular-nums font-sans">
                {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </span>
              <button
                onClick={next}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                aria-label="Next image"
                className="w-10 h-10 flex items-center justify-center border border-brand-gold/30 text-brand-gold hover:bg-brand-gold hover:text-brand-paper transition-colors duration-200"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Main slide */}
          <div className="relative w-full aspect-[16/9.9] md:aspect-[21/9.9] lg:aspect-[21/8.8] overflow-hidden bg-brand-surface">
            <AnimatePresence mode="wait">
              <motion.img
                key={slides[current].src}
                src={slides[current].src}
                alt={slides[current].alt}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Caption bottom-left */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35 }}
                className="absolute bottom-5 left-5 md:bottom-8 md:left-8"
              >
                <p className="text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-brand-gold font-sans mb-1">
                  {slides[current].caption}
                </p>
                <p className="text-white text-sm md:text-base font-light font-sans">
                  {slides[current].sub}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10">
              <motion.div
                key={current + '-bar'}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: AUTOPLAY_MS / 1000, ease: 'linear' }}
                className="h-full bg-brand-gold"
              />
            </div>
          </div>

          {/* Dot strip below image */}
          <div className="flex items-center justify-between mt-4">
            {/* Dots */}
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`transition-all duration-300 ${
                    i === current
                      ? 'w-6 h-1.5 bg-brand-gold'
                      : 'w-1.5 h-1.5 rotate-45 bg-white/20 hover:bg-brand-gold/50'
                  }`}
                />
              ))}
            </div>

            {/* Mobile arrows */}
            <div className="flex md:hidden items-center gap-3">
              <button onClick={prev} aria-label="Previous image" className="w-9 h-9 flex items-center justify-center border border-brand-gold/30 text-brand-gold">
                <ChevronLeft size={16} />
              </button>
              <button onClick={next} aria-label="Next image" className="w-9 h-9 flex items-center justify-center border border-brand-gold/30 text-brand-gold">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
