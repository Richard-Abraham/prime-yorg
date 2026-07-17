import { SITE_NAME } from '@/data/site';

export default function StyleGuidePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 sm:px-8">
      <header className="mb-16">
        <p className="eyebrow">Style Guide</p>
        <h1 className="text-display">{SITE_NAME}</h1>
        <p className="mt-2 text-foreground/60">Internal reference sheet for prime yorg's design system — colors, type, buttons, shadows, radius, and gradient tokens.</p>
      </header>

      <section className="mb-16">
        <h2 className="text-h2 mb-6">Color palette</h2>
        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="flex flex-col gap-2">
            <div className="h-16 rounded-lg border border-border" style={{ background: "#DC2626" }} />
            <p className="text-xs text-foreground/60">Primary — #DC2626</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-16 rounded-lg border border-border" style={{ background: "#B91C1C" }} />
            <p className="text-xs text-foreground/60">Primary Dark — #B91C1C</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-16 rounded-lg border border-border" style={{ background: "#EF4444" }} />
            <p className="text-xs text-foreground/60">Secondary — #EF4444</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-16 rounded-lg border border-border" style={{ background: "#FEE2E2" }} />
            <p className="text-xs text-foreground/60">Accent — #FEE2E2</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-16 rounded-lg border border-border" style={{ background: "#FFFFFF" }} />
            <p className="text-xs text-foreground/60">Background — #FFFFFF</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-16 rounded-lg border border-border" style={{ background: "#171717" }} />
            <p className="text-xs text-foreground/60">Foreground — #171717</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-16 rounded-lg border border-border" style={{ background: "#E5E7EB" }} />
            <p className="text-xs text-foreground/60">Border — #E5E7EB</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-16 rounded-lg border border-border" style={{ background: "#F9FAFB" }} />
            <p className="text-xs text-foreground/60">Muted — #F9FAFB</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <p className="mb-2 text-sm font-medium capitalize text-foreground/70">primary</p>
            <div className="flex gap-2">
              <div className="flex-1 min-w-[2.75rem]">
                <div className="h-14 rounded-lg border border-border bg-primary-50" />
                <p className="mt-1 text-center text-[10px] text-foreground/50">50</p>
              </div>
              <div className="flex-1 min-w-[2.75rem]">
                <div className="h-14 rounded-lg border border-border bg-primary-100" />
                <p className="mt-1 text-center text-[10px] text-foreground/50">100</p>
              </div>
              <div className="flex-1 min-w-[2.75rem]">
                <div className="h-14 rounded-lg border border-border bg-primary-200" />
                <p className="mt-1 text-center text-[10px] text-foreground/50">200</p>
              </div>
              <div className="flex-1 min-w-[2.75rem]">
                <div className="h-14 rounded-lg border border-border bg-primary-300" />
                <p className="mt-1 text-center text-[10px] text-foreground/50">300</p>
              </div>
              <div className="flex-1 min-w-[2.75rem]">
                <div className="h-14 rounded-lg border border-border bg-primary-400" />
                <p className="mt-1 text-center text-[10px] text-foreground/50">400</p>
              </div>
              <div className="flex-1 min-w-[2.75rem]">
                <div className="h-14 rounded-lg border border-border bg-primary-500" />
                <p className="mt-1 text-center text-[10px] text-foreground/50">500</p>
              </div>
              <div className="flex-1 min-w-[2.75rem]">
                <div className="h-14 rounded-lg border border-border bg-primary-600" />
                <p className="mt-1 text-center text-[10px] text-foreground/50">600</p>
              </div>
              <div className="flex-1 min-w-[2.75rem]">
                <div className="h-14 rounded-lg border border-border bg-primary-700" />
                <p className="mt-1 text-center text-[10px] text-foreground/50">700</p>
              </div>
              <div className="flex-1 min-w-[2.75rem]">
                <div className="h-14 rounded-lg border border-border bg-primary-800" />
                <p className="mt-1 text-center text-[10px] text-foreground/50">800</p>
              </div>
              <div className="flex-1 min-w-[2.75rem]">
                <div className="h-14 rounded-lg border border-border bg-primary-900" />
                <p className="mt-1 text-center text-[10px] text-foreground/50">900</p>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium capitalize text-foreground/70">secondary</p>
            <div className="flex gap-2">
              <div className="flex-1 min-w-[2.75rem]">
                <div className="h-14 rounded-lg border border-border bg-secondary-50" />
                <p className="mt-1 text-center text-[10px] text-foreground/50">50</p>
              </div>
              <div className="flex-1 min-w-[2.75rem]">
                <div className="h-14 rounded-lg border border-border bg-secondary-100" />
                <p className="mt-1 text-center text-[10px] text-foreground/50">100</p>
              </div>
              <div className="flex-1 min-w-[2.75rem]">
                <div className="h-14 rounded-lg border border-border bg-secondary-200" />
                <p className="mt-1 text-center text-[10px] text-foreground/50">200</p>
              </div>
              <div className="flex-1 min-w-[2.75rem]">
                <div className="h-14 rounded-lg border border-border bg-secondary-300" />
                <p className="mt-1 text-center text-[10px] text-foreground/50">300</p>
              </div>
              <div className="flex-1 min-w-[2.75rem]">
                <div className="h-14 rounded-lg border border-border bg-secondary-400" />
                <p className="mt-1 text-center text-[10px] text-foreground/50">400</p>
              </div>
              <div className="flex-1 min-w-[2.75rem]">
                <div className="h-14 rounded-lg border border-border bg-secondary-500" />
                <p className="mt-1 text-center text-[10px] text-foreground/50">500</p>
              </div>
              <div className="flex-1 min-w-[2.75rem]">
                <div className="h-14 rounded-lg border border-border bg-secondary-600" />
                <p className="mt-1 text-center text-[10px] text-foreground/50">600</p>
              </div>
              <div className="flex-1 min-w-[2.75rem]">
                <div className="h-14 rounded-lg border border-border bg-secondary-700" />
                <p className="mt-1 text-center text-[10px] text-foreground/50">700</p>
              </div>
              <div className="flex-1 min-w-[2.75rem]">
                <div className="h-14 rounded-lg border border-border bg-secondary-800" />
                <p className="mt-1 text-center text-[10px] text-foreground/50">800</p>
              </div>
              <div className="flex-1 min-w-[2.75rem]">
                <div className="h-14 rounded-lg border border-border bg-secondary-900" />
                <p className="mt-1 text-center text-[10px] text-foreground/50">900</p>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium capitalize text-foreground/70">neutral</p>
            <div className="flex gap-2">
              <div className="flex-1 min-w-[2.75rem]">
                <div className="h-14 rounded-lg border border-border bg-neutral-50" />
                <p className="mt-1 text-center text-[10px] text-foreground/50">50</p>
              </div>
              <div className="flex-1 min-w-[2.75rem]">
                <div className="h-14 rounded-lg border border-border bg-neutral-100" />
                <p className="mt-1 text-center text-[10px] text-foreground/50">100</p>
              </div>
              <div className="flex-1 min-w-[2.75rem]">
                <div className="h-14 rounded-lg border border-border bg-neutral-200" />
                <p className="mt-1 text-center text-[10px] text-foreground/50">200</p>
              </div>
              <div className="flex-1 min-w-[2.75rem]">
                <div className="h-14 rounded-lg border border-border bg-neutral-300" />
                <p className="mt-1 text-center text-[10px] text-foreground/50">300</p>
              </div>
              <div className="flex-1 min-w-[2.75rem]">
                <div className="h-14 rounded-lg border border-border bg-neutral-400" />
                <p className="mt-1 text-center text-[10px] text-foreground/50">400</p>
              </div>
              <div className="flex-1 min-w-[2.75rem]">
                <div className="h-14 rounded-lg border border-border bg-neutral-500" />
                <p className="mt-1 text-center text-[10px] text-foreground/50">500</p>
              </div>
              <div className="flex-1 min-w-[2.75rem]">
                <div className="h-14 rounded-lg border border-border bg-neutral-600" />
                <p className="mt-1 text-center text-[10px] text-foreground/50">600</p>
              </div>
              <div className="flex-1 min-w-[2.75rem]">
                <div className="h-14 rounded-lg border border-border bg-neutral-700" />
                <p className="mt-1 text-center text-[10px] text-foreground/50">700</p>
              </div>
              <div className="flex-1 min-w-[2.75rem]">
                <div className="h-14 rounded-lg border border-border bg-neutral-800" />
                <p className="mt-1 text-center text-[10px] text-foreground/50">800</p>
              </div>
              <div className="flex-1 min-w-[2.75rem]">
                <div className="h-14 rounded-lg border border-border bg-neutral-900" />
                <p className="mt-1 text-center text-[10px] text-foreground/50">900</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-h2 mb-6">Typography</h2>
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-display">Display heading</p>
            <p className="mt-1 text-xs text-foreground/50">.text-display — heading font: Poppins</p>
          </div>
          <div>
            <h1 className="text-h1">Heading level 1</h1>
            <p className="mt-1 text-xs text-foreground/50">.text-h1 — heading font: Poppins</p>
          </div>
          <div>
            <h2 className="text-h2">Heading level 2</h2>
            <p className="mt-1 text-xs text-foreground/50">.text-h2 — heading font: Poppins</p>
          </div>
          <div>
            <p className="text-lead">Lead paragraph — a slightly larger intro line used beneath a heading to set up the section that follows.</p>
            <p className="mt-1 text-xs text-foreground/50">.text-lead</p>
          </div>
          <div>
            <p>Body copy — the default paragraph style used throughout the site for regular reading text, at this style guide's configured base size.</p>
            <p className="mt-1 text-xs text-foreground/50">Body size: medium (font: Poppins)</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-h2 mb-6">Buttons</h2>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex flex-col items-start gap-2">
            <button className="hover-lift btn-primary inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold">
              Primary button
            </button>
            <p className="text-xs text-foreground/50">.btn-primary — button style: solid</p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-transparent px-7 py-3.5 text-sm font-semibold text-foreground/70">
              Secondary button
            </button>
            <p className="text-xs text-foreground/50">Plain neutral/outline comparison</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-h2 mb-6">Shadows</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <div className="h-24 rounded-2xl border border-border bg-background shadow-soft" />
            <p className="text-xs text-foreground/50">.shadow-soft — shadow style: subtle</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-24 rounded-2xl border border-border bg-background shadow-strong" />
            <p className="text-xs text-foreground/50">.shadow-strong</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-24 rounded-2xl border border-border bg-background shadow-glow" />
            <p className="text-xs text-foreground/50">.shadow-glow</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-h2 mb-6">Border radius</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <div className="h-24 rounded-xl border border-border bg-muted" />
            <p className="text-xs text-foreground/50">rounded-xl — border radius: medium</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-24 rounded-2xl border border-border bg-muted" />
            <p className="text-xs text-foreground/50">rounded-2xl</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-24 rounded-3xl border border-border bg-muted" />
            <p className="text-xs text-foreground/50">rounded-3xl</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-h2 mb-6">Gradient</h2>
        <div className="h-32 rounded-2xl border border-border" style={{ background: 'var(--grad-bg)' }} />
        <p className="mt-2 text-xs text-foreground/50">var(--grad-bg) — gradient style: mesh</p>
      </section>
    </main>
  );
}
