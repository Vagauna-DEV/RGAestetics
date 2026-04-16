'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type FilterCategory = 'All' | 'Nails' | 'Laser' | 'Facials';

const filters: FilterCategory[] = ['All', 'Nails', 'Laser', 'Facials'];

const allImages = [
  { src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=700&q=80', alt: 'Salon beauty treatment', category: 'Facials' as FilterCategory, large: true },
  { src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80', alt: 'Gel nails close-up', category: 'Nails' as FilterCategory, large: false },
  { src: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600&q=80', alt: 'Nail art detail', category: 'Nails' as FilterCategory, large: false },
  { src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80', alt: 'Facial treatment', category: 'Facials' as FilterCategory, large: false },
  { src: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80', alt: 'Laser treatment', category: 'Laser' as FilterCategory, large: false },
  { src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80', alt: 'Salon atmosphere', category: 'Facials' as FilterCategory, large: false },
  { src: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&q=80', alt: 'Beauty ritual', category: 'Facials' as FilterCategory, large: false },
  { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80', alt: 'Skincare preparation', category: 'Facials' as FilterCategory, large: false },
];

export default function EnglishGalleryPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    activeFilter === 'All'
      ? allImages
      : allImages.filter((image) => image.category === activeFilter);

  return (
    <>
      <section className="relative pt-32 pb-20" style={{ backgroundColor: '#2C2A26' }}>
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(44,42,38,0.85), rgba(44,42,38,0.95))' }} />
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C4A882' }}>
            Our Style
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: '#FAFAF8', fontWeight: 400, fontStyle: 'italic' }}>
            Gallery
          </h1>
          <div className="mt-4 w-12 h-px mx-auto" style={{ backgroundColor: '#C4A882' }} />
          <p className="mt-6 text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#9E9188' }}>
            A closer look at the atmosphere, detail, and treatment results at Lumière Studio.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container-custom">
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
              >
                {filter}
              </button>
            ))}
          </div>

          <p className="text-center text-sm mb-8" style={{ color: '#7D7168' }}>
            {filteredImages.length} photos
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filteredImages.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className={`relative overflow-hidden group cursor-zoom-in ${image.large ? 'col-span-2 row-span-2' : ''}`}
                style={{ aspectRatio: image.large ? '4/3' : '1/1', borderRadius: '2px' }}
                onClick={() => setSelectedImage(image.src)}
              >
                <Image src={image.src} alt={image.alt} fill unoptimized style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} className="group-hover:scale-105" />
                <div
                  className="absolute top-3 left-3 px-2.5 py-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: 'rgba(44,42,38,0.75)', color: '#C4A882', borderRadius: '2px' }}
                >
                  {image.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(44,42,38,0.95)' }} onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-full w-full h-full flex items-center justify-center" onClick={(event) => event.stopPropagation()}>
            <div className="relative w-full" style={{ maxHeight: '85vh', aspectRatio: '4/3' }}>
              <Image src={selectedImage} alt="Gallery image" fill unoptimized style={{ objectFit: 'contain', borderRadius: '2px' }} />
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center"
              style={{ backgroundColor: 'rgba(250,250,248,0.15)', borderRadius: '2px', border: 'none', cursor: 'pointer', color: '#FAFAF8' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <section className="py-20" style={{ backgroundColor: '#F2E8DF' }}>
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}>
            Inspired by what you see?
          </h2>
          <p className="text-sm mb-8 max-w-md mx-auto leading-relaxed" style={{ color: '#7D7168' }}>
            Book your appointment and let us create a treatment plan designed around you.
          </p>
          <Link href="/en/contact" className="btn-gold px-8 py-3.5 text-sm">
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}
