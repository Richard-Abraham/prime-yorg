import { TrendingUp, TrendingDown, Users, DollarSign, Activity, Globe, Zap, Star } from 'lucide-react';

const ICONS: Record<string, typeof Users> = { users: Users, dollar: DollarSign, activity: Activity, globe: Globe, zap: Zap, star: Star };

interface StatCard { icon?: string; value?: string; label?: string; trend?: string; up?: boolean; }
interface StatsCardsProps { eyebrow?: string; heading?: string; subheading?: string; items?: StatCard[]; _editable?: boolean; }

// Stats cards: metric cards with an icon and an up/down trend indicator for dashboards and proof.
export function StatsCardsTrend({ eyebrow, heading, subheading, items = [], _editable }: StatsCardsProps) {
  const e = (f: string) => (_editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': f }) : {});
  return (
    <section className="bg-muted py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {(eyebrow || heading) && (
          <div className="reveal-stagger mx-auto max-w-2xl text-center">
            {eyebrow && <span className="eyebrow" {...e('props.eyebrow')}>{eyebrow}</span>}
            {heading && <h2 className="text-h2 text-gradient mt-5 text-balance" {...e('props.heading')}>{heading}</h2>}
            {subheading && <p className="text-lead mt-4 text-foreground/70" {...e('props.subheading')}>{subheading}</p>}
          </div>
        )}
        <div className="reveal-stagger mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" {...(_editable ? { 'data-edit-list': 'props.items' } : {})}>
          {items.map((item, i) => {
            const Icon = ICONS[item.icon ?? 'activity'] ?? Activity;
            const Trend = item.up === false ? TrendingDown : TrendingUp;
            return (
              <div key={i} {...(_editable ? { 'data-edit-item': '' } : {})} className="hover-lift rounded-2xl border border-border bg-background p-6 shadow-soft">
                <div className="flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-xl border border-border bg-muted text-foreground"><Icon aria-hidden="true" className="size-5" /></span>
                  {item.trend && <span className={`inline-flex items-center gap-1 text-xs font-semibold ${item.up === false ? 'text-foreground/50' : 'text-primary'}`}><Trend aria-hidden="true" className="size-3.5" />{item.trend}</span>}
                </div>
                <p className="mt-5 font-display text-3xl font-semibold text-foreground" {...e(`props.items.${i}.value`)}>{item.value}</p>
                {item.label && <p className="mt-1 text-sm text-foreground/60" {...e(`props.items.${i}.label`)}>{item.label}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
