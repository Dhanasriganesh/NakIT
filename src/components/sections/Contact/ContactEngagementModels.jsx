const models = [
  {
    title: 'Advisory engagements',
    description:
      'Time‑boxed, outcome‑driven consulting sprints focused on strategy, architecture reviews, and roadmaps.',
  },
  {
    title: 'Delivery squads',
    description:
      'Cross‑functional teams that design, build, and launch digital platforms and products with you.',
  },
  {
    title: 'Managed services',
    description:
      'Long‑term operations, SRE, and enhancement support for critical applications and cloud platforms.',
  },
]

export default function ContactEngagementModels() {
  return (
    <section className="bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-nak-deep/90 mb-3">
            Engagement Models
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Flexible models tailored to your organization.
          </h2>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed">
            Whether you need a short advisory engagement or a long‑term managed service, we structure our
            teams and contracts for clarity, transparency, and shared success.
          </p>
        </div>

        <div className="grid gap-4">
          {models.map((model) => (
            <div
              key={model.title}
              className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 hover:border-nak-bright transition-colors duration-300"
            >
              <p className="text-sm font-semibold text-white mb-1.5">{model.title}</p>
              <p className="text-xs text-slate-400 leading-relaxed">{model.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

