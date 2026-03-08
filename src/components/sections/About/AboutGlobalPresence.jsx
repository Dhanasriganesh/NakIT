const regions = [
  {
    name: 'North America',
    hubs: 'Houston · New York · Toronto',
    focus: 'Cloud migration, data platforms, and cybersecurity for regulated industries.',
  },
  {
    name: 'Europe',
    hubs: 'London · Frankfurt',
    focus: 'Digital transformation, nearshore engineering, and compliance‑driven modernization.',
  },
  {
    name: 'Asia Pacific',
    hubs: 'Bengaluru · Singapore',
    focus: 'Cloud‑native product engineering and 24x7 managed services delivery.',
  },
]

export default function AboutGlobalPresence() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50">
      <div className="container-app py-14 sm:py-16 md:py-20">
        <div className="grid lg:grid-cols-[1.2fr,1.1fr] gap-8 sm:gap-10 lg:gap-12 items-center max-w-5xl mx-auto">
          <div className="order-2 lg:order-1">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-nak-deep/90 mb-2 sm:mb-3">
              Global Delivery
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
              A global network with a single, unified delivery model.
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6">
              Our teams span onshore, nearshore, and offshore locations, giving you the right blend of time‑zone
              coverage, expertise, and cost efficiency—without adding coordination overhead.
            </p>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <div className="rounded-xl sm:rounded-2xl border border-slate-200/80 bg-white/70 backdrop-blur-md px-2 sm:px-3 py-2.5 sm:py-3.5 text-center shadow-[0_2px_12px_-4px_rgba(15,23,42,0.06)] transition-all duration-300 hover:shadow-[0_8px_24px_-4px_rgba(15,23,42,0.1)] hover:border-slate-300/80 hover:-translate-y-0.5">
                <p className="text-lg sm:text-xl md:text-2xl font-extrabold text-nak-deep mb-0.5">3</p>
                <p className="text-[10px] sm:text-xs text-slate-600">Continents</p>
              </div>
              <div className="rounded-xl sm:rounded-2xl border border-slate-200/80 bg-white/70 backdrop-blur-md px-2 sm:px-3 py-2.5 sm:py-3.5 text-center shadow-[0_2px_12px_-4px_rgba(15,23,42,0.06)] transition-all duration-300 hover:shadow-[0_8px_24px_-4px_rgba(15,23,42,0.1)] hover:border-slate-300/80 hover:-translate-y-0.5">
                <p className="text-lg sm:text-xl md:text-2xl font-extrabold text-nak-deep mb-0.5">10+</p>
                <p className="text-[10px] sm:text-xs text-slate-600">Delivery hubs</p>
              </div>
              <div className="rounded-xl sm:rounded-2xl border border-slate-200/80 bg-white/70 backdrop-blur-md px-2 sm:px-3 py-2.5 sm:py-3.5 text-center shadow-[0_2px_12px_-4px_rgba(15,23,42,0.06)] transition-all duration-300 hover:shadow-[0_8px_24px_-4px_rgba(15,23,42,0.1)] hover:border-slate-300/80 hover:-translate-y-0.5">
                <p className="text-lg sm:text-xl md:text-2xl font-extrabold text-nak-deep mb-0.5">24/7</p>
                <p className="text-[10px] sm:text-xs text-slate-600">Support coverage</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl sm:rounded-2xl border border-slate-200/80 bg-white/60 backdrop-blur-md p-4 sm:p-5 shadow-[0_4px_24px_-8px_rgba(15,23,42,0.08)] order-1 lg:order-2">
            <div className="rounded-lg sm:rounded-xl border border-slate-200/60 bg-white/80 backdrop-blur-sm p-3 sm:p-4 mb-3 sm:mb-4">
              <p className="text-[10px] sm:text-xs font-semibold text-slate-700 mb-0.5 sm:mb-1">Global clients</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Supporting enterprises across 15+ countries with unified governance and shared best practices.
              </p>
            </div>
            <div className="space-y-2 sm:space-y-2.5">
              {regions.map((region) => (
                <div
                  key={region.name}
                  className="group rounded-lg sm:rounded-xl border border-slate-200/80 bg-white/70 backdrop-blur-sm px-3 sm:px-4 py-2.5 sm:py-3 transition-all duration-300 hover:shadow-[0_6px_20px_-4px_rgba(15,23,42,0.1)] hover:border-nak-bright/40 hover:-translate-y-0.5"
                >
                  <p className="text-xs sm:text-sm font-semibold text-slate-900">{region.name}</p>
                  <p className="text-[10px] sm:text-xs text-nak-deep mt-0.5">{region.hubs}</p>
                  <p className="text-[11px] sm:text-xs text-slate-600 mt-1 sm:mt-1.5 leading-relaxed">{region.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
