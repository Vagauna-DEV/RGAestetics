'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/diensten', label: 'Diensten' },
  { href: '/over-ons', label: 'Over Ons' },
  { href: '/galerij', label: 'Galerij' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const headerBg = scrolled
    ? 'bg-white shadow-sm border-b border-[#F2E8DF]'
    : 'bg-transparent';

  const logoColor = scrolled || mobileOpen ? '#2C2A26' : '#FAFAF8';
  const navColor = scrolled || mobileOpen ? '#2C2A26' : '#FAFAF8';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${headerBg}`}
      style={{ transitionDuration: '400ms' }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <motion.span
              className="text-2xl tracking-wide"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                color: logoColor,
                transition: 'color 0.4s ease',
              }}
              whileHover={{ opacity: 0.8 }}
            >
              Lumière Studio
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium tracking-wide transition-colors duration-300 group"
                  style={{
                    color: isActive ? '#C4A882' : navColor,
                    transition: 'color 0.3s ease',
                  }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                    style={{
                      backgroundColor: '#C4A882',
                      width: isActive ? '100%' : '0%',
                    }}
                  />
                  <span
                    className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: '#C4A882' }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA Button (desktop) */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-2.5 text-sm font-medium tracking-wide transition-all duration-300"
              style={{
                backgroundColor: '#C4A882',
                color: '#FAFAF8',
                borderRadius: '2px',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#A8865C';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#C4A882';
              }}
            >
              Afspraak Maken
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu openen"
            aria-expanded={mobileOpen}
          >
            <motion.span
              className="block h-0.5 w-6 origin-center"
              style={{ backgroundColor: navColor, transition: 'background-color 0.4s ease' }}
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-0.5 w-6"
              style={{ backgroundColor: navColor, transition: 'background-color 0.4s ease' }}
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-0.5 w-6 origin-center"
              style={{ backgroundColor: navColor, transition: 'background-color 0.4s ease' }}
              animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-white border-t border-[#F2E8DF]"
          >
            <div className="container-custom py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className="block py-3 px-4 text-base font-medium rounded-sm transition-colors duration-200"
                      style={{
                        color: isActive ? '#C4A882' : '#2C2A26',
                        backgroundColor: isActive ? '#F2E8DF' : 'transparent',
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.07, duration: 0.3 }}
                className="pt-4"
              >
                <Link
                  href="/contact"
                  className="block w-full text-center py-3 text-sm font-medium tracking-wide"
                  style={{
                    backgroundColor: '#C4A882',
                    color: '#FAFAF8',
                    borderRadius: '2px',
                  }}
                >
                  Afspraak Maken
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
