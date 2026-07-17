interface Stat {
  value?: string;
  label?: string;
  suffix?: string;
  prefix?: string;
}

interface StatsCardsProps {
  heading?: string;
  stats?: Stat[];
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Bold metric cards on a gradient-tinted surface. Bold, Lovable-style — gradient heading, oversized
// gradient numbers in glowing cards, staggered reveal. Emit-safe (no imports).
export function StatsCards({ heading, stats = [], _editable }: StatsCardsProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="bg-background py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {heading && <h2 className="reveal text-h2 text-gradient mb-14 text-balance text-center" {...editable('props.heading')}>{heading}</h2>}
        <div className="reveal-stagger grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4" {...(_editable ? { 'data-edit-list': 'props.stats' } : {})}>
          {stats.map((stat, i) => (
            <div key={i}
              {...(_editable ? { 'data-edit-item': '' } : {})}
              className="rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-transparent p-8 text-center shadow-glow"
            >
              <div className="text-gradient text-5xl font-bold tracking-tight">
                {stat.prefix ?? ''}{stat.value ?? ''}{stat.suffix ?? ''}
              </div>
              {stat.label && <div className="mt-2 text-sm font-medium text-foreground/70" {...editable(`props.stats.${i}.label`)}>{stat.label}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
