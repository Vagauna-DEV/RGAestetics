'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';

const keyPoints = [
  'Meer dan 6 jaar expertise in premium schoonheidsbehandelingen',
  'Gecertificeerde specialisten met passie voor hun vak',
  'Exclusief gebruik van dermatoloog-geteste producten',
];

export default function IntroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
      <div className="container-custom">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div
              className="relative overflow-hidden"
              style={{ borderRadius: '2px', aspectRatio: '4/5' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
                alt="Schoonheidsbehandeling bij Lumière Studio"
                fill
                unoptimized
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>
            {/* Decorative frame accent */}
            <div
              className="absolute -bottom-5 -right-5 w-24 h-24 -z-10"
              style={{ border: '2px solid #C4A882', borderRadius: '2px' }}
            />
            {/* Years badge */}
            <div
              className="absolute -top-5 -left-5 w-24 h-24 flex flex-col items-center justify-center"
              style={{ backgroundColor: '#C4A882', borderRadius: '2px' }}
            >
              <span
                className="text-3xl font-semibold leading-none"
                style={{ fontFamily: "'Playfair Display', serif", color: '#FAFAF8' }}
              >
                6+
              </span>
              <span className="text-xs tracking-wide mt-1" style={{ color: '#F2E8DF' }}>
                Jaar
              </span>
              <span className="text-xs tracking-wide" style={{ color: '#F2E8DF' }}>
                Ervaring
              </span>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <SectionHeader
              eyebrow="Over Ons"
              title="Waar schoonheid ontmoet verfijning"
              subtitle="Lumière Studio is meer dan een schoonheidssalon — het is een plek waar u tot rust komt en in goede handen bent. Wij geloven dat elke klant uniek is en verdient behandelingen die perfect zijn afgestemd op haar behoeften."
            />

            {/* Key points */}
            <ul className="mt-8 space-y-4">
              {keyPoints.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 0.4 + i * 0.12, duration: 0.6 }}
                  className="flex items-start gap-4"
                >
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: '#F2E8DF' }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#C4A882"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base leading-relaxed" style={{ color: '#2C2A26' }}>
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="mt-10"
            >
              <Button href="/over-ons" variant="outline">
                Lees meer over ons
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
