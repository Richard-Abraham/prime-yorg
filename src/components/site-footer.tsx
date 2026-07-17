import Link from 'next/link';
import { SITE_NAME, SITE_IDENTITY, SITE_CREDITS } from '@/data/site';

export function SiteFooter() {
  const { footerLinks, footerText, logoUrl } = SITE_IDENTITY;
  return (
    <footer data-footer-variant="bordered-columns" className="border-t-2 border-foreground/20 bg-background px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:justify-between">
        {logoUrl && <img src={logoUrl} alt={SITE_NAME} className="h-6 w-auto" />}
        <div className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3">
          {footerLinks.map((link, i) => (
            <Link key={i} href={link.url} className="text-sm text-foreground/60 hover:text-foreground transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-xs text-foreground/40 sm:text-right">
          © {new Date().getFullYear()} {SITE_NAME}. {footerText}
        </p>
      </div>
      {SITE_CREDITS.length > 0 && (
        <p className="mt-4 text-center text-[11px] text-foreground/40">
          Photos via{' '}
          {SITE_CREDITS.map((c, i) => (
            <span key={i}>
              {i > 0 && ', '}
              <a href={c.url} target="_blank" rel="noopener noreferrer" className="underline">{c.name}</a>
            </span>
          ))}
          {' '}on{' '}
          <a href="https://unsplash.com/?utm_source=sattva-ai-builder&utm_medium=referral" target="_blank" rel="noopener noreferrer" className="underline">Unsplash</a>
        </p>
      )}
    </footer>
  );
}
