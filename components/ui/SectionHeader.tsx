'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const textAlign = centered ? 'text-center' : 'text-left';
  const itemsAlign = centered ? 'items-center' : 'items-start';

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.05,
      } as never,
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' } as never,
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col ${itemsAlign} ${textAlign}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {eyebrow && (
        <motion.span
          variants={itemVariants}
          className="text-xs font-semibold tracking-widest uppercase mb-3"
          style={{ color: '#C4A882' }}
        >
          {eyebrow}
        </motion.span>
      )}

      <motion.h2
        variants={itemVariants}
        className="text-3xl sm:text-4xl lg:text-5xl leading-tight"
        style={{
          fontFamily: "'Playfair Display', serif",
          color: light ? '#FAFAF8' : '#2C2A26',
          fontWeight: 400,
        }}
      >
        {title}
      </motion.h2>

      {centered && (
        <motion.div
          variants={itemVariants}
          className="mt-4 w-14 h-px"
          style={{ backgroundColor: '#C4A882' }}
        />
      )}

      {subtitle && (
        <motion.p
          variants={itemVariants}
          className="mt-5 text-base sm:text-lg leading-relaxed max-w-2xl"
          style={{ color: light ? '#C4B89E' : '#7D7168' }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
