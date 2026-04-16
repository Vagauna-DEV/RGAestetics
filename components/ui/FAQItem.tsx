'use client';

import { useState } from 'react';

export default function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid #E5DDD5' }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-center justify-between gap-4"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <span className="text-sm font-medium" style={{ color: '#2C2A26' }}>{q}</span>
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
          <p className="text-sm leading-relaxed" style={{ color: '#7D7168' }}>{a}</p>
        </div>
      )}
    </div>
  );
}
