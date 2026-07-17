interface CaseStatCard {
  quote?: string;
  authorName?: string;
  authorRole?: string;
  statValue?: string;
  statLabel?: string;
  logoText?: string;
}

interface TestimonialCaseStatProps {
  heading?: string;
  cards?: CaseStatCard[];
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Case-study card row: each card pairs a short quote with a single big outcome stat and a
// wordmark, mimicking a "customer story" tile. Unlike `testimonial-stats` (one aggregate
// star-rating banner above a shared row of quotes) and `testimonial-spotlight` (one large quote,
// no stat), every card here carries its OWN outcome number — for proving ROI per customer, not
// social-proof volume. Tokens + plan-113 foundation classes only.
export function TestimonialCaseStat({ heading, cards = [], _editable }: TestimonialCaseStatProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="bg-background py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {heading && (
          <h2 className="reveal text-h2 text-gradient mb-12 text-balance text-center" {...editable('props.heading')}>
            {heading}
          </h2>
        )}
        <div
          className="reveal-stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          {...(_editable ? { 'data-edit-list': 'props.cards' } : {})}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              {...(_editable ? { 'data-edit-item': '' } : {})}
              className="hover-lift flex flex-col rounded-2xl border border-border bg-muted p-7 shadow-soft"
            >
              {card.logoText && (
                <span className="text-xs font-semibold uppercase tracking-wider text-foreground/50" {...editable(`props.cards.${i}.logoText`)}>
                  {card.logoText}
                </span>
              )}
              {card.quote && (
                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80" {...editable(`props.cards.${i}.quote`)}>
                  &ldquo;{card.quote}&rdquo;
                </p>
              )}
              <div className="mt-6 flex items-end justify-between gap-4 border-t border-border pt-5">
                <div>
                  {card.authorName && <p className="text-sm font-semibold text-foreground" {...editable(`props.cards.${i}.authorName`)}>{card.authorName}</p>}
                  {card.authorRole && <p className="text-xs text-foreground/50" {...editable(`props.cards.${i}.authorRole`)}>{card.authorRole}</p>}
                </div>
                {card.statValue && (
                  <div className="text-right">
                    <p className="text-gradient text-2xl font-bold" {...editable(`props.cards.${i}.statValue`)}>{card.statValue}</p>
                    {card.statLabel && <p className="text-[11px] text-foreground/50" {...editable(`props.cards.${i}.statLabel`)}>{card.statLabel}</p>}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
