export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 opacity-40">
        <img
          src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1600&q=80"
          alt="City skyline at night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-950/65 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-blue-400/80 mb-3">
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

