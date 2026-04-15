'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';

const testimonials = [
  {
    quote:
      'Na jarenlang scheren was de laser ontharing bij Lumière Studio een openbaring. Perfect resultaat en een warm welkom elke keer.',
    name: 'Sophie van den Berg',
    treatment: 'Laser Ontharing',
    rating: 5,
  },
  {
    quote:
      'De gel nagels houden weken perfect, en het resultaat is altijd zo verfijnd. Ik kom nergens anders meer!',
    name: 'Isabelle de Vries',
    treatment: 'Gel Nagels',
    rating: 5,
  },
  {
    quote:
      'Mijn huid is echt getransformeerd na de gezichtsbehandelingen. Het team is professioneel en de sfeer is heerlijk.',
    name: 'Emma Bakker',
    treatment: 'Gezichtsbehandelingen',
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < count ? '#C4A882' : 'none'}
          stroke="#C4A882"
          strokeWidth="1.5"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionHeader
            eyebrow="Wat Onze Klanten Zeggen"
            title="Ervaringen"
            subtitle="Ontdek waarom onze klanten steeds terugkomen."
            centered
          />
        </div>

        {/* Testimonials */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-8 bg-white"
              style={{
                borderRadius: '2px',
                boxShadow: '0 2px 24px rgba(44,42,38,0.07)',
              }}
            >
              {/* Decorative quote mark */}
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

              {/* Stars */}
              <StarRating count={testimonial.rating} />

              {/* Quote */}
              <blockquote
                className="mt-4 text-sm leading-relaxed relative z-10"
                style={{ color: '#2C2A26' }}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Divider */}
              <div
                className="my-5 w-10 h-px"
                style={{ backgroundColor: '#E5DDD5' }}
              />

              {/* Customer info */}
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{ color: '#2C2A26' }}
                >
                  {testimonial.name}
                </p>
                <p className="text-xs mt-1" style={{ color: '#C4A882' }}>
                  {testimonial.treatment}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm" style={{ color: '#7D7168' }}>
            Gemiddeld{' '}
            <span
              className="font-semibold"
              style={{ color: '#2C2A26' }}
            >
              4.9/5
            </span>{' '}
            op basis van{' '}
            <span className="font-semibold" style={{ color: '#2C2A26' }}>
              127 recensies
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
