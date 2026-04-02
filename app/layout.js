import './globals.css';

export const metadata = {
  title: 'Cinematic Brand Site',
  description: 'Immersive cinematic freelance brand site built with Next.js App Router, Tailwind CSS, and GSAP-ready sections.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
