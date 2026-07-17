interface Stat {
  value?: string;
  label?: string;
  suffix?: string;
  prefix?: string;
}

interface StatsInlineProps {
  heading?: string;
  stats?: Stat[];
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Inline stat row with dividers — compact social proof. Bold, Lovable-style — gradient heading and
// gradient numbers, scroll reveal. Emit-safe (no imports; `value ?? ''` guards missing values).
export function StatsInline({ heading, stats = [], _editable }: StatsInlineProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        {heading && <h2 className="reveal text-h2 text-gradient mb-10 text-balance text-center" {...editable('props.heading')}>{heading}</h2>}
        <div className="reveal flex flex-col items-center justify-center gap-8 rounded-2xl border border-border bg-muted/40 px-8 py-8 sm:flex-row sm:divide-x sm:divide-border" {...(_editable ? { 'data-edit-list': 'props.stats' } : {})}>
          {stats.map((stat, i) => (
            <div key={i} {...(_editable ? { 'data-edit-item': '' } : {})} className="flex-1 px-4 text-center">
              <div className="text-gradient text-4xl font-bold tracking-tight">
                {stat.prefix ?? ''}{stat.value ?? ''}{stat.suffix ?? ''}
              </div>
              {stat.label && <div className="mt-1 text-sm font-medium text-foreground/60" {...editable(`props.stats.${i}.label`)}>{stat.label}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
