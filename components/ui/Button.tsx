'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  external?: boolean;
}

const sizeStyles: Record<ButtonSize, { padding: string; fontSize: string }> = {
  sm: { padding: '0.5rem 1.25rem', fontSize: '0.8125rem' },
  md: { padding: '0.75rem 2rem', fontSize: '0.9375rem' },
  lg: { padding: '1rem 2.5rem', fontSize: '1rem' },
};

// Colors and hover come from CSS classes in globals.css
const variantClass: Record<ButtonVariant, string> = {
  primary: 'btn-primary',
  outline: 'btn-outline',
  ghost: 'btn-ghost',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  external = false,
}: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
    letterSpacing: '0.03em',
    borderRadius: '2px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap' as const,
    ...sizeStyles[size],
  };

  const content = (
    <motion.span
      className={`btn ${variantClass[variant]} ${className}`}
      style={baseStyle}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      transition={{ duration: 0.15 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    }
    return <Link href={href}>{content}</Link>;
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} style={{ background: 'none', border: 'none', padding: 0 }}>
      {content}
    </button>
  );
}
