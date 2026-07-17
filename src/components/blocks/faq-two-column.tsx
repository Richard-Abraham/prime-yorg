interface FaqItem { question?: string; answer?: string; }
interface FaqTwoColumnProps { eyebrow?: string; heading?: string; subheading?: string; items?: FaqItem[]; _editable?: boolean; }

// Two-column FAQ: questions and answers laid out flat across two columns (no accordion).
export function FaqTwoColumn({ eyebrow, heading, subheading, items = [], _editable }: FaqTwoColumnProps) {
  const e = (f: string) => (_editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': f }) : {});
  return (
    <section className="bg-muted py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal-stagger mx-auto max-w-2xl text-center">
          {eyebrow && <span className="eyebrow" {...e('props.eyebrow')}>{eyebrow}</span>}
          <h2 className="text-h2 text-gradient mt-5 text-balance" {...e('props.heading')}>{heading ?? 'Heading'}</h2>
          {subheading && <p className="text-lead mt-4 text-foreground/70" {...e('props.subheading')}>{subheading}</p>}
        </div>
        <div className="reveal-stagger mt-14 grid gap-x-12 gap-y-8 md:grid-cols-2" {...(_editable ? { 'data-edit-list': 'props.items' } : {})}>
          {items.map((item, i) => (
            <div key={i} {...(_editable ? { 'data-edit-item': '' } : {})}>
              <h3 className="text-base font-semibold text-foreground" {...e(`props.items.${i}.question`)}>{item.question}</h3>
              {item.answer && <p className="mt-2 text-sm leading-relaxed text-foreground/70" {...e(`props.items.${i}.answer`)}>{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
