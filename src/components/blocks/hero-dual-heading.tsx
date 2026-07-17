import { ArrowRight } from 'lucide-react';

interface HeroDualHeadingProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  _editable?: boolean;
}

// Editorial dual-column hero: oversized heading left, paragraph and CTA right, top-aligned.
export function HeroDualHeading({ eyebrow, heading, subheading, body, primaryLabel, primaryHref, _editable }: HeroDualHeadingProps) {
  const e = (f: string) => (_editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': f }) : {});
  return (
    <section className="bg-background py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {eyebrow && <span className="eyebrow"><span {...e('props.eyebrow')}>{eyebrow}</span></span>}
        <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <h1 className="text-display text-balance text-foreground" {...e('props.heading')}>{heading ?? 'Heading'}</h1>
          <div className="reveal-stagger flex flex-col justify-end">
            {subheading && <p className="text-lead text-foreground/80" {...e('props.subheading')}>{subheading}</p>}
            {body && <p className="mt-4 text-foreground/60" {...e('props.body')}>{body}</p>}
            {primaryLabel && (
              <a href={primaryHref ?? '#'} {...(_editable ? { 'data-edit-link': 'props.primaryHref' } : {})} className="hover-lift btn-primary mt-8 inline-flex w-fit items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold">
                <span {...e('props.primaryLabel')}>{primaryLabel}</span><ArrowRight aria-hidden="true" className="size-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
