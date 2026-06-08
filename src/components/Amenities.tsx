import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { contentDraft } from '../content';

interface AmenitiesProps {
  onDownloadBrochure?: () => void;
}

export default function Amenities({ onDownloadBrochure }: AmenitiesProps) {
  const [active, setActive] = useState(0);
  const amenityGroups = contentDraft.amenities.groups;

  return (
    <section id="amenities" className="py-16 lg:py-32 bg-brand-cream relative overflow-hidden border-t border-brand-gold/15">
      <div className="absolute inset-0 bg-pattern-starry opacity-60 pointer-events-none" />
      <div className="container mx-auto px-6 h-full flex flex-col lg:flex-row items-center gap-16 lg:gap-12 relative z-10">
        
        {/* Left Side (Text) */}
        <div className="w-full lg:w-2/5 flex flex-col justify-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-[56px] font-serif tracking-tight font-light text-brand-paper mb-6 leading-[1.15]"
          >
            {contentDraft.amenities.headingLine1}{' '}
            <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-brand-gold-deep to-brand-gold">
              {contentDraft.amenities.headingLine2}
            </span>{' '}
            <span className="block mt-2 font-serif text-brand-paper">
              {contentDraft.amenities.headingLine3}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-base text-brand-paper/70 font-light leading-relaxed mb-8 max-w-xl"
          >
            {contentDraft.amenities.description}
          </motion.p>

          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onClick={onDownloadBrochure}
            className="button-primary self-start mt-2 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            {contentDraft.amenities.cta}
            <ArrowRight size={16} />
          </motion.button>
        </div>

        {/* Right Side (Accordion) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full lg:w-3/5 h-[400px] md:h-[500px] lg:h-[650px] flex gap-2 lg:gap-4"
        >
          {amenityGroups.map((group, index) => {
            const isActive = active === index;
            return (
              <div

                key={index}

                onClick={() => setActive(index)}

                className={`relative overflow-hidden bg-brand-paper cursor-pointer flex flex-col justify-end transition-[flex,border-radius] duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[flex]
                  ${isActive ? "flex-[4] lg:flex-[5] rounded-[2rem]" : "flex-[1] shadow-none rounded-2xl lg:rounded-full"}`}
              >
                {/* Background Image Container */}
                <img
                  src={group.image}
                  alt={group.fullTitle}
                  width={600}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className={`absolute inset-0 h-full w-full object-cover transition-[transform,opacity] duration-[1.5s] ease-out ${
                    isActive ? 'scale-105 opacity-100' : 'scale-100 opacity-55'
                  }`}
                />

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-paper via-transparent to-transparent opacity-80" />
                <div className={`absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-brand-paper via-brand-paper/60 to-transparent transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-60'}`} />

                {/* Content inside the slice */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-end pb-8 lg:pb-12 overflow-hidden">
                  
                  {/* Vertical Text (Shows when inactive, hides when active) */}
                  <div 
                    className={`transition-all duration-500 whitespace-nowrap text-lg lg:text-2xl font-serif tracking-[0.4em] uppercase text-white/70 absolute bottom-12
                    ${isActive ? 'opacity-0 translate-y-8 invisible' : 'opacity-100 translate-y-0 visible'}`}
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                  >
                    {group.title}
                  </div>

                  {/* Active State Content */}
                  <div className={`absolute bottom-0 left-0 w-full p-6 lg:p-10 transition-all duration-700 delay-150 transform
                    ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none absolute'}`}>
                     <h3 className="text-2xl lg:text-4xl font-serif italic text-white mb-4 lg:mb-6">{group.fullTitle}</h3>
                     <ul className="space-y-3 lg:space-y-4 mt-2">
                       {group.items.map((item, i) => (
                         <li key={i} className="text-white/80 text-xs lg:text-sm font-light tracking-[0.08em] leading-relaxed flex items-center gap-3">
                           <span className="w-1 h-1 rotate-45 bg-brand-gold-deep block shrink-0" />
                           {item}
                         </li>
                       ))}
                     </ul>
                  </div>

                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
