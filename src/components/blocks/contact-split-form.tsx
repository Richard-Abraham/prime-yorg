'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

interface ContactSplitProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  email?: string;
  phone?: string;
  address?: string;
  primaryLabel?: string;
  /** Builder edit mode: wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Contact split: contact details beside a simple message form with name, email and message.
export function ContactSplitForm({ eyebrow, heading, subheading, email, phone, address, primaryLabel, _editable }: ContactSplitProps) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  const rows = [
    { icon: Mail, value: email, field: 'props.email' },
    { icon: Phone, value: phone, field: 'props.phone' },
    { icon: MapPin, value: address, field: 'props.address' },
  ];
  return (
    <section className="bg-background py-16 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-20">
        <div className="reveal-stagger">
          {eyebrow && <span className="eyebrow" {...editable('props.eyebrow')}>{eyebrow}</span>}
          <h2 className="text-h2 text-gradient mt-5 text-balance" {...editable('props.heading')}>{heading ?? 'Heading'}</h2>
          {subheading && <p className="text-lead mt-4 max-w-md text-foreground/70" {...editable('props.subheading')}>{subheading}</p>}
          <div className="mt-10 space-y-5">
            {rows.filter((r) => r.value).map((r, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="grid size-11 place-items-center rounded-xl border border-border bg-muted text-foreground">
                  <r.icon aria-hidden="true" className="size-5" />
                </span>
                <span className="text-sm text-foreground/80" {...editable(r.field)}>{r.value}</span>
              </div>
            ))}
          </div>
        </div>

        <form className="reveal rounded-2xl border border-border bg-muted p-8 shadow-soft" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-5">
            <div>
              <label className="text-sm font-medium text-foreground">Name</label>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-2 h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-primary" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Email</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-2 h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-primary" placeholder="you@company.com" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Message</label>
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary" placeholder="How can we help?" />
            </div>
            <button type="submit" className="hover-lift btn-primary inline-flex w-full items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold">
              <span {...editable('props.primaryLabel')}>{primaryLabel ?? 'Send message'}</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
