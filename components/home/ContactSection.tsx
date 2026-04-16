'use client';

import { useRef, useState, type SyntheticEvent } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { business } from '@/lib/site-data';

const contactInfo = [
  {
    label: 'Adres',
    value: business.address.join(', '),
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C4A882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: 'Telefoon',
    value: business.phone,
    href: business.phoneHref,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C4A882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.69 3.38 2 2 0 0 1 3.69 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91A16 16 0 0 0 15.09 15.91l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: 'E-mail',
    value: business.email,
    href: business.emailHref,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C4A882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'Openingstijden',
    value: business.hours.map((h) => `${h.label}: ${h.value}`).join(' · '),
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C4A882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

type FormStatus = 'idle' | 'pending' | 'success' | 'error';
type FieldErrors = Partial<Record<'naam' | 'email' | 'telefoon', string>>;

function inputClass(error?: string) {
  return error ? 'form-input form-input-error' : 'form-input';
}

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<FieldErrors>({});

  function validate(data: FormData): FieldErrors {
    const errs: FieldErrors = {};
    const naam = (data.get('naam') as string ?? '').trim();
    const email = (data.get('email') as string ?? '').trim();
    const telefoon = (data.get('telefoon') as string ?? '').trim();

    if (naam.length < 2) errs.naam = 'Naam is verplicht (min. 2 tekens).';
    if (!email) {
      errs.email = 'E-mailadres is verplicht.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Voer een geldig e-mailadres in.';
    }
    if (telefoon && !/^[+\d\s\-().]{7,20}$/.test(telefoon)) {
      errs.telefoon = 'Voer een geldig telefoonnummer in.';
    }

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
    <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
      <div className="container-custom">
        <div className="text-center mb-14">
          <SectionHeader
            eyebrow="Neem Contact Op"
            title="We horen graag van u"
            subtitle="Heeft u vragen of wilt u een afspraak maken? Vul het formulier in of neem direct contact op."
            centered
          />
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="space-y-6 mb-10">
              {contactInfo.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span
                    className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                    style={{ backgroundColor: '#F2E8DF', borderRadius: '2px' }}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: '#7D7168' }}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} className="text-sm link-gold">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm" style={{ color: '#2C2A26' }}>
                        {item.value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div
              className="relative overflow-hidden flex items-center justify-center"
              style={{
                height: '240px',
                backgroundColor: '#F2E8DF',
                borderRadius: '2px',
                border: '1px solid #E5DDD5',
              }}
            >
              <div className="text-center px-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C4A882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-3">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p className="text-sm font-medium" style={{ color: '#2C2A26' }}>
                  Lumière Studio
                </p>
                <p className="text-xs mt-1" style={{ color: '#7D7168' }}>
                  {business.address.join(', ')}
                </p>
                <a
                  href={business.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-xs font-medium link-gold-bright"
                >
                  Bekijk op Google Maps →
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
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
                {/* Honeypot */}
                <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="Nieuw contact via Lumière Studio website" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium tracking-wide uppercase mb-2" style={{ color: '#7D7168' }}>
                      Naam *
                    </label>
                    <input
                      type="text"
                      name="naam"
                      placeholder="Uw naam"
                      className={inputClass(errors.naam)}
                      autoComplete="name"
                      onChange={() => clearError('naam')}
                    />
                    {errors.naam && <p className="mt-1 text-xs" style={{ color: '#B85C5C' }}>{errors.naam}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium tracking-wide uppercase mb-2" style={{ color: '#7D7168' }}>
                      E-mail *
                    </label>
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
                </div>

                <div>
                  <label className="block text-xs font-medium tracking-wide uppercase mb-2" style={{ color: '#7D7168' }}>
                    Telefoon
                  </label>
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

                <div>
                  <label className="block text-xs font-medium tracking-wide uppercase mb-2" style={{ color: '#7D7168' }}>
                    Gewenste behandeling
                  </label>
                  <select name="behandeling" className="form-input" defaultValue="" style={{ cursor: 'pointer' }}>
                    <option value="" disabled>
                      Selecteer een behandeling
                    </option>
                    <option value="laser-ontharing">Laser Ontharing</option>
                    <option value="gel-nagels">Gel Nagels</option>
                    <option value="gezichtsbehandeling">Gezichtsbehandeling</option>
                    <option value="anders">Anders / Weet ik nog niet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium tracking-wide uppercase mb-2" style={{ color: '#7D7168' }}>
                    Bericht
                  </label>
                  <textarea
                    name="bericht"
                    placeholder="Uw vraag of opmerkingen..."
                    rows={4}
                    className="form-input resize-none"
                  />
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
                  className="btn-gold w-full py-3.5 text-sm font-medium tracking-wide"
                  style={{ opacity: status === 'pending' ? 0.7 : 1 }}
                >
                  {status === 'pending' ? 'Versturen…' : 'Bericht Versturen'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
