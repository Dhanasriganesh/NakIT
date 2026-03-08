const cases = [
  {
    industry: 'Financial Services',
    headline: 'Cloud‑native payments platform for a Tier‑1 bank',
    impact: 'Processed 4x transaction volume with 60% faster time‑to‑market for new products.',
  },
  {
    industry: 'Healthcare',
    headline: 'Unified patient data lake for a regional provider',
    impact: 'Reduced clinical reporting timelines from weeks to hours while improving data quality.',
  },
]

export default function IndustriesCaseStudies() {
  return (
    <section className="bg-white">
      <div className="container-app py-14 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr,1.1fr] gap-8 sm:gap-10 items-start">
          <div className="order-2 lg:order-1">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-nak-deep/90 mb-2 sm:mb-3">
              Case Studies
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
              Real outcomes across regulated and high‑growth industries.
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed">
              Our engagements span modernization of mission‑critical systems, greenfield digital products, and
              long‑term managed services that free internal teams to focus on innovation.
            </p>
          </div>

          <div className="space-y-2.5 sm:space-y-3 order-1 lg:order-2">
            {cases.map((item) => (
              <div
                key={item.headline}
                className="group rounded-xl sm:rounded-2xl border border-slate-200/80 bg-white/70 backdrop-blur-md p-3 sm:p-4 shadow-[0_2px_12px_-4px_rgba(15,23,42,0.06)] transition-all duration-300 hover:shadow-[0_12px_32px_-8px_rgba(15,23,42,0.12)] hover:border-nak-bright/40 hover:-translate-y-0.5"
              >
                <p className="text-[10px] sm:text-xs font-semibold text-nak-deep mb-1 sm:mb-1.5">{item.industry}</p>
                <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-1 sm:mb-1.5">{item.headline}</p>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
