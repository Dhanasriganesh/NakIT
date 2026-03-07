const HERO_IMG = 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1600&q=80'

export default function ContactHero() {
  return (
    <section className="relative min-h-[42vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
        style={{ backgroundImage: `url(${HERO_IMG})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/45" aria-hidden />

      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 py-10 md:py-14">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-nak-bright/90 mb-3">
          Contact
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-3xl mb-5">
          Let&apos;s plan your next transformation.
        </h1>
        <p className="text-slate-300 max-w-2xl text-sm md:text-base lg:text-lg leading-relaxed">
          Share a bit about your priorities and timelines, and we&apos;ll assemble the right experts for a
          focused, no‑pressure conversation.
        </p>
      </div>
    </section>
  )
}

