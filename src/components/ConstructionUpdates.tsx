import React, { useState } from 'react';
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
    title: 'Vrindavan Construction Update',
    month: 'Pilot Update',
  },
];

function getEmbedUrl(videoId: string) {
  return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
}

function getThumbnailUrl(videoId: string) {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

export default function ConstructionUpdates() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeVideo = videos[activeIndex];

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
          className="pt-6 md:pt-8 mb-8 md:mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-3"
        >
          <div>
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
              <iframe
                key={activeVideo.id + activeIndex}
                src={getEmbedUrl(activeVideo.id)}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full"
              />
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
                  }}
                  className={`w-full flex items-start gap-3 px-4 py-3.5 text-left transition-colors duration-150 group border-b border-brand-gold/10 last:border-b-0 ${
                    activeIndex === index
                      ? 'bg-brand-gold/10 border-l-2 border-l-brand-gold-deep'
                      : 'bg-white hover:bg-brand-cream-deep'
                  }`}
                >
                  <span className="relative flex-shrink-0 mt-0.5 h-16 w-24 overflow-hidden rounded-md border border-brand-gold/15 bg-brand-paper shadow-sm">
                    <img
                      src={getThumbnailUrl(video.id)}
                      alt={`${video.title} preview`}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute inset-0 bg-gradient-to-r from-brand-paper/12 to-brand-paper/34" />
                    <span className="absolute inset-0 flex items-center justify-center text-white">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-paper/70 backdrop-blur-sm">
                        <Play size={11} fill="currentColor" className="translate-x-[1px]" />
                      </span>
                    </span>
                  </span>

                  <div className="min-w-0">
                    <p
                      className={`text-[12px] leading-snug font-sans transition-colors duration-150 ${
                        activeIndex === index
                          ? 'text-brand-gold-deep font-medium'
                          : 'text-brand-paper/70 group-hover:text-brand-paper'
                      }`}
                    >
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
