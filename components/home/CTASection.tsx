'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24"
      style={{ backgroundColor: '#2C2A26' }}
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-5"
        style={{
          background: 'radial-gradient(circle, #C4A882 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 opacity-5"
        style={{
          background: 'radial-gradient(circle, #C4A882 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)',
        }}
      />

      {/* Gold line decoration */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ backgroundColor: '#C4A882', opacity: 0.3 }} />

      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-6"
            style={{ color: '#C4A882' }}
          >
            Plan uw verwenmoment
          </motion.span>

          {/* Decorative SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center mb-6"
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="19" stroke="#C4A882" strokeWidth="0.75" opacity="0.4" />
              <circle cx="20" cy="20" r="14" stroke="#C4A882" strokeWidth="0.5" opacity="0.3" />
              <path
                d="M20 12 L22 17 L28 17 L23 21 L25 27 L20 23 L15 27 L17 21 L12 17 L18 17 Z"
                fill="#C4A882"
                opacity="0.6"
              />
            </svg>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: '#FAFAF8',
              fontWeight: 400,
              fontStyle: 'italic',
            }}
          >
            Klaar voor een<br />
            <span style={{ color: '#C4A882' }}>verwenmoment?</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg leading-relaxed mb-10"
            style={{ color: '#9E9188' }}
          >
            Plan vandaag nog uw afspraak en ontdek het Lumière Studio gevoel.
            Wij verwelkomen u graag in ons salon.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
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
              Afspraak Maken
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-300"
              style={{
                backgroundColor: 'transparent',
                color: '#FAFAF8',
                border: '1px solid rgba(250,250,248,0.4)',
                borderRadius: '2px',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = '#FAFAF8';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(250,250,248,0.4)';
              }}
            >
              Neem Contact Op
            </Link>
          </motion.div>

          {/* Contact snippet */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm"
            style={{ color: '#6B6560' }}
          >
            <a
              href="tel:+31201234567"
              className="flex items-center gap-2 transition-colors duration-200"
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#C4A882'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#6B6560'; }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.69 3.38 2 2 0 0 1 3.69 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91A16 16 0 0 0 15.09 15.91l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +31 20 123 4567
            </a>
            <span className="hidden sm:block" style={{ color: '#3D3A35' }}>|</span>
            <span className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Ma–Za: 9:00–19:00
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
