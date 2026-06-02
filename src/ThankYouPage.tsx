import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const CALL_NUMBER = '9177634477';
const WHATSAPP_URL = 'https://wa.me/919177634477?text=Hello%2C%20I%20want%20more%20info';

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f7f4ee_0%,#f2ece3_100%)] text-[#24171c]">
      <div className="section-shell flex min-h-screen items-center justify-center py-10 sm:py-14">
        <div className="w-full max-w-3xl rounded-[2rem] border border-black/6 bg-white/88 p-6 shadow-[0_24px_80px_rgba(36,23,28,0.08)] backdrop-blur-sm sm:p-10 lg:p-14">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <div className="flex flex-col items-center gap-5 sm:gap-6">
              <img
                src="/namishree-logo-color.svg"
                alt="Namishree"
                className="h-8 w-auto sm:h-10 lg:h-11"
              />
              <div className="h-px w-16 bg-[linear-gradient(90deg,transparent,rgba(168,134,84,0.5),transparent)]" />
              <img
                src="/vrindavan-logo-color.svg"
                alt="Vrindavan"
                className="h-28 w-auto sm:h-36 lg:h-40"
              />
            </div>

            <div className="mt-10 max-w-xl">
              <h1 className="text-3xl font-light tracking-[-0.03em] text-[#24171c] sm:text-4xl">
                Thank you for your interest.
              </h1>
              <p className="mt-4 text-base leading-8 text-[#5f5154] sm:text-lg">
                Our team has received your details and will get in touch with you shortly.
              </p>
            </div>

            <div className="mt-10 grid w-full max-w-xl gap-3 sm:grid-cols-2 sm:gap-4">
              <a
                href={`tel:${CALL_NUMBER}`}
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#24171c] px-6 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_14px_34px_rgba(36,23,28,0.14)] transition hover:-translate-y-0.5 hover:bg-black"
              >
                <Phone size={16} />
                Call Sales Team
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-[#d9ccb8] bg-[#fbf8f2] px-6 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[#24171c] transition hover:-translate-y-0.5 hover:border-[#c9a877] hover:bg-white"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </div>

            <p className="mt-8 text-xs uppercase tracking-[0.22em] text-[#8f7f72]">
              Vrindavan by Namishree
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
