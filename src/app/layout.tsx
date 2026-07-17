import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
const bodyFont = Poppins({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-body', display: 'swap' });
import './globals.css';

export const metadata: Metadata = {
  title: 'prime yorg',
  description: 'showcase and sell yogurt products',
};

export const viewport: Viewport = {
  themeColor: '#DC2626',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bodyFont.variable} antialiased`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <div id="main" className="flex min-h-full flex-1 flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
