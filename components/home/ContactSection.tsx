'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { type Locale } from '@/lib/i18n';

export default function ContactSection({ locale = 'nl' }: { locale?: Locale }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isEnglish = locale === 'en';
  const contactInfo = [
    {
      label: isEnglish ? 'Address' : 'Adres',
      value: 'Keizersgracht 312, 1016 EX Amsterdam',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C4A882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      label: isEnglish ? 'Phone' : 'Telefoon',
      value: '+31 20 123 4567',
      href: 'tel:+31201234567',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C4A882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.69 3.38 2 2 0 0 1 3.69 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91A16 16 0 0 0 15.09 15.91l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      label: isEnglish ? 'Email' : 'E-mail',
      value: 'info@lumierestudio.nl',
      href: 'mailto:info@lumierestudio.nl',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C4A882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      label: isEnglish ? 'Opening Hours' : 'Openingstijden',
      value: isEnglish ? 'Monday – Saturday: 9:00 – 19:00' : 'Maandag – Zaterdag: 9:00 – 19:00',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C4A882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
      <div className="container-custom">
        <div className="text-center mb-14">
          <SectionHeader
            eyebrow={isEnglish ? 'Get In Touch' : 'Neem Contact Op'}
            title={isEnglish ? 'We would love to hear from you' : 'We horen graag van u'}
            subtitle={
              isEnglish
                ? 'Have a question or want to book an appointment? Fill in the form or contact us directly.'
                : 'Heeft u vragen of wilt u een afspraak maken? Vul het formulier in of neem direct contact op.'
            }
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
                  Keizersgracht 312, Amsterdam
                </p>
                <a
                  href="https://maps.google.com/?q=Keizersgracht+312+Amsterdam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-xs font-medium transition-colors duration-200"
                  style={{ color: '#C4A882' }}
                >
                  {isEnglish ? 'View on Google Maps →' : 'Bekijk op Google Maps →'}
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium tracking-wide uppercase mb-2" style={{ color: '#7D7168' }}>
                    {isEnglish ? 'Name' : 'Naam'}
                  </label>
                  <input
                    type="text"
                    name="naam"
                    placeholder={isEnglish ? 'Your name' : 'Uw naam'}
                    className="form-input"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium tracking-wide uppercase mb-2" style={{ color: '#7D7168' }}>
                    {isEnglish ? 'Email' : 'E-mail'}
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder={isEnglish ? 'your@email.com' : 'uw@email.nl'}
                    className="form-input"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium tracking-wide uppercase mb-2" style={{ color: '#7D7168' }}>
                  {isEnglish ? 'Phone' : 'Telefoon'}
                </label>
                <input
                  type="tel"
                  name="telefoon"
                  placeholder="+31 6 00 00 00 00"
                  className="form-input"
                  autoComplete="tel"
                />
              </div>

              <div>
                <label className="block text-xs font-medium tracking-wide uppercase mb-2" style={{ color: '#7D7168' }}>
                  {isEnglish ? 'Preferred treatment' : 'Gewenste behandeling'}
                </label>
                <select name="behandeling" className="form-input" defaultValue="" style={{ cursor: 'pointer' }}>
                  <option value="" disabled>
                    {isEnglish ? 'Select a treatment' : 'Selecteer een behandeling'}
                  </option>
                  <option value="laser-ontharing">{isEnglish ? 'Laser Hair Removal' : 'Laser Ontharing'}</option>
                  <option value="gel-nagels">{isEnglish ? 'Gel Nails' : 'Gel Nagels'}</option>
                  <option value="gezichtsbehandeling">{isEnglish ? 'Facial' : 'Gezichtsbehandeling'}</option>
                  <option value="anders">{isEnglish ? 'Other / Not sure yet' : 'Anders / Weet ik nog niet'}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium tracking-wide uppercase mb-2" style={{ color: '#7D7168' }}>
                  {isEnglish ? 'Message' : 'Bericht'}
                </label>
                <textarea
                  name="bericht"
                  placeholder={isEnglish ? 'Your question or notes...' : 'Uw vraag of opmerkingen...'}
                  rows={4}
                  className="form-input resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 text-sm font-medium tracking-wide transition-all duration-300"
                style={{
                  backgroundColor: '#C4A882',
                  color: '#FAFAF8',
                  borderRadius: '2px',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#A8865C';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#C4A882';
                }}
              >
                {isEnglish ? 'Send Message' : 'Bericht Versturen'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
