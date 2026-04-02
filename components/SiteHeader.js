import Link from 'next/link';

const links = [
  { href: '/', label: 'Top' },
  { href: '/services/brand-film', label: 'Brand Film' },
  { href: '/services/music-video', label: 'Music Video' },
  { href: '/services/commercial', label: 'Commercial' },
  { href: '/services/documentary', label: 'Documentary' },
  { href: '/services/creative-direction', label: 'Creative Direction' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteHeader() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
          Cain Studio
        </Link>
        <nav className="hidden gap-5 text-xs uppercase tracking-[0.2em] text-white/70 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
