interface ChangelogEntry {
  version?: string;
  date?: string;
  title?: string;
  description?: string;
  tags?: string[];
}

interface ChangelogProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  items?: ChangelogEntry[];
  /** Builder edit mode: wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Changelog: dated release entries down a rail, each with a version badge, title and tags.
export function Changelog({ eyebrow, heading, subheading, items = [], _editable }: ChangelogProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="bg-background py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="reveal-stagger">
          {eyebrow && <span className="eyebrow" {...editable('props.eyebrow')}>{eyebrow}</span>}
          <h2 className="text-h2 text-gradient mt-5 text-balance" {...editable('props.heading')}>{heading ?? 'Heading'}</h2>
          {subheading && <p className="text-lead mt-4 text-foreground/70" {...editable('props.subheading')}>{subheading}</p>}
        </div>

        <div className="reveal-stagger mt-12 space-y-10" {...(_editable ? { 'data-edit-list': 'props.items' } : {})}>
          {items.map((item, i) => (
            <div key={i} {...(_editable ? { 'data-edit-item': '' } : {})} className="rounded-2xl border border-border bg-muted p-7 shadow-soft">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-gradient-to-r from-primary to-primary-light px-3 py-1 text-xs font-semibold text-primary-foreground" {...editable(`props.items.${i}.version`)}>{item.version}</span>
                {item.date && <span className="text-xs text-foreground/55" {...editable(`props.items.${i}.date`)}>{item.date}</span>}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground" {...editable(`props.items.${i}.title`)}>{item.title}</h3>
              {item.description && <p className="mt-2 text-sm leading-relaxed text-foreground/70" {...editable(`props.items.${i}.description`)}>{item.description}</p>}
              {item.tags && item.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2" {...(_editable ? { 'data-edit-list': `props.items.${i}.tags` } : {})}>
                  {item.tags.map((t, ti) => (
                    <span key={ti} {...(_editable ? { 'data-edit-item': '' } : {})} className="rounded-full border border-border bg-background px-2.5 py-0.5 text-xs text-foreground/60">{t}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
