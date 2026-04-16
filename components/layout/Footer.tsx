'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { getLocaleFromPath, localizePath, type Locale } from '@/lib/i18n';

export default function Footer() {
  const pathname = usePathname() ?? '/';
  const locale = getLocaleFromPath(pathname);
  const quickLinks = getQuickLinks(locale);
  const serviceLinks = getServiceLinks(locale);

  return (
    <footer style={{ backgroundColor: '#2C2A26', color: '#FAFAF8' }}>
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href={localizePath('/', locale)}>
              <span
                className="text-2xl tracking-wide"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  color: '#C4A882',
                }}
              >
                Lumière Studio
              </span>
            </Link>
            <p
              className="mt-3 text-sm leading-relaxed"
              style={{ color: '#B0A89E', fontStyle: 'italic' }}
            >
              {locale === 'en'
                ? 'Refinement in every treatment'
                : 'Verfijning in elke behandeling'}
            </p>
            <div className="mt-4 w-10 h-px" style={{ backgroundColor: '#C4A882' }} />
            <p className="mt-4 text-sm leading-relaxed" style={{ color: '#9E9188' }}>
              {locale === 'en'
                ? 'A premium beauty salon in the heart of Amsterdam, where luxury and craftsmanship meet.'
                : 'Een premium schoonheidssalon in het hart van Amsterdam, waar luxe en vakmanschap samenkomen.'}
            </p>

            <div className="mt-6 flex gap-3">
              <SocialLink href="https://instagram.com" label="Instagram">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </SocialLink>
              <SocialLink href="https://facebook.com" label="Facebook">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </SocialLink>
            </div>
          </div>

          <div>
            <h3
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: '#C4A882' }}
            >
              {locale === 'en' ? 'Navigation' : 'Navigatie'}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm link-white-faded">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: '#C4A882' }}
            >
              {locale === 'en' ? 'Treatments' : 'Behandelingen'}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm link-white-faded">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: '#C4A882' }}
            >
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <LocationIcon />
                <span className="text-sm" style={{ color: '#9E9188' }}>
                  Keizersgracht 312<br />
                  1016 EX Amsterdam
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon />
                <a href="tel:+31201234567" className="text-sm link-white-faded">
                  +31 20 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon />
                <a href="mailto:info@lumierestudio.nl" className="text-sm link-white-faded">
                  info@lumierestudio.nl
                </a>
              </li>
              <li className="flex items-start gap-3">
                <ClockIcon />
                <span className="text-sm" style={{ color: '#9E9188' }}>
                  {locale === 'en' ? 'Mon–Sat: 9:00–19:00' : 'Ma–Za: 9:00–19:00'}
                  <br />
                  {locale === 'en' ? 'Sun: Closed' : 'Zo: Gesloten'}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #3D3A35' }}>
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: '#6B6560' }}>
            © {new Date().getFullYear()} Lumière Studio.{' '}
            {locale === 'en' ? 'All rights reserved.' : 'Alle rechten voorbehouden.'}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs link-white-faded">
              {locale === 'en' ? 'Privacy Policy' : 'Privacybeleid'}
            </Link>
            <Link href="/algemene-voorwaarden" className="text-xs link-white-faded">
              {locale === 'en' ? 'Terms & Conditions' : 'Algemene Voorwaarden'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function getQuickLinks(locale: Locale) {
  return [
    { href: localizePath('/', locale), label: 'Home' },
    { href: localizePath('/diensten', locale), label: locale === 'en' ? 'Services' : 'Diensten' },
    { href: localizePath('/over-ons', locale), label: locale === 'en' ? 'About' : 'Over Ons' },
    { href: localizePath('/galerij', locale), label: locale === 'en' ? 'Gallery' : 'Galerij' },
    { href: localizePath('/contact', locale), label: 'Contact' },
  ];
}

function getServiceLinks(locale: Locale) {
  return [
    {
      href: localizePath('/diensten/laser-ontharing', locale),
      label: locale === 'en' ? 'Laser Hair Removal' : 'Laser Ontharing',
    },
    {
      href: localizePath('/diensten/gelnagels', locale),
      label: locale === 'en' ? 'Gel Nails' : 'Gel Nagels',
    },
    {
      href: localizePath('/diensten/gezichtsbehandelingen', locale),
      label: locale === 'en' ? 'Facials' : 'Gezichtsbehandelingen',
    },
  ];
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-9 h-9 rounded-sm transition-all duration-300"
      style={{ border: '1px solid #4A4540' }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor = '#C4A882';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor = '#4A4540';
      }}
      aria-label={label}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ color: '#9E9188' }}
      >
        {children}
      </svg>
    </a>
  );
}

function LocationIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 flex-shrink-0"
      style={{ color: '#C4A882' }}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-shrink-0"
      style={{ color: '#C4A882' }}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.69 3.38 2 2 0 0 1 3.69 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91A16 16 0 0 0 15.09 15.91l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-shrink-0"
      style={{ color: '#C4A882' }}
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 flex-shrink-0"
      style={{ color: '#C4A882' }}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
