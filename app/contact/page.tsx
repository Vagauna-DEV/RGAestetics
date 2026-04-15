'use client';

import { useState } from 'react';
import type { Metadata } from 'next';

const contactDetails = [
  {
    label: 'Adres',
    value: 'Keizersgracht 312\n1016 EX Amsterdam',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C4A882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: 'Telefoon',
    value: '+31 20 123 4567',
    href: 'tel:+31201234567',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C4A882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.69 3.38 2 2 0 0 1 3.69 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91A16 16 0 0 0 15.09 15.91l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: 'E-mail',
    value: 'info@lumierestudio.nl',
    href: 'mailto:info@lumierestudio.nl',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C4A882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'Openingstijden',
    value: 'Ma–Vr: 9:00–19:00\nZa: 9:00–18:00\nZo: Gesloten',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C4A882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const bookingFaqs = [
  {
    q: 'Hoe maak ik een afspraak?',
    a: 'U kunt een afspraak maken via het contactformulier op deze pagina, telefonisch via +31 20 123 4567, of per e-mail via info@lumierestudio.nl. We bevestigen uw afspraak binnen 24 uur.',
  },
  {
    q: 'Kan ik een afspraak annuleren?',
    a: 'Ja, u kunt kosteloos annuleren tot 24 uur voor de afspraak. Bij annulering binnen 24 uur brengen we 50% van de behandelkosten in rekening. Bij no-show brengen we de volledige behandelkosten in rekening.',
  },
  {
    q: 'Hoelang van tevoren moet ik een afspraak maken?',
    a: 'Voor reguliere behandelingen kunt u doorgaans binnen 3–5 werkdagen terecht. Voor populaire tijdstippen (avond en weekend) adviseren we minimaal 1 week van tevoren te reserveren.',
  },
  {
    q: 'Bieden jullie geschenkbonnen aan?',
    a: 'Ja! Onze geschenkbonnen zijn beschikbaar in elk gewenst bedrag en zijn 1 jaar geldig. Ze zijn te koop in de salon of via info@lumierestudio.nl. Ideaal als cadeau voor een speciale gelegenheid.',
  },
  {
    q: 'Zijn er parkeerplaatsen beschikbaar?',
    a: 'De Keizersgracht is bereikbaar met de tram (lijn 2, 11, 12) en per fiets. Betaald parkeren is beschikbaar in de directe omgeving. Wij raden openbaar vervoer aan gezien de centrale ligging.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid #E5DDD5' }}>
      <button onClick={() => setOpen(!open)} className="w-full text-left py-5 flex items-center justify-between gap-4" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
        <span className="text-sm font-medium" style={{ color: '#2C2A26' }}>{q}</span>
        <span className="flex-shrink-0 transition-transform duration-300" style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)', color: '#C4A882' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
      {open && <div className="pb-5"><p className="text-sm leading-relaxed" style={{ color: '#7D7168' }}>{a}</p></div>}
    </div>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20" style={{ backgroundColor: '#2C2A26' }}>
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(44,42,38,0.85), rgba(44,42,38,0.95))' }} />
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C4A882' }}>
            We Helpen U Graag
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: '#FAFAF8', fontWeight: 400, fontStyle: 'italic' }}>
            Contact & Afspraken
          </h1>
          <div className="mt-4 w-12 h-px mx-auto" style={{ backgroundColor: '#C4A882' }} />
          <p className="mt-6 text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#9E9188' }}>
            Plan uw afspraak of stel uw vraag — wij reageren binnen 24 uur
          </p>
        </div>
      </section>

      {/* Contact info + Form */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact info (2/5) */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}>
                Contactgegevens
              </h2>
              <div className="w-10 h-px mb-8" style={{ backgroundColor: '#C4A882' }} />

              <ul className="space-y-7">
                {contactDetails.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center" style={{ backgroundColor: '#F2E8DF', borderRadius: '2px' }}>
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: '#7D7168' }}>{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm transition-colors duration-200 block" style={{ color: '#2C2A26' }} onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#C4A882'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#2C2A26'; }}>
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm whitespace-pre-line" style={{ color: '#2C2A26' }}>{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Map placeholder */}
              <div
                className="mt-10 overflow-hidden flex items-center justify-center"
                style={{ height: '200px', backgroundColor: '#F2E8DF', borderRadius: '2px', border: '1px solid #E5DDD5' }}
              >
                <div className="text-center px-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C4A882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-3">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  <p className="text-sm font-medium" style={{ color: '#2C2A26' }}>Lumière Studio</p>
                  <p className="text-xs mt-1" style={{ color: '#7D7168' }}>Keizersgracht 312, Amsterdam</p>
                  <a href="https://maps.google.com/?q=Keizersgracht+312+Amsterdam" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-xs font-medium" style={{ color: '#C4A882' }}>
                    Routebeschrijving →
                  </a>
                </div>
              </div>
            </div>

            {/* Form (3/5) */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}>
                Afspraak of Vraag
              </h2>
              <div className="w-10 h-px mb-8" style={{ backgroundColor: '#C4A882' }} />

              {submitted ? (
                <div className="p-8 text-center" style={{ backgroundColor: '#F2E8DF', borderRadius: '2px' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C4A882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <h3 className="text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26' }}>
                    Bericht Ontvangen!
                  </h3>
                  <p className="text-sm" style={{ color: '#7D7168' }}>Wij nemen binnen 24 uur contact met u op.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium tracking-wide uppercase mb-2" style={{ color: '#7D7168' }}>Voornaam *</label>
                      <input type="text" name="voornaam" placeholder="Uw voornaam" className="form-input" required autoComplete="given-name" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium tracking-wide uppercase mb-2" style={{ color: '#7D7168' }}>Achternaam *</label>
                      <input type="text" name="achternaam" placeholder="Uw achternaam" className="form-input" required autoComplete="family-name" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium tracking-wide uppercase mb-2" style={{ color: '#7D7168' }}>E-mail *</label>
                      <input type="email" name="email" placeholder="uw@email.nl" className="form-input" required autoComplete="email" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium tracking-wide uppercase mb-2" style={{ color: '#7D7168' }}>Telefoon</label>
                      <input type="tel" name="telefoon" placeholder="+31 6 00 00 00 00" className="form-input" autoComplete="tel" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium tracking-wide uppercase mb-2" style={{ color: '#7D7168' }}>Gewenste behandeling *</label>
                    <select name="behandeling" className="form-input" defaultValue="" required style={{ cursor: 'pointer' }}>
                      <option value="" disabled>Selecteer een behandeling</option>
                      <option value="laser-ontharing">Laser Ontharing</option>
                      <option value="gel-nagels">Gel Nagels</option>
                      <option value="gel-pedicure">Gel Pedicure</option>
                      <option value="hydraterende-facial">Hydraterende Facial</option>
                      <option value="anti-aging-facial">Anti-Aging Facial</option>
                      <option value="signature-facial">Luxe Signature Facial</option>
                      <option value="anders">Anders / Overleg gewenst</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium tracking-wide uppercase mb-2" style={{ color: '#7D7168' }}>Gewenste datum</label>
                      <input type="date" name="datum" className="form-input" style={{ cursor: 'pointer' }} />
                    </div>
                    <div>
                      <label className="block text-xs font-medium tracking-wide uppercase mb-2" style={{ color: '#7D7168' }}>Voorkeur tijdstip</label>
                      <select name="tijdstip" className="form-input" defaultValue="" style={{ cursor: 'pointer' }}>
                        <option value="" disabled>Selecteer een tijdstip</option>
                        <option value="ochtend">Ochtend (9:00–12:00)</option>
                        <option value="middag">Middag (12:00–16:00)</option>
                        <option value="namiddag">Namiddag (16:00–19:00)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium tracking-wide uppercase mb-2" style={{ color: '#7D7168' }}>Bericht of bijzonderheden</label>
                    <textarea name="bericht" placeholder="Eventuele vragen, allergieën of bijzonderheden..." rows={4} className="form-input resize-none" />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="akkoord"
                      name="akkoord"
                      required
                      className="mt-1"
                      style={{ accentColor: '#C4A882', cursor: 'pointer' }}
                    />
                    <label htmlFor="akkoord" className="text-xs leading-relaxed" style={{ color: '#7D7168', cursor: 'pointer' }}>
                      Ik ga akkoord met de <a href="/algemene-voorwaarden" style={{ color: '#C4A882' }}>algemene voorwaarden</a> en het <a href="/privacy" style={{ color: '#C4A882' }}>privacybeleid</a> van Lumière Studio.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 text-sm font-medium tracking-wide transition-all duration-300"
                    style={{ backgroundColor: '#C4A882', color: '#FAFAF8', borderRadius: '2px', border: 'none', cursor: 'pointer' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#A8865C'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#C4A882'; }}
                  >
                    Afspraak Aanvragen
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ backgroundColor: '#F2E8DF' }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C4A882' }}>Vragen over Afspraken</span>
            <h2 className="mt-3 text-3xl sm:text-4xl" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}>
              Veelgestelde Vragen
            </h2>
            <div className="mt-4 w-10 h-px mx-auto" style={{ backgroundColor: '#C4A882' }} />
          </div>
          <div className="max-w-2xl mx-auto">
            {bookingFaqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
