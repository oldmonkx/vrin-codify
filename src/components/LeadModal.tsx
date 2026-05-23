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

          {/* Modal Content - Luxury Geometric */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md editorial-board rounded-sm overflow-hidden pb-safe"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2.5 text-white/50 hover:text-white transition-colors z-10 bg-white/5 hover:bg-white/10 rounded-sm border border-white/5"
            >
              <X size={18} strokeWidth={1.5} />
            </button>

            <div className="p-8 md:p-10">
              <div className="text-center mb-10 mt-2">
                <h3 className="text-3xl font-sans tracking-tight font-medium mb-3 text-brand-ink">{title}</h3>
                <p className="text-brand-ink/50 font-light tracking-wide text-sm">
                  {modalContent.subtitle}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative group">
                  <input
                    required
                    type="text"
                    id="modal-name"
                    placeholder=" "
                    value={formData.fullName}
                    onChange={(e) => setFormData((current) => ({ ...current, fullName: e.target.value }))}
                    className="peer w-full bg-white/5 border border-brand-gold/30 rounded-none px-4 pb-2 pt-6 text-sm text-brand-ink focus:outline-none focus:border-brand-gold focus:shadow-[0_0_15px_rgba(201,168,119,0.15)] transition-all"
                  />
                  <label 
                    htmlFor="modal-name"
                    className="absolute left-4 top-1.5 text-[10px] text-brand-gold/80 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-brand-ink/40 peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-brand-gold uppercase tracking-widest pointer-events-none"
                  >
                    {modalContent.fullNamePlaceholder}
                  </label>
                </div>

                <div className="relative group">
                  <span className="absolute left-4 top-[1.35rem] text-brand-ink/60 text-sm pointer-events-none">{modalContent.countryCodePrefix}</span>
                  <input
                    required
                    type="tel"
                    id="modal-phone"
                    pattern="[0-9]{10}"
                    placeholder=" "
                    inputMode="numeric"
                    maxLength={10}
                    value={formData.phone}
                    onChange={(e) => {
                      const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
                      setFormData((current) => ({ ...current, phone: digitsOnly }));
                    }}
                    className="peer w-full bg-white/5 border border-brand-gold/30 rounded-none pl-12 pr-4 pb-2 pt-6 text-sm text-brand-ink focus:outline-none focus:border-brand-gold focus:shadow-[0_0_15px_rgba(201,168,119,0.15)] transition-all"
                  />
                  <label 
                    htmlFor="modal-phone"
                    className="absolute left-12 top-1.5 text-[10px] text-brand-gold/80 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-brand-ink/40 peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-brand-gold uppercase tracking-widest pointer-events-none"
                  >
                    {modalContent.phonePlaceholder}
                  </label>
                </div>

                {errorMessage ? (
                  <p className="rounded-none border border-red-400/25 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                    {errorMessage}
                  </p>
                ) : null}

                <button
                  disabled={isLoading}
                  type="submit"
                  className="button-primary w-full mt-6 !rounded-none animate-[premium-pulse_2s_ease-in-out_3] disabled:opacity-50 transition-all duration-300 font-['Josefin_Sans']"
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
