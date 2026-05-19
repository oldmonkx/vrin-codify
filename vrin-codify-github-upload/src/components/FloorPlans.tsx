import React from 'react';
import { motion } from 'motion/react';
import { Lock, FileDown } from 'lucide-react';

interface FloorPlansProps {
  onUnlock: () => void;
  isUnlocked: boolean;
}

export default function FloorPlans({ onUnlock, isUnlocked }: FloorPlansProps) {
  return (
    <section id="floor-plans" className="py-16 md:py-24 bg-brand-surface relative overflow-visible flex items-center lg:min-h-[600px]">
      
      {/* Ambient background glows - Optimized with native radial gradients */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(201,168,119,0.05)_0%,transparent_70%)] rounded-full pointer-events-none transform-gpu -translate-y-1/2" />

      <div className="container mx-auto px-6 lg:flex lg:items-center lg:gap-20 relative z-10">
        
        {/* Left container: Text */}
        <div className="mb-12 lg:mb-0 lg:w-[45%]">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold/80 text-[10px] font-bold tracking-[0.3em] uppercase block mb-4"
          >
            Architectural Excellence
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-[4rem] font-sans tracking-tight font-light leading-[1.05] mb-6 text-white drop-shadow-sm"
          >
            Masterfully <br className="hidden lg:block"/>
            <span className="font-serif italic font-light text-gradient block lg:mt-1">Planned Spaces</span>
          </motion.h2>

          <p className="text-brand-ink-light font-light text-sm md:text-base leading-relaxed max-w-md mb-8">
            Get exclusive access to high-resolution master plans, individual unit layouts, detailed dimensions, and facing directions for all 2, 3 & 4 BHK residences.
          </p>

          <div className="hidden lg:block border-l-2 border-brand-gold/20 pl-6 mt-8">
            <p className="text-white/80 font-medium text-sm tracking-wide">Included in the download:</p>
            <ul className="mt-3 space-y-2 text-brand-ink-light text-xs tracking-wide font-light">
               <li>• Complete Project Master Plan</li>
               <li>• 2, 3 & 4 BHK Detailed Floor Plans</li>
               <li>• Block & Tower Orientations</li>
            </ul>
          </div>
        </div>

        {/* Right container: The blurred graphic (Clickable) */}
        <div className="lg:w-[55%]">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onClick={onUnlock}
            className="relative glass-panel rounded-[2rem] overflow-hidden border border-brand-gold/15 shadow-[0_0_40px_rgba(0,0,0,0.5)] group w-full cursor-pointer hover:border-brand-gold/40 transition-colors duration-500"
          >
            
            {/* Static Floor Plan Background (Crisp and Dimmed) */}
            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-[#1E1020]">
              <img
                src="/floorplans/10.jpg"
                alt="Architectural Blueprint"
                className="w-full h-full object-cover opacity-50 transform scale-105 group-hover:scale-110 transition-transform duration-[7s] ease-out"
              />
              <div className="absolute inset-0 bg-[#1E1020]/20 group-hover:bg-transparent transition-colors duration-700" />
            </div>

            {/* The Premium Unlock Card (Floating) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] md:w-[65%] p-8 rounded-3xl bg-[rgba(18,8,16,0.94)] border border-brand-gold/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex flex-col items-center text-center group-hover:border-brand-gold/40 transition-colors duration-500 overflow-hidden transform-gpu">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 to-transparent pointer-events-none" />
                <div className="relative z-10 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full border border-brand-gold/30 bg-brand-gold/5 flex items-center justify-center text-brand-gold mb-5 shadow-[0_0_15px_rgba(201,168,119,0.15)] group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(201,168,119,0.3)] transition-[transform,shadow] duration-500">
                      <Lock size={20} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif italic text-white drop-shadow-md mb-2">Unlock Master Plan</h3>
                    <p className="text-white/60 text-[11px] md:text-xs tracking-wide max-w-[220px] mb-6 font-light">
                      View all detailed BHK layouts, precise dimensions, and exact block orientations.
                    </p>
                    <div className="button-primary px-6 border border-brand-gold/30 py-2.5 text-[10px] pointer-events-none flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                      <FileDown size={14} /> Enquire to Access
                    </div>
                </div>
            </div>

            {/* Hover visual cue border */}
            <div className="absolute inset-0 border-2 border-brand-gold/0 group-hover:border-brand-gold/20 rounded-[2rem] transition-colors duration-500 pointer-events-none" />

          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
