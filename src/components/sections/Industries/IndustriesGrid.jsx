const industries = [
  {
    name: 'Financial Services',
    summary:
      'Core banking modernization, payments, and digital channels with regulatory‑grade security and resilience.',
  },
  {
    name: 'Healthcare & Life Sciences',
    summary:
      'Patient‑centric platforms, health data interoperability, and secure care delivery models.',
  },
  {
    name: 'Media & Entertainment',
    summary:
      'Streaming platforms, content supply chains, and personalization powered by data and AI.',
  },
  {
    name: 'Energy & Utilities',
    summary:
      'Grid modernization, field mobility, and real‑time analytics for renewables and traditional energy.',
  },
  {
    name: 'Telecommunications',
    summary:
      '5G‑ready networks, OSS/BSS modernization, and cloud‑native service orchestration.',
  },
  {
    name: 'Manufacturing & Industrials',
    summary:
      'Smart factories, connected products, and digital twins across manufacturing and supply chains.',
  },
]

export default function IndustriesGrid() {
  return (
    <section className="bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-nak-deep/90 mb-2">
              Verticals
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Accelerators tuned to your industry reality.
            </h2>
          </div>
          <p className="text-slate-600 text-xs md:text-sm max-w-xl">
            Each industry practice combines consultants, architects, and engineers with years of domain
            experience—reducing ramp‑up time and de‑risking complex initiatives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <article
              key={industry.name}
              className="group rounded-2xl border border-slate-800 bg-slate-950/80 p-5 hover:border-nak-bright hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-4 mb-3">
                <p className="text-sm font-semibold text-white">{industry.name}</p>
                <span className="h-7 w-7 rounded-full bg-gradient-to-br from-nak-bright to-cyan-400 opacity-80 group-hover:opacity-100" />
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{industry.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

