const HERO_IMG = 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1600&q=80'

export default function ContactHero() {
  return (
    <section className="relative min-h-[38vh] sm:min-h-[40vh] md:min-h-[42vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
        style={{ backgroundImage: `url(${HERO_IMG})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/45" aria-hidden />

      <div className="relative z-10 container-app py-8 sm:py-10 md:py-12 lg:py-14">
        <p className="text-[10px] sm:text-xs font-semibold tracking-[0.28em] sm:tracking-[0.3em] uppercase text-nak-bright/90 mb-2 sm:mb-3">
          Contact
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white max-w-3xl mb-4 sm:mb-5">
          Let&apos;s plan your next transformation.
        </h1>
        <p className="text-slate-300 max-w-2xl text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
          Share a bit about your priorities and timelines, and we&apos;ll assemble the right experts for a
          focused, no‑pressure conversation.
        </p>
      </div>
    </section>
  )
}

