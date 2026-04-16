'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const benefits = [
  'Long-term hair reduction',
  'Suitable for multiple skin tones',
  'Cooling-assisted comfort',
  'Less ingrown hair over time',
  'Smoother skin year-round',
  'Time-saving compared with shaving or waxing',
];

const faqs = [
  {
    q: 'How many sessions will I need?',
    a: 'Most clients book 6 to 8 sessions. The number varies by treatment area, hair density, and growth cycle.',
  },
  {
    q: 'Is laser hair removal permanent?',
    a: 'It is best described as long-term hair reduction. Most clients see a major and lasting reduction after completing their treatment plan.',
  },
  {
    q: 'How should I prepare?',
    a: 'Shave the area 24 to 48 hours before your appointment and avoid strong sun exposure or self-tanner before treatment.',
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

export default function EnglishLaserHairRemovalPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: '#2C2A26' }}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(44,42,38,0.85), rgba(44,42,38,0.97))' }} />
        <div className="container-custom relative z-10">
          <nav className="mb-8 flex items-center gap-2 text-xs" style={{ color: '#6B6560' }}>
            <Link href="/en" className="link-white-faded">Home</Link>
            <span>/</span>
            <Link href="/en/services" className="link-white-faded">Services</Link>
            <span>/</span>
            <span style={{ color: '#C4A882' }}>Laser Hair Removal</span>
          </nav>
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C4A882' }}>Treatment</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: '#FAFAF8', fontWeight: 400 }}>
              Laser Hair Removal
            </h1>
            <div className="mt-4 w-12 h-px" style={{ backgroundColor: '#C4A882' }} />
            <p className="mt-6 text-base leading-relaxed" style={{ color: '#9E9188' }}>
              Smooth, long-term hair reduction with modern laser technology adapted to your skin profile.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/en/contact" className="btn-gold px-7 py-3 text-sm">Book Now</Link>
              <Link href="#pricing" className="btn-gold-outline px-7 py-3 text-sm">View Pricing</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C4A882' }}>Benefits</span>
              <h2 className="mt-3 text-3xl sm:text-4xl mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}>
                Why choose laser hair removal?
              </h2>
              <div className="w-10 h-px mb-6" style={{ backgroundColor: '#C4A882' }} />
              <p className="text-sm leading-relaxed mb-8" style={{ color: '#7D7168' }}>
                Laser hair removal is designed for clients who want a cleaner, lower-maintenance routine without constant waxing or shaving.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm" style={{ color: '#2C2A26' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C4A882" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="overflow-hidden" style={{ aspectRatio: '4/5', borderRadius: '2px' }}>
                <Image src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=700&q=80" alt="Laser hair removal treatment" fill unoptimized style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="section-padding" style={{ backgroundColor: '#F2E8DF' }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C4A882' }}>Pricing</span>
            <h2 className="mt-3 text-3xl sm:text-4xl" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}>
              Starting prices
            </h2>
          </div>
          <div className="max-w-2xl mx-auto overflow-hidden" style={{ borderRadius: '2px', border: '1px solid #E5DDD5' }}>
            {[
              ['Upper lip', '€ 45'],
              ['Underarms', '€ 55'],
              ['Bikini line', '€ 65'],
              ['Lower legs', '€ 95'],
              ['Full legs', '€ 175'],
            ].map(([zone, price], index) => (
              <div key={zone} className="flex items-center justify-between px-6 py-4" style={{ backgroundColor: index % 2 === 0 ? '#FAFAF8' : '#FFFFFE', borderTop: index === 0 ? 'none' : '1px solid #F0EAE3' }}>
                <span className="text-sm font-medium" style={{ color: '#2C2A26' }}>{zone}</span>
                <span className="text-sm font-semibold" style={{ color: '#C4A882' }}>{price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
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
