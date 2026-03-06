const items = [
  {
    title: 'Site Reliability Engineering',
    description:
      'SRE teams focused on reliability, capacity, and performance with modern observability and incident management.',
  },
  {
    title: '24x7 Operations',
    description:
      'Follow‑the‑sun operations and L2/L3 support with robust runbooks, SLAs, and continuous improvement loops.',
  },
  {
    title: 'Cost optimization',
    description:
      'FinOps practices, usage analytics, and optimization playbooks to keep cloud and platform spend under control.',
  },
]

export default function ManagedServices() {
  return (
    <section className="bg-white border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-[1.3fr,1.1fr] gap-12 items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-nak-deep/90 mb-3">
            Managed Services
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Operate critical platforms with product‑grade reliability.
          </h2>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-4">
            Our managed services are engineered for modern, cloud‑native stacks—not legacy ticket queues.
            We integrate with your engineering organization, SLAs, and product teams.
          </p>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
            Engagements are structured around SLOs, error budgets, and transparent governance so you always
            know the health and performance of your platforms.
          </p>
        </div>

        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 hover:border-nak-bright transition-colors duration-300"
            >
              <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
              <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

