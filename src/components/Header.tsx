import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { contentDraft } from '../content';

interface HeaderProps {
  onBookVisit: () => void;
}

export default function Header({ onBookVisit }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerContent = contentDraft.header;
  const links = headerContent.navLinks;

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-brand-gold/12 bg-brand-paper/95 backdrop-blur-[2px]">
        <div className="mx-auto flex h-16 w-[min(100%-1.25rem,1360px)] items-center justify-between px-4 md:px-6">
          {/* Left: Logos */}
          <a href="#overview" className="flex min-w-0 items-center gap-3">
            <img src="/namishree-logo-white.svg" alt={headerContent.logoAlt} width={100} height={20} className="h-4 w-auto opacity-90 md:h-5" />
          </a>

          {/* Center: Nav links */}
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: CTA + Mobile menu */}
          <div className="flex items-center gap-3">
            <button
              onClick={onBookVisit}
              className="inline-flex h-11 flex-none items-center justify-center whitespace-nowrap rounded-full border border-brand-gold/24 bg-brand-paper/50 px-4 text-[0.65rem] font-bold tracking-[0.18em] text-brand-gold-pale uppercase md:h-auto md:px-5 md:py-3 md:text-[0.74rem] md:tracking-[0.16em]"
            >
              <span className="md:hidden">{headerContent.ctaMobile}</span>
              <span className="hidden md:inline">{headerContent.ctaDesktop}</span>
            </button>

            <button
              type="button"
              aria-label={isMobileMenuOpen ? headerContent.closeMenuLabel : headerContent.openMenuLabel}
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-gold/12 bg-brand-paper/60 text-brand-ink md:hidden"
            >
              {isMobileMenuOpen ? <X size={18} strokeWidth={1.7} /> : <Menu size={18} strokeWidth={1.7} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Flyout */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.button
              type="button"
              aria-label={headerContent.closeOverlayLabel}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="site-menu-backdrop fixed inset-0 z-40 md:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-3 top-20 z-50 overflow-hidden rounded-[2rem] border border-brand-gold/16 bg-brand-paper/95 p-6 shadow-[0_26px_60px_rgba(0,0,0,0.34)] backdrop-blur-xl md:hidden"
            >
              {/* Mobile logos */}
              <div className="mb-6 flex items-center gap-3">
                <img src="/namishree-logo-white.svg" alt={headerContent.logoAlt} width={100} height={20} className="h-4 w-auto opacity-80" />
              </div>

              <nav className="space-y-2">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="editorial-panel-soft block rounded-[1.4rem] px-5 py-4 text-sm font-medium tracking-[0.18em] text-brand-ink/80 uppercase"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookVisit();
                }}
                className="button-primary mt-6 w-full"
              >
                {headerContent.mobileMenuCta}
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
