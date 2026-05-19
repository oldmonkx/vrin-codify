import React from 'react';
import { motion } from 'motion/react';

const otherProjects = [
  {
    name: "Aria",
    location: "@Nagole",
    type: "3 BHK",
    size: "1650 & 2100 Sft",
    details: ["5 Towers · 625 Units", "25 Floors · 6.15 Acres", "50,000 Sft Clubhouse"],
    rera: "RERA: P02400006832",
    image: "/3d-renders/3646_Vrindavan_Namishree__Kondapur_Image_04.jpg",
  },
  {
    name: "Trident",
    location: "@Vanasthalipuram",
    type: "3 BHK",
    size: "1650 – 1955 Sft",
    details: ["3 Towers · 330 Units", "G+23 Floors · 3.5 Acres", "35,000 Sft Clubhouse"],
    rera: "RERA: P02500003864",
    image: "/3d-renders/3646_Vrindavan_Namishree__Kondapur_Image_12.jpg",
  },
  {
    name: "Jewel",
    location: "@L.B Nagar",
    type: "2 & 3 BHK",
    size: "1635 – 2305 Sft",
    details: ["154 Units · G+22 Floors", "1.65 Acres", "10,000 Sft Clubhouse"],
    rera: "RERA: P02500007768",
    image: "/3d-renders/3646_Vrindavan_Namishree__Kondapur_Image_21.jpg",
  },
  {
    name: "Twin Towers",
    location: "@Champapet",
    type: "2 & 3 BHK",
    size: "1285 – 1855 Sft",
    details: ["2 Towers · G+22 Floors", "3 Acres · 35,000 Sft Clubhouse"],
    rera: "RERA: P02500001997",
    badge: "Ready To Move",
    image: "/3d-renders/3646_Vrindavan_Namishree__Kondapur_Image_25.jpg",
  },
];

