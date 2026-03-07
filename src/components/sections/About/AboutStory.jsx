export default function AboutStory() {
  return (
    <section className="bg-white">
      <div className="container-app py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-nak-bright/90">
            Our Story
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            From boutique consultancy to global transformation partner.
          </h2>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed">
            NAK IT Group was founded to bridge the gap between boardroom strategy and hands‑on engineering.
            We help CIOs, CTOs, and business leaders modernize legacy estates, design cloud‑native platforms,
            and build resilient, secure digital foundations.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Our teams blend consulting rigor with product‑thinking and delivery excellence. Every engagement
            is anchored in measurable outcomes—whether that&apos;s reduced time‑to‑market, improved resilience,
            or new revenue‑generating digital products.
          </p>
        </div>

        <div className="relative">
          <div className="aspect-video rounded-3xl overflow-hidden border border-slate-800 shadow-2xl shadow-nak-deep/40">
            <img
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1400&q=80"
              alt="Engineering collaboration"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 bg-slate-900/90 border border-slate-700 rounded-2xl px-5 py-4 flex items-center gap-3 shadow-xl shadow-slate-900/80">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-nak-bright to-cyan-400 flex items-center justify-center text-white text-sm font-semibold">
              10+
            </div>
            <div>
              <p className="text-xs text-slate-400">Years in complex enterprise IT</p>
              <p className="text-sm font-semibold text-slate-50">Trusted by global brands</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

