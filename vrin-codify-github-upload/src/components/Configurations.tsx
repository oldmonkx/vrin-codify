import React from 'react';
import { motion } from 'motion/react';

interface ConfigCardProps {
  type: string;
  size: string;
  towers: string;
  image: string;
  onGetPrice: () => void;
  delay: number;
}

function ConfigCard({ type, size, towers, image, onGetPrice, delay }: ConfigCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-2xl overflow-hidden h-[280px] md:h-[420px] lg:h-[450px] shadow-2xl flex flex-col justify-end cursor-pointer"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 transition-transform duration-[1.5s] ease-out group-hover:scale-105"
        style={{ backgroundImage: `url('${image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      
      {/* Heavy Cinematic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10 group-hover:via-black/60 transition-colors duration-700" />
      
      {/* Soft Inner Border */}
      <div className="absolute inset-0 border border-white/10 rounded-[2rem] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 p-5 md:p-8 w-full">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-2xl md:text-4xl font-serif italic text-white drop-shadow-md">{type}</h4>
          {type.includes("Premium") ? (
            <span className="px-3 py-1 bg-brand-gold/10 text-brand-gold text-[10px] font-semibold uppercase tracking-[0.2em] rounded-full border border-brand-gold/30 shimmer">
              Signature
            </span>
          ) : null}
        </div>
        
        <div className="space-y-1 mb-4 md:mb-8">
          <p className="text-white/90 font-sans font-light tracking-wide text-sm md:text-lg">{size}</p>
        </div>

        <button
          onClick={onGetPrice}
          className="relative z-10 w-full py-4 bg-black/40 border border-brand-gold/25 rounded-2xl text-sm font-medium text-brand-gold/80 hover:bg-brand-gold/15 hover:border-brand-gold/60 hover:text-brand-gold-pale transition-[transform,background-color,color,border-color] duration-300 transform hover:-translate-y-1 shadow-[0_4px_15px_rgba(0,0,0,0.3)] tracking-wide"
        >
          Get Price Sheet
        </button>
      </div>
    </motion.div>
  );
}

export default function Configurations({ onGetPrice }: { onGetPrice: () => void }) {
  const configs = [
    { 
      type: "2 BHK", 
      size: "1475 & 1690 Sq.Ft", 
      towers: "E, F, G, H",
      image: "/3d-renders/3646_Vrindavan_Namishree__Kondapur_Image_03.jpg"
    },
    { 
      type: "3 BHK", 
      size: "2190 & 2400 Sq.Ft", 
      towers: "E, F, G, H",
      image: "/3d-renders/3646_Vrindavan_Namishree__Kondapur_Image_04.jpg"
    },
    { 
      type: "4 BHK Premium", 
      size: "2790 - 3375 Sq.Ft", 
      towers: "A, B, C, D",
      image: "/3d-renders/3646_Vrindavan_Namishree__Kondapur_Image_05.jpg"
    },
  ];

  return (
    <section id="configurations" className="pt-16 md:pt-24 pb-8 md:pb-12 relative overflow-visible bg-brand-cream z-10 border-t border-brand-gold/15">
      {/* Subtle luxury backdrop effects - Optimized with native radial gradients */}
      <div className="absolute inset-0 bg-pattern-starry opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_right,rgba(245,241,232,0.6)_0%,transparent_70%)] pointer-events-none transform-gpu" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[radial-gradient(circle,rgba(201,168,119,0.08)_0%,transparent_70%)] rounded-full pointer-events-none transform-gpu" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-xl">
             <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[9px] md:text-[10px] text-brand-gold-deep font-bold tracking-[0.3em] uppercase block mb-4"
            >
              Curated Living
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-3xl md:text-5xl lg:text-[4rem] tracking-tight text-brand-paper leading-[1.05]"
            >
               <span className="font-light font-sans opacity-95">Find Your</span> <br className="hidden md:block"/>
               <span className="font-serif italic font-light bg-clip-text text-transparent bg-gradient-to-r from-brand-gold-deep to-brand-gold pb-1">Perfect Home</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="md:w-1/3 flex md:justify-end"
          >
            <p className="text-brand-paper/80 font-light text-sm md:text-base tracking-wide leading-relaxed md:text-right border-l md:border-l-0 md:border-r border-brand-gold-deep/20 pl-4 md:pl-0 md:pr-4">
              Thoughtfully designed residences with panoramic views and premium finishes across 8 iconic towers.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {configs.map((config, i) => (
            <React.Fragment key={config.type}>
              <ConfigCard
                {...config}
                onGetPrice={onGetPrice}
                delay={i * 0.15}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
