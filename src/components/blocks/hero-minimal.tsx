import { ArrowRight } from 'lucide-react';

interface HeroMinimalProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryHref?: string;
  align?: 'left' | 'center' | 'right';
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Minimal typographic hero: an oversized left-aligned headline, short supporting line and a
// single understated text link — no imagery, no gradients. For editorial/studio brands.
// Tokens + plan-113 foundation classes only.
export function HeroMinimal({ eyebrow, heading, subheading, primaryLabel, primaryHref, align = 'left', _editable }: HeroMinimalProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  const alignClass = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';
  return (
    <section className="bg-background py-24 sm:py-32 lg:py-40">
      <div className={`reveal-stagger mx-auto max-w-5xl px-6 ${alignClass}`}>
        {eyebrow && (
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary" {...editable('props.eyebrow')}>
            {eyebrow}
          </p>
        )}
        <h1 className="text-display max-w-4xl text-balance" {...editable('props.heading')}>
          {heading ?? 'Heading'}
        </h1>
        {subheading && (
          <p className="text-lead mt-8 max-w-xl text-foreground/60" {...editable('props.subheading')}>
            {subheading}
          </p>
        )}
        {primaryLabel && (
          <div className="mt-10">
            <a
              href={primaryHref ?? '#'}
              {...(_editable ? { 'data-edit-link': 'props.primaryHref' } : {})}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground underline-offset-8 hover:underline"
            >
              <span {...editable('props.primaryLabel')}>{primaryLabel}</span>
              <ArrowRight aria-hidden="true" className="size-4 text-primary transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
