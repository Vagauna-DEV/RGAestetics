import type { Metadata } from 'next';
import Link from 'next/link';
import { testimonials, testimonialStats } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Getuigenissen',
  description: `Lees wat onze klanten zeggen over Lumière Studio. Meer dan ${testimonialStats.count} tevreden klanten geven ons gemiddeld een ${testimonialStats.rating} uit 5 op Google Reviews.`,
  openGraph: {
    title: 'Getuigenissen | Lumière Studio',
    description: 'Ervaringen van onze tevreden klanten.',
    url: 'https://lumierestudio.nl/getuigenissen',
  },
};

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < count ? '#C4A882' : 'none'} stroke="#C4A882" strokeWidth="1.5">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function GetuigenissenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20" style={{ backgroundColor: '#2C2A26' }}>
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(44,42,38,0.85), rgba(44,42,38,0.95))' }} />
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C4A882' }}>
            Wat Onze Klanten Zeggen
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: '#FAFAF8', fontWeight: 400, fontStyle: 'italic' }}>
            Getuigenissen
          </h1>
          <div className="mt-4 w-12 h-px mx-auto" style={{ backgroundColor: '#C4A882' }} />
          <p className="mt-6 text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#9E9188' }}>
            Ontdek de ervaringen van onze tevreden klanten
          </p>
        </div>
      </section>

      {/* Rating summary */}
      <section className="py-14" style={{ backgroundColor: '#F2E8DF' }}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <div>
                <div className="text-6xl font-light" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26' }}>
                  {testimonialStats.rating}
                </div>
                <div className="flex justify-center mt-2">
                  <StarRating count={5} />
                </div>
                <p className="text-xs mt-2" style={{ color: '#7D7168' }}>Gemiddelde beoordeling</p>
              </div>
              <div className="w-px h-16 hidden sm:block" style={{ backgroundColor: '#E5DDD5' }} />
              <div>
                <div className="text-6xl font-light" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26' }}>
                  {testimonialStats.count}
                </div>
                <p className="text-xs mt-2" style={{ color: '#7D7168' }}>Totaal reviews</p>
              </div>
              <div className="w-px h-16 hidden sm:block" style={{ backgroundColor: '#E5DDD5' }} />
              <div>
                <div className="text-6xl font-light" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26' }}>
                  {testimonialStats.recommend}
                </div>
                <p className="text-xs mt-2" style={{ color: '#7D7168' }}>Zou ons aanbevelen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C4A882' }}>Klantbeoordelingen</span>
            <h2 className="mt-3 text-3xl sm:text-4xl" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}>
              Ervaringen
            </h2>
            <div className="mt-4 w-10 h-px mx-auto" style={{ backgroundColor: '#C4A882' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="relative p-8 bg-white"
                style={{ borderRadius: '2px', boxShadow: '0 2px 24px rgba(44,42,38,0.07)' }}
              >
                <div
                  className="absolute top-6 right-8 text-6xl leading-none select-none"
                  style={{ fontFamily: "'Playfair Display', serif", color: '#F2E8DF', lineHeight: 1 }}
                >
                  &ldquo;
                </div>

                <StarRating count={testimonial.rating} />

                <blockquote className="mt-4 text-sm leading-relaxed relative z-10" style={{ color: '#2C2A26' }}>
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="my-5 w-10 h-px" style={{ backgroundColor: '#E5DDD5' }} />

                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm font-semibold" style={{ color: '#2C2A26' }}>{testimonial.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: '#C4A882' }}>{testimonial.treatment}</p>
                  </div>
                  <p className="text-xs" style={{ color: '#B0A89E' }}>{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews CTA */}
      <section className="py-16" style={{ backgroundColor: '#F2E8DF' }}>
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl mb-3" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}>
            Lees meer reviews op Google
          </h2>
          <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: '#7D7168' }}>
            Lees alle {testimonialStats.count} reviews van onze klanten op Google Business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://g.page/r/lumierestudio"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2 px-7 py-3 text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Bekijk Google Reviews
            </a>
            <Link
              href="/contact"
              className="btn-gold-outline px-7 py-3 text-sm"
            >
              Afspraak Maken
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
