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
    <section className="bg-gradient-to-b from-slate-50 to-white">
      <div className="container-app py-14 sm:py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div>
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-nak-deep/90 mb-1.5 sm:mb-2">
              Verticals
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
              Accelerators tuned to your industry reality.
            </h2>
          </div>
          <p className="text-slate-600 text-[11px] sm:text-xs md:text-sm max-w-xl leading-relaxed">
            Each industry practice combines consultants, architects, and engineers with years of domain
            experience—reducing ramp‑up time and de‑risking complex initiatives.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {industries.map((industry) => (
            <article
              key={industry.name}
              className="group rounded-xl sm:rounded-2xl border border-slate-200/80 bg-white/70 backdrop-blur-md p-3 sm:p-4 shadow-[0_2px_12px_-4px_rgba(15,23,42,0.06)] transition-all duration-300 hover:shadow-[0_12px_32px_-8px_rgba(15,23,42,0.12)] hover:border-slate-300/80 hover:-translate-y-1 hover:bg-white/90"
            >
              <div className="flex items-center justify-between gap-2 sm:gap-3 mb-2 sm:mb-2.5">
                <p className="text-xs sm:text-sm font-semibold text-slate-900 min-w-0">{industry.name}</p>
                <span className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 rounded-full bg-gradient-to-br from-nak-bright to-cyan-400 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
              </div>
              <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">{industry.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
