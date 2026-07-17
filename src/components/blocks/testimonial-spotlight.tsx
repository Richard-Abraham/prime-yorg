interface TestimonialSpotlightProps {
  quote?: string;
  authorName?: string;
  authorRole?: string;
  imageSrc?: string;
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Single large testimonial. Bold, Lovable-style — surface glow, oversized gradient quote mark,
// glowing avatar, scroll reveal. Tokens + plan-113 foundation classes only (emit-safe).
export function TestimonialSpotlight({ quote, authorName, authorRole, imageSrc, _editable }: TestimonialSpotlightProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="surface-glow bg-background py-16 sm:py-24 lg:py-32">
      <div className="reveal mx-auto max-w-3xl px-6 text-center">
        <span className="text-gradient block text-6xl font-bold leading-none">“</span>
        {quote && (
          <blockquote className="text-h2 mt-2 text-balance font-medium leading-snug text-foreground" {...editable('props.quote')}>{quote}</blockquote>
        )}
        <div className="mt-8 flex flex-col items-center gap-3">
          {imageSrc && (
            <img loading="lazy" src={imageSrc} {...(_editable ? { 'data-edit-img': 'props.imageSrc' } : {})} alt={authorName ?? ''} className="h-16 w-16 rounded-full border-2 border-border object-cover shadow-glow" />
          )}
          <div>
            <p className="font-semibold text-foreground" {...editable('props.authorName')}>{authorName}</p>
            {authorRole && <p className="text-sm text-foreground/50" {...editable('props.authorRole')}>{authorRole}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
