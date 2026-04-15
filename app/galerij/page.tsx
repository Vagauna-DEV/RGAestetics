'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type FilterCategory = 'Alle' | 'Nagels' | 'Laser' | 'Gezicht';

const allImages = [
  { src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=700&q=80', alt: 'Beauty behandeling salon', category: 'Gezicht' as FilterCategory, large: true },
  { src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80', alt: 'Gel nagels close-up', category: 'Nagels' as FilterCategory, large: false },
  { src: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600&q=80', alt: 'Nail art', category: 'Nagels' as FilterCategory, large: false },
  { src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80', alt: 'Gezichtsbehandeling', category: 'Gezicht' as FilterCategory, large: false },
  { src: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80', alt: 'Laser ontharing', category: 'Laser' as FilterCategory, large: false },
  { src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80', alt: 'Salon sfeer', category: 'Gezicht' as FilterCategory, large: false },
  { src: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&q=80', alt: 'Schoonheidsbehandeling', category: 'Gezicht' as FilterCategory, large: false },
  { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80', alt: 'Huidverzorging', category: 'Gezicht' as FilterCategory, large: false },
  { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=700&q=80', alt: 'Salon interieur', category: 'Gezicht' as FilterCategory, large: true },
  { src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80', alt: 'Gezichtsverzorging behandeling', category: 'Gezicht' as FilterCategory, large: false },
  { src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80', alt: 'Nagel decoratie', category: 'Nagels' as FilterCategory, large: false },
  { src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80', alt: 'Wellness behandeling', category: 'Gezicht' as FilterCategory, large: false },
];

const filters: FilterCategory[] = ['Alle', 'Nagels', 'Laser', 'Gezicht'];

export default function GalerijPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('Alle');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    activeFilter === 'Alle'
      ? allImages
      : allImages.filter((img) => img.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20" style={{ backgroundColor: '#2C2A26' }}>
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(44,42,38,0.85), rgba(44,42,38,0.95))' }} />
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C4A882' }}>
            Onze Stijl
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: '#FAFAF8', fontWeight: 400, fontStyle: 'italic' }}>
            Galerij
          </h1>
          <div className="mt-4 w-12 h-px mx-auto" style={{ backgroundColor: '#C4A882' }} />
          <p className="mt-6 text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#9E9188' }}>
            Een blik achter de schermen en op de resultaten van onze behandelingen
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container-custom">
          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className="px-6 py-2.5 text-sm font-medium tracking-wide transition-all duration-300"
                style={{
                  borderRadius: '2px',
                  backgroundColor: activeFilter === filter ? '#C4A882' : 'transparent',
                  color: activeFilter === filter ? '#FAFAF8' : '#7D7168',
                  border: `1px solid ${activeFilter === filter ? '#C4A882' : '#E5DDD5'}`,
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  if (activeFilter !== filter) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = '#C4A882';
                    (e.currentTarget as HTMLButtonElement).style.color = '#C4A882';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFilter !== filter) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = '#E5DDD5';
                    (e.currentTarget as HTMLButtonElement).style.color = '#7D7168';
                  }
                }}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Image count */}
          <p className="text-center text-sm mb-8" style={{ color: '#7D7168' }}>
            {filteredImages.length} foto&apos;s
          </p>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filteredImages.map((image, i) => (
              <div
                key={`${image.src}-${i}`}
                className={`relative overflow-hidden group cursor-zoom-in ${image.large ? 'col-span-2 row-span-2' : ''}`}
                style={{
                  aspectRatio: image.large ? '4/3' : '1/1',
                  borderRadius: '2px',
                }}
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  unoptimized
                  style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  className="group-hover:scale-105"
                />
                {/* Category tag */}
                <div
                  className="absolute top-3 left-3 px-2.5 py-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: 'rgba(44,42,38,0.75)', color: '#C4A882', borderRadius: '2px' }}
                >
                  {image.category}
                </div>
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: 'rgba(44,42,38,0.2)' }}
                />
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p style={{ color: '#7D7168' }}>Geen foto&apos;s gevonden voor deze categorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(44,42,38,0.95)' }}
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full" style={{ maxHeight: '85vh', aspectRatio: '4/3' }}>
              <Image
                src={selectedImage}
                alt="Gallery image"
                fill
                unoptimized
                style={{ objectFit: 'contain', borderRadius: '2px' }}
              />
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center transition-colors duration-200"
              style={{ backgroundColor: 'rgba(250,250,248,0.15)', borderRadius: '2px', border: 'none', cursor: 'pointer', color: '#FAFAF8' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(250,250,248,0.25)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(250,250,248,0.15)'; }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#F2E8DF' }}>
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}>
            Inspireerde dit u?
          </h2>
          <p className="text-sm mb-8 max-w-md mx-auto leading-relaxed" style={{ color: '#7D7168' }}>
            Maak een afspraak en laat ons uw eigen prachtige resultaat creëren.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-300" style={{ backgroundColor: '#C4A882', color: '#FAFAF8', borderRadius: '2px' }} onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#A8865C'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#C4A882'; }}>
            Afspraak Maken
          </Link>
        </div>
      </section>
    </>
  );
}
