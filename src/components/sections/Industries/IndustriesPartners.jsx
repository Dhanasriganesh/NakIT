const partners = [
  'Global cloud hyperscalers (AWS, Azure, GCP)',
  'Leading observability and security vendors',
  'Core banking and payments platforms',
  'Data, AI, and integration technology providers',
]

export default function IndustriesPartners() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50">
      <div className="container-app py-14 sm:py-16 md:py-20">
        <div className="grid lg:grid-cols-[1.2fr,1.1fr] gap-8 sm:gap-10 items-center max-w-5xl mx-auto">
          <div className="order-2 lg:order-1">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-nak-deep/90 mb-2 sm:mb-3">
              Ecosystem
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
              A partner ecosystem aligned to your stack.
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed">
              Our alliances team curates relationships with technology providers across cloud, data, security,
              and industry platforms so we always bring fit‑for‑purpose tooling to each engagement.
            </p>
          </div>

          <div className="rounded-xl sm:rounded-2xl border border-slate-200/80 bg-white/60 backdrop-blur-md p-4 sm:p-5 shadow-[0_4px_24px_-8px_rgba(15,23,42,0.08)] transition-all duration-300 hover:shadow-[0_12px_32px_-8px_rgba(15,23,42,0.1)] hover:border-slate-300/80 order-1 lg:order-2">
            <p className="text-[11px] sm:text-xs text-slate-600 mb-2.5 sm:mb-3 leading-relaxed">
              We remain vendor‑agnostic, focusing on your requirements first. Yet, our deep experience with
              leading platforms accelerates design, implementation, and operations.
            </p>
            <ul className="space-y-2 sm:space-y-2.5 text-[11px] sm:text-xs text-slate-700">
              {partners.map((partner) => (
                <li key={partner} className="flex items-start gap-2 sm:gap-2.5 group/item">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-nak-bright group-hover/item:scale-125 transition-transform" />
                  <span className="min-w-0">{partner}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
