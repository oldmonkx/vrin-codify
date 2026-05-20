import React from 'react';
import { motion } from 'motion/react';
import { contentDraft } from '../content';

export default function Footer({ onBookVisit }: { onBookVisit: () => void }) {
  const footerContent = contentDraft.footer;
  const otherProjects = contentDraft.footer.otherProjects;

  return (
    <footer className="bg-brand-cream pt-20 pb-10 border-t border-brand-gold/10 relative overflow-hidden text-brand-paper">
      <div className="absolute inset-0 bg-pattern-luxury opacity-55 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[520px] bg-[radial-gradient(circle,rgba(201,168,119,0.16)_0%,rgba(201,168,119,0.06)_42%,transparent_74%)] rounded-full pointer-events-none transform-gpu" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-brand-gold-pale/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl lg:text-[100px] font-sans tracking-tighter font-medium mb-6 leading-[0.9]"
          >
            {footerContent.headingLine1} <br />
            <span className="font-serif italic text-brand-gold-deep/80 font-light">{footerContent.headingLine2}</span>
          </motion.h2>
          <p className="text-brand-paper/58 text-lg md:text-xl mb-12 font-light tracking-wide">
            {footerContent.body}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={onBookVisit} className="button-primary">
              {footerContent.primaryCta}
            </button>
            <a
              href="tel:9177634477"
              className="px-8 py-4 bg-white/60 border border-brand-gold/30 text-brand-gold-deep rounded-full text-sm font-medium hover:border-brand-gold/60 hover:bg-white/90 transition-all duration-300 tracking-wide"
            >
              {footerContent.callLabel}
            </a>
          </div>
        </div>

        <div className="mb-14">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px flex-1 bg-brand-gold/14" />
            <span className="text-brand-paper/32 text-[10px] font-bold tracking-[0.3em] uppercase whitespace-nowrap">{footerContent.otherProjectsLabel}</span>
            <span className="h-px flex-1 bg-brand-gold/14" />
          </div>

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
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[2s] ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-brand-paper/88 via-brand-paper/52 to-transparent md:hidden" />
                <div className="absolute inset-0 hidden md:block bg-gradient-to-t from-brand-paper/92 via-brand-paper/28 to-transparent" />

                <div className="md:hidden relative z-10 h-full flex flex-col justify-center px-5 py-4 max-w-[70%]">
                  <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                    <h4 className="text-white font-sans font-bold text-xl tracking-tight leading-none whitespace-nowrap">{project.name}</h4>
                    <span className="text-brand-gold-pale font-serif italic text-base font-light opacity-95 whitespace-nowrap">{project.location}</span>
                    {(project as any).badge ? (
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase border border-brand-gold/45 text-brand-gold-deep bg-brand-gold-pale/18 whitespace-nowrap">
                        {(project as any).badge}
                      </span>
                    ) : null}
                  </div>
                  <p className="text-white/80 text-sm font-medium tracking-wide mb-1">{project.type} · {project.size}</p>
                  <div className="flex flex-wrap gap-x-3 gap-y-0.5">
                    {project.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-white/45 text-[11px] font-light">{detail}</p>
                    ))}
                  </div>
                  <p className="text-white/25 text-[9px] tracking-widest font-mono mt-1.5">{project.rera}</p>
                </div>

                <div className="hidden md:flex relative z-10 h-full flex-col justify-end px-5 py-5">
                  <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                    <h4 className="text-white font-sans font-bold text-xl tracking-tight leading-none">{project.name}</h4>
                    {(project as any).badge ? (
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase border border-brand-gold/45 text-brand-gold-deep bg-brand-gold-pale/18">
                        {(project as any).badge}
                      </span>
                    ) : null}
                  </div>
                  <span className="text-brand-gold-pale font-serif italic text-sm font-light opacity-95 mb-2">{project.location}</span>
                  <p className="text-white/70 text-xs font-medium tracking-wide mb-2">{project.type} · {project.size}</p>
                  <p className="text-white/30 text-[10px] font-light">{project.details[0]}</p>
                  <p className="text-white/20 text-[9px] tracking-widest font-mono mt-2">{project.rera}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="border-t border-brand-gold/12 pt-10 pb-8 mb-8">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-center sm:gap-12 sm:text-left">
            <div className="space-y-2">
              <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-brand-gold-deep/60">{footerContent.contactLabel}</p>
              <a href={`mailto:${footerContent.email}`} className="block text-brand-paper/62 hover:text-brand-paper transition-colors text-sm font-light">
                {footerContent.email}
              </a>
              <a href={`https://${footerContent.website}`} target="_blank" rel="noopener noreferrer" className="block text-brand-paper/62 hover:text-brand-paper transition-colors text-sm font-light">
                {footerContent.website}
              </a>
            </div>

            <div className="w-px h-10 bg-brand-gold/18 hidden sm:block" />

            <div className="space-y-2">
              <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-brand-gold-deep/60">{footerContent.officeLabel}</p>
              <p className="text-brand-paper/62 text-sm font-light leading-relaxed">
                {footerContent.officeLines[0]}
                <br />
                {footerContent.officeLines[1]}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 mb-4 text-[9px] uppercase tracking-[0.2em] font-medium text-brand-paper/32">
          {footerContent.trustBar.map((item, index) => (
            <React.Fragment key={item}>
              {index > 0 ? <span>·</span> : null}
              <span>{item}</span>
            </React.Fragment>
          ))}
        </div>

        <div className="flex justify-center gap-6 mb-8 text-[9px] uppercase tracking-[0.1em] text-brand-paper/24">
          <a href="/privacy" className="hover:text-brand-paper/48 transition-colors">{footerContent.legalLinks.privacy}</a>
          <a href="/terms" className="hover:text-brand-paper/48 transition-colors">{footerContent.legalLinks.terms}</a>
        </div>

        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="luxury-rule mb-4" />
          <p className="text-[9px] text-brand-paper/28 leading-[1.8] tracking-wide">
            <span className="font-semibold uppercase tracking-widest text-brand-paper/40">{footerContent.disclaimerHeading}</span>{' '}
            {footerContent.disclaimerParagraph1}
          </p>
          <p className="text-[9px] text-brand-paper/28 leading-[1.8] tracking-wide">
            {footerContent.disclaimerParagraph2}
          </p>
        </div>
      </div>
    </footer>
  );
}
