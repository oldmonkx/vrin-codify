import React from 'react';
import { motion } from 'motion/react';

const highlights = [
  {
    subtitle: "WELLNESS & LEISURE",
    title: "The Grand Clubhouse",
    stat: "1,35,000 Sq.Ft",
    copy: "A sanctuary of indulgence draped in vertical gardens — bespoke amenities designed for those who appreciate the finest.",
    image: "/3d-renders/3646_Vrindavan_Namishree__Kondapur_Image_09.jpg",
  },
  {
    subtitle: "NATURE & TRANQUILITY",
    title: "A Sanctuary of Green",
    stat: "9.75 Acres",
    copy: "Pristine water features, quiet promenades, and lush courtyards — a private oasis at the heart of Kondapur.",
    image: "/3d-renders/3646_Vrindavan_Namishree__Kondapur_Image_12.jpg",
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="pt-4 md:pt-8 lg:pt-12 pb-16 md:pb-20 lg:pb-24 relative overflow-visible bg-brand-surface flex items-center lg:min-h-[700px]">
      
      {/* Luxury Background Glows - Optimized with native radial gradients instead of expensive blur filters */}
      <div className="absolute top-1/2 left-1/4 w-[500px] lg:w-[800px] h-[500px] lg:h-[800px] bg-[radial-gradient(circle,rgba(201,168,119,0.05)_0%,transparent_70%)] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transform-gpu" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(102,68,107,0.05)_0%,transparent_70%)] pointer-events-none -translate-y-1/2 transform-gpu" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:items-center">

          {/* Left Column: Section Heading */}
          <div className="mb-10 lg:mb-0 lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left lg:pr-8">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold/80 text-[10px] font-bold tracking-[0.3em] uppercase block mb-3 lg:mb-5"
          >
            Life at Vrindavan
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.7 }}
            className="text-3xl md:text-5xl lg:text-[4.5rem] font-sans tracking-tight font-light leading-[1.05] max-w-lg text-white drop-shadow-sm"
          >
            Where every detail <br className="hidden md:block lg:hidden"/>
            <span className="font-serif italic font-light text-gradient block lg:mt-2">is a luxury.</span>
          </motion.h2>
          <div className="w-8 lg:w-16 h-px bg-brand-gold/40 mt-6 lg:mt-10 mx-auto lg:mx-0"></div>
        </div>

          {/* Right Column: Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.15), duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`w-full relative overflow-hidden rounded-[2rem] group cursor-pointer border border-brand-gold/10 bg-brand-surface/40 shadow-2xl h-[380px] lg:h-[480px]`}
            >
              {/* Image */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={h.image}
                  alt={h.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Dim overlay that fades on hover */}
              <div className="absolute inset-0 bg-[#1E1020]/20 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />

              {/* Floating Glass Text Box - Blur disabled on mobile for performance */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 p-5 md:p-8 flex flex-col z-10 rounded-[1.5rem] bg-[rgba(18,8,16,0.95)] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden">
                {/* Subtle inner highlight */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent pointer-events-none" />
                
                <div className="relative z-10">
                  {/* Subtitle pill */}
                  <span className="inline-flex items-center gap-3 mb-3">
                    <span className="h-px w-5 lg:w-6 bg-brand-gold/60" />
                    <span className="text-brand-gold text-[9px] md:text-[10px] font-bold tracking-[0.25em] uppercase">
                      {h.subtitle}
                    </span>
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-serif italic text-white drop-shadow-md mb-2">
                    {h.title}
                  </h3>

                  {/* Body */}
                  <p className="text-brand-ink-light text-xs md:text-sm font-light leading-relaxed mb-4 md:mb-5 max-w-[90%] md:max-w-xs">
                    {h.copy}
                  </p>

                  {/* Stat */}
                  <div className="border-t border-white/10 pt-4 pb-1">
                    <span className="text-white font-sans font-medium text-sm md:text-base tracking-wide flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold block shadow-[0_0_8px_rgba(201,168,119,0.8)]" />
                      {h.stat}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
