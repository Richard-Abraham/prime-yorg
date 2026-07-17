import { ArrowRight, Play, Star, Sparkles } from 'lucide-react';

interface HeroSplitProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  /** Builder edit mode: wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Split hero: gradient headline and dual CTA beside a framed image with a floating stat card.
export function HeroSplitStatCard({ eyebrow, heading, subheading, primaryLabel, primaryHref, secondaryLabel, secondaryHref, imageSrc, imageAlt = '', _editable }: HeroSplitProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="surface-glow bg-background py-16 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="reveal-stagger">
          {eyebrow && (
            <span className="eyebrow inline-flex items-center gap-1.5">
              <Sparkles aria-hidden="true" className="size-3.5" />
              <span {...editable('props.eyebrow')}>{eyebrow}</span>
            </span>
          )}
          <h1 className="text-display mt-5 text-balance text-foreground">
            <span className="text-gradient" {...editable('props.heading')}>{heading ?? 'Heading'}</span>
          </h1>
          {subheading && (
            <p className="text-lead mt-6 max-w-xl text-foreground/70" {...editable('props.subheading')}>{subheading}</p>
          )}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            {primaryLabel && (
              <a
                href={primaryHref ?? '#'}
                {...(_editable ? { 'data-edit-link': 'props.primaryHref' } : {})}
                className="hover-lift btn-primary inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold"
              >
                <span {...editable('props.primaryLabel')}>{primaryLabel}</span>
                <ArrowRight aria-hidden="true" className="size-4" />
              </a>
            )}
            {secondaryLabel && (
              <a
                href={secondaryHref ?? '#'}
                {...(_editable ? { 'data-edit-link': 'props.secondaryHref' } : {})}
                className="hover-lift inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold btn-secondary"
              >
                <Play aria-hidden="true" className="size-4" />
                <span {...editable('props.secondaryLabel')}>{secondaryLabel}</span>
              </a>
            )}
          </div>
          <div className="mt-9 flex items-center gap-4">
            <div className="flex -space-x-2.5">
              {[0, 1, 2, 3].map((n) => (
                <span key={n} className="size-8 rounded-full border-2 border-background bg-gradient-to-br from-primary to-primary-light" />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-0.5 text-primary">
                {[0, 1, 2, 3, 4].map((n) => (
                  <Star key={n} aria-hidden="true" className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-0.5 text-xs text-foreground/60">Loved by 12,000+ builders</p>
            </div>
          </div>
        </div>

        <div className="reveal relative">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt}
              {...(_editable ? { 'data-edit-img': 'props.imageSrc' } : {})}
              className="aspect-[4/3] w-full rounded-2xl border border-border object-cover shadow-glow"
            />
          ) : (
            <div
              {...(_editable ? { 'data-edit-img': 'props.imageSrc' } : {})}
              className="aspect-[4/3] w-full rounded-2xl border border-border bg-muted shadow-glow"
            />
          )}
          <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-2xl border border-border bg-background/90 p-4 shadow-soft backdrop-blur-md sm:flex">
            <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-light text-primary-foreground">
              <Sparkles aria-hidden="true" className="size-5" />
            </span>
            <div>
              <p className="text-lg font-semibold leading-none text-foreground">+38%</p>
              <p className="mt-1 text-xs text-foreground/60">Faster shipping</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
