import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { contentDraft } from '../content';

interface SpecRowProps {
  title: string;
  desc: string;
  index: number;
}

const SpecRow: React.FC<SpecRowProps> = ({ title, desc, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
      className="border-t border-white/6 py-5 first:border-t-0 first:pt-0 lg:[&:nth-child(-n+2)]:border-t-0 lg:[&:nth-child(-n+2)]:pt-0"
    >
      <p className="text-[11px] uppercase tracking-[0.24em] text-brand-gold/74">{title}</p>
      <p className="mt-3 text-sm leading-7 text-brand-ink-light/84">{desc}</p>
    </motion.div>
  );
};

export default function Specifications({ onDownload }: { onDownload: () => void }) {
  const [showAll, setShowAll] = useState(false);
  const specificationsContent = contentDraft.specifications;
  const visibleSpecs = specificationsContent.visible;
  const hiddenSpecs = specificationsContent.hidden;

  return (
    <section className="py-20 md:py-28 border-t border-brand-gold/10 bg-brand-paper/84">
      <div className="container mx-auto px-6">
        <div className="lg:hidden">
          <div className="max-w-lg">
            <h2 className="mt-5 text-[2.3rem] font-light leading-[0.95] text-brand-ink">
              {specificationsContent.mobileHeadingLine1}
              <span className="mt-2 block font-serif italic text-brand-ink-light">{specificationsContent.mobileHeadingLine2}</span>
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-7 text-brand-ink-light/78">
              {specificationsContent.body}
            </p>
          </div>

          <div className="ads-mobile-card mt-5 rounded-[1.55rem] p-4">
            <div className="space-y-4">
              {visibleSpecs.slice(0, 3).map((spec, index) => (
                <SpecRow key={spec.title} title={spec.title} desc={spec.desc} index={index} />
              ))}
            </div>
            <div className="mt-6 grid gap-3">
              <button onClick={onDownload} className="button-primary w-full justify-center">
                {specificationsContent.downloadLabel}
              </button>
              <button onClick={() => setShowAll((value) => !value)} className="button-secondary w-full justify-center">
                {showAll ? specificationsContent.showLessLabel : `${specificationsContent.viewMoreMobileLabel} (${hiddenSpecs.length})`}
                <motion.span animate={{ rotate: showAll ? 180 : 0 }} transition={{ duration: 0.24 }}>
                  <ChevronDown size={14} />
                </motion.span>
              </button>
            </div>

            <AnimatePresence>
              {showAll && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="metal-rule my-6" />
                  <div className="space-y-4">
                    {hiddenSpecs.map((spec, index) => (
                      <SpecRow key={spec.title} title={spec.title} desc={spec.desc} index={index} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <h2 className="mt-5 text-4xl font-light leading-[0.98] text-brand-ink sm:text-5xl lg:text-[4rem]">
                {specificationsContent.desktopHeadingLine1}
                <span className="ml-3 font-serif italic text-brand-ink-light">{specificationsContent.desktopHeadingLine2}</span>
              </h2>
              <p className="mt-5 text-sm leading-7 text-brand-ink-light sm:text-base">
                {specificationsContent.body}
              </p>
            </div>

            <button onClick={onDownload} className="button-secondary">
              {specificationsContent.downloadLabel}
            </button>
          </div>

          <div className="editorial-panel mt-10 rounded-[2rem] p-6 md:p-8">
            <div className="grid gap-x-10 lg:grid-cols-2">
              {visibleSpecs.map((spec, index) => (
                <SpecRow key={spec.title} title={spec.title} desc={spec.desc} index={index} />
              ))}
            </div>

            <AnimatePresence>
              {showAll && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="metal-rule my-6" />
                  <div className="grid gap-x-10 lg:grid-cols-2">
                    {hiddenSpecs.map((spec, index) => (
                      <SpecRow key={spec.title} title={spec.title} desc={spec.desc} index={index} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setShowAll((value) => !value)}
                className="button-secondary min-w-[18rem] justify-center"
              >
                {showAll ? specificationsContent.showLessLabel : `${specificationsContent.viewAllDesktopLabel} (${hiddenSpecs.length} more)`}
                <motion.span animate={{ rotate: showAll ? 180 : 0 }} transition={{ duration: 0.24 }}>
                  <ChevronDown size={14} />
                </motion.span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* placeholder */}
    </section>
  );
}
