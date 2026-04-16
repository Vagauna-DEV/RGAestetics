'use client';

import { useState, type SyntheticEvent } from 'react';
import { business } from '@/lib/site-data';
import FAQItem from '@/components/ui/FAQItem';

const contactDetails = [
  {
    label: 'Adres',
    value: business.address.join('\n'),
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C4A882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: 'Telefoon',
    value: business.phone,
    href: business.phoneHref,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C4A882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.69 3.38 2 2 0 0 1 3.69 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91A16 16 0 0 0 15.09 15.91l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: 'E-mail',
    value: business.email,
    href: business.emailHref,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C4A882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'Openingstijden',
    value: business.hours.map((h) => `${h.label}: ${h.value}`).join('\n'),
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
    a: `U kunt een afspraak maken via het contactformulier op deze pagina, telefonisch via ${business.phone}, of per e-mail via ${business.email}. We bevestigen uw afspraak binnen 24 uur.`,
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
    a: `Ja! Onze geschenkbonnen zijn beschikbaar in elk gewenst bedrag en zijn 1 jaar geldig. Ze zijn te koop in de salon of via ${business.email}. Ideaal als cadeau voor een speciale gelegenheid.`,
  },
  {
    q: 'Zijn er parkeerplaatsen beschikbaar?',
    a: 'De Keizersgracht is bereikbaar met de tram (lijn 2, 11, 12) en per fiets. Betaald parkeren is beschikbaar in de directe omgeving. Wij raden openbaar vervoer aan gezien de centrale ligging.',
  },
];

type FormStatus = 'idle' | 'pending' | 'success' | 'error';
type FieldErrors = Partial<Record<'voornaam' | 'achternaam' | 'email' | 'telefoon' | 'behandeling' | 'datum' | 'akkoord', string>>;

function inputClass(error?: string) {
  return error ? 'form-input form-input-error' : 'form-input';
}

