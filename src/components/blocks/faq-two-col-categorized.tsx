import { ChevronDown } from 'lucide-react';

interface FaqEntry {
  question?: string;
  answer?: string;
}

interface FaqCategory {
  categoryName?: string;
  entries?: FaqEntry[];
}

interface FaqTwoColCategorizedProps {
  heading?: string;
  subheading?: string;
  categories?: FaqCategory[];
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// FAQ grouped under category headers, laid out two categories per row. Unlike `faq-split` (a
// single flat accordion list beside a sticky intro, no grouping) and `faq-grid` (a flat two-
// column grid of individual questions with no category headers), this is for FAQ sets big
// enough to need topic grouping (e.g. "Pricing", "Shipping", "Support" each with their own
// mini-accordion). Native `<details>`, no JS. Tokens + plan-113 foundation classes only.
export function FaqTwoColCategorized({ heading, subheading, categories = [], _editable }: FaqTwoColCategorizedProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="bg-background py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal-stagger mx-auto mb-14 max-w-2xl text-center">
          {heading && (
            <h2 className="text-h2 text-balance">
              <span className="text-gradient" {...editable('props.heading')}>{heading}</span>
            </h2>
          )}
          {subheading && <p className="text-lead mt-4 text-foreground/70" {...editable('props.subheading')}>{subheading}</p>}
        </div>
        <div className="reveal-stagger grid gap-10 sm:grid-cols-2" {...(_editable ? { 'data-edit-list': 'props.categories' } : {})}>
          {categories.map((category, ci) => (
            <div key={ci} {...(_editable ? { 'data-edit-item': '' } : {})}>
              {category.categoryName && (
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary" {...editable(`props.categories.${ci}.categoryName`)}>
                  {category.categoryName}
                </h3>
              )}
              <div className="flex flex-col gap-3">
                {(category.entries ?? []).map((entry, ei) => (
                  <details key={ei} className="group rounded-2xl border border-border bg-muted px-5 py-3.5 shadow-soft">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-foreground">
                      <span {...editable(`props.categories.${ci}.entries.${ei}.question`)}>{entry.question}</span>
                      <ChevronDown aria-hidden="true" className="size-4 shrink-0 text-primary transition-transform group-open:rotate-180" />
                    </summary>
                    {entry.answer && (
                      <p className="mt-2.5 text-sm leading-relaxed text-foreground/70" {...editable(`props.categories.${ci}.entries.${ei}.answer`)}>
                        {entry.answer}
                      </p>
                    )}
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
