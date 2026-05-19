import React from 'react';
import { motion } from 'motion/react';
import { contentDraft } from '../content';

const highlights = [
  {
    subtitle: 'WELLNESS & LEISURE',
    title: 'Clubhouse Life',
    stat: '1,35,000 Sq.Ft',
    copy: 'Wellness, leisure, co-working, and celebration spaces designed for everyday indulgence.',
    image: contentDraft.highlights.cards[0].image,
  },
  {
    subtitle: 'NATURE & TRANQUILITY',
    title: 'Green Quiet',
    stat: '9.75 Acres',
    copy: 'Private courtyards, water features, shaded walks, and calm pockets of green.',
    image: contentDraft.highlights.cards[1].image,
  },
  {
    subtitle: 'REFINED RESIDENCES',
    title: 'Home in the Sky',
    stat: '2, 3 & 4 BHK',
    copy: 'Thoughtfully finished homes with generous views, elegant interiors, and everyday comfort.',
    image: '/towebp/3646_Vrindavan_Namishree _Kondapur_Bedroom_28.webp',
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="relative overflow-hidden bg-brand-surface py-16 md:py-20 lg:py-24">
      <div className="absolute -left-24 top-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(201,168,119,0.08)_0%,transparent_68%)] pointer-events-none transform-gpu" />
      <div className="absolute left-1/2 top-1/3 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(102,68,107,0.1)_0%,transparent_70%)] pointer-events-none transform-gpu" />
      <div className="absolute bottom-0 right-0 h-[520px] w-[520px] bg-[radial-gradient(circle,rgba(108,183,192,0.06)_0%,transparent_70%)] pointer-events-none transform-gpu" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-10 grid gap-8 md:mb-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.7fr)] lg:items-end lg:gap-16">
          <div className="text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center gap-4 text-brand-gold/80 text-[10px] font-bold tracking-[0.3em] uppercase lg:justify-start"
            >
              <span className="hidden h-px w-12 bg-brand-gold/45 lg:block" />
              Life at Vrindavan
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.7 }}
              className="mt-5 text-4xl font-sans tracking-normal font-light leading-[1.02] text-white drop-shadow-sm md:text-5xl lg:text-[4.8rem]"
            >
              Where every detail
              <span className="font-serif italic font-light text-gradient block">is a luxury.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16, duration: 0.7 }}
            className="mx-auto max-w-lg text-center text-sm font-light leading-relaxed text-brand-ink-light md:text-base lg:mx-0 lg:pb-3 lg:text-left"
          >
            A composed lifestyle shaped around wellness, greenery, and residences that feel quietly elevated from the moment you arrive.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6 lg:gap-8">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 + i * 0.12, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-[390px] w-full cursor-pointer overflow-hidden rounded-[1.75rem] border border-brand-gold/10 bg-brand-surface/40 shadow-[0_22px_70px_rgba(0,0,0,0.34)] md:h-[430px] lg:h-[520px]"
            >
              <img
                src={h.image}
                alt={h.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-[#1E1020]/5 via-[#1E1020]/22 to-[#120810]/85 transition-opacity duration-700 group-hover:opacity-90 pointer-events-none" />
              <div className="absolute inset-0 border border-white/5 rounded-[1.75rem] pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 z-10 p-5 md:p-6 lg:p-8">
                <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.24em] text-brand-gold">
                  {h.subtitle}
                </span>
                <h3 className="text-2xl font-serif italic text-white drop-shadow-md md:text-3xl lg:text-[2.35rem]">
                  {h.title}
                </h3>
                <p className="mt-3 max-w-sm text-xs font-light leading-relaxed text-white/78 md:text-sm">
                  {h.copy}
                </p>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold tracking-wide text-white md:text-base">{h.stat}</span>
                  <span className="h-2 w-2 rounded-full bg-brand-gold shadow-[0_0_14px_rgba(201,168,119,0.85)]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
