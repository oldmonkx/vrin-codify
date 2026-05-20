import React from 'react';
import { motion } from 'motion/react';
import { contentDraft } from '../content';

export default function Highlights() {
  const highlightsContent = contentDraft.highlights;
  const highlights = highlightsContent.cards;
  return (
    <section id="highlights" className="relative overflow-hidden bg-brand-surface py-16 md:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,213,170,0.06)_0%,transparent_34%),radial-gradient(circle_at_85%_22%,rgba(201,168,119,0.08)_0%,transparent_30%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,8,16,0.24)_0%,rgba(18,8,16,0.1)_26%,rgba(18,8,16,0.16)_100%)] pointer-events-none" />
      <div className="absolute -left-24 top-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(201,168,119,0.08)_0%,transparent_68%)] pointer-events-none transform-gpu" />
      <div className="absolute left-1/2 top-1/3 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(102,68,107,0.1)_0%,transparent_70%)] pointer-events-none transform-gpu" />
      <div className="absolute bottom-0 right-0 h-[520px] w-[520px] bg-[radial-gradient(circle,rgba(108,183,192,0.06)_0%,transparent_70%)] pointer-events-none transform-gpu" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-10 grid gap-8 md:mb-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.7fr)] lg:items-end lg:gap-16">
          <div className="text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.7 }}
              className="text-4xl font-sans tracking-normal font-light leading-[1.02] text-white drop-shadow-sm md:text-5xl lg:text-[4.8rem]"
            >
              {highlightsContent.headingLine1}
              <span className="font-serif italic font-light text-gradient block">{highlightsContent.headingLine2}</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16, duration: 0.7 }}
            className="mx-auto max-w-lg text-center text-sm font-light leading-relaxed text-brand-ink-light md:text-base lg:mx-0 lg:pb-3 lg:text-left"
          >
            {highlightsContent.body}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-5 lg:gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 + i * 0.12, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-[1.6rem] border border-brand-gold/10 bg-[linear-gradient(180deg,rgba(34,19,35,0.96)_0%,rgba(21,10,19,0.98)_100%)] shadow-[0_20px_56px_rgba(0,0,0,0.28)]"
            >
              <div className="h-[172px] rounded-t-[1.6rem] border-b border-brand-gold/10 bg-[linear-gradient(180deg,rgba(247,241,232,0.08)_0%,rgba(247,241,232,0.03)_100%)] md:h-[190px] lg:h-[208px]">
                {h.image ? (
                  <img
                    src={h.image}
                    alt={h.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <div className="h-[72%] w-[78%] rounded-[1.25rem] border border-dashed border-brand-gold/16 bg-[linear-gradient(180deg,rgba(253,251,247,0.03)_0%,rgba(253,251,247,0.01)_100%)]" />
                  </div>
                )}
              </div>

              <div className="relative p-5 md:p-5 lg:p-6">
                <h3 className="text-[1.65rem] font-serif font-medium tracking-[0.01em] text-white md:text-[1.85rem] lg:text-[2rem]">
                  {h.title}
                </h3>
                <p className="mt-3 max-w-sm text-xs font-light leading-relaxed text-white/74 md:text-sm">
                  {h.copy}
                </p>
                <div className="mt-5 flex items-center gap-4">
                  <span className="text-sm font-semibold tracking-wide text-white md:text-base">{h.stat}</span>
                  <span className="h-px flex-1 bg-gradient-to-r from-brand-gold/55 via-brand-gold/20 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
