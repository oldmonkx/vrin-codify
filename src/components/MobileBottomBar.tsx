import React from 'react';
import { Phone, MessageCircle, Download } from 'lucide-react';
import { contentDraft } from '../content';

export default function MobileBottomBar({ onBrochure }: { onBrochure: () => void }) {
  const mobileBarContent = contentDraft.mobileBottomBar;
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[60] flex items-stretch bg-brand-paper border-t border-brand-gold/12">
      <a
        href={mobileBarContent.phoneHref}
        className="w-1/4 flex flex-col items-center justify-center text-brand-gold/70 active:bg-white/5 transition-colors border-r border-white/5 h-[72px] pb-safe"
      >
        <Phone size={20} strokeWidth={1.5} />
      </a>
      
      <a
        href={mobileBarContent.whatsappHref}
        target="_blank"
        className="w-1/4 flex flex-col items-center justify-center text-brand-gold/70 active:bg-white/5 transition-colors border-r border-white/5 h-[72px] pb-safe"
      >
        <MessageCircle size={20} strokeWidth={1.5} />
      </a>
      
      <button
        onClick={onBrochure}
        className="relative overflow-hidden w-1/2 flex items-center justify-center gap-2 bg-gradient-to-r from-brand-gold to-brand-gold-deep text-brand-paper active:opacity-90 transition-opacity font-bold tracking-[0.15em] uppercase h-[72px] pb-safe"
      >
        <span 
          className="absolute inset-0 -ml-[50%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[shine_4s_ease-in-out_3]" 
        />
        <span className="relative z-10 text-[10px]">{mobileBarContent.brochureLabel}</span>
        <Download size={16} strokeWidth={2} className="relative z-10" />
      </button>
    </div>
  );
}
