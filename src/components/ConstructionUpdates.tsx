import React from 'react';
import { motion } from 'motion/react';

const latestVideo = {
  id: '720zZcC9fWo',
  title: 'Vrindavan Construction Update - April 2026',
  month: 'April 2026',
};

function getEmbedUrl(videoId: string) {
  return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
}

export default function ConstructionUpdates() {
  return (
    <section
      id="construction-updates"
      className="pb-16 md:pb-24 bg-brand-cream relative"
    >
      <div className="absolute inset-0 bg-pattern-starry opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-6 md:pt-8 mb-8 md:mb-10 max-w-3xl"
        >
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans tracking-tight font-medium leading-tight text-brand-paper">
              Watch Our{' '}
              <span className="font-serif italic font-light bg-clip-text text-transparent bg-gradient-to-r from-brand-gold-deep to-brand-gold">
                Progress
              </span>
            </h2>
          </div>
          <p className="mt-4 text-sm font-light leading-relaxed text-brand-paper/70 md:text-base">
            Follow the journey of Vrindavan as it takes shape, with regular construction updates that bring you closer to the home, lifestyle, and community being built for tomorrow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="overflow-hidden border border-brand-gold/20 bg-brand-paper shadow-lg"
        >
          <div className="relative w-full aspect-video overflow-hidden">
            <iframe
              key={latestVideo.id}
              src={getEmbedUrl(latestVideo.id)}
              title={latestVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
