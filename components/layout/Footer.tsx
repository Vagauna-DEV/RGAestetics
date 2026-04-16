import Link from 'next/link';
import type { ReactNode } from 'react';
import { business } from '@/lib/site-data';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/diensten', label: 'Diensten' },
  { href: '/over-ons', label: 'Over Ons' },
  { href: '/galerij', label: 'Galerij' },
  { href: '/contact', label: 'Contact' },
];

const serviceLinks = [
  { href: '/diensten/laser-ontharing', label: 'Laser Ontharing' },
  { href: '/diensten/gelnagels', label: 'Gel Nagels' },
  { href: '/diensten/gezichtsbehandelingen', label: 'Gezichtsbehandelingen' },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#2C2A26', color: '#FAFAF8' }}>
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/">
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
              Verfijning in elke behandeling
            </p>
            <div className="mt-4 w-10 h-px" style={{ backgroundColor: '#C4A882' }} />
            <p className="mt-4 text-sm leading-relaxed" style={{ color: '#9E9188' }}>
              Een premium schoonheidssalon in het hart van Amsterdam, waar luxe en vakmanschap samenkomen.
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
              Navigatie
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
              Behandelingen
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
                  {business.address[0]}<br />
                  {business.address[1]}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon />
                <a href={business.phoneHref} className="text-sm link-white-faded">
                  {business.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon />
                <a href={business.emailHref} className="text-sm link-white-faded">
                  {business.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <ClockIcon />
                <span className="text-sm" style={{ color: '#9E9188' }}>
                  {business.hours.map((h) => `${h.label}: ${h.value}`).join('\n').split('\n').map((line, i) => (
                    <span key={i}>{line}{i < business.hours.length - 1 && <br />}</span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #3D3A35' }}>
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: '#6B6560' }}>
            © {new Date().getFullYear()} Lumière Studio. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs link-white-faded">
              Privacybeleid
            </Link>
            <Link href="/algemene-voorwaarden" className="text-xs link-white-faded">
              Algemene Voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
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
      className="social-link-footer flex items-center justify-center w-9 h-9 rounded-sm transition-all duration-300"
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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0" style={{ color: '#C4A882' }}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0" style={{ color: '#C4A882' }}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.69 3.38 2 2 0 0 1 3.69 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91A16 16 0 0 0 15.09 15.91l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0" style={{ color: '#C4A882' }}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0" style={{ color: '#C4A882' }}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
