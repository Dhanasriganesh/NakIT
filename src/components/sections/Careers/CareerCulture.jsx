const points = [
  'Consulting mindset with product‑thinking and engineering depth.',
  'Flat, transparent culture where ideas win over titles.',
  'Continuous learning budgets, certifications, and labs.',
  'Access to complex, multi‑cloud and multi‑domain projects.',
]

export default function CareerCulture() {
  return (
    <section className="bg-slate-50 border-t border-slate-200/70">
      <div className="container-app py-20 grid lg:grid-cols-[1.2fr,1.4fr] gap-10 items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-nak-deep/90 mb-3">
            Culture
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            A consulting home for builders and problem solvers.
          </h2>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed">
            We look for people who love solving ambiguous problems, enjoy working directly with clients, and
            care about craftsmanship in every line of code and every slide they create.
          </p>
        </div>

        <div className="rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-lg shadow-slate-200/40 p-6 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_24px_48px_-12px_rgba(26,73,142,0.12)] hover:border-nak-bright/40 hover:bg-white/85 hover:ring-2 hover:ring-nak-bright/10">
          <ul className="space-y-3 text-sm text-slate-700">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-nak-bright flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

