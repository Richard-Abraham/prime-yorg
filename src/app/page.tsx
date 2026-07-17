import type { Metadata } from 'next';
import { SiteNav } from '@/components/site-nav';
import { SiteFooter } from '@/components/site-footer';
import { BlockRenderer } from '@/components/block-renderer';
import { SITE_PAGES, SITE_NAME } from '@/data/site';

export const metadata: Metadata = {
  title: "prime yorg",
  description: "showcase and sell yogurt products",
};

export default function HomePage() {
  const page = SITE_PAGES.find(p => p.slug === "home") ?? SITE_PAGES[0];
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="flex-1">
        {page ? (
          <BlockRenderer blocks={page.layout as Record<string, unknown>[]} />
        ) : (
          <section className="flex min-h-[50vh] items-center justify-center">
            <p className="text-foreground/50">No content yet.</p>
          </section>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
