import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Lock } from 'lucide-react';
import { redirectToThankYou, submitLead } from '../leadCapture';
import { contentDraft } from '../content';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function LeadModal({ isOpen, onClose, title = "Get Exclusive Access" }: LeadModalProps) {
  const modalContent = contentDraft.leadModal;
  const leadFormContent = contentDraft.interactions.leadForms.modal;
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  // Close modal when user scrolls — lets them get back to the page naturally
  useEffect(() => {
    if (!isOpen) return;
    const handleScroll = () => onClose();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen, onClose]);

  const resetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
    });
    setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    try {
      await submitLead({
        name: formData.fullName,
        phone: formData.phone,
        formTitle: title,
        extra: {
          entryPoint: leadFormContent.entryPoint,
        },
      });

      resetForm();
      redirectToThankYou({
        formTitle: title,
        entryPoint: leadFormContent.entryPoint,
      });
    } catch (error) {
      console.error('Lead submit failed', error);
      const message = error instanceof Error
        ? error.message
        : modalContent.fallbackError;
      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-4 md:p-0">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content - Apple/Dribbble Premium Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-zinc-900/80 backdrop-blur-3xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.5)] rounded-[2.5rem] overflow-hidden pb-safe"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2.5 text-white/50 hover:text-white transition-colors z-10 bg-white/5 hover:bg-white/10 rounded-full border border-white/5"
            >
              <X size={18} strokeWidth={1.5} />
            </button>

            <div className="p-8 md:p-10">
              <div className="text-center mb-10 mt-2">
                <h3 className="text-3xl font-sans tracking-tight font-medium mb-3 text-white">{title}</h3>
                <p className="text-white/50 font-light tracking-wide text-sm">
                  {modalContent.subtitle}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2 relative group">
                  <input
                    required
                    type="text"
                    placeholder={modalContent.fullNamePlaceholder}
                    value={formData.fullName}
                    onChange={(e) => setFormData((current) => ({ ...current, fullName: e.target.value }))}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300 text-white placeholder:text-white/30 font-light tracking-wide text-sm shadow-inner"
                  />
                </div>

                <div className="space-y-2 relative group">
                  <div className="relative">
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40 text-sm font-light">{modalContent.countryCodePrefix}</span>
                    <input
                      required
                      type="tel"
                      pattern="[0-9]{10}"
                      placeholder={modalContent.phonePlaceholder}
                      inputMode="numeric"
                      maxLength={10}
                      value={formData.phone}
                      onChange={(e) => {
                        const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
                        setFormData((current) => ({ ...current, phone: digitsOnly }));
                      }}
                      className="w-full pl-16 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300 text-white placeholder:text-white/30 font-light tracking-wide text-sm shadow-inner"
                    />
                  </div>
                </div>

                {errorMessage ? (
                  <p className="rounded-2xl border border-red-400/25 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                    {errorMessage}
                  </p>
                ) : null}

                <button
                  disabled={isLoading}
                  type="submit"
                  className="w-full py-4 mt-6 rounded-2xl font-medium text-sm tracking-wide transition-all duration-300 active:scale-95 disabled:opacity-50 bg-gradient-to-r from-brand-gold to-brand-gold-deep text-brand-paper shadow-[0_4px_20px_rgba(201,168,119,0.25)] hover:shadow-[0_6px_28px_rgba(201,168,119,0.35)] hover:scale-[1.01]"
                >
                  {isLoading ? modalContent.submittingLabel : modalContent.submitLabel}
                </button>

                <p className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest text-white/30 mt-8 font-medium">
                  <Lock size={10} /> {modalContent.privacyLabel}
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
