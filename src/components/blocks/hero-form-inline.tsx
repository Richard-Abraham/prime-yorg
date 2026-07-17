import { ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroFormInlineProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  note?: string;
  _editable?: boolean;
}

// Split hero with an inline email-capture card beside the headline.
export function HeroFormInline({ eyebrow, heading, subheading, primaryLabel, note, _editable }: HeroFormInlineProps) {
  const e = (f: string) => (_editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': f }) : {});
  return (
    <section className="bg-background py-16 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="reveal-stagger">
          {eyebrow && <span className="eyebrow"><span {...e('props.eyebrow')}>{eyebrow}</span></span>}
          <h1 className="text-display mt-5 text-balance text-foreground" {...e('props.heading')}>{heading ?? 'Heading'}</h1>
          {subheading && <p className="text-lead mt-6 max-w-xl text-foreground/70" {...e('props.subheading')}>{subheading}</p>}
        </div>
        <div className="reveal rounded-3xl border border-border bg-muted p-8 shadow-soft">
          <form className="flex flex-col gap-3" onSubmit={(ev) => ev.preventDefault()}>
            <label className="text-sm font-medium text-foreground">Work email</label>
            <input type="email" placeholder="you@company.com" className="h-12 rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none focus:border-primary" />
            <button type="submit" className="hover-lift btn-primary inline-flex h-12 items-center justify-center gap-2 rounded-xl text-sm font-semibold">
              <span {...e('props.primaryLabel')}>{primaryLabel ?? 'Get started'}</span>
              <ArrowRight aria-hidden="true" className="size-4" />
            </button>
            {note && (
              <p className="mt-1 flex items-center gap-1.5 text-xs text-foreground/60"><ShieldCheck aria-hidden="true" className="size-3.5" /><span {...e('props.note')}>{note}</span></p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
