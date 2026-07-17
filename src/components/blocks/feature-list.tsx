import { Sparkles, Zap, ShieldCheck, Rocket, BarChart3, Globe, Lock, Layers, Workflow, Clock } from 'lucide-react';

const ICONS: Record<string, typeof Sparkles> = {
  sparkles: Sparkles, zap: Zap, shield: ShieldCheck, rocket: Rocket, chart: BarChart3,
  globe: Globe, lock: Lock, layers: Layers, workflow: Workflow, clock: Clock,
};

interface FeatureListItem {
  icon?: string;
  title?: string;
  description?: string;
}

interface FeatureListProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  items?: FeatureListItem[];
  /** Builder edit mode: wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Feature list: a heading beside a two-column list of icon + title + description rows (no cards).
export function FeatureList({ eyebrow, heading, subheading, items = [], _editable }: FeatureListProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="bg-background py-16 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div className="reveal-stagger lg:sticky lg:top-24 lg:self-start">
          {eyebrow && <span className="eyebrow" {...editable('props.eyebrow')}>{eyebrow}</span>}
          <h2 className="text-h2 text-gradient mt-5 text-balance" {...editable('props.heading')}>{heading ?? 'Heading'}</h2>
          {subheading && <p className="text-lead mt-4 text-foreground/70" {...editable('props.subheading')}>{subheading}</p>}
        </div>
        <div className="reveal-stagger grid gap-x-10 gap-y-8 sm:grid-cols-2" {...(_editable ? { 'data-edit-list': 'props.items' } : {})}>
          {items.map((item, i) => {
            const Icon = ICONS[item.icon ?? 'sparkles'] ?? Sparkles;
            return (
              <div key={i} {...(_editable ? { 'data-edit-item': '' } : {})} className="flex gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-muted text-foreground">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-foreground" {...editable(`props.items.${i}.title`)}>{item.title}</h3>
                  {item.description && <p className="mt-1.5 text-sm leading-relaxed text-foreground/70" {...editable(`props.items.${i}.description`)}>{item.description}</p>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
