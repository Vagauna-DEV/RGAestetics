'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';

const services = [
  {
    title: 'Laser Ontharing',
    description:
      'Permanent en pijnvrij ontharen met de nieuwste laserтехнologie. Geschikt voor alle huidtypen, met langdurige resultaten.',
    href: '/diensten/laser-ontharing',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80',
    imageAlt: 'Laser ontharing behandeling',
  },
  {
    title: 'Gel Nagels',
    description:
      'Prachtige, duurzame gel nagels die weken mooi blijven. Van klassiek naturel tot opvallende nail art — uw stijl, onze expertise.',
    href: '/diensten/gelnagels',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80',
    imageAlt: 'Gel nagels behandeling',
  },
  {
    title: 'Gezichtsbehandelingen',
    description:
      'Op maat gemaakte gezichtsbehandelingen voor een stralende, gezonde huid. Van hydraterende facials tot intensieve anti-aging behandelingen.',
    href: '/diensten/gezichtsbehandelingen',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80',
    imageAlt: 'Gezichtsbehandeling',
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding" style={{ backgroundColor: '#F2E8DF' }}>
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-xl mb-14">
          <SectionHeader
            eyebrow="Onze Specialiteiten"
            title="Behandelingen op maat"
            subtitle="Elke behandeling wordt zorgvuldig afgestemd op uw unieke huid en wensen."
          />
        </div>

        {/* Cards grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href="/diensten"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wide transition-colors duration-300"
            style={{ color: '#C4A882' }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = '#A8865C';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = '#C4A882';
            }}
          >
            Bekijk alle diensten
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  return (
    <div
      className="group relative bg-white overflow-hidden transition-all duration-400"
      style={{
        borderRadius: '2px',
        boxShadow: '0 2px 20px rgba(44,42,38,0.06)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 40px rgba(44,42,38,0.12)';
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
        (e.currentTarget as HTMLDivElement).style.borderBottom = '2px solid #C4A882';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 20px rgba(44,42,38,0.06)';
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLDivElement).style.borderBottom = '2px solid transparent';
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          unoptimized
          style={{
            objectFit: 'cover',
            transition: 'transform 0.6s ease',
          }}
          className="group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="text-xl mb-3"
          style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}
        >
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed mb-5" style={{ color: '#7D7168' }}>
          {service.description}
        </p>
        <Link
          href={service.href}
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300"
          style={{ color: '#C4A882' }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = '#A8865C';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = '#C4A882';
          }}
        >
          Meer informatie
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
