const benefits = [
  'Competitive compensation with performance‑linked bonuses.',
  'Health benefits and wellness support (regional variations apply).',
  'Learning budgets for conferences, training, and certifications.',
  'Flexible work arrangements and generous time off.',
]

export default function CareerBenefits() {
  return (
    <section className="bg-slate-50 border-t border-slate-200/70">
      <div className="container-app py-20">
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
              className="rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-lg shadow-slate-200/40 p-5 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_24px_48px_-12px_rgba(26,73,142,0.15)] hover:border-nak-bright/50 hover:bg-white/85 hover:ring-2 hover:ring-nak-bright/20"
            >
              <p className="text-sm text-slate-700 leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

