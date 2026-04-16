'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { type Locale } from '@/lib/i18n';

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={index < count ? '#C4A882' : 'none'}
          stroke="#C4A882"
          strokeWidth="1.5"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection({ locale = 'nl' }: { locale?: Locale }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isEnglish = locale === 'en';
  const testimonials = [
    {
      quote: isEnglish
        ? 'After years of shaving, the laser hair removal at Lumière Studio was a revelation. Beautiful results and a warm welcome every time.'
        : 'Na jarenlang scheren was de laser ontharing bij Lumière Studio een openbaring. Perfect resultaat en een warm welkom elke keer.',
      name: 'Sophie van den Berg',
      treatment: isEnglish ? 'Laser Hair Removal' : 'Laser Ontharing',
      rating: 5,
    },
    {
      quote: isEnglish
        ? 'My gel nails stay flawless for weeks, and the finish always feels so elegant. I do not go anywhere else anymore.'
        : 'De gel nagels houden weken perfect, en het resultaat is altijd zo verfijnd. Ik kom nergens anders meer!',
      name: 'Isabelle de Vries',
      treatment: isEnglish ? 'Gel Nails' : 'Gel Nagels',
      rating: 5,
    },
    {
      quote: isEnglish
        ? 'My skin truly changed after the facials. The team is professional, calm, and consistently thoughtful.'
        : 'Mijn huid is echt getransformeerd na de gezichtsbehandelingen. Het team is professioneel en de sfeer is heerlijk.',
      name: 'Emma Bakker',
      treatment: isEnglish ? 'Facials' : 'Gezichtsbehandelingen',
      rating: 5,
    },
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
      <div className="container-custom">
        <div className="text-center mb-14">
          <SectionHeader
            eyebrow={isEnglish ? 'What Our Clients Say' : 'Wat Onze Klanten Zeggen'}
            title={isEnglish ? 'Testimonials' : 'Ervaringen'}
            subtitle={
              isEnglish
                ? 'See why our clients keep coming back.'
                : 'Ontdek waarom onze klanten steeds terugkomen.'
            }
            centered
          />
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-8 bg-white"
              style={{
                borderRadius: '2px',
                boxShadow: '0 2px 24px rgba(44,42,38,0.07)',
              }}
            >
              <div
                className="absolute top-6 right-8 text-6xl leading-none select-none"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#F2E8DF',
                  lineHeight: 1,
                }}
              >
                &ldquo;
              </div>

              <StarRating count={testimonial.rating} />

              <blockquote className="mt-4 text-sm leading-relaxed relative z-10" style={{ color: '#2C2A26' }}>
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="my-5 w-10 h-px" style={{ backgroundColor: '#E5DDD5' }} />

              <div>
                <p className="text-sm font-semibold" style={{ color: '#2C2A26' }}>
                  {testimonial.name}
                </p>
                <p className="text-xs mt-1" style={{ color: '#C4A882' }}>
                  {testimonial.treatment}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm" style={{ color: '#7D7168' }}>
            {isEnglish ? 'Average' : 'Gemiddeld'}{' '}
            <span className="font-semibold" style={{ color: '#2C2A26' }}>
              4.9/5
            </span>{' '}
            {isEnglish ? 'based on' : 'op basis van'}{' '}
            <span className="font-semibold" style={{ color: '#2C2A26' }}>
              127 {isEnglish ? 'reviews' : 'recensies'}
            </span>
          </p>
          <div className="mt-2 flex justify-center">
            <StarRating count={5} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
