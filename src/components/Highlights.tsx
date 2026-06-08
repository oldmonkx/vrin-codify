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
      
      {/* Ribbed Luxury Pinstripe Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.45]" 
        style={{ 
          backgroundImage: "repeating-linear-gradient(-45deg, rgba(201,168,119,0.07) 0, rgba(201,168,119,0.07) 1px, transparent 1px, transparent 32px)",
          maskImage: "linear-gradient(to bottom, black 10%, transparent 90%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 10%, transparent 90%)"
        }} 
      />

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

        <div className="mt-16 flex flex-col gap-24 md:gap-32 lg:gap-40">
          {highlights.map((h, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={h.title} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                {/* Image Section */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full md:w-[65%] relative z-10"
                >
                   <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-none border border-brand-gold/20 shadow-2xl group">
                     {h.image ? (
                       <img
                         src={h.image}
                         alt={h.title}
                         width={800}
                         height={500}
                         loading="lazy"
                         decoding="async"
                         className="h-full w-full object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-[1.03] will-change-transform"
                       />
                     ) : (
                       <div className="h-full w-full bg-brand-ink/40" />
                     )}
                   </div>
                </motion.div>

                {/* Text Box Section (Overlapping) */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className={`w-full md:w-[45%] relative z-20 ${isEven ? 'md:-ml-24' : 'md:-mr-24'} mt-[-3rem] md:mt-16 group/text`}
                >
                  <div className={`relative overflow-hidden bg-[linear-gradient(135deg,rgba(25,12,22,0.96)_0%,rgba(15,8,13,0.98)_100%)] p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.4)] border-brand-gold/30 ${isEven ? 'border-l' : 'border-r'}`}>
                    {/* Materiality: Ambient Glow */}
                    <div className={`absolute -inset-24 bg-[radial-gradient(circle_at_${isEven ? 'top_right' : 'top_left'},rgba(201,168,119,0.15),transparent_60%)] pointer-events-none opacity-50 transition-opacity duration-1000 group-hover/text:opacity-100`} />
                    
                    <div className="relative z-10">
                      <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-brand-gold uppercase">{h.stat}</span>
                      <h3 className="mt-4 text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-serif font-light leading-tight text-white drop-shadow-md">
                        {h.title}
                      </h3>
                      <p className="mt-6 text-sm md:text-base font-light leading-relaxed text-white/70">
                        {h.copy}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
