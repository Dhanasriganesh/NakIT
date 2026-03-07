const points = [
  'Consulting mindset with product‑thinking and engineering depth.',
  'Flat, transparent culture where ideas win over titles.',
  'Continuous learning budgets, certifications, and labs.',
  'Access to complex, multi‑cloud and multi‑domain projects.',
]

export default function CareerCulture() {
  return (
    <section className="bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 py-20 grid lg:grid-cols-[1.2fr,1.4fr] gap-10 items-center">
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

        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6">
          <ul className="space-y-3 text-xs text-slate-200">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-nak-bright" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

