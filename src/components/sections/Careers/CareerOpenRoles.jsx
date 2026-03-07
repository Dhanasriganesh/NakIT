const roles = [
  {
    title: 'Senior Cloud Architect',
    location: 'Hybrid · Houston / Remote',
    type: 'Full‑time',
  },
  {
    title: 'Lead DevOps / Platform Engineer',
    location: 'Bengaluru · India',
    type: 'Full‑time',
  },
  {
    title: 'Senior IT Strategy Consultant',
    location: 'Charleston · SC',
    type: 'Full‑time',
  },
]

export default function CareerOpenRoles() {
  return (
    <section className="bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-nak-deep/90 mb-2">
              Open Roles
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Join our consulting and engineering teams.
            </h2>
          </div>
          <button className="px-5 py-2.5 rounded-full bg-nak-deep hover:bg-nak-bright text-xs font-semibold text-white shadow-lg shadow-nak-deep/40 transition-colors">
            View all roles
          </button>
        </div>

        <div className="space-y-3">
          {roles.map((role) => (
            <div
              key={role.title}
              className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3 hover:border-nak-bright transition-colors duration-300"
            >
              <div>
                <p className="text-sm font-semibold text-white">{role.title}</p>
                <p className="text-xs text-slate-400">
                  {role.location} · {role.type}
                </p>
              </div>
              <button className="px-4 py-2 rounded-full border border-slate-700 text-xs font-semibold text-slate-100 hover:border-nak-bright hover:text-nak-bright transition-colors">
                Apply now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

