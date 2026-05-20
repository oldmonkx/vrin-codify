import React from 'react';
import { motion } from 'motion/react';
import { contentDraft } from '../content';

export default function ProjectHighlights() {
  const projectHighlights = contentDraft.projectHighlights;

  return (
    <section
      id="project-highlights"
      className="relative overflow-hidden border-t border-brand-gold/15 bg-brand-cream py-14 md:py-16 lg:py-18"
    >
      <div className="absolute inset-0 bg-pattern-starry opacity-45 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-7xl"
        >
          <h2 className="text-center text-[2.55rem] font-serif font-light tracking-tight text-brand-paper md:text-[4.25rem] lg:text-[3.05rem]">
            {projectHighlights.title}
          </h2>

          <div className="mt-7 border-y border-brand-paper/14 bg-white/22 backdrop-blur-[1px]">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
              {projectHighlights.items.map((item, index) => {
                const isLast = index === projectHighlights.items.length - 1;

                return (
                  <motion.div
                    key={`${item.value}-${item.label}`}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.7 }}
                    className={`relative flex min-h-[122px] flex-col items-center justify-center px-5 py-6 text-center md:min-h-[132px] lg:px-7 ${
                      !isLast ? 'xl:border-r xl:border-brand-paper/22' : ''
                    }`}
                  >
                    {!isLast ? (
                      <span className="absolute right-0 top-1/2 hidden h-14 w-px -translate-y-1/2 bg-brand-paper/20 xl:block" />
                    ) : null}

                    <p className="max-w-[10ch] text-[2rem] font-semibold leading-[0.94] text-brand-gold-deep md:text-[2.35rem] lg:text-[2.6rem]">
                      {item.value}
                    </p>
                    <p className="mt-2 max-w-[14ch] text-[1rem] font-medium leading-tight text-brand-paper/62 md:text-[1.08rem]">
                      {item.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
