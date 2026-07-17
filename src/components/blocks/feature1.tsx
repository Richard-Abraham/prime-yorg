import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureButton {
  text?: string;
  href?: string;
}

interface Feature1Props {
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  buttonPrimary?: FeatureButton;
  buttonSecondary?: FeatureButton;
  className?: string;
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Split feature: copy beside a framed image. Bold, Lovable-style — gradient title, gradient-glow
// primary CTA, framed image with glow, scroll reveal. Tokens + plan-113 foundation classes only;
// self-contained anchors; all optional content guarded so partial AI props never throw (emit-safe).
export function Feature1({
  title = 'A headline that frames the value',
  description = 'A short supporting paragraph that explains the benefit in plain language.',
  imageSrc,
  imageAlt = '',
  buttonPrimary,
  buttonSecondary,
  className, _editable }: Feature1Props) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className={cn('py-16 sm:py-24 lg:py-32', className)}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="reveal flex flex-col items-center text-center lg:items-start lg:text-left">
            <h2 className="text-h2 mb-6 text-balance">
              <span className="text-gradient" {...editable('props.title')}>{title}</span>
            </h2>
            {description && <p className="text-lead mb-8 max-w-xl text-foreground/70" {...editable('props.description')}>{description}</p>}
            <div className="flex w-full flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              {buttonPrimary?.text && (
                <a
                  href={buttonPrimary.href ?? '#'}
                  className="hover-lift btn-primary inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold"
                >
                  {buttonPrimary.text}
                  <ArrowRight aria-hidden="true" className="size-4" />
                </a>
              )}
              {buttonSecondary?.text && (
                <a
                  href={buttonSecondary.href ?? '#'}
                  className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted"
                >
                  {buttonSecondary.text}
                </a>
              )}
            </div>
          </div>
          <div className="reveal">
            {imageSrc ? (
              <img loading="lazy" src={imageSrc} {...(_editable ? { 'data-edit-img': 'props.imageSrc' } : {})} alt={imageAlt} className="shadow-glow max-h-[28rem] w-full rounded-2xl border border-border object-cover" />
            ) : (
              <div className="shadow-glow aspect-[4/3] w-full rounded-2xl border border-border bg-muted" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
