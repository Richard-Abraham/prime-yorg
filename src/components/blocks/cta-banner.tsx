interface CtaBannerProps {
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Full-width banner CTA. Bold, Lovable-style — a rounded gradient band with a glow and a crisp white
// button, scroll reveal. Tokens + plan-113 foundation classes only (emit-safe).
export function CtaBanner({ heading, description, buttonText, buttonUrl, _editable }: CtaBannerProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="px-6 py-12 sm:py-16">
      <div className="reveal mx-auto flex max-w-6xl flex-col items-center gap-6 overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary-light px-8 py-12 text-center shadow-glow sm:flex-row sm:justify-between sm:text-left">
        <div>
          <h2 className="text-h2 text-balance text-white" {...editable('props.heading')}>{heading ?? 'Ready to get started?'}</h2>
          {description && <p className="mt-2 text-white/85" {...editable('props.description')}>{description}</p>}
        </div>
        {buttonText && (
          <a
            href={buttonUrl ?? '#'}
            className="hover-lift shrink-0 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-soft"
           {...editable('props.buttonText')}>
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
}
