import { ArrowRight } from 'lucide-react';

interface HeroInverseProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Split hero on an inverted (dark) surface — copy + two CTAs beside a framed image, using
// bg-foreground/text-background so the panel is genuinely dark regardless of the tenant's
// theme (the other 7 hero variants are all light). Adapted from the "marmoran_home" navy hero
// in the Stitch architectural-coatings mockup concept (plan 141) — literal navy swapped for the
// foreground/background token pair so it stays theme-correct instead of hardcoding a color.
// Tokens + plan-113 foundation classes only (emit-safe; no ui primitives, no motion lib).
export function HeroInverse({
  eyebrow, heading, subheading, primaryLabel, primaryHref, secondaryLabel, secondaryHref, imageSrc, imageAlt = '', _editable,
}: HeroInverseProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="bg-foreground py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="reveal-stagger">
          {eyebrow && <span className="eyebrow text-background/70" {...editable('props.eyebrow')}>{eyebrow}</span>}
          <h1 className="text-display text-balance text-background">
            <span {...editable('props.heading')}>{heading ?? 'Heading'}</span>
          </h1>
          {subheading && <p className="text-lead mt-6 max-w-xl text-background/70" {...editable('props.subheading')}>{subheading}</p>}
          {(primaryLabel || secondaryLabel) && (
            <div className="mt-9 flex flex-wrap gap-4">
              {primaryLabel && (
                <a
                  href={primaryHref ?? '#'}
                  {...(_editable ? { 'data-edit-link': 'props.primaryHref' } : {})}
                  className="hover-lift inline-flex items-center gap-2 rounded-xl bg-background px-7 py-3.5 text-sm font-semibold text-foreground shadow-glow"
                >
                  <span {...editable('props.primaryLabel')}>{primaryLabel}</span>
                  <ArrowRight aria-hidden="true" className="size-4" />
                </a>
              )}
              {secondaryLabel && (
                <a
                  href={secondaryHref ?? '#'}
                  {...(_editable ? { 'data-edit-link': 'props.secondaryHref' } : {})}
                  className="inline-flex items-center gap-2 rounded-xl border border-background/30 px-7 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-background/10"
                >
                  <span {...editable('props.secondaryLabel')}>{secondaryLabel}</span>
                </a>
              )}
            </div>
          )}
        </div>
        <div className="reveal">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt}
              {...(_editable ? { 'data-edit-img': 'props.imageSrc' } : {})}
              className="shadow-glow aspect-[4/3] w-full rounded-2xl border border-background/10 object-cover"
            />
          ) : (
            <div
              {...(_editable ? { 'data-edit-img': 'props.imageSrc' } : {})}
              className="shadow-glow aspect-[4/3] w-full rounded-2xl border border-background/10 bg-background/10"
            />
          )}
        </div>
      </div>
    </section>
  );
}
