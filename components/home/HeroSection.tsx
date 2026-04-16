'use client';

import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { localizePath, type Locale } from '@/lib/i18n';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    } as never,
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: 'easeOut' } as never,
  },
};

export default function HeroSection({ locale = 'nl' }: { locale?: Locale }) {
  const copy =
    locale === 'en'
      ? {
          alt: 'Lumière Studio interior',
          eyebrow: 'Premium Beauty Salon Amsterdam',
          titleTop: 'Elegance you',
          titleBottom: 'can feel',
          subtitle:
            'Discover our exclusive laser hair removal, gel nail, and facial treatments in the heart of Amsterdam',
          primaryCta: 'Book Now',
          secondaryCta: 'Our Services',
        }
      : {
          alt: 'Lumière Studio interieur',
          eyebrow: 'Premium Schoonheidssalon Amsterdam',
          titleTop: 'Verfijning die',
          titleBottom: 'je voelt',
          subtitle:
            'Ontdek onze exclusieve behandelingen voor laser ontharing, gel nagels en gezichtsverzorging in het hart van Amsterdam',
          primaryCta: 'Afspraak Maken',
          secondaryCta: 'Onze Diensten',
        };

  return (
    <section className="relative w-full h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
          alt={copy.alt}
          fill
          priority
          unoptimized
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(44,42,38,0.78) 0%, rgba(44,42,38,0.55) 50%, rgba(44,42,38,0.40) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 container-custom text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-6"
            style={{ color: '#C4A882' }}
          >
            {copy.eyebrow}
          </motion.span>

          <motion.div
            variants={itemVariants}
            className="w-16 h-px mb-8"
            style={{ backgroundColor: '#C4A882' }}
          />

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-none mb-8"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: '#FAFAF8',
              fontWeight: 400,
              fontStyle: 'italic',
            }}
          >
            {copy.titleTop}
            <br />
            <span style={{ color: '#C4A882' }}>{copy.titleBottom}</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg max-w-xl leading-relaxed mb-10"
            style={{ color: '#D4C9BC' }}
          >
            {copy.subtitle}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href={localizePath('/contact', locale)}
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-300"
              style={{
                backgroundColor: '#C4A882',
                color: '#FAFAF8',
                borderRadius: '2px',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#A8865C';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#C4A882';
              }}
            >
              {copy.primaryCta}
            </Link>
            <Link
              href={localizePath('/diensten', locale)}
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-300"
              style={{
                backgroundColor: 'transparent',
                color: '#FAFAF8',
                border: '1px solid rgba(250,250,248,0.6)',
                borderRadius: '2px',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = '#FAFAF8';
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(250,250,248,0.1)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(250,250,248,0.6)';
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
              }}
            >
              {copy.secondaryCta}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: 'rgba(250,250,248,0.6)' }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
