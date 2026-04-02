import { GsapSetup } from '@/components/GsapSetup';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-bg px-6 py-24">
      <GsapSetup />
      <section className="w-full max-w-4xl rounded-3xl border border-border bg-card p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
        <p className="text-sm uppercase tracking-[0.35em] text-accent">Cinematic Brand Site</p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-6xl">Environment scaffold ready.</h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-text-2 sm:text-lg">
          Next.js 16 + TypeScript + Tailwind CSS 4 + GSAP を前提にした基盤だけを用意した状態。後続タスクでコンポーネントやページ内容を積み上げられます。
        </p>
      </section>
    </main>
  );
}
