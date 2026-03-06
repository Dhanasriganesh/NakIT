const partners = [
  'Global cloud hyperscalers (AWS, Azure, GCP)',
  'Leading observability and security vendors',
  'Core banking and payments platforms',
  'Data, AI, and integration technology providers',
]

export default function IndustriesPartners() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-[1.2fr,1.4fr] gap-10 items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-nak-deep/90 mb-3">
            Ecosystem
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            A partner ecosystem aligned to your stack.
          </h2>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed">
            Our alliances team curates relationships with technology providers across cloud, data, security,
            and industry platforms so we always bring fit‑for‑purpose tooling to each engagement.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6">
          <p className="text-xs text-slate-400 mb-3">
            We remain vendor‑agnostic, focusing on your requirements first. Yet, our deep experience with
            leading platforms accelerates design, implementation, and operations.
          </p>
          <ul className="space-y-2 text-xs text-slate-200">
            {partners.map((partner) => (
              <li key={partner} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-nak-bright" />
                <span>{partner}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

