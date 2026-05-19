import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const visibleSpecs = [
  {
    title: 'Structure',
    desc: 'RCC shear wall technology with M40-grade concrete; seismically designed for zone II compliance',
  },
  {
    title: 'Flooring | Living & Dining',
    desc: '1200 x 1800 mm premium vitrified tiles in living, dining and master bedroom',
  },
  {
    title: 'Flooring | Bedrooms',
    desc: '800 x 1200 mm vitrified tiles in all bedrooms; anti-skid ceramic tiles on balconies',
  },
  {
    title: 'Walls & Paint',
    desc: 'Internal: gypsum plaster with premium acrylic emulsion; external: weatherproof texture paint',
  },
];

const hiddenSpecs = [
  {
    title: 'Main Door',
    desc: '8-ft engineered teak wood frame with decorative laminate and heavy-duty hardware',
  },
  {
    title: 'Windows',
    desc: 'UPVC sliding windows with tinted glass; MS railing with toughened glass on all balconies',
  },
  {
    title: 'Kitchen',
    desc: 'Black galaxy granite counter, SS sink, ceramic dado tiling up to 600 mm, provision for chimney and RO',
  },
  {
    title: 'Bathrooms',
    desc: 'Floor-to-ceiling glazed tiles; branded CP fittings (Jaquar or equivalent); wall-hung EWC',
  },
  {
    title: 'Electrical',
    desc: 'MCB / ELCB distribution panel; concealed copper wiring; AC power points in all bedrooms and living room',
  },
  {
    title: 'Power Backup',
    desc: '100% DG backup for all common areas and lifts; limited backup for each apartment',
  },
  {
    title: 'Lifts',
    desc: '2 high-speed passenger lifts + 1 service lift per tower (Otis / Mitsubishi or equivalent)',
  },
  {
    title: 'Security',
    desc: 'Video door phone, perimeter CCTV, boom barriers at entry/exit, 24 x 7 manned security',
  },
  {
    title: 'Parking',
    desc: '4-level stilt + basement car parking; EV charging provision at designated bays',
  },
  {
    title: 'Water Supply',
    desc: 'WTP to potable standards + sewage treatment plant (STP); underground sump with overhead tank per tower',
  },
  {
    title: 'Fire Safety',
    desc: 'Pressurised fire hydrant system, automatic sprinklers, smoke detectors and dedicated fire escape stairway on every floor',
  },
  {
    title: 'Landscaping',
    desc: 'Professionally designed podium garden, water features, tree-lined promenades across 9.75 acres',
  },
  {
    title: 'Smart Home',
    desc: 'Pre-wired for home automation; intercom network connecting apartments to lobby',
  },
];

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
      className="border-t border-white/6 py-5 first:border-t-0 first:pt-0"
    >
      <p className="text-[11px] uppercase tracking-[0.24em] text-brand-gold/74">{title}</p>
      <p className="mt-3 text-sm leading-7 text-brand-ink-light/84">{desc}</p>
    </motion.div>
  );
};

export default function Specifications({ onDownload }: { onDownload: () => void }) {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="py-20 md:py-28 border-t border-brand-gold/10 bg-brand-paper/84">
      <div className="container mx-auto px-6">
        <div className="lg:hidden">
          <div className="max-w-lg">
            <span className="eyebrow">Specifications</span>
            <h2 className="mt-5 text-[2.3rem] font-light leading-[0.95] text-brand-ink">
              Keep technical
              <span className="mt-2 block font-serif italic text-brand-ink-light">proof short</span>
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-7 text-brand-ink-light/78">
              Premium materials and meticulous engineering across every detail.
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
                Download Full Specs
              </button>
              <button onClick={() => setShowAll((value) => !value)} className="button-secondary w-full justify-center">
                {showAll ? 'Show Less' : `View More Specs (${hiddenSpecs.length})`}
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
              <span className="eyebrow">Specifications</span>
              <h2 className="mt-5 text-4xl font-light leading-[0.98] text-brand-ink sm:text-5xl lg:text-[4rem]">
                Technical
                <span className="ml-3 font-serif italic text-brand-ink-light">ledger</span>
              </h2>
              <p className="mt-5 text-sm leading-7 text-brand-ink-light sm:text-base">
                Every residence at Vrindavan is built with best-in-class materials and precision engineering — from seismic-grade structure to premium branded fittings.
              </p>
            </div>

            <button onClick={onDownload} className="button-secondary">
              Download Full Specs
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
                {showAll ? 'Show Less' : `View All Specifications (${hiddenSpecs.length} more)`}
                <motion.span animate={{ rotate: showAll ? 180 : 0 }} transition={{ duration: 0.24 }}>
                  <ChevronDown size={14} />
                </motion.span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
