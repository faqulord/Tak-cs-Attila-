import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

// Betűtípusok betöltése a Google Fonts-ról
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

// Keresőoptimalizálás (SEO) és böngészőfül beállítások
export const metadata: Metadata = {
  title: 'At&Harmonies | Takács Attila Műhelye',
  description: 'Kézműves, spirituális ékszerek és alkotások egyenesen a műhelyből. Ahol a nyers anyag találkozik a lélekkel.',
  keywords: ['ékszer', 'kézműves', 'spiritualitás', 'műhely', 'Takács Attila', 'At&Harmonies', 'rezgésterápia'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-stone-950 text-stone-200 antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}