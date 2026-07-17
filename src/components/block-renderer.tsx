/**
 * Block renderer for the generated site. First-class sections render inline; catalog blocks
 * (shared.custom-block) render their real component via CUSTOM_MAP.
 */
import type { JSX } from 'react';
import { HeroMotion } from '@/components/blocks/hero-motion';
import { LogoCloud } from '@/components/blocks/logo-cloud';
import { FeatureIcons } from '@/components/blocks/feature-icons';
import { StatsCardsTrend } from '@/components/blocks/stats-cards-trend';
import { FeatureBento } from '@/components/blocks/feature-bento';
import { TestimonialMasonry } from '@/components/blocks/testimonial-masonry';
import { FaqTwoColumn } from '@/components/blocks/faq-two-column';
import { ContactSplitForm } from '@/components/blocks/contact-split-form';
import { HeroMinimal } from '@/components/blocks/hero-minimal';
import { FeatureList } from '@/components/blocks/feature-list';
import { ComparisonTwoCol } from '@/components/blocks/comparison-two-col';
import { BookingHoursCard } from '@/components/blocks/booking-hours-card';
import { FeatureMediaTabs } from '@/components/blocks/feature-media-tabs';
import { FaqTwoColCategorized } from '@/components/blocks/faq-two-col-categorized';
import { NewsletterSignup } from '@/components/blocks/newsletter-signup';
import { HeroDualHeading } from '@/components/blocks/hero-dual-heading';
import { Changelog } from '@/components/blocks/changelog';
import { FeatureBentoMedia } from '@/components/blocks/feature-bento-media';
import { StatsInline } from '@/components/blocks/stats-inline';
import { TestimonialSpotlight } from '@/components/blocks/testimonial-spotlight';
import { FaqGrid } from '@/components/blocks/faq-grid';
import { CtaBanner } from '@/components/blocks/cta-banner';
import { HeroFormInline } from '@/components/blocks/hero-form-inline';
import { ContentSpecTables } from '@/components/blocks/content-spec-tables';
import { StatsCards } from '@/components/blocks/stats-cards';
import { TeamPhotos } from '@/components/blocks/team-photos';
import { TestimonialCaseStat } from '@/components/blocks/testimonial-case-stat';
import { HeroInverse } from '@/components/blocks/hero-inverse';
import { CtaSplit } from '@/components/blocks/cta-split';
import { Feature1 } from '@/components/blocks/feature1';
import { CtaNewsletter } from '@/components/blocks/cta-newsletter';
import { HeroSplitStatCard } from '@/components/blocks/hero-split-stat-card';
import { FaqSplit } from '@/components/blocks/faq-split';
import { CtaNewsletterGradient } from '@/components/blocks/cta-newsletter-gradient';

type Block = Record<string, unknown>;

