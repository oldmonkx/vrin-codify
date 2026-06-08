import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('namishree_disclaimer_accepted');
    if (hasAccepted !== 'true') {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('namishree_disclaimer_accepted', 'true');
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Modal Container (Sober styling matching screenshot) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-white rounded-lg shadow-xl z-10 flex flex-col max-h-[90vh] text-slate-800"
          >
            {/* Scrollable Content */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-4 flex-1">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                Disclaimer
              </h2>

              <div className="space-y-4 text-[13px] md:text-[14px] leading-relaxed text-slate-600 font-sans">
                <p>Welcome to www.namishree.com.</p>

                <p>
                  Thank you for visiting us. Please read the following carefully and note that this Disclaimer applies to the entire website.
                </p>

                <p>
                  The website is being updated as per TS RERA rules and regulations.
                </p>

                <p>
                  We kindly request your understanding that the information on this website, including images, details, brochure, marketing collaterals, etc. are for informational purposes only. Please note that all information is subject to change, so we recommend verifying facts with our authorized sales representatives. This website is not for advertising, marketing, or making offers for sale. Our focus is on providing valuable insights and guidance to assist you in making informed decisions. For accurate and reliable information, we encourage you to rely on our authorized sales representatives. The Company will not be liable for any consequences resulting from actions taken based on the information provided on this website.
                </p>

                <p>Thank you for your cooperation and trust in us.</p>
              </div>

              {/* Bottom Note */}
              <div className="border-t border-slate-100 pt-4 mt-6">
                <p className="text-[11px] md:text-[12px] leading-relaxed text-slate-500">
                  This site is protected by reCAPTCHA and Google{' '}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#3b5998] hover:underline">Privacy Policy</a>
                  {' '}and{' '}
                  <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-[#3b5998] hover:underline">Terms of Service</a>
                  {' '}apply. We use cookies to ensure you get the best experience on our website.{' '}
                  <a href="#privacy" className="text-[#3b5998] hover:underline">Learn more</a>
                </p>
              </div>
            </div>

            {/* Accept Button Container */}
            <div className="p-6 pt-0">
              <button
                onClick={handleAccept}
                className="w-full py-3 bg-[#4b6584] hover:bg-[#3d566e] text-white text-sm font-semibold tracking-wide rounded-md transition-colors cursor-pointer shadow-sm text-center"
              >
                Accept & Continue
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
