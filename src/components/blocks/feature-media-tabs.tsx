'use client';

import { useState } from 'react';

interface Item { label?: string; title?: string; body?: string; imageSrc?: string; }
interface FeatureMediaTabsProps {
  eyebrow?: string;
  heading?: string;
  items?: Item[];
  _editable?: boolean;
}

// Interactive tabbed features: pill tabs switch the copy and a paired media preview.
export function FeatureMediaTabs({ eyebrow, heading, items = [], _editable }: FeatureMediaTabsProps) {
  const [active, setActive] = useState(0);
  const e = (f: string) => (_editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': f }) : {});
  const cur = items[active] ?? {};
  return (
    <section className="bg-muted py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          {eyebrow && <span className="eyebrow"><span {...e('props.eyebrow')}>{eyebrow}</span></span>}
          <h2 className="text-h2 mt-4 text-balance text-foreground" {...e('props.heading')}>{heading ?? 'Heading'}</h2>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-2" {...(_editable ? { 'data-edit-list': 'props.items' } : {})}>
          {items.map((it, i) => (
            <button key={i} type="button" onClick={() => setActive(i)} {...(_editable ? { 'data-edit-item': '' } : {})} className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${active === i ? 'bg-gradient-to-r from-primary to-primary-light text-primary-foreground shadow-glow' : 'border border-border bg-background text-foreground/70 hover:text-foreground'}`}>{it.label}</button>
          ))}
        </div>
        <div className="reveal mt-10 grid items-center gap-10 rounded-3xl border border-border bg-background p-8 lg:grid-cols-2 lg:p-12">
          <div>
            <h3 className="text-xl font-semibold text-foreground">{cur.title}</h3>
            <p className="mt-3 text-foreground/70">{cur.body}</p>
          </div>
          {cur.imageSrc ? (
            <img src={cur.imageSrc} alt="" className="aspect-video w-full rounded-2xl border border-border object-cover shadow-soft" />
          ) : (
            <div className="aspect-video w-full rounded-2xl border border-border bg-muted" />
          )}
        </div>
      </div>
    </section>
  );
}
