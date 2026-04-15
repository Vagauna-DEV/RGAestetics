'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';

const features = [
  {
    title: 'Gecertificeerde Specialisten',
    description:
      'Al onze behandelaars zijn gecertificeerd en hebben jarenlange ervaring in hun specialisme.',
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C4A882"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20v-2a6 6 0 0 1 12 0v2" />
        <path d="M9 11l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Premium Producten',
    description:
      'Wij werken uitsluitend met hoogwaardige, huidvriendelijke producten van gerenommeerde merken.',
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C4A882"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    title: 'Persoonlijke Aanpak',
    description:
      'Elke behandeling wordt afgestemd op uw unieke huidtype, wensen en persoonlijke doelen.',
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C4A882"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: 'Hygienisch & Veilig',
    description:
      'Onze salon voldoet aan de hoogste hygiëne- en veiligheidsnormen voor uw gemoedsrust.',
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C4A882"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding" style={{ backgroundColor: '#F2E8DF' }}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionHeader
            eyebrow="Onze Waarden"
            title="Waarom Lumière Studio?"
            subtitle="Wij staan voor uitmuntendheid in elk aspect van onze service."
            centered
          />
        </div>

        {/* Features grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-5 p-6 bg-white"
              style={{
                borderRadius: '2px',
                boxShadow: '0 1px 12px rgba(44,42,38,0.05)',
              }}
            >
              {/* Icon */}
              <div
                className="flex-shrink-0 w-14 h-14 flex items-center justify-center"
                style={{ backgroundColor: '#FDF4EC', borderRadius: '2px' }}
              >
                {feature.icon}
              </div>

              {/* Text */}
              <div>
                <h3
                  className="text-lg mb-2"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: '#2C2A26',
                    fontWeight: 400,
                  }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#7D7168' }}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
