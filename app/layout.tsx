import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Cinematic Brand Site',
  description: 'Foundational Next.js + GSAP + Tailwind CSS setup for a cinematic brand site.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} bg-bg font-sans text-text-1 antialiased`}>
        {children}
      </body>
    </html>
  );
}
