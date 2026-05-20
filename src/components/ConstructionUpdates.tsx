import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

interface VideoItem {
  id: string;
  title: string;
  month: string;
}

// Placeholder video IDs — replace with real YouTube IDs when supplied
const videos: VideoItem[] = [
  {
    id: 'dQw4w9WgXcQ', // placeholder
    title: 'Vrindavan Construction Update — May 2025',
    month: 'May 2025',
  },
  {
    id: 'dQw4w9WgXcQ', // placeholder
    title: 'Vrindavan Construction Update — April 2025',
    month: 'April 2025',
  },
  {
    id: 'dQw4w9WgXcQ', // placeholder
    title: 'Vrindavan Construction Update — March 2025',
    month: 'March 2025',
  },
];

export default function ConstructionUpdates() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeVideo = videos[activeIndex];

  return (
    <section id="construction-updates" className="py-16 md:py-24 bg-brand-surface relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(201,168,119,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-14"
        >
          <p className="text-[10px] tracking-[0.25em] uppercase text-brand-gold mb-3 font-sans">
            Construction Update
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-sans tracking-tight font-light leading-[1.05] text-white">
            Watch Our{' '}
            <span className="font-serif italic font-light text-gradient">
              Progress
            </span>
          </h2>
          <p className="text-brand-ink-light font-light text-sm md:text-base leading-relaxed max-w-xl mt-4">
            See Vrindavan rising to its full glory. Live construction updates directly from the site in Kondapur.
          </p>
        </motion.div>

        {/* Video Player + Playlist */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          {/* Main Player */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:flex-[3] relative"
          >
            <div className="relative w-full aspect-video bg-brand-paper border border-brand-gold/15 overflow-hidden">
              <iframe
                key={activeVideo.id + activeIndex}
                src={`https://www.youtube.com/embed/${activeVideo.id}?rel=0&modestbranding=1&color=white`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full"
              />
            </div>
            {/* Now Playing label */}
            <div className="mt-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rotate-45 bg-brand-gold inline-block flex-shrink-0" />
              <p className="text-brand-ink-light text-sm font-sans font-light">
                {activeVideo.title}
              </p>
            </div>
          </motion.div>

          {/* Playlist Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:flex-[1] flex flex-col"
          >
            {/* Sidebar header */}
            <div className="flex items-center justify-between px-4 py-3 bg-brand-paper border border-brand-gold/15 border-b-0 mb-0">
              <span className="text-[10px] tracking-[0.2em] uppercase text-brand-gold font-sans">
                Vrindavan by Namishree
              </span>
              <span className="text-[10px] text-brand-ink-muted font-sans">
                {videos.length} Videos
              </span>
            </div>

            {/* Video list */}
            <div className="border border-brand-gold/15 overflow-hidden">
              {videos.map((video, index) => (
                <button
                  key={video.id + index}
                  id={`construction-video-${index}`}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full flex items-start gap-3 px-4 py-4 text-left transition-colors duration-200 group border-b border-brand-gold/10 last:border-b-0 ${
                    activeIndex === index
                      ? 'bg-brand-gold/10 border-l-2 border-l-brand-gold'
                      : 'bg-brand-paper hover:bg-brand-surface'
                  }`}
                >
                  {/* Play icon */}
                  <span className={`flex-shrink-0 mt-0.5 transition-colors duration-200 ${
                    activeIndex === index ? 'text-brand-gold' : 'text-brand-ink-muted group-hover:text-brand-gold'
                  }`}>
                    <Play size={13} fill="currentColor" />
                  </span>
                  <div className="min-w-0">
                    <p className={`text-[12px] leading-snug font-sans font-light line-clamp-2 transition-colors duration-200 ${
                      activeIndex === index ? 'text-brand-gold' : 'text-brand-ink-light group-hover:text-white'
                    }`}>
                      {video.title}
                    </p>
                    <p className="text-[10px] text-brand-ink-muted mt-1 tracking-wide">
                      {video.month}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* CTA nudge */}
            <p className="text-[10px] text-brand-ink-muted text-center mt-4 tracking-wider font-sans uppercase">
              Updated every month
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
