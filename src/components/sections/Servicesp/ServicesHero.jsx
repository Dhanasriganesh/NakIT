const HERO_IMG = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80'

export default function ServicesHero() {
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
          Services
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white max-w-3xl mb-4 sm:mb-5">
          Full‑stack IT consulting across the modern enterprise.
        </h1>
        <p className="text-slate-300 max-w-2xl text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
          From cloud strategy to managed operations, we design, implement, and operate digital platforms
          that are secure, resilient, and built to scale with your business.
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-3 text-[10px] sm:text-xs text-slate-200">
          <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-slate-900/80 border border-slate-700">
            Cloud & infrastructure
          </span>
          <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-slate-900/80 border border-slate-700">
            Digital transformation
          </span>
          <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-slate-900/80 border border-slate-700">
            Managed services
          </span>
          <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-slate-900/80 border border-slate-700">
            Security & compliance
          </span>
        </div>
      </div>
    </section>
  )
}

