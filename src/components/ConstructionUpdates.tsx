import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

interface VideoItem {
  id: string;
  title: string;
  month: string;
}

const videos: VideoItem[] = [
  {
    id: '720zZcC9fWo',
    title: 'Vrindavan Construction Update - April 2026',
    month: 'April 2026',
  },
  {
    id: 'GyEnY8r-VEs',
    title: 'Vrindavan Construction Update - March 2026',
    month: 'March 2026',
  },
  {
    id: 'chS7QgeQGj8',
    title: 'Vrindavan Construction Update - February 2026',
    month: 'February 2026',
  },
  {
    id: 'ABC6azZAWik',
    title: 'Vrindavan Construction Update - January 2026',
    month: 'January 2026',
  },
  {
    id: '60JfcX3b6lo',
    title: 'Vrindavan - Construction Begins',
    month: 'Pilot Update',
  },
];

function getThumbnailUrl(videoId: string) {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

export default function ConstructionUpdates() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const activeVideo = videos[activeIndex];

  useEffect(() => {
    setIsPlaying(false);
  }, [activeIndex]);

  return (
    <section
      id="construction-updates"
      className="pb-16 md:pb-24 bg-brand-cream relative border-t border-brand-gold/10"
    >
      <div className="absolute inset-0 bg-pattern-starry opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-14 mb-8 md:mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-3"
        >
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-brand-gold-deep mb-2 font-sans">
              Construction Update
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans tracking-tight font-medium leading-tight text-brand-paper">
              Watch Our{' '}
              <span className="font-serif italic font-light bg-clip-text text-transparent bg-gradient-to-r from-brand-gold-deep to-brand-gold">
                Progress
              </span>
            </h2>
          </div>
          <p className="text-brand-paper/60 font-light text-sm max-w-xs leading-relaxed">
            See Vrindavan rising. Live site updates from Kondapur - updated every month.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:flex-[3]"
          >
            <div className="relative w-full aspect-video overflow-hidden shadow-lg border border-brand-gold/20 bg-brand-paper">
              {isPlaying ? (
                <iframe
                  key={activeVideo.id + activeIndex}
                  src={`https://www.youtube.com/embed/${activeVideo.id}?rel=0&modestbranding=1`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 group"
                  aria-label={`Play ${activeVideo.title}`}
                >
                  <img
                    src={getThumbnailUrl(activeVideo.id)}
                    alt={activeVideo.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-sm transition-transform duration-200 group-hover:scale-105">
                      <Play size={22} fill="currentColor" className="ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <p className="text-[10px] tracking-[0.25em] uppercase text-white/70 font-sans">
                      Tap to play
                    </p>
                    <p className="mt-1 text-sm md:text-base font-light text-white">
                      {activeVideo.month}
                    </p>
                  </div>
                </button>
              )}
            </div>

            <div className="mt-2.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rotate-45 bg-brand-gold-deep inline-block flex-shrink-0" />
              <p className="text-brand-paper/70 text-xs font-sans font-light">
                {activeVideo.title}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="lg:flex-[1] flex flex-col"
          >
            <div className="flex items-center justify-between px-4 py-2.5 bg-white border border-brand-gold/20 border-b-0">
              <span className="text-[10px] tracking-[0.2em] uppercase text-brand-gold-deep font-sans font-semibold">
                Vrindavan by Namishree
              </span>
              <span className="text-[10px] text-brand-paper/40 font-sans">
                {videos.length} Videos
              </span>
            </div>

            <div className="border border-brand-gold/20 overflow-hidden flex-1">
              {videos.map((video, index) => (
                <button
                  key={video.id + index}
                  id={`construction-video-${index}`}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsPlaying(false);
                  }}
                  className={`w-full flex items-start gap-3 px-4 py-3.5 text-left transition-colors duration-150 group border-b border-brand-gold/10 last:border-b-0 ${
                    activeIndex === index
                      ? 'bg-brand-gold/10 border-l-2 border-l-brand-gold-deep'
                      : 'bg-white hover:bg-brand-cream-deep'
                  }`}
                >
                  <span className="relative flex-shrink-0 mt-0.5 h-16 w-24 overflow-hidden rounded-md border border-brand-gold/15 bg-brand-paper">
                    <img
                      src={getThumbnailUrl(video.id)}
                      alt={`${video.month} thumbnail`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute inset-0 bg-black/18" />
                    <span className="absolute inset-0 flex items-center justify-center text-white">
                      <Play size={12} fill="currentColor" className="translate-x-[1px]" />
                    </span>
                  </span>

                  <div className="min-w-0">
                    <p
                      className={`text-[12px] leading-snug font-sans line-clamp-2 transition-colors duration-150 ${
                        activeIndex === index
                          ? 'text-brand-gold-deep font-medium'
                          : 'text-brand-paper/70 group-hover:text-brand-paper'
                      }`}
                    >
                      {video.title}
                    </p>
                    <p className="text-[10px] text-brand-paper/40 mt-1">
                      {video.month}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
