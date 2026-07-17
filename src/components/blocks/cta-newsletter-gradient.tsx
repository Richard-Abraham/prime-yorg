import { ArrowRight } from 'lucide-react';

interface CtaNewsletterGradientProps {
  eyebrow?: string; heading?: string; subheading?: string; primaryLabel?: string; body?: string;
  _editable?: boolean;
}

// Gradient newsletter CTA: a bold full-bleed gradient panel with an inline email capture.
export function CtaNewsletterGradient({ eyebrow, heading, subheading, primaryLabel, body, _editable }: CtaNewsletterGradientProps) {
  const e = (f: string) => (_editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': f }) : {});
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-light px-8 py-16 text-center shadow-glow sm:px-16">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(60% 60% at 80% 10%, rgba(255,255,255,0.5), transparent 60%)' }} />
          <div className="relative mx-auto max-w-xl">
            {eyebrow && <span className="inline-flex items-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground" {...e('props.eyebrow')}>{eyebrow}</span>}
            <h2 className="mt-5 text-balance font-display text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl" {...e('props.heading')}>{heading ?? 'Heading'}</h2>
            {subheading && <p className="mx-auto mt-4 max-w-md text-primary-foreground/85" {...e('props.subheading')}>{subheading}</p>}
            <form className="mx-auto mt-8 flex max-w-md flex-col gap-2 sm:flex-row" onSubmit={(ev) => ev.preventDefault()}>
              <input type="email" placeholder="Enter your email" className="h-12 flex-1 rounded-xl border border-primary-foreground/30 bg-primary-foreground/15 px-4 text-sm text-primary-foreground placeholder:text-primary-foreground/70 outline-none focus:bg-primary-foreground/25" />
              <button type="submit" className="hover-lift inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary-foreground px-6 text-sm font-semibold text-primary"><span {...e('props.primaryLabel')}>{primaryLabel ?? 'Subscribe'}</span><ArrowRight aria-hidden="true" className="size-4" /></button>
            </form>
            {body && <p className="mt-4 text-xs text-primary-foreground/70" {...e('props.body')}>{body}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
