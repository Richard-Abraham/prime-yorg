import { Check, X } from 'lucide-react';

interface ComparisonTwoColProps {
  heading?: string;
  leftTitle?: string;
  rightTitle?: string;
  leftItems?: string[];
  rightItems?: string[];
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// "Us vs them" two-column comparison. The left (your) column is highlighted with a gradient border and
// checks; the right shows the alternative with x marks. Bold, Lovable-style. Plan-113 classes only.
export function ComparisonTwoCol({ heading, leftTitle, rightTitle, leftItems = [], rightItems = [], _editable }: ComparisonTwoColProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="bg-background py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6">
        {heading && <h2 className="reveal text-h2 text-gradient mb-12 text-balance text-center" {...editable('props.heading')}>{heading}</h2>}
        <div className="reveal grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border-2 border-primary bg-background p-8 shadow-glow">
            {leftTitle && <h3 className="mb-5 text-lg font-semibold text-foreground" {...editable('props.leftTitle')}>{leftTitle}</h3>}
            <ul className="flex flex-col gap-3 text-sm text-foreground/80" {...(_editable ? { 'data-edit-list': 'props.leftItems' } : {})}>
              {leftItems.map((item, i) => (
                <li key={i} {...(_editable ? { 'data-edit-item': '' } : {})} className="flex items-start gap-3">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-light text-white">
                    <Check aria-hidden="true" className="size-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-muted/40 p-8">
            {rightTitle && <h3 className="mb-5 text-lg font-semibold text-foreground/60" {...editable('props.rightTitle')}>{rightTitle}</h3>}
            <ul className="flex flex-col gap-3 text-sm text-foreground/60" {...(_editable ? { 'data-edit-list': 'props.rightItems' } : {})}>
              {rightItems.map((item, i) => (
                <li key={i} {...(_editable ? { 'data-edit-item': '' } : {})} className="flex items-start gap-3">
                  <X aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-foreground/30" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