function HeroSection({ block }: { block: Block }) {
  const links = (block.links as { text?: string; url?: string; type?: string }[] | undefined) ?? [];
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        {Boolean(block.eyebrow) && (
          <p className="mb-4 text-sm font-medium text-primary">{block.eyebrow as string}</p>
        )}
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {(block.heading as string) || 'Welcome'}
        </h1>
        {Boolean(block.subheading) && (
          <p className="mt-4 text-lg text-foreground/70">{block.subheading as string}</p>
        )}
        {links.length > 0 && (
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {links.map((link, i) => (
              <a key={i} href={link.url ?? '#'} className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors">
                {link.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function CtaSection({ block }: { block: Block }) {
  return (
    <section className="bg-primary py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white">{(block.title as string) || ''}</h2>
        {Boolean(block.description) && (<p className="mt-4 text-white/80">{block.description as string}</p>)}
        {Boolean(block.buttonText) && (
          <a href={(block.buttonUrl as string) ?? '#'} className="mt-8 inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-white/90 transition-colors">
            {block.buttonText as string}
          </a>
        )}
      </div>
    </section>
  );
}

function FaqSection({ block }: { block: Block }) {
  const items = (block.items as { question?: string; answer?: string }[] | undefined) ?? [];
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-10 text-3xl font-bold text-foreground">
          {(block.heading as string) || (block.title as string) || 'FAQ'}
        </h2>
        <div className="divide-y divide-border">
          {items.map((q, i) => (
            <details key={i} className="group py-4">
              <summary className="cursor-pointer list-none text-base font-medium text-foreground">{q.question}</summary>
              <p className="mt-3 text-sm text-foreground/70">{q.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CardGridSection({ block }: { block: Block }) {
  const cards = (block.cards as { title?: string; description?: string }[] | undefined) ?? [];
  return (
    <section className="bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {Boolean(block.title) && (<h2 className="mb-3 text-3xl font-bold text-foreground">{block.title as string}</h2>)}
        {Boolean(block.description) && (<p className="mb-10 text-foreground/70">{block.description as string}</p>)}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <div key={i} className="rounded-xl border border-border bg-background p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
              {card.description && (<p className="mt-2 text-sm text-foreground/70">{card.description}</p>)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RichTextSection({ block }: { block: Block }) {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-3xl px-6 prose prose-neutral">
        {Boolean(block.body) && <div dangerouslySetInnerHTML={{ __html: block.body as string }} />}
      </div>
    </section>
  );
}

function StatsSection({ block }: { block: Block }) {
  const items = (block.stats as { value?: string; label?: string }[] | undefined) ?? [];
  return (
    <section className="bg-primary/5 py-16">
      <div className="mx-auto max-w-7xl px-6">
        {Boolean(block.title) && (<h2 className="mb-10 text-center text-3xl font-bold text-foreground">{block.title as string}</h2>)}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1 text-sm text-foreground/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineSection({ block }: { block: Block }) {
  const events = (block.events as { date?: string; title?: string; description?: string }[] | undefined) ?? [];
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        {Boolean(block.heading) && (
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">{block.heading as string}</h2>
        )}
        <ol className="relative flex flex-col gap-10 border-l-2 border-primary/20 pl-8">
          {events.map((e, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[2.45rem] top-1 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
              {e.date && <span className="text-xs font-semibold uppercase tracking-wider text-primary">{e.date}</span>}
              {e.title && <h3 className="mt-1 text-lg font-semibold text-foreground">{e.title}</h3>}
              {e.description && <p className="mt-2 text-sm leading-relaxed text-foreground/70">{e.description}</p>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function NewsletterSection({ block }: { block: Block }) {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-3xl border border-border bg-muted/40 px-6 py-12 text-center sm:px-12">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{(block.heading as string) || 'Stay in the loop'}</h2>
          {Boolean(block.text) && <p className="mx-auto mt-3 max-w-xl text-foreground/70">{block.text as string}</p>}
          <form className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row" action="#" method="post">
            <input
              type="email"
              required
              placeholder="you@example.com"
              aria-label="Email address"
              className="h-12 flex-1 rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-foreground/40"
            />
            <button type="submit" className="h-12 rounded-xl bg-primary px-6 text-sm font-semibold text-white hover:bg-primary/90">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function CommunityLinksSection({ block }: { block: Block }) {
  const links = (block.links as { label?: string; href?: string; url?: string }[] | undefined) ?? [];
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        {Boolean(block.heading) && <h2 className="mb-8 text-3xl font-bold text-foreground">{block.heading as string}</h2>}
        <div className="flex flex-wrap justify-center gap-3">
          {links.map((l, i) => (
            <a
              key={i}
              href={l.href ?? l.url ?? '#'}
              className="rounded-xl border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary/40 hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoSection({ block }: { block: Block }) {
  const url = (block.videoUrl as string) || '';
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{6,})/);
  const embed = yt ? `https://www.youtube-nocookie.com/embed/${yt[1]}` : url;
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6">
        {Boolean(block.heading) && (
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">{block.heading as string}</h2>
        )}
        <div className="aspect-video w-full overflow-hidden rounded-2xl border border-border bg-black">
          {embed ? (
            <iframe
              src={embed}
              title={(block.heading as string) || 'Video'}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-white/50">Video coming soon</div>
          )}
        </div>
      </div>
    </section>
  );
}

function GenericSection({ block }: { block: Block }) {
  const component = block.__component as string;
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-4xl px-6">
        {Boolean(block.title) && <h2 className="mb-4 text-3xl font-bold text-foreground">{block.title as string}</h2>}
        {Boolean(block.heading) && <h2 className="mb-4 text-3xl font-bold text-foreground">{block.heading as string}</h2>}
        {Boolean(block.description) && <p className="text-foreground/70">{block.description as string}</p>}
        {Boolean(block.body) && <p className="text-foreground/70">{block.body as string}</p>}
        <p className="mt-4 text-xs text-foreground/30">{component}</p>
      </div>
    </section>
  );
}

const BLOCK_MAP: Record<string, (props: { block: Block }) => JSX.Element> = {
  'shared.hero':            HeroSection,
  'shared.cta':             CtaSection,
  'shared.faq':             FaqSection,
  'shared.card-grid':       CardGridSection,
  'shared.rich-text':       RichTextSection,
  'shared.stats':           StatsSection,
  'shared.timeline':        TimelineSection,
  'shared.newsletter':      NewsletterSection,
  'shared.community-links': CommunityLinksSection,
  'shared.video':           VideoSection,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CUSTOM_MAP: Record<string, (props: any) => JSX.Element> = {
  "hero-motion": HeroMotion,
  "logo-cloud": LogoCloud,
  "feature-icons": FeatureIcons,
  "stats-cards-trend": StatsCardsTrend,
  "feature-bento": FeatureBento,
  "testimonial-masonry": TestimonialMasonry,
  "faq-two-column": FaqTwoColumn,
  "contact-split-form": ContactSplitForm,
  "hero-minimal": HeroMinimal,
  "feature-list": FeatureList,
  "comparison-two-col": ComparisonTwoCol,
  "booking-hours-card": BookingHoursCard,
  "feature-media-tabs": FeatureMediaTabs,
  "faq-two-col-categorized": FaqTwoColCategorized,
  "newsletter-signup": NewsletterSignup,
  "hero-dual-heading": HeroDualHeading,
  "changelog": Changelog,
  "feature-bento-media": FeatureBentoMedia,
  "stats-inline": StatsInline,
  "testimonial-spotlight": TestimonialSpotlight,
  "faq-grid": FaqGrid,
  "cta-banner": CtaBanner,
  "hero-form-inline": HeroFormInline,
  "content-spec-tables": ContentSpecTables,
  "stats-cards": StatsCards,
  "team-photos": TeamPhotos,
  "testimonial-case-stat": TestimonialCaseStat,
  "hero-inverse": HeroInverse,
  "cta-split": CtaSplit,
  "feature1": Feature1,
  "cta-newsletter": CtaNewsletter,
  "hero-split-stat-card": HeroSplitStatCard,
  "faq-split": FaqSplit,
  "cta-newsletter-gradient": CtaNewsletterGradient,
};

// Style-override fields a custom block may carry (Plan 149) — mirrors CUSTOM_STYLE_FIELDS in
// src/lib/block-styles.ts. Kept inline: the emitted standalone project can't import from this app.
const CUSTOM_STYLE_FIELDS = [
  'backgroundColor', 'headingColor', 'textColor', 'buttonColor', 'buttonTextColor',
  'borderColor', 'borderRadius', 'sectionBackground', 'backgroundImage', 'backgroundOverlay',
  'backgroundGradientFrom', 'backgroundGradientTo', 'backgroundGradientAngle',
  'paddingY', 'containerWidth',
  'paddingTopPx', 'paddingBottomPx', 'marginTopPx', 'marginBottomPx',
] as const;

function pickStyleOverrides(block: Block): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const key of CUSTOM_STYLE_FIELDS) {
    const val = block[key];
    if (val != null) out[key] = val;
  }
  return out;
}

const HEX_RE = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
const PADDING_Y_MAP: Record<string, string> = { none: '0', compact: '3rem', spacious: '8rem', hero: '10rem' };
const CONTAINER_WIDTH_MAP: Record<string, string> = { narrow: '56rem', wide: '96rem', full: 'none' };

function clampNum(n: number, min: number, max: number): number {
  if (Number.isNaN(n)) return min;
  return Math.min(max, Math.max(min, n));
}

function isValidHex(value: unknown): value is string {
  return typeof value === 'string' && HEX_RE.test(value.trim());
}

// Mirrors buildCustomBlockStyle (src/lib/block-styles.ts): wrapper inline style + scoped CSS vars.
function buildCustomBlockStyle(style: Record<string, unknown>): Record<string, string> {
  const css: Record<string, string> = {};
  if (style.sectionBackground === 'muted') {
    css.background = 'var(--muted)';
  } else if (style.sectionBackground === 'gradient') {
    css.background = 'var(--grad-bg)';
  } else if (style.sectionBackground === 'dark') {
    css.background = 'var(--inv-bg)';
    css['--background'] = 'var(--inv-bg)';
    css['--foreground'] = 'var(--inv-fg)';
    css['--muted'] = 'var(--inv-bg)';
  } else if (style.sectionBackground === 'default') {
    css.background = 'var(--background)';
  }
  if (style.backgroundColor) {
    css.backgroundColor = style.backgroundColor as string;
    css['--background'] = style.backgroundColor as string;
    css['--muted'] = style.backgroundColor as string;
  }
  if (style.borderRadius) css.borderRadius = style.borderRadius as string;
  if (style.borderColor) {
    css.borderColor = style.borderColor as string;
    css.borderWidth = '1px';
    css.borderStyle = 'solid';
    css['--border'] = style.borderColor as string;
  }
  if (style.textColor) {
    css['--foreground'] = style.textColor as string;
    css.color = style.textColor as string;
  }
  // buttonColor is applied via scoped CSS (buildCustomBlockCss) targeting the button's own
  // classes, NOT --primary/--primary-light/--primary-dark: those variables are also read directly
  // by gradient-clipped headings (.text-gradient), so overriding them here would bleed the
  // button-background color onto the heading (Plan 162 bug).
  if (style.buttonTextColor) css['--primary-foreground'] = style.buttonTextColor as string;
  if (style.backgroundImage) {
    const overlayPct = style.backgroundOverlay != null ? clampNum(Number(style.backgroundOverlay), 0, 80) : 40;
    const alpha = overlayPct / 100;
    css.backgroundImage = `linear-gradient(rgba(0,0,0,${alpha}),rgba(0,0,0,${alpha})), url(${style.backgroundImage})`;
    css.backgroundSize = 'cover';
    css.backgroundPosition = 'center';
  } else if (isValidHex(style.backgroundGradientFrom) && isValidHex(style.backgroundGradientTo)) {
    const angle = style.backgroundGradientAngle != null ? clampNum(Number(style.backgroundGradientAngle), 0, 360) : 135;
    css.backgroundImage = `linear-gradient(${angle}deg, ${style.backgroundGradientFrom}, ${style.backgroundGradientTo})`;
  }
  if (typeof style.marginTopPx === 'number' && Number.isFinite(style.marginTopPx)) {
    css.marginTop = `${clampNum(style.marginTopPx, -120, 240)}px`;
  }
  if (typeof style.marginBottomPx === 'number' && Number.isFinite(style.marginBottomPx)) {
    css.marginBottom = `${clampNum(style.marginBottomPx, -120, 240)}px`;
  }
  return css;
}

// Mirrors buildCustomBlockCss (src/lib/block-styles.ts): heading color/gradient, button
// background/text color, + paddingY/containerWidth (enum-gated through the fixed lookup tables
// above, never raw user strings) + the transparent-background rule so the block's own bg-*
// classes don't paint over a custom background.
function buildCustomBlockCss(scope: string, style: Record<string, unknown>): string {
  let css = '';
  if (style.headingColor) {
    const headingColor = style.headingColor as string;
    const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map((h) => `${scope} ${h}`).join(',');
    css +=
      `${scope} .text-gradient{background:none!important;-webkit-text-fill-color:${headingColor}!important;color:${headingColor}!important;}` +
      `${headings}{color:${headingColor}!important;}`;
  } else if (style.gradientHeading) {
    // Precedence: a solid headingColor override always wins over gradientHeading — gated on the
    // raw style.headingColor field only. textColor never feeds headings (Plan 162).
    const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map((h) => `${scope} ${h}`).join(',');
    css += `${headings}{background:linear-gradient(135deg,var(--primary),var(--primary-light))!important;-webkit-background-clip:text!important;background-clip:text!important;color:transparent!important;}`;
  }
  // Button background/text (Plan 162): target the two confirmed catalog button-background
  // patterns directly instead of the shared --primary family, so a Button-bg override can never
  // bleed onto a heading that reads --primary/--primary-light directly.
  if (style.buttonColor) {
    css += `${scope} .bg-gradient-to-r{background-image:linear-gradient(to right,${style.buttonColor},${style.buttonColor})!important;}`;
    css += `${scope} .bg-primary{background-color:${style.buttonColor}!important;}`;
  }
  if (style.buttonTextColor) {
    css += `${scope} .text-white{color:${style.buttonTextColor}!important;}`;
  }
  const presetLen = style.paddingY ? PADDING_Y_MAP[style.paddingY as string] : undefined;
  const topLen =
    typeof style.paddingTopPx === 'number' && Number.isFinite(style.paddingTopPx)
      ? `${clampNum(style.paddingTopPx, 0, 240)}px`
      : presetLen;
  const bottomLen =
    typeof style.paddingBottomPx === 'number' && Number.isFinite(style.paddingBottomPx)
      ? `${clampNum(style.paddingBottomPx, 0, 240)}px`
      : presetLen;
  if (topLen || bottomLen) {
    css +=
      `${scope} > section, ${scope} > div > section{` +
      (topLen ? `padding-top:${topLen}!important;` : '') +
      (bottomLen ? `padding-bottom:${bottomLen}!important;` : '') +
      `}`;
  }
  const widthLen = style.containerWidth ? CONTAINER_WIDTH_MAP[style.containerWidth as string] : undefined;
  if (widthLen) {
    css += `${scope} [class*="max-w-"]{max-width:${widthLen}!important;}`;
  }
  const hasCustomBackground = Boolean(style.backgroundImage) || (isValidHex(style.backgroundGradientFrom) && isValidHex(style.backgroundGradientTo));
  const hasSurface = Boolean(style.sectionBackground);
  const hasPlainColor = Boolean(style.backgroundColor);
  if (hasCustomBackground || hasSurface || hasPlainColor) {
    css += `${scope} > section{background-color:transparent!important;}${scope} > div > section{background-color:transparent!important;}`;
  }
  return css;
}

// Tablet/mobile per-breakpoint style overrides (Plan 183). Mirrors buildBreakpointCss
// (src/lib/block-styles.ts): reuses buildCustomBlockCss per breakpoint bag, wrapped in
// @media (max-width:<bp>px){...}, using the same device widths the editor's viewport switcher
// simulates. buildBreakpointInlineCss mirrors everything buildCustomBlockStyle applies inline for
// desktop (background/border/text colors, background image/gradient, free margins) as scoped CSS
// instead, since inline styles can't be media-queried. Unlike the desktop inline-style path (immune
// to injection by construction — it's a React style object, never a raw CSS string), these values
// are interpolated into a raw string inside a <style> tag, so they get their own guards: hex-only
// colors (isValidHex, reused from above), a length allowlist for borderRadius, and a breakout-char
// reject for the backgroundImage URL.
const BREAKPOINT_MAX_WIDTH: Record<'tablet' | 'mobile', number> = { tablet: 768, mobile: 375 };
const SAFE_CSS_LENGTH_RE = /^-?d+(.d+)?(px|rem|em|%)$/;

function isSafeCssLength(value: unknown): value is string {
  return typeof value === 'string' && SAFE_CSS_LENGTH_RE.test(value.trim());
}

function hasCssBreakoutChars(value: string): boolean {
  return /[{}<>;]/.test(value);
}

function buildBreakpointInlineCss(scope: string, style: Record<string, unknown>): string {
  const decl: string[] = [];
  if (style.sectionBackground === 'muted') {
    decl.push('background:var(--muted)!important');
  } else if (style.sectionBackground === 'gradient') {
    decl.push('background:var(--grad-bg)!important');
  } else if (style.sectionBackground === 'dark') {
    decl.push('background:var(--inv-bg)!important');
    decl.push('--background:var(--inv-bg)!important');
    decl.push('--foreground:var(--inv-fg)!important');
    decl.push('--muted:var(--inv-bg)!important');
  } else if (style.sectionBackground === 'default') {
    decl.push('background:var(--background)!important');
  }
  if (isValidHex(style.backgroundColor)) {
    decl.push(`background-color:${style.backgroundColor}!important`);
    decl.push(`--background:${style.backgroundColor}!important`);
    decl.push(`--muted:${style.backgroundColor}!important`);
  }
  if (isSafeCssLength(style.borderRadius)) decl.push(`border-radius:${style.borderRadius}!important`);
  if (isValidHex(style.borderColor)) {
    decl.push(`border-color:${style.borderColor}!important`);
    decl.push('border-width:1px!important');
    decl.push('border-style:solid!important');
    decl.push(`--border:${style.borderColor}!important`);
  }
  if (isValidHex(style.textColor)) {
    decl.push(`--foreground:${style.textColor}!important`);
    decl.push(`color:${style.textColor}!important`);
  }
  if (isValidHex(style.buttonTextColor)) decl.push(`--primary-foreground:${style.buttonTextColor}!important`);
  if (typeof style.backgroundImage === 'string' && style.backgroundImage && !hasCssBreakoutChars(style.backgroundImage)) {
    const overlayPct = style.backgroundOverlay != null ? clampNum(Number(style.backgroundOverlay), 0, 80) : 40;
    const alpha = overlayPct / 100;
    decl.push(`background-image:linear-gradient(rgba(0,0,0,${alpha}),rgba(0,0,0,${alpha})), url(${style.backgroundImage})!important`);
    decl.push('background-size:cover!important');
    decl.push('background-position:center!important');
  } else if (isValidHex(style.backgroundGradientFrom) && isValidHex(style.backgroundGradientTo)) {
    const angle = style.backgroundGradientAngle != null ? clampNum(Number(style.backgroundGradientAngle), 0, 360) : 135;
    decl.push(`background-image:linear-gradient(${angle}deg, ${style.backgroundGradientFrom}, ${style.backgroundGradientTo})!important`);
  }
  if (typeof style.marginTopPx === 'number' && Number.isFinite(style.marginTopPx)) {
    decl.push(`margin-top:${clampNum(style.marginTopPx, -120, 240)}px!important`);
  }
  if (typeof style.marginBottomPx === 'number' && Number.isFinite(style.marginBottomPx)) {
    decl.push(`margin-bottom:${clampNum(style.marginBottomPx, -120, 240)}px!important`);
  }
  return decl.length > 0 ? `${scope}{${decl.join(';')};}` : '';
}

function buildBreakpointCss(scope: string, block: Block): string {
  const byBreakpoint = block.styleOverridesByBreakpoint as Record<string, Record<string, unknown>> | undefined;
  if (!byBreakpoint) return '';
  let css = '';
  for (const bp of ['tablet', 'mobile'] as const) {
    const style = byBreakpoint[bp];
    if (!style) continue;
    const rules = buildCustomBlockCss(scope, style) + buildBreakpointInlineCss(scope, style);
    if (!rules) continue;
    css += `@media (max-width:${BREAKPOINT_MAX_WIDTH[bp]}px){${rules}}`;
  }
  return css;
}

function CustomBlock({ block, index }: { block: Block; index: number }) {
  const Comp = CUSTOM_MAP[block.blockType as string];
  if (!Comp) return <GenericSection block={block} />;
  const props = (block.props as Record<string, unknown>) ?? {};
  const overrides = pickStyleOverrides(block);
  const scopeClass = `cb-${index}`;
  const breakpointCss = buildBreakpointCss(`.${scopeClass}`, block);
  if (Object.keys(overrides).length === 0 && !breakpointCss) return <Comp {...props} />;
  const style = buildCustomBlockStyle(overrides);
  const scopedCss = buildCustomBlockCss(`.${scopeClass}`, overrides) + breakpointCss;
  return (
    <div className={scopeClass} style={style}>
      {scopedCss && <style>{scopedCss}</style>}
      <Comp {...props} />
    </div>
  );
}

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  if (!blocks || blocks.length === 0) return null;
  return (
    <>
      {blocks.map((block, i) => {
        const component = block.__component as string;
        if (component === 'shared.custom-block') return <CustomBlock key={i} block={block} index={i} />;
        const Component = BLOCK_MAP[component] ?? GenericSection;
        return <Component key={i} block={block} />;
      })}
    </>
  );
}
