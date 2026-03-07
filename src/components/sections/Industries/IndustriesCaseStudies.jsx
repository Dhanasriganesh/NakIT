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
    <section className="bg-white border-y border-slate-200/70">
      <div className="max-w-screen-2xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-nak-deep/90 mb-3">
            Case Studies
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Real outcomes across regulated and high‑growth industries.
          </h2>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed">
            Our engagements span modernization of mission‑critical systems, greenfield digital products, and
            long‑term managed services that free internal teams to focus on innovation.
          </p>
        </div>

        <div className="space-y-4">
          {cases.map((item) => (
            <div
              key={item.headline}
              className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 hover:border-nak-bright transition-colors duration-300"
            >
              <p className="text-xs font-semibold text-nak-bright mb-1.5">{item.industry}</p>
              <p className="text-sm font-semibold text-white mb-1.5">{item.headline}</p>
              <p className="text-xs text-slate-400 leading-relaxed">{item.impact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

