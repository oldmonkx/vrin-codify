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
            viewport={{ once: true }}
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

        <div className="mb-36 md:mb-14">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px flex-1 bg-brand-gold/14" />
            <span className="text-brand-paper/32 text-[10px] font-bold tracking-[0.3em] uppercase whitespace-nowrap">{footerContent.otherProjectsLabel}</span>
            <span className="h-px flex-1 bg-brand-gold/14" />
          </div>

          <div className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-5">
            {otherProjects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="group relative flex flex-row-reverse overflow-hidden rounded-[1.35rem] bg-[linear-gradient(180deg,rgba(43,24,40,0.98)_0%,rgba(23,13,21,0.98)_100%)] shadow-[0_18px_42px_rgba(25,14,22,0.18)] border border-brand-gold/22 md:min-h-0 md:flex-col md:rounded-2xl md:shadow-[0_18px_45px_rgba(31,18,28,0.16)]"
              >
                <picture className="contents">
                  {'imageMobile' in project && project.imageMobile ? (
                    <source media="(max-width: 767px)" srcSet={project.imageMobile} />
                  ) : null}
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full min-h-[230px] w-[40%] object-cover object-right transition-transform duration-[2s] ease-out group-hover:scale-105 md:aspect-[4/5] md:h-auto md:min-h-0 md:w-full md:object-cover md:object-center md:brightness-[0.95] md:saturate-[0.92] md:contrast-[0.98]"
                  />
                </picture>

                <div className="flex min-h-[230px] flex-1 flex-col border-r border-brand-gold/22 bg-[linear-gradient(180deg,rgba(41,23,38,0.98)_0%,rgba(23,13,21,1)_100%)] px-5 py-6 md:min-h-[154px] md:border-r-0 md:border-t md:border-brand-gold/26 md:px-6 md:py-5">
                  <div className="mb-2 flex flex-col gap-1">
                    <div className="flex flex-wrap items-start gap-2 md:block">
                      <h4 className="font-sans text-2xl font-bold leading-none tracking-tight text-white md:text-xl">{project.name}</h4>
                      {(project as any).badge ? (
                        <span className="max-w-full rounded-full border border-brand-gold/70 bg-brand-gold-deep/90 px-2.5 py-1 text-center text-[8px] font-bold uppercase leading-tight tracking-[0.16em] text-brand-cream shadow-[0_8px_18px_rgba(0,0,0,0.22)] md:hidden">
                          {(project as any).badge}
                        </span>
                      ) : null}
                    </div>
                    <span className="block font-serif text-lg font-light italic leading-tight text-brand-gold-pale/95 md:text-[15px]">{project.location}</span>
                  </div>
                  <p className="mb-3 text-[15px] font-semibold leading-snug tracking-wide text-white/90 md:mb-2 md:text-[13px] md:text-white/84">{project.type} · {project.size}</p>
                  <div className="space-y-1 md:hidden">
                    {project.details.slice(0, 2).map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-[12px] font-light leading-relaxed text-white/70">{detail}</p>
                    ))}
                  </div>
                  <p className="hidden text-[10px] font-light leading-relaxed text-white/66 md:block">{project.details[0]}</p>
                  <div className="mt-auto flex flex-wrap items-end justify-between gap-2 pt-4">
                    <p className="text-[9px] leading-none tracking-widest text-white/42 md:text-white/48">{project.rera}</p>
                    {(project as any).badge ? (
                      <span className="hidden rounded-full border border-brand-gold/70 bg-brand-gold-deep/90 px-2.5 py-1 text-center text-[7px] font-bold uppercase leading-tight tracking-[0.16em] text-brand-cream shadow-[0_8px_18px_rgba(0,0,0,0.22)] md:inline-flex">
                        {(project as any).badge}
                      </span>
                    ) : null}
                  </div>
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
