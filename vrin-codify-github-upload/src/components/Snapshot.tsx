import React from 'react';
import { motion } from 'motion/react';

export default function Snapshot() {
  const stats = [
    { label: "Land Area", value: "9.75", unit: "Acres", colSpan: "md:col-span-2", rowSpan: "md:row-span-2" },
    { label: "Towers", value: "8", unit: "G+52", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
    { label: "Total Units", value: "1,846", unit: "Homes", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
    { label: "Clubhouse", value: "1.35L", unit: "Sq.Ft", colSpan: "md:col-span-2", rowSpan: "md:row-span-1" },
  ];

  return (
    <section id="overview" className="py-32 bg-brand-paper relative">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-sans tracking-tighter font-medium mb-4 text-brand-ink"
          >
            Vrindavan <span className="font-serif italic text-brand-ink-light font-light">at a Glance</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[160px] md:auto-rows-[200px]">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`glass-panel rounded-[2rem] p-8 flex flex-col justify-between group hover:border-brand-gold/20 hover:bg-brand-gold/5 transition-all duration-500 ${stat.colSpan} ${stat.rowSpan}`}
            >
              <p className="text-[10px] uppercase tracking-[0.22em] text-brand-gold/50 font-medium">
                {stat.label}
              </p>
              <div className="flex items-baseline gap-2">
                <h4 className={`font-sans tracking-tighter font-medium text-brand-ink ${stat.rowSpan === 'md:row-span-2' ? 'text-7xl md:text-9xl' : 'text-5xl md:text-6xl'}`}>
                  {stat.value}
                </h4>
                <span className="text-lg md:text-xl text-brand-gold font-serif italic shimmer">
                  {stat.unit}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
