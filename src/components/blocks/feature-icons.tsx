import { Bot, Zap, Shield, Leaf, Truck, ShieldCheck, Wrench, Heart, HandHelping, Handshake, Phone, Ruler, Hammer, CheckCircle2, ClipboardList, Sparkles, MessageCircle, Gift, TrendingUp, Rocket, Star, type LucideIcon } from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  bot: Bot, zap: Zap, shield: Shield, leaf: Leaf, truck: Truck, 'shield-check': ShieldCheck,
  wrench: Wrench, heart: Heart, 'hand-helping': HandHelping, handshake: Handshake, phone: Phone,
  ruler: Ruler, hammer: Hammer, 'check-circle': CheckCircle2, clipboard: ClipboardList,
  sparkles: Sparkles, message: MessageCircle, gift: Gift, 'trending-up': TrendingUp, rocket: Rocket, star: Star,
};

interface FeatureIconItem {
  /** A key from the fixed lucide icon vocabulary (see ICON_MAP). Unrecognized keys fall back to Sparkles. */
  icon?: string;
  title?: string;
  description?: string;
}

interface FeatureIconsProps {
  heading?: string;
  subheading?: string;
  items?: FeatureIconItem[];
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Feature grid where each item leads with a named icon key from a fixed, professional lucide-react
// vocabulary (see ICON_MAP) — still simple for the AI to fill from a known list, but no free-form
// emoji. Bold, Lovable-style — gradient heading, gradient icon chips with a glow, elevated cards,
// staggered reveal. Tokens + plan-113 foundation classes only (emit-safe).
export function FeatureIcons({ heading, subheading, items = [], _editable }: FeatureIconsProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="bg-background py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {heading && <h2 className="reveal text-h2 text-gradient text-balance text-center" {...editable('props.heading')}>{heading}</h2>}
        {subheading && <p className="reveal text-lead mx-auto mt-4 max-w-2xl text-center text-foreground/60" {...editable('props.subheading')}>{subheading}</p>}
        <div className="reveal-stagger mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" {...(_editable ? { 'data-edit-list': 'props.items' } : {})}>
          {items.map((item, i) => {
            const Icon = item.icon ? (ICON_MAP[item.icon] ?? Sparkles) : null;
            return (
              <div key={i} {...(_editable ? { 'data-edit-item': '' } : {})} className="hover-lift rounded-2xl border border-border bg-background p-7 shadow-soft">
                {Icon && (
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-light text-white shadow-glow">
                    <Icon className="h-6 w-6" />
                  </span>
                )}
                <h3 className="mt-5 text-lg font-semibold text-foreground" {...editable(`props.items.${i}.title`)}>{item.title}</h3>
                {item.description && <p className="mt-2 text-sm leading-relaxed text-foreground/70" {...editable(`props.items.${i}.description`)}>{item.description}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
