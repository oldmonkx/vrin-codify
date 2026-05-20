import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { contentDraft } from '../content';

export default function Configurations({ onGetPrice }: { onGetPrice: () => void }) {
  const configurationsContent = contentDraft.configurations;
  const configs = configurationsContent.cards;

  return (
    <section id="configurations" className="relative overflow-hidden z-10 py-20 md:py-32 border-t border-brand-gold/15 min-h-[90vh] flex items-center">
      {/* Full Section Background Image */}
      <img
        src={configurationsContent.featureImage}
        alt="Vrindavan luxury residential towers"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-[center_10%]"
      />
      
      {/* Gradients for readability over the entire section */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#120810]/78 via-[#120810]/28 to-transparent hidden lg:block pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#120810]/80 via-[#120810]/42 to-black/10 lg:hidden pointer-events-none" />
      <div className="absolute inset-0 bg-black/4 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-start">
          
          {/* Left Side: Headings AND Config Panel */}
          <div className="flex flex-col max-w-xl">
            {/* Top Heading Area */}
            <div className="mb-14">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-[4rem] tracking-tight text-white leading-[1.05]"
              >
                <span className="font-light font-sans opacity-95">{configurationsContent.headingLine1}</span>{' '}
                <br className="hidden md:block" />
                <span className="font-serif italic font-light text-brand-gold pb-1">
                  {configurationsContent.headingLine2}
                </span>
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mt-6"
              >
                <p className="text-white/80 font-light text-sm md:text-base tracking-wide leading-relaxed">
                  {configurationsContent.body}
                </p>
              </motion.div>
            </div>

            {/* Config Panel Content directly on the image */}
            <div className="relative z-10 w-full flex flex-col">
              <div className="pb-6 border-b border-brand-gold/30">
                <h3 className="text-3xl md:text-[2.25rem] font-serif italic text-white drop-shadow-lg">
                  {configurationsContent.panelTitle}
                </h3>
              </div>

              <div className="mt-4">
                {configs.map((config, index) => (
                  <div
                    key={config.type}
                    className={`flex flex-col md:grid md:grid-cols-[1.2fr_1.5fr_auto] gap-4 items-start md:items-center py-5 px-4 md:px-6 -mx-4 md:-mx-6 hover:bg-brand-surface/40 hover:-translate-y-[2px] transition-all duration-300 rounded-lg ${
                      index !== configs.length - 1 ? 'border-b border-white/15' : ''
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:contents w-full gap-1 md:gap-0">
                      <p className="text-lg md:text-[1.35rem] font-medium tracking-[0.03em] text-white">
                        {config.type}
                      </p>
                      <p className="text-sm md:text-base font-normal text-white/70">
                        {config.size}
                      </p>
                    </div>
                    <button
                      onClick={onGetPrice}
                      className="button-primary w-full md:w-auto mt-2 md:mt-0 !py-3 md:!py-2.5"
                    >
                      {config.cta}
                      <ArrowRight size={14} className="hidden md:inline-block" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Side: Empty to let the image show the towers */}
          <div className="hidden lg:block"></div>

        </div>
      </div>
    </section>
  );
}