export default function Footer({ onBookVisit }: { onBookVisit: () => void }) {
  return (
    <footer className="bg-brand-paper pt-20 pb-10 border-t border-brand-ink/5 relative overflow-hidden text-white">
      {/* Subtle background glow - Optimized with native radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-[radial-gradient(circle,rgba(6,182,212,0.05)_0%,transparent_70%)] rounded-full pointer-events-none transform-gpu" />

      <div className="container mx-auto px-6 relative z-10">
        {/* CTA Section */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl lg:text-[100px] font-sans tracking-tighter font-medium mb-6 leading-[0.9]"
          >
            Your Sky-High <br />
            <span className="font-serif italic text-white/50 font-light">Life Awaits</span>
          </motion.h2>
          <p className="text-white/50 text-lg md:text-xl mb-12 font-light tracking-wide">
            Limited units available across 8 towers. Speak to an advisor today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onBookVisit}
              className="button-primary"
            >
              Book a Site Visit
            </button>
            <a
              href="tel:9177634477"
              className="px-8 py-4 bg-transparent border border-brand-gold/30 text-brand-gold/80 rounded-full text-sm font-medium hover:border-brand-gold/60 hover:text-brand-gold transition-all duration-300 tracking-wide"
            >
              Call: 9177634477
            </a>
          </div>
        </div>

        {/* Other Projects */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px flex-1 bg-white/[0.06]" />
            <span className="text-white/30 text-[10px] font-bold tracking-[0.3em] uppercase whitespace-nowrap">Other Projects by Namishree</span>
            <span className="h-px flex-1 bg-white/[0.06]" />
          </div>

          {/* Mobile: vertical stack | Desktop: 4-column grid */}
          <div className="flex flex-col gap-3 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-4">
            {otherProjects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="relative overflow-hidden rounded-xl group cursor-pointer h-[140px] md:h-[280px] lg:h-[320px]"
              >
                {/* Full-bleed background image */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[2s] ease-out group-hover:scale-105"
                />

                {/* Mobile: left-to-right gradient | Desktop: bottom-to-top gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/10 md:hidden" />
                <div className="absolute inset-0 hidden md:block bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                {/* Mobile content: horizontal layout, text left */}
                <div className="md:hidden relative z-10 h-full flex flex-col justify-center px-5 py-4 max-w-[70%]">
                  <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                    <h4 className="text-white font-sans font-bold text-xl tracking-tight leading-none whitespace-nowrap">{project.name}</h4>
                    <span className="text-brand-cyan font-serif italic text-base font-light opacity-90 whitespace-nowrap">{project.location}</span>
                    {project.badge && (
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase border border-brand-cyan/50 text-brand-cyan bg-brand-cyan/10 whitespace-nowrap">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-white/80 text-sm font-medium tracking-wide mb-1">{project.type} · {project.size}</p>
                  <div className="flex flex-wrap gap-x-3 gap-y-0.5">
                    {project.details.map((d, di) => (
                      <p key={di} className="text-white/45 text-[11px] font-light">{d}</p>
                    ))}
                  </div>
                  <p className="text-white/25 text-[9px] tracking-widest font-mono mt-1.5">{project.rera}</p>
                </div>

                {/* Desktop content: text pinned to bottom */}
                <div className="hidden md:flex relative z-10 h-full flex-col justify-end px-5 py-5">
                  <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                    <h4 className="text-white font-sans font-bold text-xl tracking-tight leading-none">{project.name}</h4>
                    {project.badge && (
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase border border-brand-cyan/50 text-brand-cyan bg-brand-cyan/10">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-brand-cyan font-serif italic text-sm font-light opacity-90 mb-2">{project.location}</span>
                  <p className="text-white/70 text-xs font-medium tracking-wide mb-2">{project.type} · {project.size}</p>
                  <p className="text-white/30 text-[10px] font-light">{project.details[0]}</p>
                  <p className="text-white/20 text-[9px] tracking-widest font-mono mt-2">{project.rera}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Info — compact, centred for a landing page */}
        <div className="border-t border-white/[0.05] pt-10 pb-8 mb-8">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-center sm:gap-12 sm:text-left">

            <div className="space-y-2">
              <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-brand-gold/40">Contact</p>
              <a href="mailto:info@namishree.com" className="block text-white/60 hover:text-white transition-colors text-sm font-light">
                info@namishree.com
              </a>
              <a href="https://www.namishree.com" target="_blank" rel="noopener noreferrer" className="block text-white/60 hover:text-white transition-colors text-sm font-light">
                www.namishree.com
              </a>
            </div>

            <div className="w-px h-10 bg-brand-gold/15 hidden sm:block" />

            <div className="space-y-2">
              <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-brand-gold/40">Corporate Office</p>
              <p className="text-white/60 text-sm font-light leading-relaxed">
                15th Floor, T19 Towers, Ranigunj<br />
                Secunderabad, Hyderabad – 500003
              </p>
            </div>

          </div>
        </div>

        {/* Trust Bar */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 mb-4 text-[9px] uppercase tracking-[0.2em] font-medium text-white/25">
          <span>TGRERA: P02400008653</span>
          <span>·</span>
          <span>9.5 Acre Township</span>
          <span>·</span>
          <span>1846 Homes</span>
          <span>·</span>
          <span>G+49 Floors</span>
          <span>·</span>
          <span>Namishree</span>
        </div>

        {/* Legal Links */}
        <div className="flex justify-center gap-6 mb-8 text-[9px] uppercase tracking-[0.1em] text-white/20">
          <a href="/privacy" className="hover:text-white/40 transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-white/40 transition-colors">Terms of Service</a>
        </div>

        {/* Disclaimer — Google Ads compliant for real estate */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="luxury-rule mb-4" />
          <p className="text-[9px] text-white/22 leading-[1.8] tracking-wide">
            <span className="font-semibold uppercase tracking-widest text-white/30">Disclaimer:</span>{' '}
            This advertisement is for informational purposes only and does not constitute an offer or agreement to sell.
            All visuals, renders, images, floor plans and specifications shown are artist's impressions and are indicative in nature only.
            Actual product may differ from what is depicted. Sizes mentioned are approximate and subject to change without prior notice.
            Amenities, features, specifications and project details are proposed and may be altered, modified or withdrawn at the developer's
            sole discretion in accordance with applicable laws. Buyers are advised to visit the site, verify all details independently and
            refer to the registered sale agreement for final terms before making any purchase decision.
          </p>
          <p className="text-[9px] text-white/22 leading-[1.8] tracking-wide">
            Project registered under TG RERA bearing No.{' '}
            <span className="text-white/35 font-medium">P02400008653</span>.
            For details visit <span className="text-white/35">rera.telangana.gov.in</span>.
            Layout / Building Permission No. File No. 042365/SKP/R1/U6/HMDA.
            Promoter: Namishree Infrastructure Pvt. Ltd., 15th Floor, T19 Towers, Ranigunj, Secunderabad, Hyderabad – 500003.
          </p>
        </div>
      </div>
    </footer>
  );
}

