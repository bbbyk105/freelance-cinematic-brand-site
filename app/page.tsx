import { GsapSetup } from '@/components/GsapSetup';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-bg px-6">
      <GsapSetup />

      {/* Hero Section */}
      <section className="flex w-full max-w-4xl flex-1 flex-col justify-center py-24">
        <div className="rounded-3xl border border-border bg-card p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
          <p className="text-sm uppercase tracking-[0.35em] text-accent">Cinematic Brand Site</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-6xl">Environment scaffold ready.</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-text-2 sm:text-lg">
            Next.js 16 + TypeScript + Tailwind CSS 4 + GSAP を前提にした基盤だけを用意した状態。後続タスクでコンポーネントやページ内容を積み上げられます。
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-block rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg sm:text-base"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="w-full max-w-4xl py-24"
      >
        <div className="rounded-3xl border border-border bg-card p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
          <p className="text-sm uppercase tracking-[0.35em] text-accent">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">お問い合わせ</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-text-2">
            プロジェクトのご相談やお見積もりはこちらからお気軽にどうぞ。
          </p>
        </div>
      </section>
    </main>
  );
}
