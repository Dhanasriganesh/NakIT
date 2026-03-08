export default function AboutStory() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white">
      <div className="container-app py-14 sm:py-16 md:py-20 lg:py-20 grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-14 items-center">
        <div className="space-y-4 sm:space-y-5 order-2 lg:order-1">
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-nak-bright/90">
            Our Story
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
            From boutique consultancy to global transformation partner.
          </h2>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed">
            NAK IT Group was founded to bridge the gap between boardroom strategy and hands‑on engineering.
            We help CIOs, CTOs, and business leaders modernize legacy estates, design cloud‑native platforms,
            and build resilient, secure digital foundations.
          </p>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Our teams blend consulting rigor with product‑thinking and delivery excellence. Every engagement
            is anchored in measurable outcomes—whether that&apos;s reduced time‑to‑market, improved resilience,
            or new revenue‑generating digital products.
          </p>
        </div>

        <div className="relative order-1 lg:order-2">
          <div className="group aspect-video rounded-xl sm:rounded-2xl overflow-hidden border border-white/80 bg-white/40 shadow-[0_8px_32px_-8px_rgba(15,23,42,0.12)] backdrop-blur-sm transition-all duration-500 hover:shadow-[0_24px_48px_-12px_rgba(15,23,42,0.18)] hover:border-slate-200/80">
            <img
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1400&q=80"
              alt="Engineering collaboration"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="absolute -bottom-4 sm:-bottom-5 -right-1 sm:-right-2 left-4 sm:left-auto w-[min(calc(100%-2rem),220px)] rounded-xl sm:rounded-2xl border border-white/60 bg-white/70 backdrop-blur-md px-3 sm:px-4 py-3 sm:py-3.5 shadow-[0_8px_24px_-4px_rgba(15,23,42,0.1)] flex items-center gap-2 sm:gap-3 transition-all duration-300 hover:shadow-[0_12px_32px_-4px_rgba(15,23,42,0.15)] hover:border-white/80 hover:-translate-y-0.5">
            <div className="h-8 w-8 sm:h-9 sm:w-9 shrink-0 rounded-full bg-gradient-to-br from-nak-bright to-cyan-400 flex items-center justify-center text-white text-xs sm:text-sm font-semibold shadow-lg shadow-nak-bright/30">
              10+
            </div>
            <div className="min-w-0">
              <p className="text-[10px] sm:text-xs text-slate-500">Years in complex enterprise IT</p>
              <p className="text-xs sm:text-sm font-semibold text-slate-800">Trusted by global brands</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
