const benefits = [
  'Competitive compensation with performance‑linked bonuses.',
  'Health benefits and wellness support (regional variations apply).',
  'Learning budgets for conferences, training, and certifications.',
  'Flexible work arrangements and generous time off.',
]

export default function CareerBenefits() {
  return (
    <section className="bg-slate-50 border-t border-slate-200/70">
      <div className="container-app py-14 sm:py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div>
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-nak-deep/90 mb-1.5 sm:mb-2">
              Benefits
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
              Support that matches your ambition.
            </h2>
          </div>
          <p className="text-slate-600 text-[11px] sm:text-xs md:text-sm max-w-xl leading-relaxed">
            We invest in our people for the long term—with benefits, tools, and environments that enable
            deep focus, meaningful impact, and balanced lives.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="rounded-xl sm:rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-lg shadow-slate-200/40 p-4 sm:p-5 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_24px_48px_-12px_rgba(26,73,142,0.15)] hover:border-nak-bright/50 hover:bg-white/85 hover:ring-2 hover:ring-nak-bright/20"
            >
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

