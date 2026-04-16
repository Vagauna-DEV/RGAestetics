'use client';

import { useState } from 'react';

const contactDetails = [
  {
    label: 'Address',
    value: 'Keizersgracht 312\n1016 EX Amsterdam',
  },
  {
    label: 'Phone',
    value: '+31 20 123 4567',
    href: 'tel:+31201234567',
  },
  {
    label: 'Email',
    value: 'info@lumierestudio.nl',
    href: 'mailto:info@lumierestudio.nl',
  },
  {
    label: 'Opening Hours',
    value: 'Mon–Fri: 9:00–19:00\nSat: 9:00–18:00\nSun: Closed',
  },
];

const bookingFaqs = [
  {
    q: 'How can I book an appointment?',
    a: 'You can use the form on this page, call us directly, or send an email. We aim to confirm all booking requests within 24 hours.',
  },
  {
    q: 'Can I cancel or reschedule?',
    a: 'Yes. We ask for at least 24 hours’ notice for changes. Late cancellations may incur a fee depending on the treatment booked.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'Weekday appointments are often available within a few days. Evening and weekend slots usually need to be booked about a week ahead.',
  },
  {
    q: 'Do you offer gift vouchers?',
    a: 'Yes. Gift vouchers can be issued for any amount and are ideal for birthdays, celebrations, and personal care gifts.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: '1px solid #E5DDD5' }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-center justify-between gap-4"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <span className="text-sm font-medium" style={{ color: '#2C2A26' }}>
          {q}
        </span>
        <span
          className="flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)', color: '#C4A882' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="pb-5">
          <p className="text-sm leading-relaxed" style={{ color: '#7D7168' }}>
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function EnglishContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <>
      <section className="relative pt-32 pb-20" style={{ backgroundColor: '#2C2A26' }}>
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(44,42,38,0.85), rgba(44,42,38,0.95))' }} />
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C4A882' }}>
            We Are Here To Help
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: '#FAFAF8', fontWeight: 400, fontStyle: 'italic' }}>
            Contact & Booking
          </h1>
          <div className="mt-4 w-12 h-px mx-auto" style={{ backgroundColor: '#C4A882' }} />
          <p className="mt-6 text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#9E9188' }}>
            Plan your visit or send us a question. We reply within 24 hours.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}>
                Contact Details
              </h2>
              <div className="w-10 h-px mb-8" style={{ backgroundColor: '#C4A882' }} />

              <ul className="space-y-7">
                {contactDetails.map((item) => (
                  <li key={item.label}>
                    <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: '#7D7168' }}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} className="text-sm link-gold whitespace-pre-line">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm whitespace-pre-line" style={{ color: '#2C2A26' }}>
                        {item.value}
                      </p>
                    )}
                  </li>
                ))}
              </ul>

              <div
                className="mt-10 overflow-hidden flex items-center justify-center"
                style={{ height: '200px', backgroundColor: '#F2E8DF', borderRadius: '2px', border: '1px solid #E5DDD5' }}
              >
                <div className="text-center px-6">
                  <p className="text-sm font-medium" style={{ color: '#2C2A26' }}>
                    Lumière Studio
                  </p>
                  <p className="text-xs mt-1" style={{ color: '#7D7168' }}>
                    Keizersgracht 312, Amsterdam
                  </p>
                  <a href="https://maps.google.com/?q=Keizersgracht+312+Amsterdam" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-xs font-medium" style={{ color: '#C4A882' }}>
                    Directions →
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <h2 className="text-2xl mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}>
                Request an Appointment
              </h2>
              <div className="w-10 h-px mb-8" style={{ backgroundColor: '#C4A882' }} />

              {submitted ? (
                <div className="p-8 text-center" style={{ backgroundColor: '#F2E8DF', borderRadius: '2px' }}>
                  <h3 className="text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26' }}>
                    Message received
                  </h3>
                  <p className="text-sm" style={{ color: '#7D7168' }}>
                    We will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium tracking-wide uppercase mb-2" style={{ color: '#7D7168' }}>First name *</label>
                      <input type="text" name="firstName" placeholder="Your first name" className="form-input" required autoComplete="given-name" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium tracking-wide uppercase mb-2" style={{ color: '#7D7168' }}>Last name *</label>
                      <input type="text" name="lastName" placeholder="Your last name" className="form-input" required autoComplete="family-name" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium tracking-wide uppercase mb-2" style={{ color: '#7D7168' }}>Email *</label>
                      <input type="email" name="email" placeholder="your@email.com" className="form-input" required autoComplete="email" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium tracking-wide uppercase mb-2" style={{ color: '#7D7168' }}>Phone</label>
                      <input type="tel" name="phone" placeholder="+31 6 00 00 00 00" className="form-input" autoComplete="tel" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium tracking-wide uppercase mb-2" style={{ color: '#7D7168' }}>Preferred treatment *</label>
                    <select name="treatment" className="form-input" defaultValue="" required style={{ cursor: 'pointer' }}>
                      <option value="" disabled>Select a treatment</option>
                      <option value="laser-hair-removal">Laser Hair Removal</option>
                      <option value="gel-nails">Gel Nails</option>
                      <option value="facial">Facial</option>
                      <option value="other">Other / I need advice</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium tracking-wide uppercase mb-2" style={{ color: '#7D7168' }}>Preferred date</label>
                      <input type="date" name="date" className="form-input" style={{ cursor: 'pointer' }} />
                    </div>
                    <div>
                      <label className="block text-xs font-medium tracking-wide uppercase mb-2" style={{ color: '#7D7168' }}>Preferred time</label>
                      <select name="time" className="form-input" defaultValue="" style={{ cursor: 'pointer' }}>
                        <option value="" disabled>Select a time</option>
                        <option value="morning">Morning (9:00–12:00)</option>
                        <option value="afternoon">Afternoon (12:00–16:00)</option>
                        <option value="late-afternoon">Late afternoon (16:00–19:00)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium tracking-wide uppercase mb-2" style={{ color: '#7D7168' }}>Message</label>
                    <textarea name="message" placeholder="Questions, allergies, or notes..." rows={4} className="form-input resize-none" />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 text-sm font-medium tracking-wide transition-all duration-300"
                    style={{ backgroundColor: '#C4A882', color: '#FAFAF8', borderRadius: '2px', border: 'none', cursor: 'pointer' }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#A8865C';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#C4A882';
                    }}
                  >
                    Send booking request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#F2E8DF' }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C4A882' }}>
              Frequently Asked Questions
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}>
              Booking FAQ
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {bookingFaqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
