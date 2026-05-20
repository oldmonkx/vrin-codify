import React from 'react';
import { Phone, MessageCircle, Download } from 'lucide-react';
import { contentDraft } from '../content';

export default function MobileBottomBar({ onBrochure }: { onBrochure: () => void }) {
  const mobileBarContent = contentDraft.mobileBottomBar;
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[60] h-[72px] glass-nav border-t border-brand-gold/12 flex items-stretch pb-safe">
      <a
        href={mobileBarContent.phoneHref}
        className="flex-1 flex flex-col items-center justify-center gap-1.5 text-white/60 hover:text-white active:bg-white/5 transition-colors"
      >
        <Phone size={18} strokeWidth={1.5} />
        <span className="text-[9px] uppercase tracking-widest font-medium">{mobileBarContent.phoneLabel}</span>
      </a>
      
      <div className="w-px h-8 self-center bg-white/10" />
      
      <a
        href={mobileBarContent.whatsappHref}
        target="_blank"
        className="flex-1 flex flex-col items-center justify-center gap-1.5 text-white/60 hover:text-white active:bg-white/5 transition-colors"
      >
        <MessageCircle size={18} strokeWidth={1.5} />
        <span className="text-[9px] uppercase tracking-widest font-medium">{mobileBarContent.whatsappLabel}</span>
      </a>
      
      <div className="w-px h-8 self-center bg-white/10" />
      
      <button
        onClick={onBrochure}
        className="flex-1 flex flex-col items-center justify-center gap-1.5 text-brand-gold active:bg-brand-gold/5 transition-colors"
      >
        <Download size={18} strokeWidth={1.5} />
        <span className="text-[9px] uppercase tracking-widest font-medium">{mobileBarContent.brochureLabel}</span>
      </button>
    </div>
  );
}
