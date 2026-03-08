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
    <section className="bg-slate-50 border-t border-slate-200/70">
      <div className="container-app py-14 sm:py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div>
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-nak-deep/90 mb-1.5 sm:mb-2">
              Open Roles
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
              Join our consulting and engineering teams.
            </h2>
          </div>
          <button className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-nak-deep hover:bg-nak-bright text-[11px] sm:text-xs font-semibold text-white shadow-lg shadow-nak-deep/30 transition-colors duration-300 w-full sm:w-auto">
            View all roles
          </button>
        </div>

        <div className="space-y-2.5 sm:space-y-3">
          {roles.map((role) => (
            <div
              key={role.title}
              className="rounded-xl sm:rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-lg shadow-slate-200/40 px-4 sm:px-5 py-3 sm:py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_20px_40px_-12px_rgba(26,73,142,0.15)] hover:border-nak-bright/50 hover:bg-white/85 hover:ring-2 hover:ring-nak-bright/20"
            >
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-semibold text-slate-900">{role.title}</p>
                <p className="text-[11px] sm:text-xs text-slate-600">
                  {role.location} · {role.type}
                </p>
              </div>
              <button className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border border-slate-300/80 bg-white/60 text-[11px] sm:text-xs font-semibold text-slate-700 hover:border-nak-bright hover:text-nak-deep hover:bg-nak-bright/10 transition-all duration-300 shrink-0 self-start sm:self-auto">
                Apply now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

