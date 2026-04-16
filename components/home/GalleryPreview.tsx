'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { localizePath, type Locale } from '@/lib/i18n';

export default function GalleryPreview({ locale = 'nl' }: { locale?: Locale }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isEnglish = locale === 'en';
  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80',
      alt: isEnglish ? 'Beauty treatment interior' : 'Schoonheidsbehandeling interieur',
      large: true,
    },
    {
      src: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600&q=80',
      alt: isEnglish ? 'Nail treatment' : 'Nagel behandeling',
      large: false,
    },
    {
      src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
      alt: isEnglish ? 'Facial treatment' : 'Gezichtsbehandeling',
      large: false,
    },
    {
      src: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&q=80',
      alt: isEnglish ? 'Beauty treatment' : 'Beauty behandeling',
      large: false,
    },
    {
      src: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80',
      alt: isEnglish ? 'Laser hair removal' : 'Laser ontharing',
      large: false,
    },
    {
      src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80',
      alt: isEnglish ? 'Salon atmosphere' : 'Salon sfeer',
      large: false,
    },
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <SectionHeader
            eyebrow={isEnglish ? 'Our Style' : 'Onze Stijl'}
            title={isEnglish ? 'A look inside our salon' : 'Een blik in onze salon'}
            subtitle={
              isEnglish
                ? 'Explore the atmosphere and treatment results that define Lumière Studio.'
                : 'Laat u inspireren door de sfeer en resultaten van Lumière Studio.'
            }
            centered
          />
        </div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={`${image.src}-${index}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`relative overflow-hidden group ${image.large ? 'col-span-2 row-span-2' : ''}`}
              style={{
                borderRadius: '2px',
                aspectRatio: image.large ? '16/10' : '1/1',
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                unoptimized
                style={{
                  objectFit: 'cover',
                  transition: 'transform 0.6s ease',
                }}
                className="group-hover:scale-105"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center"
                style={{ backgroundColor: 'rgba(44,42,38,0.35)' }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center"
                  style={{ border: '1px solid rgba(250,250,248,0.8)', borderRadius: '2px' }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FAFAF8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-10 text-center"
        >
          <Link
            href={localizePath('/galerij', locale)}
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300"
            style={{
              border: '1px solid #C4A882',
              color: '#C4A882',
              borderRadius: '2px',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#C4A882';
              (e.currentTarget as HTMLAnchorElement).style.color = '#FAFAF8';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
              (e.currentTarget as HTMLAnchorElement).style.color = '#C4A882';
            }}
          >
            {isEnglish ? 'View full gallery' : "Bekijk alle foto's"}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
