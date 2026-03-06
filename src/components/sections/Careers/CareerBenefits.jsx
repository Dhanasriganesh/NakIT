const benefits = [
  'Competitive compensation with performance‑linked bonuses.',
  'Health benefits and wellness support (regional variations apply).',
  'Learning budgets for conferences, training, and certifications.',
  'Flexible work arrangements and generous time off.',
]

export default function CareerBenefits() {
  return (
    <section className="bg-white border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-nak-deep/90 mb-2">
              Benefits
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Support that matches your ambition.
            </h2>
          </div>
          <p className="text-slate-600 text-xs md:text-sm max-w-xl">
            We invest in our people for the long term—with benefits, tools, and environments that enable
            deep focus, meaningful impact, and balanced lives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 hover:border-nak-bright transition-colors duration-300"
            >
              <p className="text-xs text-slate-200 leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

