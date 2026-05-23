import React from 'react';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { contentDraft } from '../content';

export default function Location() {
  const locationContent = contentDraft.location;
  const proximities = locationContent.proximities;
  return (
    <section id="location" className="py-16 md:py-32 bg-brand-cream relative border-t border-brand-gold/15">
      <div className="absolute inset-0 bg-pattern-starry opacity-60 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-12 max-w-3xl lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[2.25rem] md:text-6xl font-sans tracking-tighter font-medium mb-6 text-brand-paper leading-[1.1]"
          >
            {locationContent.headingLine1} <span className="font-serif italic bg-clip-text text-transparent bg-gradient-to-r from-brand-gold-deep to-brand-gold font-light">{locationContent.headingLine2}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.65 }}
            className="max-w-2xl text-sm font-light leading-relaxed text-brand-paper/80 md:text-base"
          >
            {locationContent.body}
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Left: Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 rounded-[2rem] overflow-hidden relative group bg-white/80 border border-brand-gold/20 p-2 shadow-xl"
          >
            <div className="relative h-[320px] w-full overflow-hidden rounded-[1.5rem] sm:h-[360px] lg:h-full lg:min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.629365990279!2d78.33277872516702!3d17.477444933425236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93d45182655b%3A0x25d482f08958ab61!2sVrindavan%20by%20Namishree%20Marketing%20and%20Sale%20Office!5e0!3m2!1sen!2sin!4v1747760000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
              />
              {/* Transparent tap overlay — opens Google Maps app on mobile */}
              <a
                href="https://maps.app.goo.gl/4zWbNTQVLEGhrxKj6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open in Google Maps"
                className="absolute inset-0 z-10"
              />
            </div>
          </motion.div>

          {/* Right: Proximity List */}
          <div className="flex-1 bg-white/80 rounded-[2rem] p-5 md:p-8 flex flex-col justify-center border border-brand-gold/20 shadow-xl relative overflow-hidden">
            {/* Subtle inner highlight */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold-pale/20 to-transparent pointer-events-none" />
            
            <div className="relative z-10 mb-8">
              <p className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-brand-gold-deep">{locationContent.nearbyLabel}</p>
            </div>
            
            <div className="relative z-10 grid gap-x-8 md:grid-cols-2">
              {proximities.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between gap-4 border-t border-brand-gold/15 py-4 ${
                    index === 0 || index === 1 ? 'md:border-t-0 md:pt-0' : ''
                  } ${index === 0 ? 'border-t-0 pt-0' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-gold/30 bg-brand-gold/10 text-brand-gold-deep shadow-sm">
                      <MapPin size={14} strokeWidth={1.8} />
                    </span>
                    <span className="text-sm md:text-xs lg:text-[13px] font-medium tracking-[0.03em] text-brand-paper">{item.label}</span>
                  </div>
                  <span className="text-sm font-medium text-brand-gold-deep">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
