interface SpecTableRow {
  cells?: string[];
}

interface SpecTableItem {
  title?: string;
  headers?: string[];
  rows?: SpecTableRow[];
}

interface ContentSpecTablesProps {
  eyebrow?: string;
  heading?: string;
  items?: SpecTableItem[];
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// A row of small technical data-table cards (drying times, coverage rates, compliance figures —
// any tabular spec). Adapted from the "heritage/woodcare" Stitch mockup's "Performance Metrics"
// section (stitch-mockup, designer-mockup license) — distinct from `stats-cards`/`stats-band`
// (single headline numbers, not tabular rows). Tokens + plan-113 foundation classes only
// (emit-safe).
export function ContentSpecTables({ eyebrow, heading, items = [], _editable }: ContentSpecTablesProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="bg-background py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mb-12">
          {eyebrow && <span className="eyebrow" {...editable('props.eyebrow')}>{eyebrow}</span>}
          {heading && (
            <h2 className="text-h2 text-balance">
              <span className="text-gradient" {...editable('props.heading')}>{heading}</span>
            </h2>
          )}
        </div>
        <div className="reveal-stagger grid gap-6 lg:grid-cols-3" {...(_editable ? { 'data-edit-list': 'props.items' } : {})}>
          {items.map((item, i) => (
            <div key={i} {...(_editable ? { 'data-edit-item': '' } : {})} className="overflow-hidden rounded-2xl border border-border bg-background shadow-soft">
              {item.title && (
                <div className="bg-gradient-to-r from-primary to-primary-light px-5 py-3 text-sm font-semibold text-white" {...editable(`props.items.${i}.title`)}>
                  {item.title}
                </div>
              )}
              <table className="w-full text-sm">
                {(item.headers ?? []).length > 0 && (
                  <thead>
                    <tr className="border-b border-border text-left text-foreground/50">
                      {(item.headers ?? []).map((h, hi) => (
                        <th key={hi} className="p-3 font-medium">{h}</th>
                      ))}
                    </tr>
                  </thead>
                )}
                <tbody>
                  {(item.rows ?? []).map((row, ri) => (
                    <tr key={ri} className="border-b border-border/60 last:border-0">
                      {(row.cells ?? []).map((cell, ci) => (
                        <td key={ci} className="p-3 text-foreground/80">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
