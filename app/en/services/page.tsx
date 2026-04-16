'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Laser Hair Removal',
    description:
      'Long-term hair reduction with modern laser technology, tailored to your skin and comfort level.',
    features: ['Long-lasting results', 'Suitable for multiple skin types', 'Cooling-assisted comfort', 'Short treatment sessions'],
    href: '/en/services/laser-hair-removal',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=700&q=80',
    from: '€ 45',
  },
  {
    title: 'Gel Nails',
    description:
      'Refined gel manicures and enhancements designed to stay glossy, strong, and elegant for weeks.',
    features: ['Polished look for 3–4 weeks', 'Strengthens the natural nail', 'Wide colour palette', 'Nail art on request'],
    href: '/en/services/gel-nails',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=700&q=80',
    from: '€ 35',
  },
  {
    title: 'Facials',
    description:
      'Tailored facial treatments for hydration, glow, skin clarity, and age-supportive care.',
    features: ['Personal skin analysis', 'Premium skincare products', 'Targeted treatment plans', 'Visible glow after one visit'],
    href: '/en/services/facials',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=700&q=80',
    from: '€ 55',
  },
];

const faqs = [
  {
    category: 'Laser Hair Removal',
    questions: [
      {
        q: 'How many sessions do I need?',
        a: 'Most guests need 6 to 8 sessions for the best results. The exact number depends on the area, hair growth cycle, and skin profile.',
      },
      {
        q: 'Is it painful?',
        a: 'Most people describe it as a quick warm snap on the skin. We use cooling support to keep treatments as comfortable as possible.',
      },
    ],
  },
  {
    category: 'Gel Nails',
    questions: [
      {
        q: 'How long do gel nails last?',
        a: 'Gel nails usually stay beautiful for 3 to 4 weeks, depending on your nail growth and daily routine.',
      },
      {
        q: 'Are gel nails damaging?',
        a: 'Not when applied and removed correctly. We use professional products and careful removal techniques.',
      },
    ],
  },
  {
    category: 'Facials',
    questions: [
      {
        q: 'Which facial is right for me?',
        a: 'We start with a skin analysis and recommend the treatment that matches your skin type, priorities, and sensitivity level.',
      },
      {
        q: 'How often should I have a facial?',
        a: 'For best ongoing results, most clients book every 4 to 6 weeks.',
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: '1px solid #E5DDD5' }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-center justify-between gap-4"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <span className="text-sm font-medium" style={{ color: '#2C2A26' }}>
          {q}
        </span>
        <span
          className="flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)', color: '#C4A882' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="pb-5">
          <p className="text-sm leading-relaxed" style={{ color: '#7D7168' }}>
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function EnglishServicesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20" style={{ backgroundColor: '#2C2A26' }}>
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(44,42,38,0.85), rgba(44,42,38,0.95))' }} />
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C4A882' }}>
            Our Treatments
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: '#FAFAF8', fontWeight: 400, fontStyle: 'italic' }}>
            Services
          </h1>
          <div className="mt-4 w-12 h-px mx-auto" style={{ backgroundColor: '#C4A882' }} />
          <p className="mt-6 text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#9E9188' }}>
            Premium beauty treatments tailored to your skin, your routine, and the result you want.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container-custom space-y-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}
            >
              <div className={index % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/3', borderRadius: '2px' }}>
                  <Image src={service.image} alt={service.title} fill unoptimized style={{ objectFit: 'cover' }} />
                </div>
              </div>
              <div className={index % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C4A882' }}>
                  From {service.from}
                </span>
                <h2 className="mt-2 text-3xl sm:text-4xl mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}>
                  {service.title}
                </h2>
                <div className="w-10 h-px mb-5" style={{ backgroundColor: '#C4A882' }} />
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#7D7168' }}>
                  {service.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm" style={{ color: '#2C2A26' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C4A882" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={service.href} className="btn-gold px-7 py-3 text-sm">
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#F2E8DF' }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C4A882' }}>
              How It Works
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}>
              Our Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: '01', title: 'Consultation', desc: 'We discuss your goals, timing, and the treatment that fits best.' },
              { step: '02', title: 'Personal Plan', desc: 'We tailor the treatment details and recommendations to you.' },
              { step: '03', title: 'Treatment', desc: 'You relax while our specialists perform the service with care.' },
              { step: '04', title: 'Aftercare', desc: 'We share the practical aftercare advice that protects your result.' },
            ].map((item) => (
              <div key={item.step} className="text-center p-6 bg-white" style={{ borderRadius: '2px', boxShadow: '0 1px 12px rgba(44,42,38,0.05)' }}>
                <div className="text-4xl font-light mb-3" style={{ fontFamily: "'Playfair Display', serif", color: '#C4A882', opacity: 0.6 }}>
                  {item.step}
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ color: '#2C2A26' }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#7D7168' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C4A882' }}>
              FAQ
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}>
              Common Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-10">
            {faqs.map((section) => (
              <div key={section.category}>
                <h3
                  className="text-lg mb-4 pb-2"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: '#2C2A26',
                    fontWeight: 400,
                    borderBottom: '1px solid #C4A882',
                  }}
                >
                  {section.category}
                </h3>
                {section.questions.map((faq) => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
