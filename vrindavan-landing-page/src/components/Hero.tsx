import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { redirectToThankYou, submitLead } from '../leadCapture';
import { contentDraft } from '../content';

interface HeroProps {
  onDownloadBrochure: () => void;
}

export default function Hero({ onDownloadBrochure }: HeroProps) {
  const heroContent = contentDraft.hero;
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    configuration: '',
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    try {
      await submitLead({
        name: formData.name,
        phone: formData.phone,
        formTitle: 'Hero Enquiry Form',
        extra: {
          entryPoint: 'hero-inline-form',
          configuration: formData.configuration,
          consent: formData.consent,
        },
      });

      setFormData({
        name: '',
        phone: '',
        configuration: '',
        consent: false,
      });
      redirectToThankYou({
        formTitle: 'Hero Enquiry Form',
        entryPoint: 'hero-inline-form',
      });
    } catch (error) {
      console.error('Hero lead submit failed', error);
      const message = error instanceof Error
        ? error.message
        : 'We could not submit your details right now. Please try again or call us directly.';
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="overview" className="relative overflow-hidden border-b border-brand-gold/10">
      {/* Background Image */}
      <div className="absolute inset-0">
        <picture>
          <source media="(max-width: 767px)" srcSet={heroContent.backgroundImageMobile} />
          <img
            src={heroContent.backgroundImage}
            alt="Vrindavan towers"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
        </picture>
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,8,16,0.92)_0%,rgba(18,8,16,0.68)_34%,rgba(18,8,16,0.28)_58%,rgba(18,8,16,0.68)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,8,16,0.28)_0%,rgba(18,8,16,0)_18%,rgba(18,8,16,0.16)_58%,rgba(18,8,16,0.88)_100%)]" />
      </div>

      {/* Content */}
      <div className="section-shell relative grid min-h-[calc(100dvh-4rem)] items-center gap-8 py-8 md:py-10 lg:grid-cols-[minmax(0,1fr)_minmax(340px,430px)] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="min-w-0 max-w-none"
        >
          {/* Vrindavan Logo */}
          <img src={heroContent.logo} alt="Vrindavan" className="h-[3.675rem] w-auto md:h-[4.2rem] lg:h-[4.725rem]" />

          {/* Tagline & Headline */}
          <div className="mt-6 lg:mt-7">
            {heroContent.eyebrow ? <span className="eyebrow">{heroContent.eyebrow}</span> : null}
            <h1 className={`${heroContent.eyebrow ? 'mt-5' : 'mt-0'} font-light leading-[0.94] tracking-normal text-brand-ink`}>
              <span className="block max-w-[9ch] text-[2.85rem] leading-[0.92] sm:max-w-none sm:whitespace-nowrap sm:text-6xl md:text-7xl lg:text-[4.25rem] xl:text-[4.9rem] 2xl:text-[5.35rem]">
                {heroContent.headingLine1}
              </span>
              <span className="mt-2 block max-w-[9ch] font-serif text-[2.25rem] italic leading-[0.96] text-brand-ink sm:mt-3 sm:max-w-none sm:whitespace-nowrap sm:text-[3.6rem] md:text-[4.35rem] lg:text-[3.35rem] xl:text-[3.95rem] 2xl:text-[4.35rem]">
                {heroContent.headingLine2}
              </span>
            </h1>
            <p className="mt-4 max-w-[24rem] text-[0.95rem] leading-7 text-brand-ink-light sm:mt-5 sm:max-w-xl sm:text-base">
              {heroContent.body}
            </p>
          </div>

          {/* Stats */}
          <div className={`stat-rail mt-8 max-w-xl ${heroContent.stats.length > 1 ? 'grid-cols-2' : 'grid-cols-1 max-w-[14rem]'}`}>
            {heroContent.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-[10px] uppercase tracking-[0.28em] text-brand-gold/72">{stat.label}</p>
                <p className="mt-2 flex items-end gap-2 text-brand-ink">
                  <span className="text-4xl font-light leading-none sm:text-[3.2rem]">{stat.value}</span>
                  <span className="pb-1 font-serif text-lg italic text-brand-ink-light sm:text-xl">{stat.suffix}</span>
                </p>
              </div>
            ))}
          </div>

          {/* RERA inline */}
          <div className="mt-8 flex items-center gap-4 rounded-2xl border border-brand-gold/12 bg-brand-paper/90 px-5 py-3 max-w-fit">
            <div>
              <p className="text-[9px] uppercase tracking-[0.22em] text-brand-gold/76">{heroContent.reraLabel}</p>
              <p className="mt-1 text-sm font-semibold tracking-[0.08em] text-brand-ink md:text-base">{heroContent.reraNumber}</p>
            </div>
            <div className="h-8 w-px bg-brand-gold/16" />
            <a
              href="https://rera.telangana.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-medium text-brand-cyan/80 underline decoration-brand-cyan/30 underline-offset-4 hover:text-brand-cyan"
            >
              {heroContent.reraLinkLabel}
            </a>
          </div>
        </motion.div>

        {/* Right Column: Lead Form */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="editorial-panel w-full max-w-md mx-auto lg:mx-0 rounded-[2rem] p-5 md:p-8 lg:self-center"
        >
          <div className="mb-6 text-center">
            <h3 className="text-xl font-medium tracking-[0.15em] text-brand-ink uppercase">{heroContent.form.title}</h3>
            <p className="mt-2 text-xs text-brand-ink-light">{heroContent.form.subtitle}</p>
          </div>

          <form className="flex flex-col gap-4" onSubmit={handleHeroSubmit}>
            <div>
              <input 
                type="text" 
                placeholder={heroContent.form.namePlaceholder}
                required
                value={formData.name}
                onChange={(e) => setFormData((current) => ({ ...current, name: e.target.value }))}
                className="w-full bg-white/5 border border-brand-gold/15 rounded-xl px-4 py-3.5 text-sm text-brand-ink placeholder:text-brand-ink/40 focus:outline-none focus:border-brand-gold/50 focus:bg-white/10 transition-colors"
               />
            </div>
            <div>
              <input 
                type="tel" 
                placeholder={heroContent.form.phonePlaceholder}
                required
                pattern="[0-9]{10}"
                inputMode="numeric"
                maxLength={10}
                value={formData.phone}
                onChange={(e) => {
                  const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
                  setFormData((current) => ({ ...current, phone: digitsOnly }));
                }}
                className="w-full bg-white/5 border border-brand-gold/15 rounded-xl px-4 py-3.5 text-sm text-brand-ink placeholder:text-brand-ink/40 focus:outline-none focus:border-brand-gold/50 focus:bg-white/10 transition-colors"
               />
            </div>
            <div>
              <select 
                value={formData.configuration}
                onChange={(e) => setFormData((current) => ({ ...current, configuration: e.target.value }))}
                className="w-full bg-white/5 border border-brand-gold/15 rounded-xl px-4 py-3.5 text-sm text-brand-ink/80 focus:outline-none focus:border-brand-gold/50 focus:bg-white/10 transition-colors appearance-none cursor-pointer"
                required
              >
                <option value="" disabled className="bg-brand-surface text-brand-ink">{heroContent.form.configurationPlaceholder}</option>
                {heroContent.form.configurationOptions.map((option) => (
                  <option
                    key={option}
                    value={option.toLowerCase().replace(/\s+/g, '')}
                    className="bg-brand-surface text-brand-ink"
                  >
                    {option}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex items-start gap-3 mt-2">
              <input 
                type="checkbox" 
                id="consent" 
                required 
                checked={formData.consent}
                onChange={(e) => setFormData((current) => ({ ...current, consent: e.target.checked }))}
                className="mt-0.5 min-w-[16px] h-4 w-4 rounded-sm border-brand-gold/20 bg-white/5 accent-brand-gold cursor-pointer"
              />
              <label htmlFor="consent" className="text-[10px] text-brand-ink/50 leading-relaxed cursor-pointer select-none">
                {heroContent.form.consent}
              </label>
            </div>

            {errorMessage ? (
              <p className="rounded-xl border border-red-400/25 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                {errorMessage}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="button-primary w-full mt-4 !px-4 animate-[premium-pulse_2s_ease-in-out_3] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? 'Sending...' : heroContent.form.submitLabel}
              <ArrowRight size={16} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
