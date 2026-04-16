'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { localizePath, type Locale } from '@/lib/i18n';

export default function IntroSection({ locale = 'nl' }: { locale?: Locale }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const copy =
    locale === 'en'
      ? {
          alt: 'Beauty treatment at Lumière Studio',
          year: 'Years',
          experience: 'Experience',
          eyebrow: 'About Us',
          title: 'Where beauty meets refinement',
          subtitle:
            'Lumière Studio is more than a beauty salon. It is a place to slow down and feel genuinely cared for. We believe every guest is unique and deserves treatments tailored to her needs.',
          points: [
            'More than 6 years of expertise in premium beauty treatments',
            'Certified specialists with genuine passion for their craft',
            'Exclusive use of dermatologist-tested products',
          ],
          cta: 'Learn more about us',
        }
      : {
          alt: 'Schoonheidsbehandeling bij Lumière Studio',
          year: 'Jaar',
          experience: 'Ervaring',
          eyebrow: 'Over Ons',
          title: 'Waar schoonheid ontmoet verfijning',
          subtitle:
            'Lumière Studio is meer dan een schoonheidssalon — het is een plek waar u tot rust komt en in goede handen bent. Wij geloven dat elke klant uniek is en verdient behandelingen die perfect zijn afgestemd op haar behoeften.',
          points: [
            'Meer dan 6 jaar expertise in premium schoonheidsbehandelingen',
            'Gecertificeerde specialisten met passie voor hun vak',
            'Exclusief gebruik van dermatoloog-geteste producten',
          ],
          cta: 'Lees meer over ons',
        };

  return (
    <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
      <div className="container-custom">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden" style={{ borderRadius: '2px', aspectRatio: '4/5' }}>
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
                alt={copy.alt}
                fill
                unoptimized
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>
            <div
              className="absolute -bottom-5 -right-5 w-24 h-24 -z-10"
              style={{ border: '2px solid #C4A882', borderRadius: '2px' }}
            />
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
                {copy.year}
              </span>
              <span className="text-xs tracking-wide" style={{ color: '#F2E8DF' }}>
                {copy.experience}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <SectionHeader eyebrow={copy.eyebrow} title={copy.title} subtitle={copy.subtitle} />

            <ul className="mt-8 space-y-4">
              {copy.points.map((point, index) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 0.4 + index * 0.12, duration: 0.6 }}
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
              <Button href={localizePath('/over-ons', locale)} variant="outline">
                {copy.cta}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