export default function ContactContent() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<FieldErrors>({});
  const today = new Date().toISOString().split('T')[0];

  function validate(data: FormData): FieldErrors {
    const errs: FieldErrors = {};
    const voornaam = (data.get('voornaam') as string ?? '').trim();
    const achternaam = (data.get('achternaam') as string ?? '').trim();
    const email = (data.get('email') as string ?? '').trim();
    const telefoon = (data.get('telefoon') as string ?? '').trim();
    const behandeling = (data.get('behandeling') as string ?? '').trim();
    const datum = (data.get('datum') as string ?? '').trim();

    if (voornaam.length < 2) errs.voornaam = 'Voornaam is verplicht (min. 2 tekens).';
    if (achternaam.length < 2) errs.achternaam = 'Achternaam is verplicht (min. 2 tekens).';
    if (!email) {
      errs.email = 'E-mailadres is verplicht.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Voer een geldig e-mailadres in.';
    }
    if (telefoon && !/^[+\d\s\-().]{7,20}$/.test(telefoon)) {
      errs.telefoon = 'Voer een geldig telefoonnummer in.';
    }
    if (!behandeling) errs.behandeling = 'Selecteer een behandeling.';
    if (datum && datum < today) errs.datum = 'Kies een datum in de toekomst.';
    if (!data.get('akkoord')) errs.akkoord = 'U dient akkoord te gaan met de voorwaarden om door te gaan.';

    return errs;
  }

  function clearError(field: keyof FieldErrors) {
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  async function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const errs = validate(data);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus('pending');

    // Remove the checkbox value — formsubmit doesn't need it
    data.delete('akkoord');

    try {
      const res = await fetch('https://formsubmit.co/ajax/georgevagauna@gmail.com', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      const json = await res.json();
      if (json.success === 'true' || json.success === true) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
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
                        <a href={item.href} className="link-gold text-sm block">
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
                  <p className="text-xs mt-1" style={{ color: '#7D7168' }}>{business.address.join(', ')}</p>
                  <a href={business.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-xs font-medium link-gold-bright">
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

              {status === 'success' ? (
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
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Honeypot — must be empty for real submissions */}
                  <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="Nieuw contact via Lumière Studio website" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium tracking-wide uppercase mb-2" style={{ color: '#7D7168' }}>Voornaam *</label>
                      <input
                        type="text"
                        name="voornaam"
                        placeholder="Uw voornaam"
                        className={inputClass(errors.voornaam)}
                        autoComplete="given-name"
                        onChange={() => clearError('voornaam')}
                      />
                      {errors.voornaam && <p className="mt-1 text-xs" style={{ color: '#B85C5C' }}>{errors.voornaam}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-medium tracking-wide uppercase mb-2" style={{ color: '#7D7168' }}>Achternaam *</label>
                      <input
                        type="text"
                        name="achternaam"
                        placeholder="Uw achternaam"
                        className={inputClass(errors.achternaam)}
                        autoComplete="family-name"
                        onChange={() => clearError('achternaam')}
                      />
                      {errors.achternaam && <p className="mt-1 text-xs" style={{ color: '#B85C5C' }}>{errors.achternaam}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium tracking-wide uppercase mb-2" style={{ color: '#7D7168' }}>E-mail *</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="uw@email.nl"
                        className={inputClass(errors.email)}
                        autoComplete="email"
                        onChange={() => clearError('email')}
                      />
                      {errors.email && <p className="mt-1 text-xs" style={{ color: '#B85C5C' }}>{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-medium tracking-wide uppercase mb-2" style={{ color: '#7D7168' }}>Telefoon</label>
                      <input
                        type="tel"
                        name="telefoon"
                        placeholder="+31 6 00 00 00 00"
                        className={inputClass(errors.telefoon)}
                        autoComplete="tel"
                        onChange={() => clearError('telefoon')}
                      />
                      {errors.telefoon && <p className="mt-1 text-xs" style={{ color: '#B85C5C' }}>{errors.telefoon}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium tracking-wide uppercase mb-2" style={{ color: '#7D7168' }}>Gewenste behandeling *</label>
                    <select
                      name="behandeling"
                      className={inputClass(errors.behandeling)}
                      defaultValue=""
                      style={{ cursor: 'pointer' }}
                      onChange={() => clearError('behandeling')}
                    >
                      <option value="" disabled>Selecteer een behandeling</option>
                      <option value="laser-ontharing">Laser Ontharing</option>
                      <option value="gel-nagels">Gel Nagels</option>
                      <option value="gel-pedicure">Gel Pedicure</option>
                      <option value="hydraterende-facial">Hydraterende Facial</option>
                      <option value="anti-aging-facial">Anti-Aging Facial</option>
                      <option value="signature-facial">Luxe Signature Facial</option>
                      <option value="anders">Anders / Overleg gewenst</option>
                    </select>
                    {errors.behandeling && <p className="mt-1 text-xs" style={{ color: '#B85C5C' }}>{errors.behandeling}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium tracking-wide uppercase mb-2" style={{ color: '#7D7168' }}>Gewenste datum</label>
                      <input
                        type="date"
                        name="datum"
                        min={today}
                        className={inputClass(errors.datum)}
                        style={{ cursor: 'pointer' }}
                        onChange={() => clearError('datum')}
                      />
                      {errors.datum && <p className="mt-1 text-xs" style={{ color: '#B85C5C' }}>{errors.datum}</p>}
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

                  <div>
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="akkoord"
                        name="akkoord"
                        className="mt-1"
                        style={{ accentColor: '#C4A882', cursor: 'pointer' }}
                        onChange={() => clearError('akkoord')}
                      />
                      <label htmlFor="akkoord" className="text-xs leading-relaxed" style={{ color: '#7D7168', cursor: 'pointer' }}>
                        Ik ga akkoord met de{' '}
                        <a href="/algemene-voorwaarden" style={{ color: '#C4A882' }}>algemene voorwaarden</a>
                        {' '}en het{' '}
                        <a href="/privacy" style={{ color: '#C4A882' }}>privacybeleid</a>
                        {' '}van Lumière Studio.
                      </label>
                    </div>
                    {errors.akkoord && <p className="mt-1 text-xs" style={{ color: '#B85C5C' }}>{errors.akkoord}</p>}
                  </div>

                  {status === 'error' && (
                    <p className="text-sm" style={{ color: '#B85C5C' }}>
                      Er ging iets mis. Probeer het opnieuw of stuur een e-mail naar{' '}
                      <a href={business.emailHref} style={{ color: '#C4A882' }}>{business.email}</a>.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'pending'}
                    className="w-full py-3.5 text-sm font-medium tracking-wide btn-gold"
                    style={{ opacity: status === 'pending' ? 0.7 : 1 }}
                  >
                    {status === 'pending' ? 'Versturen…' : 'Afspraak Aanvragen'}
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
