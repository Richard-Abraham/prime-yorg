interface LogoItem {
  label?: string;
}

interface LogoCloudProps {
  heading?: string;
  items?: LogoItem[];
  /** Builder edit mode: wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Logo cloud: a restrained band of wordmark-style company names to signal trust.
export function LogoCloud({ heading, items = [], _editable }: LogoCloudProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="bg-background py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {heading && (
          <p className="reveal text-center text-sm font-medium uppercase tracking-widest text-foreground/50" {...editable('props.heading')}>{heading}</p>
        )}
        <div className="reveal-stagger mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-5" {...(_editable ? { 'data-edit-list': 'props.items' } : {})}>
          {items.map((item, i) => (
            <div key={i} {...(_editable ? { 'data-edit-item': '' } : {})} className="flex items-center justify-center">
              <span className="font-display text-xl font-semibold tracking-tight text-foreground/40 transition-colors hover:text-foreground" {...editable(`props.items.${i}.label`)}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
