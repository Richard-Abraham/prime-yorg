interface FaqGridItem {
  question?: string;
  answer?: string;
}

interface FaqGridProps {
  heading?: string;
  items?: FaqGridItem[];
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Two-column FAQ grid (all answers visible — good for short Q&As). Bold, Lovable-style — gradient
// heading, carded Q&As, staggered reveal. Tokens + plan-113 foundation classes only (emit-safe).
export function FaqGrid({ heading, items = [], _editable }: FaqGridProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="bg-background py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {heading && <h2 className="reveal text-h2 text-gradient mb-12 text-balance text-center" {...editable('props.heading')}>{heading}</h2>}
        <div className="reveal-stagger grid gap-6 sm:grid-cols-2" {...(_editable ? { 'data-edit-list': 'props.items' } : {})}>
          {items.map((item, i) => (
            <div key={i} {...(_editable ? { 'data-edit-item': '' } : {})} className="rounded-2xl border border-border bg-background p-6 shadow-soft">
              <h3 className="text-base font-semibold text-foreground" {...editable(`props.items.${i}.question`)}>{item.question}</h3>
              {item.answer && <p className="mt-2 text-sm leading-relaxed text-foreground/70" {...editable(`props.items.${i}.answer`)}>{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
