import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/Footer';

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
      <body className={`${inter.variable} flex min-h-screen flex-col bg-bg font-sans text-text-1 antialiased`}>
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
