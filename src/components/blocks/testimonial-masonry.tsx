interface Testimonial {
  quote?: string;
  authorName?: string;
  authorRole?: string;
}

interface TestimonialMasonryProps {
  heading?: string;
  testimonials?: Testimonial[];
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Testimonials in a masonry (CSS columns) layout for a lively wall-of-love. Bold, Lovable-style —
// gradient heading, elevated cards, scroll reveal. Tokens + plan-113 foundation classes only.
export function TestimonialMasonry({ heading, testimonials = [], _editable }: TestimonialMasonryProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="bg-background py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {heading && <h2 className="reveal text-h2 text-gradient mb-12 text-balance text-center" {...editable('props.heading')}>{heading}</h2>}
        <div className="reveal columns-1 gap-6 sm:columns-2 lg:columns-3" {...(_editable ? { 'data-edit-list': 'props.testimonials' } : {})}>
          {testimonials.map((t, i) => (
            <figure key={i} {...(_editable ? { 'data-edit-item': '' } : {})} className="mb-6 break-inside-avoid rounded-2xl border border-border bg-background p-6 shadow-soft">
              {t.quote && <blockquote className="leading-relaxed text-foreground/80">“{t.quote}”</blockquote>}
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold text-foreground" {...editable(`props.testimonials.${i}.authorName`)}>{t.authorName}</span>
                {t.authorRole && <span className="block text-foreground/50" {...editable(`props.testimonials.${i}.authorRole`)}>{t.authorRole}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
