'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  ['Gel manicure', '€ 45'],
  ['Gel extensions', '€ 65'],
  ['Refill', '€ 40'],
  ['Gel pedicure', '€ 55'],
  ['Removal', '€ 15'],
];

const faqs = [
  {
    q: 'How long do gel nails last?',
    a: 'Most sets last around 3 to 4 weeks before a refill is recommended.',
  },
  {
    q: 'Can I ask for nail art?',
    a: 'Yes. We can create refined, minimal looks or more expressive designs depending on what you want.',
  },
  {
    q: 'Are gel nails damaging?',
    a: 'Not when applied and removed properly. We work carefully to protect the natural nail.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: '1px solid #E5DDD5' }}>
      <button onClick={() => setOpen(!open)} className="w-full text-left py-5 flex items-center justify-between gap-4" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
        <span className="text-sm font-medium" style={{ color: '#2C2A26' }}>{q}</span>
        <span className="flex-shrink-0 transition-transform duration-300" style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)', color: '#C4A882' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
      {open && <div className="pb-5"><p className="text-sm leading-relaxed" style={{ color: '#7D7168' }}>{a}</p></div>}
    </div>
  );
}

export default function EnglishGelNailsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: '#2C2A26' }}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(44,42,38,0.85), rgba(44,42,38,0.97))' }} />
        <div className="container-custom relative z-10">
          <nav className="mb-8 flex items-center gap-2 text-xs" style={{ color: '#6B6560' }}>
            <Link href="/en" className="link-white-faded">Home</Link>
            <span>/</span>
            <Link href="/en/services" className="link-white-faded">Services</Link>
            <span>/</span>
            <span style={{ color: '#C4A882' }}>Gel Nails</span>
          </nav>
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C4A882' }}>Treatment</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: '#FAFAF8', fontWeight: 400 }}>
              Gel Nails
            </h1>
            <div className="mt-4 w-12 h-px" style={{ backgroundColor: '#C4A882' }} />
            <p className="mt-6 text-base leading-relaxed" style={{ color: '#9E9188' }}>
              Elegant, durable nail treatments designed to stay polished and refined for weeks.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/en/contact" className="btn-gold px-7 py-3 text-sm">Book Now</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="overflow-hidden" style={{ aspectRatio: '4/5', borderRadius: '2px' }}>
              <Image src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=700&q=80" alt="Gel nails treatment" fill unoptimized style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C4A882' }}>What to expect</span>
            <h2 className="mt-3 text-3xl sm:text-4xl mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}>
              Precision, shine, and lasting wear
            </h2>
            <div className="w-10 h-px mb-6" style={{ backgroundColor: '#C4A882' }} />
            <p className="text-sm leading-relaxed mb-8" style={{ color: '#7D7168' }}>
              Whether you prefer a clean neutral manicure or a more expressive design, each appointment is shaped around finish, balance, and durability.
            </p>
            <div className="space-y-3">
              {services.map(([name, price]) => (
                <div key={name} className="flex items-center justify-between px-5 py-4 bg-[#F2E8DF]" style={{ borderRadius: '2px' }}>
                  <span className="text-sm font-medium" style={{ color: '#2C2A26' }}>{name}</span>
                  <span className="text-sm font-semibold" style={{ color: '#C4A882' }}>{price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#F2E8DF' }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C4A882' }}>FAQ</span>
            <h2 className="mt-3 text-3xl sm:text-4xl" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}>
              Common questions
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            {faqs.map((faq) => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>
    </>
  );
}
