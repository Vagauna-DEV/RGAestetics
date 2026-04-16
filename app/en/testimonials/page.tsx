import Link from 'next/link';

const testimonials = [
  {
    name: 'Sophie van den Berg',
    treatment: 'Laser Hair Removal',
    date: 'March 2026',
    quote: 'The results have been excellent and the team always makes me feel relaxed and informed.',
  },
  {
    name: 'Isabelle de Vries',
    treatment: 'Gel Nails',
    date: 'February 2026',
    quote: 'The finish is elegant every single time, and my gel nails stay beautiful for weeks.',
  },
  {
    name: 'Emma Bakker',
    treatment: 'Facials',
    date: 'January 2026',
    quote: 'My skin feels healthier, calmer, and brighter after each facial. The atmosphere is lovely too.',
  },
  {
    name: 'Lisa Smeets',
    treatment: 'Laser Hair Removal',
    date: 'December 2025',
    quote: 'Everything was explained clearly and the treatment felt much more comfortable than I expected.',
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} width="14" height="14" viewBox="0 0 24 24" fill="#C4A882" stroke="#C4A882" strokeWidth="1.5">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function EnglishTestimonialsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20" style={{ backgroundColor: '#2C2A26' }}>
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(44,42,38,0.85), rgba(44,42,38,0.95))' }} />
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C4A882' }}>
            What Our Clients Say
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: '#FAFAF8', fontWeight: 400, fontStyle: 'italic' }}>
            Testimonials
          </h1>
          <div className="mt-4 w-12 h-px mx-auto" style={{ backgroundColor: '#C4A882' }} />
          <p className="mt-6 text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#9E9188' }}>
            Read why our guests return for treatments that feel thoughtful, polished, and consistent.
          </p>
        </div>
      </section>

      <section className="py-14" style={{ backgroundColor: '#F2E8DF' }}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <div>
                <div className="text-6xl font-light" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26' }}>4.9</div>
                <div className="flex justify-center mt-2"><StarRating /></div>
                <p className="text-xs mt-2" style={{ color: '#7D7168' }}>Average rating</p>
              </div>
              <div className="w-px h-16 hidden sm:block" style={{ backgroundColor: '#E5DDD5' }} />
              <div>
                <div className="text-6xl font-light" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26' }}>127</div>
                <p className="text-xs mt-2" style={{ color: '#7D7168' }}>Total reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((testimonial) => (
              <div key={`${testimonial.name}-${testimonial.date}`} className="relative p-8 bg-white" style={{ borderRadius: '2px', boxShadow: '0 2px 24px rgba(44,42,38,0.07)' }}>
                <StarRating />
                <blockquote className="mt-4 text-sm leading-relaxed" style={{ color: '#2C2A26' }}>
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

      <section className="py-16" style={{ backgroundColor: '#F2E8DF' }}>
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl mb-3" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}>
            Ready to experience it yourself?
          </h2>
          <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: '#7D7168' }}>
            Book your appointment and discover the Lumière Studio approach.
          </p>
          <Link href="/en/contact" className="btn-gold px-7 py-3 text-sm">
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}
