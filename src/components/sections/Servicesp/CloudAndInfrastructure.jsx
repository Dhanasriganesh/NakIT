const pillars = [
  {
    title: 'Cloud strategy & landing zones',
    description:
      'Assess current estate, define target architectures, and design cloud landing zones across AWS, Azure, and GCP.',
  },
  {
    title: 'Migration factory',
    description:
      'Industrialized migration patterns, automation, and playbooks for re‑host, re‑platform, and re‑factor journeys.',
  },
  {
    title: 'Platform engineering',
    description:
      'Self‑service internal platforms, golden paths, and paved roads for developers with strong governance baked in.',
  },
]

export default function CloudAndInfrastructure() {
  return (
    <section className="bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 py-20 grid lg:grid-cols-[1.2fr,1.4fr] gap-12 items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-nak-deep/90 mb-3">
            Cloud & Infrastructure
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Design and operate a cloud foundation you can trust.
          </h2>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-4">
            We build secure, scalable, and automated foundations for your applications—whether you are just
            beginning your cloud journey or optimizing a multi‑cloud estate.
          </p>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
            Engagements span discovery and business case, architecture and reference design, and hands‑on
            implementation using infrastructure‑as‑code, GitOps, and modern observability.
          </p>
        </div>

        <div className="space-y-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 px-5 py-4 hover:border-nak-bright hover:bg-slate-900 transition-colors duration-300"
            >
              <p className="text-sm font-semibold text-white mb-1.5">{pillar.title}</p>
              <p className="text-xs text-slate-400 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

