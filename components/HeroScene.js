'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function HeroScene() {
  const rootRef = useRef(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-fade',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: 'power2.out' }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative flex min-h-screen items-end overflow-hidden px-6 pb-16 pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(191,166,122,0.25),_transparent_35%),linear-gradient(180deg,_rgba(255,255,255,0.04),_rgba(0,0,0,0.92))]" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-6">
        <p className="hero-fade text-sm uppercase tracking-[0.35em] text-gold">Cinematic Freelance Brand</p>
        <h1 className="hero-fade max-w-4xl text-5xl font-semibold leading-tight sm:text-7xl">
          映像でブランドの空気まで設計する。
        </h1>
        <p className="hero-fade max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
          フルスクリーンのシーン設計、没入感のあるタイポグラフィ、静かな緊張感を持つレイアウトを前提にしたブランドサイトの初期環境構築。
        </p>
      </div>
    </section>
  );
}
