const HERO_IMG = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80'

export default function AboutHero() {
  return (
    <section className="relative min-h-[42vh] overflow-hidden">
      {/* Sticky background: image stays fixed while content scrolls */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
        style={{ backgroundImage: `url(${HERO_IMG})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/45" aria-hidden />
      <div className="relative z-10 container-app py-10 md:py-14">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-nak-bright/90 mb-4">
          About NAK IT Group
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-3xl mb-6">
          A consulting partner built for modern, cloud‑native enterprises.
        </h1>
        <p className="text-slate-300 max-w-2xl text-base md:text-lg leading-relaxed mb-8">
          We combine deep industry expertise, modern engineering, and a relentlessly client‑first mindset
          to help organizations turn complex technology problems into competitive advantage.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-3 rounded-full bg-nak-deep hover:bg-nak-bright text-sm font-semibold text-white shadow-lg shadow-nak-deep/40 transition-colors">
            View leadership
          </button>
          <button className="px-6 py-3 rounded-full border border-slate-600/80 text-sm font-semibold text-slate-100 hover:border-nak-bright hover:text-white transition-colors">
            Our story
          </button>
        </div>
      </div>
    </section>
  )
}

