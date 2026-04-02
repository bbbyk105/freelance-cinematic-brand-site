export default function SceneSection({ eyebrow, title, body }) {
  return (
    <section className="border-t border-white/10 px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
        <p className="text-xs uppercase tracking-[0.35em] text-gold">{eyebrow}</p>
        <div>
          <h2 className="text-3xl font-semibold sm:text-5xl">{title}</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/70">{body}</p>
        </div>
      </div>
    </section>
  );
}
