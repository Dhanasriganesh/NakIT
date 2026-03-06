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
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-[1.4fr,1.2fr] gap-12 items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-blue-700/80 mb-3">
            Global Delivery
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            A global network with a single, unified delivery model.
          </h2>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-6">
            Our teams span onshore, nearshore, and offshore locations, giving you the right blend of time‑zone
            coverage, expertise, and cost efficiency—without adding coordination overhead.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-xs text-slate-300">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3">
              <p className="text-2xl font-extrabold text-blue-400 mb-1">3</p>
              <p className="text-slate-400">Continents</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3">
              <p className="text-2xl font-extrabold text-blue-400 mb-1">10+</p>
              <p className="text-slate-400">Delivery hubs</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3">
              <p className="text-2xl font-extrabold text-blue-400 mb-1">24/7</p>
              <p className="text-slate-400">Support coverage</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 mb-4">
            <p className="text-xs font-semibold text-slate-300 mb-1">Global clients</p>
            <p className="text-sm text-slate-400">
              Supporting enterprises across 15+ countries with unified governance and shared best practices.
            </p>
          </div>
          <div className="space-y-3">
            {regions.map((region) => (
              <div
                key={region.name}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3 hover:border-blue-500/60 transition-colors duration-300"
              >
                <p className="text-sm font-semibold text-white">{region.name}</p>
                <p className="text-xs text-blue-300 mt-0.5">{region.hubs}</p>
                <p className="text-xs text-slate-400 mt-1.5">{region.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

