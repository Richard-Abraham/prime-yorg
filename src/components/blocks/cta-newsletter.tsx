interface CtaNewsletterProps {
  heading?: string;
  subheading?: string;
  placeholder?: string;
  primaryLabel?: string;
  primaryHref?: string;
  note?: string;
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Newsletter-style CTA: heading + supporting line above an email input with a gradient submit
// button and a small reassurance note. The input is plain HTML (no primitive dependency); the
// button is a link — deployed sites wire it to their own form handler or keep it as a signup
// link. Tokens + plan-113 foundation classes only.
export function CtaNewsletter({
  heading, subheading, placeholder = 'you@example.com', primaryLabel, primaryHref, note, _editable,
}: CtaNewsletterProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="bg-background py-14 sm:py-20 lg:py-28">
      <div className="reveal mx-auto max-w-4xl px-6">
        <div className="surface-glow rounded-3xl border border-border bg-muted px-6 py-12 text-center shadow-soft sm:px-12 lg:py-16">
          {heading && (
            <h2 className="text-h2 text-balance">
              <span className="text-gradient" {...editable('props.heading')}>{heading}</span>
            </h2>
          )}
          {subheading && (
            <p className="text-lead mx-auto mt-4 max-w-xl text-foreground/70" {...editable('props.subheading')}>{subheading}</p>
          )}
          <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder={placeholder}
              aria-label="Email address"
              className="h-12 flex-1 rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            {primaryLabel && (
              <a
                href={primaryHref ?? '#'}
                {...(_editable ? { 'data-edit-link': 'props.primaryHref' } : {})}
                className="hover-lift btn-primary inline-flex h-12 items-center justify-center rounded-xl px-6 text-sm font-semibold"
              >
                <span {...editable('props.primaryLabel')}>{primaryLabel}</span>
              </a>
            )}
          </div>
          {note && (
            <p className="mt-4 text-xs text-foreground/50" {...editable('props.note')}>{note}</p>
          )}
        </div>
      </div>
    </section>
  );
}
