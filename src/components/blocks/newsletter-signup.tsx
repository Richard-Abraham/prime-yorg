'use client';

import { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

interface NewsletterSignupProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  body?: string;
  /** Builder edit mode: wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Newsletter signup: a centered email capture band with heading, inline input and button.
export function NewsletterSignup({ eyebrow, heading, subheading, primaryLabel, body, _editable }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="surface-glow bg-muted py-16 sm:py-24">
      <div className="reveal-stagger mx-auto max-w-2xl px-6 text-center">
        {eyebrow && (
          <div className="flex justify-center">
            <span className="eyebrow"><Mail aria-hidden="true" className="size-3.5" /><span {...editable('props.eyebrow')}>{eyebrow}</span></span>
          </div>
        )}
        <h2 className="text-h2 text-gradient mt-6 text-balance" {...editable('props.heading')}>{heading ?? 'Heading'}</h2>
        {subheading && <p className="text-lead mx-auto mt-4 max-w-xl text-foreground/70" {...editable('props.subheading')}>{subheading}</p>}
        <form className="mx-auto mt-8 flex max-w-md flex-col gap-2 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="h-12 flex-1 rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-primary" />
          <button type="submit" className="hover-lift btn-primary inline-flex h-12 items-center justify-center gap-2 rounded-xl px-6 text-sm font-semibold">
            <span {...editable('props.primaryLabel')}>{primaryLabel ?? 'Subscribe'}</span>
            <ArrowRight aria-hidden="true" className="size-4" />
          </button>
        </form>
        {body && <p className="mt-4 text-xs text-foreground/55" {...editable('props.body')}>{body}</p>}
      </div>
    </section>
  );
}
